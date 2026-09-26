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

type Client = { name: string; logo?: string };

const clients: Client[] = [
  { name: "Mina Petroleum, Oman", logo: minaGroup },
  { name: "Energy Engineering, UAE" },
  { name: "Advario (Formerly Oiltanking Oman)", logo: advario },
  { name: "Penspen International Limited, UAE", logo: penspen },
  { name: "DNV GL – Oman & UAE", logo: dnv },
  { name: "REI OIL & GAS PROCESS SERVICES LLC", logo: reiProcess },
  { name: "Bureau Veritas Oman" },
  { name: "KTI" },
  { name: "Omaniyat" },
  { name: "Emaar", logo: emaar },
  { name: "DAMAC", logo: damac },
  { name: "GE Vernova", logo: geVernova },
  { name: "Al Ghurair", logo: alGhurair },
  { name: "Dubai Holding", logo: dubaiHolding },
  { name: "Ejadah Asset Management Group", logo: ejadah },
  { name: "Emrill", logo: emrill },
  { name: "Imdaad", logo: imdaad },
];

export function OurClientsPage() {
  return <main className="our-clients-page">
    <div className="zoho-shell">
      <Breadcrumbs trail={[{ label: "Home", to: "/" }, { label: "About Us", to: "/about-us" }, { label: "Our Clients" }]} />
      <header className="our-clients-head reveal">
        <p className="zoho-kicker">About TreeQ Power</p>
        <h1>Our Clients</h1>
      </header>
      <section className="our-clients-grid" aria-label="TreeQ Power clients">
        {clients.map((client, i) => <article className="our-client-card" tabIndex={0} key={client.name} style={{ animationDelay: `${i * 60}ms` }}>
          <div className="our-client-logo">
            {client.logo
              ? <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
              : <span className="our-client-placeholder" aria-hidden="true">{client.name.split(/[ ,(]/)[0]}</span>}
          </div>
          <h2>{client.name}</h2>
        </article>)}
      </section>
    </div>
  </main>;
}