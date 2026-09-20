import { Minus, Plus } from "lucide-react";
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
  return (
    <main className="faq-page">
      <section className="faq-body">
        <div className="zoho-shell faq-body-inner">
          <h1>Frequently Asked Question (FAQs)</h1>
          <div className="faq-main">
            {faqCategories.map((c) => (
              <section className="faq-section reveal" id={c.id} key={c.id}>
                <header className="faq-section-head">
                  <h2>{c.label}</h2>
                </header>
                <FaqList faqs={c.faqs} idPrefix={c.id} />
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
