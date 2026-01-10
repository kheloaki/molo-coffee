"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

/**
 * EatSipSplit Component
 * 
 * A dual-category interactive section featuring "eat" and "sip".
 * Implemented with background video transitions, floating fruit/drink assets,
 * and high-fidelity typography matching the Just Falafel design system.
 */
export default function EatSipSplit() {
  const [hoveredSide, setHoveredSide] = useState<"eat" | "sip" | null>(null);
  const eatVideoRef = useRef<HTMLVideoElement>(null);

  // Sync video playback with hover state if needed, though most browsers require 
  // interaction or 'autoplay' with 'muted'.
  useEffect(() => {
    if (eatVideoRef.current) {
      if (hoveredSide === "eat") {
        eatVideoRef.current.play().catch(() => {});
      } else {
        eatVideoRef.current.pause();
      }
    }
  }, [hoveredSide]);

  const assets = {
    eatVideo: "https://71three.sfo3.cdn.digitaloceanspaces.com/jf/eat_web.mp4",
    sipBg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/sip-bg-12.jpg",
    glass: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/glass-13.png",
    orange: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/orange-14.png",
  };

  return (
    <section className="relative w-full h-[600px] md:h-screen overflow-hidden flex bg-white">
      {/* Left Interactor: EAT */}
      <div
        className="relative flex-1 group cursor-pointer overflow-hidden transition-all duration-700 ease-in-out"
        onMouseEnter={() => setHoveredSide("eat")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background Video */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${hoveredSide === "eat" ? "opacity-100" : "opacity-0"}`}>
          <video
            ref={eatVideoRef}
            src={assets.eatVideo}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for text readability when video is active */}
          <div className="absolute inset-0 bg-black/10 transition-opacity pointer-events-none" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <h2 
            className={`font-display text-[48px] md:text-[60px] lg:text-[75px] transition-all duration-500 ease-out transform
              ${hoveredSide === "eat" ? "text-white scale-110" : "text-black"}`}
          >
            eat
          </h2>
        </div>
      </div>

      {/* Right Interactor: SIP */}
      <div
        className="relative flex-1 group cursor-pointer overflow-hidden transition-all duration-700 ease-in-out"
        onMouseEnter={() => setHoveredSide("sip")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background Image / Transitions */}
        <div 
          className={`absolute inset-0 transition-opacity duration-700 bg-cover bg-center ${hoveredSide === "sip" ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${assets.sipBg})` }}
        >
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-black/15 transition-opacity pointer-events-none" />
        </div>

        {/* Floating Assets for SIP side */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {/* Floating Orange - reveals on hover */}
          <div 
            className={`absolute left-[10%] top-[20%] w-[120px] transition-all duration-1000 ease-in-out transform
              ${hoveredSide === "sip" ? "translate-y-0 opacity-100 rotate-12" : "translate-y-20 opacity-0 rotate-0"}`}
          >
            <Image 
              src={assets.orange} 
              alt="Floating Orange" 
              width={120} 
              height={120} 
              className="object-contain"
            />
          </div>

          {/* Floating Glass - reveals on hover */}
          <div 
            className={`absolute right-[15%] bottom-[15%] w-[180px] transition-all duration-[1200ms] ease-in-out transform
              ${hoveredSide === "sip" ? "translate-y-0 opacity-100 -rotate-6" : "translate-y-32 opacity-0 rotate-0"}`}
          >
            <Image 
              src={assets.glass} 
              alt="Fresh Juice Glass" 
              width={180} 
              height={280} 
              className="object-contain"
            />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 w-full h-full flex items-center justify-center">
          <h2 
            className={`font-display text-[48px] md:text-[60px] lg:text-[75px] transition-all duration-500 ease-out transform
              ${hoveredSide === "sip" ? "text-white scale-110" : "text-black"}`}
          >
            sip
          </h2>
        </div>
      </div>

      {/* Decorative center divider (optional visual polish) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/5 z-30 transition-opacity duration-500 pointer-events-none" 
           style={{ opacity: hoveredSide ? 0 : 1 }} 
      />
    </section>
  );
}