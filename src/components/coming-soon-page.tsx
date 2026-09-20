import { SiteLink } from "@/components/site-link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ComingSoonPage({ title, body }: { title: string; body: string }) {
  return <main className="coming-soon">
    <div className="zoho-shell coming-soon-inner reveal">
      <nav className="coming-soon-crumbs" aria-label="Breadcrumb">
        <SiteLink to="/">Home</SiteLink><span aria-hidden="true">/</span><span>Resources</span><span aria-hidden="true">/</span><span aria-current="page">{title}</span>
      </nav>
      <p className="zoho-kicker">Resources</p>
      <h1>{title}</h1>
      <h2>Coming Soon</h2>
      <p className="coming-soon-body">{body}</p>
      <div className="coming-soon-actions">
        <Button size="lg" asChild><SiteLink to="/contact">Contact TreeQ Power<ArrowRight/></SiteLink></Button>
        <Button variant="outline" size="lg" asChild><SiteLink to="/resources/faqs">Browse FAQs</SiteLink></Button>
      </div>
    </div>
  </main>;
}
