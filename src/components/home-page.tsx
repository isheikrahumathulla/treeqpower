import { useState } from "react";
import { ArrowDown, ArrowRight, BatteryCharging, Building2, Cable, Check, ChevronDown, CircuitBoard, Factory, Gauge, Mail, MapPin, Menu, Minus, Phone, Plus, ScanLine, ShieldCheck, SunMedium, Wrench, Zap } from "lucide-react";
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

const capabilities = [
  { title: "Engineering", text: "Power-system studies, substations, protection, power quality and sustainable building performance.", icon: CircuitBoard, items: ["Engineering & Design", "Consultancy Services"] },
  { title: "Field & Maintenance", text: "Installation, testing, commissioning, operation and maintenance across electrical systems.", icon: Wrench, items: ["Electrical Site Services", "Electronics Repair", "Generator & Load Bank Services"] },
  { title: "Testing & Inspection", text: "Specialist equipment, inspection disciplines and fault-location capability for critical assets.", icon: ScanLine, items: ["Testing Equipment Rental", "Third-Party Inspection", "Cable Fault Location"] },
  { title: "Sustainability", text: "Energy performance, efficient design, auditing, earthing and lightning protection.", icon: SunMedium, items: ["Green Energy & Sustainable Design", "Earthing & Lightning Protection"] },
  { title: "Asset Integrity", text: "Risk-informed inspection and asset lifecycle planning. Scope requires technical approval.", icon: ShieldCheck, items: ["Risk-Based Inspection", "Integrity Assessment", "Inspection Planning"] },
] as const;

const solutions = [
  { title: "Power Systems", text: "HV and MV switchgear, transformers, LV panels and busduct systems.", icon: Zap },
  { title: "Automation & Control", text: "PLC, SCADA, DCS, drives, soft starters and instrumentation.", icon: Gauge },
  { title: "Power Quality", text: "AC and DC UPS, industrial batteries, chargers and power-quality engineering.", icon: BatteryCharging },
  { title: "Building Technology", text: "HVAC, lighting controls, ELV, fire systems and renewable-energy solutions.", icon: Building2 },
] as const;

const industries = [
  { name: "Oil & Gas", icon: Cable }, { name: "Industrial", icon: Factory }, { name: "Commercial", icon: Building2 }, { name: "Infrastructure", icon: CircuitBoard }, { name: "Utilities", icon: Zap },
] as const;

const faqs = [
  { q: "What types of electrical services does TreeQ Power provide?", a: "TreeQ Power’s supplied scope covers engineering and design support, electrical field services, testing and inspection, cable fault location, equipment repair, generator and load-bank services, and sustainability-focused services." },
  { q: "Can TreeQ Power support high-voltage and medium-voltage systems?", a: "The supplied technical material describes field services for substation equipment across HV, MV and LV systems, plus cable fault location and repair services up to 132 kV. Final project suitability is confirmed during technical review." },
  { q: "What engineering studies are available?", a: "The documented scope includes load flow, short-circuit, protection coordination, harmonic and power-quality analysis, voltage-drop calculations, arc-flash studies, equipment sizing and earthing-grid design." },
  { q: "Does TreeQ Power offer testing equipment rental?", a: "Yes. The supplied inventory includes primary and secondary injection equipment, power-quality analyzers, thermal cameras, high-voltage test equipment, battery load banks and cable-fault test equipment." },
] as const;

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

function Header() {
  const [open, setOpen] = useState<string | null>(null);
  return <header className="reference-header">
    <div className="reference-shell flex h-[70px] items-center justify-between gap-6">
      <Button variant="ghost" className="h-auto p-0" onClick={() => scrollTo("top")} aria-label="Go to top"><img src={logoAsset.url} alt="TreeQ Power Electromechanical" className="w-48" /></Button>
      <nav className="hidden h-full items-center lg:flex" aria-label="Main navigation">
        {navGroups.map(group => <div className="flex h-full items-center" key={group.label} onMouseEnter={() => setOpen(group.label)} onMouseLeave={() => setOpen(null)}>
          <Button variant="ghost" className="h-full rounded-none px-4 text-sm" onClick={() => scrollTo(group.label.toLowerCase())}>{group.label}<ChevronDown className="size-3" /></Button>
          {open === group.label && <div className="mega-menu"><div className="reference-shell grid grid-cols-[250px_1fr] gap-12 py-8"><div><p className="micro-label text-primary">{group.label}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">Explore TreeQ Power’s {group.label.toLowerCase()} capabilities.</p></div><div className="grid grid-cols-2 gap-x-10">{group.items.map(item => <Button key={item} variant="ghost" className="h-auto justify-between rounded-none border-b border-border px-0 py-4" onClick={() => { scrollTo(group.label.toLowerCase()); setOpen(null); }}>{item}<ArrowRight className="size-4 text-primary" /></Button>)}</div></div></div>}
        </div>)}
        <Button variant="ghost" className="h-full rounded-none px-4 text-sm" onClick={() => scrollTo("projects")}>Projects</Button>
        <Button variant="ghost" className="h-full rounded-none px-4 text-sm" onClick={() => scrollTo("resources")}>Resources</Button>
      </nav>
      <Button className="hidden sm:inline-flex" onClick={() => scrollTo("contact")}>Start an enquiry<ArrowRight /></Button>
      <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent className="w-[92%] overflow-y-auto"><SheetHeader className="text-left"><SheetTitle><img src={logoAsset.url} alt="TreeQ Power" className="w-48" /></SheetTitle><SheetDescription>Electrical engineering, services and solutions.</SheetDescription></SheetHeader><nav className="mt-8">{navGroups.map(group => <SheetClose asChild key={group.label}><Button variant="ghost" className="h-14 w-full justify-between rounded-none border-b px-0" onClick={() => scrollTo(group.label.toLowerCase())}>{group.label}<ArrowRight /></Button></SheetClose>)}<SheetClose asChild><Button className="mt-8 w-full" onClick={() => scrollTo("contact")}>Start an enquiry</Button></SheetClose></nav></SheetContent></Sheet>
    </div>
  </header>;
}

function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`photo-placeholder ${className}`}><ScanLine className="size-7" /><div><strong>{label}</strong><span>Approved TreeQ Power photography to be provided</span></div></div>;
}

function Hero() {
  return <section id="top" className="hero-stage">
    <PhotoPlaceholder label="TreeQ Power project photography" className="absolute inset-0" />
    <div className="hero-wash" />
    <div className="hero-line" aria-hidden="true" />
    <div className="reference-shell relative z-10 flex h-full flex-col justify-between pb-14 pt-16">
      <p className="max-w-sm text-lg leading-7 text-hero-muted">Electrical engineering, field services and integrated power solutions from Dubai, UAE.</p>
      <div className="pb-8">
        <p className="micro-label mb-5 text-primary-bright">TreeQ Power Electromechanical</p>
        <h1 className="hero-title">Power systems.<span>Engineered end to end.</span></h1>
      </div>
    </div>
    <div className="hero-float hero-float-a"><CircuitBoard /><span>Engineering studies</span><strong>Power systems</strong></div>
    <div className="hero-float hero-float-b"><Gauge /><span>Technical scope</span><strong>HV · MV · LV</strong></div>
    <Button size="icon" variant="secondary" className="absolute bottom-8 right-8 z-20 rounded-full" onClick={() => scrollTo("about")} aria-label="Continue"><ArrowDown /></Button>
  </section>;
}

function Intro() {
  const statements = ["Study the system before work begins", "Coordinate engineering, supply and delivery", "Maintain and improve throughout the asset lifecycle"];
  return <section id="about" className="reference-section scroll-mt-20"><div className="reference-shell intro-grid"><p className="micro-label text-primary">Meet TreeQ Power</p><h2 className="editorial-title">One structure connecting engineering, field delivery, testing and long-term asset support.</h2><div className="col-start-2 mt-10 grid gap-5 md:grid-cols-3">{statements.map((s,i)=><div key={s} className="border-t border-border pt-5"><span className="micro-label text-primary">0{i+1}</span><p className="mt-4 text-sm leading-6">{s}</p></div>)}</div><Button variant="outline" className="col-start-2 mt-10 w-fit" onClick={() => scrollTo("services")}>Explore capabilities<ArrowRight /></Button></div></section>;
}

function Proof() {
  return <section className="proof-band"><div className="reference-shell"><h2 className="max-w-3xl text-3xl font-medium leading-tight md:text-5xl">Documented capability across critical electrical systems.</h2><div className="proof-grid">{[["400 kV","Substation field services"],["132 kV","Cable fault location"],["33 kV","MV systems and testing"],["5","Coordinated service families"]].map(([n,l])=><div key={n}><p>{n}</p><span>{l}</span></div>)}</div></div></section>;
}

function Transformation() {
  return <section className="reference-section overflow-hidden"><div className="reference-shell"><div className="transformation-head"><div><h2>From fragmented<br />technical activity.</h2><PhotoPlaceholder label="Electrical systems context" /></div><p>To one coordinated view of the electrical asset lifecycle.</p></div><div className="transformation-stack"><article><span>Without coordination</span><ul><li>Studies, field work and testing handled in isolation.</li><li>Technical records distributed across multiple workstreams.</li><li>Maintenance reacts after system issues appear.</li></ul></article><article><span>With integrated delivery</span><ul><li>Engineering informs procurement, installation and commissioning.</li><li>Testing evidence supports technical decisions.</li><li>Inspection and maintenance extend operating confidence.</li></ul></article></div></div></section>;
}

function CapabilityPanel({ offset = false }: { offset?: boolean }) {
  const [active,setActive] = useState(offset ? 2 : 0);
  const choices = offset ? capabilities.slice(2) : capabilities.slice(0,3);
  const item = choices[active-(offset?2:0)] ?? choices[0];
  if (!item) return null;
  const Icon = item.icon;
  return <section id={offset ? "solutions" : "services"} className={`capability-panel ${offset ? "capability-panel-alt" : ""}`}><div className="capability-copy"><p className="micro-label text-primary-bright">{offset ? "Testing, sustainability & integrity" : "Engineering & field services"}</p><h2>{offset ? "Technical evidence for safer, longer-performing assets." : "Capability coordinated around the job."}</h2><div className="capability-accordions">{choices.map((cap,i)=>{const idx=i+(offset?2:0); const activeNow=idx===active; return <Button key={cap.title} variant="ghost" className="capability-row" onClick={()=>setActive(idx)} aria-expanded={activeNow}><span>{cap.title}</span>{activeNow?<Minus/>:<Plus/>}</Button>})}</div>{item && <div className="capability-detail"><Icon /><p>{item.text}</p><ul>{item.items.map(x=><li key={x}><Check />{x}</li>)}</ul></div>}</div><PhotoPlaceholder label={offset ? "Inspection and testing photography" : "Engineering and field-services photography"} className="capability-photo" /></section>;
}

function SolutionsFeature() {
  return <section className="feature-wrap"><div className="feature-panel"><div className="feature-copy"><p className="micro-label text-primary-bright">Integrated solutions</p><h2>Power, control and the built environment—connected.</h2><p>TreeQ Power’s solution scope brings essential electrical and electromechanical systems into one coordinated technical view.</p></div><div className="solution-list">{solutions.map(({title,text,icon:Icon})=><article key={title}><Icon/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>;
}

function Industries() {
  return <section id="industries" className="reference-section"><div className="reference-shell"><h2 className="text-3xl font-medium md:text-5xl">Built for complex operating environments.</h2><p className="mt-4 text-sm text-muted-foreground">Industry positioning is draft and requires client confirmation.</p><div className="industry-strip">{industries.map(({name,icon:Icon})=><article key={name}><Icon/><span>{name}</span></article>)}</div></div></section>;
}

function Projects() {
  return <section id="projects" className="feature-wrap scroll-mt-20"><div className="project-stage"><PhotoPlaceholder label="Verified TreeQ Power project image" className="absolute inset-0"/><div className="project-overlay"/><div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-16"><h2>Real project evidence.<br/><span>Provided by the client.</span></h2><div className="project-record"><p className="micro-label text-primary-bright">Project portfolio placeholder</p><div className="grid grid-cols-2 gap-5">{["Project name","Client name","Location","Industry","Scope of work","Results / outcomes"].map(x=><div key={x}><span>{x}</span><strong>[CONTENT TO BE PROVIDED]</strong></div>)}</div></div></div></div></section>;
}

function Resources() {
  return <section id="resources" className="reference-section scroll-mt-20"><div className="reference-shell grid gap-12 md:grid-cols-[.65fr_1.35fr]"><div><p className="micro-label text-primary">FAQs</p><h2 className="mt-4 text-3xl font-medium leading-tight md:text-5xl">Direct answers to technical questions.</h2></div><Accordion type="single" collapsible className="border-t">{faqs.map((f,i)=><AccordionItem value={`faq-${i}`} key={f.q}><AccordionTrigger className="py-6 text-left text-lg">{f.q}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">{f.a}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

function Contact() {
  return <section id="contact" className="contact-band scroll-mt-20"><div className="reference-shell grid gap-12 lg:grid-cols-[1fr_1fr]"><div><h2>Bring us the requirement.<span>We’ll start with the system.</span></h2><div className="mt-10 space-y-5 text-sm text-dark-muted"><a href="tel:+971559489080"><Phone/>+971 55 948 9080</a><a href="mailto:raj@treeqpower.com"><Mail/>raj@treeqpower.com</a><p><MapPin/>Al Qusais Industrial Area, Al Twar Fourth<br/>Dubai, United Arab Emirates</p></div><p className="mt-8 max-w-md text-xs leading-5 text-dark-muted">Contact details require final client confirmation.</p></div><form className="contact-form" onSubmit={e=>e.preventDefault()}><div className="grid gap-4 sm:grid-cols-2"><label>Name<Input placeholder="Your name"/></label><label>Company<Input placeholder="Company name"/></label><label>Work email<Input type="email" placeholder="name@company.com"/></label><label>Phone<Input type="tel" placeholder="+971"/></label><label className="sm:col-span-2">Area of interest<select defaultValue=""><option value="" disabled>Select a capability</option><option>Engineering & Design</option><option>Field & Maintenance</option><option>Testing & Inspection</option><option>Sustainability</option><option>Asset Integrity</option></select></label><label className="sm:col-span-2">Requirement<Textarea placeholder="Describe the system, site or support required"/></label></div><Button disabled className="mt-5 w-full">Submission available after form connection</Button></form></div></section>;
}

function Footer() {
  return <footer className="footer-band"><div className="reference-shell"><div className="grid gap-10 border-b border-dark-border pb-12 md:grid-cols-[1.5fr_repeat(3,1fr)]"><div><img src={logoAsset.url} alt="TreeQ Power" className="w-56 bg-dark-foreground p-3"/><p className="mt-5 max-w-xs text-sm leading-6 text-dark-muted">Electrical engineering, electromechanical services and integrated solutions from Dubai.</p></div>{[["Capabilities","Services","Solutions","Industries"],["Company","About","Projects","Resources"],["Contact","+971 55 948 9080","raj@treeqpower.com","Dubai, UAE"]].map(c=><div key={c[0]}><h3>{c[0]}</h3><ul>{c.slice(1).map(x=><li key={x}>{x}</li>)}</ul></div>)}</div><div className="flex flex-wrap justify-between gap-4 pt-7 text-xs text-dark-muted"><span>© 2026 TreeQ Power Electromechanical Works.</span><span>Content subject to client approval</span></div></div></footer>;
}

export function HomePage(){return <><Header/><main><Hero/><Intro/><Proof/><Transformation/><CapabilityPanel/><CapabilityPanel offset/><SolutionsFeature/><Industries/><Projects/><Resources/><Contact/></main><Footer/></>}
