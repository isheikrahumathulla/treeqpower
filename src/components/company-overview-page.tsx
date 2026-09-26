import { ArrowRight, Building2, ClipboardCheck, Cpu, DraftingCompass, Leaf, PackageCheck, ScanSearch, ShieldCheck, Wrench, Zap, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/site-link";
import {
  approachSteps,
  companyOverviewImages,
  keyFacts,
  lifecycleStages,
  projectEnvironments,
  technicalCapabilities,
  whatWeDoGroups,
} from "@/lib/company-overview-content";

const icons: Record<string, LucideIcon> = {
  compass: DraftingCompass,
  scan: ScanSearch,
  shield: ShieldCheck,
  package: PackageCheck,
  clipboard: ClipboardCheck,
  wrench: Wrench,
  zap: Zap,
  cpu: Cpu,
  activity: Activity,
  building: Building2,
  leaf: Leaf,
};
const getIcon = (key: string): LucideIcon => icons[key] ?? Activity;

function Heading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return <div className="about-heading">{eyebrow && <p className="zoho-kicker">{eyebrow}</p>}<h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

export function CompanyOverviewPage() {
  return <main>
    <section className="page-hero"><img src={companyOverviewImages.hero} alt="Power transformer installed within an electrical substation compound" width="1800" height="1200"/><div className="page-hero-wash"/><div className="zoho-shell page-hero-copy reveal"><p className="zoho-kicker">Company Overview</p><h1>Building Reliable Power, Engineering &amp; Asset Solutions</h1><div className="page-hero-actions"><Button size="lg" asChild><SiteLink to="/contact">Start an Enquiry</SiteLink></Button><Button size="lg" variant="outline" asChild><SiteLink to="/our-services">Explore Our Services</SiteLink></Button></div></div></section>

    <nav className="about-jump reveal" aria-label="Company overview sections"><div className="zoho-shell"><span>On this page</span><a href="#about">About</a><a href="#what-we-do">What We Do</a><a href="#lifecycle">Lifecycle</a><a href="#capabilities">Capabilities</a><a href="#industries">Industries</a><a href="#approach">Approach</a></div></nav>

    <section id="about" className="about-overview reveal"><div className="zoho-shell about-overview-grid"><div><Heading eyebrow="About Us" title="TreeQ Power "/><div className="about-body"><p>TreeQ Power is a UAE-based Engineering, Inspection & Verification, Asset Integrity, Risk-Based Inspection (RBI), and Electromechanical Services company, backed by more than 20 years of combined industry experience across the Oil & Gas, Energy, Power, Petrochemical, and Industrial sectors.</p><p>With more than 20 years of field experience, the company provides complete lifecycle engineering and technical solutions, from design and engineering to installation, testing, commissioning and maintenance, along with Independent Inspection, Vendor Inspection and Asset Integrity Inspection Services supported by internationally qualified and certified professionals.</p><p>Founded in 2004 in Dubai under AL DUWAIHA ELECTROMECHANICAL DUBAI LLC, the company has delivered electrical product installations, testing and commissioning, preventive maintenance, automation, power system analysis and energy saving solutions.</p></div><Button variant="outline" asChild><SiteLink to="/about-us/why-treeq-power">Why TreeQ Power</SiteLink></Button></div><figure><img src={companyOverviewImages.overview} alt="Critical facility equipment hall with controlled power distribution" loading="lazy" width="900" height="700"/><figcaption>Engineering capability connected to practical field support.</figcaption></figure></div></section>

    <section id="what-we-do" className="about-capabilities cov-services reveal"><div className="zoho-shell"><Heading eyebrow="What We Do" title="A Broad Range of Engineering, Technical & Support Services" intro="TreeQ Power provides a coordinated portfolio of services spanning engineering, field execution, testing, inspection, maintenance, asset integrity and sustainable energy."/><div className="about-capability-grid">{whatWeDoGroups.map(({ icon, title, items, to, linkLabel }, index) => { const Icon = getIcon(icon); return <SiteLink to={to} className="about-capability-card" key={title}><div><span>{String(index + 1).padStart(2, "0")}</span><Icon/></div><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul><strong>{linkLabel}</strong></SiteLink>; })}</div></div></section>

    <section id="lifecycle" className="about-lifecycle cov-lifecycle reveal"><div className="zoho-shell"><Heading eyebrow="Integrated Project & Asset Lifecycle Support" title="Capabilities Across Every Stage of the Lifecycle" intro="Our capabilities extend across multiple stages of a project's lifecycle, keeping technical decisions connected from first study to long-term operation."/><div>{lifecycleStages.map(({ icon, title, text }, index) => { const Icon = getIcon(icon); return <article key={title}><Icon/><span>{title}</span><p>{text}</p>{index < lifecycleStages.length - 1 && <ArrowRight/>}</article>; })}</div></div></section>

    <section id="capabilities" className="about-values cov-values reveal"><div className="zoho-shell"><Heading eyebrow="Our Technical Capabilities" title="Interconnected Technical Disciplines" intro="TreeQ Power's capabilities cover several interconnected technical disciplines, allowing one team to support power, automation, building and energy systems together."/><div>{technicalCapabilities.map(({ icon, title, text }, index) => { const Icon = getIcon(icon); return <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon/><h3>{title}</h3><p>{text}</p></article>; })}</div></div></section>

    <section id="industries" className="page-section reveal"><div className="zoho-shell"><Heading eyebrow="Where We Work" title="Supporting Different Project Requirements" intro="TreeQ Power works across a range of technical environments, and our services can be structured around individual requirements, complete project scopes or ongoing maintenance and technical support."/><div className="cov-chips">{projectEnvironments.map(({ label, to }) => <SiteLink to={to} key={to}>{label}</SiteLink>)}</div></div></section>

    <section id="approach" className="about-process reveal"><div className="zoho-shell"><Heading eyebrow="Engineering-Led Approach" title="Effective Solutions Begin With Understanding" intro="We believe effective technical solutions begin with understanding the client's system, operating environment and project objectives."/><ol>{approachSteps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></div></section>

    <section className="about-mission reveal"><div className="zoho-shell about-mission-grid"><div><p className="zoho-kicker">Our Commitment</p><h2>Practical, Technically Sound &amp; Responsive Solutions</h2></div><div><p>TreeQ Power aims to provide practical, technically sound and responsive solutions for electrical, industrial and critical assets. We focus on combining engineering knowledge, field services and lifecycle support to help clients operate their systems with greater reliability and confidence.</p><p>Speak with TreeQ Power to discuss your electrical, engineering, industrial or asset-related requirements.</p></div></div></section>

    <section className="page-section page-section-dark reveal"><div className="zoho-shell"><Heading eyebrow="Key Information" title="TreeQ Power at a Glance"/><div className="cov-facts">{keyFacts.map(({ label, value }) => <article key={label}><h3>{label}</h3><p>{value}</p></article>)}</div></div></section>

    <section className="page-cta reveal"><div className="zoho-shell"><div><p className="zoho-kicker">Start a conversation</p><h2>Let's Discuss Your Technical Requirement</h2><p>Have an upcoming project, maintenance requirement or technical challenge? Speak with TreeQ Power to discuss your electrical, engineering, industrial or asset-related requirements.</p></div><div className="page-cta-actions"><Button size="lg" asChild><SiteLink to="/contact">Start an Enquiry</SiteLink></Button><Button size="lg" variant="outline" asChild><SiteLink to="/our-services">Explore Our Services</SiteLink></Button></div></div></section>
  </main>;
}
