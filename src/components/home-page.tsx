import { Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/site-link";
import { coreCapabilities } from "@/lib/home-content";
import { images } from "@/lib/site-data";

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="home-heading"><p className="zoho-kicker">{eyebrow}</p><h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

export function HomePage() {
  return <main>
    <section className="home-photo-hero"><picture><source media="(max-width:767px)" srcSet={images.heroMobile}/><img src={images.hero} alt="Oil and gas refinery with distillation columns and pipe manifolds at sunset" fetchPriority="high" decoding="async"/></picture><div className="home-photo-wash"/><div className="zoho-shell home-photo-copy reveal"><p className="zoho-kicker">TreeQ Power Electromechanical</p><h1>Engineering power.<span>Supporting every stage.</span></h1><p>Electrical engineering, field services, testing, inspection and integrated solutions from Dubai, UAE.</p><div><Button size="lg" asChild><SiteLink to="/services">Explore services</SiteLink></Button><Button size="lg" variant="outline" className="home-hero-ghost" asChild><SiteLink to="/contact">Start an enquiry</SiteLink></Button></div></div></section>


    <section className="home-core reveal"><div className="zoho-shell"><SectionHeading eyebrow="ABOUT TREEQ POWER" title="Three Core Service Divisions. One Technical Partner." intro="TreeQ Power delivers inspection and verification, asset integrity and electrical & automation services — supporting clients from project execution through lifecycle asset support."/><div className="home-core-grid home-core-grid-3">{coreCapabilities.map(({ title, text, to, image, imageAlt }, index) => <SiteLink to={to} className="home-core-card" key={title}>{image && <img className="home-core-bg" src={image} alt={imageAlt} loading="lazy" width="1600" height="1067" />}<span className="home-core-veil" aria-hidden="true"></span><span className="home-core-index">{String(index + 1).padStart(2, "0")}</span><div className="home-core-copy"><h3>{title}</h3><p>{text}</p></div><span className="home-core-action">Explore service</span></SiteLink>)}</div></div></section>


    <section className="home-final-new reveal"><div className="zoho-shell"><p className="zoho-kicker">Let’s Discuss Your Requirements</p><ShieldCheck/><h2>Need Engineering, Electrical or Technical Support?</h2><p>Tell us about your project, facility, equipment or technical requirement. Our team can help identify the appropriate engineering, service or solution pathway for your needs.</p><div><Button size="lg" asChild><SiteLink to="/contact">Request a Consultation</SiteLink></Button><Button size="lg" variant="outline" asChild><SiteLink to="/contact"><Phone/>Contact Us</SiteLink></Button></div><address>TreeQ Power Electromechanical Works · Dubai, United Arab Emirates · P.O. Box 239085 · +971 58 565 4226 · +971 55 948 9080 · Monday–Saturday, 08:00 AM–05:00 PM · Sunday: Emergency only</address></div></section>
  </main>;
}
