import { SiteLink } from "@/components/site-link";
import { Button } from "@/components/ui/button";
import { } from "lucide-react";
import { blogPosts } from "@/lib/blog-content";

export function BlogIndexPage() {
  return (
    <main className="blog-page">
      <div className="zoho-shell blog-page-inner">
        <nav className="coming-soon-crumbs" aria-label="Breadcrumb">
          <SiteLink to="/">Home</SiteLink>
          <span aria-hidden="true">/</span>
          <span>Resources</span>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Blogs</span>
        </nav>
        <p className="zoho-kicker">Resources</p>
        <h1>Blogs</h1>
        <p className="blog-page-lead">
          Technical notes and company insight from the TreeQ Power engineering, inspection and asset
          integrity teams in Dubai.
        </p>
        <div className="blog-card-grid">
          {blogPosts.map((post) => (
            <article className="blog-card reveal" key={post.slug}>
              <SiteLink to={post.path} className="blog-card-media">
                <img src={post.image} alt={post.imageAlt} loading="lazy" />
              </SiteLink>
              <div className="blog-card-body">
                <p className="blog-card-meta">
                  <span>{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.datePublished}>{post.dateDisplay}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </p>
                <h2>
                  <SiteLink to={post.path}>{post.title}</SiteLink>
                </h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <Button variant="outline" asChild>
                  <SiteLink to={post.path}>
                    Read article
                  </SiteLink>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
