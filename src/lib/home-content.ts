import {
  Activity,
  BatteryCharging,
  Building2,
  Cable,
  CircuitBoard,
  ClipboardCheck,
  Factory,
  Gauge,
  HardHat,
  Lightbulb,
  RadioTower,
  ScanLine,
  Settings2,
  ShieldCheck,
  SunMedium,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { lib } from "@/lib/image-library";
import { homeImages } from "@/lib/home-images";
import capAssetIntegrityRbi from "@/assets/home/capabilities/asset-integrity-rbi.webp";

import svcIpsIndependentInspection from "@/assets/services/inspection-project/independent-inspection.webp";
import svcIpsExpediting from "@/assets/services/inspection-project/expediting.webp";
import svcIpsProjectQaQc from "@/assets/services/inspection-project/project-qa-qc.webp";
import svcAiRbi from "@/assets/services/ai-brochure-1.webp";
import svcAiCras from "@/assets/services/ai-brochure-2.webp";
import svcAiFfs from "@/assets/services/ai-brochure-4.webp";
import svcEaElectromechanical from "@/assets/services/ea-electromechanical.webp";
import svcEaAutomation from "@/assets/services/ea-automation.webp";
import svcEaPowerStudies from "@/assets/services/ea-power-studies.webp";

export type HomeLinkItem = {
  title: string;
  text: string;
  to: string;
  icon: LucideIcon;
  image?: string;
  imageAlt?: string;
};

export const capabilityStrip = [
  { title: "QA-QC & Vendor Inspection", to: "/our-services/inspection-verification-project-services", icon: ClipboardCheck },
  { title: "Risk Based Inspection (RBI)", to: "/our-services/asset-integrity/rbi-risk-based-inspection", icon: ShieldCheck },
  { title: "Corrosion Risk Assessment (CRAS)", to: "/our-services/asset-integrity/cras-corrosion-risk-assessment", icon: ScanLine },
  { title: "Non-Intrusive Inspection (NII)", to: "/our-services/asset-integrity/nii-non-intrusive-inspection", icon: Activity },
  { title: "Fitness-for-Service (FFS)", to: "/our-services/asset-integrity/ffs-fitness-for-service", icon: Gauge },
  { title: "Automation & SCADA", to: "/our-services/electrical-automation/automation-control", icon: CircuitBoard },
  { title: "Electromechanical Works", to: "/our-services/electrical-automation/electromechanical-solutions", icon: Zap },
  { title: "Testing & Maintenance", to: "/our-services/electrical-automation/testing-maintenance", icon: Wrench },
];

export const coreCapabilities: HomeLinkItem[] = [
  { title: "Inspection, Verification & Project Services", text: "Independent third-party inspection, expediting, vendor assessment, pre-shipment inspection, project QA-QC, design review and provision of project & shutdown resources.", to: "/our-services/inspection-verification-project-services", icon: ClipboardCheck, image: svcIpsIndependentInspection, imageAlt: "Independent inspection of industrial equipment" },
  { title: "Asset Integrity", text: "Risk Based Inspection (RBI), Corrosion Risk Assessment (CRAS), Non-Intrusive Inspection (NII) and Fitness-for-Service (FFS) assessments for safer, reliable assets.", to: "/our-services/asset-integrity", icon: ShieldCheck, image: capAssetIntegrityRbi, imageAlt: "Operator inspecting a large industrial stainless steel vessel" },
  { title: "Electrical & Automation", text: "Electromechanical solutions, automation & control panels, power system studies, engineering services and testing & maintenance for electrical systems.", to: "/our-services/electrical-automation", icon: Zap, image: svcEaElectromechanical, imageAlt: "Electrical switchgear and electromechanical equipment" },
];


export const reasons = [
  { number: "01", title: "Integrated Technical Capability", text: "Multiple engineering and technical disciplines under one coordinated service portfolio." },
  { number: "02", title: "Engineering-Led Approach", text: "Solutions developed around system requirements, operating conditions, technical needs and project objectives." },
  { number: "03", title: "Field Execution", text: "Practical site services covering installation, testing, commissioning, troubleshooting and maintenance." },
  { number: "04", title: "Lifecycle Perspective", text: "Support from design and implementation through maintenance, refurbishment, diagnostics and asset integrity." },
  { number: "05", title: "Industry-Focused Solutions", text: "Capabilities suited to energy, industrial, commercial, infrastructure and utility environments." },
  { number: "06", title: "UAE-Based Support", text: "Technical services and project support for clients across Dubai and the wider UAE." },
];

export const services: HomeLinkItem[] = [
  { title: "Design & Engineering", text: "Studies, calculations, equipment sizing and coordinated power system design.", to: "/our-services/engineering-design", icon: CircuitBoard, image: homeImages.plans, imageAlt: "Electrical engineering plans under technical review" },
  { title: "Technical Field Services", text: "Installation, testing, commissioning, maintenance and electrical field support.", to: "/our-services/technical-field-services-electrical", icon: HardHat, image: homeImages.engineer, imageAlt: "Electrical field engineer at an industrial installation" },
  { title: "Generator & Load Bank Services", text: "Temporary power, load bank testing, maintenance and emergency support.", to: "/our-services/generator-load-bank-services", icon: BatteryCharging, image: lib.standbyGenerator, imageAlt: "Industrial standby generator equipment" },
  { title: "Cable Fault Testing & Location", text: "Cable diagnostics, route tracing, sheath testing and fault location.", to: "/our-services/cable-fault-location", icon: Cable, image: lib.overheadLineInsulator, imageAlt: "Electrical transmission and cable infrastructure" },
  { title: "Testing Equipment Rental", text: "Specialist electrical testing instruments for commissioning and diagnostics.", to: "/our-services/testing-equipment-rental", icon: Activity, image: lib.precisionInstrumentWork, imageAlt: "Electrical technician prepared for field testing" },
  { title: "Independent Inspection Services", text: "Impartial third-party inspection, witness testing and code conformance.", to: "/our-services/inspection-verification-project-services", icon: ScanLine, image: svcIpsIndependentInspection, imageAlt: "Independent inspection of industrial equipment" },
  { title: "Expediting & Vendor Assessment", text: "Supply-chain expediting, manufacturer audits and quality system evaluation.", to: "/our-services/inspection-verification-project-services", icon: ClipboardCheck, image: svcIpsExpediting, imageAlt: "Equipment expediting and vendor assessment activity" },
  { title: "Project QA-QC & Asset Verification", text: "Quality management, specification compliance and plant asset verification.", to: "/our-services/inspection-verification-project-services", icon: ClipboardCheck, image: svcIpsProjectQaQc, imageAlt: "Project quality assurance and inspection documentation" },
  { title: "RBI – Risk Based Inspection", text: "Risk-based inspection planning and prioritized monitoring of critical assets.", to: "/our-services/asset-integrity/rbi-risk-based-inspection", icon: ShieldCheck, image: svcAiRbi, imageAlt: "Risk based inspection of industrial plant assets" },
  { title: "CRAS – Corrosion Risk Assessment", text: "Corrosion loops, damage mechanisms, monitoring and mitigation planning.", to: "/our-services/asset-integrity/cras-corrosion-risk-assessment", icon: ShieldCheck, image: svcAiCras, imageAlt: "Corrosion risk assessment of process equipment" },
  { title: "FFS – Fitness-for-Service", text: "Engineering assessment supporting safe operate, repair or rerate decisions.", to: "/our-services/asset-integrity/ffs-fitness-for-service", icon: ShieldCheck, image: svcAiFfs, imageAlt: "Fitness-for-service assessment of industrial equipment" },
  { title: "Electromechanical Solutions", text: "MV & LV switchgear, busducts, transformers, capacitor banks, battery and UPS.", to: "/our-services/electrical-automation/electromechanical-solutions", icon: Zap, image: svcEaElectromechanical, imageAlt: "Electrical switchgear and electromechanical equipment" },
  { title: "Automation & Control", text: "PLC, SCADA, VFD, soft starter, MCC and HVAC control panel solutions.", to: "/our-services/electrical-automation/automation-control", icon: Gauge, image: svcEaAutomation, imageAlt: "Industrial automation and control panel systems" },
  { title: "Power System Studies & Software", text: "Load flow, short circuit, relay coordination, arc flash and harmonics studies.", to: "/our-services/electrical-automation/power-system-studies-software-expertise", icon: Settings2, image: svcEaPowerStudies, imageAlt: "Power system study and electrical analysis work" },
];

export const solutions: HomeLinkItem[] = [
  { title: "HV Switchgear & Transformers", text: "Engineered distribution equipment and protection systems.", to: "/solutions/power-systems/hv-switchgear-transformers", icon: Zap, image: lib.hvTransformerBank, imageAlt: "High-voltage transmission and power distribution infrastructure" },
  { title: "LV Switchgear & Busducts", text: "LV assemblies, distribution panels and busduct systems.", to: "/solutions/power-systems/lv-switchgear-busducts", icon: Settings2, image: lib.lvDistributionPanel, imageAlt: "Electrical engineer beside distribution equipment" },
  { title: "Industrial Automation", text: "PLC, SCADA, DCS, drives and control-panel integration.", to: "/solutions/automation-control/industrial-automation", icon: Gauge, image: homeImages.automation, imageAlt: "Engineer developing an industrial automation system" },
  { title: "Instrumentation", text: "Measurement, monitoring and process-control support.", to: "/solutions/automation-control/instrumentation", icon: Activity, image: lib.pressureInstrumentation, imageAlt: "Technical inspection of industrial instrumentation electronics" },
  { title: "Battery & UPS", text: "Stored-energy and uninterrupted-power systems for critical loads.", to: "/solutions/power-quality/battery-ups", icon: BatteryCharging, image: lib.dataCentreRacks, imageAlt: "Technical specialist working with industrial equipment" },
  { title: "HVAC", text: "Cooling, air-handling and terminal equipment for built environments.", to: "/solutions/building-technology/hvac", icon: Factory, image: lib.mechanicalPlantRoom, imageAlt: "Modern commercial building interior with coordinated building systems" },
  { title: "Lighting & Controls", text: "Indoor, outdoor and infrastructure lighting systems.", to: "/solutions/building-technology/lighting-controls", icon: Lightbulb, image: lib.infrastructureInterchange, imageAlt: "Commercial towers with integrated lighting systems" },
  { title: "Building Technologies", text: "Life-safety, access, monitoring and communications systems.", to: "/solutions/building-technology/building-technologies", icon: Building2, image: homeImages.building, imageAlt: "Commercial environment supported by integrated building technology" },
  { title: "Renewable Energy", text: "On-grid, off-grid and specialized solar-energy systems.", to: "/solutions/building-technology/renewable-energy", icon: SunMedium, image: lib.solarInstallationTeam, imageAlt: "Commercial-scale solar photovoltaic panels" },
];

export const industries = [
  { title: "Oil & Gas", text: "Electrical, instrumentation, automation, inspection, asset integrity and maintenance support for demanding energy and process environments.", to: "/industries/oil-gas", image: lib.petrochemicalNight, imageAlt: "Technical work within a process-industry environment" },
  { title: "Industrial", text: "Power distribution, automation, maintenance, testing, diagnostics and technical support for industrial facilities.", to: "/industries/industrial", image: lib.industrialWorkshop, imageAlt: "Industrial engineering and technical equipment environment" },
  { title: "Commercial", text: "Electrical, HVAC, lighting, building technologies, power quality and maintenance solutions for commercial facilities.", to: "/industries/commercial", image: homeImages.commercial, imageAlt: "Modern commercial buildings supporting complex technical systems" },
  { title: "Infrastructure", text: "Electrical systems, power distribution, lighting, automation, testing and technical services for infrastructure projects.", to: "/industries/infrastructure", image: lib.towerCraneCabin, imageAlt: "Large-scale modern building infrastructure" },
  { title: "Utilities", text: "Power engineering, switchgear, transformers, protection, testing, commissioning and asset support for utility applications.", to: "/industries/utilities", image: lib.transmissionDusk, imageAlt: "Utility power transmission infrastructure" },
];

export const approach = [
  { number: "01", title: "Understand", text: "Define project requirements, operating environment, technical challenges and objectives." },
  { number: "02", title: "Assess", text: "Review existing systems, site conditions, asset information and technical requirements." },
  { number: "03", title: "Engineer", text: "Develop practical studies, specifications, engineering solutions and implementation plans." },
  { number: "04", title: "Supply & Execute", text: "Coordinate supply, installation, integration, testing and field execution." },
  { number: "05", title: "Test & Commission", text: "Verify system performance through appropriate technical checks, testing and commissioning." },
  { number: "06", title: "Maintain & Improve", text: "Support maintenance, diagnostics, refurbishment, optimization and asset integrity." },
];

export const technicalSolutions = [
  { title: "HV/MV Switchgear", to: "/our-services/electrical-automation/electromechanical-solutions" },
  { title: "Transformers", to: "/our-services/electrical-automation/electromechanical-solutions" },
  { title: "LV Switchgear", to: "/our-services/electrical-automation/electromechanical-solutions" },
  { title: "Busducts", to: "/our-services/electrical-automation/electromechanical-solutions" },
  { title: "Industrial Automation", to: "/our-services/electrical-automation/automation-control" },
  { title: "Protection & Control", to: "/services/engineering/engineering-design" },
  { title: "UPS & Battery Systems", to: "/our-services/electrical-automation/electromechanical-solutions" },
  { title: "Generators & Load Banks", to: "/services/field-maintenance/generator-load-bank-services" },
  { title: "Cable Fault Testing", to: "/services/testing-inspection/cable-fault-location" },
  { title: "Power Quality", to: "/services/engineering/engineering-design" },
  { title: "Testing & Diagnostics", to: "/services/testing-inspection/testing-equipment-rental" },
  { title: "Asset Integrity", to: "/our-services/asset-integrity/asset-integrity-management" },
];

export const faqs = [
  { question: "What does TreeQ Power do?", answer: "TreeQ Power provides integrated electrical, MEP, power systems, automation, testing, inspection, maintenance, asset integrity and sustainable energy solutions for commercial, industrial, infrastructure, utility and energy applications in the UAE." },
  { question: "Where does TreeQ Power provide services?", answer: "TreeQ Power is based in Dubai and provides technical and project support across the UAE, subject to project requirements and service scope." },
  { question: "Does TreeQ Power provide electrical engineering and design services?", answer: "Yes. TreeQ Power provides electrical engineering and design support including power system studies, equipment sizing, protection coordination, power quality analysis, design review and related technical engineering services." },
  { question: "Does TreeQ Power provide testing and commissioning services?", answer: "Yes. TreeQ Power provides electrical testing, commissioning, diagnostics and technical field services for relevant electrical and electromechanical systems." },
  { question: "Does TreeQ Power support industrial automation?", answer: "TreeQ Power provides industrial automation solutions covering PLC, HMI, SCADA, VFD, soft starter, control panels and related industrial control applications." },
  { question: "Does TreeQ Power provide asset integrity and risk-based inspection services?", answer: "Yes. TreeQ Power’s asset integrity service portfolio includes risk-based inspection, asset integrity assessment, inspection planning and asset integrity management." },
];