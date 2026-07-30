import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header({ showAcademic = true, showContact = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section calculation
      const sections = ['inicio', 'sobre-mi', 'cv', 'proyectos'];
      if (showAcademic) sections.push('academico');
      if (showContact) sections.push('contacto');
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAcademic, showContact]);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <a href="#inicio" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('inicio'); }}>
          EDGAR<span>SANTOS.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-links">
            {['inicio', 'sobre-mi', 'cv', 'proyectos', ...(showAcademic ? ['academico'] : []), ...(showContact ? ['contacto'] : [])].map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  className={activeSection === sec ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(sec);
                  }}
                >
                  {sec === 'sobre-mi' ? 'Sobre Mí'
                    : sec === 'cv' ? 'CV'
                    : sec === 'academico' ? 'Académico'
                    : sec.charAt(0).toUpperCase() + sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://www.behance.net/gallery/250505559/Portafolio-Profesional"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn"
          >
            Behance <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
        <ul className="nav-mobile-links">
          {['inicio', 'sobre-mi', 'cv', 'proyectos', ...(showAcademic ? ['academico'] : []), ...(showContact ? ['contacto'] : [])].map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={activeSection === sec ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(sec);
                }}
              >
                {sec === 'sobre-mi' ? 'Sobre Mí'
                  : sec === 'cv' ? 'CV'
                  : sec === 'academico' ? 'Académico'
                  : sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.behance.net/gallery/250505559/Portafolio-Profesional"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-behance-link"
            >
              Ver en Behance <ArrowUpRight size={16} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
