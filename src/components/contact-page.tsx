import { sanitizePhoneInput, validateContactForm } from "@/lib/contact-validation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Share2, Smartphone } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  COUNTRIES,
  DEFAULT_COUNTRY_CODE,
  getCountry,
  toInternationalNumber,
} from "@/lib/countries";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import contactHeroAsset from "@/assets/contact-us-dubai.webp";
import { SocialLinks } from "@/components/social-links";
import { verifyRecaptcha } from "@/lib/recaptcha.functions";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSd0HaQiOFFyIdq2_LebYqpD_UYcGM2Bz_y0eUchuOjAs2Y3Ng/formResponse";
const RECAPTCHA_SITE_KEY = "6Lc2KAAuAAAAALssXFB0xzHToLRv38Xr-k6vo6ff";
const RATE_LIMIT_KEY = "treeq-contact-submissions";
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_COOLDOWN_MS = 30 * 1000;
const RATE_LIMIT_MAX_SUBMISSIONS = 3;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

function loadRecaptchaScript(): Promise<void> {
  if (window.grecaptcha) return Promise.resolve();
  const existing = document.querySelector<HTMLScriptElement>('script[data-recaptcha="v3"]');
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("recaptcha load failed")), {
        once: true,
      });
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.dataset["recaptcha"] = "v3";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("recaptcha load failed"));
    document.head.appendChild(script);
  });
}

const FIELDS = [
  { name: "entry.1169143568", label: "Full Name", type: "text", autoComplete: "name" },
  { name: "entry.68004886", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "entry.293598536", label: "Email ID", type: "email", autoComplete: "email" },
  { name: "entry.492696793", label: "Subject", type: "text", autoComplete: "off" },
] as const;

const HQ_DIRECTIONS_URL = "https://maps.app.goo.gl/eQew7RTZiWhih2RL9";
const OFFICES = [
  {
    name: "Head Office — Dubai, UAE",
    addressLines: [
      "TreeQ Power Electromechanical Works LLC,",
      "Warehouse -  Al Qusais 3, Dubai, United Arab Emirates",
      "P.O. Box: 239085",
    ],
    embed:
      "https://www.google.com/maps?q=TreeQ%20Power%20Electromechanical%20Works%20LLC%2C%20Al%20Qusais%203%2C%20Dubai%2C%20UAE&output=embed",
    directions: "https://maps.app.goo.gl/eQew7RTZiWhih2RL9",
  },
  {
    name: "Branch Office — Salem, Tamil Nadu, India",
    addressLines: [
      "TreeQ Power Engineering Private Limited",
      "Salem, Tamil Nadu, India - 636204",
    ],
    embed:
      "https://www.google.com/maps?q=11.5727269,78.1599835&z=16&output=embed",
    directions: "https://maps.app.goo.gl/366BFfRc2ZtpEA6q7",
  },
] as const;


export function ContactPage() {
  const [submissionState, setSubmissionState] = useState<"idle" | "submitting" | "success">("idle");
  const [formError, setFormError] = useState("");
  const [callDialogOpen, setCallDialogOpen] = useState(false);
  const [countryCode, setCountryCode] = useState<string>(DEFAULT_COUNTRY_CODE);
  const [phoneDigits, setPhoneDigits] = useState("");
  const selectedCountry = getCountry(countryCode);
  const formRef = useRef<HTMLFormElement>(null);
  const submissionStarted = useRef(false);

  useEffect(() => {
    void loadRecaptchaScript().catch(() => {
      // Verification is retried on submit.
    });
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const validationError = validateContactForm({
      name: String(formData.get("entry.1169143568") ?? ""),
      phone: phoneDigits,
      countryCode,
      countryName: selectedCountry.name,
      email: String(formData.get("entry.293598536") ?? ""),
      subject: String(formData.get("entry.492696793") ?? ""),
      message: String(formData.get("entry.133590711") ?? ""),
    });
    if (validationError) {
      setFormError(validationError);
      return;
    }


    if (String(formData.get("website") ?? "").trim()) {
      submissionStarted.current = false;
      setFormError("");
      setSubmissionState("success");
      return;
    }

    const now = Date.now();
    let recentSubmissions: number[] = [];

    try {
      const stored = JSON.parse(window.localStorage.getItem(RATE_LIMIT_KEY) ?? "[]");
      if (Array.isArray(stored)) {
        recentSubmissions = stored.filter(
          (timestamp): timestamp is number =>
            typeof timestamp === "number" && now - timestamp < RATE_LIMIT_WINDOW_MS,
        );
      }
    } catch {
      recentSubmissions = [];
    }

    const latestSubmission = recentSubmissions.at(-1);
    if (
      (latestSubmission !== undefined && now - latestSubmission < RATE_LIMIT_COOLDOWN_MS) ||
      recentSubmissions.length >= RATE_LIMIT_MAX_SUBMISSIONS
    ) {
      submissionStarted.current = false;
      setFormError(
        "Please wait before sending another enquiry. For urgent support, call +971 58 565 4226 or +971 55 948 9080.",
      );
      return;
    }

    setFormError("");
    setSubmissionState("submitting");

    void (async () => {
      try {
        await loadRecaptchaScript();
        const grecaptcha = window.grecaptcha;
        if (!grecaptcha) throw new Error("reCAPTCHA unavailable");

        const token = await new Promise<string>((resolve, reject) => {
          grecaptcha.ready(() => {
            grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "contact" }).then(resolve, reject);
          });
        });

        const { verified, reason } = await verifyRecaptcha({ data: { token } });
        if (!verified) {
          setSubmissionState("idle");
          setFormError(
            reason === "invalid-key" || reason === "unknown"
              ? "Our spam check is temporarily unavailable. Please call +971 58 565 4226 or +971 55 948 9080, or try again shortly."
              : "We could not verify this submission. Please try again or call +971 58 565 4226 or +971 55 948 9080.",
          );
          return;
        }

        try {
          window.localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify([...recentSubmissions, Date.now()]));
        } catch {
          // Submission remains available when browser storage is disabled.
        }

        submissionStarted.current = true;
        form.submit();
      } catch {
        setSubmissionState("idle");
        setFormError(
          "The spam check could not be completed. Please try again or call +971 58 565 4226 or +971 55 948 9080.",
        );
      }
    })();
  };

  return (
    <>
      {/* Introduction */}
      <section className="contact-hero reveal">
        <div className="zoho-shell grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
          <div>
            <p className="zoho-kicker">Contact TreeQ Power</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[1.05]">
              Let’s discuss your technical requirement.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Share the system, site and support needed. Our team in Dubai reviews every
              enquiry and responds with the relevant engineering, service or solution scope.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="button" onClick={() => setCallDialogOpen(true)}>
                <Phone /> Call now
              </Button>
              <Button variant="outline" asChild>
                <a href={HQ_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
          <img
            src={contactHeroAsset}
            alt="Dubai skyline at dusk with Burj Khalifa and highway light trails"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="eager"
          />
        </div>
      </section>

      <Dialog open={callDialogOpen} onOpenChange={setCallDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Call TreeQ Power</DialogTitle>
            <DialogDescription>Choose which number you’d like to call.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <Button asChild size="lg" className="w-full">
              <a href="tel:+971585654226">
                <Phone /> +971 58 565 4226
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full">
              <a href="tel:+971559489080">
                <Phone /> +971 55 948 9080
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Form + details */}
      <section className="reveal border-t py-16 lg:py-24">
        <div className="zoho-shell grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="zoho-kicker">Start an enquiry</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium lg:text-4xl">
              Tell us about the project.
            </h2>
            {submissionState === "success" ? (
              <div className="mt-8 rounded-xl border bg-muted p-8" role="status">
                <h3 className="text-xl font-semibold">Thank you — your enquiry has been sent.</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The TreeQ Power team will review your requirement and get back to you during
                  working hours. For urgent support, call{" "}
                  <a href="tel:+971585654226" className="font-medium underline">
                    +971 58 565 4226
                  </a>{" "}
                  or{" "}
                  <a href="tel:+971559489080" className="font-medium underline">
                    +971 55 948 9080
                  </a>
                  .
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => {
                    submissionStarted.current = false;
                    setFormError("");
                    setSubmissionState("idle");
                    setCountryCode(DEFAULT_COUNTRY_CODE);
                    setPhoneDigits("");
                    formRef.current?.reset();
                  }}
                >
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                action={FORM_ACTION}
                method="post"
                target="contact-form-target"
                className="relative mt-8 grid gap-5"
                onSubmit={handleSubmit}
              >
                <label
                  aria-hidden="true"
                  className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
                >
                  Website
                  <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                </label>
                <div className="grid gap-5">
                  {FIELDS.map((f) =>
                    f.type === "tel" ? (
                      <div key={f.name} className="grid gap-2 text-sm font-medium">
                        <label htmlFor="contact-phone-number">
                          {f.label} <span aria-hidden="true" className="text-destructive">*</span><span className="sr-only">(required)</span>
                        </label>
                        <div className="flex items-stretch gap-2">
                          <Select value={countryCode} onValueChange={setCountryCode}>
                            <SelectTrigger
                              aria-label="Country code"
                              className="h-11 w-[126px] flex-none bg-background px-2.5"
                            >
                              <span className="flex min-w-0 items-center gap-1.5">
                                <span
                                  aria-hidden="true"
                                  className={`fi fi-${countryCode} flex-none rounded-[2px]`}
                                />
                                <span className="truncate">{selectedCountry.dial}</span>
                              </span>
                            </SelectTrigger>
                            <SelectContent className="max-h-80">
                              {COUNTRIES.map((c) => (
                                <SelectItem key={c.code} value={c.code}>
                                  <span className="flex w-full items-center gap-2">
                                    <span
                                      aria-hidden="true"
                                      className={`fi fi-${c.code} flex-none rounded-[2px]`}
                                    />
                                    <span className="truncate">{c.name}</span>
                                    <span className="ml-auto pl-3 text-xs text-muted-foreground">
                                      {c.dial}
                                    </span>
                                  </span>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <input
                            id="contact-phone-number"
                            type={f.type}
                            autoComplete={f.autoComplete}
                            inputMode="tel"
                            placeholder="58 565 4226"
                            required
                            value={phoneDigits}
                            onChange={(event) => setPhoneDigits(sanitizePhoneInput(event.target.value))}
                            className="h-11 w-full min-w-0 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                          />
                        </div>
                        <input
                          type="hidden"
                          name={f.name}
                          value={toInternationalNumber(selectedCountry.dial, phoneDigits)}
                        />
                      </div>
                    ) : (
                      <label key={f.name} className="grid gap-2 text-sm font-medium">
                        <span>{f.label} <span aria-hidden="true" className="text-destructive">*</span><span className="sr-only">(required)</span></span>
                        <input
                          name={f.name}
                          type={f.type}
                          autoComplete={f.autoComplete}
                          required
                          className="h-11 w-full rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                        />
                      </label>
                    ),
                  )}
                </div>
                <label className="grid gap-2 text-sm font-medium">
                  <span>Message <span aria-hidden="true" className="text-destructive">*</span><span className="sr-only">(required)</span></span>
                  <textarea
                    name="entry.133590711"
                    required
                    rows={6}
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={submissionState === "submitting"}
                  >
                    {submissionState === "submitting" ? "Submitting…" : "Submit enquiry"}
                    
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Submissions go directly to the TreeQ Power team. Nothing is stored on this
                    website. Protected by Google reCAPTCHA — Google’s{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                  {formError && (
                    <p className="mt-3 text-sm font-medium text-destructive" role="alert">
                      {formError}
                    </p>
                  )}
                </div>
              </form>
            )}
            <iframe
              name="contact-form-target"
              title="Form submission"
              className="hidden"
              onLoad={() => {
                if (submissionStarted.current) {
                  submissionStarted.current = false;
                  setSubmissionState("success");
                }
              }}
            />
          </div>

          <aside className="grid content-start gap-6">
            <div className="rounded-xl border p-6">
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                <h3 className="font-semibold">Location</h3>
              </div>
              <div className="mt-3 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <div>
                  <p>
                    <span className="font-medium text-foreground">Head Office</span>
                    <br />
                    TreeQ Power Electromechanical Works LLC,
                    <br />
                    Warehouse -  Al Qusais 3, Dubai, United Arab Emirates
                    <br />
                    P.O. Box: 239085
                  </p>
                  <Button variant="link" className="mt-1 h-auto p-0" asChild>
                    <a href={HQ_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                      View HQ on Maps
                    </a>
                  </Button>
                </div>
                <div>
                  <p>
                    <span className="font-medium text-foreground">Branch Office</span>
                    <br />
                    TreeQ Power Engineering Private Limited
                    <br />
                    Salem, Tamil Nadu, India - 636204.
                  </p>
                  <Button variant="link" className="mt-1 h-auto p-0" asChild>
                    <a
                      href={OFFICES[1].directions}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Branch Office on Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-xl border p-6">
              <div className="flex items-center gap-2">
                <Clock className="size-5 text-primary" />
                <h3 className="font-semibold">Working hours</h3>
              </div>
              <dl className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <div className="flex justify-between gap-4">
                  <dt>Monday – Saturday</dt>
                  <dd className="font-medium text-foreground">08:00 AM – 05:00 PM</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sunday</dt>
                  <dd className="font-medium text-foreground">Emergency only</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-xl border p-6">
              <div className="flex items-center gap-2">
                <Share2 className="size-5 text-primary" />
                <h3 className="font-semibold">Connect with us</h3>
              </div>
              <div className="mt-5">
                <SocialLinks className="text-foreground" />
              </div>
            </div>
          </aside>

        </div>

        <div className="zoho-shell mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <div className="flex items-center gap-2">
              <Phone className="size-5 text-primary" />
              <h3 className="font-semibold">Call us</h3>
            </div>
            <div className="mt-3 grid gap-2 text-sm">
              <a href="tel:+971585654226" className="flex items-center gap-2 font-medium text-primary underline underline-offset-4 hover:opacity-80">
                <Smartphone className="size-4 flex-none text-primary" aria-hidden="true" />
                Mobile: +971 58 565 4226
              </a>
              <a href="tel:+971559489080" className="flex items-center gap-2 font-medium text-primary underline underline-offset-4 hover:opacity-80">
                <Smartphone className="size-4 flex-none text-primary" aria-hidden="true" />
                Mobile: +971 55 948 9080
              </a>
            </div>
          </div>
          <div className="rounded-xl border p-6">
            <div className="flex items-center gap-2">
              <Mail className="size-5 text-primary" />
              <h3 className="font-semibold">Email us</h3>
            </div>
            <div className="mt-3 grid gap-2 text-sm">
              <a
                href="mailto:info@treeqpower.com"
                className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
              >
                info@treeqpower.com
              </a>
              <a
                href="mailto:raj@treeqpower.com"
                className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
              >
                raj@treeqpower.com
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Offices */}
      <section className="reveal border-t py-16 lg:py-20">
        <div className="zoho-shell">
          <div>
            <p className="zoho-kicker">Find us</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium lg:text-4xl">
              Our Offices
            </h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {OFFICES.map((office) => (
              <div key={office.name} className="overflow-hidden rounded-2xl border">
                <div className="relative">
                  <iframe
                    src={office.embed}
                    title={`TreeQ Power location map — ${office.name}`}
                    className="aspect-[16/10] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <a
                    href={office.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute left-4 top-4 rounded-md border bg-background px-3 py-1.5 text-xs font-medium shadow-md"
                  >
                    Open in Maps
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold">{office.name}</h3>
                  <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 flex-none text-primary" aria-hidden="true" />
                    <span>
                      {office.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </p>
                  <Button className="mt-4 w-full" asChild>
                    <a href={office.directions} target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
