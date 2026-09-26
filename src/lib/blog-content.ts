import highVoltTransformerAsset from "@/assets/blog/blog-high-volt-transformer.png";

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
    "TreeQ Power Electromechanical LLC: Engineering, Electromechanical and Independent Inspection Services in the UAE",
  metaTitle:
    "TreeQ Power Electromechanical LLC | Engineering, Electromechanical & Inspection in UAE",
  category: "Company Profile",
  excerpt:
    "A complete profile of TreeQ Power Electromechanical LLC — registration, 2004 origins, engineering and electromechanical disciplines, independent inspection scope, asset integrity services, industries served and how to reach the team in Dubai.",
  description:
    "Company profile of TreeQ Power Electromechanical LLC, a Dubai-registered engineering, electromechanical and independent inspection services company with more than 20 years of field experience across the UAE.",
  datePublished: "2026-09-26",
  dateDisplay: "26 September 2026",
  readTime: "9 min read",
  image: highVoltTransformerAsset,
  imageAlt: "High voltage transmission towers and transformer at sunset",
  lead: [
    "Tree Q Power Electromechanical LLC is a UAE-based engineering, electromechanical and independent inspection services company, registered in Dubai, United Arab Emirates under Commercial Registration No. 829050.",
    "With more than 20 years of field experience, the company provides complete lifecycle engineering and technical solutions, from design and engineering to installation, testing, commissioning, and maintenance, along with Independent Inspection, Vendor Inspection, and Asset Integrity Inspection Services supported by internationally qualified and certified professionals.",
    "This article sets out the company in full: where it came from, what it does across each discipline, how its inspection and asset integrity work is structured, the sectors it supports, and how to start a technical conversation with the team in Dubai.",
  ],
  sections: [
    {
      id: "who-we-are",
      heading: "Who TreeQ Power is",
      paragraphs: [
        "TreeQ Power operates as a single technical organisation rather than a collection of separate trades. Engineering studies, equipment supply, installation, testing, commissioning, maintenance and independent inspection are delivered by teams that share the same technical records and the same accountability for the result.",
        "That structure matters on live sites. When the team that produced the calculations is also present for testing and commissioning, decisions taken in the field stay consistent with the original design intent instead of drifting from it.",
      ],
      items: [
        "Registered entity: Tree Q Power Electromechanical LLC",
        "Commercial Registration No. 829050, Dubai, United Arab Emirates",
        "Field experience: more than 20 years",
        "Business scope: engineering, electromechanical and independent inspection services",
      ],
    },
    {
      id: "history",
      heading: "More than 20 years of field experience",
      paragraphs: [
        "Founded in 2004 in Dubai under AL DUWAIHA ELECTROMECHANICAL DUBAI LLC, the company has delivered electrical product installations, testing and commissioning, preventive maintenance, automation, power system analysis, and energy saving solutions.",
        "Those early years established the working pattern that still defines the company: measure the system, understand the failure mechanism, then correct it — rather than replacing equipment and hoping the symptom disappears.",
      ],
    },
    {
      id: "engineering",
      heading: "Engineering and technical services",
      paragraphs: [
        "The engineering side of the business covers the full path from study to handover. Design calculations, equipment selection, protection settings, installation supervision, testing and commissioning are treated as one continuous chain of evidence, documented as the project progresses.",
      ],
      items: [
        "Design and engineering, including power system studies and equipment sizing",
        "Manufacturing, assembly, supply and trading of electrical equipment",
        "Installation across MEP, switchgear, automation and building services",
        "Testing and commissioning from high voltage down to low voltage systems",
        "Operation, maintenance and site services",
        "Consultancy services for MEP systems, energy performance and project coordination",
      ],
    },
    {
      id: "specialist",
      heading: "Specialist technical capability",
      paragraphs: [
        "Alongside conventional electromechanical delivery, TreeQ Power maintains a set of diagnostic and analytical capabilities that are usually the difference between a recurring fault and a permanent fix.",
      ],
      items: [
        "Power quality and harmonics studies",
        "Thermography and thermal condition surveys",
        "Cable termination, jointing, repair and cable fault location",
        "Asset management and energy management support",
        "Sustainable design and energy performance review",
      ],
    },
    {
      id: "inspection",
      heading: "Independent and vendor inspection",
      paragraphs: [
        "Independent inspection is a distinct part of the business, delivered impartially and kept separate from supply interests. The work supports clients, EPC contractors, manufacturers and project stakeholders through procurement, fabrication, manufacturing, inspection and project execution stages.",
        "The purpose is straightforward: verify that what was ordered is what is being built, and that it is being built to the applicable specification and codes — before it ships, not after it arrives on site.",
      ],
      items: [
        "Independent third-party inspection, testing and witnessing",
        "Vendor assessment and manufacturing capability audits",
        "Expediting and supplier follow-up through to delivery",
        "Pre-shipment inspection at supplier premises",
        "Design review of engineering documents and calculations",
        "Project QA/QC management and management system audits",
        "Provision of qualified project inspection and supervision resources",
      ],
    },
    {
      id: "asset-integrity",
      heading: "Asset integrity: RBI, CRAS, FFS and NII",
      paragraphs: [
        "For operating plant, the central question is rarely whether equipment can be inspected — it is where inspection effort should go first. TreeQ Power's asset integrity services are built around that prioritisation, using risk and corrosion evidence to direct inspection where it changes the outcome.",
      ],
      items: [
        "Risk Based Inspection (RBI): risk assessment, inspection planning and optimised intervals",
        "Corrosion Risk Assessment (CRAS): corrosion mechanism assessment and remaining life estimation",
        "Fitness for Service (FFS): evaluation of defects and suitability for continued operation",
        "Non-Intrusive Inspection (NII): condition assessment without dismantling equipment",
      ],
    },
    {
      id: "industries",
      heading: "Sectors supported",
      paragraphs: [
        "TreeQ Power's disciplines are configured around the operating environment rather than applied as a fixed package. A refinery shutdown, a commercial tower fit-out and a utility substation carry different risks, different documentation requirements and different access constraints.",
      ],
      items: [
        "Oil, gas and petrochemical facilities",
        "Power generation, transmission and utilities",
        "Industrial plants and manufacturing",
        "Commercial buildings and mixed-use developments",
        "Infrastructure and public works",
      ],
    },
    {
      id: "standards",
      heading: "Standards and qualified personnel",
      paragraphs: [
        "Inspection and integrity work is carried out by internationally qualified and certified professionals, and is performed against the client specification and the codes and standards applicable to the equipment in question. Where a project requires named certificates, qualification records and validity dates, these are provided for verification as part of the technical submission.",
      ],
    },
    {
      id: "contact",
      heading: "Talking to the team",
      paragraphs: [
        "Most enquiries begin with a short technical description: the system involved, the site conditions, and what needs to be established or resolved. From there the relevant scope can be defined properly rather than estimated.",
        "TreeQ Power Electromechanical Works LLC operates from Al Qusais 3, Dubai, United Arab Emirates. The team is available Monday to Friday, 08:00 to 17:00, with emergency support at weekends, and can be reached on +971 55 948 9080.",
      ],
    },
  ],
  related: [
    { label: "Company overview", to: "/about-us/company-overview" },
    { label: "Our services", to: "/our-services" },
    { label: "Inspection & project services", to: "/our-services/inspection-project-services" },
    { label: "Asset integrity", to: "/our-services/asset-integrity" },
    { label: "Frequently asked questions", to: "/resources/faqs" },
    { label: "Contact TreeQ Power", to: "/contact" },
  ],
};

export const blogPosts: BlogPost[] = [companyPillarPost];
export const blogPostsByPath: Record<string, BlogPost> = Object.fromEntries(
  blogPosts.map((p) => [p.path, p]),
);
