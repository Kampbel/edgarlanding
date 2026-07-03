import React, { useState, useEffect, useRef } from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';


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
      '/images/TRABAJOS PROFESIONAL/AIE CONSTRUTORA/POST 7 CARRSUEL 1 AIE MARZO_.png',
      '/images/TRABAJOS PROFESIONAL/AIE CONSTRUTORA/POST 9 CARRSUEL 1 AIE MARZO_.png'
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/aie.constructora?igsh=Njh5aXU3dTFudmY=' }
    ]
  },
  {
    id: 'cesfront',
    title: 'CESFRONT',
    subtitle: 'Efemérides Patrias & Redes Sociales',
    category: 'social-media',
    type: 'profesional',
    description: 'Diseño editorial de efemérides patrias y piezas comunicacionales para el Cuerpo Especializado en Seguridad Fronteriza Terrestre. Enfoque solemne y patriótico que respeta la identidad institucional y los símbolos nacionales.',
    tools: ['Ps'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 192631.png',
    images: [
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 2.png',
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 3.png',
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 5.png',
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 7.png',
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 8.png',
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 9.png'
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/cesfrontrd?igsh=M2lzMmppbWVqcnpj' }
    ]
  },
  {
    id: 'aviat',
    title: 'Aviat',
    subtitle: 'Servicios de Aviación & Logística',
    category: 'social-media',
    type: 'profesional',
    description: 'Gestión visual y diseño de contenidos estratégicos para LinkedIn e Instagram. Enfoque dinámico que resalta la eficiencia operativa, seguridad y el alcance global de sus servicios aeronáuticos a través de composiciones modernas.',
    tools: ['Ps'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 192712.png',
    images: [
      '/images/TRABAJOS PROFESIONAL/AVIAT/LINKEDIN POST 4 AVIAT OCUTBRE_.png',
      '/images/TRABAJOS PROFESIONAL/AVIAT/POST 11 AVIAT MAYO.png',
      '/images/TRABAJOS PROFESIONAL/AVIAT/POST 14 AVIAT NOVIEMBRE_.png',
      '/images/TRABAJOS PROFESIONAL/AVIAT/POST 2 AVIAT DICIEMBRE_.png',
      '/images/TRABAJOS PROFESIONAL/AVIAT/POST 5 CARRUSEL 3 AVIAT MAYO.png',
      '/images/TRABAJOS PROFESIONAL/AVIAT/POST 5 FEBRERO AVIAT.png'
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/company/aviatrd/' },
      { label: 'Instagram', url: 'https://www.instagram.com/aviat_rd?igsh=c253a3N6cHk1cjBy' }
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

// ── Individual Brand Carousel Card ───────────────────────────────────────────
function BrandCarouselCard({ brand, onSelectProject, index }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % brand.images.length);
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, [isHovered, brand.images.length]);

  const prev = (e) => {
    e.stopPropagation();
    setCurrentSlide(prev => (prev - 1 + brand.images.length) % brand.images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrentSlide(prev => (prev + 1) % brand.images.length);
  };

  // Alternate layout: odd cards = image left, even = image right
  const isReversed = index % 2 !== 0;

  return (
    <div className={`brand-card reveal ${isReversed ? 'brand-card--reversed' : ''}`}>
      {/* Left / Right: Image Carousel */}
      <div
        className="brand-card__carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slides */}
        <div className="brand-card__slides" onClick={() => onSelectProject(brand)}>
          {brand.images.map((img, idx) => (
            <div
              key={idx}
              className={`brand-card__slide ${idx === currentSlide ? 'active' : ''}`}
            >
              <img src={img} alt={`${brand.title} – imagen ${idx + 1}`} />
              <div className="brand-card__zoom-hint">
                <Eye size={20} />
                <span>Ver galería completa</span>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button className="brand-card__arrow brand-card__arrow--prev" onClick={prev} aria-label="Anterior">
          <ChevronLeft size={22} />
        </button>
        <button className="brand-card__arrow brand-card__arrow--next" onClick={next} aria-label="Siguiente">
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="brand-card__dots">
          {brand.images.map((_, idx) => (
            <button
              key={idx}
              className={`brand-card__dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
              aria-label={`Imagen ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="brand-card__counter">{currentSlide + 1} / {brand.images.length}</div>
      </div>

      {/* Info Panel */}
      <div className="brand-card__info">
        <span className="brand-card__category">Social Media</span>
        <h3 className="brand-card__title">{brand.title}</h3>
        <p className="brand-card__subtitle">{brand.subtitle}</p>
        <p className="brand-card__description">{brand.description}</p>

        {brand.tools && brand.tools.length > 0 && (
          <div className="brand-card__tools" style={{ marginTop: '0.5rem', marginBottom: '0.2rem' }}>
            <span className="tools-label">Herramientas:</span>
            <div className="tools-list">
              {brand.tools.map((t, idx) => {
                const lowT = t.toLowerCase();
                const toolLogos = {
                  ps: '/images/photoshop.png',
                  ai: '/images/illustrator.png',
                  pr: '/images/premiere.png',
                  cv: '/images/canva.png'
                };
                const hasLogo = !!toolLogos[lowT];
                return (
                  <div 
                    key={idx} 
                    className={`tool-badge badge-${lowT}`} 
                    title={t === 'Ps' ? 'Adobe Photoshop' : t === 'Ai' ? 'Adobe Illustrator' : t}
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

        {brand.links && brand.links.length > 0 && (
          <div className="brand-card__tools" style={{ marginTop: '0.6rem' }}>
            <span className="tools-label">Enlaces:</span>
            <div className="tools-list">
              {brand.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-link-btn"
                >
                  {link.label === 'LinkedIn' ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '3px' }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '3px' }}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <button
          className="brand-card__view-btn"
          onClick={() => onSelectProject(brand)}
        >
          <Eye size={16} />
          Ver galería completa
        </button>
      </div>
    </div>
  );
}

// ── Main Projects Component ───────────────────────────────────────────────────
export default function Projects({ onSelectProject }) {
  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        <div className="professional-brands-view">

          {/* Section intro */}
          <div className="section-header reveal">
            <span className="section-subtitle">Portafolio</span>
            <h2 className="section-title">Social <span className="title-gradient">Media</span></h2>
            <p className="section-description">
              Creación de contenido digital estratégico y a medida. Una selección de marcas que han
              confiado en mi visión gráfica para gestionar su presencia en redes sociales.
            </p>
          </div>

          {/* One card per brand */}
          <div className="brands-list">
            {professionalBrands.map((brand, index) => (
              <BrandCarouselCard
                key={brand.id}
                brand={brand}
                index={index}
                onSelectProject={onSelectProject}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
