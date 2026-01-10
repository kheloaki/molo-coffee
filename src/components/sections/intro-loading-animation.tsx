"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const IntroLoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Asset list - using the cake image for all steps with clip-path simulation
  const cakeImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/chocolate-cocoa-cuckoo-cake.png";

  useEffect(() => {
    // Check if we've already shown the loader in this session
    const hasShownLoader = sessionStorage.getItem("hasShownIntroLoader");
    
    if (hasShownLoader) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    // Sequence timing for the cake eating animation
    const sequence = async () => {
      // Small initial delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // 4 steps of eating
      for (let i = 1; i <= 4; i++) {
        setCurrentStep(i);
        await new Promise((resolve) => setTimeout(resolve, 400));
      }

      // Final fade out
      setCurrentStep(5);
      await new Promise((resolve) => setTimeout(resolve, 600));
      
      setIsVisible(false);
      sessionStorage.setItem("hasShownIntroLoader", "true");
      
      // Allow scrolling
      document.body.style.overflow = "auto";
    };

    // Prevent scrolling during loading
    document.body.style.overflow = "hidden";
    sequence();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isVisible) return null;

  // Clip paths for "eating" steps
  const getClipPath = (step: number) => {
    switch (step) {
      case 1: return "inset(0 0 0 0)"; // Full
      case 2: return "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%, 50% 50%, 50% 0%, 0% 0%)"; // One quadrant "bitten"
      case 3: return "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%, 50% 50%)"; // Half eaten
      case 4: return "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)"; // One quadrant left
      default: return "inset(0 0 100% 0)"; // Gone
    }
  };

  return (
    <div
      className={`intro-overlay fixed inset-0 w-full h-full bg-white z-[9999] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        currentStep === 5 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* The Cake - Centered */}
        <div 
          className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] transition-all duration-300 ease-in-out"
          style={{ 
            clipPath: getClipPath(currentStep),
            transform: currentStep > 0 ? 'scale(1)' : 'scale(0.9)',
            opacity: currentStep > 0 && currentStep < 5 ? 1 : 0
          }}
        >
          <Image
            src={cakeImage}
            alt="Loading..."
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Branding/Text could go here */}
        <div className="absolute -bottom-12 text-black/20 font-display tracking-[0.2em] uppercase text-sm">
          be kind to every kind.
        </div>
      </div>

      <style jsx global>{`
        .font-display {
          font-family: var(--font-display, "Italiana", serif);
        }
      `}</style>
    </div>
  );
};

export default IntroLoadingAnimation;