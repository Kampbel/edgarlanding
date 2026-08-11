import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Globe, AlertCircle, RefreshCw } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const targetEmail = 'edgarsnt7@gmail.com';

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setIsSent(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formState.name,
          Email: formState.email,
          _subject: `[Portafolio Web] ${formState.subject || 'Nuevo mensaje'}`,
          Asunto: formState.subject,
          Mensaje: formState.message,
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setIsSent(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'No se pudo enviar el mensaje.');
      }
    } catch (err) {
      console.error('Error al enviar el formulario:', err);
      setErrorMessage('Ocurrió un error al enviar el formulario por la red. Puedes enviar tu mensaje directamente por tu cliente de correo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(formState.subject || 'Contacto Web')}&body=${encodeURIComponent(`Nombre: ${formState.name}\nCorreo: ${formState.email}\n\nMensaje:\n${formState.message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Contacto</span>
          <h2 className="section-title">Hablemos de tu <span className="title-gradient">proyecto</span></h2>
        </div>

        <div className="contact-grid">
          {/* Left Panel: Info + WhatsApp QR Code */}
          <div className="contact-info-panel reveal">
            <h3 className="contact-info-title">¿Tienes una idea en mente?</h3>
            <p className="contact-info-text">
              ¿Tienes un proyecto en mente o buscas potenciar la imagen de tu marca? Estoy disponible para colaboraciones freelance, identidades visuales y consultoría de diseño. Escríbeme y demos forma a tus ideas con soluciones visuales de alto impacto.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="contact-detail-label">Envíame un correo</span>
                  <a href="mailto:edgarsnt7@gmail.com" className="contact-detail-value">
                    edgarsnt7@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="contact-detail-label">Llamadas o WhatsApp</span>
                  <a href="https://wa.me/18297048823" target="_blank" rel="noopener noreferrer" className="contact-detail-value">
                    +1 829-704-8823
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="contact-detail-label">Ubicación</span>
                  <span className="contact-detail-value">
                    Distrito Nacional, Santo Domingo
                  </span>
                </div>
              </div>
            </div>

            {/* Social media connections */}
            <div className="contact-socials">
              <span className="socials-label">Conéctate:</span>
              <div className="socials-links">
                <a href="https://www.behance.net/gallery/250505559/Portafolio-Profesional" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Behance">
                  <Globe size={18} />
                </a>
                <a href="https://www.linkedin.com/in/edgarjoelsantos/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>

            {/* WhatsApp QR Code Card */}
            <div className="contact-qr-card">
              <div className="contact-qr-image-wrapper">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/18297048823&color=1e42d9" 
                  alt="WhatsApp QR Code" 
                  className="contact-qr-image"
                />
              </div>
              <div className="contact-qr-info">
                <span className="contact-qr-title">Escríbeme por WhatsApp</span>
                <span className="contact-qr-desc">Escanea este código QR desde tu móvil o haz clic en el número telefónico para iniciar una conversación directa en WhatsApp.</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Form */}
          <div className="contact-form-panel reveal">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name} 
                  onChange={handleChange}
                  placeholder="Ej. Juan Pérez" 
                  className="form-input" 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email} 
                  onChange={handleChange}
                  placeholder="juan@ejemplo.com" 
                  className="form-input" 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formState.subject} 
                  onChange={handleChange}
                  placeholder="Ej. Diseño de branding para mi marca" 
                  className="form-input" 
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message} 
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto, objetivos y plazos..." 
                  className="form-input form-textarea" 
                  required
                ></textarea>
              </div>

              {isSent && (
                <div className="form-status-alert success">
                  <CheckCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>¡Mensaje enviado con éxito!</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem' }}>
                      Tu mensaje se envió directamente al correo <strong>{targetEmail}</strong>. Te responderé a la brevedad.
                    </p>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="form-status-alert error">
                  <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>Error al enviar</strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem' }}>{errorMessage}</p>
                    <button 
                      type="button" 
                      onClick={handleMailtoFallback}
                      className="form-status-fallback-btn"
                    >
                      <Mail size={14} /> Enviar directamente vía correo electrónico
                    </button>
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                className={`btn btn-primary form-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={18} className="spin-icon" /> Enviando...
                  </>
                ) : isSent ? (
                  <>
                    <CheckCircle size={18} /> ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    Enviar mensaje <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
