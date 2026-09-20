import { useRef, useState } from "react";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lib } from "@/lib/image-library";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSd0HaQiOFFyIdq2_LebYqpD_UYcGM2Bz_y0eUchuOjAs2Y3Ng/formResponse";

const FIELDS = [
  { name: "entry.1169143568", label: "Full Name", type: "text", autoComplete: "name" },
  { name: "entry.68004886", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "entry.293598536", label: "Email ID", type: "email", autoComplete: "email" },
  { name: "entry.492696793", label: "Subject", type: "text", autoComplete: "off" },
] as const;

const DIRECTIONS_URL = "https://maps.app.goo.gl/soWjkYShhk93nzYT9";
const MAP_EMBED =
  "https://www.google.com/maps?q=TreeQ%20Power%20Electromechanical%20Works%20LLC%2C%20Al%20Qusais%203%2C%20Dubai%2C%20UAE&output=embed";

export function ContactPage() {
  const [submissionState, setSubmissionState] = useState<"idle" | "submitting" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const submissionStarted = useRef(false);

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
              <Button asChild>
                <a href="tel:+971559489080">
                  <Phone /> +971 55 948 9080
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  Get Directions <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
          <img
            src={lib.dubaiTowers}
            alt="Dubai commercial towers near TreeQ Power's Al Qusais base"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            loading="eager"
          />
        </div>
      </section>

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
                    setSubmissionState("idle");
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
                className="mt-8 grid gap-5"
                onSubmit={() => {
                  submissionStarted.current = true;
                  setSubmissionState("submitting");
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {FIELDS.map((f) => (
                    <label key={f.name} className="grid gap-2 text-sm font-medium">
                      {f.label} <span className="sr-only">(required)</span>
                      <input
                        name={f.name}
                        type={f.type}
                        autoComplete={f.autoComplete}
                        required
                        className="h-11 w-full rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                      />
                    </label>
                  ))}
                </div>
                <label className="grid gap-2 text-sm font-medium">
                  Message <span className="sr-only">(required)</span>
                  <textarea
                    name="entry.133590711"
                    required
                    rows={6}
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <div>
                  <Button type="submit" size="lg" disabled={submissionState === "submitting"}>
                    {submissionState === "submitting" ? "Submitting…" : "Submit enquiry"}
                    {submissionState !== "submitting" && <ArrowRight />}
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Submissions go directly to the TreeQ Power team. Nothing is stored on this
                    website.
                  </p>
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
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                TreeQ Power Electromechanical Works LLC
                <br />
                Warehouse — Al Qusais 3<br />
                Dubai, United Arab Emirates
              </p>
              <Button variant="link" className="mt-2 h-auto p-0" asChild>
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  View location on Google Maps <ArrowRight />
                </a>
              </Button>
            </div>
            <div className="rounded-xl border p-6">
              <div className="flex items-center gap-2">
                <Clock className="size-5 text-primary" />
                <h3 className="font-semibold">Working hours</h3>
              </div>
              <dl className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <div className="flex justify-between gap-4">
                  <dt>Mon – Fri</dt>
                  <dd className="font-medium text-foreground">08:00 AM – 05:00 PM</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sat – Sun</dt>
                  <dd className="font-medium text-foreground">Emergency only</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-xl border p-6">
              <div className="flex items-center gap-2">
                <Phone className="size-5 text-primary" />
                <h3 className="font-semibold">Call us</h3>
              </div>
              <a
                href="tel:+971559489080"
                className="mt-3 block text-lg font-semibold tracking-tight"
              >
                +971 55 948 9080
              </a>
              <p className="mt-1 text-sm text-muted-foreground">
                Speak directly with the TreeQ Power team.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="reveal border-t py-16 lg:py-20">
        <div className="zoho-shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="zoho-kicker">Find us</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium lg:text-4xl">
                Al Qusais 3, Dubai
              </h2>
            </div>
            <Button variant="outline" asChild>
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                Get Directions <ArrowRight />
              </a>
            </Button>
          </div>
          <iframe
            src={MAP_EMBED}
            title="TreeQ Power location map — Al Qusais 3, Dubai"
            className="mt-8 aspect-[16/7] w-full rounded-2xl border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
