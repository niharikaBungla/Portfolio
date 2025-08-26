import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import vibeImg from '../assets/vibe.jpg';
import aicar from '../assets/image.png';
import mouse from '../assets/virtualmouse.png'
import face from '../assets/face.jpg'
import sign from '../assets/sign.png'

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: " VibeScript– Mini Programming Language with Smart IDE",
      description: "Designed a beginner-focused programming language with Gen-Z inspired syntax to improve engagement among first-time coders.",
      tech: ["HTML", "CSS", "JS", "Python"],
      category: "compiler",
      image: vibeImg,
      link : "https://github.com/niharikaBungla/vibescript-where-code-meets-the-culture"
    },
    {
      id: 2,
      title: "AICareer &Financial Planner Web App",
      description: "Built and deployed a full-stack AI-driven platform to help women in STEM plan career paths and financial goals.",
      tech: ["HTML", "CSS", "ReactJS", "Firebase"],
      category: "Full-Stack",
      image: aicar,
      link :"https://github.com/niharikaBungla/ai-careerplanner"
    },
    {
      id: 3,
      title: " AIVirtualMouse",
      description: "Python-based AI Virtual Mouse using OpenCV and MediaPipe, delivering 95% gesture recognition accuracy within a 5-meter range. Demonstrates core expertise in real-time computer vision and human-computer interaction with advanced hand tracking",
      tech: ["CV", "Python", "Mediapipe"],
      category: "CV",
      image: mouse,
      link : "https://github.com/niharikaBungla/Virtual-Mouse"
    },
    {
      id: 4,
      title: " FaceRecognitionSystem",
      description: "Developed a real-time face recognition system to identify individuals from webcam input. The system processes and encodes face images from a directory, detects faces in live video streams, and matches them with known encodings to provide accurate identification. ",
      tech: ["  Python", "OpenCv"],
      category: "OpenCV",
      image:face,
      link : "https://github.com/niharikaBungla/Face-Recognition-System"
    },
    {
      id: 5,
      title: "Sign Language Translator",
      description: "Developedasignlanguagetranslatorthatconvertshand gestures into text and speaks the translated text through the audible voice, aiding communicationfor people with hearing or speech impairments",
      tech: ["CV", "DeepLearning"],
      category: "ML",
      image: sign,
      link: "https://github.com/niharikaBungla/Sign-Language-Translator"
    },
    
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.project-card', {
        opacity: 0,
        y: 100,
        scale: 0.8,
        filter: 'blur(10px)'
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse"
        }
      }).to('.project-card', {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power3.out",
        stagger: {
          amount: 1.2,
          from: "start"
        }
      });

      // Card hover effects
      const cards = document.querySelectorAll('.project-card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            z: 50,
            rotationX: 5,
            rotationY: 5,
            duration: 0.5,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      <div className="floating-orb w-52 h-52 top-10 left-10 opacity-15" />
      <div className="floating-orb w-36 h-36 bottom-20 right-20 bg-accent-pink opacity-20" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            A showcase of my latest work, featuring innovative solutions and 
            cutting-edge technologies across various domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 custom-scrollbar"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass glass-hover rounded-2xl overflow-hidden group cursor-pointer glow-soft hover:glow-primary transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
  <img 
    src={project.image} 
    alt={project.title} 
    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
  />
  <div className="absolute top-4 left-4">
    <span className="px-3 py-1 text-xs font-medium bg-surface text-accent-cyan rounded-full">
      {project.category}
    </span>
  </div>
</div>


              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-surface-elevated text-foreground rounded-md border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a 
  href={project.link} 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-full block text-center button-glow glass glass-hover py-3 rounded-xl text-foreground font-medium transition-all duration-300 hover:glow-accent group-hover:scale-105"
>
  View Project
  <span className="ml-2 text-accent-cyan group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
</a>

              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <a
  href="https://github.com/niharikaBungla"  // 🔗 Change to your actual link
  target="_blank"
  rel="noopener noreferrer"
  className="button-glow glass glass-hover px-8 py-4 rounded-2xl text-foreground font-medium text-lg glow-primary hover:glow-accent hover:scale-105 transition-all duration-300"
>
  View All Projects
  <span className="ml-2 text-accent-cyan">→</span>
</a>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;