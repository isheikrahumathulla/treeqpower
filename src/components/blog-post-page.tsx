import { SiteLink } from "@/components/site-link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import type { BlogPost } from "@/lib/blog-content";

export function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <main className="blog-post">
      <div className="zoho-shell blog-post-head">
        <nav className="coming-soon-crumbs" aria-label="Breadcrumb">
          <SiteLink to="/">Home</SiteLink>
          <span aria-hidden="true">/</span>
          <span>Resources</span>
          <span aria-hidden="true">/</span>
          <SiteLink to="/resources/blogs">Blogs</SiteLink>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{post.category}</span>
        </nav>
        <p className="zoho-kicker">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="blog-post-meta">
          <time dateTime={post.datePublished}>{post.dateDisplay}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </p>
      </div>

      <figure className="blog-post-figure">
        <div className="zoho-shell">
          <img src={post.image} alt={post.imageAlt} />
        </div>
      </figure>

      <div className="zoho-shell blog-post-layout">
        <aside className="blog-post-toc" aria-label="On this page">
          <p>On this page</p>
          <ol>
            {post.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.heading}</a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="blog-post-body">
          {post.lead.map((p) => (
            <p className="blog-post-lead" key={p.slice(0, 40)}>
              {p}
            </p>
          ))}

          {post.sections.map((section) => (
            <section className="blog-post-section reveal" id={section.id} key={section.id}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>
                      <Check aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="blog-post-related">
            <h2>Related pages</h2>
            <ul>
              {post.related.map((r) => (
                <li key={r.to}>
                  <SiteLink to={r.to}>{r.label}</SiteLink>
                </li>
              ))}
            </ul>
          </section>

          <div className="blog-post-cta">
            <h2>Discuss a requirement with the TreeQ Power team</h2>
            <p>
              Share the system, the site and what needs to be established. The team in Dubai can
              review it and define the relevant technical scope.
            </p>
            <div>
              <Button size="lg" asChild>
                <SiteLink to="/contact">
                  Start an enquiry <ArrowRight />
                </SiteLink>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <SiteLink to="/our-services">Explore services</SiteLink>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
