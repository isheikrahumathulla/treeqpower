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

export const lifecycleStages = [
  {
    icon: "compass",
    title: "Design & Engineering",
    text: "Engineering studies, system analysis, equipment sizing, protection studies, power quality analysis, substation design and technical engineering support.",
  },
  {
    icon: "package",
    title: "Supply & Installation",
    text: "Supply, installation and integration of electrical equipment, switchgear, automation systems, lighting, HVAC, renewable energy and related technical systems.",
  },
  {
    icon: "clipboard",
    title: "Testing & Commissioning",
    text: "Testing and commissioning support for electrical installations, switchgear, protection systems, transformers, cables, automation systems and associated equipment.",
  },
  {
    icon: "wrench",
    title: "Operation & Maintenance",
    text: "Planned maintenance, breakdown support, inspection, testing, troubleshooting, refurbishment and operational support for electrical and industrial assets.",
  },
  {
    icon: "shield",
    title: "Asset Integrity",
    text: "Inspection planning, risk-based inspection, asset condition assessment and integrity-focused strategies to support safer and more reliable asset operation.",
  },
] as const;

export const technicalCapabilities = [
  {
    icon: "zap",
    title: "Power Systems",
    text: "HV/MV/LV switchgear, transformers, protection systems, busducts, UPS and battery systems.",
  },
  {
    icon: "cpu",
    title: "Automation & Control",
    text: "PLC, SCADA, VFD, soft starters, control panels, instrumentation and industrial automation systems.",
  },
  {
    icon: "activity",
    title: "Electrical Engineering",
    text: "Load flow, short-circuit, protection coordination, harmonic analysis, arc-flash studies, power quality and electrical system design.",
  },
  {
    icon: "scan",
    title: "Testing & Inspection",
    text: "Electrical testing, thermography, NDT-related inspection services, third-party inspection and specialized testing equipment.",
  },
  {
    icon: "building",
    title: "MEP & Building Technologies",
    text: "HVAC, lighting and lighting controls, fire and ELV systems, building technologies and related MEP solutions.",
  },
  {
    icon: "leaf",
    title: "Energy & Sustainability",
    text: "Energy audits, energy modelling, sustainable design, renewable energy and energy-efficiency solutions.",
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

export const keyFacts = [
  { label: "Founded", value: "2004 in Dubai, as AL DUWAIHA ELECTROMECHANICAL DUBAI LLC" },
  { label: "Commercial Registration No.", value: "829050" },
  { label: "Location", value: "Dubai, United Arab Emirates" },
  { label: "Field Experience", value: "More than 20 years" },
  { label: "Business", value: "Engineering, Electromechanical & Independent Inspection Services" },
  { label: "Service Coverage", value: "Electrical, MEP, Industrial, Testing & Inspection, Automation, Asset Integrity, Energy & Sustainability" },
] as const;
