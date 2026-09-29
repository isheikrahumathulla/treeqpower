import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Thin progress bar pinned to the top of the viewport. It animates on every
 * click-through navigation between pages, using the site's primary green.
 */
export function NavigationProgressBar() {
  const status = useRouterState({ select: (s) => s.status });
  const location = useRouterState({ select: (s) => s.location.href });
  const settled = useRouterState({
    select: (s) => !s.isLoading && (!s.resolvedLocation || s.resolvedLocation.href === s.location.href),
  });

  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const ticker = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearAll = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (ticker.current) {
      clearInterval(ticker.current);
      ticker.current = null;
    }
  };

  const start = () => {
    clearAll();
    setVisible(true);
    setValue(0);
    requestAnimationFrame(() => setValue(8));
    ticker.current = setInterval(() => {
      setValue((v) => (v >= 88 ? v : v + Math.max(1, (90 - v) * 0.12)));
    }, 120);
  };

  const finish = () => {
    clearAll();
    setValue(100);
    timers.current.push(
      setTimeout(() => setVisible(false), 260),
      setTimeout(() => setValue(0), 560),
    );
  };

  // Start as soon as an internal link is clicked, before the router reacts.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (anchor.target && anchor.target !== "_self") return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      start();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Router-driven navigations (back/forward, redirects, programmatic).
  useEffect(() => {
    if (status === "pending" || !settled) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, settled]);

  // Only finish once the new page has actually rendered.
  useEffect(() => {
    if (!settled || status !== "idle" || !visible) return;
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => finish());
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, settled, location, visible]);

  useEffect(() => clearAll, []);

  return (
    <div
      aria-hidden={!visible}
      style={{ opacity: visible ? 1 : 0 }}
      className="pointer-events-none fixed inset-x-0 top-0 z-[9999] h-[4px] transition-opacity duration-300"
    >
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value)}
        className="h-full w-full bg-primary/10"
      >
        <div
          className="h-full bg-primary transition-[width] duration-200 ease-out"
          style={{
            width: `${value}%`,
            boxShadow: "0 0 10px var(--primary), 0 0 4px var(--primary)",
          }}
        />
      </div>
      <span className="absolute right-3 top-2 rounded-full bg-primary px-2 py-0.5 text-[11px] font-semibold tabular-nums text-primary-foreground shadow">
        {Math.round(value)}%
      </span>
    </div>
  );
}
