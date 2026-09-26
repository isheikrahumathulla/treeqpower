import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { searchSite } from "@/lib/search-index";

type Props = { className?: string; onNavigate?: () => void; placeholder?: string };

export function SiteSearch({ className, onNavigate, placeholder = "Search services, FAQs…" }: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const go = (path: string) => {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    if (path === "/") navigate({ to: "/" });
    else navigate({ to: "/$", params: { _splat: path.replace(/^\//, "") } });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
    else if (e.key === "Enter") { const hit = results[active]; if (hit) { e.preventDefault(); go(hit.path); } }
    else if (e.key === "Escape") setOpen(false);
  };

  const showPanel = open && query.trim().length >= 2;

  return (
    <div className={`site-search ${className ?? ""}`} ref={boxRef}>
      <div className="site-search-field">
        <Search className="size-4" aria-hidden />
        <input
          type="search"
          value={query}
          placeholder={placeholder}
          aria-label="Search the website"
          autoComplete="off"
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
        />
        {query && (
          <button type="button" aria-label="Clear search" onClick={() => { setQuery(""); setOpen(false); }}>
            <X className="size-3.5" />
          </button>
        )}
      </div>
      {showPanel && (
        <div className="site-search-panel" role="listbox">
          {results.length === 0 ? (
            <p className="site-search-empty">No matches for “{query.trim()}”.</p>
          ) : (
            results.map((r, i) => (
              <button
                key={`${r.path}-${r.title}`}
                type="button"
                role="option"
                aria-selected={i === active}
                data-active={i === active}
                className="site-search-item"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(r.path)}
              >
                <span className="site-search-item-title">{r.title}</span>
                <span className="site-search-item-group">{r.group}</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
