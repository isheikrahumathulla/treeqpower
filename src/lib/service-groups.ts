import { lib } from "@/lib/image-library";
import industrial from "@/assets/industrial.jpg";
import eaElectromechanical from "@/assets/services/ea-electromechanical.webp";
import eaAutomation from "@/assets/services/ea-automation.webp";
import eaPowerStudies from "@/assets/services/ea-power-studies.webp";
import eaEngineering from "@/assets/services/ea-engineering-services.webp";
import eaTesting from "@/assets/services/ea-testing-maintenance.webp";
import eaPumps from "@/assets/services/ea-pumps-motors.webp";
import inspectionPlatform from "@/assets/services/inspection-platform.webp";
import aiRbi from "@/assets/services/ai-brochure-1.webp";
import aiCras from "@/assets/services/ai-brochure-2.webp";
import aiNii from "@/assets/services/ai-brochure-3.webp";
import aiFfs from "@/assets/services/ai-brochure-4.webp";
import ipsIndependentInspection from "@/assets/services/inspection-project/independent-inspection.webp";
import ipsExpediting from "@/assets/services/inspection-project/expediting.webp";
import ipsVendorAssessment from "@/assets/services/inspection-project/vendor-assessment.webp";
import ipsProjectResources from "@/assets/services/inspection-project/project-resources.webp";
import ipsManagementAudit from "@/assets/services/inspection-project/management-system-audit.webp";
import ipsProjectQaQc from "@/assets/services/inspection-project/project-qa-qc.webp";
import ipsPreShipment from "@/assets/services/inspection-project/pre-shipment-inspection.webp";
import ipsDesignReview from "@/assets/services/inspection-project/design-review.webp";
import ipsUtilityEquipment from "@/assets/services/inspection-project/utility-equipment-inspection.webp";
import ipsFlangeManagement from "@/assets/services/inspection-project/flange-management-inspection.webp";
import ipsPlantAssetVerification from "@/assets/services/inspection-project/plant-asset-verification.webp";

/** Client-approved Services structure (source: client corrections workbook, Sep 2026). Names are verbatim. */
export type ListItem = { label: string; to?: string; body?: string; image?: string; items?: string[] };
export type Section = { title: string; body?: string; items: ListItem[]; layout?: "list" | "cards" | "bullets" };
export type GroupPage = {
  path: string; title: string; eyebrow: string; description: string; intro: string[];
  image: string; imageAlt: string; parent?: { label: string; to: string }; sections: Section[];
};

const B = "/our-services";
export const groupPaths = {
  ets: `${B}/engineering-technical-services`,
  ips: `${B}/inspection-project-services`,
  ai: `${B}/asset-integrity`,
  ea: `${B}/electrical-automation`,
};
const ets = { label: "Engineering & Technical Services", to: groupPaths.ets };
const ai = { label: "Asset Integrity", to: groupPaths.ai };
const ea = { label: "Electrical & Automation", to: groupPaths.ea };

const aiPaths = {
  rbi: `${groupPaths.ai}/rbi-risk-based-inspection`,
  cras: `${groupPaths.ai}/cras-corrosion-risk-assessment`,
  nii: `${groupPaths.ai}/nii-non-intrusive-inspection`,
  ffs: `${groupPaths.ai}/ffs-fitness-for-service`,
  aim: `${groupPaths.ai}/asset-integrity-management`,
};
const eaPaths = {
  em: `${groupPaths.ea}/electromechanical-solutions`,
  ac: `${groupPaths.ea}/automation-control`,
  ps: `${groupPaths.ea}/power-system-studies-software-expertise`,
  es: `${groupPaths.ea}/engineering-services`,
  tm: `${groupPaths.ea}/testing-maintenance`,
};

const eaSubs: { key: keyof typeof eaPaths; label: string; image: string; items: string[] }[] = [
  { key: "em", label: "Electromechanical Solutions", image: eaElectromechanical, items: ["MV & LV Switchgear (VCBs & ACBs)", "Busducts and Transformers", "LV Panels & Capacitor Banks", "ATS & Synchronizing Panels", "Generator AMC, Battery & UPS"] },
  { key: "ac", label: "Automation & Control", image: eaAutomation, items: ["Automation (PLC, SCADA) Panels", "VFD & Soft Starter Panels", "MCC & HVAC Control Panels"] },
  { key: "ps", label: "Power System Studies & Software Expertise", image: eaPowerStudies, items: ["Load Flow | Short Circuit | Relay Coordination | Arc Flash | Harmonics | Grid Compliance | Motor Acceleration", "ETAP | Dig SILENT Power Factory | PSS®E | PSCAD"] },
  { key: "es", label: "Engineering Services", image: eaEngineering, items: ["MEP Services & AMC", "Power Quality & Harmonic Study", "Thermography & Earth Pit Testing"] },
  { key: "tm", label: "Testing & Maintenance", image: eaTesting, items: ["Cable Fault Locating & Repairing", "Cable Laying & Termination", "Pumps Supply & Repairing", "Motor Rewinding & Testing"] },
];
const eaIntro = [
  "We provide end-to-end Electrical & Automation services covering design, engineering, manufacturing, assembly, supply, installation, testing, commissioning and maintenance. Our expertise includes electrical systems, control and automation, electrical panels, instrumentation and related industrial solutions.",
  "We support diverse industrial sectors across the Middle East and Asia with reliable, safe and cost-effective solutions tailored to our clients’ requirements.",
];

type AiDef = { key: keyof typeof aiPaths; label: string; tagline: string; image: string; sections: Section[] };
const bullets = (title: string, items: string[]): Section => ({ title, layout: "bullets", items: items.map(label => ({ label })) });
const aiGroups: AiDef[] = [
  { key: "rbi", label: "RBI – Risk Based Inspection", tagline: "Focus inspection where risk is highest", image: aiRbi, sections: [
    bullets("RBI – API RP 580 / 581", ["RBI basis, scope, assumptions and acceptance criteria", "Damage mechanisms, corrosion loops and inventory groups", "PoF, CoF, damage factor and risk drivers", "Risk matrix and prioritized equipment list", "Inspection method, coverage, effectiveness and due date", "TML / CML mark-up, optimization and monitoring-location review", "Mitigation plan, audit record and reassessment"]),
    bullets("Risk Levels", ["Very High Risk – Immediate Action", "High Risk – Short Term Action", "Medium Risk – Plan & Monitor", "Low Risk – Long Term / Monitor"]),
    bullets("RBI Deliverables", ["Risk Ranking Equipment List", "Inspection Plan & Intervals", "Risk Drivers & Assumptions", "Mitigation & Action Plan", "Reassessment Triggers", "Audit Trail & Reporting"]),
  ] },
  { key: "cras", label: "CRAS – Corrosion Risk Assessment", tagline: "Understand corrosion threats and prioritize mitigation", image: aiCras, sections: [
    bullets("CRAS – Corrosion Risk Assessment", ["Process, materials, chemistry and operating review", "Corrosion loops and piping circuitization", "Internal and external damage mechanism assessment", "Susceptibility, likelihood, consequence and risk ranking", "Corrosion control, monitoring, treatment and IOW review", "CUI, dead-leg, MIC, injection-point and erosion programs"]),
    bullets("Corrosion Monitoring Points", ["Thickness Monitoring (UT)", "Corrosion Probe", "Electrical Resistance (ER)", "Coupons"]),
    bullets("CRAS Deliverables", ["Corrosion Loop Register", "Damage Mechanism Assessment", "Corrosion Risk Ranking", "Monitoring Plan & Locations", "Mitigation & IOW / Treatment Plan", "Reports & Recommendations"]),
  ] },
  { key: "nii", label: "NII – Non-Intrusive Inspection", tagline: "Inspect in-service equipment safely and effectively", image: aiNii, sections: [
    bullets("Non-Intrusive Inspection Assessment", ["NII feasibility against degradation morphology and location", "Risk, history confidence and process stability review", "Geometry, internals, insulation, access and surface review", "Degradation-location mapping and inspection-zone mark-up", "Technique, sensitivity, coverage, effectiveness and limitations", "On-stream preparation, validation and contingency requirements", "Results review and feedback to RBI / FFS reassessment"]),
    bullets("Technologies", ["Phased Array UT", "TOFD", "UT Thickness", "RT / CR", "Advanced UT (High Temp / CUI)"]),
    bullets("NII Deliverables", ["NII Feasibility Report", "Inspection Strategy & Zone Map", "Technique & Coverage Justification", "Procedure & Settings", "Limitations & Contingency Plan", "Results & Recommendations"]),
  ] },
  { key: "ffs", label: "FFS – Fitness-for-Service", tagline: "Engineering assessment to support safe operating decisions", image: aiFfs, sections: [
    bullets("Fitness-for-Service – API 579-1 / ASME FFS-1", ["Assessment basis, flaw definition, geometry, material and loads", "Inspection-data validation and applicability screening", "Level 1, Level 2 or specialized Level 3 assessment", "Metal loss, pitting, blister / lamination and HIC / SOHIC", "Crack-like flaws, distortion, fire, creep and fatigue damage", "Remaining strength, MAWP / rerating and remaining life", "Run, monitor, repair, rerate, replace or further analysis"]),
    bullets("Assessment Scope", ["General & Local Metal Loss", "Pitting / Blister / Lamination", "Crack-like Flaws", "HIC / SOHIC"]),
    bullets("Evaluation Output", ["Remaining Strength / MAWP", "Utilization & Safety Factors", "Fitness Determination", "Monitoring Requirements"]),
    bullets("Decision Support", ["Run – Operate with Monitoring", "Repair – Repair & Reassess Prior to Return", "Replace – Replacement Recommended"]),
    bullets("FFS Deliverables", ["FFS Assessment Report", "Calculations & FEA Dossier", "Minimum Repair or Rerating Options", "Monitoring Plan (Post-Assessment)", "Decision Record & Recommendations", "Data Pack for Regulatory / Audit"]),
  ] },
  { key: "aim", label: "Asset Integrity Management (Overall)", tagline: "Applies across all four groups", image: lib.refineryDusk, sections: [
    bullets("Asset Integrity Management", ["Asset hierarchy, registers and integrity criticality", "Mechanical integrity strategy, governance and assurance", "Inspection history, anomaly, repair and replacement control", "IOWs, monitoring, KPIs and MOC triggers", "Shutdown, turnaround and on-stream workpacks", "Digital dashboards, traceability and reassessment"]),
    bullets("Deliverables – RBI / CRAS", ["Registers", "DMR", "RBI / CRAS report", "Risk matrix", "Inspection plan", "TML / CML mark-ups and optimization", "Mitigation register", "Dashboard", "Reassessment plan"]),
    bullets("Deliverables – NII / FFS", ["NII feasibility and zone map", "Technique and coverage plan", "FFS calculation report", "Remaining life", "Safe limits", "Action priority", "Decision record"]),
  ] },
];

const ipsItems: [string, string, string][] = [
  ["Independent Inspection Services", "Safety-focused third-party inspection, testing and witnessing to ensure conformance with client specifications and applicable codes and standards.", ipsIndependentInspection],
  ["Expediting", "On-time and effective expediting support from early stages to delivery, to ensure project schedules are achieved through systematic management and close follow-up with manufacturers and suppliers.", ipsExpediting],
  ["Vendor Assessment", "Audit and assessment services to evaluate manufacturers and sub-suppliers for capacity, quality systems and compliance with client and project requirements.", ipsVendorAssessment],
  ["Provision of Project Resources", "Provide skilled and experienced project resources to support inspection, quality assurance, supervision and project execution activities.", ipsProjectResources],
  ["Management System Audit", "Audit of quality, health, safety and environmental management systems to verify implementation and continual improvement in line with project and international standards.", ipsManagementAudit],
  ["Project QA-QC Management", "Project-focused QA/QC management to plan, implement and monitor inspection, testing and documentation activities in accordance with client specifications and applicable codes.", ipsProjectQaQc],
  ["Pre-Shipment Inspection", "Inspection and witnessing at supplier premises prior to shipment to ensure compliance with purchase specifications and project requirements.", ipsPreShipment],
  ["Design Review", "Technical review of design, engineering documents and calculations to ensure compliance with project specifications and recognized international standards.", ipsDesignReview],
  ["Utility Equipment Inspection", "Inspection of static and rotating equipment, pressure systems, piping, tanks and associated utilities to ensure integrity, reliability and safe operation.", ipsUtilityEquipment],
  ["Flange Management Inspection", "Inspection and verification of flanged joints, gaskets, bolting and tightening records to ensure leak-free integrity and compliance with project procedures and ASME PCC-1 requirements.", ipsFlangeManagement],
  ["Plant Asset Verification", "Physical verification of plant equipment against registers, tags, drawings and datasheets to ensure accurate asset records, traceability and readiness for maintenance and integrity programs.", ipsPlantAssetVerification],
];

export const groupPages: Record<string, GroupPage> = {};
const add = (p: GroupPage) => { groupPages[p.path] = p; };

add({ path: groupPaths.ets, title: "Engineering & Technical Services", eyebrow: "Services", description: "Core services, specialized technical solutions and field & testing services from TreeQ Power.", intro: ["TreeQ Power engineering and technical services, grouped as core services, specialized technical solutions and field & testing services."], image: lib.transmissionGantry, imageAlt: "Engineering & Technical Services — TreeQ Power", sections: [
  { title: "Core Services", layout: "list", items: [
    { label: "Design & Engineering", to: `${B}/engineering-design` }, { label: "Manufacturing & Assembly" }, { label: "Supply & Trading" }, { label: "Installation" },
    { label: "Testing & Commissioning", to: `${B}/technical-field-services-electrical` }, { label: "Operation & Maintenance", to: `${B}/electronic-repair-maintenance` }, { label: "Site Services" }, { label: "Consultancy Services", to: `${B}/consultancy-services` } ] },
  { title: "Specialized Technical Solutions", layout: "list", items: [
    { label: "Power Quality & Harmonics Studies" }, { label: "Thermography" }, { label: "Asset Management", to: aiPaths.aim }, { label: "Energy Management" }, { label: "Sustainable Design", to: `${B}/green-energy-sustainable-design` } ] },
  { title: "Field & Testing Services", layout: "list", items: [
    { label: "Testing Equipment Rental", to: `${B}/testing-equipment-rental` }, { label: "Generator & Load Bank Services", to: `${B}/generator-load-bank-services` }, { label: "Cable Fault Location", to: `${B}/cable-fault-location` }, { label: "Earthing & Lightning Protection", to: `${B}/earthing-lightning-protection` } ] },
] });

add({ path: groupPaths.ips, title: "Inspection & Project Services", eyebrow: "Services", description: "Independent inspection, expediting, vendor assessment, QA-QC and project support services from TreeQ Power.", intro: [
  "We provide independent, impartial and integrated Third-Party Inspection, Expediting and Project Support Services to the Oil & Gas, Power, Engineering and Industrial sectors.",
  "Our services support clients, EPC contractors, manufacturers and project stakeholders throughout the procurement, fabrication, manufacturing, inspection and project execution stages.",
], image: inspectionPlatform, imageAlt: "Inspection & Project Services — TreeQ Power", sections: [
  { title: "Inspection & Project Services", layout: "cards", items: ipsItems.map(([label, body, image]) => ({ label, body, image })) },
] });

add({ path: groupPaths.ai, title: "Asset Integrity", eyebrow: "Asset Integrity Management Services", description: "Asset Integrity | RBI | CRAS | FFS | NII Assessment — integrated risk and corrosion management for safer, reliable and execution-ready assets.", intro: [
  "Integrated risk and corrosion management for safer, reliable and execution-ready assets.",
  "Inspection evidence and engineering assessment for safe operating, monitoring, repair, rerating or replacement decisions.",
], image: industrial, imageAlt: "Asset Integrity — TreeQ Power", sections: [
  { title: "Asset Integrity | RBI | CRAS | FFS | NII Assessment", layout: "cards", items: aiGroups.map(g => ({ label: g.label, body: g.tagline, to: aiPaths[g.key], image: g.image })) },
] });
for (const g of aiGroups) add({ path: aiPaths[g.key], title: g.label, eyebrow: "Asset Integrity", description: `${g.label} — ${g.tagline}.`, intro: [g.tagline], image: g.image, imageAlt: `${g.label} — TreeQ Power`, parent: ai, sections: g.sections });

add({ path: groupPaths.ea, title: "Electrical & Automation", eyebrow: "Services", description: "End-to-end Electrical & Automation services from TreeQ Power: electromechanical solutions, automation & control, power system studies, engineering services, testing & maintenance.", intro: eaIntro, image: lib.hvTransformerBank, imageAlt: "Electrical & Automation — TreeQ Power", sections: [
  { title: "Electrical & Automation", layout: "cards", items: eaSubs.map(s => ({ label: s.label, to: eaPaths[s.key], image: s.image, items: s.items })) },
] });
for (const s of eaSubs) add({ path: eaPaths[s.key], title: s.label, eyebrow: "Electrical & Automation", description: `${s.label} — ${s.items.join(", ")}.`, intro: [eaIntro[0]!], image: s.image, imageAlt: `${s.label} — TreeQ Power`, parent: ea, sections: [
  { title: s.label, layout: "bullets", items: s.items.map(label => ({ label })) },
  ...(s.key === "tm" ? [{ title: "Pumps & Motors", layout: "cards" as const, items: [{ label: "Pumps Supply & Repairing · Motor Rewinding & Testing", image: eaPumps }] }] : []),
] });

/** Parent groups for Group 1 detail pages (breadcrumbs). */
export const detailParents: Record<string, { label: string; to: string }> = Object.fromEntries(
  groupPages[groupPaths.ets]!.sections.flatMap(s => s.items).filter(i => i.to && !i.to.startsWith(groupPaths.ai)).map(i => [i.to!, ets]),
);

export const servicesNav = [
  { label: "Engineering & Technical Services", to: groupPaths.ets },
  { label: "Inspection & Project Services", to: groupPaths.ips },
  { label: "Asset Integrity", to: groupPaths.ai },
  { label: "Electrical & Automation", to: groupPaths.ea },
];

/** Permanent redirects for retired addresses. */
export const redirects: Record<string, string> = {
  [`${B}/third-party-inspection`]: groupPaths.ips,
  "/services/testing-inspection/third-party-inspection": groupPaths.ips,
  [`${B}/asset-integrity/risk-based-inspection`]: aiPaths.rbi,
  "/services/asset-integrity/risk-based-inspection": aiPaths.rbi,
  [`${B}/asset-integrity/asset-integrity-assessment`]: groupPaths.ai,
  "/services/asset-integrity/asset-integrity-assessment": groupPaths.ai,
  [`${B}/asset-integrity/inspection-planning`]: groupPaths.ai,
  "/services/asset-integrity/inspection-planning": groupPaths.ai,
  "/services/asset-integrity/asset-integrity-management": aiPaths.aim,
  "/solutions": groupPaths.ea,
  "/solutions/power-systems/hv-switchgear-transformers": eaPaths.em,
  "/solutions/power-systems/lv-switchgear-busducts": eaPaths.em,
  "/solutions/power-quality/battery-ups": eaPaths.em,
  "/solutions/automation-control/industrial-automation": eaPaths.ac,
  "/solutions/automation-control/instrumentation": eaPaths.ac,
  "/solutions/building-technology/hvac": eaPaths.ac,
  "/solutions/building-technology/lighting-controls": groupPaths.ea,
  "/solutions/building-technology/building-technologies": groupPaths.ea,
  "/solutions/building-technology/renewable-energy": groupPaths.ea,
};
