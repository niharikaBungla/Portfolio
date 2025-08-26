import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingAnimation from '../components/LoadingAnimation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Portfolio: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Disable scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setIsContentVisible(true);
      
      // Fade in main content
      gsap.fromTo('.main-content', 
        { 
          opacity: 0,
          y: 30,
          filter: 'blur(10px)'
        },
        { 
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: "power3.out"
        }
      );
    }, 100);
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <Navigation />
          <main className={`main-content ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default Portfolio;