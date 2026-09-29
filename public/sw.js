/* TreeQ Power service worker — offline-capable local cache.
   Strategy:
   - Hashed build assets, images, fonts: cache-first (instant repeat loads).
   - HTML navigations: network-first with cache fallback (never serves a stale
     document that points at deleted chunks, but still works offline).
*/

const VERSION = "treeq-v2";
const STATIC_CACHE = `${VERSION}-static`;
const PAGE_CACHE = `${VERSION}-pages`;

const STATIC_DESTINATIONS = new Set(["style", "script", "image", "font"]);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGE_CACHE)
      .then((cache) => cache.add(new Request("/", { cache: "reload" })))
      .catch(() => undefined)
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== PAGE_CACHE)
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

async function cacheFirst(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  if (cached) {
    // Refresh in the background so updated files land for the next visit.
    fetch(request)
      .then((response) => {
        if (response && (response.ok || response.type === "opaque")) {
          cache.put(request, response.clone());
        }
      })
      .catch(() => undefined);
    return cached;
  }
  const response = await fetch(request);
  if (response && (response.ok || response.type === "opaque")) {
    cache.put(request, response.clone()).catch(() => undefined);
  }
  return response;
}

async function networkFirstPage(request) {
  const cache = await caches.open(PAGE_CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone()).catch(() => undefined);
    }
    return response;
  } catch (error) {
    const cached = (await cache.match(request)) || (await cache.match("/"));
    if (cached) return cached;
    throw error;
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Never touch API traffic or server functions.
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/_serverFn")) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request));
    return;
  }

  const sameOrigin = url.origin === self.location.origin;
  const isFontHost =
    url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";

  if ((sameOrigin && STATIC_DESTINATIONS.has(request.destination)) || isFontHost) {
    event.respondWith(cacheFirst(request));
  }
});
