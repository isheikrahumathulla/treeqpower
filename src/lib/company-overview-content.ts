import { lib } from "@/lib/image-library";
import heroRefinery from "@/assets/hero-refinery.webp";

export const companyOverviewImages = {
  hero: lib.substationTransformer,
  // Same photograph the home page hero uses (client request).
  overview: heroRefinery,
  cta: lib.transmissionTowerSky,
};

// Grouped view of the approved "What We Do" service list.
export const whatWeDoGroups = [
  {
    icon: "scan",
    title: "Inspection, Verification & Project Services",
    to: "/our-services/inspection-verification-project-services",
    linkLabel: "Explore",
    items: ["Independent third-party inspection, expediting, vendor assessment, pre-shipment inspection, project QA-QC, design review and provision of project & shutdown resources."],
  },
  {
    icon: "shield",
    title: "Asset Integrity",
    to: "/our-services/asset-integrity",
    linkLabel: "Explore",
    items: ["Risk Based Inspection (RBI), Corrosion Risk Assessment (CRAS), Non-Intrusive Inspection (NII) and Fitness-for-Service (FFS) assessments for safer, reliable assets."],
  },
  {
    icon: "compass",
    title: "Electrical & Automation",
    to: "/our-services/electrical-automation",
    linkLabel: "Explore",
    items: ["Electromechanical solutions, automation & control panels, power system studies, engineering services and testing & maintenance for electrical systems."],
  },
] as const;

export const projectEnvironments = [
  { label: "Oil & Gas", to: "/industries/oil-gas" },
  { label: "Industrial Facilities", to: "/industries/industrial" },
  { label: "Commercial Developments", to: "/industries/commercial" },
  { label: "Infrastructure Projects", to: "/industries/infrastructure" },
  { label: "Utilities", to: "/industries/utilities" },
] as const;

export const approachSteps = [
  { title: "Understand", text: "Assess the project, system, equipment and operational requirements." },
  { title: "Engineer", text: "Develop practical technical solutions based on the identified requirements." },
  { title: "Implement", text: "Support supply, installation, testing and commissioning activities." },
  { title: "Maintain", text: "Provide inspection, maintenance, troubleshooting and technical support." },
  { title: "Improve", text: "Identify opportunities for reliability, efficiency, safety and lifecycle improvement." },
] as const;

