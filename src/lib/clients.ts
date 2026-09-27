import dnv from "@/assets/clients/client-8.webp";
import advario from "@/assets/clients/client-9.webp";
import minaGroup from "@/assets/clients/client-10.webp";
import reiProcess from "@/assets/clients/client-11.webp";
import penspen from "@/assets/clients/client-12.webp";
import damac from "@/assets/clients/client-13.webp";
import emaar from "@/assets/clients/client-14.webp";
import geVernova from "@/assets/clients/client-15.webp";
import alGhurair from "@/assets/clients/client-16.webp";
import dubaiHolding from "@/assets/clients/client-17.webp";
import ejadah from "@/assets/clients/client-18.webp";
import emrill from "@/assets/clients/client-19.webp";
import imdaad from "@/assets/clients/client-20.webp";
import omniyatAsset from "@/assets/clients/omniyat.webp";
import bureauVeritasAsset from "@/assets/clients/bureau-veritas-oman.svg";
import energyEngineering from "@/assets/clients/energy-engineering.webp";
import iqcGlobal from "@/assets/clients/iqc-global.webp";
import ktiMiddleEast from "@/assets/clients/kti-middle-east.webp";

export type Client = {
  name: string;
  logo: string;
};

export const clients: Client[] = [
  { name: "Mina Petroleum, Oman", logo: minaGroup },
  { name: "Advario (Formerly Oiltanking, Oman)", logo: advario },
  { name: "Penspen International Limited, UAE", logo: penspen },
  { name: "DNV GL – Oman & UAE", logo: dnv },
  { name: "REI OIL & GAS PROCESS SERVICES LLC", logo: reiProcess },
  { name: "Bureau Veritas Oman", logo: bureauVeritasAsset },
  { name: "Omniyat", logo: omniyatAsset },
  { name: "Emaar", logo: emaar },
  { name: "DAMAC", logo: damac },
  { name: "GE Vernova", logo: geVernova },
  { name: "Al Ghurair", logo: alGhurair },
  { name: "Dubai Holding", logo: dubaiHolding },
  { name: "Ejadah Asset Management Group", logo: ejadah },
  { name: "Energy Engineering", logo: energyEngineering },
  { name: "IQC Global Engineering LLC", logo: iqcGlobal },
  { name: "Korean Techno Inspection Middle East Co. LLC", logo: ktiMiddleEast },
  { name: "Emrill", logo: emrill },
  { name: "Imdaad", logo: imdaad },
];