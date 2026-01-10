"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";

const dishes = [
    {
      id: "01",
      name: "green goddess soup",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c6c1406a-22ef-4a17-8ced-5c9430975e89/1.png-1768083279831.webp",
    },
    {
      id: "02",
      name: "falafel platter",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c6c1406a-22ef-4a17-8ced-5c9430975e89/2-1.png-1768083279947.webp",
    },
    {
      id: "03",
      name: "loaded fries",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c6c1406a-22ef-4a17-8ced-5c9430975e89/3.png-1768083279926.webp",
    },
    {
      id: "04",
      name: "baked feta pasta",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c6c1406a-22ef-4a17-8ced-5c9430975e89/4.png-1768083279795.webp",
    },
    {
      id: "05",
      name: "beetroot halwa",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/c6c1406a-22ef-4a17-8ced-5c9430975e89/5-1.png-1768083279861.webp",
    },
];

export default function DishSlider() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const targetRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === dishes.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? dishes.length - 1 : prev - 1));
  }, []);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Animation for the intro text reveal
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <section className="fl-bowl bg-white overflow-hidden" ref={targetRef}>
      {/* Intro Text Section */}
      <section className="white-space-txt w-full py-24 md:py-32">
        <div className="container max-w-[1440px] px-8 mx-auto h-full">
          <div className="max-w-[845px] mx-auto flex justify-center items-center w-full h-full">
            <motion.h2
              style={{ opacity: textOpacity, y: textY }}
              className="font-serif-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] text-center text-black"
            >
              fully-vegan restaurant in houston. elevate your palate, uplift the earth.
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="falafel-bowl relative h-[70vh] md:h-screen w-full mb-[100px]">
        {/* Background Decorative Image */}
        <div className="bg-img1 absolute left-0 top-[-10%] md:top-[-20%] lg:top-[-450px] w-1/2 md:w-[40%] z-10 pointer-events-none select-none">
          <img
            className="w-full h-full object-cover opacity-80"
            src="https://jfvegancafe.com/wp-content/themes/Justfalafel/assets/images/falafel-bowl-bg.png"
            alt="Falafel bowl background pattern"
          />
        </div>

        <div className="falafel-bowl-wrapper w-full h-full relative z-20 pt-[60px] md:pt-[135px]">
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              
              {/* Content Slider Transition Area */}
              <div className="relative w-full flex-grow flex items-center justify-center overflow-visible">
                <div className="relative w-full h-full flex items-center justify-center">
                  {dishes.map((dish, index) => {
                    const offset = index - currentIndex;
                    
                    // Allow for infinite loop visual by checking relative offset
                    let adjustedOffset = offset;
                    if (offset > 2) adjustedOffset = offset - dishes.length;
                    if (offset < -2) adjustedOffset = offset + dishes.length;

                    return (
                      <motion.div
                        key={dish.id}
                        initial={false}
                        animate={{
                          x: `${adjustedOffset * 70}%`,
                          scale: 1, // Same level (no scale down)
                          opacity: Math.abs(adjustedOffset) > 1 ? 0 : 1, // Same opacity (no fade for side dishes)
                          zIndex: index === currentIndex ? 30 : 10,
                        }}
                        transition={{ type: "spring", stiffness: 100, damping: 25 }}
                        className="absolute flex flex-col items-center justify-center pointer-events-none"
                      >
                        <div className="relative w-[280px] h-[280px] md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px]">
                          <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority={currentIndex === index}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Active Dish Name - Fixed Position */}
                <div className="absolute bottom-[2%] md:bottom-[-5%] left-1/2 -translate-x-1/2 text-center w-full z-50">
                  <motion.h2 
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif-display text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] text-center text-black px-4 lowercase"
                  >
                    {dishes[currentIndex].name}
                  </motion.h2>
                </div>
              </div>

              {/* Pagination and Navigation */}
              <div className="falafel-bowl-pagination px-8 md:px-[60px] lg:px-[120px] flex justify-between items-end absolute left-0 right-0 bottom-[5%] md:bottom-[8%] w-full z-50">
                
                <div className="flex flex-col gap-2">
                  {/* Counter */}
                  <div className="pagination-count flex items-baseline gap-1 font-serif-display text-black">
                    <span className="text-2xl md:text-3xl font-medium">
                      {(currentIndex + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-xs md:text-sm text-gray-400">
                      {dishes.length.toString().padStart(2, "0")}
                    </span>
                  </div>
                  {/* Progress Line */}
                  <div className="relative w-24 md:w-32 h-[1px] bg-gray-200">
                    <motion.div
                      className="absolute h-full bg-black"
                      initial={false}
                      animate={{ width: `${((currentIndex + 1) / dishes.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-8 md:gap-12">
                  <button
                    onClick={prevSlide}
                    className="group hover:opacity-50 transition-opacity"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12 text-black" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="group hover:opacity-50 transition-opacity"
                    aria-label="Next slide"
                  >
                    <ChevronRight strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12 text-black" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        {/* Subtle Bottom Texture Overlay */}
        <div className="absolute inset-0 marble-overlay z-0 pointer-events-none" />
      </section>

      <style jsx global>{`
        .font-serif-display {
          font-family: 'Cormorant Garamond', serif;
        }
        .text-brand-gold {
          color: #9D794F;
        }
        .bg-brand-gold {
          background-color: #9D794F;
        }
        .marble-overlay {
          background-image: url('https://www.transparenttextures.com/patterns/white-marble.png');
          background-repeat: repeat;
          opacity: 0.1;
        }
        @media (max-width: 768px) {
          .falafel-bowl-pagination {
            padding: 0 10%;
          }
        }
      `}</style>
    </section>
  );
}
