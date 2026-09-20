import { useState } from "react";
import { ArrowRight, BatteryCharging, Building2, Cable, Check, ChevronDown, CircuitBoard, Factory, Gauge, Mail, MapPin, Menu, Phone, ScanLine, ShieldCheck, SunMedium, Wrench, Zap } from "lucide-react";
import logoAsset from "@/assets/treeqpower-logo.png.asset.json";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";

const navGroups = [
  { label: "About", target: "about", items: ["Company overview", "Why TreeQ Power", "Certifications", "Clients & partners"] },
  { label: "Services", target: "services", items: ["Engineering & design", "Field & maintenance", "Testing & inspection", "Sustainability", "Asset integrity"] },
  { label: "Solutions", target: "solutions", items: ["Power systems", "Automation & control", "Power quality", "Building technology"] },
  { label: "Industries", target: "industries", items: ["Oil & gas", "Industrial", "Commercial", "Infrastructure", "Utilities"] },
] as const;

const capabilities = [
  { title: "Engineering & Design", text: "Power-system studies, substations, protection, power quality and sustainable building performance.", icon: CircuitBoard },
  { title: "Field & Maintenance", text: "Installation, testing, commissioning, operation and maintenance across electrical systems.", icon: Wrench },
  { title: "Testing & Inspection", text: "Specialist equipment, inspection disciplines and fault-location capability for critical assets.", icon: ScanLine },
  { title: "Sustainability", text: "Energy performance, efficient design, auditing, earthing and lightning protection.", icon: SunMedium },
  { title: "Asset Integrity", text: "Risk-informed inspection and asset lifecycle planning. Scope requires technical approval.", icon: ShieldCheck },
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
  return <header className="zoho-header"><div className="zoho-shell zoho-nav">
    <Button variant="ghost" className="h-auto p-0" onClick={() => scrollTo("top")} aria-label="Go to top"><img src={logoAsset.url} alt="TreeQ Power Electromechanical" className="w-48" /></Button>
    <nav className="hidden h-full items-center lg:flex" aria-label="Main navigation">{navGroups.map(group => <div className="flex h-full items-center" key={group.label} onMouseEnter={() => setOpen(group.label)} onMouseLeave={() => setOpen(null)}><Button variant="ghost" className="h-full rounded-none px-4 text-sm" onClick={() => scrollTo(group.target)}>{group.label}<ChevronDown className="size-3" /></Button>{open === group.label && <div className="zoho-mega"><div className="zoho-shell grid grid-cols-[220px_1fr] gap-10 py-8"><div><p className="zoho-kicker">{group.label}</p><p className="mt-3 text-sm text-muted-foreground">Explore TreeQ Power’s {group.label.toLowerCase()}.</p></div><div className="grid grid-cols-2 gap-x-10">{group.items.map(item => <Button key={item} variant="ghost" className="h-auto justify-between rounded-none border-b px-0 py-4" onClick={() => { scrollTo(group.target); setOpen(null); }}>{item}<ArrowRight /></Button>)}</div></div></div>}</div>)}<Button variant="ghost" className="h-full rounded-none px-4 text-sm" onClick={() => scrollTo("projects")}>Projects</Button><Button variant="ghost" className="h-full rounded-none px-4 text-sm" onClick={() => scrollTo("resources")}>Resources</Button></nav>
    <Button className="zoho-nav-cta hidden sm:inline-flex" onClick={() => scrollTo("contact")}>Start an enquiry<ArrowRight /></Button>
    <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent className="w-[92%] overflow-y-auto"><SheetHeader className="text-left"><SheetTitle><img src={logoAsset.url} alt="TreeQ Power" className="w-48" /></SheetTitle><SheetDescription>Electrical engineering, services and solutions.</SheetDescription></SheetHeader><nav className="mt-8">{navGroups.map(group => <SheetClose asChild key={group.label}><Button variant="ghost" className="h-14 w-full justify-between rounded-none border-b px-0" onClick={() => scrollTo(group.target)}>{group.label}<ArrowRight /></Button></SheetClose>)}<SheetClose asChild><Button className="mt-8 w-full" onClick={() => scrollTo("contact")}>Start an enquiry</Button></SheetClose></nav></SheetContent></Sheet>
  </div></header>;
}

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) { return <div className={`zoho-placeholder ${className}`}><ScanLine/><div><strong>{label}</strong><span>Approved TreeQ Power photography to be provided</span></div></div>; }

function Hero() {
  return <section id="top" className="zoho-hero"><div className="zoho-shell"><div className="zoho-hero-copy"><p className="zoho-kicker">TreeQ Power Electromechanical</p><h1>Your power systems,<span>engineered for the full lifecycle.</span></h1><p>Electrical engineering, field services, testing, inspection and integrated power solutions from Dubai, UAE.</p><Button size="lg" onClick={() => scrollTo("services")}>Explore capabilities<ArrowRight /></Button></div><div className="zoho-capability-stage"><article className="zoho-feature-card"><div className="zoho-feature-icon"><Zap/></div><p className="zoho-kicker">Integrated delivery</p><h2>One technical partner across the asset lifecycle.</h2><p>From studies and design through testing, commissioning, maintenance and integrity support.</p><Button variant="outline" onClick={() => scrollTo("about")}>Why TreeQ Power<ArrowRight /></Button></article><div className="zoho-app-grid">{capabilities.slice(0,4).map(({title,text,icon:Icon},i)=><article key={title} className={`zoho-app-card zoho-app-${i+1}`}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></div></section>;
}

function Suite() {
  const [active, setActive] = useState(0); const current = solutions[active] ?? solutions[0]; if (!current) return null; const Icon = current.icon;
  return <section id="solutions" className="zoho-suite"><div className="zoho-shell zoho-suite-grid"><div><p className="zoho-kicker">Integrated solutions</p><h2>One coordinated view of power, control and buildings.</h2><p>TreeQ Power brings essential electrical and electromechanical systems into a connected technical scope.</p><Button variant="outline" onClick={() => scrollTo("contact")}>Discuss your system<ArrowRight /></Button></div><div className="zoho-suite-panel"><div className="zoho-suite-tabs">{solutions.map((s,i)=><Button key={s.title} variant="ghost" data-active={i===active} onClick={()=>setActive(i)}>{s.title}</Button>)}</div><div className="zoho-suite-focus"><Icon/><h3>{current.title}</h3><p>{current.text}</p><ul><li><Check/>Engineering-led selection</li><li><Check/>Coordinated technical scope</li><li><Check/>Lifecycle support</li></ul></div></div></div></section>;
}

function TrustStrip() { return <section className="zoho-trust"><div className="zoho-shell"><div className="zoho-divider-title"><span>Clients and partners</span></div><div className="zoho-logo-row">{[1,2,3,4,5].map(i=><div key={i}>[CLIENT LOGO TO BE PROVIDED]</div>)}</div></div></section>; }

function Story() { return <section id="about" className="zoho-story"><div className="zoho-shell"><div className="zoho-story-head"><div><p className="zoho-kicker">Built around the system</p><h2>Engineering decisions that carry through delivery.</h2></div><p>Study first. Coordinate clearly. Test thoroughly. Support the asset throughout its operating life.</p></div><div className="zoho-story-grid"><article><ImagePlaceholder label="Engineering and design photography"/><div><span>01</span><h3>Engineering informs delivery</h3><p>Studies, calculations and design choices establish the technical basis for procurement, installation and commissioning.</p></div></article><article><div><span>02</span><h3>Evidence informs action</h3><p>Testing and inspection provide the technical evidence required for fault finding, maintenance and lifecycle decisions.</p></div><ImagePlaceholder label="Testing and inspection photography"/></article></div></div></section>; }

function Values() { const items=[{title:"Engineering rigor",text:"Power-system studies and calculations establish a clear technical basis."},{title:"Coordinated delivery",text:"Engineering, field work, testing and solutions connect around the requirement."},{title:"Safety focus",text:"Inspection and test evidence support informed decisions on critical systems."},{title:"Lifecycle support",text:"Maintenance and integrity planning extend attention beyond commissioning."}]; return <section id="services" className="zoho-values"><div className="zoho-shell"><div className="zoho-divider-title"><span>How we work</span></div><h2>Principles that guide technical delivery.</h2><div className="zoho-values-grid">{items.map((item,i)=><article key={item.title}><span>0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>; }

function Scope() { return <section className="zoho-scope"><div className="zoho-shell"><div><p className="zoho-kicker">Documented technical scope</p><h2>Electrical systems.<span>Across critical voltage levels.</span></h2></div><div className="zoho-scope-grid">{[["400 kV","Substation field services"],["132 kV","Cable fault location and repair"],["33 kV","Medium-voltage systems and testing"],["HV · MV · LV","Coordinated electrical support"]].map(([n,l])=><article key={n}><strong>{n}</strong><span>{l}</span></article>)}</div></div></section>; }

function IndustriesAndProjects() { return <><section id="industries" className="zoho-industries"><div className="zoho-shell"><div className="zoho-industry-copy"><p className="zoho-kicker">Operating environments</p><h2>Built for complex technical settings.</h2><p>Industry positioning is draft and requires client confirmation.</p></div><div className="zoho-industry-grid">{industries.map(({name,icon:Icon})=><article key={name}><Icon/><span>{name}</span><ArrowRight/></article>)}</div></div></section><section id="projects" className="zoho-project"><div className="zoho-shell zoho-project-grid"><div><p className="zoho-kicker">Project portfolio</p><h2>Verified work belongs here.</h2><p>Project names, clients, locations, scope, images and outcomes will be added after client approval.</p><Button variant="outline" onClick={() => scrollTo("contact")}>Submit project information<ArrowRight/></Button></div><div className="zoho-project-card"><ImagePlaceholder label="Verified TreeQ Power project image"/><div className="grid grid-cols-2 gap-5">{["Project name","Client name","Location","Industry","Scope of work","Results / outcomes"].map(x=><p key={x}><span>{x}</span><strong>[CONTENT TO BE PROVIDED]</strong></p>)}</div></div></div></section></>; }

function Resources() { return <section id="resources" className="zoho-faq"><div className="zoho-shell zoho-faq-grid"><div><p className="zoho-kicker">Frequently asked questions</p><h2>Direct answers to technical questions.</h2></div><Accordion type="single" collapsible className="border-t">{faqs.map((f,i)=><AccordionItem value={`faq-${i}`} key={f.q}><AccordionTrigger className="py-6 text-left text-lg">{f.q}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">{f.a}</AccordionContent></AccordionItem>)}</Accordion></div></section>; }

function Contact() { return <section id="contact" className="zoho-contact"><div className="zoho-shell"><div className="zoho-contact-intro"><h2>Ready to start with the system?</h2><p>Share the requirement and the TreeQ Power team can review the technical scope.</p></div><div className="zoho-contact-grid"><div className="zoho-contact-details"><a href="tel:+971559489080"><Phone/>+971 55 948 9080</a><a href="mailto:raj@treeqpower.com"><Mail/>raj@treeqpower.com</a><p><MapPin/>Al Qusais Industrial Area, Al Twar Fourth<br/>Dubai, United Arab Emirates</p><small>Contact details require final client confirmation.</small></div><form onSubmit={e=>e.preventDefault()}><div className="grid gap-4 sm:grid-cols-2"><label>Name<Input placeholder="Your name"/></label><label>Company<Input placeholder="Company name"/></label><label>Work email<Input type="email" placeholder="name@company.com"/></label><label>Phone<Input type="tel" placeholder="+971"/></label><label className="sm:col-span-2">Area of interest<select defaultValue=""><option value="" disabled>Select a capability</option><option>Engineering & Design</option><option>Field & Maintenance</option><option>Testing & Inspection</option><option>Sustainability</option><option>Asset Integrity</option></select></label><label className="sm:col-span-2">Requirement<Textarea placeholder="Describe the system, site or support required"/></label></div><Button disabled className="mt-5 w-full">Submission available after form connection</Button></form></div></div></section>; }

function Footer() { return <footer className="zoho-footer"><div className="zoho-shell"><div className="zoho-footer-grid"><div><img src={logoAsset.url} alt="TreeQ Power"/><p>Electrical engineering, electromechanical services and integrated solutions from Dubai.</p></div>{[["Capabilities","Services","Solutions","Industries"],["Company","About","Projects","Resources"],["Contact","+971 55 948 9080","raj@treeqpower.com","Dubai, UAE"]].map(c=><div key={c[0]}><h3>{c[0]}</h3><ul>{c.slice(1).map(x=><li key={x}>{x}</li>)}</ul></div>)}</div><div className="zoho-footer-bottom"><span>© 2026 TreeQ Power Electromechanical Works.</span><span>Content subject to client approval</span></div></div></footer>; }

export function HomePage(){return <><Header/><main><Hero/><Suite/><TrustStrip/><Story/><Values/><Scope/><IndustriesAndProjects/><Resources/><Contact/></main><Footer/></>}
