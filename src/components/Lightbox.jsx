import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  useEffect(() => {
    // Lock scroll on background body
    document.body.style.overflow = 'hidden';
    
    // Keyboard close on escape, navigate on arrow keys
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && project?.images?.length > 1) {
        setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight' && project?.images?.length > 1) {
        setCurrentIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, project]);

  if (!project) return null;

  const hasMultiple = project.images && project.images.length > 1;

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Cerrar" title="Cerrar (Esc)">
        <X size={28} />
      </button>

      {/* Main Container */}
      <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Layout: Interactive Image Panel + Sticky Side Project Info */}
        <div className="lightbox-layout">
          
          {/* Left: Image Carousel Panel */}
          <div className="lightbox-visual-panel">
            {/* Arrow Left */}
            {hasMultiple && (
              <button 
                className="lightbox-arrow arrow-left" 
                onClick={handlePrev} 
                aria-label="Imagen anterior"
                title="Imagen anterior (Flecha izquierda)"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Main Active Image Display */}
            <div className="lightbox-main-image-wrap">
              <img 
                src={project.images[currentIndex]} 
                alt={`${project.title} - Imagen ${currentIndex + 1}`} 
                className="lightbox-main-image"
              />
              <div className="lightbox-image-num">
                {currentIndex + 1} de {project.images.length}
              </div>
            </div>

            {/* Arrow Right */}
            {hasMultiple && (
              <button 
                className="lightbox-arrow arrow-right" 
                onClick={handleNext} 
                aria-label="Imagen siguiente"
                title="Imagen siguiente (Flecha derecha)"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Thumbnail Strip */}
            {hasMultiple && (
              <div className="lightbox-thumbs-strip">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`lightbox-thumb-btn ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    title={`Ver imagen ${idx + 1}`}
                  >
                    <img src={img} alt={`Miniatura ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Sticky Project Info */}
          <div className="lightbox-info-panel">
            <div className="sticky-info-content">
              <span className="lightbox-tag-scope">{project.type}</span>
              <h3 className="lightbox-title-text">{project.title}</h3>
              <span className="lightbox-category-text">{project.category}</span>
              
              <div className="lightbox-divider"></div>
              
              <p className="lightbox-desc-text">{project.description}</p>
              
              <div className="lightbox-features">
                <div className="feature-item">
                  <span className="feature-label">Ámbito:</span>
                  <span className="feature-value" style={{ textTransform: 'capitalize' }}>{project.type}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Categoría:</span>
                  <span className="feature-value" style={{ textTransform: 'capitalize' }}>{project.category}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Diseñador:</span>
                  <span className="feature-value">Edgar Santos</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Año:</span>
                  <span className="feature-value">{project.year || '2026'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
