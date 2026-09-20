import {
  ArrowRight,
  Check,
  FileText,
  HelpCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/site-link";
import {
  approach,
  capabilityStrip,
  coreCapabilities,
  faqs,
  industries,
  reasons,
  services,
  solutions,
  technicalSolutions,
  type HomeLinkItem,
} from "@/lib/home-content";
import { homeImages } from "@/lib/home-images";
import { lib } from "@/lib/image-library";
import { images } from "@/lib/site-data";

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="home-heading"><p className="zoho-kicker">{eyebrow}</p><h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

function ImageCard({ item }: { item: HomeLinkItem }) {
  const Icon = item.icon;
  return <SiteLink to={item.to} className="home-image-card"><div className="home-image-frame"><img src={item.image} alt={item.imageAlt} loading="lazy" width="700" height="500" /></div><div className="home-image-card-copy"><Icon/><h3>{item.title}</h3><p>{item.text}</p><span>Explore <ArrowRight/></span></div></SiteLink>;
}

export function HomePage() {
  return <main>
    <section className="home-photo-hero"><img src={images.hero} alt="High-voltage power infrastructure"/><div className="home-photo-wash"/><div className="zoho-shell home-photo-copy reveal"><p className="zoho-kicker">TreeQ Power Electromechanical</p><h1>Engineering power.<span>Supporting every stage.</span></h1><p>Electrical engineering, field services, testing, inspection and integrated solutions from Dubai, UAE.</p><div><Button size="lg" asChild><SiteLink to="/services">Explore services<ArrowRight/></SiteLink></Button><Button size="lg" variant="outline" className="home-hero-ghost" asChild><SiteLink to="/contact">Start an enquiry</SiteLink></Button></div></div></section>

    <section className="home-about reveal"><div className="zoho-shell home-split"><div className="home-media"><img src={lib.electricalTechnician} alt="Electrical engineer inspecting industrial power equipment" loading="lazy" width="900" height="700"/><span>Engineering / Field execution / Lifecycle support</span></div><div><SectionHeading eyebrow="About TreeQ Power" title="Engineering Expertise Across the Asset Lifecycle"/><div className="home-rich-copy"><p>TreeQ Power provides integrated technical solutions covering the complete lifecycle of electrical, electromechanical and industrial assets — from engineering and design through supply, installation, testing, commissioning, maintenance, refurbishment and technical support.</p><p>Our capabilities span electrical power systems, MEP services, industrial automation, instrumentation, testing and diagnostics, generator and load bank services, cable fault testing, third-party inspection, sustainable energy solutions and asset integrity management.</p><p>With a focus on engineering quality, technical reliability and practical field execution, TreeQ Power supports clients across commercial, industrial, infrastructure, utilities and energy environments in the UAE.</p></div><Button variant="outline" asChild><SiteLink to="/about-us">Discover TreeQ Power<ArrowRight/></SiteLink></Button></div></div></section>

    <section className="home-cap-carousel reveal" aria-label="TreeQ Power capabilities"><div className="zoho-shell"><p className="zoho-kicker">Our Capabilities</p></div><div className="home-cap-track" tabIndex={0}><div className="home-cap-loop">{capabilityStrip.map(({ title, to, icon: Icon }) => <SiteLink to={to} key={title}><Icon/><span>{title}</span></SiteLink>)}{capabilityStrip.map(({ title, to, icon: Icon }) => <SiteLink to={to} key={`dup-${title}`} aria-hidden="true"><Icon/><span>{title}</span></SiteLink>)}</div></div></section>

    <section className="home-core reveal"><div className="zoho-shell"><SectionHeading eyebrow="What We Do" title="Integrated Capabilities. One Technical Partner." intro="From engineering studies to field execution and lifecycle support, TreeQ Power brings multiple technical disciplines together to help clients plan, deliver, maintain and improve critical systems."/><div className="home-core-grid">{coreCapabilities.map(({ title, text, to, icon: Icon }, index) => <SiteLink to={to} className="home-core-card" key={title}><span className="home-core-index">{index === 0 ? "01 " : index === 5 ? "06 " : index === 7 ? "08 " : String(index + 1).padStart(2, "0")}</span><Icon/><div className="home-core-copy"><h3>{title}</h3><p>{text}</p></div><span className="home-core-action">Explore service<ArrowRight/></span></SiteLink>)}</div><div className="home-core-note"><span>TreeQ Power / Core capabilities</span><span>Engineering · Field execution · Lifecycle support</span></div></div></section>

    <section className="home-why reveal"><div className="zoho-shell"><div className="home-why-head"><SectionHeading eyebrow="Why TreeQ Power" title="Built Around Engineering, Execution & Lifecycle Support" intro="TreeQ Power combines engineering knowledge with practical field capabilities to support projects from initial assessment through implementation and ongoing asset support."/><div className="home-wide-image"><img src={lib.substationYard} alt="Engineering team providing technical field support" loading="lazy" width="1100" height="650"/></div></div><div className="home-number-grid">{reasons.map(item => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>

    <section className="home-catalog reveal"><div className="zoho-shell"><SectionHeading eyebrow="Our Services" title="Technical Services for Electrical, Industrial & Critical Assets"/><div className="home-scroll-grid home-services-carousel" aria-label="Our services" tabIndex={0}><div className="home-scroll-track">{services.map(item => <ImageCard item={item} key={item.title}/>)}{services.map(item => <div aria-hidden="true" inert key={`duplicate-${item.title}`}><ImageCard item={item}/></div>)}</div></div><Button variant="outline" asChild><SiteLink to="/services">View All Services<ArrowRight/></SiteLink></Button></div></section>

    <section className="home-catalog home-catalog-alt reveal"><div className="zoho-shell"><SectionHeading eyebrow="Our Solutions" title="Power, Automation, MEP & Building Technology Solutions"/><div className="home-scroll-grid">{solutions.map(item => <ImageCard item={item} key={item.title}/>)}</div><Button variant="outline" asChild><SiteLink to="/solutions">Explore All Solutions<ArrowRight/></SiteLink></Button></div></section>

    <section className="home-industries-new reveal"><div className="zoho-shell"><SectionHeading eyebrow="Industries We Support" title="Solutions Designed Around Industry Requirements"/><div className="home-industry-cards">{industries.map(item => <SiteLink to={item.to} className="home-industry-card" key={item.title}><img src={item.image} alt={item.imageAlt} loading="lazy" width="700" height="760"/><div><span>{item.title}</span><p>{item.text}</p><ArrowRight/></div></SiteLink>)}</div></div></section>

    <section className="home-approach reveal"><div className="zoho-shell"><SectionHeading eyebrow="Our Approach" title="From Engineering to Lifecycle Support"/><ol className="home-process">{approach.map(item => <li key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol></div></section>

    <section className="home-technical reveal"><div className="zoho-shell home-technical-grid"><div><p className="zoho-kicker">Featured Technical Solutions</p><h2>Power & Technical Solutions for Critical Systems</h2><p>Navigate directly to the engineered equipment, field service and lifecycle support relevant to your system.</p><div className="home-technical-image"><img src={lib.switchyardBusbars} alt="Power infrastructure supporting critical electrical systems" loading="lazy" width="900" height="650"/></div></div><div className="home-technical-links">{technicalSolutions.map((item, index) => <SiteLink to={item.to} key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><ArrowRight/></SiteLink>)}</div></div></section>

    <section className="home-feature reveal"><div className="home-feature-image"><img src={lib.industrialMachineryPanel} alt="Industrial asset integrity inspection and condition assessment" loading="lazy" width="1000" height="800"/></div><div className="home-feature-copy"><p className="zoho-kicker">Asset Integrity</p><h2>Make Better Decisions About Critical Assets</h2><p>Effective asset management starts with understanding condition, risk and performance.</p><p>TreeQ Power’s engineering, inspection and asset integrity capabilities help clients assess equipment condition, identify potential failure mechanisms, prioritize inspection and maintenance activities, and develop practical strategies for managing critical assets throughout their operating lifecycle.</p><Button asChild><SiteLink to="/services/asset-integrity/asset-integrity-management">Explore Asset Integrity Services<ArrowRight/></SiteLink></Button></div></section>

    <section className="home-feature home-feature-reverse reveal"><div className="home-feature-image"><img src={lib.windFarmAerial} alt="Commercial solar and sustainable energy solution" loading="lazy" width="1000" height="800"/></div><div className="home-feature-copy"><p className="zoho-kicker">Sustainability</p><h2>Engineering for Energy Efficiency & Sustainable Performance</h2><p>TreeQ Power supports energy-conscious projects through energy audits, energy management, sustainable design, energy modelling, efficient electrical and lighting solutions, renewable energy systems and performance-focused engineering.</p><Button asChild><SiteLink to="/services/sustainability/green-energy-sustainable-design">Explore Sustainable Solutions<ArrowRight/></SiteLink></Button></div></section>

    <section className="home-resources reveal"><div className="zoho-shell"><SectionHeading eyebrow="Resources" title="Technical Insights & Resources"/><div className="home-resource-grid"><SiteLink to="/resources/blogs"><FileText/><h3>Technical Insights</h3><p>For future technical articles and industry insights.</p><ArrowRight/></SiteLink><SiteLink to="/resources/downloads"><Check/><h3>Downloads</h3><p>For company brochures, technical documents and downloadable resources.</p><ArrowRight/></SiteLink><SiteLink to="/resources/faqs"><HelpCircle/><h3>FAQs</h3><p>Answers to common questions about TreeQ Power services and solutions.</p><ArrowRight/></SiteLink></div></div></section>

    <section className="home-faq-new reveal"><div className="zoho-shell home-faq-layout"><div><p className="zoho-kicker">Frequently Asked Questions</p><h2>Clear Answers About Our Technical Scope</h2><p>Direct information about TreeQ Power’s engineering, field and lifecycle-support capabilities in the UAE.</p><Button variant="outline" asChild><SiteLink to="/resources/faqs">View All FAQs<ArrowRight/></SiteLink></Button></div><Accordion type="single" collapsible className="home-faq-list">{faqs.map((item, index) => <AccordionItem value={`faq-${index}`} key={item.question}><AccordionTrigger><span><small>{String(index + 1).padStart(2, "0")}</small>{item.question}</span></AccordionTrigger><AccordionContent><p>{item.answer}</p></AccordionContent></AccordionItem>)}</Accordion></div></section>

    <section className="home-final-new reveal"><div className="zoho-shell"><p className="zoho-kicker">Let’s Discuss Your Requirements</p><ShieldCheck/><h2>Need Engineering, Electrical or Technical Support?</h2><p>Tell us about your project, facility, equipment or technical requirement. Our team can help identify the appropriate engineering, service or solution pathway for your needs.</p><div><Button size="lg" asChild><SiteLink to="/contact">Request a Consultation<ArrowRight/></SiteLink></Button><Button size="lg" variant="outline" asChild><SiteLink to="/contact"><Phone/>Contact Us</SiteLink></Button></div><address>TreeQ Power Electromechanical Works · Dubai, United Arab Emirates · P.O. Box 239085 · +971 55 948 9080 · Monday–Friday, 08:00 AM–05:00 PM</address></div></section>
  </main>;
}