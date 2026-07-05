import React, { useEffect, useRef } from 'react';

const tools = [
  { name: 'Ps',  logo: '/images/photoshop.png',   color: '#31A8FF', angle: 0   },
  { name: 'Ai',  logo: '/images/illustrator.png',  color: '#FF9A00', angle: 72  },
  { name: 'Id',  logo: '/images/indesign.png',     color: '#FF3366', angle: 144 },
  { name: 'Pr',  logo: '/images/premiere.png',     color: '#9999FF', angle: 216 },
  { name: 'Ca',  logo: '/images/canva.png',        color: '#00C4CC', angle: 288 },
];

export default function Hero({ showContact = true }) {
  const sectionRef   = useRef(null);
  const bgRef        = useRef(null);
  const contentRef   = useRef(null);
  const visualRef    = useRef(null);
  const mouseRef     = useRef({ x: 0, y: 0 });
  const rafRef       = useRef(null);

  // ── Scroll parallax ──────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const y = window.scrollY;
      const h = sectionRef.current.offsetHeight;
      if (y > h) return;
      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${y * 0.5}px) scale(1.08)`;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${y * -0.06}px)`;
        contentRef.current.style.opacity   = `${Math.max(0, 1 - y / (h * 0.75))}`;
      }
      if (visualRef.current) {
        visualRef.current.style.transform = `translateY(${y * -0.04}px)`;
        visualRef.current.style.opacity   = `${Math.max(0, 1 - y / (h * 0.85))}`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Mouse magnetic parallax ───────────────────────────────────────
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width  - 0.5,
        y: (e.clientY - rect.top)  / rect.height - 0.5,
      };
    };
    const tick = () => {
      const { x, y } = mouseRef.current;
      if (bgRef.current)
        bgRef.current.style.transform += ` translate(${x * -14}px, ${y * -8}px)`;
      if (visualRef.current)
        visualRef.current.style.transform += ` translate(${x * 8}px, ${y * 5}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };
    section.addEventListener('mousemove', onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      section.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollTo = (id, e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  // ── Floating particles ────────────────────────────────────────────
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i, size: 2 + (i * 3.7 % 5),
    left: (i * 17 + 5) % 95, top: (i * 23 + 8) % 90,
    delay: (i * 0.37) % 6, dur: 5 + (i * 1.1) % 5,
  }));

  return (
    <section ref={sectionRef} id="inicio" className="hero-section">

      {/* ── BG image layer ── */}
      <div ref={bgRef} className="hero-layer hero-layer--bg"
        style={{ backgroundImage: "url('/images/Portafolio/Inicio/portada/Captura%20de%20pantalla%202026-06-23%20182544.png')" }}
      />

      {/* ── Gradient overlays ── */}
      <div className="hero-gradient-base" />
      <div className="hero-gradient-radial" />
      <div className="hero-gradient-bottom" />

      {/* ── Grid lines ── */}
      <div className="hero-layer hero-layer--grid" />

      {/* ── Particles ── */}
      <div className="hero-particles">
        {particles.map(p => (
          <span key={p.id} className="hero-particle" style={{
            width: `${p.size}px`, height: `${p.size}px`,
            left: `${p.left}%`, top: `${p.top}%`,
            animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s`,
          }} />
        ))}
      </div>

      {/* ── Accent shapes ── */}
      <div className="hero-shape hero-shape--ring" />
      <div className="hero-shape hero-shape--blob" />

      {/* ── Two-column layout ── */}
      <div className="hero-container container">

        {/* LEFT: text content */}
        <div ref={contentRef} className="hero-content">


          <h1 className="hero-title animate-fade-in-up-delay-1">
            EDGAR<br />
            <span className="hero-title__accent">SANTOS</span>
          </h1>

          <div className="hero-role animate-fade-in-up-delay-2">
            <span className="hero-role__line" />
            <span className="hero-role__text">Diseñador Gráfico</span>
          </div>

          <p className="hero-description animate-fade-in-up-delay-3">
            Identidades visuales únicas, diseños editoriales premium y estrategias
            de social media de alto impacto para marcas líderes.
          </p>

          <div className="hero-actions animate-fade-in-up-delay-4">
            <a href="#proyectos" className="hero-btn hero-btn--primary" onClick={e => scrollTo('proyectos', e)}>
              Explorar Proyectos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            {showContact && (
              <a href="#contacto" className="hero-btn hero-btn--ghost" onClick={e => scrollTo('contacto', e)}>
                Contacto
              </a>
            )}
          </div>

          {/* Stats row */}
          <div className="hero-stats animate-fade-in-up-delay-4">
            <div className="hero-stat"><strong>9+</strong><span>Marcas</span></div>
            <div className="hero-stat-div" />
            <div className="hero-stat"><strong>50+</strong><span>Proyectos</span></div>
            <div className="hero-stat-div" />
            <div className="hero-stat"><strong>1</strong><span>Año exp.</span></div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator animate-hero-bounce">
        <a href="#sobre-mi" onClick={e => scrollTo('sobre-mi', e)}>
          <span>Scroll</span>
          <div className="hero-scroll-line"><div className="hero-scroll-dot" /></div>
        </a>
      </div>

    </section>
  );
}
