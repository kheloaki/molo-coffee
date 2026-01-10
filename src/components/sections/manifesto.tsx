import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Manifesto component
 * Clones the minimalist text section with a centered statement on white marble background.
 * Based on design instructions and provided HTML/styles.
 */
const Manifesto = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden w-full bg-white section-spacing py-[100px] md:py-[140px]"
    >
      {/* Marble Texture Overlay */}
      <div 
        className="absolute inset-0 marble-overlay pointer-events-none" 
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/white-marble.png')",
          backgroundRepeat: 'repeat',
          opacity: 0.35
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-[845px] mx-auto flex justify-center items-center w-full h-full">
          <motion.h2 
            style={{ opacity, y }}
            className="text-center font-serif-display text-black leading-[1.2] lowercase"
            style={{
              opacity,
              y,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              textWrap: 'balance'
            }}
          >
            fully-vegan restaurant in houston.<br />
            elevate your palate,<br />
            uplift the earth.
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;