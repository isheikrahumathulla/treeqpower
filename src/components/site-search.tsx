import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Search, X } from "lucide-react";

type Props = { className?: string; onNavigate?: () => void; placeholder?: string; autoFocus?: boolean; initial?: string };

export function SiteSearch({ className, onNavigate, placeholder = "Search services, FAQs…", autoFocus, initial = "" }: Props) {
  const [query, setQuery] = useState(initial);
  const navigate = useNavigate();
  useEffect(() => setQuery(initial), [initial]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    onNavigate?.();
    navigate({ to: "/search", search: { q, page: 1 } });
  };

  return (
    <form className={`site-search ${className ?? ""}`} role="search" onSubmit={submit}>
      <div className="site-search-field">
        <Search className="size-4" aria-hidden />
        <input
          type="search"
          value={query}
          placeholder={placeholder}
          aria-label="Search the website"
          autoComplete="off"
          autoFocus={autoFocus}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button type="button" aria-label="Clear search" onClick={() => setQuery("")}>
            <X className="size-3.5" />
          </button>
        )}
        <button type="submit" className="site-search-go" aria-label="Search">
          <ArrowRight className="size-4" />
        </button>
      </div>
    </form>
  );
}

export function SearchIconPopup() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);
  return (
    <div className="search-pop hidden lg:block" ref={ref}>
      <button type="button" className="search-pop-btn" aria-label="Open search" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X className="size-4" /> : <Search className="size-4" />}
      </button>
      {open && (
        <div className="search-pop-card">
          <SiteSearch autoFocus onNavigate={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
