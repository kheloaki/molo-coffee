import React from 'react';
import Image from 'next/image';

/**
 * AboutCTA component clones the final call-to-action section of the about page.
 * It features a large serif headline, secondary body text, and a pill-shaped
 * arched image of the cafe's bar area.
 */
export default function AboutCTA() {
  return (
    <section className="bg-background section-spacing overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
          
          {/* Text Content Area */}
          <div className="flex-1 max-w-[720px] pt-4">
            <h2 className="text-foreground leading-[1.1] mb-12 lowercase text-balance">
              so come on down to just falafel, a women-owned vegan cafe, and experience the difference for yourself!
            </h2>
            
            <div className="max-w-[320px]">
              <p className="text-foreground font-body text-[16px] leading-[1.8] font-normal">
                we can&apos;t wait to share our love of vegan cuisine with you and show you just how delicious compassion can be.
              </p>
            </div>
          </div>

          {/* Arched Image Area */}
          <div className="relative w-full lg:w-auto flex-shrink-0 flex justify-center lg:justify-end">
            {/* 
              Visual Motif: Large pill-shaped (oval) image frame with golden border 
              The screenshot shows it as a horizontal pill/oval with golden border 
              and decorative star markers on the horizontal axis.
            */}
            <div className="relative">
              {/* Decorative Stars on the border axis */}
              <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 z-10 text-brand-gold text-[14px]">
                ✦
              </div>
              <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 z-10 text-brand-gold text-[14px]">
                ✦
              </div>

              {/* The Pill Frame Container */}
              <div className="pill-frame border-[#C5A059] w-[300px] h-[550px] sm:w-[500px] sm:h-[280px] md:w-[600px] md:h-[320px] lg:w-[660px] lg:h-[340px]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/about-3-5.webp"
                  alt="Just Falafel Vegan Cafe Interior Bar"
                  fill
                  sizes="(max-width: 768px) 100vw, 660px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Background Decorative Arches (Subtle) */}
              <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 opacity-10">
                <div className="w-full h-full border border-brand-gold rounded-[500px]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Visual Separator - Simple Line with Stars as seen in the system */}
      <div className="container mt-24 lg:mt-32">
        <div className="relative h-px w-full bg-[#E5E5E5] flex items-center justify-between">
          <span className="text-brand-gold text-[10px] -ml-1">✦</span>
          <span className="text-brand-gold text-[10px] -mr-1">✦</span>
        </div>
      </div>
    </section>
  );
}