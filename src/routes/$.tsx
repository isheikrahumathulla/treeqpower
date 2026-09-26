import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ServiceGroupPage } from "@/components/service-group-page";
import { groupPages, detailParents } from "@/lib/service-groups";
import { ContentPage } from "@/components/content-page";
import { AboutPage } from "@/components/about-page";
import { ServicesPage } from "@/components/services-page";
import { ContactPage } from "@/components/contact-page";
import { CompanyOverviewPage } from "@/components/company-overview-page";
import { FaqsPage } from "@/components/faqs-page";
import { ComingSoonPage } from "@/components/coming-soon-page";
import { faqCategories } from "@/lib/faq-content";
import { BlogIndexPage } from "@/components/blog-index-page";
import { BlogPostPage } from "@/components/blog-post-page";
import { blogPostsByPath } from "@/lib/blog-content";
import { serviceCards, serviceFaqs } from "@/lib/services-content";
import { pages, redirects } from "@/lib/site-data";
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
 beforeLoad:({params})=>{const raw=`/${params._splat}`;const path=raw.length>1?raw.replace(/\/+$/,""):raw;if(redirects[path])throw redirect({href:redirects[path],statusCode:301});if(!pages[path])throw notFound();return {data:pages[path],path}},
 head:({params})=>{
  const path=`/${params._splat}`;
  const data=pages[path];
  if(!data)return {meta:[{title:"Page not found — TreeQ Power"},{name:"robots",content:"noindex"}]};
  if(path==="/resources/faqs"){
   const title="TreeQ Power FAQs | Electrical, Testing, Asset Integrity & Energy Answers";
   const description="Answers on electrical engineering and UAE electrical services, testing and inspection, asset integrity and RBI, power systems, automation, MEP, HVAC and energy solutions.";
   return {...pageMeta(path,title,description),scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqCategories.flatMap(category=>category.faqs).map(({q,a})=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))})}]};
  }
  if(path==="/resources/blogs")return pageMeta(path,"TreeQ Power Blogs | Engineering, Inspection & Asset Integrity Insight","Technical notes and company insight from the TreeQ Power engineering, electromechanical, inspection and asset integrity teams in Dubai, UAE.");
  const post=blogPostsByPath[path];
  if(post){
   const trail=[{name:"Home",url:BASE},{name:"Blogs",url:`${BASE}/resources/blogs`},{name:post.category,url:`${BASE}${path}`}];
   return {...pageMeta(path,post.metaTitle,post.description),meta:[...pageMeta(path,post.metaTitle,post.description).meta,{property:"og:type",content:"article"},{property:"article:published_time",content:post.datePublished}],scripts:[
    {type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:post.title,description:post.description,datePublished:post.datePublished,dateModified:post.datePublished,inLanguage:"en",articleSection:post.category,mainEntityOfPage:{"@type":"WebPage","@id":`${BASE}${path}`},author:{"@type":"Organization",name:"TreeQ Power Electromechanical Works LLC"},publisher:{"@type":"Organization",name:"TreeQ Power Electromechanical Works LLC",url:BASE,logo:{"@type":"ImageObject",url:SOCIAL_IMAGE}}})},
    {type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:trail.map((t,i)=>({"@type":"ListItem",position:i+1,name:t.name,item:t.url}))})},
   ]};
  }
  if(path==="/contact")return pageMeta(path,"Contact TreeQ Power | Electrical Engineering & Services in Dubai, UAE","Contact TreeQ Power Electromechanical Works LLC in Al Qusais 3, Dubai. Call +971 55 948 9080 or send an enquiry for engineering, services and solutions.");
  if(path==="/about-us/company-overview")return pageMeta(path,"Company Overview | TreeQ Power — Engineering & Asset Solutions in UAE","Tree Q Power Electromechanical LLC is a UAE-based engineering, electromechanical and independent inspection services company, registered in Dubai under Commercial Registration No. 829050.");
  if(path==="/our-services"){
   const title="Engineering & Technical Services in UAE | TreeQ Power";
   const description="Explore TreeQ Power services in electrical engineering, field support, testing, inspection, generator and load bank support, sustainable design and asset integrity across the UAE.";
   return {...pageMeta(path,title,description),scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"ItemList",name:"TreeQ Power Engineering and Technical Services",itemListElement:serviceCards.map((service,index)=>({"@type":"ListItem",position:index+1,item:{"@type":"Service",name:service.title,description:service.description,url:`${BASE}${service.to}`}})),subjectOf:{"@type":"FAQPage",mainEntity:serviceFaqs.map(({question,answer})=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}}))}})}]};
  }
  if(path==="/about-us")return pageMeta(path,"About TreeQ Power | Electrical, MEP & Engineering Solutions in UAE","Learn about TreeQ Power, a Dubai-based engineering and electromechanical solutions company providing electrical, MEP, power systems, automation, inspection and asset integrity services in the UAE.");
  const gp=groupPages[path];
  if(gp){const trail=[{name:"Home",url:BASE},{name:"Services",url:`${BASE}/our-services`},...(gp.parent?[{name:gp.parent.label,url:`${BASE}${gp.parent.to}`}]:[]),{name:gp.title,url:`${BASE}${path}`}];return {...pageMeta(path,`${gp.title} | TreeQ Power`,gp.description),scripts:[{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:trail.map((t,i)=>({"@type":"ListItem",position:i+1,name:t.name,item:t.url}))})}]};}
  if(detailParents[path])return pageMeta(path,`${data.title} | TreeQ Power`,data.description);
  return pageMeta(path,`${data.eyebrow} | TreeQ Power`,data.description);
 },
 component:Page
});
function Page(){const {data,path}=Route.useRouteContext();const post=blogPostsByPath[path];return path==="/about-us"?<AboutPage/>:path==="/our-services"?<ServicesPage/>:path==="/contact"?<ContactPage/>:path==="/about-us/company-overview"?<CompanyOverviewPage/>:path==="/resources/faqs"?<FaqsPage/>:path==="/resources/blogs"?<BlogIndexPage/>:post?<BlogPostPage post={post}/>:path==="/resources/downloads"?<ComingSoonPage title="Downloads" body="Technical brochures, company information and selected resources will be available here soon."/>:groupPages[path]?<ServiceGroupPage page={groupPages[path]!}/>:<ContentPage data={data} trail={detailParents[path]?[{label:"Home",to:"/"},{label:"Services",to:"/our-services"},detailParents[path]!,{label:data.title}]:undefined}/>}
