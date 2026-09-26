import { Breadcrumbs } from "@/components/service-group-page";
import { SiteLink } from "@/components/site-link";
import { brands } from "@/lib/brands";

export function BrandsPage() {
  return (
    <main className="brands-page">
      <div className="zoho-shell">
        <Breadcrumbs
          trail={[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/about-us" },
            { label: "Brands" },
          ]}
        />
        <header className="brands-head reveal">
          <p className="zoho-kicker">About TreeQ Power</p>
          <h1>Brands We Support</h1>
          <p className="brands-subtitle">
            We supply, install, service and support equipment from the world's
            leading manufacturers across power, drives, automation and control.
          </p>
        </header>
        <section className="brands-grid" aria-label="Brands supported by TreeQ Power">
          {brands.map((brand) => (
            <article className="brand-card" tabIndex={0} key={brand.name}>
              <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" />
            </article>
          ))}
        </section>
        <footer className="brands-cta reveal">
          <p>
            Don't see your equipment brand listed? Contact us — we support a wide
            range of manufacturers.
          </p>
          <SiteLink to="/contact" className="brands-cta-btn">
            Contact Us
          </SiteLink>
        </footer>
      </div>
    </main>
  );
}
