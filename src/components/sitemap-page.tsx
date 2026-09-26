import { Breadcrumbs } from "@/components/service-group-page";
import { SiteLink } from "@/components/site-link";
import { groupPaths, groupPages, servicesNav, solutionPaths, solutionParent, detailParents } from "@/lib/service-groups";
import { blogPosts } from "@/lib/blog-content";
import { pages } from "@/lib/site-data";
import { Building2, Wrench, Layers, Factory, BookOpen } from "lucide-react";

type Entry = { label: string; to: string; children?: Entry[] };
type Group = { title: string; icon: typeof Building2; entries: Entry[] };

const titleOf = (to: string, fallback: string) => groupPages[to]?.title ?? pages[to]?.title ?? fallback;

const subEntries = (parent: string) =>
  Object.entries(groupPages)
    .filter(([path, page]) => page.parent?.to === parent && path !== parent)
    .map(([path, page]) => ({ label: page.title, to: path }));

const etsDetails = Object.entries(detailParents)
  .filter(([, parent]) => parent.to === groupPaths.ets)
  .map(([to]) => ({ label: titleOf(to, to), to }));

const industrySlugs: [string, string][] = [
  ["oil-gas", "Oil & Gas"],
  ["industrial", "Industrial"],
  ["commercial", "Commercial"],
  ["infrastructure", "Infrastructure"],
  ["utilities", "Utilities"],
];

const groups: Group[] = [
  {
    title: "Company",
    icon: Building2,
    entries: [
      { label: "Home", to: "/" },
      {
        label: "About Us",
        to: "/about-us",
        children: [
          { label: "Company Overview", to: "/about-us/company-overview" },
          { label: "Why TreeQ Power", to: "/about-us/why-treeq-power" },
          { label: "Our Clients", to: "/about-us/our-clients" },
          { label: "Brands", to: "/about-us/brands" },
          { label: "Testimonials", to: "/about-us/testimonials" },
        ],
      },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    icon: Wrench,
    entries: [
      {
        label: "Our Services",
        to: "/our-services",
        children: servicesNav.map((nav) => ({ label: nav.label, to: nav.to })),
      },
      {
        label: titleOf(groupPaths.ets, "Engineering & Technical Services"),
        to: groupPaths.ets,
        children: etsDetails,
      },
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
      { label: titleOf(groupPaths.ips, "Inspection & Project Services"), to: groupPaths.ips },
    ],
  },
  {
    title: "Solutions",
    icon: Layers,
    entries: [
      {
        label: "Solutions",
        to: solutionParent.to,
        children: solutionPaths.map((to) => ({ label: titleOf(to, to), to })),
      },
    ],
  },
  {
    title: "Industries",
    icon: Factory,
    entries: [
      {
        label: "Industries",
        to: "/industries",
        children: industrySlugs.map(([slug, label]) => ({ label, to: `/industries/${slug}` })),
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
      { label: "Sitemap", to: "/sitemap" },
    ],
  },
];

const countOf = (group: Group) =>
  group.entries.reduce((total, entry) => total + 1 + (entry.children?.length ?? 0), 0);

export function SitemapPage() {
  const total = groups.reduce((sum, group) => sum + countOf(group), 0);
  return (
    <main className="sitemap-page">
      <div className="zoho-shell">
        <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "Sitemap" }]} />
        <header className="sitemap-head reveal">
          <p className="zoho-kicker">Navigation directory</p>
          <h1>Sitemap</h1>
          <p className="sitemap-lede">
            Every page on the TreeQ Power website, grouped by section — {total} links across company
            information, services, solutions, industries and resources.
          </p>
        </header>
        <div className="sitemap-grid">
          {groups.map((group) => {
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
                    <li key={entry.to + entry.label}>
                      <SiteLink to={entry.to} className="sitemap-link is-parent">
                        {entry.label}
                      </SiteLink>
                      {entry.children && entry.children.length > 0 && (
                        <ul className="sitemap-sublist">
                          {entry.children.map((child) => (
                            <li key={child.to + child.label}>
                              <SiteLink to={child.to} className="sitemap-link">
                                {child.label}
                              </SiteLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
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
