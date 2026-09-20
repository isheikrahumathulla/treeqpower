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

const socialImageMeta = [
 {property:"og:image",content:SOCIAL_IMAGE},
 {property:"og:image:width",content:"1200"},
 {property:"og:image:height",content:"630"},
 {property:"og:image:alt",content:"TreeQ Power logo with Dubai contact and location details"},
 {name:"twitter:image",content:SOCIAL_IMAGE},
 {name:"twitter:image:alt",content:"TreeQ Power logo with Dubai contact and location details"},
];

function pageMeta(path:string,title:string,description:string){
 return {
  meta:[
   {title},
   {name:"description",content:description},
   {property:"og:title",content:title},
   {property:"og:description",content:description},
   {property:"og:type",content:"website"},
   {property:"og:url",content:`${BASE}${path}`},
   ...socialImageMeta,
   {name:"twitter:card",content:"summary_large_image"},
   {name:"twitter:title",content:title},
   {name:"twitter:description",content:description},
  ],
  links:[{rel:"canonical",href:`${BASE}${path}`}],
 };
}

export const Route=createFileRoute("/$")({
 beforeLoad:({params})=>{const path=`/${params._splat}`;if(!pages[path])throw notFound();return {data:pages[path],path}},
 head:({params})=>{
  const path=`/${params._splat}`;
  const data=pages[path];
  if(!data)return {meta:[{title:"Page not found — TreeQ Power"},{name:"robots",content:"noindex"}]};
  if(path==="/resources/faqs"){
   const title="TreeQ Power FAQs | Electrical, Testing, Asset Integrity & Energy Answers";
   const description="Answers on electrical engineering and UAE electrical services, testing and inspection, asset integrity and RBI, power systems, automation, MEP, HVAC and energy solutions.";
   return {...pageMeta(path,title,description),scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqCategories.flatMap(category=>category.faqs).map(({q,a})=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))})}]};
  }
  if(path==="/contact")return pageMeta(path,"Contact TreeQ Power | Electrical Engineering & Services in Dubai, UAE","Contact TreeQ Power Electromechanical Works LLC in Al Qusais 3, Dubai. Call +971 55 948 9080 or send an enquiry for engineering, services and solutions.");
  if(path==="/about-us/company-overview")return pageMeta(path,"Company Overview | TreeQ Power — Engineering & Asset Solutions in UAE","TreeQ Power Electromechanical Works LLC, established in 2002 in Dubai, provides integrated electrical, MEP, automation, testing, asset integrity and energy solutions.");
  if(path==="/our-services"){
   const title="Engineering & Technical Services in UAE | TreeQ Power";
   const description="Explore TreeQ Power services in electrical engineering, field support, testing, inspection, generator and load bank support, sustainable design and asset integrity across the UAE.";
   return {...pageMeta(path,title,description),scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"ItemList",name:"TreeQ Power Engineering and Technical Services",itemListElement:serviceCards.map((service,index)=>({"@type":"ListItem",position:index+1,item:{"@type":"Service",name:service.title,description:service.description,url:`${BASE}${service.to}`}})),subjectOf:{"@type":"FAQPage",mainEntity:serviceFaqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}})}]};
  }
  if(path==="/about-us")return pageMeta(path,"About TreeQ Power | Electrical, MEP & Engineering Solutions in UAE","Learn about TreeQ Power, a Dubai-based engineering and electromechanical solutions company providing electrical, MEP, power systems, automation, inspection and asset integrity services in the UAE.");
  return pageMeta(path,`${data.eyebrow} | TreeQ Power`,data.description);
 },
 component:Page
});
function Page(){const {data,path}=Route.useRouteContext();return path==="/about-us"?<AboutPage/>:path==="/our-services"?<ServicesPage/>:path==="/contact"?<ContactPage/>:path==="/about-us/company-overview"?<CompanyOverviewPage/>:path==="/resources/faqs"?<FaqsPage/>:path==="/resources/blogs"?<ComingSoonPage title="Blogs" body="TreeQ Power insights, technical updates, engineering knowledge and industry perspectives will be available here soon."/>:path==="/resources/downloads"?<ComingSoonPage title="Downloads" body="Technical brochures, company information and selected resources will be available here soon."/>:<ContentPage data={data}/>}
