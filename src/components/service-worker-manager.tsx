import { useEffect } from "react";

/** Hostnames where a service worker must never run (Lovable preview/dev). */
function isCacheAllowed(hostname: string) {
  if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".local")) {
    return false;
  }
  if (hostname.includes("preview--") || hostname.includes("id-preview")) return false;
  if (hostname.endsWith(".lovableproject.com")) return false;
  return true;
}

/**
 * Registers the local cache worker on the live site only.
 * In preview/dev it actively removes any previously registered worker and
 * clears its caches so nothing stale is ever served while building.
 */
export function ServiceWorkerManager() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    const allowed = import.meta.env.PROD && isCacheAllowed(window.location.hostname);

    if (!allowed) {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => Promise.all(registrations.map((r) => r.unregister())))
        .then(() => {
          if ("caches" in window) {
            return caches.keys().then((keys) =>
              Promise.all(keys.filter((k) => k.startsWith("treeq-")).map((k) => caches.delete(k))),
            );
          }
          return undefined;
        })
        .catch(() => undefined);
      return;
    }

    const register = () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => {
          registration.addEventListener("updatefound", () => {
            const next = registration.installing;
            next?.addEventListener("statechange", () => {
              if (next.state === "installed") next.postMessage("SKIP_WAITING");
            });
          });
        })
        .catch(() => undefined);
    };

    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });

    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
