import { useMemo, useState } from "react";
import { ArrowRight, Minus, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/site-link";
import { faqCategories, faqCategoryLinks, faqCount, type Faq } from "@/lib/faq-content";

const pad = (n: number) => String(n).padStart(2, "0");

export function FaqList({ faqs, idPrefix = "" }: { faqs: Faq[]; idPrefix?: string }) {
  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <details className="faq-item" key={idPrefix + f.q}>
          <summary>
            <span className="faq-item-index" aria-hidden="true">{pad(i + 1)}</span>
            <h3>{f.q}</h3>
            <span className="faq-item-toggle" aria-hidden="true">
              <Plus className="faq-icon-plus" />
              <Minus className="faq-icon-minus" />
            </span>
          </summary>
          <div className="faq-answer">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function FaqsPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("all");
  const q = query.trim().toLowerCase();

  const matchedByCategory = useMemo(
    () =>
      faqCategories.map((c) => ({
        ...c,
        faqs: q ? c.faqs.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)) : c.faqs,
      })),
    [q],
  );

  const groups = matchedByCategory.filter((c) => (active === "all" || c.id === active) && c.faqs.length > 0);
  const matches = matchedByCategory.reduce((n, c) => n + c.faqs.length, 0);
  const shown = groups.reduce((n, c) => n + c.faqs.length, 0);

  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="zoho-shell faq-hero-grid reveal">
          <div>
            <p className="faq-eyebrow">Resources — Knowledge base</p>
            <h1>
              Answers to the technical questions <em>engineers actually ask.</em>
            </h1>
          </div>
          <div className="faq-hero-aside">
            <p>
              Factual, self-contained answers covering electrical engineering, site services, testing and inspection,
              asset integrity, power systems, automation, MEP and energy solutions across Dubai and the UAE.
            </p>
            <dl className="faq-facts">
              <div>
                <dt>Answers</dt>
                <dd>{faqCount}</dd>
              </div>
              <div>
                <dt>Categories</dt>
                <dd>{faqCategories.length}</dd>
              </div>
              <div>
                <dt>Context</dt>
                <dd>UAE projects</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="faq-body">
        <div className="zoho-shell faq-body-grid">
          <aside className="faq-aside">
            <div className="faq-aside-inner">
              <div className="faq-search">
                <Search aria-hidden="true" />
                <label className="sr-only" htmlFor="faq-search">Search FAQs</label>
                <input
                  id="faq-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search — RBI, switchgear, load bank…"
                />
              </div>
              <p className="faq-count" aria-live="polite">
                {shown} of {faqCount} questions shown
              </p>

              <nav className="faq-nav" aria-label="FAQ categories">
                <button
                  type="button"
                  aria-pressed={active === "all"}
                  className={active === "all" ? "is-active" : ""}
                  onClick={() => setActive("all")}
                >
                  <span className="faq-nav-index">All</span>
                  <span className="faq-nav-label">Every question</span>
                  <span className="faq-nav-count">{matches}</span>
                </button>
                {matchedByCategory.map((c, i) => (
                  <button
                    type="button"
                    key={c.id}
                    disabled={c.faqs.length === 0}
                    aria-pressed={active === c.id}
                    className={active === c.id ? "is-active" : ""}
                    onClick={() => setActive(c.id)}
                  >
                    <span className="faq-nav-index">{pad(i + 1)}</span>
                    <span className="faq-nav-label">{c.short}</span>
                    <span className="faq-nav-count">{c.faqs.length}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="faq-main">
            {groups.map((c, i) => (
              <section className="faq-section reveal" id={c.id} key={c.id}>
                <header className="faq-section-head">
                  <span className="faq-section-index" aria-hidden="true">
                    {pad(faqCategories.findIndex((x) => x.id === c.id) + 1)}
                  </span>
                  <h2>{c.label}</h2>
                  <p>
                    {c.faqs.length} question{c.faqs.length === 1 ? "" : "s"}
                  </p>
                </header>
                <FaqList faqs={c.faqs} idPrefix={c.id} />
                {(faqCategoryLinks[c.id] ?? []).length > 0 && (
                  <ul className="faq-links">
                    {(faqCategoryLinks[c.id] ?? []).map((l) => (
                      <li key={l.to + l.label}>
                        <SiteLink to={l.to}>{l.label}</SiteLink>
                      </li>
                    ))}
                  </ul>
                )}
                {i === groups.length - 1 ? null : <div className="faq-section-rule" aria-hidden="true" />}
              </section>
            ))}

            {groups.length === 0 && (
              <div className="faq-empty">
                <h2>No questions match “{query}”.</h2>
                <p>Try a broader term such as testing, switchgear or maintenance — or send the requirement directly to the engineering team.</p>
                <Button asChild>
                  <SiteLink to="/contact">
                    Contact TreeQ Power
                    <ArrowRight />
                  </SiteLink>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="page-cta reveal">
        <div className="zoho-shell">
          <div>
            <p className="zoho-kicker">Still have questions</p>
            <h2>Have a Technical Requirement?</h2>
            <p className="faq-cta-text">
              Tell us about your electrical, engineering, testing, maintenance or asset-integrity requirement and the
              team will respond with a practical technical answer.
            </p>
          </div>
          <div className="page-cta-actions">
            <Button size="lg" asChild>
              <SiteLink to="/contact">
                Start an Enquiry
                <ArrowRight />
              </SiteLink>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <SiteLink to="/our-services">Explore Our Services</SiteLink>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
