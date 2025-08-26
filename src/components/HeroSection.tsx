import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)'
      });

      gsap.set(splineRef.current, {
        opacity: 0,
        x: 100,
        filter: 'blur(5px)'
      });

      // Create entrance animations
      const tl = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(headlineRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .to(splineRef.current, {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: "power3.out"
      }, "-=0.8");

      // Floating glow orbs animation
      gsap.to('.glow-orb', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 2,
          from: "random"
        }
      });

      // CTA hover animation
      const ctaButton = ctaRef.current;
      if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
          gsap.to(ctaButton, {
            scale: 1.05,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        });

        ctaButton.addEventListener('mouseleave', () => {
          gsap.to(ctaButton, {
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        });
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Spline 3D Model */}
      <div 
        ref={splineRef}
        className="absolute inset-0 w-full h-full"
      >
        <iframe
          src="https://my.spline.design/claritystream-VPa4WoznEjlg2RHM2N6pLZNR/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="3D Background"
        />
      </div>

      {/* Floating glow orbs */}
      <div className="glow-orb w-64 h-64 bg-gradient-glow top-20 left-20 opacity-30" />
      <div className="glow-orb w-48 h-48 bg-gradient-glow top-1/2 right-32 opacity-25" style={{ animationDelay: '2s' }} />
      <div className="glow-orb w-32 h-32 bg-gradient-glow bottom-32 left-1/3 opacity-20" style={{ animationDelay: '4s' }} />

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient mb-6 tracking-tight leading-tight"
        >
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto leading-relaxed"
        >
      
        </p>
        
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-light">Scroll</span>
          <div className="w-px h-12 bg-gradient-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;