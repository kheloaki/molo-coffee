"use client";

import React from 'react';
import { motion } from 'framer-motion';

const reels = [
  {
    id: 1,
    url: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-salad-44244-large.mp4",
  },
  {
    id: 2,
    url: "https://assets.mixkit.co/videos/preview/mixkit-vegetables-in-a-pan-44246-large.mp4",
  },
  {
    id: 3,
    url: "https://assets.mixkit.co/videos/preview/mixkit-pouring-sauce-on-a-salad-44247-large.mp4",
  },
  {
    id: 4,
    url: "https://assets.mixkit.co/videos/preview/mixkit-fresh-vegetables-and-fruits-44248-large.mp4",
  },
  {
    id: 5,
    url: "https://assets.mixkit.co/videos/preview/mixkit-cutting-vegetables-for-a-salad-44253-large.mp4",
  },
];

const ReelsCarousel = () => {
  // Duplicate reels for seamless looping
  const allReels = [...reels, ...reels];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -100 * reels.length + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {allReels.map((reel, index) => (
            <div
              key={`${reel.id}-${index}`}
              className="relative w-[300px] h-[533px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl"
            >
              <video
                src={reel.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReelsCarousel;
