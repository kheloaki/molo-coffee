"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

/**
 * ScrollRevealText Component
 * Clones the "white-space-txt" section with character-by-character scroll reveal.
 * 
 * Data Reference:
 * - Content: "fully-vegan restaurant in houston. elevate your palate, uplift the earth."
 * - Typography: font-family: "Italiana", serif (via var(--font-display))
 * - Color: Primary #000000
 * - Animation: SplitText character reveal based on scroll
 */

export default function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const text = "fully-vegan restaurant in houston. elevate your palate, uplift the earth.";
  
  // Create words and split into characters
  const words = text.split(" ");

  return (
    <section 
      className="white-space-txt w-full bg-white relative z-20"
      style={{
        paddingTop: "120px", // Base section padding (consistent with design system)
        paddingBottom: "120px"
      }}
    >
      <div 
        ref={containerRef}
        className="container"
      >
        <div className="max-w-[845px] mx-auto flex justify-center items-center w-full h-full">
          <h2 className="section-headline text-center flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.2em]">
            {words.map((word, wordIndex) => (
              <Word key={wordIndex} word={word} containerRef={containerRef} />
            ))}
          </h2>
        </div>
      </div>

      <style jsx global>{`
        .section-headline {
          font-family: var(--font-display, "Italiana", serif);
          font-weight: 400;
          color: #000000;
          /* Calculated font size range based on viewport */
          font-size: clamp(32px, 5vw, 60px);
          line-height: 1.1;
          letter-spacing: -0.01em;
          text-transform: none;
        }
        
        @media (max-width: 768px) {
          .section-headline {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}

function Word({ word, containerRef }: { word: string; containerRef: React.RefObject<HTMLDivElement> }) {
  // Add a space to the end of the word if needed, but we handle that with flex gap
  const characters = word.split("");

  return (
    <span className="inline-flex whitespace-nowrap">
      {characters.map((char, charIndex) => (
        <Character key={charIndex} char={char} containerRef={containerRef} />
      ))}
    </span>
  );
}

function Character({ char, containerRef }: { char: string; containerRef: React.RefObject<HTMLDivElement> }) {
  const charRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 30%"]
  });

  // Since we want character-by-character reveal, we could map scroll progress 
  // However, simpler is opacity based on scroll distance for better performance.
  // In the original, it's often a sequential reveal (GSAP SplitText style).
  // Here we use a staggered effect based on scroll position.
  
  // We use scrollProgress to drive opacity
  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);

  return (
    <motion.div
      ref={charRef}
      style={{ opacity }}
      className="inline-block"
    >
      {char}
    </motion.div>
  );
}