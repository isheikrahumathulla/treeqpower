import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  Building2,
  Cable,
  Check,
  ChevronDown,
  CircuitBoard,
  Factory,
  Gauge,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  ScanLine,
  ShieldCheck,
  SunMedium,
  Wrench,
  Zap,
} from "lucide-react";

import logoAsset from "@/assets/treeqpower-logo.png.asset.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";

const navGroups = [
  { label: "About", items: ["Company overview", "Why TreeQ Power", "Certifications", "Clients & partners"] },
  { label: "Services", items: ["Engineering & design", "Field & maintenance", "Testing & inspection", "Sustainability", "Asset integrity"] },
  { label: "Solutions", items: ["Power systems", "Automation & control", "Power quality", "Building technology"] },
  { label: "Industries", items: ["Oil & gas", "Industrial", "Commercial", "Infrastructure", "Utilities"] },
] as const;

const serviceGroups = [
  {
    number: "01",
    title: "Engineering",
    description: "Engineering support for power systems, substations, protection, power quality and sustainable building performance.",
    items: ["Engineering & Design", "Consultancy Services"],
    icon: CircuitBoard,
  },
  {
    number: "02",
    title: "Field & Maintenance",
    description: "Installation, testing, commissioning, operation and maintenance support across electrical equipment and systems.",
    items: ["Electrical Site Services", "Electronics Repair & Maintenance", "Generator & Load Bank Services"],
    icon: Wrench,
  },
  {
    number: "03",
    title: "Testing & Inspection",
    description: "Specialist testing equipment, inspection disciplines and fault-location capability for critical electrical assets.",
    items: ["Testing Equipment Rental", "Third-Party Inspection", "Cable Fault Location"],
    icon: ScanLine,
  },
  {
    number: "04",
    title: "Sustainability",
    description: "Energy performance, efficient design, auditing, earthing and lightning protection for safer, lower-impact facilities.",
    items: ["Green Energy & Sustainable Design", "Earthing & Lightning Protection"],
    icon: SunMedium,
  },
  {
    number: "05",
    title: "Asset Integrity",
    description: "Draft service family for risk-informed inspection and asset lifecycle planning. Scope requires technical approval.",
    items: ["Risk-Based Inspection", "Integrity Assessment", "Inspection Planning", "Integrity Management"],
    icon: ShieldCheck,
    draft: true,
  },
] as const;

const solutions = [
  { title: "Power Systems", text: "HV and MV switchgear, transformers, LV switchgear, panels and busduct systems.", icon: Zap },
  { title: "Automation & Control", text: "PLC, SCADA, DCS, drives, soft starters, instrumentation and control panels.", icon: Gauge },
  { title: "Power Quality", text: "AC and DC UPS systems, industrial batteries, chargers and power-quality engineering.", icon: BatteryCharging },
  { title: "Building Technology", text: "HVAC, lighting controls, ELV, fire systems and renewable-energy solutions.", icon: Building2 },
] as const;

const industries = [
  { name: "Oil & Gas", icon: Layers3 },
  { name: "Industrial", icon: Factory },
  { name: "Commercial", icon: Building2 },
  { name: "Infrastructure", icon: Cable },
  { name: "Utilities", icon: Zap },
] as const;

const faqs = [
  { q: "What types of electrical services does TreeQ Power provide?", a: "TreeQ Power’s supplied scope covers engineering and design support, electrical field services, testing and inspection, cable fault location, equipment repair, generator and load-bank services, and sustainability-focused services." },
  { q: "Can TreeQ Power support high-voltage and medium-voltage systems?", a: "The supplied technical material describes field services for substation equipment across HV, MV and LV systems, plus cable fault location and repair services up to 132 kV. Final project suitability is confirmed during technical review." },
  { q: "What engineering studies are available?", a: "The documented engineering scope includes load flow, short-circuit, protection coordination, harmonic and power-quality analysis, voltage-drop calculations, arc-flash studies, equipment sizing and earthing-grid design." },
  { q: "Does TreeQ Power offer testing equipment rental?", a: "Yes. The supplied inventory includes primary and secondary injection equipment, power-quality analyzers, thermal cameras, high-voltage test equipment, battery load banks, circuit-breaker test equipment and cable-fault test equipment." },
  { q: "Which industries does TreeQ Power serve?", a: "The approved information architecture identifies oil and gas, industrial, commercial, infrastructure and utilities. Detailed sector claims remain draft until client review." },
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function DraftTag() {
  return <span className="inline-flex border border-warning/35 bg-warning-soft px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-warning">Draft · client review</span>;
}

function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between gap-5">
        <button aria-label="Go to top" className="cursor-pointer" onClick={() => scrollToSection("top")}>
          <img src={logoAsset.url} alt="TreeQ Power Electromechanical" className="h-auto w-52 sm:w-60" />
        </button>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(group.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Button
                variant="ghost"
                className="h-12 gap-1 px-3 text-sm"
                aria-expanded={openMenu === group.label}
                onFocus={() => setOpenMenu(group.label)}
                onClick={() => scrollToSection(group.label.toLowerCase())}
              >
                {group.label}<ChevronDown className="size-3.5" />
              </Button>
              {openMenu === group.label && (
                <div className="absolute left-0 top-full w-72 border border-border bg-popover p-2 shadow-xl">
                  <p className="px-3 pb-2 pt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Explore on this page</p>
                  {group.items.map((item) => (
                    <button
                      key={item}
                      className="flex w-full cursor-pointer items-center justify-between px-3 py-2.5 text-left text-sm font-medium text-popover-foreground transition-colors hover:bg-accent"
                      onClick={() => { scrollToSection(group.label.toLowerCase()); setOpenMenu(null); }}
                    >
                      {item}<ArrowRight className="size-3.5 text-primary" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button variant="ghost" className="h-12 px-3" onClick={() => scrollToSection("projects")}>Projects</Button>
          <Button variant="ghost" className="h-12 px-3" onClick={() => scrollToSection("resources")}>Resources</Button>
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Button size="lg" onClick={() => scrollToSection("contact")}>Start an enquiry<ArrowRight /></Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open navigation"><Menu /></Button>
          </SheetTrigger>
          <SheetContent className="w-[92%] overflow-y-auto sm:max-w-md">
            <SheetHeader className="border-b border-border pb-5 text-left">
              <SheetTitle><img src={logoAsset.url} alt="TreeQ Power" className="w-52" /></SheetTitle>
              <SheetDescription>Electrical engineering, services and solutions.</SheetDescription>
            </SheetHeader>
            <nav className="py-6" aria-label="Mobile navigation">
              {navGroups.map((group) => (
                <div key={group.label} className="border-b border-border py-4">
                  <SheetClose asChild><Button variant="ghost" className="w-full justify-between px-0 text-base" onClick={() => scrollToSection(group.label.toLowerCase())}>{group.label}<ArrowRight /></Button></SheetClose>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{group.items.join(" · ")}</p>
                </div>
              ))}
              <SheetClose asChild><Button className="mt-7 w-full" size="lg" onClick={() => scrollToSection("contact")}>Start an enquiry</Button></SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
      <p className={`section-label ${light ? "text-primary-bright" : "text-primary"}`}>{eyebrow}</p>
      <div>
        <h2 className={`max-w-4xl font-display text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl ${light ? "text-dark-foreground" : "text-foreground"}`}>{title}</h2>
        {body && <p className={`mt-6 max-w-2xl text-base leading-7 ${light ? "text-dark-muted" : "text-muted-foreground"}`}>{body}</p>}
      </div>
    </div>
  );
}

function ImagePlaceholder({ label, guidance, dark = false }: { label: string; guidance: string; dark?: boolean }) {
  return (
    <div className={`image-placeholder ${dark ? "border-dark-border bg-dark-elevated text-dark-muted" : "border-border bg-muted text-muted-foreground"}`}>
      <ScanLine className="size-7" />
      <div>
        <p className={`text-sm font-semibold ${dark ? "text-dark-foreground" : "text-foreground"}`}>{label}</p>
        <p className="mt-1 max-w-sm text-xs leading-5">{guidance}</p>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <div className="technical-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="page-shell relative grid min-h-[calc(100svh-5rem)] items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div className="max-w-4xl">
          <div className="mb-7 flex flex-wrap items-center gap-3"><span className="status-dot" /> <span className="section-label text-muted-foreground">Dubai, United Arab Emirates</span></div>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.75rem]">
            Power systems.<br /><span className="text-primary">Engineered end to end.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">TreeQ Power supports electrical and electromechanical projects from engineering and supply through installation, testing, commissioning and maintenance.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" className="h-12 px-6" onClick={() => scrollToSection("services")}>Explore capabilities<ArrowDown /></Button>
            <Button size="lg" variant="outline" className="h-12 px-6" onClick={() => scrollToSection("contact")}>Discuss a requirement<ArrowRight /></Button>
          </div>
        </div>
        <div className="relative lg:pl-8">
          <ImagePlaceholder label="TreeQ Power project photography" guidance="Replace with an approved, high-resolution image showing a real TreeQ Power installation, engineer or electrical asset." />
          <div className="scope-panel">
            <p className="section-label text-primary">Documented technical scope</p>
            <div className="mt-5 grid grid-cols-3 divide-x divide-border">
              <div className="pr-4"><strong>400 kV</strong><span>Substation field services</span></div>
              <div className="px-4"><strong>132 kV</strong><span>Cable fault location</span></div>
              <div className="pl-4"><strong>33 kV</strong><span>MV systems & testing</span></div>
            </div>
          </div>
        </div>
        <button className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer text-muted-foreground lg:block" onClick={() => scrollToSection("about")} aria-label="Continue to company overview"><ArrowDown /></button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 lg:py-32">
      <div className="page-shell">
        <SectionHeading eyebrow="Company overview" title="One integrated view of the electrical asset lifecycle." body="From initial system studies to on-site support, TreeQ Power brings together technical disciplines that are often delivered separately." />
        <div className="mt-16 grid gap-px bg-border lg:grid-cols-3">
          {[{n:"01",t:"Understand",d:"Survey, investigate and model the system before work begins."},{n:"02",t:"Deliver",d:"Engineer, supply, install, test and commission coordinated solutions."},{n:"03",t:"Sustain",d:"Maintain, inspect, diagnose and improve assets through their operating life."}].map((item) => (
            <article key={item.n} className="bg-background p-7 lg:p-9"><span className="font-mono text-xs text-primary">{item.n}</span><h3 className="mt-10 font-display text-2xl font-semibold">{item.t}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.d}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  const service = serviceGroups[active] ?? serviceGroups[0];
  const Icon = service.icon;

  return (
    <section id="services" className="scroll-mt-20 bg-dark py-24 lg:py-32">
      <div className="page-shell">
        <SectionHeading eyebrow="Services" title="Specialist capability, coordinated around the job." body="Five service families organize TreeQ Power’s documented scope for clearer project planning and delivery." light />
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="divide-y divide-dark-border border-y border-dark-border">
            {serviceGroups.map((item, index) => (
              <button key={item.title} onClick={() => setActive(index)} className={`group flex w-full cursor-pointer items-center justify-between py-5 text-left transition-colors ${active === index ? "text-primary-bright" : "text-dark-muted hover:text-dark-foreground"}`}>
                <span className="flex items-center gap-5"><span className="font-mono text-xs">{item.number}</span><span className="font-display text-xl font-medium sm:text-2xl">{item.title}</span></span>
                <ArrowRight className={`size-5 transition-transform ${active === index ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
              </button>
            ))}
          </div>
          <article className="border border-dark-border bg-dark-elevated p-7 sm:p-10 lg:min-h-[450px]">
            <div className="flex items-start justify-between"><Icon className="size-10 text-primary-bright" />{"draft" in service && service.draft && <DraftTag />}</div>
            <h3 className="mt-16 font-display text-3xl font-semibold text-dark-foreground sm:text-4xl">{service.title}</h3>
            <p className="mt-5 max-w-xl leading-7 text-dark-muted">{service.description}</p>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => <li key={item} className="flex items-start gap-3 border-t border-dark-border pt-3 text-sm text-dark-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary-bright" />{item}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-20 py-24 lg:py-32">
      <div className="page-shell">
        <SectionHeading eyebrow="Solutions" title="Systems that connect power, control and the built environment." />
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {solutions.map(({ title, text, icon: Icon }, index) => (
            <article key={title} className="solution-card group bg-background p-7 sm:p-10">
              <div className="flex items-center justify-between"><Icon className="size-8 text-primary" /><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div>
              <h3 className="mt-16 font-display text-3xl font-semibold">{title}</h3><p className="mt-4 max-w-md leading-7 text-muted-foreground">{text}</p>
              <div className="mt-9 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">Capability overview <ArrowRight className="transition-transform group-hover:translate-x-1" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 border-y border-border bg-secondary py-24 lg:py-32">
      <div className="page-shell">
        <div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="Industries" title="Built for complex operating environments." /><DraftTag /></div>
        <p className="mt-8 max-w-2xl text-sm leading-6 text-muted-foreground">Industry descriptions are draft positioning based on the approved site structure and require client confirmation before launch.</p>
        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {industries.map(({ name, icon: Icon }, index) => <article key={name} className="group border border-border bg-background p-6"><Icon className="size-6 text-primary" /><span className="mt-16 block font-mono text-[10px] text-muted-foreground">0{index+1}</span><h3 className="mt-2 font-display text-xl font-semibold">{name}</h3></article>)}
        </div>
      </div>
    </section>
  );
}

function Lifecycle() {
  const steps = ["Survey & define", "Engineer & design", "Supply & assemble", "Install & commission", "Maintain & improve"];
  return (
    <section className="py-24 lg:py-32">
      <div className="page-shell"><SectionHeading eyebrow="Delivery lifecycle" title="Continuity from first study to long-term support." />
        <div className="mt-16 overflow-x-auto pb-4"><ol className="flex min-w-[920px] border-t border-border">{steps.map((step, index) => <li key={step} className="relative flex-1 pt-8 pr-8"><span className="absolute -top-2 left-0 size-4 border-4 border-background bg-primary" /><span className="font-mono text-xs text-primary">0{index+1}</span><h3 className="mt-4 font-display text-xl font-semibold">{step}</h3></li>)}</ol></div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-dark py-24 lg:py-32">
      <div className="page-shell">
        <div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="Projects" title="A portfolio grounded in real project evidence." light /><DraftTag /></div>
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
          <ImagePlaceholder dark label="Project image" guidance="Client to provide an approved photograph from the actual project, with image rights confirmed." />
          <div className="min-w-0 border border-dark-border p-7 text-dark-foreground sm:p-9">
            <p className="section-label text-primary-bright">Project record placeholder</p>
            <dl className="mt-8 divide-y divide-dark-border text-sm">{["Project name","Client name","Location","Industry","Project type","Year","Scope of work","Services","Solutions","Results / outcomes"].map((field) => <div key={field} className="grid min-w-0 grid-cols-[0.9fr_1.1fr] gap-4 py-3"><dt className="text-dark-muted">{field}</dt><dd className="min-w-0 break-words">[CONTENT TO BE PROVIDED]</dd></div>)}</dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className="scroll-mt-20 py-24 lg:py-32">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div><p className="section-label text-primary">FAQs</p><h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">Direct answers to technical questions.</h2><p className="mt-6 leading-7 text-muted-foreground">Answers are based on supplied TreeQ Power service content. Project-specific requirements remain subject to technical review.</p></div>
        <Accordion type="single" collapsible className="border-t border-border">{faqs.map((faq,index) => <AccordionItem key={faq.q} value={`faq-${index}`}><AccordionTrigger className="py-6 text-left text-base sm:text-lg">{faq.q}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-sm leading-7 text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}</Accordion>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-secondary py-24 lg:py-32">
      <div className="page-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div><p className="section-label text-primary">Contact</p><h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">Bring us the requirement. We’ll start with the system.</h2>
          <div className="mt-10 space-y-5 text-sm"><a href="tel:+971559489080" className="flex items-start gap-4 hover:text-primary"><Phone className="mt-0.5 size-5 text-primary" />+971 55 948 9080</a><a href="mailto:raj@treeqpower.com" className="flex items-start gap-4 hover:text-primary"><Mail className="mt-0.5 size-5 text-primary" />raj@treeqpower.com</a><p className="flex items-start gap-4 leading-6"><MapPin className="mt-0.5 size-5 shrink-0 text-primary" />TreeQ Power Electromechanical Works<br />Al Qusais Industrial Area, Al Twar Fourth<br />Dubai, United Arab Emirates</p></div>
          <p className="mt-8 border-l-2 border-warning pl-4 text-xs leading-5 text-muted-foreground">Contact details are sourced from the current TreeQ Power website and require final client confirmation.</p>
        </div>
        <form className="border border-border bg-background p-6 sm:p-9" onSubmit={(event) => event.preventDefault()}>
          <div className="flex flex-wrap items-center justify-between gap-3"><div><h3 className="font-display text-2xl font-semibold">Project enquiry</h3><p className="mt-2 text-sm text-muted-foreground">Tell us what the system needs to do.</p></div><span className="text-xs font-medium text-muted-foreground">Google Form connection pending</span></div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2"><label className="form-field">Name<Input required placeholder="Your name" /></label><label className="form-field">Company<Input placeholder="Company name" /></label><label className="form-field">Work email<Input required type="email" placeholder="name@company.com" /></label><label className="form-field">Phone<Input type="tel" placeholder="+971" /></label><label className="form-field sm:col-span-2">Area of interest<select className="h-11 w-full border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" defaultValue=""><option value="" disabled>Select a capability</option><option>Engineering & Design</option><option>Field & Maintenance</option><option>Testing & Inspection</option><option>Sustainability</option><option>Asset Integrity</option><option>Solutions</option></select></label><label className="form-field sm:col-span-2">Requirement<Textarea className="min-h-32" placeholder="Describe the system, site or support required" /></label></div>
          <Button disabled className="mt-6 h-12 w-full sm:w-auto" type="submit">Submission available after form connection<ArrowRight /></Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark py-14 text-dark-foreground"><div className="page-shell"><div className="grid gap-10 border-b border-dark-border pb-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]"><div><img src={logoAsset.url} alt="TreeQ Power Electromechanical" className="w-64 bg-dark-foreground p-3" /><p className="mt-5 max-w-sm text-sm leading-6 text-dark-muted">Electrical engineering, electromechanical services and integrated solutions from Dubai, UAE.</p></div>{[{h:"Capabilities",l:["Services","Solutions","Industries"]},{h:"Company",l:["About","Projects","Resources"]},{h:"Contact",l:["+971 55 948 9080","raj@treeqpower.com","Mon–Fri · 08:00–17:00"]}].map((col) => <div key={col.h}><h3 className="section-label text-primary-bright">{col.h}</h3><ul className="mt-5 space-y-3 text-sm text-dark-muted">{col.l.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div><div className="flex flex-wrap justify-between gap-4 pt-7 text-xs text-dark-muted"><p>© 2026 TreeQ Power Electromechanical Works.</p><p>Homepage draft · Content subject to client approval</p></div></div></footer>
  );
}

export function HomePage() {
  return <><Header /><main><Hero /><About /><Services /><Solutions /><Industries /><Lifecycle /><Projects /><Resources /><Contact /></main><Footer /></>;
}