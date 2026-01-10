import React, { useEffect, useRef, useState } from "react";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay policy issues
      });
    }
  }, [isVideoLoaded]);

  return (
    <section 
      id="main-banner" 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src="https://71three.sfo3.cdn.digitaloceanspaces.com/jf/home_web-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Subtle overlay for text readability if needed */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Hero Title */}
        <div className="max-w-[678px] animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <h1 className="font-display text-[3.125rem] md:text-[4.0625rem] xl:text-[60px] text-black leading-[1.1] mb-8 font-normal lowercase tracking-tight">
            be kind to every kind.
          </h1>
        </div>

        {/* Rolling Text Circular Button */}
        <div className="mt-[30px] flex justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <a
            href="/menu"
            className="group relative flex items-center justify-center w-[120px] h-[120px] rounded-full border border-black/10 transition-colors duration-300 hover:border-sage"
          >
            {/* Rotating SVG Text */}
            <div className="absolute w-full h-full animate-[spin_10s_linear_infinite] group-hover:pause">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-black group-hover:fill-sage font-body uppercase text-[10px] tracking-[0.2em] transition-colors duration-300">
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    see menu • see menu • see menu • see menu • 
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Inner Center Icon/Content (Placeholder for the vector) */}
            <div className="relative z-20 flex flex-col items-center overflow-hidden h-[14px]">
              <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
                <span className="font-body text-[10px] uppercase tracking-widest text-black group-hover:text-sage leading-[14px]">
                  Menu
                </span>
                <span className="font-body text-[10px] uppercase tracking-widest text-black group-hover:text-sage leading-[14px]">
                  Menu
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Intro Overlay Images (Simulated CSS only from instructions) */}
      {/* In a real project, this would be managed by a global state/timer */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeSequential {
          0% { opacity: 0; transform: scale(1.1); }
          5% { opacity: 1; transform: scale(1); }
          20% { opacity: 1; }
          25% { opacity: 0; }
          100% { opacity: 0; }
        }
        .intro-overlay-sim {
          position: fixed;
          inset: 0;
          background: white;
          z-index: 9999;
          animation: fadeOverlay 4s forwards;
          pointer-events: none;
        }
        @keyframes fadeOverlay {
          0%, 80% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }
        .falafel-seq-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          animation: fadeSequential 4s infinite;
        }
        .f-1 { animation-delay: 0s; }
        .f-2 { animation-delay: 1s; }
        .f-3 { animation-delay: 2s; }
        .f-4 { animation-delay: 3s; }
      `}} />
      
      {/* 
        Uncomment implementation of intro overlay if required to be visible on every hit.
        Currently kept hidden or managed by the parent "loading" state logic.
      */}
      {/*
      <div className="intro-overlay-sim">
        <img src="https://jfvegancafe.com/wp-content/uploads/2025/custom/falafel1.jpg" className="falafel-seq-img f-1" alt="" />
        <img src="https://jfvegancafe.com/wp-content/uploads/2025/custom/falafel2.jpg" className="falafel-seq-img f-2" alt="" />
        <img src="https://jfvegancafe.com/wp-content/uploads/2025/custom/falafel3.jpg" className="falafel-seq-img f-3" alt="" />
        <img src="https://jfvegancafe.com/wp-content/uploads/2025/custom/falafel4.jpg" className="falafel-seq-img f-4" alt="" />
      </div>
      */}

      {/* Logo Vector Overlay (Briefly flashes per design instructions) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 select-none">
         <img 
          className="w-48 brightness-0 animate-[ping_2s_ease-out_infinite]" 
          src="/logo.png" 
          alt="Logo Overlay" 
        />
      </div>
    </section>
  );
};

export default HeroVideo;