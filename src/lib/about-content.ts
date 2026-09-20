import {
  Activity,
  BatteryCharging,
  Building2,
  Cable,
  CheckCircle2,
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
import { images } from "@/lib/site-data";

export type AboutCapability = { title: string; items: string[]; to: string; icon: LucideIcon };

export const aboutCapabilities: AboutCapability[] = [
  { title: "Engineering & Consultancy", items: ["Engineering & Design", "Electrical Studies", "Power Quality Analysis", "Design Review", "Equipment Sizing", "Consultancy Services", "Energy & Sustainability Studies"], to: "/services/engineering/engineering-design", icon: CircuitBoard },
  { title: "Electrical & Power", items: ["HV/MV/LV Switchgear", "Transformers", "Busducts", "Protection & Control", "Capacitor Banks", "UPS & Batteries", "Generators & Load Banks", "Cable Testing & Fault Location"], to: "/solutions/power-systems/hv-switchgear-transformers", icon: Zap },
  { title: "Automation & Controls", items: ["PLC", "HMI", "SCADA", "DCS", "VFD", "Soft Starters", "Control Panels", "Instrumentation"], to: "/solutions/automation-control/industrial-automation", icon: Gauge },
  { title: "MEP & Building Technologies", items: ["HVAC", "Lighting", "Lighting Controls", "Fire & Life Safety", "CCTV", "Access Control", "Building Technologies", "Electrical & Mechanical Services"], to: "/solutions/building-technology/building-technologies", icon: Building2 },
  { title: "Testing & Inspection", items: ["Electrical Testing", "Thermography", "Power Quality", "Third-Party Inspection", "NDT", "Equipment Diagnostics", "Cable Fault Testing", "Testing Equipment Rental"], to: "/services/testing-inspection/third-party-inspection", icon: ScanLine },
  { title: "Asset Integrity & Sustainability", items: ["Risk-Based Inspection", "Asset Integrity Assessment", "Inspection Planning", "Asset Integrity Management", "Energy Audits", "Sustainable Design", "Renewable Energy", "Energy Management"], to: "/services/asset-integrity/asset-integrity-management", icon: ShieldCheck },
];

export const aboutApproach = [
  { number: "01", title: "Understand", text: "Understand the client’s requirement, operating environment, technical constraints and objectives." },
  { number: "02", title: "Assess", text: "Review available documentation, existing systems, site conditions and asset information." },
  { number: "03", title: "Engineer", text: "Develop appropriate engineering concepts, studies, specifications and technical solutions." },
  { number: "04", title: "Execute", text: "Coordinate supply, installation, integration and field activities as applicable to the project." },
  { number: "05", title: "Verify", text: "Perform appropriate testing, inspection and commissioning activities." },
  { number: "06", title: "Support", text: "Provide maintenance, troubleshooting, diagnostics, refurbishment and lifecycle support where required." },
];

export const aboutIndustries = [
  { title: "Oil & Gas", to: "/industries/oil-gas", image: images.industrial, alt: "Oil and gas process facility and industrial equipment" },
  { title: "Industrial", to: "/industries/industrial", image: homeImages.automation, alt: "Industrial manufacturing and automation environment" },
  { title: "Commercial", to: "/industries/commercial", image: homeImages.commercial, alt: "Modern commercial buildings in Dubai" },
  { title: "Infrastructure", to: "/industries/infrastructure", image: homeImages.building, alt: "Large-scale building and infrastructure systems" },
  { title: "Utilities", to: "/industries/utilities", image: images.powerlines, alt: "Electrical utility transmission infrastructure" },
];

export const aboutReasons = [
  { number: "01", title: "Integrated Capabilities", text: "Electrical, MEP, power, automation, testing, inspection and asset integrity capabilities within one service portfolio." },
  { number: "02", title: "Engineering Focus", text: "Technical solutions built around system requirements, operating conditions and project objectives." },
  { number: "03", title: "Field Experience", text: "Practical technical support for installation, testing, commissioning, troubleshooting and maintenance activities." },
  { number: "04", title: "Lifecycle Thinking", text: "Support extending from engineering and implementation to maintenance, diagnostics, refurbishment and asset integrity." },
  { number: "05", title: "Industry Understanding", text: "Solutions structured for commercial, industrial, infrastructure, utility and energy environments." },
  { number: "06", title: "UAE-Based Support", text: "Dubai-based operations supporting clients and projects across the UAE." },
];

export const aboutValues = [
  { title: "Technical Integrity", text: "Apply engineering knowledge responsibly and communicate technical requirements clearly.", icon: CheckCircle2 },
  { title: "Quality", text: "Focus on appropriate engineering, workmanship, testing and documentation.", icon: ClipboardCheck },
  { title: "Safety", text: "Recognize safety as a fundamental consideration in engineering and field activities.", icon: HardHat },
  { title: "Responsiveness", text: "Respond to technical requirements with practical and timely support.", icon: Activity },
  { title: "Continuous Improvement", text: "Use lessons from engineering, testing, maintenance and field experience to improve solutions and processes.", icon: Settings2 },
];

export const lifecycle = [
  { title: "Engineering", icon: CircuitBoard }, { title: "Supply", icon: BatteryCharging },
  { title: "Installation", icon: Wrench }, { title: "Testing", icon: ScanLine },
  { title: "Commissioning", icon: CheckCircle2 }, { title: "Maintenance", icon: Settings2 },
  { title: "Diagnostics", icon: Activity }, { title: "Asset Integrity", icon: ShieldCheck },
];

export const aboutFaqs = [
  { question: "What is TreeQ Power?", answer: "TreeQ Power Electromechanical Works is a Dubai-based technical solutions company providing electrical, MEP, power systems, automation, testing, inspection, maintenance, sustainable energy and asset integrity services." },
  { question: "Where is TreeQ Power based?", answer: "TreeQ Power is based in Dubai, United Arab Emirates." },
  { question: "What industries does TreeQ Power support?", answer: "TreeQ Power supports commercial, industrial, infrastructure, utilities and energy-related environments, with services selected according to project and asset requirements." },
  { question: "What services does TreeQ Power provide?", answer: "TreeQ Power provides engineering and design, consultancy, technical field services, electrical testing, electronic repair, generator and load bank services, testing equipment rental, third-party inspection, cable fault testing, sustainable energy, earthing and lightning protection, and asset integrity services." },
  { question: "What solutions does TreeQ Power provide?", answer: "TreeQ Power’s solutions portfolio includes HV/MV/LV switchgear, transformers, busducts, industrial automation, instrumentation, battery and UPS systems, HVAC, lighting, building technologies and renewable energy." },
  { question: "Does TreeQ Power provide maintenance services?", answer: "TreeQ Power provides maintenance and technical field support for relevant electrical and electromechanical systems, including troubleshooting, diagnostics, refurbishment and lifecycle support." },
];

export const aboutImages = {
  hero: lib.substationTransformer,
  overview: lib.hvInsulators,
  experience: lib.transmissionSunset,
  approach: homeImages.plans,
  team: homeImages.automation,
  compliance: lib.precisionInstrumentWork,
};

export const decorativeIcons = { Factory, Cable, RadioTower, SunMedium, Lightbulb };