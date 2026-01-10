import React from 'react';

/**
 * AboutMission Section
 * Clones the mission section focusing on animal rights and vegan hospitality.
 * Features centered serif typography and a vertical layout with whitespace.
 */
const AboutMission: React.FC = () => {
  return (
    <section className="bg-white py-[120px] md:py-[180px] lg:py-[240px] px-6 md:px-12">
      <div className="container mx-auto">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
          
          {/* Decorative Divider Line with Star (Optional based on design motifs) */}
          <div className="w-full flex justify-center mb-16 opacity-30">
            <div className="h-[1px] w-24 bg-brand-gold relative">
              <span className="absolute left-1/2 -top-[7px] -translate-x-1/2 text-brand-gold text-[14px]">✦</span>
            </div>
          </div>

          {/* Mission Quote Heading */}
          <h2 className="font-display text-[32px] md:text-[44px] lg:text-[54px] text-black leading-[1.2] lowercase mb-12 max-w-[850px]">
            an animal rights advocate, vegan hospitality consultant, and health coach, i&apos;ve always dreamed of opening a vegan restaurant that would make a difference.
          </h2>

          {/* Body Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-left mt-8">
            <div className="flex flex-col gap-6">
              <p className="font-body text-[16px] md:text-[18px] text-black leading-[1.8] font-normal">
                after nearly three years of hard work and dedication, Molo Coffee was born! my husband shah and i are thrilled to share our passion for delicious, plant-based food with our community.
              </p>
            </div>
            
              <div className="flex flex-col gap-6">
                <p className="font-body text-[16px] md:text-[18px] text-black leading-[1.8] font-normal">
                  at Molo Coffee, we&apos;re all about respect – respect for animals, the environment, and our planet. our 100% vegan menu is carefully crafted to appeal to everyone, from die-hard vegans to curious foodies looking to try something new. we believe that by serving up tasty, innovative dishes, we&apos;re not only satisfying appetites but also supporting a more sustainable earth.
                </p>
              </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className="mt-24 w-full flex justify-center">
            {/* Zen Arches motif from design system */}
            <div className="relative h-20 w-40 overflow-hidden opacity-20">
              <div className="absolute top-0 left-0 w-full h-[200%] border-[1px] border-brand-gold rounded-[50%]"></div>
              <div className="absolute top-4 left-4 w-[calc(100%-32px)] h-[200%] border-[1px] border-brand-gold rounded-[50%]"></div>
              <div className="absolute top-8 left-8 w-[calc(100%-64px)] h-[200%] border-[1px] border-brand-gold rounded-[50%]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMission;