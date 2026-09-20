import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    let intersection: IntersectionObserver | null = null;
    let mutation: MutationObserver | null = null;
    const registered = new WeakSet<HTMLElement>();

    const start = window.setTimeout(() => {
      const root = ref.current;
      if (!root) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduced) {
        const markAll = () =>
          root.querySelectorAll<HTMLElement>(".reveal").forEach((el) => el.classList.add("is-visible"));
        markAll();
        mutation = new MutationObserver(markAll);
        mutation.observe(root, { childList: true, subtree: true });
        return;
      }

      intersection = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              intersection?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
      );

      const register = () => {
        root.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach((el) => {
          if (registered.has(el)) return;
          registered.add(el);
          if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
            el.classList.add("is-visible");
          } else {
            intersection?.observe(el);
          }
        });
      };

      register();
      mutation = new MutationObserver(register);
      mutation.observe(root, { childList: true, subtree: true });
    }, 80);

    return () => {
      window.clearTimeout(start);
      intersection?.disconnect();
      mutation?.disconnect();
    };
  }, [pathname]);

  return (
    <div key={pathname} ref={ref} className="page-fade">
      {children}
    </div>
  );
}
