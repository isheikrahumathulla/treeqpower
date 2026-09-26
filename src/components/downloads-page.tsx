import { SiteLink } from "@/components/site-link";
import { Button } from "@/components/ui/button";
import brochure from "@/assets/treeq-power-brochure.pdf.asset.json";
import { FileDown } from "lucide-react";

const downloads = [
  {
    name: "TreeQ Power - Brochure.pdf",
    description:
      "Company brochure covering TreeQ Power engineering, electromechanical and independent inspection services in the UAE.",
    href: brochure.url,
    downloadName: "TreeQ Power - Brochure.pdf",
    meta: "PDF · 485 KB",
  },
];

export function DownloadsPage() {
  return (
    <main className="downloads-page">
      <div className="zoho-shell downloads-inner">
        <nav className="coming-soon-crumbs" aria-label="Breadcrumb">
          <SiteLink to="/">Home</SiteLink>
          <span aria-hidden="true">/</span>
          <span>Resources</span>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Downloads</span>
        </nav>
        <p className="zoho-kicker">Resources</p>
        <h1>Downloads</h1>
        <p className="downloads-lead">
          Company brochures and resources from TreeQ Power. Download and share freely.
        </p>
        <ul className="downloads-list">
          {downloads.map((file) => (
            <li className="download-card reveal" key={file.name}>
              <span className="download-card-icon" aria-hidden="true">
                <FileDown size={26} strokeWidth={1.6} />
              </span>
              <div className="download-card-body">
                <h2>{file.name}</h2>
                <p>{file.description}</p>
                <p className="download-card-meta">{file.meta}</p>
              </div>
              <Button asChild>
                <a href={file.href} download={file.downloadName}>
                  Download
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
