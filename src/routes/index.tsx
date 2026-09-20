import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TreeQ Power Dubai | Electrical Engineering, MEP & Industrial Solutions" },
      { name: "description", content: "TreeQ Power provides electrical engineering, MEP, power systems, industrial automation, testing, inspection, field services and asset integrity solutions in Dubai and across the UAE." },
      { property: "og:title", content: "TreeQ Power Dubai | Electrical Engineering, MEP & Industrial Solutions" },
      { property: "og:description", content: "Integrated electrical engineering, MEP, power systems, automation, inspection and asset lifecycle support from Dubai, UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://treeqpower.lovable.app/" },
      { property: "og:image", content: "https://treeqpower.lovable.app/__l5e/assets-v1/cc7dfb28-75b4-4b46-a877-9c1f7c165148/treeq-power-social-power-infrastructure.webp" },
      { name: "twitter:image", content: "https://treeqpower.lovable.app/__l5e/assets-v1/cc7dfb28-75b4-4b46-a877-9c1f7c165148/treeq-power-social-power-infrastructure.webp" },
    ],
    links: [{ rel: "canonical", href: "https://treeqpower.lovable.app/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: "TreeQ Power Electromechanical Works", url: "https://treeqpower.lovable.app/", telephone: "+971 55 948 9080", email: "raj@treeqpower.com", address: { "@type": "PostalAddress", postOfficeBoxNumber: "239085", addressLocality: "Dubai", addressCountry: "AE" }, areaServed: { "@type": "Country", name: "United Arab Emirates" } }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "What does TreeQ Power do?", acceptedAnswer: { "@type": "Answer", text: "TreeQ Power provides integrated electrical, MEP, power systems, automation, testing, inspection, maintenance, asset integrity and sustainable energy solutions for commercial, industrial, infrastructure, utility and energy applications in the UAE." } },
        { "@type": "Question", name: "Where does TreeQ Power provide services?", acceptedAnswer: { "@type": "Answer", text: "TreeQ Power is based in Dubai and provides technical and project support across the UAE, subject to project requirements and service scope." } },
        { "@type": "Question", name: "Does TreeQ Power provide electrical engineering and design services?", acceptedAnswer: { "@type": "Answer", text: "Yes. TreeQ Power provides electrical engineering and design support including power system studies, equipment sizing, protection coordination, power quality analysis, design review and related technical engineering services." } },
        { "@type": "Question", name: "Does TreeQ Power provide testing and commissioning services?", acceptedAnswer: { "@type": "Answer", text: "Yes. TreeQ Power provides electrical testing, commissioning, diagnostics and technical field services for relevant electrical and electromechanical systems." } },
        { "@type": "Question", name: "Does TreeQ Power support industrial automation?", acceptedAnswer: { "@type": "Answer", text: "TreeQ Power provides industrial automation solutions covering PLC, HMI, SCADA, VFD, soft starter, control panels and related industrial control applications." } },
        { "@type": "Question", name: "Does TreeQ Power provide asset integrity and risk-based inspection services?", acceptedAnswer: { "@type": "Answer", text: "Yes. TreeQ Power’s asset integrity service portfolio includes risk-based inspection, asset integrity assessment, inspection planning and asset integrity management." } },
      ] }) },
    ],
  }),
  component: HomePage,
});
