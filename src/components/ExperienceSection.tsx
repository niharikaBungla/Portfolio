import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Trophy } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    gsap.fromTo(section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(content,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
        }
      }
    );

  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-12">
        <Briefcase size={32} className="text-neon-cyan" />
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Current Experience
        </h2>
      </div>

      <div ref={contentRef} className="glass-card p-8 rounded-2xl">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            Web Development Intern
          </h3>
          <p className="text-neon-cyan font-medium mb-1">
            National Informatics Centre (NIC) - Dehradun
          </p>
          <p className="text-foreground/70">
            August 2025 - Present
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Trophy size={24} className="text-neon-purple mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Key Achievements</h4>
              <p className="text-foreground/80 leading-relaxed">
                Developed key features for a web application used by election officials, facilitating the assignment of 500+ personnel to voting locations and reducing assignment errors by 15% through automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;