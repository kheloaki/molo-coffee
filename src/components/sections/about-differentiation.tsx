import React from 'react';
import Image from 'next/image';

const AboutDifferentiation = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white section-spacing">
      {/* Zen Arches Background - Concentric lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-full max-w-[800px] h-[800px] border-[1px] border-[#c5a059]/10 rounded-full zen-arches"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 100%, transparent 0%, transparent 40%, rgba(197, 160, 89, 0.1) 41%, transparent 42%)',
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        {/* Floating Assets - Top Left (Lettuce/Small Food) */}
        <div className="absolute left-[5%] top-[15%] w-[120px] md:w-[150px] animate-bounce-slow">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/leaf-1-3.svg"
            alt="Floating lettuce leaf"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Floating Assets - Top Right (Beet Leaf/Purple) */}
        <div className="absolute right-[10%] top-[10%] w-[140px] md:w-[180px] animate-float">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/leaf-2-6.svg"
            alt="Floating purple beet leaf"
            width={180}
            height={180}
            className="object-contain rotate-[15deg]"
          />
        </div>

        {/* Floating Assets - Bottom Right (Kale) */}
        <div className="absolute right-[15%] bottom-[5%] w-[160px] md:w-[220px] animate-float-delayed">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/leaf-3-7.svg"
            alt="Floating kale leaf"
            width={220}
            height={220}
            className="object-contain rotate-[-10deg]"
          />
        </div>

        {/* Floating Assets - Small Food Details */}
        <div className="absolute left-[20%] top-[40%] w-[40px] opacity-80">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/small-food1-4.svg"
            alt="Food detail"
            width={40}
            height={40}
          />
        </div>
        <div className="absolute right-[25%] top-[50%] w-[30px] opacity-60">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/small-food2-5.svg"
            alt="Food detail"
            width={30}
            height={30}
          />
        </div>

        {/* Main Content */}
        <div className="max-w-[620px] text-center">
          <h2 className="mb-10 text-[2.25rem] md:text-[3.5rem] font-display text-black">
            what sets us apart?
          </h2>
          
          <div className="px-4">
            <p className="font-body text-[16px] md:text-[18px] leading-[1.8] text-black mb-6">
              for starters, we prep all our ingredients fresh daily, ensuring that every bite is bursting with flavor. our menu features both innovative and familiar dishes, all with a vegan twist that will keep you coming back for more. plus, we only use premium ingredients because we believe that quality matters.
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-20px) rotate(20deg); }
          100% { transform: translateY(0px) rotate(15deg); }
        }
        @keyframes float-delayed {
          0% { transform: translateY(0px) rotate(-10deg); }
          50% { transform: translateY(15px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(-10deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        .zen-arches {
          /* Creating the concentric arch effect seen in the design instructions */
          mask-image: linear-gradient(to top, black 50%, transparent 100%);
          border: 1px solid rgba(197, 160, 89, 0.15);
          position: absolute;
          width: 800px;
          height: 1200px;
          border-radius: 400px;
          top: 10%;
        }
      `}</style>
    </section>
  );
};

export default AboutDifferentiation;