"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const bowlSliderData = [
    {
      id: 1,
      title: "Beetroot & Carrot Halwa",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/beetroot-halwa.png",
    },
    {
      id: 2,
      title: "Loaded Gyro Fries",
      image: "https://jfvegancafe.com/wp-content/uploads/2024/09/loaded-gyro-fries.png",
    },
    {
      id: 3,
      title: "Green Goddess Soup",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/green-goddess-soup-26.png",
    },
    {
      id: 4,
      title: "Baked Feta Pasta",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/baked-feta-pasta-23.png",
    },
    {
      id: 5,
      title: "Falafels",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/6-falafels-29.png",
    },
];

export default function BowlSlider() {
  const [activeIndex, setActiveIndex] = useState(3); // Start at 4th item (index 3) as per HTML structure
  const totalSlides = bowlSliderData.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const progress = ((activeIndex + 1) / totalSlides) * 100;

  return (
    <section className="fl-bowl bg-white overflow-hidden">
      {/* White Space text section with Split Text effect */}
      <div className="section-padding">
        <div className="container max-w-[845px]">
          <h2 className="text-[3.125rem] lg:text-[4.0625rem] text-center font-display leading-[1.1] text-primary flex flex-wrap justify-center gap-x-3">
            {"fully-vegan restaurant in houston. elevate your palate, uplift the earth.".split(" ").map((word, i) => (
              <span key={i} className="text-reveal-span">
                {word}
              </span>
            ))}
          </h2>
        </div>
      </div>

      {/* Interactive Bowl Slider Section */}
      <section className="falafel-bowl relative min-h-screen w-full flex flex-col justify-center items-center pb-[40px] mb-[100px]">
        {/* Background Image Overlay - top left decorative bowl */}
        <div className="absolute left-0 top-[-100px] md:top-[-200px] 2xl:top-[-350px] w-1/2 md:w-[40%] z-10 pointer-events-none transition-transform duration-700">
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel-bowl-bg-6.png"
            alt="Decorative falafel background"
            className="w-full h-auto object-contain opacity-90"
          />
        </div>

        {/* Content Centered Stack */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-10 pt-[135px]">
          {/* Main Display Area */}
          <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center">
            {bowlSliderData.map((item, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + totalSlides) % totalSlides;
              const isNext = index === (activeIndex + 1) % totalSlides;

              return (
                <div
                  key={item.id}
                  className={`absolute transition-all duration-700 ease-in-out flex flex-col items-center ${
                    isActive
                      ? "opacity-100 scale-100 translate-x-0 z-30"
                      : isPrev
                      ? "opacity-40 scale-75 -translate-x-[60%] z-20"
                      : isNext
                      ? "opacity-40 scale-75 translate-x-[60%] z-20"
                      : "opacity-0 scale-50 z-10"
                  }`}
                >
                  <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {isActive && (
                    <h2 className="font-display text-[2.5rem] md:text-[3.75rem] text-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                      {item.title}
                    </h2>
                  )}
                </div>
              );
            })}
          </div>

          {/* Controls & Pagination Bar */}
          <div className="mt-16 relative w-full flex flex-col md:flex-row items-center md:items-end justify-between px-4 lg:px-[182px]">
            {/* Progress Bar Container */}
            <div className="w-full absolute top-[-40px] left-0 px-4 lg:px-[182px]">
              <div className="dish-slider-progress">
                <div
                  className="dish-slider-progress-bar"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Slide Index Counter */}
            <div className="flex items-baseline gap-2 font-display text-primary mb-8 md:mb-0">
              <span className="text-[2rem] leading-none">0{activeIndex + 1}</span>
              <span className="text-[1rem] opacity-30">0{totalSlides}</span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-10 md:gap-[60px]">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="group relative cursor-pointer outline-none"
                aria-label="Previous slide"
              >
                <svg width="33" height="68" viewBox="0 0 33 68" fill="none" className="transition-transform group-hover:-translate-x-1">
                  <path d="M31.5 1L1 34L31.5 67" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="2" cy="34" r="2" fill="currentColor" stroke="none" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="group relative cursor-pointer outline-none"
                aria-label="Next slide"
              >
                <svg width="33" height="68" viewBox="0 0 33 68" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1.5 1L32 34L1.5 67" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="31" cy="34" r="2" fill="currentColor" stroke="none" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}