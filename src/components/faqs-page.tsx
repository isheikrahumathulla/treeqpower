import { useMemo,useState } from "react";
import { ArrowRight,ChevronDown,Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/site-link";
import { faqCategories,faqCategoryLinks,faqCount,type Faq } from "@/lib/faq-content";
export function FaqList({faqs,idPrefix=""}:{faqs:Faq[];idPrefix?:string}){return <div className="faq-list">{faqs.map(f=><details className="faq-item" key={idPrefix+f.q}><summary><h3>{f.q}</h3><ChevronDown aria-hidden="true"/></summary><div className="faq-answer"><p>{f.a}</p></div></details>)}</div>}
export function FaqsPage(){
 const [query,setQuery]=useState("");
 const [active,setActive]=useState("all");
 const q=query.trim().toLowerCase();
 const groups=useMemo(()=>faqCategories.filter(c=>active==="all"||c.id===active).map(c=>({...c,faqs:q?c.faqs.filter(f=>f.q.toLowerCase().includes(q)||f.a.toLowerCase().includes(q)):c.faqs})).filter(c=>c.faqs.length>0),[active,q]);
 const matches=groups.reduce((n,c)=>n+c.faqs.length,0);
 return <main>
 <section className="faq-hero"><div className="zoho-shell reveal"><p className="zoho-kicker">Resources — Knowledge base</p><h1>TreeQ Power FAQs</h1><p>Clear, factual answers on electrical engineering, site services, testing and inspection, asset integrity, power systems, automation, MEP and energy solutions in Dubai and across the UAE.</p><div className="faq-hero-meta"><span>{faqCount} answers</span><span>{faqCategories.length} categories</span><span>Updated for UAE projects</span></div></div></section>
 <section className="faq-controls"><div className="zoho-shell">
  <div className="faq-search"><Search aria-hidden="true"/><label className="sr-only" htmlFor="faq-search">Search FAQs</label><input id="faq-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search questions — e.g. RBI, switchgear, load bank, energy audit"/></div>
  <div className="faq-chips" role="group" aria-label="Filter FAQs by category"><button type="button" aria-pressed={active==="all"} className={active==="all"?"is-active":""} onClick={()=>setActive("all")}>All</button>{faqCategories.map(c=><button type="button" key={c.id} aria-pressed={active===c.id} className={active===c.id?"is-active":""} onClick={()=>setActive(c.id)}>{c.short}</button>)}</div>
  <p className="faq-count" aria-live="polite">{matches} of {faqCount} questions shown</p>
 </div></section>
 {groups.map(c=><section className="faq-section reveal" id={c.id} key={c.id}><div className="zoho-shell faq-section-grid">
  <div className="faq-section-head"><p className="zoho-kicker">{c.short}</p><h2>{c.label}</h2><p>{c.faqs.length} question{c.faqs.length===1?"":"s"}</p><ul className="faq-links">{(faqCategoryLinks[c.id]??[]).map(l=><li key={l.to+l.label}><SiteLink to={l.to}>{l.label}</SiteLink></li>)}</ul></div>
  <FaqList faqs={c.faqs}/>
 </div></section>)}
 {groups.length===0&&<section className="faq-empty"><div className="zoho-shell"><h2>No questions match “{query}”.</h2><p>Try a different term, or send the requirement directly to the engineering team.</p><Button asChild><SiteLink to="/contact">Contact TreeQ Power<ArrowRight/></SiteLink></Button></div></section>}
 <section className="page-cta reveal"><div className="zoho-shell"><div><p className="zoho-kicker">Still have questions</p><h2>Have a Technical Requirement?</h2><p className="faq-cta-text">Tell us about your electrical, engineering, testing, maintenance or asset-integrity requirement.</p></div><div className="page-cta-actions"><Button size="lg" asChild><SiteLink to="/contact">Start an Enquiry<ArrowRight/></SiteLink></Button><Button size="lg" variant="outline" asChild><SiteLink to="/contact">Contact TreeQ Power</SiteLink></Button></div></div></section>
 </main>}
