import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Academic from './components/Academic';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

// Toggles to enable or disable sections (set to true to reactivate)
const ENABLE_ACADEMIC_SECTION = false;
const ENABLE_CONTACT_SECTION = false;

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {/* Sticky Header Navigation */}
      <Header showAcademic={ENABLE_ACADEMIC_SECTION} showContact={ENABLE_CONTACT_SECTION} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero showContact={ENABLE_CONTACT_SECTION} />

        {/* About Me Section */}
        <About />

        {/* Social Media Projects Section */}
        <Projects onSelectProject={handleSelectProject} />

        {/* Academic Projects Section */}
        {ENABLE_ACADEMIC_SECTION && (
          <Academic onSelectProject={handleSelectProject} />
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
    </>
  );
}

export default App;
