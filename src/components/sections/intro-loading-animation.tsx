"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const IntroLoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  // Asset list from logic
  const assets = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel1-2.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel2-3.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel3-4.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel4-5.jpg",
  ];

  useEffect(() => {
    // Sequence timing for the image flashes
    const sequence = async () => {
      // Small initial delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Flash images one by one
      for (let i = 1; i <= assets.length; i++) {
        setCurrentStep(i);
        await new Promise((resolve) => setTimeout(resolve, 250));
      }

      // Final fade out of the entire overlay
      setCurrentStep(assets.length + 1);
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsVisible(false);
      
      // Allow scrolling on body once animation is done
      document.body.style.overflow = "auto";
    };

    // Prevent scrolling during loading
    document.body.style.overflow = "hidden";
    sequence();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [assets.length]);

  if (!isVisible) return null;

  return (
    <div
      className={`intro-overlay fixed inset-0 w-full h-full bg-white z-[9999] flex items-center justify-center transition-opacity duration-700 ease-in-out ${
        currentStep > assets.length ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        zIndex: 9999,
        backgroundColor: "#ffffff",
      }}
    >
      <div className="relative w-full h-full max-w-[1440px] mx-auto overflow-hidden">
        {/* Falafel Image 1 - Top Leftish */}
        <div
          className={`falafel-image f-1 absolute transition-all duration-500 ease-out ${
            currentStep === 1
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
          style={{
            top: "15%",
            left: "10%",
            width: "350px",
            height: "450px",
          }}
        >
          <div className="relative w-full h-full arch-mask-tr overflow-hidden">
            <Image
              src={assets[0]}
              alt="Falafel Dish 1"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Falafel Image 2 - Bottom Leftish */}
        <div
          className={`falafel-image f-2 absolute transition-all duration-500 ease-out ${
            currentStep === 2
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
          style={{
            bottom: "10%",
            left: "25%",
            width: "400px",
            height: "400px",
          }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src={assets[1]}
              alt="Falafel Dish 2"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Falafel Image 3 - Top Rightish */}
        <div
          className={`falafel-image f-3 absolute transition-all duration-500 ease-out ${
            currentStep === 3
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
          style={{
            top: "10%",
            right: "15%",
            width: "450px",
            height: "550px",
          }}
        >
          <div className="relative w-full h-full arch-mask-bl overflow-hidden">
            <Image
              src={assets[2]}
              alt="Falafel Dish 3"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Falafel Image 4 - Bottom Rightish */}
        <div
          className={`falafel-image f-4 absolute transition-all duration-500 ease-out ${
            currentStep === 4
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
          style={{
            bottom: "15%",
            right: "10%",
            width: "380px",
            height: "380px",
          }}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src={assets[3]}
              alt="Falafel Dish 4"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Loading centered indicator or logo could go here if needed per branding, 
            but original instructions focus on the image sequence */}
      </div>

      <style jsx global>{`
        .arch-mask-tr {
          border-top-right-radius: 500px;
        }
        .arch-mask-bl {
          border-bottom-left-radius: 500px;
        }
        @media (max-width: 768px) {
          .falafel-image {
            width: 200px !important;
            height: 250px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default IntroLoadingAnimation;