import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

const STORAGE_BUCKET = 'portfolio-images';

/**
 * Subir un archivo de imagen al bucket de Supabase Storage
 */
export async function uploadImage(file) {
  if (!isSupabaseConfigured() || !supabase) {
    throw new Error('Supabase no está configurado');
  }

  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
  const filePath = `projects/${fileName}`;

  const { data, error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    console.error('Error al subir imagen a Supabase Storage:', error);
    throw error;
  }

  // Obtener URL pública
  const { data: publicUrlData } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}

const CACHE_KEY = 'edgar_projects_cache_v1';
const CACHE_TTL = 10 * 60 * 1000; // 10 minutos de caché

export function invalidateProjectsCache() {
  try {
    sessionStorage.removeItem(CACHE_KEY);
  } catch (_) {}
}

/**
 * Obtener todos los proyectos desde Supabase (con caché en memoria/sesión para optimizar cuota de peticiones)
 */
export async function fetchProjectsFromSupabase(forceRefresh = false) {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  // 1. Verificar caché si no es recarga forzada
  if (!forceRefresh) {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL && Array.isArray(data)) {
          return data;
        }
      }
    } catch (_) {}
  }

  const { data: projects, error } = await supabase
    .from('projects')
    .select(`
      *,
      project_images (
        id,
        image_url,
        display_order
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error al obtener proyectos de Supabase:', error);
    return [];
  }

  const mapped = projects.map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: p.subtitle || '',
    category: p.category || 'social-media',
    type: p.type || 'profesional',
    description: p.description || '',
    tools: p.tools || [],
    logo: p.logo || '',
    links: p.links || [],
    images: (p.project_images || [])
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
      .map((img) => img.image_url)
  }));

  // Guardar en caché
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data: mapped, timestamp: Date.now() }));
  } catch (_) {}

  return mapped;
}

/**
 * Crear un nuevo proyecto en Supabase con sus imágenes
 */
export async function createProjectInSupabase({ projectData, logoFile, imageFiles }) {
  if (!isSupabaseConfigured() || !supabase) {
    throw new Error('Supabase no está configurado en .env');
  }

  let logoUrl = projectData.logo || '';

  // 1. Subir logo si se proporcionó archivo
  if (logoFile) {
    logoUrl = await uploadImage(logoFile);
  }

  // 2. Insertar registro del proyecto
  const { data: newProject, error: projectError } = await supabase
    .from('projects')
    .insert([
      {
        title: projectData.title,
        subtitle: projectData.subtitle,
        category: projectData.category,
        type: projectData.type,
        description: projectData.description,
        tools: projectData.tools,
        logo: logoUrl,
        links: projectData.links
      }
    ])
    .select()
    .single();

  if (projectError) {
    console.error('Error al crear proyecto:', projectError);
    throw projectError;
  }

  // 3. Subir imágenes de galería si existen archivos
  const galleryUrls = [...(projectData.images || [])];

  if (imageFiles && imageFiles.length > 0) {
    for (const file of imageFiles) {
      const url = await uploadImage(file);
      galleryUrls.push(url);
    }
  }

  // 4. Insertar URLs en la tabla project_images
  if (galleryUrls.length > 0) {
    const imagesToInsert = galleryUrls.map((url, index) => ({
      project_id: newProject.id,
      image_url: url,
      display_order: index
    }));

    const { error: imgError } = await supabase
      .from('project_images')
      .insert(imagesToInsert);

    if (imgError) {
      console.error('Error al asociar imágenes:', imgError);
    }
  }

  invalidateProjectsCache();
  return newProject;
}

/**
 * Actualizar un proyecto existente
 */
export async function updateProjectInSupabase(id, { projectData, logoFile, newImageFiles }) {
  if (!isSupabaseConfigured() || !supabase) {
    throw new Error('Supabase no está configurado');
  }

  let logoUrl = projectData.logo || '';

  if (logoFile) {
    logoUrl = await uploadImage(logoFile);
  }

  // 1. Actualizar datos principales
  const { error: updateError } = await supabase
    .from('projects')
    .update({
      title: projectData.title,
      subtitle: projectData.subtitle,
      category: projectData.category,
      type: projectData.type,
      description: projectData.description,
      tools: projectData.tools,
      logo: logoUrl,
      links: projectData.links
    })
    .eq('id', id);

  if (updateError) {
    throw updateError;
  }

  // 2. Subir imágenes adicionales si se seleccionaron
  if (newImageFiles && newImageFiles.length > 0) {
    const existingCount = (projectData.images || []).length;
    const newImages = [];

    for (let i = 0; i < newImageFiles.length; i++) {
      const url = await uploadImage(newImageFiles[i]);
      newImages.push({
        project_id: id,
        image_url: url,
        display_order: existingCount + i
      });
    }

    if (newImages.length > 0) {
      await supabase.from('project_images').insert(newImages);
    }
  }

  invalidateProjectsCache();
  return true;
}

/**
 * Eliminar un proyecto de Supabase
 */
export async function deleteProjectFromSupabase(id) {
  if (!isSupabaseConfigured() || !supabase) {
    throw new Error('Supabase no está configurado');
  }

  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error al eliminar proyecto:', error);
    throw error;
  }

  invalidateProjectsCache();
  return true;
}
