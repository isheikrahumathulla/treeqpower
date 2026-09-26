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
import capEngineeringDesign from "@/assets/home/capabilities/engineering-design.webp";
import capTechnicalFieldServices from "@/assets/home/capabilities/technical-field-services.webp";
import capPowerSystemsSwitchgear from "@/assets/home/capabilities/power-systems-switchgear.webp";
import capIndustrialAutomation from "@/assets/home/capabilities/industrial-automation.webp";
import capTestingInspectionDiagnostics from "@/assets/home/capabilities/testing-inspection-diagnostics.webp";
import capAssetIntegrityRbi from "@/assets/home/capabilities/asset-integrity-rbi.webp";
import capMepBuildingTechnologies from "@/assets/home/capabilities/mep-building-technologies.webp";
import capRenewableEnergySustainability from "@/assets/home/capabilities/renewable-energy-sustainability.webp";

export type HomeLinkItem = {
  title: string;
  text: string;
  to: string;
  icon: LucideIcon;
  image?: string;
  imageAlt?: string;
};

export const capabilityStrip = [
  { title: "Engineering & Design", to: "/services/engineering/engineering-design", icon: CircuitBoard },
  { title: "Electrical & MEP Services", to: "/services", icon: Building2 },
  { title: "Power Systems", to: "/our-services/electrical-automation/electromechanical-solutions", icon: Zap },
  { title: "Automation & Controls", to: "/our-services/electrical-automation/automation-control", icon: Gauge },
  { title: "Testing & Inspection", to: "/our-services/inspection-project-services", icon: ScanLine },
  { title: "Asset Integrity", to: "/our-services/asset-integrity/asset-integrity-management", icon: ShieldCheck },
  { title: "Maintenance & Field Services", to: "/services/field-maintenance/electrical-site-services", icon: Wrench },
  { title: "Sustainable Energy", to: "/services/sustainability/green-energy-sustainable-design", icon: SunMedium },
];

export const coreCapabilities: HomeLinkItem[] = [
  { title: "Engineering & Design", text: "Power system studies, equipment sizing, protection coordination, power quality analysis, design review and earthing studies.", to: "/services/engineering/engineering-design", icon: CircuitBoard, image: capEngineeringDesign, imageAlt: "Engineering team reviewing electrical design schemes and calculations" },
  { title: "Technical Field Services", text: "Installation, testing, commissioning, maintenance, troubleshooting and diagnostics for electrical and electromechanical systems.", to: "/services/field-maintenance/electrical-site-services", icon: Wrench, image: capTechnicalFieldServices, imageAlt: "Field technician working on an electrical control panel" },
  { title: "Power Systems & Switchgear", text: "HV, MV and LV switchgear, transformers, protection systems, busducts, capacitor banks, UPS and batteries.", to: "/our-services/electrical-automation/electromechanical-solutions", icon: Zap, image: capPowerSystemsSwitchgear, imageAlt: "Industrial electrical switchgear and control panel room" },
  { title: "Industrial Automation", text: "PLC, SCADA, HMI, VFD, soft starter, DCS, control-panel and remote I/O solutions.", to: "/our-services/electrical-automation/automation-control", icon: Gauge, image: capIndustrialAutomation, imageAlt: "Operator running an industrial machinery control panel" },
  { title: "Testing, Inspection & Diagnostics", text: "Electrical testing, thermography, cable fault location, third-party inspection, NDT and equipment diagnostics.", to: "/our-services/inspection-project-services", icon: ScanLine, image: capTestingInspectionDiagnostics, imageAlt: "Electrician diagnosing an electrical panel with a multimeter" },
  { title: "Asset Integrity & RBI", text: "Risk-based inspection, integrity assessment, inspection planning and lifecycle decision support for critical assets.", to: "/our-services/asset-integrity/rbi-risk-based-inspection", icon: ShieldCheck, image: capAssetIntegrityRbi, imageAlt: "Operator inspecting a large industrial stainless steel vessel" },
  { title: "MEP & Building Technologies", text: "HVAC, lighting, fire and life-safety systems, controls and associated electromechanical infrastructure.", to: "/our-services/electrical-automation", icon: Building2, image: capMepBuildingTechnologies, imageAlt: "Industrial interior with exposed HVAC ductwork" },
  { title: "Renewable Energy & Sustainability", text: "Solar energy, energy audits, sustainable design, energy management and performance-focused engineering.", to: "/services/sustainability/green-energy-sustainable-design", icon: SunMedium, image: capRenewableEnergySustainability, imageAlt: "Electricians inspecting a rooftop solar panel installation" },
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
  { title: "Engineering & Design", text: "Studies, calculations and coordinated system design.", to: "/services/engineering/engineering-design", icon: CircuitBoard, image: homeImages.plans, imageAlt: "Electrical engineering plans under technical review" },
  { title: "Consultancy Services", text: "MEP, energy and project engineering consultancy.", to: "/services/engineering/consultancy", icon: ClipboardCheck, image: lib.dubaiSkylineAerial, imageAlt: "Engineer reviewing technical equipment and drawings" },
  { title: "Technical Field Services", text: "Installation, testing, commissioning and maintenance.", to: "/services/field-maintenance/electrical-site-services", icon: HardHat, image: homeImages.engineer, imageAlt: "Electrical field engineer at an industrial installation" },
  { title: "Electronic Repair Services", text: "Diagnostics and repair for industrial electronics.", to: "/services/field-maintenance/electronics-repair-maintenance", icon: CircuitBoard, image: lib.networkCabinet, imageAlt: "Close-up inspection of an industrial electronic assembly" },
  { title: "Generator & Load Bank Services", text: "Temporary power, testing and maintenance support.", to: "/services/field-maintenance/generator-load-bank-services", icon: BatteryCharging, image: lib.standbyGenerator, imageAlt: "Industrial equipment maintenance work" },
  { title: "Testing Equipment Rental", text: "Specialist instruments for planned electrical field work.", to: "/services/testing-inspection/testing-equipment-rental", icon: Activity, image: lib.precisionInstrumentWork, imageAlt: "Electrical technician prepared for field testing" },
  { title: "Inspection & Project Services", text: "Independent inspection, expediting and project support services.", to: "/our-services/inspection-project-services", icon: ScanLine, image: lib.weldingFabrication, imageAlt: "Industrial equipment inspection and diagnostics" },
  { title: "Cable Fault Testing & Location", text: "Cable diagnosis, route tracing, testing and repair support.", to: "/services/testing-inspection/cable-fault-location", icon: Cable, image: lib.overheadLineInsulator, imageAlt: "Electrical transmission infrastructure" },
  { title: "Green Energy & Sustainable Design", text: "Energy audits, modelling and renewable integration.", to: "/services/sustainability/green-energy-sustainable-design", icon: SunMedium, image: lib.rooftopSolarArray, imageAlt: "Commercial solar photovoltaic installation" },
  { title: "Earthing & Lightning Protection", text: "Grounding studies, design, assessment and testing.", to: "/services/sustainability/earthing-lightning-protection", icon: RadioTower, image: lib.latticeTower, imageAlt: "Power infrastructure requiring coordinated protection" },
  { title: "Asset Integrity Services", text: "Risk, condition and inspection planning across the asset lifecycle.", to: "/our-services/asset-integrity/asset-integrity-management", icon: ShieldCheck, image: lib.refineryDusk, imageAlt: "Industrial asset maintenance and integrity activity" },
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