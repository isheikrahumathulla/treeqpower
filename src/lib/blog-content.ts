import heroRefinery from "@/assets/hero-refinery.webp";

export type BlogSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  items?: string[];
};

export type BlogPost = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  category: string;
  excerpt: string;
  description: string;
  datePublished: string;
  dateDisplay: string;
  readTime: string;
  image: string;
  imageAlt: string;
  lead: string[];
  sections: BlogSection[];
  related: { label: string; to: string }[];
};

export const companyPillarPost: BlogPost = {
  slug: "treeq-power-engineering-electromechanical-inspection-uae",
  path: "/resources/blogs/treeq-power-engineering-electromechanical-inspection-uae",
  title:
    "TreeQ Power: Inspection & Verification, Asset Integrity, Electrical and Automation Services in the UAE",
  metaTitle:
    "TreeQ Power | Inspection, Asset Integrity, Electrical & Automation in UAE",
  category: "Company Profile",
  excerpt:
    "An overview of TreeQ Power — a UAE-based engineering, inspection & verification, asset integrity and electromechanical services company with more than 20 years of combined industry experience.",
  description:
    "TreeQ Power is a UAE-based Engineering, Inspection & Verification, Asset Integrity, Risk-Based Inspection (RBI) and Electromechanical Services company serving the Oil & Gas, Energy, Power, Petrochemical and Industrial sectors.",
  datePublished: "2026-11-16",
  dateDisplay: "16 November 2026",
  readTime: "7 min read",
  image: heroRefinery,
  imageAlt: "Oil and gas refinery with distillation columns and pipe manifolds at sunset",
  lead: [
    "TreeQ Power is a UAE-based Engineering, Inspection & Verification, Asset Integrity, Risk-Based Inspection (RBI), and Electromechanical Services company, backed by more than 20 years of combined industry experience across the Oil & Gas, Energy, Power, Petrochemical, and Industrial sectors.",
    "We are supported by a team of internationally qualified and certified technical professionals with extensive field and project experience, delivering reliable, technically sound, and value-driven solutions in accordance with applicable industry standards and client requirements.",
    "This article outlines our three service areas — Inspection, Verification & Project Services; Asset Integrity; and Electrical & Automation — and how to start a conversation with our team.",
  ],
  sections: [
    {
      id: "who-we-are",
      heading: "Who TreeQ Power is",
      paragraphs: [
        "TreeQ Power brings engineering, field execution, testing, inspection, maintenance and asset integrity together under one team. Our services can be structured around individual requirements, complete project scopes or ongoing maintenance and technical support.",
        "We believe effective technical solutions begin with understanding the client's system, operating environment and project objectives.",
      ],
      items: [
        "More than 20 years of combined industry experience",
        "Internationally qualified and certified technical professionals",
        "Sectors: Oil & Gas, Energy, Power, Petrochemical and Industrial",
        "Offices in Dubai, United Arab Emirates and Salem, Tamil Nadu, India",
      ],
    },
    {
      id: "inspection",
      heading: "Inspection, Verification & Project Services",
      paragraphs: [
        "Our inspection and verification services support clients, EPC contractors, manufacturers and project stakeholders through procurement, fabrication, manufacturing and project execution — confirming that equipment and work meet the applicable specifications, codes and client requirements.",
      ],
    },
    {
      id: "asset-integrity",
      heading: "Asset Integrity",
      paragraphs: [
        "For operating plant, our asset integrity services use risk and corrosion evidence to direct inspection effort where it matters most.",
      ],
      items: [
        "RBI – Risk Based Inspection",
        "CRAS – Corrosion Risk Assessment",
        "NII – Non-Intrusive Inspection",
        "FFS – Fitness-for-Service",
      ],
    },
    {
      id: "electrical",
      heading: "Electrical Services",
      paragraphs: [
        "Our electrical team covers the full path from study and design to installation, testing and maintenance of LV and MV systems.",
      ],
      items: [
        "Power System Study",
        "Power System Design Services",
        "Electrical System Testing Services",
        "Engineering Expert Field Services",
        "Reliability Centered Maintenance (RCM) Services",
        "Breakdown Maintenance Services",
        "Electrical Installation Services",
        "Electric Power System Contracting Services",
      ],
    },
    {
      id: "automation",
      heading: "Automation",
      paragraphs: [
        "Our automation services cover control and monitoring solutions for industrial, residential and utility environments.",
      ],
      items: ["Industrial Automation", "Home Automation", "Substation Automation"],
    },
    {
      id: "contact",
      heading: "Let's discuss your technical requirement",
      paragraphs: [
        "Have an upcoming project, maintenance requirement or technical challenge? Speak with TreeQ Power to discuss your electrical, engineering, industrial or asset-related requirements.",
        "TreeQ Power Electromechanical Works LLC operates from Al Qusais 3, Dubai, United Arab Emirates. We are available Monday – Saturday, 08:00 AM – 05:00 PM, with emergency support only on Sunday, on +971 58 565 4226 or +971 55 948 9080.",
      ],
    },
  ],
  related: [
    { label: "About TreeQ Power", to: "/about-us/about-treeqpower" },
    { label: "Electrical & Automation", to: "/our-services/electrical-automation" },
    { label: "Inspection & project services", to: "/our-services/inspection-verification-project-services" },
    { label: "Asset integrity", to: "/our-services/asset-integrity" },
    { label: "Frequently asked questions", to: "/resources/faqs" },
    { label: "Contact TreeQ Power", to: "/contact" },
  ],
};

export const blogPosts: BlogPost[] = [companyPillarPost];
export const blogPostsByPath: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((p) => [p.path, p]),
);
