import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TreeQ Power | Electrical Engineering & Electromechanical Solutions" },
      { name: "description", content: "TreeQ Power provides electrical engineering, field services, testing, inspection and integrated power solutions from Dubai, UAE." },
      { property: "og:title", content: "TreeQ Power | Electrical Engineering & Electromechanical Solutions" },
      { property: "og:description", content: "Engineering, field services, testing, inspection and integrated power solutions from Dubai, UAE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
