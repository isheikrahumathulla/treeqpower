import { useEffect, useState } from "react";
import logo from "@/assets/treeqpower-logo-white-hd.png.asset.json";

export function Preloader() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("treeq-preloaded") === "1";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sessionStorage.setItem("treeq-preloaded", "1");

    if (seen || reduced) {
      setShow(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const t1 = window.setTimeout(() => setLeaving(true), 700);
    const t2 = window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 1150);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

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
