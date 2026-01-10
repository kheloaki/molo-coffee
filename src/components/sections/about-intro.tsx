"use client";

import React from 'react';
import Image from 'next/image';

const AboutIntro = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden pb-20 md:pb-32 lg:pb-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content Side */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 order-2 lg:order-1">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-black leading-tight mb-8 lowercase">
                  i'm heer, the proud owner of Molo Coffee, where we're serving up delicious, cruelty-free cuisine in the heart of river oaks, houston.

              </h2>
              
              <p className="font-body text-base md:text-lg text-black leading-relaxed mb-6">
                my journey to veganism began over a decade ago when I made the switch for ethical reasons. little did I know that this decision would not only change my life but inspire hundreds of others, including my entire immediate family, to embrace a compassionate lifestyle.
              </p>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Background Decorative Arches (Zen Arches) */}
            <div className="absolute -bottom-10 -left-10 w-[120%] h-[120%] opacity-20 pointer-events-none">
              <div 
                className="w-full h-full bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 100%, transparent 0%, transparent 40%, #c5a059 41%, transparent 42%)`,
                  backgroundSize: '100% 200%'
                }}
              />
            </div>

            {/* Framed Owner Image */}
            <div className="relative z-10 w-[320px] sm:w-[400px] md:w-[480px] lg:w-[540px]">
              <div className="arch-frame border-[0.5px] border-[#c5a059] p-3 md:p-4 rounded-t-[500px]">
                  <div className="overflow-hidden rounded-t-[500px] aspect-[4/5] relative">
                    <Image
                      src="/images/481184171_17918895186059193_1126337300958062956_n..jpg"
                        alt="Heer, Owner of Molo Coffee"

                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
              </div>

              {/* Decorative Stars */}
              <div className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 star-decorator">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/quote-star-8.svg"
                  width={18}
                  height={18}
                  alt="star"
                />
              </div>
              <div className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 star-decorator">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/quote-star-8.svg"
                  width={18}
                  height={18}
                  alt="star"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <style jsx global>{`
        .arch-frame {
          border-top-left-radius: 1000px;
          border-top-right-radius: 1000px;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      `}</style>
    </section>
  );
};

export default AboutIntro;