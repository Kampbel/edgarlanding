import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const sectionRef    = useRef(null);
  const bgRef         = useRef(null);
  const midRef        = useRef(null);
  const contentRef    = useRef(null);
  const particlesRef  = useRef(null);
  const mouseRef      = useRef({ x: 0, y: 0 });
  const rafRef        = useRef(null);

  // ── Scroll parallax ──────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const y = window.scrollY;
      const h = sectionRef.current.offsetHeight;
      if (y > h) return;

      if (bgRef.current)
        bgRef.current.style.transform = `translateY(${y * 0.55}px) scale(1.08)`;

      if (midRef.current)
        midRef.current.style.transform = `translateY(${y * 0.28}px)`;

      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${y * -0.08}px)`;
        contentRef.current.style.opacity   = `${Math.max(0, 1 - y / (h * 0.7))}`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Mouse tilt / magnetic parallax ───────────────────────────────
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
        bgRef.current.style.transform += ` translate(${x * -18}px, ${y * -10}px)`;
      if (midRef.current)
        midRef.current.style.transform += ` translate(${x * -10}px, ${y * -6}px)`;
      if (particlesRef.current)
        particlesRef.current.style.transform = `translate(${x * 20}px, ${y * 12}px)`;
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

  // ── Floating particles data (stable) ─────────────────────────────
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    size:  2 + (i * 3.7 % 5),
    left:  (i * 17 + 5)  % 95,
    top:   (i * 23 + 8)  % 90,
    delay: (i * 0.37)    % 6,
    dur:   5 + (i * 1.1) % 5,
  }));

  return (
    <section ref={sectionRef} id="inicio" className="hero-section">

      {/* ── Layer 0: background image – slowest ── */}
      <div ref={bgRef} className="hero-layer hero-layer--bg"
        style={{ backgroundImage: "url('/images/Portafolio/Inicio/portada/Captura%20de%20pantalla%202026-06-23%20182544.png')" }}
      />

      {/* ── Layer 1: colour gradient overlays ── */}
      <div className="hero-gradient-base" />
      <div className="hero-gradient-radial" />
      <div className="hero-gradient-bottom" />

      {/* ── Layer 2: design grid lines ── */}
      <div ref={midRef} className="hero-layer hero-layer--grid" />

      {/* ── Layer 3: floating particles ── */}
      <div ref={particlesRef} className="hero-particles">
        {particles.map(p => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              width:            `${p.size}px`,
              height:           `${p.size}px`,
              left:             `${p.left}%`,
              top:              `${p.top}%`,
              animationDelay:   `${p.delay}s`,
              animationDuration:`${p.dur}s`,
            }}
          />
        ))}
      </div>

      {/* ── Layer 4: accent shapes ── */}
      <div className="hero-shape hero-shape--ring" />
      <div className="hero-shape hero-shape--blob" />
      <div className="hero-shape hero-shape--line-h" />
      <div className="hero-shape hero-shape--line-v" />

      {/* ── Content ── */}
      <div className="hero-container container">
        <div ref={contentRef} className="hero-content">


          <h1 className="hero-title animate-fade-in-up-delay-1">
            EDGAR<br />
            <span className="hero-title__accent">SANTOS</span>
          </h1>

          <div className="hero-role animate-fade-in-up-delay-2">
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
            <a href="#contacto" className="hero-btn hero-btn--ghost" onClick={e => scrollTo('contacto', e)}>
              Contacto
            </a>
          </div>

          {/* Stats row */}
          <div className="hero-stats animate-fade-in-up-delay-4">
            <div className="hero-stat">
              <strong>9+</strong>
              <span>Marcas</span>
            </div>
            <div className="hero-stat-div" />
            <div className="hero-stat">
              <strong>50+</strong>
              <span>Proyectos</span>
            </div>
            <div className="hero-stat-div" />
            <div className="hero-stat">
              <strong>1</strong>
              <span>Año exp.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator animate-hero-bounce">
        <a href="#sobre-mi" onClick={e => scrollTo('sobre-mi', e)}>
          <span>Scroll</span>
          <div className="hero-scroll-line">
            <div className="hero-scroll-dot" />
          </div>
        </a>
      </div>

    </section>
  );
}
