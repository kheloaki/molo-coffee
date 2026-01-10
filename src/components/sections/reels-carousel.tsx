"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VolumeX, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const reelShortcodes = [
  "DFx9Y8GIbTj",
  "DEqJ-rrOzQ6",
  "DENIffwgJgU",
  "DC9pY3NATTA",
  "DCsGCEPIk0N",
  "DCHaWe7I4mh",
  "DBRnY2PIs8G",
];

const VideoReel = ({ shortcode }: { shortcode: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-[300px] h-[533px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-black group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 
        Better clipping: 
        Instagram embeds have a header (~54px) and a footer.
        We scale and shift to focus ONLY on the video area.
      */}
      <div className="absolute inset-0 scale-[1.15] origin-center">
        <iframe
          src={`https://www.instagram.com/reel/${shortcode}/embed/?hidecaption=1`}
          className="absolute top-[-48px] left-0 w-full h-[650px] border-0"
          allowFullScreen
          scrolling="no"
        />
      </div>

      {/* Invisible overlay to block iframe clicks and handle hover */}
      <div className="absolute inset-0 z-10 bg-transparent cursor-pointer" />
      
      {/* Audio Information Overlay */}
      <div className={`absolute bottom-6 right-6 z-20 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="bg-black/60 backdrop-blur-md p-3 rounded-full text-white border border-white/20 hover:bg-black/80 transition-colors">
                <VolumeX size={20} className="text-white/80" />
              </div>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-black text-white border-white/10 max-w-[200px]">
              <div className="flex flex-col gap-1 p-1">
                <div className="flex items-center gap-2 font-semibold text-xs">
                  <Info size={14} />
                  <span>Audio Notice</span>
                </div>
                <p className="text-[10px] leading-relaxed opacity-80">
                  Instagram restricts audio control for embedded videos. Click the reel to view with sound on Instagram.
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Decorative border on hover */}
      <div className={`absolute inset-0 border-2 border-primary/50 rounded-2xl z-30 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const ReelsCarousel = () => {
  // Triple the reels for a longer, smoother loop
  const allShortcodes = [...reelShortcodes, ...reelShortcodes, ...reelShortcodes];

  return (
    <section className="py-24 bg-neutral-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-serif italic">
          Taste the Vibe
        </h2>
        <p className="text-neutral-600 max-w-xl text-sm md:text-base">
          Our community loves our vegan treats. Scroll through our latest reels and get inspired.
        </p>
      </div>

      <div className="flex relative">
        {/* Subtle gradients for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-50 to-transparent z-40 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-50 to-transparent z-40 pointer-events-none" />

        <motion.div
          className="flex gap-6 px-4"
          animate={{
            x: [0, "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {allShortcodes.map((shortcode, index) => (
            <VideoReel key={`${shortcode}-${index}`} shortcode={shortcode} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReelsCarousel;
