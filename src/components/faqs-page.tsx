import { useMemo, useState } from "react";
import { Minus, Plus, Search } from "lucide-react";
import { faqCategories, type Faq } from "@/lib/faq-content";

export function FaqList({ faqs, idPrefix = "" }: { faqs: Faq[]; idPrefix?: string }) {
  return (
    <div className="faq-list">
      {faqs.map((f) => (
        <details className="faq-item" key={idPrefix + f.q}>
          <summary>
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
  const normalized = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!normalized) return faqCategories;
    return faqCategories
      .map((c) => {
        const categoryMatches = c.label.toLowerCase().includes(normalized);
        const faqs = categoryMatches
          ? c.faqs
          : c.faqs.filter(
              (f) =>
                f.q.toLowerCase().includes(normalized) ||
                f.a.toLowerCase().includes(normalized),
            );
        return { ...c, faqs };
      })
      .filter((c) => c.faqs.length > 0);
  }, [normalized]);

  const matchCount = filtered.reduce((n, c) => n + c.faqs.length, 0);

  return (
    <main className="faq-page">
      <section className="faq-body">
        <div className="zoho-shell faq-body-inner">
          <h1>Frequently Asked Question (FAQs)</h1>
          <div className="faq-search" role="search">
            <Search className="faq-search-icon" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 150 questions and answers…"
              aria-label="Search frequently asked questions"
            />
            {normalized && (
              <p className="faq-search-count" aria-live="polite">
                {matchCount} {matchCount === 1 ? "result" : "results"}
              </p>
            )}
          </div>
          <div className="faq-main">
            {filtered.map((c) => (
              <section className="faq-section reveal" id={c.id} key={c.id}>
                <header className="faq-section-head">
                  <h2>{c.label}</h2>
                </header>
                <FaqList faqs={c.faqs} idPrefix={c.id} />
              </section>
            ))}
            {normalized && filtered.length === 0 && (
              <p className="faq-no-results">
                No FAQs match “{query}”. Try a different keyword or browse the categories.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
