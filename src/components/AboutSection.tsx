import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '../assets/profile.png';
import { User, Code, Palette, Rocket, Database, Globe, Lightning } from 'phosphor-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: Lightning, name: 'Python', color: 'text-blue-400' },
    { icon: Code, name: 'Java', color: 'text-orange-400' },
    { icon: Code, name: 'C/C++', color: 'text-blue-600' },
    { icon: Globe, name: 'HTML/CSS', color: 'text-orange-500' },
    { icon: Code, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: Rocket, name: 'React', color: 'text-cyan-400' },
    { icon: Globe, name: 'PHP', color: 'text-purple-400' },
    { icon: Database, name: 'MySQL', color: 'text-blue-500' },
    { icon: Palette, name: 'TensorFlow', color: 'text-orange-400' },
    { icon: User, name: 'Computer Vision', color: 'text-green-400' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([imageRef.current, contentRef.current], {
        opacity: 0,
        y: 60,
        filter: 'blur(10px)'
      });

      gsap.set('.skill-item', {
        opacity: 0,
        y: 30,
        scale: 0.9
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(imageRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: "power3.out"
      })
        .to(contentRef.current, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: "power3.out"
        }, "-=0.6")
        .to('.skill-item', {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1
        }, "-=0.3");

      const profileImg = imageRef.current;
      if (profileImg) {
        profileImg.addEventListener('mouseenter', () => {
          gsap.to(profileImg, {
            scale: 1.05,
            rotationY: 5,
            duration: 0.5,
            ease: "power2.out"
          });
        });

        profileImg.addEventListener('mouseleave', () => {
          gsap.to(profileImg, {
            scale: 1,
            rotationY: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      <div className="floating-orb w-40 h-40 top-20 right-20 opacity-20" />
      <div className="floating-orb w-28 h-28 bottom-32 left-16 bg-accent-purple opacity-15" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative-mt-8">
            <div className="relative w-96 h-96 mx-auto">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl scale-110" />
              {/* Main image container */}
              <div className="relative w-full h-full glass glass-hover rounded-full p-2 glow-primary">
                <img
                  src={profileImage}
                  alt="Niharika Bungla - Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                About Me
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I’m currently pursuing my B.Tech in Computer Science, where I spend my days coding, debugging, and occasionally questioning why semicolons exist.
    
    I’m always on a quest to learn, unlearn, and occasionally lose my mind :) 
<br /><br />
After grinding through DSA , I shifted gears to building impactful solutions. Along the way, I’ve honed my skills in Python, TensorFlow, Keras, OpenCV, and PyTorch, plus the usual suspects like Java, C++, JavaScript, PHP, and React, turning ambitious AI ideas into fully functional, real-world products.
                
                <br /><br />
                When I’m not buried in code, I’m crocheting or probably doing some gradma activity , experimenting with new ideas,
                or planning the trips to never happen ;(
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
               I believe tech should not only work but also wow, and I’m always excited to bring innovative, scalable, and visually stunning ideas to life.
              </p>
            </div>

            {/* Skills */}
            <div ref={skillsRef} className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item glass glass-hover flex flex-col items-center justify-center p-6 rounded-xl text-center transition-transform transform hover:scale-105"
                  >
                    <skill.icon size={40} className={`${skill.color} mb-3`} />
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
