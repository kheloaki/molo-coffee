import React from 'react';
import Image from 'next/image';

/**
 * ContactForm component
 * Pixel-perfect clone of the "want to chat? get in touch!" form section.
 * Features:
 * - Light marble background with a white card transition.
 * - Left side of the card features a dark marble textured overlap and cocktail imagery.
 * - Minimalist form inputs with border-bottom only.
 * - Hand-drawn scribble styled circular submit button.
 */
const ContactForm: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background with subtle texture/image - mapped from "get-in-touch-bg" in HTML */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/get-in-touch-bg-5.png"
          alt="Contact Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 flex justify-end">
        {/* Main Form Container - Positioned to the right */}
        <div className="w-full md:w-[90%] xl:w-[85%] flex flex-col md:flex-row shadow-form bg-white overflow-hidden">
          
          {/* Left Side: Dark Marble & Lifestyle Image */}
          <div className="hidden md:flex w-[25%] lg:w-[30%] relative flex-col items-stretch">
            {/* Dark Marble Texture */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/dark-marble-6.webp"
                alt="Dark Marble Texture"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Lifestyle Image Overlap (from screenshots/design system context) */}
            <div className="relative z-10 w-full h-[600px] flex items-center justify-center p-8">
               {/* This space is maintained to preserve layout as per screenshot */}
            </div>
          </div>

          {/* Right Side: Heading & Form Fields */}
          <div className="flex-1 p-8 md:p-16 lg:p-24 bg-white">
            <div className="mb-12 md:mb-16">
              <h2 className="font-display text-[42px] md:text-[50px] leading-[1.1] text-black mb-2">
                want to chat?
              </h2>
              <h2 className="font-display text-[42px] md:text-[50px] leading-[1.1] text-black">
                get in touch!
              </h2>
            </div>

            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {/* Name Field */}
                <div className="relative group">
                  <label htmlFor="name" className="block text-[14px] font-semibold uppercase tracking-widest text-[#5a5a5a] mb-2 font-body">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-minimal w-full border-b border-black py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-body text-[15px]"
                  />
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label htmlFor="email" className="block text-[14px] font-semibold uppercase tracking-widest text-[#5a5a5a] mb-2 font-body">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-minimal w-full border-b border-black py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-body text-[15px]"
                  />
                </div>
              </div>

              {/* Comments Field */}
              <div className="relative group">
                <label htmlFor="comments" className="block text-[14px] font-semibold uppercase tracking-widest text-[#5a5a5a] mb-2 font-body">
                  Comments / Event Details
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={1}
                  className="input-minimal w-full border-b border-black py-2 bg-transparent focus:outline-none focus:border-accent transition-colors font-body text-[15px] resize-none"
                />
              </div>

              {/* Submit Button Section */}
              <div className="pt-6 relative">
                <button
                  type="submit"
                  className="relative group inline-flex items-center justify-center w-[120px] h-[120px] bg-transparent border-none p-0 cursor-pointer overflow-visible"
                >
                  {/* Scribble SVG Background */}
                  <div className="absolute inset-0 transform scale-150 rotate-[10deg] opacity-70 group-hover:scale-[1.55] group-hover:rotate-[0deg] transition-transform duration-500">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.6">
                      <path d="M50,5 C80,5 95,25 95,50 C95,75 80,95 50,95 C20,95 5,75 5,50 C5,25 20,5 50,5 Z" />
                      <path d="M48,8 C75,8 92,28 92,48 C92,72 78,92 48,92 C18,92 8,72 8,48 C8,28 18,8 48,8 Z" />
                    </svg>
                  </div>
                  
                  {/* Button Text */}
                  <span className="relative z-10 font-display text-[14px] tracking-[0.2em] font-medium text-black">
                    SUBMIT
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;