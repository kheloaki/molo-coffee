import React from 'react';
import Image from 'next/image';

const AboutValues = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container px-6 lg:px-[100px] py-[120px] lg:py-[200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Large vertical image of Owner Shah */}
          <div className="relative z-10 flex justify-center lg:justify-start">
            <div 
              className="relative w-full max-w-[470px] aspect-[2/3] overflow-hidden"
              style={{
                borderRadius: '0px', // Original screenshot shows sharp corners for this specific image section, unlike the pill-framed ones above
              }}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/about-shah2-3.jpg"
                alt="Shah preparing plant-based food at Just Falafel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Side: Descriptive Text */}
          <div className="flex flex-col justify-center space-y-8 max-w-[550px]">
            <div className="space-y-6">
              <p className="font-body text-[16px] lg:text-[18px] leading-[1.8] text-black">
                after nearly three years of hard work and dedication, just falafel vegan cafe was born! 
                my husband shah and i are thrilled to share our passion for delicious, plant-balanced 
                food with our community.
              </p>
              
              <p className="font-body text-[16px] lg:text-[18px] leading-[1.8] text-black">
                at just falafel, we&apos;re all about respect &ndash; respect for animals, the environment, 
                and our planet. our 100% vegan menu is carefully crafted to appeal to everyone, from 
                die-hard vegans to curious foodies looking to try something new. we believe that by 
                serving up tasty, innovative dishes, we&apos;re not only satisfying appetites but also 
                supporting a more sustainable earth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutValues;