import { pages, navGroups } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-content";
import { faqCategories } from "@/lib/faq-content";

export type SearchEntry = { title: string; path: string; group: string; text: string };

const seen = new Set<string>();
const entries: SearchEntry[] = [];

const groupFor = (path: string) => {
  if (path.startsWith("/our-services") || path.startsWith("/services")) return "Services";
  if (path.startsWith("/about-us")) return "About Us";
  if (path.startsWith("/industries")) return "Industries";
  if (path.startsWith("/resources/blogs")) return "Blogs";
  if (path.startsWith("/resources")) return "Resources";
  if (path === "/contact") return "Contact";
  return "Pages";
};

const push = (e: SearchEntry) => {
  const key = `${e.path}|${e.title}`;
  if (seen.has(key)) return;
  seen.add(key);
  entries.push(e);
};

const navLabels = new Map<string, string>();
for (const g of navGroups) {
  navLabels.set(g.to, g.label);
  for (const i of g.items) navLabels.set(i.to, i.label);
}

for (const [path, page] of Object.entries(pages)) {
  push({
    title: navLabels.get(path) ?? page.eyebrow ?? page.title,
    path,
    group: groupFor(path),
    text: [page.title, page.eyebrow, page.description, page.intro, ...page.sections.flatMap((s) => [s.title, s.body, ...(s.items ?? [])])]
      .join(" ")
      .toLowerCase(),
  });
}

push({ title: "Home", path: "/", group: "Pages", text: "home treeq power electromechanical dubai engineering electrical inspection asset integrity" });

for (const post of blogPosts) {
  push({
    title: post.title,
    path: post.path,
    group: "Blogs",
    text: [post.title, post.category, post.description, post.excerpt].join(" ").toLowerCase(),
  });
}

for (const cat of faqCategories) {
  for (const faq of cat.faqs) {
    push({ title: faq.q, path: "/resources/faqs", group: `FAQ · ${cat.label}`, text: `${faq.q} ${faq.a} ${cat.label}`.toLowerCase() });
  }
}

export const searchEntries = entries;

export function searchSite(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const words = q.split(/\s+/).filter(Boolean);
  const scored: { entry: SearchEntry; score: number }[] = [];
  for (const entry of entries) {
    const title = entry.title.toLowerCase();
    let score = 0;
    for (const w of words) {
      if (title.startsWith(w)) score += 6;
      else if (title.includes(w)) score += 4;
      else if (entry.text.includes(w)) score += 1;
      else { score = -1; break; }
    }
    if (score > 0) scored.push({ entry, score });
  }
  return scored.sort((a, b) => b.score - a.score || a.entry.title.length - b.entry.title.length).slice(0, limit).map((s) => s.entry);
}
