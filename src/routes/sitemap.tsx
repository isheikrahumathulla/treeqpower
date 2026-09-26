import { createFileRoute } from "@tanstack/react-router";
import { SitemapPage } from "@/components/sitemap-page";

const BASE = "https://treeqpower.lovable.app";
const TITLE = "Sitemap | TreeQ Power — All Pages & Services";
const DESCRIPTION =
  "Browse every page on the TreeQ Power website: company information, engineering and technical services, inspection, asset integrity, electrical and automation, solutions, industries and resources.";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${BASE}/sitemap` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${BASE}/sitemap` }],
  }),
  component: SitemapPage,
});
