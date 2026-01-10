"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * EatSipReveal Section
 * 
 * An experimental split section with "eat" and "sip" typography.
 * On hover/interaction, background videos and images reveal behind 
 * the large typography using high-end animations and organic masking.
 */
export default function EatSipReveal() {
  const [activeSide, setActiveSide] = useState<"eat" | "sip" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync video playback with state
  useEffect(() => {
    if (activeSide === "eat" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [activeSide]);

  const assets = {
    eatVideo: "https://71three.sfo3.cdn.digitaloceanspaces.com/jf/eat_web.mp4",
    sipBg: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/sip-bg-12.jpg",
    glass: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/glass-13.png",
    orange: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/orange-14.png",
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[80vh] min-h-[600px] flex overflow-hidden bg-white cursor-default"
    >
      {/* --- EAT SIDE --- */}
      <div 
        className="relative flex-1 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
        onMouseEnter={() => setActiveSide("eat")}
        onMouseLeave={() => setActiveSide(null)}
      >
        {/* Eat Reveal Background */}
        <div 
          className={cn(
            "absolute inset-0 z-0 overflow-hidden transition-all duration-700 ease-in-out",
            activeSide === "eat" ? "opacity-100 scale-105" : "opacity-0 scale-100"
          )}
        >
          <video
            ref={videoRef}
            src={assets.eatVideo}
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale-[0.2]"
          />
          {/* Organic Mask Overlay for eat */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Eat Text */}
        <a 
          href="/menu"
          className={cn(
            "relative z-10 font-display text-[120px] md:text-[180px] transition-all duration-700 select-none",
            activeSide === "eat" ? "text-white scale-110" : "text-black"
          )}
        >
          eat
        </a>
      </div>

      {/* --- DIVIDER LINE --- */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-[1px] bg-black/10 z-20 pointer-events-none md:block hidden" />

      {/* --- SIP SIDE --- */}
      <div 
        className="relative flex-1 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
        onMouseEnter={() => setActiveSide("sip")}
        onMouseLeave={() => setActiveSide(null)}
      >
        {/* Sip Reveal Background */}
        <div 
          className={cn(
            "absolute inset-0 z-0 overflow-hidden transition-all duration-700 ease-in-out bg-cover bg-center",
            activeSide === "sip" ? "opacity-100 scale-105" : "opacity-0 scale-100"
          )}
          style={{ backgroundImage: `url(${assets.sipBg})` }}
        >
          {/* Floating Assets for Sip */}
          <div className="absolute inset-0 flex items-center justify-center">
             <img 
               src={assets.glass} 
               alt="" 
               className={cn(
                 "absolute w-[250px] md:w-[350px] transition-transform duration-1000 delay-100 ease-out",
                 activeSide === "sip" ? "translate-y-0 rotate-0 scale-110" : "translate-y-20 -rotate-12 scale-90"
               )}
               style={{ right: '10%' }}
             />
             <img 
               src={assets.orange} 
               alt="" 
               className={cn(
                 "absolute w-[80px] md:w-[120px] transition-transform duration-1000 delay-300 ease-out",
                 activeSide === "sip" ? "translate-y-[-100px] translate-x-[-150px] rotate-45" : "translate-y-0 translate-x-0 rotate-0"
               )}
               style={{ left: '20%', top: '30%' }}
             />
          </div>
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Sip Text */}
        <a 
          href="/menu"
          className={cn(
            "relative z-10 font-display text-[120px] md:text-[180px] transition-all duration-700 select-none",
            activeSide === "sip" ? "text-white scale-110" : "text-black"
          )}
        >
          sip
        </a>
      </div>

      <style jsx global>{`
        .font-display {
          font-family: var(--font-display, "Italiana", serif);
        }
        
        /* Smooth scale-out for the text when not active */
        .select-none {
          user-select: none;
          -webkit-user-drag: none;
        }

        /* Prevent content jump during hover state changes */
        section {
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </section>
  );
}