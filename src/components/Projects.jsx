import React, { useState, useEffect, useRef } from 'react';
import { Eye, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

const professionalBrands = [
  {
    id: 'honda',
    title: 'Honda rent car',
    subtitle: 'Alquiler de automóviles',
    category: 'social-media',
    type: 'profesional',
    description: 'Diseño de contenido digital para Instagram. El objetivo principal fue crear una identidad visual sólida y atractiva que comunicara las diferentes ofertas de alquiler, adaptando el diseño a campañas específicas (temporadas, aniversarios y beneficios de vehículos) manteniendo un estilo profesional y limpio.',
    tools: ['Ps'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 190459.png',
    images: [
      '/images/TRABAJOS PROFESIONAL/HONDA RENT A CAR/POST 1 FEBRERO HONDA RENTA CAR_.png',
      '/images/TRABAJOS PROFESIONAL/HONDA RENT A CAR/HONDA SEPTIEMBRE 2025 1.png',
      '/images/TRABAJOS PROFESIONAL/HONDA RENT A CAR/HONDA SEPTIEMBRE 2025 9.png',
      '/images/TRABAJOS PROFESIONAL/HONDA RENT A CAR/POST 12 FEBRERO HONDA RENTA CAR_.png',
      '/images/TRABAJOS PROFESIONAL/HONDA RENT A CAR/POST 2 HONDA RENTA CAR_.png',
      '/images/TRABAJOS PROFESIONAL/HONDA RENT A CAR/POST 9 HONDA RENTA CAR_.png'
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/hondarentcar?igsh=MXRqa3JlcmRycWV6Zw%3D%3D' }
    ]
  },
  {
    id: 'cocovet',
    title: 'Coco Vet Clínica',
    subtitle: 'Clínica Veterinaria & Farmacia',
    category: 'social-media',
    type: 'profesional',
    description: 'Desarrollo de línea gráfica para redes sociales y diseño de empaques para sus productos veterinarios exclusivos. Se utilizó una paleta fresca y alegre para transmitir confianza y cercanía a los dueños de mascotas, logrando posts altamente informativos y visualmente memorables.',
    tools: ['Ps', 'Ai'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 190609.png',
    images: [
      '/images/TRABAJOS PROFESIONAL/COCO VET/Diseño Productos cocovet.png',
      '/images/TRABAJOS PROFESIONAL/COCO VET/COCOVET AGOSTO 2025 11.png',
      '/images/TRABAJOS PROFESIONAL/COCO VET/COCOVET AGOSTO 2025 4.png',
      '/images/TRABAJOS PROFESIONAL/COCO VET/POST 1 COCOVET CARRUSEL_.png',
      '/images/TRABAJOS PROFESIONAL/COCO VET/POST 3 COCOVET_.png',
      '/images/TRABAJOS PROFESIONAL/COCO VET/POST 7 COCOVET_.png'
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/cocovetrd?igsh=c2lwYWE0bTlzYWdl' }
    ]
  },
  {
    id: 'cgr',
    title: 'Club de Gestión de Riesgo RD',
    subtitle: 'Asociación Profesional Corporativa',
    category: 'social-media',
    type: 'profesional',
    description: 'Línea gráfica corporativa para la gestión de su comunidad en LinkedIn e Instagram. Creación de plantillas editoriales para la difusión de eventos, webinars y reportes técnicos sobre análisis y prevención de riesgos empresariales.',
    tools: ['Ps'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 190737.png',
    images: [
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/CGR.png',
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/2 GDRrd Agosto Post 1.png',
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/ART GDRrd.png',
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/CGR PANELISTA.png',
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/POST SEPTIMBRE CGR RD.png',
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/arte para Webinar_.png'
    ]
  },
  {
    id: 'transekur',
    title: 'Transekur',
    subtitle: 'Servicios de Transporte Premium',
    category: 'social-media',
    type: 'profesional',
    description: 'Diseño de contenido estratégico para redes sociales enfocado en el sector corporativo y turístico VIP. Se proyectó una estética sobria y exclusiva, utilizando fotografía de alta gama combinada con layouts tipográficos minimalistas y elegantes.',
    tools: ['Ps'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 192542.png',
    images: [
      '/images/TRABAJOS PROFESIONAL/TRANSEKUR/POST 1 TRANSEKUR OCTUBRE_.png',
      '/images/TRABAJOS PROFESIONAL/TRANSEKUR/POST 11 TRANSEKUR NOVIEMBRE_.png',
      '/images/TRABAJOS PROFESIONAL/TRANSEKUR/POST 2 FEBRERO TRANSEKUR_.png',
      '/images/TRABAJOS PROFESIONAL/TRANSEKUR/POST 6 TRANSEKUR NOVIEMBRE.png',
      '/images/TRABAJOS PROFESIONAL/TRANSEKUR/POST 7 Transekur diciembre 2025.png',
      '/images/TRABAJOS PROFESIONAL/TRANSEKUR/TRANSEKUR POST 3 MAYO.jpg'
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/transekur?igsh=andyYXFtMGltaXZi' }
    ]
  },
  {
    id: 'aie',
    title: 'Constructora AIE',
    subtitle: 'Ingeniería & Desarrollo Inmobiliario',
    category: 'social-media',
    type: 'profesional',
    description: 'Piezas gráficas para canales digitales, incluyendo posts corporativos y carruseles informativos de proyectos inmobiliarios en desarrollo. Se diseñaron esquemas limpios e industriales para reflejar solidez, precisión y excelencia arquitectónica.',
    tools: ['Ps'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 192604.png',
    images: [
      '/images/TRABAJOS PROFESIONAL/AIE CONSTRUTORA/POST 1 AIE MARZO_.png',
      '/images/TRABAJOS PROFESIONAL/AIE CONSTRUTORA/POST 2 AIE MARZO_.png',
      '/images/TRABAJOS PROFESIONAL/AIE CONSTRUTORA/POST 3  CARRUSEL 1 AIE MARZO_.png',
      '/images/TRABAJOS PROFESIONAL/AIE CONSTRUTORA/POST 3 CARRSUEL 2 AIE MARZO_.png',
      '/images/TRABAJOS PROFESIONAL/AIE CONSTRUTORA/POST 4 AIE MARZO_.png',
      '/images/TRABAJOS PROFESIONAL/AIE CONSTRUTORA/POST 5 AIE MARZO_.png'
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/aie.constructora?igsh=MXFqZnk3dnJubDk4MQ==' }
    ]
  },
  {
    id: 'birria',
    title: "Birria & Ma' Na'",
    subtitle: 'Marca Gastronómica',
    category: 'social-media',
    type: 'profesional',
    description: 'Dirección de arte y diseño de contenidos gastronómicos para Instagram. Se diseñó una paleta de colores cálidos y texturas rústicas que realzan el estilo culinario (food-styling), logrando publicaciones altamente atractivas que despiertan el apetito.',
    tools: ['Ps'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 192746.png',
    images: [
      '/images/TRABAJOS PROFESIONAL/BIRRIA Y MA NA/BIRRIA Y MA NA POST 3 MAYO.jpg',
      '/images/TRABAJOS PROFESIONAL/BIRRIA Y MA NA/BIRRIA Y MA NA POST 11 MAYO.jpg',
      '/images/TRABAJOS PROFESIONAL/BIRRIA Y MA NA/BIRRIA Y MA NA POST 7 MAYO.jpg',
      '/images/TRABAJOS PROFESIONAL/BIRRIA Y MA NA/BIRRIA Y MA NA POST 8 MAYO.jpg',
      '/images/TRABAJOS PROFESIONAL/BIRRIA Y MA NA/JULIO POST 10 BIRRIA Y MANA.png',
      '/images/TRABAJOS PROFESIONAL/BIRRIA Y MA NA/JULIO POST 8 BIRRIA Y MANA.png'
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/birriaymana?igsh=a2g3Mng4c2NsbDZq' }
    ]
  },
  {
    id: 'pimma',
    title: 'Pimma Autos',
    subtitle: 'Concesionario & Venta de Vehículos',
    category: 'social-media',
    type: 'profesional',
    description: 'Estrategia de contenido visual para la exhibición y venta de vehículos nuevos y usados. Creación de layouts promocionales de ofertas de temporada y banners informativos que destacan los beneficios y comodidades de sus modelos destacados.',
    tools: ['Ps'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 192815.png',
    images: [
      '/images/TRABAJOS PROFESIONAL/PIMMA AUTOS/PROMO 1.png',
      '/images/TRABAJOS PROFESIONAL/PIMMA AUTOS/Arte de diciembre de pimma auto.png',
      '/images/TRABAJOS PROFESIONAL/PIMMA AUTOS/P0ST 2 PIMMA AUTOS DICIEMBRE.png',
      '/images/TRABAJOS PROFESIONAL/PIMMA AUTOS/POST 5 NOVIEMBRE PIMMA AUTOS.png',
      '/images/TRABAJOS PROFESIONAL/PIMMA AUTOS/POST PIMMA AUTOS.png',
      '/images/TRABAJOS PROFESIONAL/PIMMA AUTOS/Promo PimmaAuto 13.png'
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/pimmaauto?igsh=dXg4YXQ1Z3dqY3Ey' }
    ]
  }
];

const TOOL_LOGOS = {
  ps: '/images/photoshop.png',
  ai: '/images/illustrator.png',
  pr: '/images/premiere.png',
  cv: '/images/canva.png',
  id: '/images/indesign.png'
};

// ── Image Gallery for Projects ──────────────────────────────────────────────
function ProjectsImageGallery({ project, onSelectProject }) {
  const [slideIdx, setSlideIdx] = useState(0);

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
    <div className="projects-gallery-inner" onClick={() => onSelectProject(project)}>
      <img
        src={project.images[slideIdx]}
        alt={`${project.title} – imagen ${slideIdx + 1}`}
        className="projects-gallery-img"
        loading="lazy"
      />

      <div className="projects-gallery-hint">
        <div className="projects-gallery-hint__icon">
          <Eye size={22} />
        </div>
        <span>Ver galería completa</span>
      </div>

      {project.images.length > 1 && (
        <>
          <button className="projects-gallery-arrow projects-gallery-arrow--prev" onClick={prevSlide} aria-label="Anterior">
            <ChevronLeft size={16} />
          </button>
          <button className="projects-gallery-arrow projects-gallery-arrow--next" onClick={nextSlide} aria-label="Siguiente">
            <ChevronRight size={16} />
          </button>

          {/* Thumbnail strip inside gallery */}
          <div className="projects-thumb-strip">
            {project.images.map((img, i) => (
              <button
                key={i}
                className={`projects-thumb ${i === slideIdx ? 'active' : ''}`}
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

// ── Main Projects Component ──────────────────────────────────────────────────
export default function Projects({ onSelectProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);

  const goTo = (idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsTransitioning(false);
    }, 200);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(i => (i + 1) % professionalBrands.length);
    }, 6000);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  const stopAutoPlay = () => clearInterval(autoPlayRef.current);
  const prev = () => { stopAutoPlay(); goTo((currentIndex - 1 + professionalBrands.length) % professionalBrands.length); };
  const next = () => { stopAutoPlay(); goTo((currentIndex + 1) % professionalBrands.length); };

  const currentProject = professionalBrands[currentIndex] || professionalBrands[0];
  const progress = ((currentIndex + 1) / professionalBrands.length) * 100;

  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        
        {/* Section Intro */}
        <div className="projects-header reveal">
          <div className="projects-header__left">
            <span className="section-subtitle">Portafolio</span>
            <h2 className="section-title">Social <span className="title-gradient">Media</span></h2>
            <p className="projects-header__desc">
              Creación de contenido digital estratégico y a medida. Una selección de marcas que han
              confiado en mi visión gráfica para gestionar su presencia en redes sociales.
            </p>
          </div>
        </div>

        {/* Unified Carousel Container */}
        <div className="projects-carousel-container reveal">
          
          {/* Progress bar */}
          <div className="projects-progress-bar">
            <div className="projects-progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className={`projects-carousel-card ${isTransitioning ? 'pj-fade-out' : 'pj-fade-in'}`}>
            
            {/* LEFT: Image Gallery */}
            <div className="projects-carousel-image-wrap">
              <ProjectsImageGallery 
                project={currentProject} 
                onSelectProject={onSelectProject} 
              />
            </div>

            {/* RIGHT: Project Info */}
            <div className="projects-carousel-info">
              
              {/* Counter */}
              <div className="projects-counter">
                <span className="projects-counter__current">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="projects-counter__sep">/</span>
                <span className="projects-counter__total">{String(professionalBrands.length).padStart(2, '0')}</span>
              </div>

              {/* Category tag */}
              <div className="projects-category-badge">
                <InstagramIcon size={12} style={{ color: '#2b5cff' }} />
                <span>Social Media</span>
              </div>

              <h3 className="projects-carousel-title">{currentProject.title}</h3>
              <p className="projects-carousel-subtitle">{currentProject.subtitle}</p>
              <p className="projects-carousel-desc">{currentProject.description}</p>

              {/* Tools */}
              {currentProject.tools?.length > 0 && (
                <div className="brand-card__tools">
                  <span className="tools-label">Herramientas:</span>
                  <div className="tools-list">
                    {currentProject.tools.map((t, idx) => {
                      const logo = TOOL_LOGOS[t.toLowerCase()];
                      return (
                        <div
                          key={idx}
                          className={`tool-badge badge-${t.toLowerCase()}`}
                          title={t === 'Ps' ? 'Adobe Photoshop' : t === 'Ai' ? 'Adobe Illustrator' : t}
                          style={{ background: logo ? 'transparent' : undefined, boxShadow: logo ? 'none' : undefined, padding: 0 }}
                        >
                          {logo ? <img src={logo} alt={t} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} /> : t}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Links */}
              {currentProject.links?.length > 0 && (
                <div className="brand-card__tools" style={{ marginTop: '0.4rem' }}>
                  <span className="tools-label">Enlaces:</span>
                  <div className="tools-list">
                    {currentProject.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brand-link-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#1e42d9' }}
                      >
                        <InstagramIcon size={13} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <button className="projects-carousel-view-btn" onClick={() => onSelectProject(currentProject)}>
                <Eye size={16} />
                Ver proyecto completo
              </button>

              {/* Mini Brand Nav thumbnails */}
              {professionalBrands.length > 1 && (
                <div className="projects-mini-nav">
                  {professionalBrands.map((p, idx) => (
                    <button
                      key={p.id}
                      className={`projects-mini-thumb ${idx === currentIndex ? 'active' : ''}`}
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

          {/* Navigation controls */}
          <div className="projects-carousel-controls">
            <button className="projects-carousel-arrow" onClick={prev} aria-label="Anterior">
              <ChevronLeft size={24} />
            </button>
            <div className="projects-carousel-dots">
              {professionalBrands.map((_, idx) => (
                <button
                  key={idx}
                  className={`projects-carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => { stopAutoPlay(); goTo(idx); }}
                  aria-label={`Proyecto ${idx + 1}`}
                />
              ))}
            </div>
            <button className="projects-carousel-arrow" onClick={next} aria-label="Siguiente">
              <ChevronRight size={24} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
