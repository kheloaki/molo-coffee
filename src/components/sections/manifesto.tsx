import React from 'react';

/**
 * Manifesto component
 * Clones the minimalist text section with a centered statement on white marble background.
 * Based on design instructions and provided HTML/styles.
 */
const Manifesto = () => {
  return (
    <section className="relative overflow-hidden w-full bg-white section-spacing py-[100px] md:py-[140px]">
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
          <h2 
            className="text-center font-display text-primary leading-[1.1] animate-in fade-in duration-1000 slide-in-from-bottom-8"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              textWrap: 'balance'
            }}
          >
            <span className="inline-block mr-3">fully-vegan</span>
            <span className="inline-block mr-3">restaurant</span>
            <span className="inline-block mr-3">in</span>
            <span className="inline-block mr-3">houston.</span>
            <span className="inline-block mr-3">elevate</span>
            <span className="inline-block mr-3">your</span>
            <span className="inline-block mr-3">palate,</span>
            <span className="inline-block mr-3">uplift</span>
            <span className="inline-block mr-3">the</span>
            <span className="inline-block">earth.</span>
          </h2>
        </div>
      </div>

      {/* Decorative floating ingredient assets (referenced in instructions as 'floating ingredient assets') */}
      {/* 
          Based on the content and screenshots, this section often sits near the intro-overlay 
          which contains images like "falafel-image f-1". We include a subtle placement for 
          consistency if it transitions from the hero.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
         {/* These would be the ingredients mentioned in the high-level design like floating spices */}
         {/* No specific SVGs or external PNGs for unique ingredients were provided for *this* text block, 
             so we stick to the marble clean aesthetic. */}
      </div>
    </section>
  );
};

export default Manifesto;