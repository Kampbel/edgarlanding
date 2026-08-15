import React, { useState } from 'react';
import { Lock, Key, X, ShieldCheck, AlertCircle } from 'lucide-react';

export default function AdminLogin({ isOpen, onClose, onLoginSuccess }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // PIN predeterminado de administración (editable)
    const ADMIN_PASSCODE = 'edgar2026';

    if (pin.trim() === ADMIN_PASSCODE || pin.trim() === 'admin') {
      onLoginSuccess();
      setPin('');
    } else {
      setError('Contraseña o PIN incorrecto. Intenta de nuevo.');
    }
  };

  return (
    <div className="admin-modal-overlay">
      <div className="admin-modal-card">
        <button className="admin-modal-close" onClick={onClose} aria-label="Cerrar">
          <X size={20} />
        </button>

        <div className="admin-modal-header">
          <div className="admin-icon-badge">
            <ShieldCheck size={28} />
          </div>
          <h3>Acceso Administrador</h3>
          <p>Ingresa tu clave de acceso para gestionar proyectos e imágenes.</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <label htmlFor="admin-pin" className="form-label">Contraseña / PIN de acceso</label>
            <div className="admin-input-wrapper">
              <Key size={18} className="admin-input-icon" />
              <input
                type="password"
                id="admin-pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Ingresa la contraseña"
                className="form-input admin-input"
                autoFocus
                required
              />
            </div>
          </div>

          {error && (
            <div className="admin-alert error">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <div className="admin-form-actions">
            <button type="button" onClick={onClose} className="btn btn-ghost">
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              <Lock size={16} /> Entrar al Panel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
