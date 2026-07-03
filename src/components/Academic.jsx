import React, { useState, useEffect } from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const academicProjects = [
  {
    id: 'juan-luis-guerra',
    title: 'Discografía Juan Luis Guerra',
    subtitle: 'Proyecto Creare',
    category: 'publicidad',
    type: 'académico',
    description: 'Póster de la discografía de Juan Luis guerra proyecto de creare con Galería 360 para homenajear la discografía y trayectoria del artista.',
    images: [
      '/images/TRABAJOS ACADEMICOS/PUBLICIDAD/FOTOS DE MIS PROYECTOS _PUBLICIDAD 1.png'
    ],
    tools: ['Ps']
  },
  {
    id: 'cultura-latina',
    title: 'La cultura Latinoamericana',
    subtitle: 'Poster',
    category: 'publicidad',
    type: 'académico',
    description: 'Póster hacer alusión a la cultura latina con todas las banderas que la representa la comunidad este fue un proyecto académico.',
    images: [
      '/images/TRABAJOS ACADEMICOS/PUBLICIDAD/FOTOS DE MIS PROYECTOS _PUBLICIDAD 2.png'
    ],
    tools: ['Ps']
  },
  {
    id: 'mensaje-coca-cola',
    title: 'Mensaje Subliminal Coca Cola',
    subtitle: 'Poster Publicitario',
    category: 'publicidad',
    type: 'académico',
    description: 'Proyecto académico realizado para dar otro mensaje al público de cosas que no se ven a simple vista.',
    images: [
      '/images/TRABAJOS ACADEMICOS/PUBLICIDAD/FOTOS DE MIS PROYECTOS _PUBLICIDAD 3.png'
    ],
    tools: ['Ai']
  },
  {
    id: 'cerveza-republica',
    title: 'Cerveza República',
    subtitle: 'Poster Publicitario',
    category: 'publicidad',
    type: 'académico',
    description: 'Estos póster fueron realizados con fines académicos para diseños publicitarios.',
    images: [
      '/images/TRABAJOS ACADEMICOS/PUBLICIDAD/FOTOS DE MIS PROYECTOS _PUBLICIDAD 4.png'
    ],
    tools: ['Ps']
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
      '/images/TRABAJOS ACADEMICOS/BRANDING/FOTOS DE MIS PROYECTOS _CAYENA 6.png'
    ],
    tools: ['Ai', 'Ps']
  },
  {
    id: 'medio-ambiente',
    title: 'La importancia del medio ambiente',
    subtitle: 'Brochure',
    category: 'editorial',
    type: 'académico',
    description: 'Propuesta de brochure para aprender el medio ambiente, para un proyecto académico.',
    images: [
      '/images/TRABAJOS ACADEMICOS/EDITORIAL/FOTOS DE MIS PROYECTOS _EDITORIAL 1.png'
    ],
    tools: ['Ai']
  },
  {
    id: 'lolita-terror',
    title: 'Lolita y The house of terror',
    subtitle: 'Libros',
    category: 'editorial',
    type: 'académico',
    description: 'Proyecto ficticio donde se realizó libros con fines académicos.',
    images: [
      '/images/TRABAJOS ACADEMICOS/EDITORIAL/FOTOS DE MIS PROYECTOS _EDITORIAL 2.png'
    ],
    tools: ['Ai', 'Ps']
  },
  {
    id: 'lost-legacy',
    title: 'The lost legacy',
    subtitle: 'Libro infantil',
    category: 'editorial',
    type: 'académico',
    description: 'Propuesta de ilustración para libro ilustrado infantil, para un proyecto académico.',
    images: [
      '/images/TRABAJOS ACADEMICOS/EDITORIAL/FOTOS DE MIS PROYECTOS _EDITORIAL 3.png'
    ],
    tools: ['Ai']
  },
  {
    id: 'tukuntazo',
    title: 'Tukuntazo',
    subtitle: 'Manual de marca',
    category: 'editorial',
    type: 'académico',
    description: 'Proyecto ficticio donde se realizó portas y contraportada de revista con fines académicos.',
    images: [
      '/images/TRABAJOS ACADEMICOS/EDITORIAL/FOTOS DE MIS PROYECTOS _EDITORIAL 4.png'
    ],
    tools: ['Id']
  }
];

const FILTERS = ['todos', 'branding', 'editorial', 'publicidad'];

// ── Image Gallery for current project card ──────────────────────────────────
function AcademicImageGallery({ project, onSelectProject }) {
  const [slideIdx, setSlideIdx] = useState(0);

  // Reset slide index when project changes
  useEffect(() => {
    setSlideIdx(0);
  }, [project.id]);

  const prevSlide = (e) => {
    e.stopPropagation();
    setSlideIdx(i => (i - 1 + project.images.length) % project.images.length);
  };
  const nextSlide = (e) => {
    e.stopPropagation();
    setSlideIdx(i => (i + 1) % project.images.length);
  };

  return (
    <div className="academic-gallery-inner" onClick={() => onSelectProject(project)}>
      <img
        src={project.images[slideIdx]}
        alt={`${project.title} – imagen ${slideIdx + 1}`}
        className="academic-gallery-img"
        loading="lazy"
      />
      
      {/* Zoom hint on hover */}
      <div className="academic-gallery-hint">
        <Eye size={20} />
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
          <div className="academic-gallery-counter">
            {slideIdx + 1} / {project.images.length}
          </div>
        </>
      )}
    </div>
  );
}

// ── Main Academic section with project carousel ─────────────────────────────
export default function Academic({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = activeFilter === 'todos'
    ? academicProjects
    : academicProjects.filter(p => p.category === activeFilter);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  // Auto-play interval
  useEffect(() => {
    if (filtered.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(i => (i + 1) % filtered.length);
    }, 5000); // Pass to next project every 5 seconds

    return () => clearInterval(timer);
  }, [filtered.length, activeFilter]);

  const prev = () => {
    setCurrentIndex(i => (i - 1 + filtered.length) % filtered.length);
  };
  const next = () => {
    setCurrentIndex(i => (i + 1) % filtered.length);
  };

  if (filtered.length === 0) return null;

  const currentProject = filtered[currentIndex] || filtered[0];

  return (
    <section id="academico" className="academic-section">
      {/* Top wave — blends from Projects' bottom beige (#f0ede8) into Academic dark */}
      <div className="section-curve section-curve--top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 C360 80 1080 0 1440 60 L1440 0 Z" fill="#f0ede8"/>
        </svg>
      </div>

      {/* Bottom wave — blends Academic dark into Contact sand beige (#f4efe6) */}
      <div className="section-curve section-curve--bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80 C360 0 1080 80 1440 20 L1440 80 Z" fill="#f4efe6"/>
        </svg>
      </div>


      <div className="container">

        {/* Header */}
        <div className="academic-header reveal">
          <div className="academic-header__left">
            <span className="section-subtitle">Portafolio</span>
            <h2 className="section-title">
              Trabajos <span className="title-gradient">Académicos</span>
            </h2>
            <p className="academic-header__desc">
              Proyectos desarrollados durante mi formación académica: branding, diseño editorial y campañas publicitarias 
              que sientan las bases conceptuales y técnicas de mi práctica profesional.
            </p>
          </div>

          {/* Filter bar */}
          <div className="academic-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`academic-filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(f);
                  setCurrentIndex(0);
                }}
              >
                {f === 'todos' ? 'Todos' : f === 'branding' ? 'Branding' : f === 'editorial' ? 'Diseño Editorial' : 'Publicidad'}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Card */}
        <div className="academic-carousel-container reveal">
          <div className="academic-carousel-card">
            
            {/* Left: Image area */}
            <div className="academic-carousel-image-wrap">
              <AcademicImageGallery 
                project={currentProject} 
                onSelectProject={onSelectProject}
              />
            </div>

            {/* Right: Info Panel */}
            <div className="academic-carousel-info">
              <span className="academic-carousel-badge">
                {currentProject.category === 'branding' ? 'Branding' : currentProject.category === 'editorial' ? 'Diseño Editorial' : 'Publicidad'}
              </span>
              <h3 className="academic-carousel-title">{currentProject.title}</h3>
              <p className="academic-carousel-subtitle">{currentProject.subtitle}</p>
              <p className="academic-carousel-desc">{currentProject.description}</p>
              
               {currentProject.tools && currentProject.tools.length > 0 && (
                <div className="brand-card__tools" style={{ marginTop: '0.2rem', marginBottom: '0.6rem' }}>
                  <span className="tools-label">Herramientas:</span>
                  <div className="tools-list">
                    {currentProject.tools.map((t, idx) => {
                      const lowT = t.toLowerCase();
                      const toolLogos = {
                        ps: '/images/photoshop.png',
                        ai: '/images/illustrator.png',
                        pr: '/images/premiere.png',
                        cv: '/images/canva.png',
                        id: '/images/indesign.png'
                      };
                      const hasLogo = !!toolLogos[lowT];
                      return (
                        <div 
                          key={idx} 
                          className={`tool-badge badge-${lowT}`} 
                          title={t === 'Ps' ? 'Adobe Photoshop' : t === 'Ai' ? 'Adobe Illustrator' : t === 'Id' ? 'Adobe InDesign' : t}
                          style={{ 
                            background: hasLogo ? 'transparent' : undefined,
                            boxShadow: hasLogo ? 'none' : undefined,
                            padding: 0
                          }}
                        >
                          {hasLogo ? (
                            <img 
                              src={toolLogos[lowT]} 
                              alt={t} 
                              style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} 
                            />
                          ) : (
                            t
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <button 
                className="academic-carousel-view-btn"
                onClick={() => onSelectProject(currentProject)}
              >
                <Eye size={16} />
                Ver proyecto completo
              </button>
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
                  onClick={() => setCurrentIndex(idx)}
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
