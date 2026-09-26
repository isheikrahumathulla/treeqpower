import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, Fragment } from "react";
import { z } from "zod";
import { searchSite, snippetFor } from "@/lib/search-index";
import { SiteSearch } from "@/components/site-search";
import { SiteLink } from "@/components/site-link";

const PER_PAGE = 10;

export const Route = createFileRoute("/search")({
  validateSearch: (s) => z.object({ q: z.string().catch(""), page: z.coerce.number().int().min(1).catch(1) }).parse(s),
  head: () => ({
    meta: [
      { title: "Search | TreeQ Power" },
      { name: "description", content: "Search TreeQ Power services, company information, blogs and FAQs." },
      { property: "og:title", content: "Search | TreeQ Power" },
      { property: "og:description", content: "Search TreeQ Power services, company information, blogs and FAQs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SearchPage,
});

function highlight(text: string, q: string) {
  const words = q.trim().split(/\s+/).filter((w) => w.length > 1).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (!words.length) return text;
  const re = new RegExp(`(${words.join("|")})`, "gi");
  return text.split(re).map((p, i) => (i % 2 ? <mark key={i}>{p}</mark> : <Fragment key={i}>{p}</Fragment>));
}

function SearchPage() {
  const { q, page } = Route.useSearch();
  const all = searchSite(q);
  const pages = Math.max(1, Math.ceil(all.length / PER_PAGE));
  const current = Math.min(page, pages);
  const shown = all.slice((current - 1) * PER_PAGE, current * PER_PAGE);
  useEffect(() => { window.scrollTo({ top: 0 }); }, [q, current]);

  return (
    <main className="search-page zoho-shell">
      <h1>{q ? <>Search results for “{q}”</> : "Search"}</h1>
      <SiteSearch className="search-page-field" initial={q} />
      {!q.trim() ? (
        <p className="search-page-note">Type a word or phrase above to search the website.</p>
      ) : all.length === 0 ? (
        <div className="search-page-note">
          <p>No results found for “{q}”.</p>
          <p>Try <SiteLink to="/our-services">Services</SiteLink>, <SiteLink to="/resources/faqs">FAQs</SiteLink> or <SiteLink to="/contact">Contact us</SiteLink>.</p>
        </div>
      ) : (
        <>
          <p className="search-page-count">{all.length} result{all.length === 1 ? "" : "s"}</p>
          <ol className="search-results">
            {shown.map((r) => (
              <li key={`${r.path}-${r.title}`}>
                <span className="search-result-group">{r.group}</span>
                <SiteLink to={r.path} className="search-result-title">{highlight(r.title, q)}</SiteLink>
                <p>{highlight(snippetFor(r, q), q)}</p>
              </li>
            ))}
          </ol>
          {pages > 1 && (
            <nav className="search-pager" aria-label="Search results pages">
              {current > 1 ? <Link to="/search" search={{ q, page: current - 1 }}>Previous</Link> : <span aria-disabled>Previous</span>}
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) =>
                <Link key={n} to="/search" search={{ q, page: n }} aria-current={n === current ? "page" : undefined}>{n}</Link>)}
              {current < pages ? <Link to="/search" search={{ q, page: current + 1 }}>Next</Link> : <span aria-disabled>Next</span>}
            </nav>
          )}
        </>
      )}
    </main>
  );
}
