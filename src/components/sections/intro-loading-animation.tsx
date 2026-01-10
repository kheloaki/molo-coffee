"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface IntroLoadingAnimationProps {
  onComplete?: () => void;
}

const frames = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel1-2.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel2-3.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel3-4.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel4-5.jpg"
];

const IntroLoadingAnimation = ({ onComplete }: IntroLoadingAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Prevent scrolling during loading
    document.body.style.overflow = "hidden";

    // Preload images
    frames.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    const FRAME_DURATION = 800; // Slower speed
    const TOTAL_FRAMES = frames.length;

    const frameInterval = setInterval(() => {
      setCurrentFrame((prev) => {
        if (prev < TOTAL_FRAMES - 1) {
          return prev + 1;
        }
        clearInterval(frameInterval);
        return prev;
      });
    }, FRAME_DURATION);

    // Show until the sequence finishes
    const completionTimeout = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) {
          onComplete();
        }
      }, 700); // Match transition duration
    }, (FRAME_DURATION * TOTAL_FRAMES) + 400);

    return () => {
      document.body.style.overflow = "auto";
      clearInterval(frameInterval);
      clearTimeout(completionTimeout);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`intro-overlay fixed inset-0 w-full h-full bg-white z-[99999] flex items-center justify-center transition-opacity duration-700 ease-in-out ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* The Animation - Centered */}
        <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] mb-8">
          {frames.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-150 ${
                currentFrame === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Loading Frame ${index + 1}`}
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
          ))}
        </div>

        {/* Brand Message */}
        <div 
          className="transition-all duration-1000"
          style={{ 
            opacity: isFadingOut ? 0 : 1,
            transform: `translateY(${isFadingOut ? 20 : 0}px)`
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
