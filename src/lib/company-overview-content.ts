import { lib } from "@/lib/image-library";

export const companyOverviewImages = {
  hero: lib.substationTransformer,
  overview: lib.dataHallBlue,
  cta: lib.transmissionTowerSky,
};

// Grouped view of the approved "What We Do" service list.
export const whatWeDoGroups = [
  {
    icon: "compass",
    title: "Engineering & Consultancy",
    to: "/our-services/engineering-design",
    linkLabel: "Explore engineering services",
    items: ["Engineering & Design", "MEP Consultancy", "Power Quality Studies and Audits"],
  },
  {
    icon: "scan",
    title: "Field, Testing & Inspection",
    to: "/our-services/technical-field-services-electrical",
    linkLabel: "Explore field & testing services",
    items: [
      "Electrical Site Services",
      "Testing & Inspection",
      "Third-Party Inspection",
      "Cable Fault Location & Testing",
      "Generator & Load Bank Services",
      "Electronics Repair & Maintenance",
      "Electrical Testing & Commissioning",
      "Earthing & Lightning Protection",
    ],
  },
  {
    icon: "shield",
    title: "Lifecycle, Asset Integrity & Energy",
    to: "/our-services/asset-integrity/asset-integrity-management",
    linkLabel: "Explore asset integrity services",
    items: [
      "Operation & Maintenance",
      "Refurbishment & Retrofit Support",
      "Asset Integrity Services",
      "Risk-Based Inspection",
      "Inspection Planning",
      "Asset Integrity Assessment",
      "Asset Integrity Management",
      "Energy & Sustainability Solutions",
    ],
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
