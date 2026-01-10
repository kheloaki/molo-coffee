"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const reelFiles = [
  "/reels/reel-1.mp4",
  "/reels/reel-2.mp4",
  "/reels/reel-3.mp4",
  "/reels/reel-4.mp4",
  "/reels/reel-5.mp4",
  "/reels/reel-6.mp4",
  "/reels/reel-7.mp4",
  "/reels/reel-8.mp4",
];

const VideoReel = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(err => console.log("Play interrupted", err));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  return (
    <div 
      className="relative w-[300px] h-[533px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-black group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        autoPlay
      />

      {/* Decorative border on hover */}
      <div className={`absolute inset-0 border-2 border-primary/50 rounded-2xl z-30 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

const ReelsCarousel = () => {
  // Triple the reels for a longer, smoother loop
  const allReels = [...reelFiles, ...reelFiles, ...reelFiles];

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
          {allReels.map((src, index) => (
            <VideoReel key={`${src}-${index}`} src={src} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReelsCarousel;
