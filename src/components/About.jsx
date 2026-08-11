import React from 'react';
import { Briefcase, MapPin, Globe, ExternalLink } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import LinkedinIcon from './LinkedinIcon';

/* ── Data ────────────────────────────────────────────────────────── */

const softwareTools = [
  {
    name: 'Adobe Photoshop',
    shortName: 'Photoshop',
    abbr: 'Ps',
    color: '#31A8FF',
    logo: '/images/photoshop.png',
  },
  {
    name: 'Adobe Illustrator',
    shortName: 'Illustrator',
    abbr: 'Ai',
    color: '#FF9A00',
    logo: '/images/illustrator.png',
  },
  {
    name: 'Adobe InDesign',
    shortName: 'InDesign',
    abbr: 'Id',
    color: '#FF3366',
    logo: '/images/indesign.png',
  },
  {
    name: 'Adobe Premiere Pro',
    shortName: 'Premiere',
    abbr: 'Pr',
    color: '#9999FF',
    logo: '/images/premiere.png',
  },
  {
    name: 'Canva',
    shortName: 'Canva',
    abbr: 'Cv',
    color: '#00C4CC',
    logo: '/images/canva.png',
  },
];

const experience = [
  {
    company: 'Ek Kreative Digital Group',
    role: 'Community Manager / Gestión de Proyectos',
    type: 'Agencia de Publicidad, Social Media & Marketing Digital',
    period: 'Oct. 2024 – Ene. 2025',
    duties: [
      'Diseño gráfico estratégico para proyectos de rebranding de marca',
      'Gestión integral de comunidades digitales y contenido para redes sociales',
    ],
  },
  {
    company: 'Editable SRL',
    role: 'Diseñador Jr.',
    type: 'Agencia de Publicidad & Marketing Digital',
    period: 'Jul. 2025 – Presente',
    duties: [
      'Diseño visual para campañas estratégicas en redes sociales',
      'Creación de piezas gráficas multiformato para diversas marcas de alto perfil',
    ],
  },
];

const skills = [
  'Versatilidad de Marca',
  'Gestión Ágil del Flujo de Trabajo',
  'Aplicación Estratégica de Marca',
  'Adaptabilidad Multiformato',
  'Conceptualización Rápida',
  'Trabajo Colaborativo',
  'Branding & Identidad Visual',
  'Dirección de Arte',
];

const socialLinks = [
  {
    label: 'Behance',
    url: 'https://www.behance.net/gallery/250505559/Portafolio-Profesional',
    icon: <Globe size={18} />,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/edgarjoelsantos/',
    icon: <LinkedinIcon size={18} />,
  },
];

/* ── Component ───────────────────────────────────────────────────── */

export default function About() {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="container">

        {/* ─ Section Header ─ */}
        <div className="section-header reveal">
          <span className="section-subtitle">Conóceme</span>
          <h2 className="section-title">Sobre <span className="title-gradient">Mí</span></h2>
        </div>

        {/* ─ Two-column layout ─ */}
        <div className="about-grid">

          {/* ── Left column: photo + socials + software ── */}
          <div className="about-visual reveal">

            {/* Profile photo */}
            <div className="photo-wrapper">
              <img
                src="/images/FOTO MIA/EDGAR.png"
                alt="Edgar Santos"
                className="profile-photo"
              />
            </div>

            {/* Quick stats */}
            <div className="quick-stats">
              <div className="stat-item">
                <Briefcase className="stat-item__icon" size={14} />
                <span className="stat-item__text"><strong>1 Año</strong> de Experiencia</span>
              </div>
              <div className="stat-item">
                <MapPin className="stat-item__icon" size={14} />
                <span className="stat-item__text">Distrito Nacional, Santo Domingo</span>
              </div>
            </div>

            {/* ── Software & Tools ── */}
            <div className="about-block" style={{ width: '100%' }}>
              <h4 className="about-block-title">
                <span className="about-block-title__bar" />
                Software & Herramientas
              </h4>
              <div className="software-grid">
                {softwareTools.map((tool) => (
                  <div key={tool.abbr} className="software-badge" title={tool.name}>
                    <div
                      className="software-badge__icon"
                      style={{ 
                        background: tool.logo ? 'transparent' : tool.color,
                        boxShadow: tool.logo ? 'none' : undefined
                      }}
                    >
                      {tool.logo ? (
                        <img 
                          src={tool.logo} 
                          alt={tool.name} 
                          style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 'inherit' }} 
                        />
                      ) : (
                        <span>{tool.abbr}</span>
                      )}
                    </div>
                    <span className="software-badge__name">{tool.shortName || tool.abbr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links – solo íconos */}
            <div className="about-socials">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-icon-btn"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

          </div>

          {/* ── Right column: bio + tools + experience + skills ── */}
          <div className="about-info reveal">

            <h3 className="about-heading">Edgar Joel Santos Cuevas</h3>
            <p className="about-text">
              Soy estudiante de Diseño Gráfico radicado en Santo Domingo, República Dominicana. Me caracterizo por ser un profesional comunicativo, perseverante y proactivo, con un sólido manejo del tiempo y mucha iniciativa. Me desenvuelvo con solvencia tanto en equipos de trabajo como de manera autónoma, aportando siempre un enfoque responsable, meticuloso y detallista. Mi capacidad constante para investigar, aprender y profundizar en diversos temas enriquece mi propuesta creativa y consolida mi valor como diseñador.
            </p>



            {/* ── Experiencia Laboral ── */}
            <div className="about-block">
              <h4 className="about-block-title">
                <span className="about-block-title__bar" />
                Experiencia Laboral
              </h4>
              <div className="exp-list">
                {experience.map((job, i) => (
                  <div key={i} className="exp-item">
                    <div className="exp-item__dot" />
                    <div className="exp-item__body">
                      <div className="exp-item__header">
                        <h5 className="exp-item__company">{job.company}</h5>
                        <span className="exp-item__period">{job.period}</span>
                      </div>
                      <p className="exp-item__role">{job.role}</p>
                      <p className="exp-item__type">{job.type}</p>
                      <ul className="exp-item__duties">
                        {job.duties.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Habilidades ── */}
            <div className="about-block">
              <h4 className="about-block-title">
                <span className="about-block-title__bar" />
                Habilidades
              </h4>
              <div className="skills-tags">
                {skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
