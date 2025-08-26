import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set([logoRef.current, percentRef.current], { 
      opacity: 0, 
      y: 50 
    });
    
    gsap.set(progressBarRef.current, { 
      width: "0%" 
    });

    // Animation sequence
    tl.to([logoRef.current, percentRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2
    })
    .to({}, { 
      duration: 0.5 
    }) // Pause
    .to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        if (percentRef.current) {
          percentRef.current.textContent = `${progress}%`;
        }
      }
    })
    .to({}, { 
      duration: 0.3 
    }) // Pause before exit
    .to([logoRef.current, percentRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power2.in"
    }, "-=0.2")
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
      }
    }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 animate-pulse" />
      
      {/* Floating orbs */}
      <div className="floating-orb w-32 h-32 top-1/4 left-1/4" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-24 h-24 top-3/4 right-1/3 bg-accent-purple" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-20 h-20 bottom-1/3 left-1/2 bg-accent-pink" style={{ animationDelay: '4s' }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center">
        <div 
          ref={logoRef}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gradient tracking-tight">
            Portfolio
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mt-4 font-light">
            Welcome to my experiences
          </p>
        </div>
        
        {/* Progress section */}
        <div className="w-80 max-w-sm mx-auto">
          <div 
            ref={percentRef}
            className="text-2xl font-semibold text-foreground mb-4"
          >
            0%
          </div>
          
          <div className="relative h-1 bg-surface-elevated rounded-full overflow-hidden">
            <div 
              ref={progressBarRef}
              className="absolute left-0 top-0 h-full bg-gradient-primary rounded-full glow-primary"
            />
          </div>
          
          <div className="text-sm text-muted-foreground mt-4 font-light">
            Loading Portfolio...
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;