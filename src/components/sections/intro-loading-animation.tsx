"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface IntroLoadingAnimationProps {
  onComplete?: () => void;
}

const IntroLoadingAnimation = ({ onComplete }: IntroLoadingAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  // 4 steps of the cake eating animation
  const cakeSteps = [
    "https://jfvegancafe.com/wp-content/themes/Justfalafel/assets/images/cake-loading-1.png",
    "https://jfvegancafe.com/wp-content/themes/Justfalafel/assets/images/cake-loading-2.png",
    "https://jfvegancafe.com/wp-content/themes/Justfalafel/assets/images/cake-loading-3.png",
    "https://jfvegancafe.com/wp-content/themes/Justfalafel/assets/images/cake-loading-4.png"
  ];

  // Fallback to the main cake image if steps fail to load
  const fallbackCake = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/chocolate-cocoa-cuckoo-cake.png";

  useEffect(() => {
    // Prevent scrolling during loading
    document.body.style.overflow = "hidden";

    // Sequence timing for the cake eating animation
    const sequence = async () => {
      // Initial delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // 4 steps of eating (1-indexed for the array)
      for (let i = 1; i <= 4; i++) {
        setCurrentStep(i);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      // Final step: fade out
      setCurrentStep(5);
      await new Promise((resolve) => setTimeout(resolve, 600));
      
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

  // Clip paths for fallback "eating" steps if images don't load or for smooth transitions
  const getClipPath = (step: number) => {
    switch (step) {
      case 1: return "inset(0 0 0 0)";
      case 2: return "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%, 50% 0)"; 
      case 3: return "polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%)";
      case 4: return "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)";
      default: return "inset(0 0 100% 0)";
    }
  };

  return (
    <div
      className={`intro-overlay fixed inset-0 w-full h-full bg-white z-[99999] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        currentStep === 5 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* The Cake - Centered and Animated */}
        <div className="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px]">
          {cakeSteps.map((src, index) => (
            <div 
              key={index}
              className="absolute inset-0 transition-opacity duration-150"
              style={{ 
                opacity: currentStep === index + 1 ? 1 : 0,
                zIndex: currentStep === index + 1 ? 10 : 0
              }}
            >
              <Image
                src={src}
                alt={`Loading Step ${index + 1}`}
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  // If specific step fails, use the fallback cake with clip-path
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackCake;
                  target.style.clipPath = getClipPath(index + 1);
                }}
              />
            </div>
          ))}
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
