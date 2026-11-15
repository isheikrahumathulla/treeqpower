import { createFileRoute } from "@tanstack/react-router";
import { pages, redirects, hiddenPages } from "@/lib/site-data";
import { groupPages } from "@/lib/service-groups";
import { blogPosts } from "@/lib/blog-content";
import { createSitemap } from "@/lib/sitemap";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const redirected = new Set(Object.keys(redirects as Record<string, string>));
        const xml = createSitemap(
          [...Object.keys(pages), ...Object.keys(groupPages), ...blogPosts.map((b) => b.path)],
          hiddenPages,
          redirected,
        );
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
