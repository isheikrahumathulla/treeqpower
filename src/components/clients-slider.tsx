import { useEffect, useRef } from "react";
import { clients } from "@/lib/clients";

export function ClientsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const state = useRef({ x: 0, paused: false, dragging: false, startX: 0, startOffset: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      const s = state.current;
      const half = track.scrollWidth / 2;
      if (!s.paused && !s.dragging && !reduce) s.x -= dt * 0.05;
      if (half > 0) {
        if (s.x <= -half) s.x += half;
        if (s.x > 0) s.x -= half;
      }
      track.style.transform = `translate3d(${s.x}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onDown = (e: React.PointerEvent) => {
    const s = state.current;
    s.dragging = true;
    s.startX = e.clientX;
    s.startOffset = s.x;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const s = state.current;
    if (s.dragging) s.x = s.startOffset + (e.clientX - s.startX);
  };
  const onUp = () => { state.current.dragging = false; };

  return (
    <section className="clients-slider" aria-label="Our clients">
      <div className="zoho-shell">
        <p className="zoho-kicker">Our Clients</p>
        <div
          className="clients-viewport"
          onMouseEnter={() => (state.current.paused = true)}
          onMouseLeave={() => { state.current.paused = false; onUp(); }}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          <div className="clients-track" ref={trackRef}>
            {[...clients, ...clients].map((client, i) => (
              <div className="clients-item" key={`${client.name}-${i}`} aria-hidden={i >= clients.length}>
                <img src={client.logo} alt={i < clients.length ? `${client.name} logo` : ""} draggable={false} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
