import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/site-link";
import type { GroupPage, ListItem } from "@/lib/service-groups";

export function Breadcrumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="sg-crumbs">
      <ol>
        {trail.map((c, i) => (
          <li key={c.label}>
            {i > 0 && <ChevronRight aria-hidden />}
            {c.to ? <SiteLink to={c.to}>{c.label}</SiteLink> : <span aria-current="page">{c.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Card({ item, index }: { item: ListItem; index: number }) {
  const inner = (
    <>
      {item.image ? (
        <div className="sg-card-media"><img src={item.image} alt={item.label} loading="lazy" width="768" height="512" /></div>
      ) : (
        <div className="sg-card-media sg-card-placeholder" role="img" aria-label="Image to be provided"><span>[IMAGE TO BE PROVIDED]</span></div>
      )}
      <div className="sg-card-body">
        <span className="sg-num">{String(index + 1).padStart(2, "0")}</span>
        <h3>{item.label}</h3>
        {item.body && <p>{item.body}</p>}
        {item.items && <ul>{item.items.map((x) => <li key={x}><Check aria-hidden />{x}</li>)}</ul>}
        {item.to && <strong>View details</strong>}
      </div>
    </>
  );
  return item.to ? <SiteLink to={item.to} className="sg-card sg-card-link">{inner}</SiteLink> : <article className="sg-card">{inner}</article>;
}

export function ServiceGroupPage({ page }: { page: GroupPage }) {
  const trail = [{ label: "Home", to: "/" }, { label: "Services", to: "/our-services" }, ...(page.parent ? [page.parent] : []), { label: page.title }];
  return (
    <main>
      <section className="page-hero">
        <img src={page.image} alt={page.imageAlt} />
        <div className="page-hero-wash" />
        <div className="zoho-shell page-hero-copy reveal">
          <p className="zoho-kicker">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro[0]}</p>
        </div>
      </section>
      <div className="zoho-shell"><Breadcrumbs trail={trail} /></div>
      {page.intro.length > 1 && (
        <section className="page-intro reveal"><div className="zoho-shell page-intro-grid"><p className="zoho-kicker">Overview</p><div className="sg-intro">{page.intro.map((p) => <p key={p}>{p}</p>)}</div></div></section>
      )}
      {page.sections.map((s, i) => (
        <section key={s.title} className={`sg-section reveal${i % 2 ? " sg-section-alt" : ""}`}>
          <div className="zoho-shell">
            <div className="sg-section-head"><span>{String(i + 1).padStart(2, "0")}</span><h2>{s.title}</h2></div>
            {s.layout === "cards" ? (
              <div className="sg-card-grid">{s.items.map((it, idx) => <Card key={it.label} item={it} index={idx} />)}</div>
            ) : s.layout === "list" ? (
              <ul className="sg-list">
                {s.items.map((it) => (
                  <li key={it.label}>
                    {it.to ? <SiteLink to={it.to}>{it.label}</SiteLink> : <span>{it.label}</span>}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="sg-bullets">{s.items.map((it) => <li key={it.label}><Check aria-hidden />{it.label}</li>)}</ul>
            )}
          </div>
        </section>
      ))}
      <section className="page-cta reveal">
        <div className="zoho-shell">
          <div><p className="zoho-kicker">Start a conversation</p><h2>Bring us the technical requirement.</h2></div>
          <Button size="lg" asChild><SiteLink to="/contact">Contact TreeQ Power</SiteLink></Button>
        </div>
      </section>
    </main>
  );
}
