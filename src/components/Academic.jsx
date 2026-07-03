import React, { useState, useEffect, useRef } from 'react';
import { Eye, ChevronLeft, ChevronRight, Layers, BookOpen, Megaphone } from 'lucide-react';

const CATEGORY_META = {
  branding:   { label: 'Branding',         Icon: Layers,    color: '#ff6b6b' },
  editorial:  { label: 'Diseño Editorial', Icon: BookOpen,  color: '#ffd93d' },
  publicidad: { label: 'Publicidad',       Icon: Megaphone, color: '#6bcb77' },
};

const academicProjects = [
  {
    id: 'juan-luis-guerra',
    title: 'Discografía Juan Luis Guerra',
    subtitle: 'Proyecto Creare',
    category: 'publicidad',
    type: 'académico',
    description: 'Póster de la discografía de Juan Luis guerra proyecto de creare con Galería 360 para homenajear la discografía y trayectoria del artista.',
    images: ['/images/TRABAJOS ACADEMICOS/PUBLICIDAD/FOTOS DE MIS PROYECTOS _PUBLICIDAD 1.png'],
    tools: ['Ps'],
    year: '2024',
  },
  {
    id: 'cultura-latina',
    title: 'La cultura Latinoamericana',
    subtitle: 'Poster',
    category: 'publicidad',
    type: 'académico',
    description: 'Póster hacer alusión a la cultura latina con todas las banderas que la representa la comunidad este fue un proyecto académico.',
    images: ['/images/TRABAJOS ACADEMICOS/PUBLICIDAD/FOTOS DE MIS PROYECTOS _PUBLICIDAD 2.png'],
    tools: ['Ps'],
    year: '2024',
  },
  {
    id: 'mensaje-coca-cola',
    title: 'Mensaje Subliminal Coca Cola',
    subtitle: 'Poster Publicitario',
    category: 'publicidad',
    type: 'académico',
    description: 'Proyecto académico realizado para dar otro mensaje al público de cosas que no se ven a simple vista.',
    images: ['/images/TRABAJOS ACADEMICOS/PUBLICIDAD/FOTOS DE MIS PROYECTOS _PUBLICIDAD 3.png'],
    tools: ['Ai'],
    year: '2024',
  },
  {
    id: 'cerveza-republica',
    title: 'Cerveza República',
    subtitle: 'Poster Publicitario',
    category: 'publicidad',
    type: 'académico',
    description: 'Estos póster fueron realizados con fines académicos para diseños publicitarios.',
    images: ['/images/TRABAJOS ACADEMICOS/PUBLICIDAD/FOTOS DE MIS PROYECTOS _PUBLICIDAD 4.png'],
    tools: ['Ps'],
    year: '2024',
  },
  {
    id: 'cayena',
    title: 'Cayena',
    subtitle: 'Hotel y Resort',
    category: 'branding',
    type: 'académico',
    description: 'Hotel y resort ficticia inspirado en la flor nacional de la República Dominicana una propuesta ficticia creada para un proyecto académico.',
    images: [
      '/images/TRABAJOS ACADEMICOS/BRANDING/FOTOS DE MIS PROYECTOS _CAYENA 1.png',
      '/images/TRABAJOS ACADEMICOS/BRANDING/FOTOS DE MIS PROYECTOS _CAYENA 2.png',
      '/images/TRABAJOS ACADEMICOS/BRANDING/FOTOS DE MIS PROYECTOS _CAYENA 3.png',
      '/images/TRABAJOS ACADEMICOS/BRANDING/FOTOS DE MIS PROYECTOS _CAYENA 4.png',
      '/images/TRABAJOS ACADEMICOS/BRANDING/FOTOS DE MIS PROYECTOS _CAYENA 5.png',
      '/images/TRABAJOS ACADEMICOS/BRANDING/FOTOS DE MIS PROYECTOS _CAYENA 6.png',
    ],
    tools: ['Ai', 'Ps'],
    year: '2023',
  },
  {
    id: 'medio-ambiente',
    title: 'La importancia del medio ambiente',
    subtitle: 'Brochure',
    category: 'editorial',
    type: 'académico',
    description: 'Propuesta de brochure para aprender el medio ambiente, para un proyecto académico.',
    images: ['/images/TRABAJOS ACADEMICOS/EDITORIAL/FOTOS DE MIS PROYECTOS _EDITORIAL 1.png'],
    tools: ['Ai'],
    year: '2023',
  },
  {
    id: 'lolita-terror',
    title: 'Lolita y The house of terror',
    subtitle: 'Libros',
    category: 'editorial',
    type: 'académico',
    description: 'Proyecto ficticio donde se realizó libros con fines académicos.',
    images: ['/images/TRABAJOS ACADEMICOS/EDITORIAL/FOTOS DE MIS PROYECTOS _EDITORIAL 2.png'],
    tools: ['Ai', 'Ps'],
    year: '2023',
  },
  {
    id: 'lost-legacy',
    title: 'The lost legacy',
    subtitle: 'Libro infantil',
    category: 'editorial',
    type: 'académico',
    description: 'Propuesta de ilustración para libro ilustrado infantil, para un proyecto académico.',
    images: ['/images/TRABAJOS ACADEMICOS/EDITORIAL/FOTOS DE MIS PROYECTOS _EDITORIAL 3.png'],
    tools: ['Ai'],
    year: '2023',
  },
  {
    id: 'tukuntazo',
    title: 'Tukuntazo',
    subtitle: 'Manual de marca',
    category: 'editorial',
    type: 'académico',
    description: 'Proyecto ficticio donde se realizó portas y contraportada de revista con fines académicos.',
    images: ['/images/TRABAJOS ACADEMICOS/EDITORIAL/FOTOS DE MIS PROYECTOS _EDITORIAL 4.png'],
    tools: ['Id'],
    year: '2024',
  },
];

const FILTERS = ['todos', 'branding', 'editorial', 'publicidad'];

const TOOL_LOGOS = {
  ps: '/images/photoshop.png',
  ai: '/images/illustrator.png',
  pr: '/images/premiere.png',
  cv: '/images/canva.png',
  id: '/images/indesign.png',
};

// ── Image Gallery ──────────────────────────────────────────────────────────
function AcademicImageGallery({ project, onSelectProject }) {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => { setSlideIdx(0); }, [project.id]);

  const prevSlide = (e) => { e.stopPropagation(); setSlideIdx(i => (i - 1 + project.images.length) % project.images.length); };
  const nextSlide = (e) => { e.stopPropagation(); setSlideIdx(i => (i + 1) % project.images.length); };

  return (
    <div className="academic-gallery-inner" onClick={() => onSelectProject(project)}>
      <img
        src={project.images[slideIdx]}
        alt={`${project.title} – imagen ${slideIdx + 1}`}
        className="academic-gallery-img"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="academic-gallery-hint">
        <div className="academic-gallery-hint__icon">
          <Eye size={22} />
        </div>
        <span>Ver galería completa</span>
      </div>

      {project.images.length > 1 && (
        <>
          <button className="academic-gallery-arrow academic-gallery-arrow--prev" onClick={prevSlide} aria-label="Anterior">
            <ChevronLeft size={16} />
          </button>
          <button className="academic-gallery-arrow academic-gallery-arrow--next" onClick={nextSlide} aria-label="Siguiente">
            <ChevronRight size={16} />
          </button>
          {/* Thumbnail strip */}
          <div className="academic-thumb-strip">
            {project.images.map((img, i) => (
              <button
                key={i}
                className={`academic-thumb ${i === slideIdx ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setSlideIdx(i); }}
              >
                <img src={img} alt={`thumb ${i + 1}`} />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Main Academic section ──────────────────────────────────────────────────
export default function Academic({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);

  const filtered = activeFilter === 'todos'
    ? academicProjects
    : academicProjects.filter(p => p.category === activeFilter);

  useEffect(() => { setCurrentIndex(0); }, [activeFilter]);

  const goTo = (idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsTransitioning(false);
    }, 200);
  };

  // Auto-play
  useEffect(() => {
    if (filtered.length <= 1) return;
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(i => (i + 1) % filtered.length);
    }, 6000);
    return () => clearInterval(autoPlayRef.current);
  }, [filtered.length, activeFilter]);

  const stopAutoPlay = () => clearInterval(autoPlayRef.current);
  const prev = () => { stopAutoPlay(); goTo((currentIndex - 1 + filtered.length) % filtered.length); };
  const next = () => { stopAutoPlay(); goTo((currentIndex + 1) % filtered.length); };

  if (filtered.length === 0) return null;

  const project = filtered[currentIndex] || filtered[0];
  const catMeta = CATEGORY_META[project.category] || {};
  const CatIcon = catMeta.Icon;
  const progress = ((currentIndex + 1) / filtered.length) * 100;

  return (
    <section id="academico" className="academic-section">
      {/* Top wave */}
      <div className="section-curve section-curve--top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 C360 80 1080 0 1440 60 L1440 0 Z" fill="#f0ede8"/>
        </svg>
      </div>

      {/* Bottom wave */}
      <div className="section-curve section-curve--bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80 C360 0 1080 80 1440 20 L1440 80 Z" fill="#f4efe6"/>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Section header ── */}
        <div className="academic-header reveal">
          <div className="academic-header__left">
            <span className="section-subtitle">Portafolio Académico</span>
            <h2 className="section-title">
              Trabajos <span className="title-gradient">Académicos</span>
            </h2>
            <p className="academic-header__desc">
              Proyectos desarrollados durante mi formación académica: branding, diseño editorial y campañas publicitarias
              que sientan las bases conceptuales y técnicas de mi práctica profesional.
            </p>
          </div>

          {/* Stats chips */}
          <div className="academic-stats-row">
            {Object.entries(CATEGORY_META).map(([key, meta]) => {
              const count = academicProjects.filter(p => p.category === key).length;
              const Icon = meta.Icon;
              return (
                <div key={key} className="academic-stat-chip" style={{ '--chip-color': meta.color }}>
                  <Icon size={14} />
                  <span>{count} {meta.label}</span>
                </div>
              );
            })}
          </div>

          {/* Filter bar */}
          <div className="academic-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`academic-filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => { setActiveFilter(f); setCurrentIndex(0); }}
              >
                {f === 'todos' ? 'Todos' : CATEGORY_META[f]?.label || f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main card ── */}
        <div className="academic-carousel-container reveal">

          {/* Progress bar */}
          <div className="academic-progress-bar">
            <div className="academic-progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className={`academic-carousel-card ${isTransitioning ? 'ac-fade-out' : 'ac-fade-in'}`}>

            {/* LEFT: image */}
            <div className="academic-carousel-image-wrap">
              <AcademicImageGallery project={project} onSelectProject={onSelectProject} />
            </div>

            {/* RIGHT: info */}
            <div className="academic-carousel-info">

              {/* Index counter */}
              <div className="academic-counter">
                <span className="academic-counter__current">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="academic-counter__sep">/</span>
                <span className="academic-counter__total">{String(filtered.length).padStart(2, '0')}</span>
              </div>

              {/* Category badge with icon */}
              <div className="academic-category-badge" style={{ '--badge-clr': catMeta.color || '#769bff' }}>
                {CatIcon && <CatIcon size={12} />}
                <span>{catMeta.label || project.category}</span>
                {project.year && <span className="academic-year-tag">{project.year}</span>}
              </div>

              <h3 className="academic-carousel-title">{project.title}</h3>
              <p className="academic-carousel-subtitle">{project.subtitle}</p>
              <p className="academic-carousel-desc">{project.description}</p>

              {/* Tools */}
              {project.tools?.length > 0 && (
                <div className="brand-card__tools">
                  <span className="tools-label">Herramientas:</span>
                  <div className="tools-list">
                    {project.tools.map((t, idx) => {
                      const logo = TOOL_LOGOS[t.toLowerCase()];
                      return (
                        <div
                          key={idx}
                          className={`tool-badge badge-${t.toLowerCase()}`}
                          title={t === 'Ps' ? 'Adobe Photoshop' : t === 'Ai' ? 'Adobe Illustrator' : t === 'Id' ? 'Adobe InDesign' : t}
                          style={{ background: logo ? 'transparent' : undefined, boxShadow: logo ? 'none' : undefined, padding: 0 }}
                        >
                          {logo ? <img src={logo} alt={t} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} /> : t}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <button className="academic-carousel-view-btn" onClick={() => onSelectProject(project)}>
                <Eye size={16} />
                Ver proyecto completo
              </button>

              {/* Thumbnail navigation for multi-image projects */}
              {filtered.length > 1 && (
                <div className="academic-mini-nav">
                  {filtered.map((p, idx) => (
                    <button
                      key={p.id}
                      className={`academic-mini-thumb ${idx === currentIndex ? 'active' : ''}`}
                      onClick={() => { stopAutoPlay(); goTo(idx); }}
                      title={p.title}
                    >
                      <img src={p.images[0]} alt={p.title} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="academic-carousel-controls">
            <button className="academic-carousel-arrow" onClick={prev} aria-label="Anterior">
              <ChevronLeft size={24} />
            </button>
            <div className="academic-carousel-dots">
              {filtered.map((_, idx) => (
                <button
                  key={idx}
                  className={`academic-carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => { stopAutoPlay(); goTo(idx); }}
                  aria-label={`Proyecto ${idx + 1}`}
                />
              ))}
            </div>
            <button className="academic-carousel-arrow" onClick={next} aria-label="Siguiente">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
