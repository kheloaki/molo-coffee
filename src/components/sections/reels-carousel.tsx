"use client";

import React from 'react';
import { motion } from 'framer-motion';

const reels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DFx9Y8GIbTj/embed",
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DEqJ-rrOzQ6/embed",
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DENIffwgJgU/embed",
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DC9pY3NATTA/embed",
  },
  {
    id: 5,
    url: "https://www.instagram.com/reel/DCsGCEPIk0N/embed",
  },
  {
    id: 6,
    url: "https://www.instagram.com/reel/DCHaWe7I4mh/embed",
  },
  {
    id: 7,
    url: "https://www.instagram.com/reel/DBRnY2PIs8G/embed",
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
                className="relative w-[300px] h-[533px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl"
              >
                <iframe
                  src={reel.url}
                  className="w-full h-full border-0"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReelsCarousel;
