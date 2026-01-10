"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface IntroLoadingAnimationProps {
  onComplete?: () => void;
}

const IntroLoadingAnimation = ({ onComplete }: IntroLoadingAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  // Using the cake image for all steps with clip-path simulation
  const cakeImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/chocolate-cocoa-cuckoo-cake.png";

  useEffect(() => {
    // Prevent scrolling during loading
    document.body.style.overflow = "hidden";

    // Sequence timing for the cake eating animation
    const sequence = async () => {
      // Initial delay to ensure everything is ready
      await new Promise((resolve) => setTimeout(resolve, 500));

      // 4 steps of eating
      for (let i = 1; i <= 4; i++) {
        setCurrentStep(i);
        // Play sound if we had one, or just a small pause
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      // Final step: fade out
      setCurrentStep(5);
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      sessionStorage.setItem("hasShownIntroLoader", "true");
      setIsVisible(false);
      
      if (onComplete) {
        onComplete();
      }
    };

    sequence();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  if (!isVisible) return null;

  // Clip paths for "eating" steps - simulating 4 distinct images/states
  const getClipPath = (step: number) => {
    switch (step) {
      case 1: return "inset(0 0 0 0)"; // Full cake
      case 2: return "polygon(0% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 100%, 0% 100%)"; // First bite (top right)
      case 3: return "polygon(0% 25%, 75% 25%, 75% 75%, 100% 75%, 100% 100%, 0% 100%)"; // Second bite (half gone)
      case 4: return "polygon(25% 50%, 75% 50%, 75% 100%, 25% 100%)"; // Last piece (small center-bottom)
      default: return "inset(0 0 100% 0)"; // Gone
    }
  };

  return (
    <div
      className={`intro-overlay fixed inset-0 w-full h-full bg-white z-[99999] flex items-center justify-center transition-opacity duration-700 ease-in-out ${
        currentStep === 5 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* The Cake - Centered and Animated */}
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
          <div 
            className="absolute inset-0 transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)"
            style={{ 
              clipPath: getClipPath(currentStep),
              transform: currentStep === 0 ? 'scale(0.8)' : `scale(1) rotate(${currentStep * 5}deg)`,
              opacity: currentStep > 0 && currentStep < 5 ? 1 : 0,
              filter: `drop-shadow(0 20px 30px rgba(0,0,0,0.1))`
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
        </div>

        {/* Brand Message */}
        <div 
          className="mt-12 transition-all duration-1000"
          style={{ 
            opacity: currentStep > 0 && currentStep < 5 ? 0.4 : 0,
            transform: `translateY(${currentStep < 5 ? 0 : 20}px)`
          }}
        >
          <p className="font-display tracking-[0.3em] uppercase text-[10px] md:text-xs text-black whitespace-nowrap">
            be kind to every kind.
          </p>
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
