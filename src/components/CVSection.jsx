import React from 'react';
import { FileText, ExternalLink, QrCode, Download, CheckCircle2 } from 'lucide-react';

export default function CVSection() {
  const cvUrl = "https://drive.google.com/file/d/1i84cKcV1xe_cDFNSvF4lyavu5DzQGSsR/view";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(cvUrl)}&color=1e42d9&margin=10`;

  return (
    <section id="cv" className="cv-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-subtitle">Currículum Vitae</span>
          <h2 className="section-title">
            Mi <span className="title-gradient">Trayectoria</span> Profesional
          </h2>
          <p className="cv-section-desc">
            Consulta o descarga mi CV completo para conocer a detalle mi formación académica, experiencia laboral, habilidades técnicas y proyectos.
          </p>
        </div>

        {/* CV Card Container */}
        <div className="cv-card-grid reveal">

          {/* Left Side: Information & Action Button */}
          <div className="cv-info-card">
            <div className="cv-badge">
              <FileText size={16} />
              <span>Documento PDF Oficial</span>
            </div>

            <h3 className="cv-card-title">Edgar Joel Santos Cuevas</h3>
            <p className="cv-card-subtitle">Diseñador Gráfico & Creativo Visual</p>
            
            <div className="cv-features-list">
              <div className="cv-feature-item">
                <CheckCircle2 size={16} className="cv-feature-icon" />
                <span>Formación Académica en Diseño Gráfico</span>
              </div>
              <div className="cv-feature-item">
                <CheckCircle2 size={16} className="cv-feature-icon" />
                <span>Experiencia en Agencias de Publicidad & Social Media</span>
              </div>
              <div className="cv-feature-item">
                <CheckCircle2 size={16} className="cv-feature-icon" />
                <span>Dominio de Adobe Creative Cloud (Ps, Ai, Id, Pr)</span>
              </div>
              <div className="cv-feature-item">
                <CheckCircle2 size={16} className="cv-feature-icon" />
                <span>Branding, Identidad Visual y Diseño Editorial</span>
              </div>
            </div>

            <div className="cv-actions">
              <a 
                href={cvUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary cv-download-btn"
              >
                <Download size={18} />
                <span>Ver / Descargar CV (PDF)</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Right Side: Generated QR Code */}
          <div className="cv-qr-card">
            <div className="cv-qr-header">
              <QrCode size={20} className="cv-qr-header-icon" />
              <span>Código QR de Acceso Rápido</span>
            </div>
            
            <div className="cv-qr-image-wrapper">
              <img 
                src={qrUrl} 
                alt="Código QR del CV de Edgar Santos" 
                className="cv-qr-image" 
                loading="lazy"
              />
            </div>

            <p className="cv-qr-caption">
              Escanea este código QR con la cámara de tu smartphone para abrir mi CV directamente en Google Drive.
            </p>

            <a 
              href={cvUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cv-qr-link"
            >
              Abri enlace directo <ExternalLink size={12} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
