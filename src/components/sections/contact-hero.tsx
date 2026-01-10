import React from 'react';
import Image from 'next/image';

const ContactHero = () => {
  return (
    <section className="contact-banner lg:pt-[236px] pt-[150px] pb-[100px] overflow-hidden bg-white">
      <div className="container mx-auto px-4 lg:px-0 lg:pl-[4%]">
        <div className="flex flex-wrap lg:flex-nowrap gap-0 lg:gap-[8%]">
          {/* Left Content Column */}
          <div className="contact-content w-full lg:max-w-[30%] mb-12 lg:mb-0">
            <div className="contact-headline mb-10">
              <h1 className="contact-header font-display text-[50px] md:text-[64px] leading-[1.1] text-black lowercase tracking-[0.02em]">
                come in, <br /> have a seat
              </h1>
            </div>

            <div className="contact-info space-y-8">
              <div className="contact-items">
                <p className="label-caps mb-1">phone</p>
                <span className="font-body text-[15px] text-black">
                  <a href="tel:713.505.1044" className="hover:text-accent transition-colors">713.505.1044</a>
                </span>
              </div>

              <div className="contact-items">
                <p className="label-caps mb-1">email</p>
                <span className="font-body text-[15px] text-black">
                  <a href="mailto:contact@jfvegancafe.com" className="hover:text-accent transition-colors">contact@jfvegancafe.com</a>
                </span>
              </div>

              <div className="contact-items">
                <p className="label-caps mb-1">address</p>
                <span className="font-body text-[15px] text-black leading-relaxed">
                  2111 W Loop S Suite 100<br />
                  Houston, TX 77027
                </span>
              </div>

              <div className="contact-items">
                <p className="label-caps mb-1">hours</p>
                <span className="font-body text-[15px] text-black leading-relaxed">
                  Sun - Th: 10:30 am to 10 pm<br />
                  Fri: 10:30 am to 11 pm<br />
                  Sat: 9 am to 11 pm
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="contact-images relative w-full lg:flex-1 h-[500px] md:h-[700px] lg:h-auto">
            {/* Background Arch-like graphic on the right */}
            <div className="absolute right-0 top-0 w-3/4 h-full z-0 translate-x-[10%] lg:translate-x-0">
              <img 
                className="w-full h-full object-contain object-right" 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/contact-bg-right-2.png" 
                alt="decorative background"
              />
            </div>

            {/* Stylized Oval-masked bar counter image */}
            <div className="absolute left-[10%] top-[10%] w-[80%] md:w-[70%] aspect-[1/1.2] max-w-[550px] z-10">
              {/* Floating dots SVG */}
              <img 
                className="absolute -left-12 top-4 w-24 h-auto z-20 pointer-events-none md:block hidden" 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/round-dot3-3.svg" 
                alt="decoration"
              />
              
              <div className="oval-frame w-full h-full relative overflow-hidden rounded-[200px] md:rounded-[300px]">
                <Image 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/contact-main-3.jpg"
                  alt="Restaurant bar view"
                  fill
                  sizes="(max-width: 768px) 80vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Overlapping Gold Chair Image */}
            <div className="absolute left-[-5%] bottom-[-5%] w-[45%] md:w-[40%] max-w-[320px] z-30 pointer-events-none">
              <Image 
                className="w-full h-auto drop-shadow-2xl" 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/contact-banner-chair2-4.png" 
                alt="Gold accent chair"
                width={472}
                height={619}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;