"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";

const dishes = [
  {
    id: "01",
    name: "Beetroot & Carrot Halwa",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/5-1-7.png",
  },
  {
    id: "02",
    name: "Loaded Gyro Fries",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/3-8.png",
  },
  {
    id: "03",
    name: "Green Goddess Soup",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/1-9.png",
  },
  {
    id: "04",
    name: "Baked Feta Pasta",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/4-10.png",
  },
  {
    id: "05",
    name: "Falafels",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/2-1-11.png",
  },
];

export default function DishSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // Starting with "Loaded Gyro Fries" based on HTML dump
  const targetRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === dishes.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? dishes.length - 1 : prev - 1));
  }, []);

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
            <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden">
              {dishes.map((dish, index) => (
                <div
                  key={dish.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center ${
                    currentIndex === index ? "opacity-100 z-30" : "opacity-0 z-0"
                  }`}
                >
                  <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] transition-transform duration-1000 ease-out transform scale-100">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-contain"
                      priority={currentIndex === index}
                    />
                  </div>
                  <h2 className="font-serif-display text-[2rem] md:text-[3.5rem] text-center text-black mt-8 px-4">
                    {dish.name}
                  </h2>
                </div>
              ))}
            </div>

            {/* Pagination and Navigation */}
            <div className="falafel-bowl-pagination md:px-[60px] lg:px-[182px] flex justify-between items-end absolute left-0 right-0 bottom-[12%] md:bottom-[15%] w-full z-40">
              
              <div className="flex flex-col gap-4 w-full max-w-[200px] md:max-w-none">
                {/* Progress Bar Container */}
                <div className="relative w-full max-w-[300px] h-[3px] bg-[#EFEFEF]">
                  <motion.div
                    className="absolute h-full bg-brand-gold"
                    initial={false}
                    animate={{ width: `${((currentIndex + 1) / dishes.length) * 100}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                </div>

                {/* Counter */}
                <div className="pagination-count flex items-baseline gap-2 font-serif-display text-black">
                  <span className="text-xl md:text-2xl font-medium">
                    {(currentIndex + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs md:text-sm text-gray-400">
                    {dishes.length.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Custom SVG Arrows */}
              <div className="falafel-bowl-slider-arrow flex justify-end items-center gap-10 md:gap-16">
                <button
                  onClick={prevSlide}
                  className="group hover:opacity-70 transition-opacity"
                  aria-label="Previous slide"
                >
                  <div className="relative w-8 md:w-10 h-16 md:h-20 flex items-center justify-center">
                    <ChevronLeft strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12 text-[#9D794F]" />
                  </div>
                </button>
                <button
                  onClick={nextSlide}
                  className="group hover:opacity-70 transition-opacity"
                  aria-label="Next slide"
                >
                  <div className="relative w-8 md:w-10 h-16 md:h-20 flex items-center justify-center">
                    <ChevronRight strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12 text-[#9D794F]" />
                  </div>
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