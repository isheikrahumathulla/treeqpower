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
import omniyatAsset from "@/assets/clients/omniyat.jpeg.asset.json";
import bureauVeritasAsset from "@/assets/clients/bureau-veritas-oman.svg.asset.json";

export type Client = {
  name: string;
  logo: string;
};

export const clients: Client[] = [
  { name: "Mina Petroleum, Oman", logo: minaGroup },
  { name: "Advario (Formerly Oiltanking Oman)", logo: advario },
  { name: "Penspen International Limited, UAE", logo: penspen },
  { name: "DNV GL – Oman & UAE", logo: dnv },
  { name: "REI OIL & GAS PROCESS SERVICES LLC", logo: reiProcess },
  { name: "Bureau Veritas Oman", logo: bureauVeritasAsset.url },
  { name: "Omniyat", logo: omniyatAsset.url },
  { name: "Emaar", logo: emaar },
  { name: "DAMAC", logo: damac },
  { name: "GE Vernova", logo: geVernova },
  { name: "Al Ghurair", logo: alGhurair },
  { name: "Dubai Holding", logo: dubaiHolding },
  { name: "Ejadah Asset Management Group", logo: ejadah },
  { name: "Emrill", logo: emrill },
  { name: "Imdaad", logo: imdaad },
];