import React from 'react';
import Image from 'next/image';

const GalleryGrid = () => {
  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="container mx-auto max-w-[1440px] px-8">
        {/* Title Section */}
        <div className="flex justify-center mb-16">
          <h2 className="font-display text-[60px] md:text-[80px] text-center text-primary leading-tight tracking-tight">
            deliciously bold in every bite
          </h2>
        </div>

        {/* Masonry-style Masonry Gallery */}
        <div className="relative grid grid-cols-12 gap-5 auto-rows-min">
          {/* Floating Ingredients Background Decorations - Positoned relative to grid */}
          <div className="absolute top-[10%] right-[-5%] z-20 pointer-events-none w-32 h-32 opacity-80 blur-[2px]">
             <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f1-16.jpg" 
                alt="herb" width={100} height={100} className="object-contain"
             />
          </div>
          <div className="absolute top-[40%] left-[-8%] z-20 pointer-events-none w-48 h-48">
            {/* SVG implementation or asset represent onion rings */}
            <div className="relative w-full h-full opacity-60">
                <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-[12px] border-[#d48c8c] rotate-[15deg]"></div>
                <div className="absolute top-6 left-12 w-28 h-28 rounded-full border-[10px] border-[#e2a1a1] -rotate-[10deg]"></div>
            </div>
          </div>
          <div className="absolute top-[5%] left-[10%] z-20 pointer-events-none w-8 h-8 bg-[#D4AF37] rounded-full blur-[20px] opacity-30"></div>
          <div className="absolute top-[60%] right-[15%] z-20 pointer-events-none w-10 h-10 flex items-center justify-center">
             <div className="w-4 h-4 rounded-full bg-[#f1c27d] shadow-sm"></div>
          </div>

          {/* First Row */}
          {/* Left Column Group */}
          <div className="col-span-12 md:col-span-2 flex flex-col gap-5">
            <div className="rounded-full overflow-hidden aspect-square h-[200px] w-[200px]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f1-16.jpg" 
                alt="Social table" width={300} height={300} className="w-full h-full object-cover"
              />
            </div>
            <div className="arch-mask-tr overflow-hidden aspect-[3/4] rounded-t-[500px] rounded-br-2xl rounded-bl-2xl">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f2-17.jpg" 
                alt="Man dining" width={300} height={400} className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Large Arch */}
          <div className="col-span-12 md:col-span-5">
            <div className="arch-mask-tr overflow-hidden aspect-[4/5] rounded-tr-[400px] rounded-2xl relative border-transparent">
               <div className="absolute inset-4 border border-white/20 rounded-tr-[380px] rounded-xl z-10"></div>
               <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f3-1-18.jpg" 
                alt="Feast spread" width={800} height={1000} className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Large Arch Group */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
            <div className="arch-mask-bl overflow-hidden aspect-square rounded-bl-[400px] rounded-2xl">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f4-1-20.jpg" 
                alt="Flatlay food" width={700} height={700} className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second Row Masonry Items */}
          <div className="col-span-12 md:col-span-4 mt-[-5%]">
            <div className="rounded-2xl overflow-hidden aspect-[16/9]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f5-19.jpg" 
                alt="Counter view" width={600} height={350} className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Third Row "In-between" CTA */}
          <div className="col-span-12 flex justify-center py-10 relative">
             {/* Circular Button */}
             <a href="/menu" className="group relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 border border-black/10 rounded-full group-hover:border-sage transition-colors duration-300"></div>
                <div className="text-center font-body text-[10px] uppercase tracking-[0.2em] font-medium leading-tight">
                  <span className="block">See</span>
                  <span className="block">Menu</span>
                </div>
                {/* Visual indicator of circular text could be added here if asset provided */}
             </a>
          </div>

          {/* Fourth Row */}
          <div className="col-span-12 md:col-span-5">
             <div className="rounded-2xl overflow-hidden aspect-[4/5] h-full">
               <Image 
                 src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f6-21.jpg" 
                 alt="Detailed food" width={700} height={900} className="w-full h-full object-cover"
               />
             </div>
          </div>

          <div className="col-span-12 md:col-span-7 flex flex-col gap-5">
            <div className="arch-mask-bl overflow-hidden aspect-[3/2] rounded-bl-[350px] rounded-2xl bg-[#76805B]/5">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f7-1-22.jpg" 
                alt="Restaurant interior" width={900} height={600} className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-5 h-full">
                <div className="rounded-2xl overflow-hidden aspect-video">
                   <div className="w-full h-full bg-[#f7f7f7] flex items-center justify-center">
                      <Image 
                         src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f1-16.jpg" 
                         alt="Mac n cheese" width={400} height={250} className="w-full h-full object-cover"
                      />
                   </div>
                </div>
                <div className="rounded-full overflow-hidden aspect-square self-center w-[120px] h-[120px]">
                   <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/f2-17.jpg" 
                      alt="Small dish" width={150} height={150} className="w-full h-full object-cover"
                   />
                </div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="flex flex-col items-center justify-center mt-20 gap-3">
          <div className="w-8 h-8 opacity-20 hover:opacity-100 transition-opacity cursor-pointer">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" />
              <path d="M12 16H20M16 12V20" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          <button className="font-body text-[10px] uppercase tracking-[0.3em] text-[#737373] hover:text-black transition-colors">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;