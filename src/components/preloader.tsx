import { useEffect, useState } from "react";
import { useHydrated } from "@tanstack/react-router";
import logo from "@/assets/treeqpower-logo.png.asset.json";

export function Preloader() {
  const hydrated = useHydrated();
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!hydrated) return;
    if (sessionStorage.getItem("treeq-preloaded") === "1") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      sessionStorage.setItem("treeq-preloaded", "1");
      return;
    }
    sessionStorage.setItem("treeq-preloaded", "1");
    setShow(true);
    document.body.style.overflow = "hidden";
    const t1 = window.setTimeout(() => setLeaving(true), 900);
    const t2 = window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 1350);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, [hydrated]);

  if (!hydrated || !show) return null;

  return (
    <div className={leaving ? "preloader is-leaving" : "preloader"} aria-hidden>
      <div className="preloader-inner">
        <img src={logo.url} alt="" />
        <span className="preloader-bar">
          <span />
        </span>
      </div>
    </div>
  );
}
