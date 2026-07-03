import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Academic from './components/Academic';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

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
      <Header />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Social Media Projects Section */}
        <Projects onSelectProject={handleSelectProject} />

        {/* Academic Projects Section */}
        <Academic onSelectProject={handleSelectProject} />

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />

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
