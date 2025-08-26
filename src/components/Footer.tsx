import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.footer-content', {
        opacity: 0,
        y: 60,
        filter: 'blur(10px)'
      });

      gsap.to('.footer-content', {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Floating particles animation
      gsap.to('.particle', {
        y: -10,
        opacity: 0.8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 3,
          from: "random"
        }
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/niharikaBungla', icon: '🐙' },
    { name: 'LinkedIn', url: 'http://www.linkedin.com/in/niharika-b-8894b0267', icon: '💼' },
    { name: 'Email', url: 'mailto:niharikabungla@gmail.com', icon: '📧' },
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative py-16 px-6 mt-24 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-surface-elevated" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-accent-cyan rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="footer-content relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Niharika Bungla
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-Stack Developer crafting innovative digital experiences 
                with cutting-edge technologies and creative solutions.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover w-12 h-12 rounded-xl flex items-center justify-center text-lg glow-soft hover:glow-accent hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Navigation</h4>
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-muted-foreground hover:text-accent-cyan transition-colors duration-300 text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <span>📧</span>
                <a 
                  href="mailto:niharikabungla@gmail.com"
                  className="hover:text-accent-cyan transition-colors duration-300"
                >
                  niharikabungla@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span>🌍</span>
                <span>Available Worldwide</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>💼</span>
                <span>Open for opportunities</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle glow at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-primary opacity-10 blur-3xl" />
    </footer>
  );
};

export default Footer;