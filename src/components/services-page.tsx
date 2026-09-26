import { ArrowDown, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/site-link";
import {
  serviceCapabilities,
  serviceCategories,
  serviceFaqs,
  serviceImages,
  serviceIndustries,
  serviceLifecycle,
  serviceProcess,
} from "@/lib/services-content";

function Heading({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return <div className="services-heading">{eyebrow && <p className="zoho-kicker">{eyebrow}</p>}<h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

export function ServicesPage() {
  return <main>
    <section className="services-hero">
      <img src={serviceImages.hero} alt="Engineer performing an industrial electrical equipment inspection" width="1800" height="1200" fetchPriority="high"/>
      <div className="services-hero-wash"/>
      <div className="zoho-shell services-hero-copy reveal"><p className="zoho-kicker">Our Services</p><h1>Integrated Engineering & Technical Services</h1><p>From engineering and design through testing, commissioning, maintenance, diagnostics and asset integrity, TreeQ Power provides practical technical services for electrical, electromechanical, industrial and infrastructure environments.</p><div><Button size="lg" asChild><a href="#service-categories">Explore Our Services<ArrowDown/></a></Button><Button size="lg" variant="outline" asChild><SiteLink to="/contact">Talk to Our Technical Team</SiteLink></Button></div></div>
    </section>

    <section className="services-intro reveal"><div className="zoho-shell services-intro-grid"><div><Heading eyebrow="Electrical and Engineering Services in UAE" title="Technical Services Across the Asset Lifecycle"/><div className="services-body"><p>TreeQ Power supports clients through multiple stages of the electrical and asset lifecycle — from engineering and design to installation support, testing, commissioning, troubleshooting, maintenance, diagnostics and asset integrity management.</p><p>Our service capabilities combine engineering knowledge with practical field execution, helping clients address technical requirements across electrical power systems, automation, instrumentation, MEP, testing and inspection.</p><p>Whether the requirement is a planned engineering assignment, specialist testing activity, equipment repair, shutdown support, fault investigation or ongoing asset management, our services can be structured around the technical and operational needs of the project.</p></div><Button variant="outline" asChild><SiteLink to="/about-us">About TreeQ Power</SiteLink></Button></div><figure><img src={serviceImages.intro} alt="Electrical engineering drawings and technical project planning" loading="lazy" width="900" height="700"/><figcaption>Engineering knowledge connected to practical field delivery.</figcaption></figure></div><div className="zoho-shell services-lifecycle" aria-label="Service lifecycle">{serviceLifecycle.map((item,index)=><div key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong>{index<serviceLifecycle.length-1&&<ArrowRight/>}</div>)}</div></section>

    <section className="services-categories reveal"><div className="zoho-shell"><Heading eyebrow="Service Categories" title="Our Service Capabilities" intro="Four connected service groups help clients move from technical requirements to verified field outcomes and long-term asset support."/><div className="services-category-grid">{serviceCategories.map(({number,title,description,items,to,label,icon:Icon})=><SiteLink to={to} className="services-category-card" key={title}><div className="services-category-body"><div><span>{number}</span><Icon/></div><h3>{title}</h3><p>{description}</p><ul>{items.map(item=><li key={item}>{item}</li>)}</ul><strong className="services-category-cta">{label}</strong></div></SiteLink>)}</div></div></section>


    <section className="services-process reveal"><div className="zoho-shell"><Heading eyebrow="How We Deliver" title="A Structured Approach to Technical Service Delivery"/><ol>{serviceProcess.map(item=><li key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol></div></section>

    <section className="services-industries reveal"><div className="zoho-shell"><div className="services-industries-head"><Heading eyebrow="Industries Served" title="Services Across Critical Industries"/><Button variant="outline" asChild><SiteLink to="/industries">Explore All Industries</SiteLink></Button></div><div className="services-industry-grid">{serviceIndustries.map(item=><SiteLink to={item.to} key={item.title}><img src={item.image} alt={item.alt} loading="lazy" width="650" height="760"/><div><h3>{item.title}</h3><p>{item.text}</p></div></SiteLink>)}</div></div></section>

    <section className="services-capability-band reveal" aria-label="Technical capabilities"><div className="services-capability-track">{[...serviceCapabilities,...serviceCapabilities].map((item,index)=><span key={`${item}-${index}`}>{item}<i aria-hidden="true"/></span>)}</div></section>

    <section className="services-faq reveal"><div className="zoho-shell services-faq-grid"><div><Heading eyebrow="Frequently Asked Questions" title="Technical Services — Frequently Asked Questions" intro="Direct answers about TreeQ Power’s engineering, field, testing, inspection and asset integrity services."/><Button variant="outline" asChild><SiteLink to="/resources/faqs">View All FAQs</SiteLink></Button></div><Accordion type="single" collapsible>{serviceFaqs.map((item,index)=><AccordionItem value={`service-faq-${index}`} key={item.question}><AccordionTrigger><span><small>{String(index+1).padStart(2,"0")}</small>{item.question}</span></AccordionTrigger><AccordionContent><p>{item.answer}</p></AccordionContent></AccordionItem>)}</Accordion></div></section>

    <section className="services-cta reveal"><img src={serviceImages.cta} alt="" loading="lazy" width="1800" height="1200"/><div className="services-cta-wash"/><div className="zoho-shell"><p className="zoho-kicker">Technical Consultation</p><h2>Looking for the Right Technical Service?</h2><p>Tell us about your project, equipment, site requirement or technical challenge. Our team can review the requirement and identify the appropriate engineering, field service, testing, inspection or asset integrity support.</p><div><Button size="lg" asChild><SiteLink to="/contact">Discuss Your Requirement</SiteLink></Button><Button size="lg" variant="outline" asChild><SiteLink to="/our-services/electrical-automation">View Our Solutions</SiteLink></Button></div><nav aria-label="Related pages"><SiteLink to="/resources/faqs">Resources</SiteLink><SiteLink to="/about-us">About TreeQ Power</SiteLink></nav></div></section>
  </main>;
}
