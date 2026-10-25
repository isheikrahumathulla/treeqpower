import { createFileRoute } from "@tanstack/react-router";
import { pages, redirects, hiddenPages } from "@/lib/site-data";
import { groupPages } from "@/lib/service-groups";
import { blogPosts } from "@/lib/blog-content";

const BASE_URL = "https://treeqpower.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const redirected = new Set(Object.keys(redirects as Record<string, string>));
        const paths = new Set<string>(["/", "/sitemap"]);
        for (const p of [...Object.keys(pages), ...Object.keys(groupPages), ...blogPosts.map((b) => b.path)]) {
          if (!hiddenPages.has(p) && !redirected.has(p)) paths.add(p);
        }
        const body = [...paths]
          .map((p) => `  <url><loc>${BASE_URL}${p === "/" ? "/" : p}</loc></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
