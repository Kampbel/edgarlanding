import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

export default function Footer({ showAcademic = true, showContact = true }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        {/* Top: Logo & Description + Nav Links + Socials */}
        <div className="footer-top">
          {/* Logo brand */}
          <div className="footer-brand">
            <a href="#inicio" className="footer-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              EDGAR<span>SANTOS.</span>
            </a>
            <p className="footer-tagline">
              Diseño gráfico conceptual y dirección de arte con enfoque de alta gama. Basado en Santo Domingo, RD.
            </p>
          </div>

          {/* Quick nav */}
          <div className="footer-nav">
            <h4 className="footer-nav-title">Navegación</h4>
            <ul className="footer-nav-links">
              <li>
                <a href="#inicio" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" onClick={(e) => { e.preventDefault(); const el = document.getElementById('sobre-mi'); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }}>
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#proyectos" onClick={(e) => { e.preventDefault(); const el = document.getElementById('proyectos'); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }}>
                  Proyectos
                </a>
              </li>
              {showContact && (
                <li>
                  <a href="#contacto" onClick={(e) => { e.preventDefault(); const el = document.getElementById('contacto'); if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }}>
                    Contacto
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-connect">
            <h4 className="footer-nav-title">Redes</h4>
            <div className="footer-social-links">
              <a href="https://www.behance.net/gallery/250505559/Portafolio-Profesional" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Behance">
                <Globe size={18} />
              </a>
              <a href="https://www.linkedin.com/in/edgarjoelsantos/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom: Copyright & Scroll to Top button */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Edgar Santos. Todos los derechos reservados.
          </p>
          
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Ir al inicio">
            <span>Volver arriba</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
