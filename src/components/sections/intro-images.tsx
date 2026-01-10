"use client";

import React from 'react';
import Image from 'next/image';

/**
 * IntroImages Component
 * 
 * Clones the floating image overlay section that appears during scroll transitions.
 * This section features scattered food photography of falafels.
 * 
 * Logic Note: On the original site, these images are often animated using 
 * scroll-triggered libraries like GSAP or AOS. Here we'll implement the 
 * base layout with high-fidelity positioning and styling.
 */

const IntroImages = () => {
  const falafelAssets = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel1-2.jpg",
      className: "f-1 absolute top-[10%] left-[5%] w-[300px] h-[300px] object-cover z-10",
      alt: "Scattered Falafel 1"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel2-3.jpg",
      className: "f-2 absolute top-[40%] right-[8%] w-[250px] h-[250px] object-cover z-10",
      alt: "Scattered Falafel 2"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel3-4.jpg",
      className: "f-3 absolute bottom-[15%] left-[12%] w-[280px] h-[280px] object-cover z-10",
      alt: "Scattered Falafel 3"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/falafel4-5.jpg",
      className: "f-4 absolute bottom-[5%] right-[20%] w-[320px] h-[320px] object-cover z-10",
      alt: "Scattered Falafel 4"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden pointer-events-none">
      <div 
        className="intro-overlay min-h-screen relative w-full"
        style={{
          display: 'block',
          position: 'static',
          zIndex: 50
        }}
      >
        {/*
          In a production environment, these would be controlled by Framer Motion 
          or GSAP. For this clone, we follow the structure provided in the HTML.
        */}
        <div className="relative w-full h-full min-h-[100vh]">
          {falafelAssets.map((asset, index) => (
            <div 
              key={index} 
              className={`${asset.className} transition-all duration-[1.5s] ease-out`}
              style={{
                borderRadius: index % 2 === 0 ? '200px 0 0 200px' : '0 200px 200px 0',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
              }}
            >
              <Image
                src={asset.src}
                alt={asset.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority={index < 2}
              />
            </div>
          ))}
        </div>

        {/* Marble Texture Overlay - as per high level design */}
        <div 
          className="marble-overlay absolute inset-0 pointer-events-none z-0" 
          style={{ opacity: 0.15 }}
        />
      </div>

      <style jsx global>{`
        .intro-overlay .falafel-image {
          position: absolute;
          opacity: 1; /* These are usually toggled via JS on scroll */
          pointer-events: none;
        }

        /* Specific positions based on common scroll layout patterns for this site */
        @media (max-width: 768px) {
          .f-1 { width: 150px; height: 150px; top: 5%; left: 0; }
          .f-2 { width: 120px; height: 120px; top: 25%; right: -20px; }
          .f-3 { width: 140px; height: 140px; bottom: 20%; left: -10px; }
          .f-4 { width: 160px; height: 160px; bottom: 5%; right: 0; }
        }
      `}</style>
    </div>
  );
};

export default IntroImages;