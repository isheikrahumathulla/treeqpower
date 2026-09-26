import { Breadcrumbs } from "@/components/service-group-page";
import dnv from "@/assets/clients/client-8.png";
import advario from "@/assets/clients/client-9.png";
import minaGroup from "@/assets/clients/client-10.png";
import reiProcess from "@/assets/clients/client-11.png";
import penspen from "@/assets/clients/client-12.png";
import damac from "@/assets/clients/client-13.png";
import emaar from "@/assets/clients/client-14.png";
import geVernova from "@/assets/clients/client-15.png";
import alGhurair from "@/assets/clients/client-16.png";
import dubaiHolding from "@/assets/clients/client-17.png";
import ejadah from "@/assets/clients/client-18.png";
import emrill from "@/assets/clients/client-19.png";
import imdaad from "@/assets/clients/client-20.png";

const clients = [
  { name: "DNV", logo: dnv },
  { name: "Advario", logo: advario },
  { name: "Mina Group", logo: minaGroup },
  { name: "REI Process", logo: reiProcess },
  { name: "Penspen", logo: penspen },
  { name: "DAMAC", logo: damac },
  { name: "Emaar", logo: emaar },
  { name: "GE Vernova", logo: geVernova },
  { name: "Al Ghurair", logo: alGhurair },
  { name: "Dubai Holding", logo: dubaiHolding },
  { name: "Ejadah Asset Management Group", logo: ejadah },
  { name: "Emrill", logo: emrill },
  { name: "Imdaad", logo: imdaad },
] as const;

export function OurClientsPage() {
  return <main className="our-clients-page">
    <div className="zoho-shell">
      <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about-us" }, { label: "Our Clients" }]} />
      <header className="our-clients-head reveal">
        <p className="zoho-kicker">About TreeQ Power</p>
        <h1>Our Clients</h1>
      </header>
      <section className="our-clients-grid reveal" aria-label="TreeQ Power clients">
        {clients.map(client => <article className="our-client-card" key={client.name}>
          <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
          <h2>{client.name}</h2>
        </article>)}
      </section>
    </div>
  </main>;
}