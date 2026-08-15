import React, { useState, useEffect } from 'react';
import { 
  Plus, Edit3, Trash2, Image, Upload, X, CheckCircle, 
  AlertCircle, RefreshCw, Layout, Layers, ExternalLink, LogOut, Database
} from 'lucide-react';
import { isSupabaseConfigured } from '../lib/supabaseClient';
import { 
  fetchProjectsFromSupabase, 
  createProjectInSupabase, 
  updateProjectInSupabase, 
  deleteProjectFromSupabase 
} from '../services/projectsService';

export default function AdminDashboard({ isOpen, onClose, onProjectsUpdated, initialProjects = [] }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState('all'); // 'all', 'profesional', 'academico'

  // Modal de Crear / Editar
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Formulario state
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: 'social-media',
    type: 'profesional',
    description: '',
    tools: ['Ps'],
    logoUrl: '',
    instagramUrl: '',
    behanceUrl: '',
    imagesList: []
  });

  // Archivos seleccionados para subir
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  // Estado de envío
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const supabaseReady = isSupabaseConfigured();

  // Cargar proyectos de Supabase
  const loadProjects = async () => {
    setLoading(true);
    try {
      if (supabaseReady) {
        const dbProjects = await fetchProjectsFromSupabase();
        setProjects(dbProjects);
        if (onProjectsUpdated) onProjectsUpdated(dbProjects);
      } else {
        setProjects(initialProjects);
      }
    } catch (err) {
      console.error('Error cargando proyectos:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadProjects();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Abrir formulario para Crear
  const handleOpenCreate = () => {
    setEditingId(null);
    setFormData({
      title: '',
      subtitle: '',
      category: 'social-media',
      type: 'profesional',
      description: '',
      tools: ['Ps'],
      logoUrl: '',
      instagramUrl: '',
      behanceUrl: '',
      imagesList: []
    });
    setLogoFile(null);
    setLogoPreview('');
    setImageFiles([]);
    setImagePreviews([]);
    setStatusMessage({ type: '', text: '' });
    setIsFormOpen(true);
  };

  // Abrir formulario para Editar
  const handleOpenEdit = (proj) => {
    setEditingId(proj.id);
    const instaLink = (proj.links || []).find((l) => l.label === 'Instagram')?.url || '';
    const behanceLink = (proj.links || []).find((l) => l.label === 'Behance')?.url || '';

    setFormData({
      title: proj.title || '',
      subtitle: proj.subtitle || '',
      category: proj.category || 'social-media',
      type: proj.type || 'profesional',
      description: proj.description || '',
      tools: proj.tools || ['Ps'],
      logoUrl: proj.logo || '',
      instagramUrl: instaLink,
      behanceUrl: behanceLink,
      imagesList: proj.images || []
    });
    setLogoFile(null);
    setLogoPreview(proj.logo || '');
    setImageFiles([]);
    setImagePreviews([]);
    setStatusMessage({ type: '', text: '' });
    setIsFormOpen(true);
  };

  // Manejar selección de logo
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  // Manejar selección de múltiples imágenes
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setImageFiles((prev) => [...prev, ...files]);
      const previews = files.map((f) => URL.createObjectURL(f));
      setImagePreviews((prev) => [...prev, ...previews]);
    }
  };

  // Remover imagen nueva antes de guardar
  const handleRemoveNewImage = (index) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // Toggle herramientas (Ps, Ai, Id, Pr, Ca)
  const handleToggleTool = (tool) => {
    setFormData((prev) => {
      const exists = prev.tools.includes(tool);
      if (exists) {
        return { ...prev, tools: prev.tools.filter((t) => t !== tool) };
      } else {
        return { ...prev, tools: [...prev.tools, tool] };
      }
    });
  };

  // Guardar (Crear o Editar)
  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setStatusMessage({ type: 'error', text: 'El título del proyecto es obligatorio.' });
      return;
    }

    setIsSaving(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const links = [];
      if (formData.instagramUrl.trim()) links.push({ label: 'Instagram', url: formData.instagramUrl.trim() });
      if (formData.behanceUrl.trim()) links.push({ label: 'Behance', url: formData.behanceUrl.trim() });

      const projectPayload = {
        title: formData.title,
        subtitle: formData.subtitle,
        category: formData.category,
        type: formData.type,
        description: formData.description,
        tools: formData.tools,
        logo: formData.logoUrl,
        links,
        images: formData.imagesList
      };

      if (editingId) {
        await updateProjectInSupabase(editingId, {
          projectData: projectPayload,
          logoFile,
          newImageFiles: imageFiles
        });
        setStatusMessage({ type: 'success', text: 'Proyecto actualizado con éxito.' });
      } else {
        await createProjectInSupabase({
          projectData: projectPayload,
          logoFile,
          imageFiles
        });
        setStatusMessage({ type: 'success', text: 'Proyecto creado con éxito en Supabase.' });
      }

      await loadProjects();
      setTimeout(() => {
        setIsFormOpen(false);
      }, 1200);
    } catch (err) {
      console.error('Error guardando proyecto:', err);
      setStatusMessage({ 
        type: 'error', 
        text: `Error al guardar: ${err.message || 'Verifica la conexión a Supabase.'}` 
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Eliminar proyecto
  const handleDelete = async (id) => {
    try {
      await deleteProjectFromSupabase(id);
      setConfirmDeleteId(null);
      await loadProjects();
    } catch (err) {
      console.error('Error eliminando proyecto:', err);
      alert('Error al eliminar proyecto de Supabase');
    }
  };

  const filteredProjects = projects.filter((p) => {
    if (filterType === 'all') return true;
    return p.type === filterType;
  });

  return (
    <div className="admin-dashboard-overlay">
      <div className="admin-dashboard-container">
        
        {/* TOP BAR */}
        <div className="admin-topbar">
          <div className="admin-branding">
            <Layout size={24} className="admin-brand-icon" />
            <div>
              <h2>Panel de Control | Portafolio</h2>
              <span className="admin-subtitle">Gestión de Proyectos, Contenidos e Imágenes</span>
            </div>
          </div>

          <div className="admin-topbar-actions">
            <span className={`admin-status-pill ${supabaseReady ? 'active' : 'warning'}`}>
              <Database size={14} />
              {supabaseReady ? 'Supabase Conectado' : 'Supabase No Configurado (.env)'}
            </span>

            <button onClick={handleOpenCreate} className="btn btn-primary" disabled={!supabaseReady}>
              <Plus size={18} /> Nuevo Proyecto
            </button>

            <button onClick={onClose} className="btn btn-ghost" aria-label="Cerrar Panel">
              <LogOut size={18} /> Salir
            </button>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="admin-main-content">
          
          {!supabaseReady && (
            <div className="admin-setup-banner">
              <AlertCircle size={22} style={{ flexShrink: 0 }} />
              <div>
                <strong>Aviso de Configuración de Supabase:</strong>
                <p>
                  Para crear, editar o eliminar proyectos e imágenes en la nube, ingresa tus claves 
                  <code>VITE_SUPABASE_URL</code> y <code>VITE_SUPABASE_ANON_KEY</code> en tu archivo <code>.env</code> y ejecuta el script <code>supabase_setup.sql</code> en tu proyecto de Supabase.
                </p>
              </div>
            </div>
          )}

          {/* FILTROS */}
          <div className="admin-filters-bar">
            <div className="admin-tabs">
              <button 
                className={`admin-tab ${filterType === 'all' ? 'active' : ''}`}
                onClick={() => setFilterType('all')}
              >
                Todos ({projects.length})
              </button>
              <button 
                className={`admin-tab ${filterType === 'profesional' ? 'active' : ''}`}
                onClick={() => setFilterType('profesional')}
              >
                Profesionales ({projects.filter(p => p.type === 'profesional').length})
              </button>
              <button 
                className={`admin-tab ${filterType === 'academico' ? 'active' : ''}`}
                onClick={() => setFilterType('academico')}
              >
                Académicos ({projects.filter(p => p.type === 'academico').length})
              </button>
            </div>

            <button onClick={loadProjects} className="btn btn-icon-only" title="Recargar lista">
              <RefreshCw size={16} className={loading ? 'spin-icon' : ''} />
            </button>
          </div>

          {/* LISTADO DE PROYECTOS EN GRID */}
          <div className="admin-projects-grid">
            {loading ? (
              <div className="admin-loading-state">
                <RefreshCw size={32} className="spin-icon" />
                <p>Cargando proyectos desde Supabase...</p>
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="admin-empty-state">
                <Layers size={48} />
                <h4>No hay proyectos registrados en esta categoría</h4>
                <p>Haz clic en "+ Nuevo Proyecto" para agregar el primero.</p>
              </div>
            ) : (
              filteredProjects.map((proj) => (
                <div key={proj.id} className="admin-project-card">
                  <div className="admin-project-card-header">
                    {proj.logo ? (
                      <img src={proj.logo} alt={proj.title} className="admin-card-logo" />
                    ) : (
                      <div className="admin-card-logo-placeholder">
                        <Image size={24} />
                      </div>
                    )}
                    <div className="admin-card-badges">
                      <span className={`badge-type ${proj.type}`}>
                        {proj.type === 'profesional' ? 'Profesional' : 'Académico'}
                      </span>
                      <span className="badge-category">{proj.category}</span>
                    </div>
                  </div>

                  <div className="admin-project-card-body">
                    <h4 className="admin-card-title">{proj.title}</h4>
                    <p className="admin-card-subtitle">{proj.subtitle || 'Sin subtítulo'}</p>
                    
                    <div className="admin-card-meta">
                      <span>🖼️ {(proj.images || []).length} imágenes</span>
                      <span>🛠️ {(proj.tools || []).join(', ')}</span>
                    </div>
                  </div>

                  <div className="admin-project-card-footer">
                    <button 
                      onClick={() => handleOpenEdit(proj)} 
                      className="btn-action edit"
                      title="Editar Proyecto"
                    >
                      <Edit3 size={16} /> Editar
                    </button>

                    {confirmDeleteId === proj.id ? (
                      <div className="confirm-delete-group">
                        <span className="confirm-label">¿Eliminar?</span>
                        <button onClick={() => handleDelete(proj.id)} className="btn-action danger-confirm">Sí</button>
                        <button onClick={() => setConfirmDeleteId(null)} className="btn-action ghost-cancel">No</button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => setConfirmDeleteId(proj.id)} 
                        className="btn-action delete"
                        title="Eliminar Proyecto"
                      >
                        <Trash2 size={16} /> Eliminar
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* MODAL FORMULARIO DE CREAR / EDITAR PROYECTO */}
        {isFormOpen && (
          <div className="admin-form-modal-overlay">
            <div className="admin-form-modal">
              <div className="admin-form-header">
                <h3>{editingId ? 'Editar Proyecto' : 'Agregar Nuevo Proyecto'}</h3>
                <button onClick={() => setIsFormOpen(false)} className="btn-close-modal">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSave} className="admin-project-form">
                
                {/* GRUPO: DATOS BÁSICOS */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Título del Proyecto *</label>
                    <input 
                      type="text" 
                      value={formData.title} 
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Ej. Honda Rent Car" 
                      className="form-input" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tipo de Proyecto *</label>
                    <select 
                      value={formData.type} 
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="form-input"
                    >
                      <option value="profesional">Trabajo Profesional</option>
                      <option value="academico">Trabajo Académico</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Categoría</label>
                    <select 
                      value={formData.category} 
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="form-input"
                    >
                      <option value="social-media">Redes Sociales / Social Media</option>
                      <option value="branding">Branding e Identidad Visual</option>
                      <option value="editorial">Diseño Editorial / Empaques</option>
                      <option value="ui-ux">Diseño UI / UX & Web</option>
                      <option value="campana">Campaña Publicitaria</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subtítulo / Tagline Corto</label>
                    <input 
                      type="text" 
                      value={formData.subtitle} 
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      placeholder="Ej. Alquiler de automóviles" 
                      className="form-input" 
                    />
                  </div>
                </div>

                {/* DESCRIPCIÓN */}
                <div className="form-group">
                  <label className="form-label">Descripción del Proyecto</label>
                  <textarea 
                    value={formData.description} 
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Detalla el concepto visual, objetivos y entregables del proyecto..." 
                    className="form-input form-textarea" 
                    rows={4}
                  ></textarea>
                </div>

                {/* HERRAMIENTAS UTILIZADAS */}
                <div className="form-group">
                  <label className="form-label">Herramientas de Diseño</label>
                  <div className="tools-checkbox-grid">
                    {['Ps', 'Ai', 'Id', 'Pr', 'Ca'].map((tool) => (
                      <button 
                        type="button"
                        key={tool}
                        className={`tool-chip ${formData.tools.includes(tool) ? 'selected' : ''}`}
                        onClick={() => handleToggleTool(tool)}
                      >
                        {tool === 'Ps' ? 'Photoshop (Ps)' :
                         tool === 'Ai' ? 'Illustrator (Ai)' :
                         tool === 'Id' ? 'InDesign (Id)' :
                         tool === 'Pr' ? 'Premiere (Pr)' : 'Canva (Ca)'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* LOGOTIPO / IMAGEN PRINCIPAL */}
                <div className="form-group">
                  <label className="form-label">Logotipo / Portada del Proyecto</label>
                  <div className="upload-box">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleLogoChange}
                      id="logo-file-input"
                      className="hidden-file-input"
                    />
                    <label htmlFor="logo-file-input" className="upload-box-label">
                      <Upload size={20} />
                      <span>{logoFile ? logoFile.name : 'Seleccionar imagen de logotipo (PNG / JPG)'}</span>
                    </label>

                    {logoPreview && (
                      <div className="logo-preview-wrapper">
                        <img src={logoPreview} alt="Logo preview" className="logo-preview-img" />
                      </div>
                    )}
                  </div>
                </div>

                {/* GALERÍA DE IMÁGENES */}
                <div className="form-group">
                  <label className="form-label">Galería de Imágenes del Proyecto (Subir a Supabase Storage)</label>
                  <div className="upload-box">
                    <input 
                      type="file" 
                      accept="image/*" 
                      multiple
                      onChange={handleImagesChange}
                      id="gallery-file-input"
                      className="hidden-file-input"
                    />
                    <label htmlFor="gallery-file-input" className="upload-box-label">
                      <Image size={20} />
                      <span>Seleccionar una o varias imágenes de alta resolución</span>
                    </label>
                  </div>

                  {imagePreviews.length > 0 && (
                    <div className="gallery-previews-grid">
                      {imagePreviews.map((src, idx) => (
                        <div key={idx} className="gallery-preview-item">
                          <img src={src} alt={`Preview ${idx}`} />
                          <button 
                            type="button" 
                            onClick={() => handleRemoveNewImage(idx)}
                            className="remove-img-btn"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* ENLACES EXTERNOS */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Enlace a Instagram (Opcional)</label>
                    <input 
                      type="url" 
                      value={formData.instagramUrl} 
                      onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                      placeholder="https://www.instagram.com/..." 
                      className="form-input" 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Enlace a Behance (Opcional)</label>
                    <input 
                      type="url" 
                      value={formData.behanceUrl} 
                      onChange={(e) => setFormData({ ...formData, behanceUrl: e.target.value })}
                      placeholder="https://www.behance.net/..." 
                      className="form-input" 
                    />
                  </div>
                </div>

                {/* ESTADO ALERTA */}
                {statusMessage.text && (
                  <div className={`admin-alert ${statusMessage.type}`}>
                    {statusMessage.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                {/* BOTONES DE ACCIÓN */}
                <div className="admin-form-footer">
                  <button 
                    type="button" 
                    onClick={() => setIsFormOpen(false)} 
                    className="btn btn-ghost"
                    disabled={isSaving}
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <RefreshCw size={16} className="spin-icon" /> Guardando en Supabase...
                      </>
                    ) : (
                      <>
                        <CheckCircle size={16} /> {editingId ? 'Guardar Cambios' : 'Publicar Proyecto'}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
