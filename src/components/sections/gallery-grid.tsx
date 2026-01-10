"use client";

import React from 'react';
import Image from 'next/image';

const GalleryGrid = () => {
  const images = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f1-16.jpg",
      alt: "Diners lifestyle",
      className: "w-full h-full object-cover rounded-full aspect-square",
      wrapperClass: "col-span-1"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f2-17.jpg",
      alt: "Restaurant interior and food table",
      className: "w-full h-full object-cover organic-mask-tr",
      wrapperClass: "col-span-3 row-span-2"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f4-1-20.jpg",
      alt: "Overhead food spread",
      className: "w-full h-full object-cover organic-mask-tr organic-mask-bl",
      wrapperClass: "col-span-4 row-span-3"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f3-1-18.jpg",
      alt: "Man sitting in circular booth",
      className: "w-full h-full object-cover rounded-[30px]",
      wrapperClass: "col-span-1"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f5-19.jpg",
      alt: "Bar seating area",
      className: "w-full h-full object-cover rounded-[30px]",
      wrapperClass: "col-span-4 row-span-1"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f6-21.jpg",
      alt: "Diner enjoying a meal",
      className: "w-full h-full object-cover organic-mask-tr organic-mask-tl h-[400px]",
      wrapperClass: "col-span-2 row-span-1 self-end"
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f7-1-22.jpg",
      alt: "Just Falafel engraved board",
      className: "w-full h-full object-cover rounded-[30px]",
      wrapperClass: "col-span-6 row-span-1"
    }
  ];

  return (
    <section className="gallery-section section-spacing overflow-hidden bg-white/40 relative">
      <div className="marble-overlay absolute inset-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-8 gap-4 md:gap-7 items-stretch">
          
          {/* Top Left Circular and Arched Blocks */}
          <div className="col-span-4 grid grid-cols-4 gap-4 md:gap-7">
            <div className="col-span-1">
              <div className="relative overflow-hidden rounded-full aspect-square mb-4 md:mb-7">
                <Image 
                  src={images[0].src} 
                  alt={images[0].alt} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-[30px] aspect-[4/5]">
                <Image 
                  src={images[3].src} 
                  alt={images[3].alt} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="col-span-3">
              <div className="relative overflow-hidden organic-mask-tr h-[450px] md:h-[550px]">
                <Image 
                  src={images[1].src} 
                  alt={images[1].alt} 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border-[1px] border-black/5 organic-mask-tr top-4 left-4" />
              </div>
            </div>

            <div className="col-span-4">
              <div className="relative overflow-hidden rounded-[30px] h-[300px] md:h-[350px]">
                <Image 
                  src={images[4].src} 
                  alt={images[4].alt} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Large Organic Shape */}
          <div className="col-span-4">
            <div className="relative overflow-hidden organic-mask-tr organic-mask-bl h-full min-h-[600px] md:min-h-[850px]">
              <Image 
                src={images[2].src} 
                alt={images[2].alt} 
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Row - Featured Shapes */}
          <div className="col-span-8 grid grid-cols-8 gap-4 md:gap-7 mt-4 md:mt-7">
            <div className="col-span-3 md:col-span-2">
              <div className="relative overflow-hidden organic-mask-tl organic-mask-tr h-[350px] md:h-[450px] border-[1px] border-black/10">
                <Image 
                  src={images[5].src} 
                  alt={images[5].alt} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="col-span-5 md:col-span-6">
              <div className="relative overflow-hidden rounded-[30px] h-[350px] md:h-[450px]">
                <Image 
                  src={images[6].src} 
                  alt={images[6].alt} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Section Headline Below Gallery */}
        <div className="text-center mt-[100px] md:mt-[140px]">
          <h2 className="text-[32px] md:text-[40px] font-display text-primary tracking-normal lowercase">
            deliciously bold in every bite
          </h2>
        </div>
      </div>

      <style jsx global>{`
        .organic-mask-tr {
          border-top-right-radius: 200px;
        }
        .organic-mask-bl {
          border-bottom-left-radius: 200px;
        }
        .organic-mask-tl {
          border-top-left-radius: 200px;
        }
        .organic-mask-br {
          border-bottom-right-radius: 200px;
        }
        @media (max-width: 768px) {
          .organic-mask-tr, .organic-mask-bl, .organic-mask-tl, .organic-mask-br {
            border-radius: 100px;
          }
          .organic-mask-tr { border-top-right-radius: 100px; }
          .organic-mask-bl { border-bottom-left-radius: 100px; }
          .organic-mask-tl { border-top-left-radius: 100px; }
        }
      `}</style>
    </section>
  );
};

export default GalleryGrid;