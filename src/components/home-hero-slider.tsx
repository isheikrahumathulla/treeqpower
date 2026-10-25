import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLink } from "@/components/site-link";
import { images } from "@/lib/site-data";
import inspectionPhoto from "@/assets/hero-inspection-worker.webp";
import inspectionPhotoMobile from "@/assets/hero-inspection-worker-mobile.webp";
import integrityPhoto from "@/assets/services/ai-inspection-hero.webp";
import { advanceSlideClock, HERO_SLIDE_DURATION, manualSlide, nextAutoSlide } from "@/lib/hero-slider";

const slides = [
  {
    image: images.hero, mobile: images.heroMobile,
    alt: "Oil and gas refinery with distillation columns and pipe manifolds at sunset",
    eyebrow: "TreeQ Power Electromechanical", title: "Engineering power.", accent: "Supporting every stage.",
    text: "Electrical engineering, field services, testing, inspection and integrated solutions from Dubai, UAE.",
    primary: "Explore services", to: "/our-services/inspection-verification-project-services", secondary: "Start an enquiry",
  },
  {
    image: inspectionPhoto, mobile: inspectionPhotoMobile,
    alt: "TreeQ Power inspector in a high-visibility vest reviewing engineering schematics at an oil and gas refinery",
    eyebrow: "TreeQ Power · Inspection Services", title: "Inspection, Verification", accent: "& Project Services",
    text: "Independent third-party inspection, expediting, vendor assessment and project QA-QC support — from procurement through project delivery.",
    primary: "Explore Inspection Services", to: "/our-services/inspection-verification-project-services", secondary: "Discuss your project",
  },
  {
    image: integrityPhoto, mobile: integrityPhoto,
    alt: "Inspector using an ultrasonic testing instrument on industrial pipework",
    eyebrow: "TreeQ Power · Asset Integrity", title: "Understand corrosion.", accent: "Inspect with confidence.",
    text: "Corrosion risk assessment and non-intrusive inspection help evaluate asset condition, prioritize mitigation and plan inspection of in-service equipment.",
    primary: "Explore Asset Integrity", to: "/our-services/asset-integrity", secondary: "Discuss your equipment",
  },
];

export function HomeHeroSlider() {
  const [active, setActive] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [inView, setInView] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const elapsed = useRef(0);
  const touchStart = useRef<number | null>(null);
  const paused = stopped || hovered || focused || touching || reduced || !inView;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) => setInView(entry?.isIntersecting ?? false));
    if (heroRef.current) observer.observe(heroRef.current);
    return () => { media.removeEventListener("change", update); observer.disconnect(); };
  }, []);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const delta = now - last;
      last = now;
      const preloading = Boolean(document.querySelector(".preloader:not(.is-leaving)"));
      const clock = advanceSlideClock(elapsed.current, delta, paused || document.hidden || preloading);
      elapsed.current = clock.elapsed;
      if (progressRef.current) progressRef.current.style.width = `${clock.elapsed / HERO_SLIDE_DURATION * 100}%`;
      if (clock.advance) setActive(nextAutoSlide);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  const select = (index: number) => {
    elapsed.current = 0;
    if (progressRef.current) progressRef.current.style.width = "0%";
    setActive(index);
  };

  return <section ref={heroRef} className="home-photo-hero home-slider" aria-label="TreeQ Power services" aria-roledescription="carousel"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    onKeyDown={(event) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); select(manualSlide(active, event.key === "ArrowLeft" ? -1 : 1)); } }}
    onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; setTouching(true); }}
    onTouchEnd={(event) => { const end = event.changedTouches[0]?.clientX; if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 50) select(manualSlide(active, end < touchStart.current ? 1 : -1)); touchStart.current = null; setTouching(false); }}
    onTouchCancel={() => { touchStart.current = null; setTouching(false); }}>
    {slides.map((slide, index) => <div key={slide.title} className={`home-hero-slide home-hero-slide-${index + 1}${active === index ? " is-active" : ""}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} of 3`} aria-hidden={active !== index} inert={active !== index}>
      <picture><source media="(max-width:767px),(max-aspect-ratio:1/1)" srcSet={slide.mobile}/><img src={slide.image} alt={slide.alt} fetchPriority={index === 0 ? "high" : "auto"} decoding="async"/></picture>
      <div className="home-photo-wash"/>
      <div className="zoho-shell home-photo-copy">
        <p className="zoho-kicker">{slide.eyebrow}</p>
        {index === 0 ? <h1>{slide.title}<span>{slide.accent}</span><small className="seo-h1-sub">Electrical Engineering, Inspection &amp; Asset Integrity in Dubai, UAE</small></h1> : <h2 className="home-slide-title">{slide.title}<span>{slide.accent}</span></h2>}
        <p>{slide.text}</p>
        <div><Button size="lg" asChild><SiteLink to={slide.to}>{slide.primary}</SiteLink></Button><Button size="lg" variant="outline" className="home-hero-ghost" asChild><SiteLink to="/contact">{slide.secondary}</SiteLink></Button></div>
      </div>
    </div>)}
    {active > 0 && <Button variant="outline" size="icon" className="home-slider-arrow home-slider-prev" aria-label="Previous slide" title="Previous slide" onClick={() => select(manualSlide(active, -1))}><ChevronLeft/></Button>}
    {active < slides.length - 1 && <Button variant="outline" size="icon" className="home-slider-arrow home-slider-next" aria-label="Next slide" title="Next slide" onClick={() => select(manualSlide(active, 1))}><ChevronRight/></Button>}
    <div className="home-slider-controls"><div className="home-slider-bars">{slides.map((slide, index) => <Button key={slide.title} variant="ghost" className={`home-slider-bar${index === active ? " is-active" : ""}`} aria-label={`Go to slide ${index + 1}`} aria-current={index === active ? "true" : undefined} onClick={() => select(index)}><span className="home-slider-track"><span key={`${active}-${index}`} ref={index === active ? progressRef : undefined} className="home-slider-fill"/></span></Button>)}</div><span className="home-slider-count">0{active + 1} / 03</span><Button variant="ghost" size="icon" className="home-slider-pause" aria-label={stopped || reduced ? "Play slideshow" : "Pause slideshow"} title={stopped || reduced ? "Play slideshow" : "Pause slideshow"} onClick={() => { setReduced(false); setStopped(!(stopped || reduced)); }}>{stopped || reduced ? <Play/> : <Pause/>}</Button></div>
  </section>;
}