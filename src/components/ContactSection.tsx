import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.form-input', {
        opacity: 0,
        x: -50,
        filter: 'blur(5px)'
      });

      gsap.set('.social-icon', {
        opacity: 0,
        scale: 0,
        rotation: -180
      });

      gsap.set('.submit-btn', {
        opacity: 0,
        y: 30,
        scale: 0.8
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to('.form-input', {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2
      })
      .to('.social-icon', {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1
      }, "-=0.4")
      .to('.submit-btn', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Animate submit button
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out"
    });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Show success feedback
      gsap.to('.submit-btn', {
        backgroundColor: '#4ade80',
        duration: 0.3,
        yoyo: true,
        repeat: 1
      });
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/niharikaBungla',
      icon: '🐙',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'http://www.linkedin.com/in/niharika-b-8894b0267',
      icon: '💼',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:niharikabungla@gmail.com',
      icon: '📧',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      <div className="floating-orb w-44 h-44 top-16 right-16 opacity-20" />
      <div className="floating-orb w-32 h-32 bottom-24 left-24 bg-accent-purple opacity-15" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="form-input">
              <label htmlFor="name" className="block text-foreground font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full glass glass-hover px-4 py-3 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:glow-primary transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div className="form-input">
              <label htmlFor="email" className="block text-foreground font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full glass glass-hover px-4 py-3 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:glow-primary transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-input">
              <label htmlFor="message" className="block text-foreground font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full glass glass-hover px-4 py-3 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:glow-primary transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn w-full button-glow glass glass-hover py-4 rounded-xl text-foreground font-semibold text-lg glow-primary hover:glow-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <span className="ml-2 text-accent-cyan">🚀</span>}
            </button>
          </form>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="glass glass-hover p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always open to discussing new opportunities, 
                collaborating on exciting projects, or just having 
                a chat about technology and innovation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-muted-foreground">Available Worldwide (Remote)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⏰</span>
                  <span className="text-muted-foreground">Usually responds within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💼</span>
                  <span className="text-muted-foreground">Open to freelance & full-time opportunities</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass glass-hover p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Find Me Online
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon glass glass-hover w-16 h-16 rounded-xl flex items-center justify-center text-2xl glow-soft hover:glow-accent transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;