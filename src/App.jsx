import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Academic from './components/Academic';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { fetchProjectsFromSupabase } from './services/projectsService';
import { isSupabaseConfigured } from './lib/supabaseClient';

// Toggles to enable or disable sections (set to true to reactivate)
const ENABLE_ACADEMIC_SECTION = true;
const ENABLE_CONTACT_SECTION = true;

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState(false);
  const [supabaseProjects, setSupabaseProjects] = useState([]);

  // Cargar proyectos dinámicos desde Supabase al iniciar
  useEffect(() => {
    if (isSupabaseConfigured()) {
      fetchProjectsFromSupabase().then((data) => {
        if (data && data.length > 0) {
          setSupabaseProjects(data);
        }
      });
    }
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // We add a tiny delay to query elements to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Detección de ruta secreta /admin o #admin
  useEffect(() => {
    const checkAdminRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/admin' || path === '/admin/' || hash === '#admin') {
        setIsAdminLoginOpen(true);
      }
    };

    checkAdminRoute();
    window.addEventListener('popstate', checkAdminRoute);
    window.addEventListener('hashchange', checkAdminRoute);

    return () => {
      window.removeEventListener('popstate', checkAdminRoute);
      window.removeEventListener('hashchange', checkAdminRoute);
    };
  }, []);

  const handleCloseAdminLogin = () => {
    setIsAdminLoginOpen(false);
    if (window.location.pathname.includes('/admin') || window.location.hash === '#admin') {
      window.history.replaceState(null, '', '/');
    }
  };

  const handleCloseAdminDashboard = () => {
    setIsAdminDashboardOpen(false);
    if (window.location.pathname.includes('/admin') || window.location.hash === '#admin') {
      window.history.replaceState(null, '', '/');
    }
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseLightbox = () => {
    setSelectedProject(null);
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoginOpen(false);
    setIsAdminDashboardOpen(true);
  };

  const handleProjectsUpdated = (updatedList) => {
    setSupabaseProjects(updatedList);
  };

  return (
    <>
      {/* Sticky Header Navigation */}
      <Header 
        showAcademic={ENABLE_ACADEMIC_SECTION} 
        showContact={ENABLE_CONTACT_SECTION} 
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero showContact={ENABLE_CONTACT_SECTION} />

        {/* About Me Section */}
        <About />

        {/* Curriculum Vitae & QR Code Section */}
        <CVSection />

        {/* Social Media Projects Section */}
        <Projects 
          onSelectProject={handleSelectProject} 
          supabaseProjects={supabaseProjects.filter(p => p.type === 'profesional')}
        />

        {/* Academic Projects Section */}
        {ENABLE_ACADEMIC_SECTION && (
          <Academic 
            onSelectProject={handleSelectProject} 
            supabaseProjects={supabaseProjects.filter(p => p.type === 'academico')}
          />
        )}

        {/* Contact Form Section */}
        {ENABLE_CONTACT_SECTION && (
          <Contact />
        )}
      </main>

      {/* Footer Section */}
      <Footer showAcademic={ENABLE_ACADEMIC_SECTION} showContact={ENABLE_CONTACT_SECTION} />

      {/* Lightbox Modal (Conditional Render) */}
      {selectedProject && (
        <Lightbox 
          project={selectedProject} 
          onClose={handleCloseLightbox} 
        />
      )}

      {/* Admin Login Modal */}
      <AdminLogin
        isOpen={isAdminLoginOpen}
        onClose={handleCloseAdminLogin}
        onLoginSuccess={handleAdminLoginSuccess}
      />

      {/* Admin Dashboard Modal */}
      <AdminDashboard
        isOpen={isAdminDashboardOpen}
        onClose={handleCloseAdminDashboard}
        onProjectsUpdated={handleProjectsUpdated}
      />
    </>
  );
}

export default App;
