"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface IntroLoadingAnimationProps {
  onComplete?: () => void;
}

const IntroLoadingAnimation = ({ onComplete }: IntroLoadingAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  // Use the reliable Supabase image for all steps
  const cakeImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/chocolate-cocoa-cuckoo-cake.png";

  useEffect(() => {
    // Prevent scrolling during loading
    document.body.style.overflow = "hidden";

    // Sequence timing for the cake eating animation
    const sequence = async () => {
      // Initial delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // 4 steps of eating
      for (let i = 1; i <= 4; i++) {
        setCurrentStep(i);
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      // Final step: fade out
      setCurrentStep(5);
      await new Promise((resolve) => setTimeout(resolve, 800));
      
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

  // Refined clip paths to simulate a cake being eaten in 4 stages
  const getClipPath = (step: number) => {
    switch (step) {
      case 1: return "inset(0 0 0 0)"; // Full cake
      case 2: return "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%, 50% 0)"; // Top left quarter gone
      case 3: return "polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%)"; // Half gone
      case 4: return "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)"; // Only bottom right quarter left
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
        <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] mb-8">
          {currentStep > 0 && currentStep < 5 && (
            <div 
              className="absolute inset-0 transition-all duration-300 ease-in-out"
              style={{ 
                clipPath: getClipPath(currentStep),
              }}
            >
              <Image
                src={cakeImage}
                alt="Loading Cake"
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
        </div>

        {/* Brand Message */}
        <div 
          className="transition-all duration-1000"
          style={{ 
            opacity: currentStep > 0 && currentStep < 5 ? 1 : 0,
            transform: `translateY(${currentStep < 5 ? 0 : 20}px)`
          }}
        >
          <p className="font-display tracking-[0.4em] uppercase text-[11px] md:text-sm text-black whitespace-nowrap">
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
