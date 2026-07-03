import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ project, onClose }) {
  useEffect(() => {
    // Lock scroll on background body
    document.body.style.overflow = 'hidden';
    
    // Keyboard close on escape
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">
        <X size={28} />
      </button>

      {/* Main Container */}
      <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Layout: Scrollable Image Stack + Sticky Side Project Info */}
        <div className="lightbox-layout">
          
          {/* Left: Scrollable Image Panel (Behance Style) */}
          <div className="lightbox-visual-panel">
            <div className="lightbox-images-stack">
              {project.images.map((img, idx) => (
                <div key={idx} className="lightbox-image-wrapper">
                  <img 
                    src={img} 
                    alt={`${project.title} - Imagen ${idx + 1}`} 
                    className="lightbox-stacked-image"
                    loading="lazy"
                  />
                  <div className="lightbox-image-num">
                    {idx + 1} de {project.images.length}
                  </div>
                </div>
              ))}
            </div>
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
                  <span className="feature-value">2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
