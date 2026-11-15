import { Breadcrumbs } from "@/components/service-group-page";
import { SiteLink } from "@/components/site-link";
import { groupPaths, groupPages, servicesNav } from "@/lib/service-groups";
import { blogPosts } from "@/lib/blog-content";
import {pages, hiddenPages} from "@/lib/site-data";
import { Building2, Wrench, BookOpen } from "lucide-react";

type Entry = { label: string; to: string; children?: Entry[] };
type Group = { title: string; icon: typeof Building2; entries: Entry[] };

const titleOf = (to: string, fallback: string) => groupPages[to]?.title ?? pages[to]?.title ?? fallback;

const subEntries = (parent: string): Entry[] =>
  Object.entries(groupPages)
    .filter(([path, page]) => page.parent?.to === parent && path !== parent)
    .map(([path, page]) => {
      const children = subEntries(path);
      return children.length > 0
        ? { label: page.title, to: path, children }
        : { label: page.title, to: path };
    });

const groups: Group[] = [
  {
    title: "Company",
    icon: Building2,
    entries: [
      { label: "Home", to: "/" },
      {
        label: "About Us",
        to: "/about-us/about-treeqpower",
        children: [
          
          { label: "Why TreeQ Power", to: "/about-us/why-treeq-power" },
          { label: "Our Clients", to: "/about-us/our-clients" },
          { label: "Brands", to: "/about-us/brands" },
        ],
      },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    icon: Wrench,
    entries: [
      { label: titleOf(groupPaths.ips, "Inspection, Verification & Project Services"), to: groupPaths.ips },
      {
        label: titleOf(groupPaths.ai, "Asset Integrity"),
        to: groupPaths.ai,
        children: subEntries(groupPaths.ai),
      },
      {
        label: titleOf(groupPaths.ea, "Electrical & Automation"),
        to: groupPaths.ea,
        children: subEntries(groupPaths.ea),
      },
    ],
  },
  {
    title: "Resources",
    icon: BookOpen,
    entries: [
      {
        label: "Blogs",
        to: "/resources/blogs",
        children: blogPosts.map((post) => ({ label: post.title, to: post.path })),
      },
      { label: "Downloads", to: "/resources/downloads" },
      { label: "FAQs", to: "/resources/faqs" },
      { label: "Search", to: "/search" },
    ],
  },
];

const filterHidden = (entries: Entry[]): Entry[] =>
  entries
    .filter((entry) => !hiddenPages.has(entry.to))
    .map((entry) =>
      entry.children ? { ...entry, children: filterHidden(entry.children) } : entry,
    );

const visibleGroups: Group[] = groups.map((group) => ({
  ...group,
  entries: filterHidden(group.entries),
}));

const countEntries = (entries: Entry[]): number =>
  entries.reduce((total, entry) => total + 1 + (entry.children ? countEntries(entry.children) : 0), 0);

const countOf = (group: Group) => countEntries(group.entries);

const SitemapEntry = ({ entry }: { entry: Entry }) => (
  <li key={entry.to + entry.label}>
    <SiteLink to={entry.to} className="sitemap-link is-parent">
      {entry.label}
    </SiteLink>
    {entry.children && entry.children.length > 0 && (
      <ul className="sitemap-sublist">
        {entry.children.map((child) => (
          <SitemapEntry key={child.to + child.label} entry={child} />
        ))}
      </ul>
    )}
  </li>
);

export function SitemapPage() {
  const total = visibleGroups.reduce((sum, group) => sum + countOf(group), 0);
  return (
    <main className="sitemap-page">
      <div className="zoho-shell">
        <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "Sitemap" }]} />
        <header className="sitemap-head reveal">
          <p className="zoho-kicker">Navigation directory</p>
          <h1>Sitemap</h1>
          <p className="sitemap-lede">
            Every page on the TreeQ Power website, grouped by section — {total} links across company
            information, services and resources.
          </p>
        </header>
        <div className="sitemap-grid">
          {visibleGroups.map((group) => {
            const Icon = group.icon;
            return (
              <section className="sitemap-card reveal" key={group.title} aria-labelledby={`sitemap-${group.title}`}>
                <div className="sitemap-card-head">
                  <span className="sitemap-card-ic">
                    <Icon aria-hidden="true" />
                  </span>
                  <h2 id={`sitemap-${group.title}`}>{group.title}</h2>
                  <span className="sitemap-count">{countOf(group)}</span>
                </div>
                <ul className="sitemap-list">
                  {group.entries.map((entry) => (
                    <SitemapEntry key={entry.to + entry.label} entry={entry} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
