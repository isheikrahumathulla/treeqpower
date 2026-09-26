import {
  Activity,
  BatteryCharging,
  Cable,
  CircuitBoard,
  ClipboardCheck,
  Gauge,
  HardHat,
  Leaf,
  SearchCheck,
  ShieldCheck,
  SunMedium,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { lib } from "@/lib/image-library";
import { homeImages } from "@/lib/home-images";

export type ServiceCard = {
  title: string;
  description: string;
  areas: string[];
  to: string;
  icon: LucideIcon;
};

export const serviceCategories = [
  { number: "01", title: "Engineering & Technical Services", description: "Core Services, Specialized Technical Solutions and Field & Testing Services.", items: ["Core Services", "Specialized Technical Solutions", "Field & Testing Services"], to: "/our-services/engineering-technical-services", label: "Explore Engineering & Technical Services", icon: CircuitBoard },
  { number: "02", title: "Inspection & Project Services", description: "Independent, impartial and integrated Third-Party Inspection, Expediting and Project Support Services.", items: ["Independent Inspection Services", "Expediting", "Vendor Assessment", "Project QA-QC Management"], to: "/our-services/inspection-project-services", label: "Explore Inspection & Project Services", icon: ClipboardCheck },
  { number: "03", title: "Asset Integrity", description: "Integrated risk and corrosion management for safer, reliable and execution-ready assets.", items: ["RBI – Risk Based Inspection", "CRAS – Corrosion Risk Assessment", "NII – Non-Intrusive Inspection", "FFS – Fitness-for-Service"], to: "/our-services/asset-integrity", label: "Explore", icon: ShieldCheck },
  { number: "04", title: "Electrical & Automation", description: "End-to-end Electrical & Automation services covering design, engineering, manufacturing, assembly, supply, installation, testing, commissioning and maintenance.", items: ["Electromechanical Solutions", "Automation & Control", "Power System Studies & Software Expertise", "Engineering Services", "Testing & Maintenance"], to: "/our-services/electrical-automation", label: "Explore", icon: Zap },
];

export const serviceCards: ServiceCard[] = [
  { title: "Design & Engineering", description: "Electrical engineering and design support covering power systems, protection, coordination, power quality, equipment sizing, design review, site surveys and technical studies.", areas: ["Power system and load-flow studies", "Short-circuit and protection coordination", "Arc-flash studies", "Harmonics and power quality", "Voltage-drop analysis", "Equipment sizing", "Earthing design", "Substation engineering", "UPS and generator studies", "Electrical design review"], to: "/our-services/engineering-design", icon: CircuitBoard },
  { title: "Consultancy Services", description: "Technical consultancy for electrical, MEP, energy, automation and building-performance requirements, including optimization, refurbishment, energy studies and project planning.", areas: ["MEP consultancy", "Energy audits and modelling", "Design review", "Value engineering", "Lifecycle cost analysis", "Building performance", "Automation consultancy", "Retrofit planning", "Measurement and verification"], to: "/our-services/consultancy-services", icon: ClipboardCheck },
  { title: "Testing & Commissioning", description: "Site-based electrical engineering support covering installation, testing, commissioning, maintenance, troubleshooting, diagnostics and technical inspections.", areas: ["Switchgear and transformers", "Motors and generators", "MCCs and VFDs", "Protection systems", "UPS and batteries", "LV panels", "PLC/SCADA systems", "Power quality", "Thermography", "Electrical diagnostics"], to: "/our-services/technical-field-services-electrical", icon: HardHat },
  { title: "Operation & Maintenance", description: "Testing, troubleshooting, repair and refurbishment of industrial and commercial electronic control equipment and power electronics.", areas: ["Power supplies", "Inverters", "PLC electronics", "Industrial PCs", "VFDs and AC/DC drives", "Servo drives", "HMI and display equipment", "Control electronics", "Industrial electronic boards"], to: "/our-services/electronic-repair-maintenance", icon: Wrench },
  { title: "Generator & Load Bank Services", description: "Generator rental, load-bank testing, temporary power support, maintenance and technical services for planned works, commissioning, shutdowns and emergency requirements.", areas: ["Diesel generators", "Load banks", "Temporary power", "Generator testing", "Generator maintenance", "Distribution equipment", "Fuel systems", "Cables and accessories", "AMC and breakdown support"], to: "/our-services/generator-load-bank-services", icon: BatteryCharging },
  { title: "Testing Equipment Rental", description: "Specialist electrical testing equipment rental for commissioning, maintenance, diagnostics, protection testing and troubleshooting activities. Availability is subject to confirmation.", areas: ["Primary and secondary injection equipment", "Insulation and contact resistance testers", "Battery test equipment", "Power quality analyzers", "Earth resistance testers", "Cable and breaker testing equipment", "Thermography equipment", "DC power sources", "Variable transformers", "Multimeters and clamp meters"], to: "/our-services/testing-equipment-rental", icon: Gauge },
  { title: "Cable Fault Location", description: "Specialist cable diagnostics and fault-location support for electrical power and control cable systems, including testing, fault identification, route tracing and repair support.", areas: ["Cable fault location", "Sheath fault detection", "Cable identification", "Cable route tracing", "VLF and HV testing", "Cable diagnostics", "Jointing and termination support", "Cable repair support"], to: "/our-services/cable-fault-location", icon: Cable },
  { title: "Sustainable Design", description: "Energy-focused engineering and sustainable design services aimed at improving building and facility performance, reducing avoidable energy consumption and supporting long-term operational efficiency.", areas: ["Energy audits", "Energy efficiency studies", "Energy modelling", "Sustainable design", "Energy management", "HVAC and lighting optimization", "Building performance", "Measurement and verification", "Renewable energy integration", "Lifecycle cost analysis"], to: "/our-services/green-energy-sustainable-design", icon: SunMedium },
  { title: "Earthing & Lightning Protection", description: "Engineering, testing and technical support for earthing and lightning protection systems designed to support electrical safety, equipment protection and reliable system performance.", areas: ["Earthing systems", "Earth resistance testing", "Earthing grid assessment", "Lightning protection systems", "Surge protection", "Equipotential bonding", "Lightning risk considerations", "Separation-distance considerations", "System inspection and maintenance"], to: "/our-services/earthing-lightning-protection", icon: Activity },
];

export const assetIntegrityServices = [
  { title: "RBI – Risk Based Inspection", text: "Focus inspection where risk is highest.", to: "/our-services/asset-integrity/rbi-risk-based-inspection" },
  { title: "CRAS – Corrosion Risk Assessment", text: "Understand corrosion threats and prioritize mitigation.", to: "/our-services/asset-integrity/cras-corrosion-risk-assessment" },
  { title: "NII – Non-Intrusive Inspection", text: "Inspect in-service equipment safely and effectively.", to: "/our-services/asset-integrity/nii-non-intrusive-inspection" },
  { title: "FFS – Fitness-for-Service", text: "Engineering assessment to support safe operating decisions.", to: "/our-services/asset-integrity/ffs-fitness-for-service" },
  { title: "Asset Integrity Management (Overall)", text: "Applies across all four groups.", to: "/our-services/asset-integrity/asset-integrity-management" },
];

export const serviceProcess = [
  { number: "01", title: "Understand", text: "Review the client’s requirement, operational environment, existing documentation and technical objectives." },
  { number: "02", title: "Assess", text: "Conduct site surveys, data review, condition assessment, measurements or technical investigations where required." },
  { number: "03", title: "Engineer", text: "Develop the appropriate engineering solution, methodology, testing plan, inspection strategy or technical recommendation." },
  { number: "04", title: "Execute", text: "Deploy qualified technical resources, equipment and field support according to the agreed scope." },
  { number: "05", title: "Verify", text: "Test, inspect, validate and document results against the defined technical requirements." },
  { number: "06", title: "Support", text: "Provide maintenance, troubleshooting, reporting, recommendations and lifecycle support where required." },
];

export const serviceIndustries = [
  { title: "Oil & Gas", text: "Electrical, automation, instrumentation, inspection, testing and asset integrity support.", to: "/industries/oil-gas", image: lib.petrochemicalNight, alt: "Oil and gas processing facility and industrial systems" },
  { title: "Industrial", text: "Power systems, automation, maintenance, diagnostics and technical field services.", to: "/industries/industrial", image: lib.industrialWorkshop, alt: "Industrial automation engineer working with control systems" },
  { title: "Commercial", text: "Electrical, MEP, HVAC, lighting, building technologies and energy-efficiency services.", to: "/industries/commercial", image: lib.dubaiMarinaDay, alt: "Commercial buildings supported by electrical and MEP services" },
  { title: "Infrastructure", text: "Electrical systems, testing, commissioning, inspection and technical support.", to: "/industries/infrastructure", image: lib.towerCraneCabin, alt: "Large-scale infrastructure and building systems" },
  { title: "Utilities", text: "Power system services, testing, diagnostics, maintenance and asset integrity support.", to: "/industries/utilities", image: lib.transmissionGantry, alt: "Electrical transmission and utility infrastructure" },
];

export const serviceFaqs = [
  { question: "What services does TreeQ Power provide?", answer: "TreeQ Power provides electrical engineering and design, consultancy, technical field services, testing, diagnostics, electronic repair, generator and load bank services, testing equipment rental, third-party inspection, cable fault testing, earthing and lightning protection, sustainable energy services and asset integrity services." },
  { question: "Does TreeQ Power provide electrical engineering services in the UAE?", answer: "Yes. TreeQ Power provides electrical engineering and technical services for commercial, industrial, infrastructure, utility and energy-related applications in the UAE." },
  { question: "Does TreeQ Power provide electrical testing and commissioning support?", answer: "TreeQ Power provides electrical testing, diagnostics and commissioning-related technical support covering equipment and systems such as switchgear, transformers, protection systems, UPS, batteries, generators, cables and control systems, subject to project scope." },
  { question: "Does TreeQ Power provide asset integrity services?", answer: "Yes. The Asset Integrity services include RBI – Risk Based Inspection, CRAS – Corrosion Risk Assessment, NII – Non-Intrusive Inspection, FFS – Fitness-for-Service and overall Asset Integrity Management." },
  { question: "Can TreeQ Power support cable fault testing?", answer: "Yes. Cable diagnostic and fault-location services can include fault identification, sheath testing, route tracing, cable testing and repair support, subject to cable type, voltage level and site conditions." },
  { question: "Does TreeQ Power provide testing equipment rental?", answer: "Yes. Specialist electrical testing equipment may be available for rental, subject to equipment type, availability, project requirements and rental period." },
  { question: "Does TreeQ Power provide generator and load bank services?", answer: "Yes. Services can include generator rental, load-bank testing, temporary power support, maintenance and technical support, subject to equipment availability and project requirements." },
  { question: "Can TreeQ Power provide services for industrial facilities?", answer: "Yes. The service portfolio is structured to support industrial environments including electrical power systems, automation, instrumentation, testing, inspection, maintenance and asset integrity requirements." },
];

export const serviceCapabilities = ["Engineering", "Electrical", "Power Systems", "Automation", "Instrumentation", "Testing", "Inspection", "Diagnostics", "Maintenance", "Asset Integrity", "Energy", "Sustainability"];
export const serviceLifecycle = ["Assess", "Engineer", "Execute", "Test", "Commission", "Maintain", "Diagnose", "Improve"];
export const serviceImages = { hero: lib.electricalTechnician, intro: homeImages.plans, integrity: lib.refineryDusk, cta: lib.switchyardBusbars };
