import { SITE_URL } from "./site-url";

export function createSitemap(paths: string[], hidden: Set<string>, redirected: Set<string>) {
  const escapeXml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
  })[character] ?? character);
  const entries = [...new Set(["/", "/sitemap", ...paths])]
    .filter((path) => !hidden.has(path) && !redirected.has(path) && path !== "/search")
    .sort()
    .map((path) => `  <url><loc>${escapeXml(`${SITE_URL}${path}`)}</loc></url>`)
    .join("\n");
  // Omit lastmod without authoritative page-specific content timestamps.
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}