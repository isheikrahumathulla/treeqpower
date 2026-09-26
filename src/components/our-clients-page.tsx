import { Breadcrumbs } from "@/components/service-group-page";
import { clients } from "@/lib/clients";

export function OurClientsPage() {
  return <main className="our-clients-page">
    <div className="zoho-shell">
      <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about-us" }, { label: "Our Clients" }]} />
      <header className="our-clients-head reveal">
        <p className="zoho-kicker">About TreeQ Power</p>
        <h1>Our Clients</h1>
      </header>
      <section className="our-clients-grid" aria-label="TreeQ Power clients">
        {clients.map((client) => <article className="our-client-card" tabIndex={0} key={client.name}>
          <div className="our-client-logo">
            <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
          </div>
          <h2>{client.name}</h2>
        </article>)}
      </section>
    </div>
  </main>;
}