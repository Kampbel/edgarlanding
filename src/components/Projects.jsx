import React, { useState, useEffect, useRef } from 'react';
import { Eye, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import LinkedinIcon from './LinkedinIcon';

const professionalBrands = [
  {
    id: 'honda',
    title: 'Honda Rent Car',
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
    title: 'Coco Vet',
    subtitle: 'Diseño de identidad visual para redes sociales enfocado en transmitir confianza y profesionalismo.',
    category: 'social-media',
    type: 'profesional',
    description: 'Para Coco Vet, desarrollé una línea gráfica amigable y cercana, creando desde post emotivos que resaltan el cuidado animal, hasta material promocional para su tienda. El uso de colores corporativos, elementos orgánicos y sets de iconos personalizados ayudó a construir una marca que conecta genuinamente con los dueños de mascotas.',
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
    title: 'Club de Gestión de Riesgos',
    subtitle: 'Fomentar las mejores prácticas y la cultura en gestión de riesgos financieros y regulaciones',
    category: 'social-media',
    type: 'profesional',
    description: 'Diseño de comunicación visual corporativa e institucional. Para el Club de Gestión de Riesgos, el objetivo fue proyectar una imagen sobria y de alto nivel. Me encargué de estructurar gráficamente la promoción de webinars, paneles de expertos y jornadas anuales, logrando diseños limpios que facilitan la lectura de información detallada y mantienen el prestigio y la seriedad de la organización.',
    tools: ['Ps'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 190737.png',
    images: [
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/CGR.png',
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/2 GDRrd Agosto Post 1.png',
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/ART GDRrd.png',
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/CGR PANELISTA.png',
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/POST SEPTIMBRE CGR RD.png',
      '/images/TRABAJOS PROFESIONAL/CLUB DE GESTION DE RIESGO/arte para Webinar_.png'
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/gestionriesgodr' }
    ]
  },
  {
    id: 'transekur',
    title: 'Transekur',
    subtitle: 'Transportation Services',
    category: 'social-media',
    type: 'profesional',
    description: 'Desarrollo de contenido digital enfocado en el sector de transporte de lujo y turismo corporativo. Para Transekur, creé una línea gráfica premium, utilizando composiciones elegantes e imágenes de alta calidad para comunicar exclusividad y confort. El diseño se centró en atraer a un público internacional, destacando experiencias de viaje VIP, traslados privados y destinos clave del país mediante un estilo visual moderno y sofisticado.',
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
    title: 'AIE Constructora',
    subtitle: 'Construimos proyectos con criterio, estructura y visión. Ingeniería que se ve. Procesos que sostienen.',
    category: 'social-media',
    type: 'profesional',
    description: 'Desarrollo de identidad visual para el sector construcción e ingeniería. Para AIE Constructora, el reto fue proyectar solidez, precisión y confianza. Diseñé una línea gráfica robusta que combina fotografías reales de los procesos en obra con tipografías fuertes y elementos extraídos de su propio logotipo. El resultado es un contenido que no solo destaca la capacidad técnica y estructural, sino también la calidad humana detrás de cada proyecto.',
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
      { label: 'Instagram', url: 'https://www.instagram.com/aie.constructora?igsh=MXFqZnk3dnJubDk4MQ==' }
    ]
  },
  {
    id: 'aviat',
    title: 'Aviat',
    subtitle: 'Empresa de transporte y flete',
    category: 'social-media',
    type: 'profesional',
    description: 'Desarrollo de identidad visual y contenido digital para el sector logístico y de transporte de carga. Para Aviat, diseñé una línea gráfica dinámica y corporativa que transmite eficiencia, seguridad y alcance global. El trabajo abordó desde la creación de composiciones visuales para sus servicios (marítimo, aéreo y terrestre), hasta el diseño de iconografía personalizada, logrando una presencia digital sólida y confiable para sus clientes comerciales.',
    tools: ['Ps'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 192631.png',
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
    id: 'cesfront',
    title: 'Cesfront',
    subtitle: 'Cuerpo Especializado de Seguridad Fronteriza Terrestre',
    category: 'social-media',
    type: 'profesional',
    description: 'Desarrollo de comunicación visual institucional y conmemorativa. Para el Cesfront, el enfoque consistió en proyectar respeto, solemnidad y patriotismo. Me encargué del diseño gráfico de efemérides, hitos históricos y celebraciones institucionales, utilizando una línea visual clásica y formal. El trabajo destaca por la integración cuidadosa de símbolos patrios, tipografías tradicionales e imágenes históricas para honrar la identidad militar y nacional.',
    tools: ['Ps', 'Ai'],
    logo: '/images/Portafolio/Proyectos/Evidencias/Trabajos_Profesionales_Social_Media/Imagenes/Captura de pantalla 2026-06-27 192712.png',
    images: [
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 2.png',
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 3.png',
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 5.png',
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 7.png',
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 8.png',
      '/images/TRABAJOS PROFESIONAL/CESFRONT/efemérides 9.png'
    ],
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/cesfrontrd' }
    ]
  },
  {
    id: 'birria',
    title: 'Birria y Ma’ Na’',
    subtitle: 'Cocina fantasma',
    category: 'social-media',
    type: 'profesional',
    description: 'Creación de línea gráfica dinámica para una cocina fantasma. Al operar principalmente a través de delivery, el reto fue hacer que la comida hablara por sí sola a través de las pantallas. Desarrollé una identidad vibrante que combina colores cálidos, frases pegajosas y fotografías de alto impacto para estimular el apetito e incentivar los pedidos digitales, logrando una presencia irresistible en redes.',
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
    title: 'Pimma Auto',
    subtitle: 'Venta de autos',
    category: 'social-media',
    type: 'profesional',
    description: 'Diseño de contenido digital enfocado en el sector automotriz y la venta de vehículos. Para Pimma Auto, el objetivo fue crear un catálogo visual atractivo y confiable. Desarrollé plantillas dinámicas que resaltan las características, detalles interiores y precios de cada modelo mediante recortes fotográficos y composiciones limpias.',
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

// ── Individual Brand Card (Alternating List Form) ──────────────────────────
function BrandCard({ brand, onSelectProject, index }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % brand.images.length);
    }, 4500);
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

  const isReversed = index % 2 !== 0;
  const progress = ((currentSlide + 1) / brand.images.length) * 100;

  return (
    <div className={`brand-card reveal ${isReversed ? 'brand-card--reversed' : ''}`}>
      


      {/* LEFT / RIGHT: Image Carousel */}
      <div
        className="brand-card__carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="brand-card__slides" onClick={() => onSelectProject(brand)}>
          {brand.images.map((img, idx) => (
            <div
              key={idx}
              className={`brand-card__slide ${idx === currentSlide ? 'active' : ''}`}
            >
              <img src={img} alt={`${brand.title} – imagen ${idx + 1}`} loading="lazy" />
              <div className="brand-card__zoom-hint">
                <div className="brand-card__zoom-icon">
                  <Eye size={22} />
                </div>
                <span>Ver galería completa</span>
              </div>
            </div>
          ))}
        </div>

        {brand.images.length > 1 && (
          <>
            <button className="brand-card__arrow brand-card__arrow--prev" onClick={prev} aria-label="Anterior">
              <ChevronLeft size={20} />
            </button>
            <button className="brand-card__arrow brand-card__arrow--next" onClick={next} aria-label="Siguiente">
              <ChevronRight size={20} />
            </button>
            

          </>
        )}
      </div>

      {/* RIGHT / LEFT: Info Panel */}
      <div className="brand-card__info">
        
        {/* Project large index number (Academic style) */}
        <div className="brand-card__index-counter">
          <span className="brand-card__index-current">{String(index + 1).padStart(2, '0')}</span>
          <span className="brand-card__index-sep">/</span>
          <span className="brand-card__index-total">{String(professionalBrands.length).padStart(2, '0')}</span>
        </div>

        {/* Category tag */}
        <div className="brand-card__category-badge">
          <InstagramIcon size={12} style={{ color: '#2b5cff' }} />
          <span>Social media</span>
        </div>

        <h3 className="brand-card__title">{brand.title}</h3>
        <p className="brand-card__subtitle">{brand.subtitle}</p>
        <p className="brand-card__description">{brand.description}</p>

        {/* Tools */}
        {brand.tools?.length > 0 && (
          <div className="brand-card__tools" style={{ marginTop: '0.3rem' }}>
            <span className="tools-label">Herramientas:</span>
            <div className="tools-list">
              {brand.tools.map((t, idx) => {
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
        {brand.links?.length > 0 && (
          <div className="brand-card__tools" style={{ marginTop: '0.4rem' }}>
            <span className="tools-label">Enlaces:</span>
            <div className="tools-list">
              {brand.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-link-btn"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#1e42d9' }}
                >
                  {link.label.toLowerCase().includes('instagram') ? (
                    <InstagramIcon size={13} />
                  ) : link.label.toLowerCase().includes('linkedin') ? (
                    <LinkedinIcon size={13} />
                  ) : (
                    <Globe size={13} />
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

// ── Main Projects Component ──────────────────────────────────────────────────
export default function Projects({ onSelectProject }) {
  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        
        {/* Section Intro */}
        <div className="projects-header reveal">
          <div className="projects-header__left">
            <span className="section-subtitle">Portafolio</span>
            <h2 className="section-title">Social <span className="title-gradient">media</span></h2>
            <p className="projects-header__desc">
              Creación de contenido digital estratégico y a medida. Una selección de marcas que han
              confiado en mi visión gráfica para gestionar su presencia en redes sociales.
            </p>
          </div>
        </div>

        {/* Alternating Brand Cards List */}
        <div className="brands-list" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {professionalBrands.map((brand, index) => (
            <BrandCard
              key={brand.id}
              brand={brand}
              index={index}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
