-- ================================================================
-- SCRIPT DE CONFIGURACIÓN DE SUPABASE PARA EL PORTAFOLIO DE EDGAR SANTOS
-- Ejcutar este script en el SQL Editor del panel de Supabase
-- ================================================================

-- 1. Tabla de Proyectos
create table if not exists projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  subtitle text,
  category text default 'social-media', -- 'social-media', 'branding', 'editorial', etc.
  type text default 'profesional',      -- 'profesional' o 'academico'
  description text,
  tools text[] default '{}',            -- Ej: ['Ps', 'Ai', 'Id']
  logo text,                            -- URL del logotipo del cliente/proyecto
  links jsonb default '[]'::jsonb       -- Ej: [{"label": "Instagram", "url": "https://..."}]
);

-- 2. Tabla de Imágenes de Proyectos (Relación 1:N)
create table if not exists project_images (
  id uuid default gen_random_uuid() primary key,
  project_id uuid references projects(id) on delete cascade not null,
  image_url text not null,
  display_order int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Habilitar RLS (Row Level Security)
alter table projects enable row level security;
alter table project_images enable row level security;

-- 4. Políticas de Lectura Pública (Cualquier visitante puede ver los proyectos e imágenes)
create policy "Proyectos visibles públicamente" 
on projects for select 
to public 
using (true);

create policy "Imágenes de proyectos visibles públicamente" 
on project_images for select 
to public 
using (true);

-- 5. Políticas de Escritura/Modificación Pública o con Llave Anónima
create policy "Permitir insertar proyectos" 
on projects for insert 
to anon, authenticated 
with check (true);

create policy "Permitir actualizar proyectos" 
on projects for update 
to anon, authenticated 
using (true);

create policy "Permitir eliminar proyectos" 
on projects for delete 
to anon, authenticated 
using (true);

create policy "Permitir insertar imágenes de proyectos" 
on project_images for insert 
to anon, authenticated 
with check (true);

create policy "Permitir actualizar imágenes de proyectos" 
on project_images for update 
to anon, authenticated 
using (true);

create policy "Permitir eliminar imágenes de proyectos" 
on project_images for delete 
to anon, authenticated 
using (true);

-- ================================================================
-- INSTRUCCIONES PARA BUCKET DE ALMACENAMIENTO (SUPABASE STORAGE):
-- 1. En el panel de Supabase, ve a 'Storage'.
-- 2. Crea un nuevo Bucket llamado: portfolio-images
-- 3. Asegúrate de marcar la casilla "Public Bucket" (Bucket Público).
-- ================================================================
