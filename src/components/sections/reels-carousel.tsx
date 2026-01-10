"use client";

import React from 'react';
import { motion } from 'framer-motion';

const reels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DFx9Y8GIbTj/embed/?hidecaption=1",
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DEqJ-rrOzQ6/embed/?hidecaption=1",
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DENIffwgJgU/embed/?hidecaption=1",
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DC9pY3NATTA/embed/?hidecaption=1",
  },
  {
    id: 5,
    url: "https://www.instagram.com/reel/DCsGCEPIk0N/embed/?hidecaption=1",
  },
  {
    id: 6,
    url: "https://www.instagram.com/reel/DCHaWe7I4mh/embed/?hidecaption=1",
  },
  {
    id: 7,
    url: "https://www.instagram.com/reel/DBRnY2PIs8G/embed/?hidecaption=1",
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
              x: [0, "-50%"],
            }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
                duration: 60,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
            {allReels.map((reel, index) => (
              <div
                key={`${reel.id}-${index}`}
                className="relative w-[300px] h-[533px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl bg-black"
              >
                <iframe
                  src={reel.url}
                  className="absolute top-[-54px] left-[-2px] w-[304px] h-[700px] border-0"
                  allowFullScreen
                  scrolling="no"
                />
                {/* Overlay to prevent interaction and keep user on site */}
                <div className="absolute inset-0 z-10" />
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReelsCarousel;
