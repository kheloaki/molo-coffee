"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const FooterCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <footer className="footer-section bg-white w-full overflow-hidden font-body">
      {/* Top Footer Navigation / Logo */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-[100px] pt-[80px] pb-[40px] flex flex-col md:flex-row justify-between items-center md:items-center">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <a href="/" className="block w-[80px] md:w-[100px]">
            <Image 
              src="/logo.png" 
              alt="MD Logo" 
              width={100} 
              height={60} 
              className="w-full h-auto"
            />
          </a>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-8 lg:gap-x-[50px] gap-y-4">
            <li>
              <a href="/menu" className="text-[12px] uppercase tracking-[0.2em] font-medium hover:text-sage transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="text-[12px] uppercase tracking-[0.2em] font-medium hover:text-sage transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-[12px] uppercase tracking-[0.2em] font-medium hover:text-sage transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="https://app.squareup.com/gift/ML0TJAV1T1BQ2/order" className="text-[12px] uppercase tracking-[0.2em] font-medium hover:text-sage transition-colors">
                Gift Card
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Black Marble Contact Bar */}
      <div ref={sectionRef} className="relative w-full md:py-[51px] py-[100px] flex items-center overflow-hidden">
        {/* Real Marble Texture Image for the "Black Gold" effect */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('https://jfvegancafe.com/wp-content/themes/Justfalafel/assets/images/footer-bg.jpg')] bg-cover bg-center"
          ></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="lg:px-[4%] w-full relative z-10 flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto px-8">
          {/* Contact Number */}
          <div className="flex justify-start items-center">
            <a 
              href="tel:713.505.1044" 
              className="font-display text-[40px] md:text-[60px] lg:text-[75px] text-white tracking-normal leading-none hover:text-white/80 transition-opacity"
            >
              713.505.1044
            </a>
          </div>

          {/* Order Now Link */}
          <div className="relative flex justify-end items-center mt-12 md:mt-0">
            <a 
              href="https://www.grubhub.com/restaurant/just-falafel-vegan-cafe-2111-west-loop-south-houston/9333792?proof=true"
              className="relative z-30 group"
            >
              <span className="font-display text-[40px] md:text-[60px] lg:text-[75px] text-white tracking-normal leading-none border-b-[1.5px] border-white pb-1 hover:border-white/80 hover:text-white/80 transition-all">
                Order Now
              </span>
            </a>
          </div>
        </div>

        {/* Overhanging Vines Asset */}
        <div 
          className={`absolute top-0 right-0 w-[300px] md:w-[500px] h-full pointer-events-none z-20 transition-all duration-[600ms] ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'
          }`}
        >
          <img 
            src="https://jfvegancafe.com/wp-content/themes/Justfalafel/assets/images/branch_final-min.png" 
            alt="green-leaf" 
            className="w-full h-full object-contain object-right-top"
          />
        </div>
      </div>

      {/* Information Section */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-[100px] py-[100px] bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 items-start">
          
          {/* Address Column */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-[32px] mb-8 lowercase text-black">just falafel</h4>
            <address className="not-italic space-y-2">
              <p className="text-[14px] leading-[24px] font-light tracking-wide text-neutral-800">
                2111 W Loop S Suite 100
              </p>
              <p className="text-[14px] leading-[24px] font-light tracking-wide text-neutral-800">
                Houston, TX 77027
              </p>
            </address>
          </div>

          {/* Hours Column */}
          <div className="lg:col-span-5 lg:pl-12">
            <h4 className="font-display text-[32px] mb-8 lowercase text-black">business hours</h4>
            <div className="space-y-4">
              <p className="text-[14px] leading-[24px] font-light tracking-wide text-neutral-800 lowercase">
                Sun - Th: 10:30 am to 10 pm
              </p>
              <p className="text-[14px] leading-[24px] font-light tracking-wide text-neutral-800 lowercase">
                Fri: 10:30 am to 11 pm
              </p>
              <p className="text-[14px] leading-[24px] font-light tracking-wide text-neutral-800 lowercase">
                Sat: 9 am to 11 pm
              </p>
            </div>
          </div>

          {/* Credits Column */}
          <div className="lg:col-span-3 flex md:justify-end items-end pb-2">
            <a href="https://71three.com" target="_blank" rel="noopener noreferrer" className="block w-[120px] opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
               <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/71three-logo-7.svg" 
                alt="By 71three" 
                className="w-full h-auto"
              />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
