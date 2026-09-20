import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { pages } from "@/lib/site-data";
const BASE="https://treeqpower.lovable.app";
export const Route=createFileRoute("/$")({
 beforeLoad:({params})=>{const path=`/${params._splat}`;if(!pages[path])throw notFound();return {data:pages[path],path}},
 head:({params})=>{const path=`/${params._splat}`;const data=pages[path];if(!data)return {meta:[{title:"Page not found — TreeQ Power"},{name:"robots",content:"noindex"}]};return {meta:[{title:`${data.eyebrow} | TreeQ Power`},{name:"description",content:data.description},{property:"og:title",content:`${data.eyebrow} | TreeQ Power`},{property:"og:description",content:data.description},{property:"og:type",content:"website"},{property:"og:url",content:`${BASE}${path}`},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:`${BASE}${path}`}]};},
 component:Page
});
function Page(){const {data}=Route.useRouteContext();return <ContentPage data={data}/>}
