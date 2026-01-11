"use client";

import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="https://71three.sfo3.cdn.digitaloceanspaces.com/jf/home_web-1.mp4"
        />
        {/* Subtle overlay to ensure text readability if needed, though original is clean */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4">
        <div className="max-w-[1440px] w-full flex flex-col items-center justify-center text-center">
          
          {/* Headline - be kind to every kind. */}
          <h1 className="font-serif-display text-white text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.1] tracking-[-0.02em] font-normal mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
            be kind to every kind.
          </h1>

          {/* Animated Circular Button */}
          <div className="relative group cursor-pointer animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 ease-out">
              <a 
                href="/menu/" 
                className="relative flex items-center justify-center w-[120px] h-[120px] md:w-[140px] md:h-[140px] transition-transform duration-500 hover:scale-110"
              >
                {/* Central Arrow/Dot Icon */}
                <div className="w-1.5 h-1.5 bg-orange-500/60 rounded-full transition-transform duration-300 group-hover:scale-150 z-10" />
                
                {/* Inner Circle Background */}
                <div className="absolute inset-4 rounded-full bg-orange-500/30 backdrop-blur-md transition-opacity duration-300 group-hover:bg-orange-500/40" />

                {/* Outer Border Circle */}
                <div className="absolute inset-0 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm transition-opacity duration-300 group-hover:border-orange-500/50" />

                {/* Rotating Text Outer Ring */}
                <div className="absolute inset-0 animate-[spin_10s_linear_infinite] z-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="fill-white font-sans text-[10px] font-medium uppercase tracking-[0.3em]">
                      <textPath xlinkHref="#circlePath">
                        see menu • see menu • see menu • 
                      </textPath>
                    </text>
                  </svg>
                </div>
              </a>
          </div>
        </div>
      </div>

      {/* Decorative Marble Overlays (Global Class used in design system) */}
      <div className="marble-overlay absolute inset-0 pointer-events-none mix-blend-overlay z-[5]" />

      {/* Bottom Scroll Indicator / Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none z-10" />
      
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;