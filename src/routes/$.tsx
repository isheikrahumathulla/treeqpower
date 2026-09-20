import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { AboutPage } from "@/components/about-page";
import { ServicesPage } from "@/components/services-page";
import { ContactPage } from "@/components/contact-page";
import { CompanyOverviewPage } from "@/components/company-overview-page";
import { FaqsPage } from "@/components/faqs-page";
import { ComingSoonPage } from "@/components/coming-soon-page";
import { faqCategories } from "@/lib/faq-content";
import { serviceCards, serviceFaqs } from "@/lib/services-content";
import { pages } from "@/lib/site-data";
const BASE="https://treeqpower.lovable.app";
const SOCIAL_IMAGE=`${BASE}/treeq-power-social-thumbnail.png`;
export const Route=createFileRoute("/$")({
 beforeLoad:({params})=>{const path=`/${params._splat}`;if(!pages[path])throw notFound();return {data:pages[path],path}},
 component:Page
});
function Page(){const {data,path}=Route.useRouteContext();return path==="/about-us"?<AboutPage/>:path==="/our-services"?<ServicesPage/>:path==="/contact"?<ContactPage/>:path==="/about-us/company-overview"?<CompanyOverviewPage/>:path==="/resources/faqs"?<FaqsPage/>:path==="/resources/blogs"?<ComingSoonPage title="Blogs" body="TreeQ Power insights, technical updates, engineering knowledge and industry perspectives will be available here soon."/>:path==="/resources/downloads"?<ComingSoonPage title="Downloads" body="Technical brochures, company information and selected resources will be available here soon."/>:<ContentPage data={data}/>}
