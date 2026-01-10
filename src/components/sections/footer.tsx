import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-white font-body">
      {/* Top Section with Logo and Sitemap Links */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-[100px] pt-[80px] pb-[40px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <a href="/" className="block w-[140px]">
              <img 
                src="https://jfvegancafe.com/wp-content/uploads/2024/08/Falafel_vector.svg" 
                alt="Just Falafel Logo" 
                className="w-full h-auto"
              />
            </a>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-x-8 lg:gap-x-[50px] gap-y-4">
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
      </div>

      {/* Large Black Marble Section */}
      <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden marble-footer flex items-center">
        {/* Background Texture is handled by global class .marble-footer */}
        <div className="absolute inset-0 z-0 opacity-40" style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/black-mamba.png')",
          backgroundSize: 'cover'
        }}></div>
        
        {/* Real Marble Texture Image for the "Black Gold" effect seen in screenshots */}
        <div className="absolute inset-0 z-1 pointer-events-none">
            <div className="absolute inset-0 bg-[url('https://jfvegancafe.com/wp-content/themes/Justfalafel/assets/images/footer-bg.jpg')] bg-cover bg-center opacity-80"></div>
        </div>

        <div className="container relative z-10 flex flex-col md:flex-row justify-between items-center h-full">
          {/* Contact Number */}
          <div className="flex-1 flex justify-start items-center">
            <a 
              href="tel:713.505.1044" 
              className="font-display text-[40px] md:text-[60px] lg:text-[75px] text-white tracking-normal leading-none"
            >
              713.505.1044
            </a>
          </div>

          {/* Vine Assets & Order Now Link */}
          <div className="relative flex-1 flex justify-end items-center h-full pt-12 md:pt-0">
            {/* The Green Leafy Vines hanging over the marble bar */}
            <div className="absolute top-[-40px] right-[-20%] md:right-0 w-[120%] md:w-[600px] h-[150px] pointer-events-none">
                <img 
                    src="https://jfvegancafe.com/wp-content/themes/Justfalafel/assets/images/leaf-footer.png" 
                    alt="" 
                    className="w-full h-full object-contain object-right-top scale-125 md:scale-100"
                />
            </div>
            
            <a 
              href="https://www.grubhub.com/restaurant/just-falafel-vegan-cafe-2111-west-loop-south-houston/9333792?proof=true"
              className="relative z-20 group"
            >
              <span className="font-display text-[40px] md:text-[60px] lg:text-[75px] text-white tracking-normal leading-none border-b border-white pb-1">
                order now
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Information Section */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-[100px] py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-[32px] mb-8 lowercase">just falafel</h4>
            <div className="space-y-2">
              <p className="text-[14px] leading-[24px] font-light tracking-wide text-neutral-800">
                2111 W Loop S Suite 100
              </p>
              <p className="text-[14px] leading-[24px] font-light tracking-wide text-neutral-800">
                Houston, TX 77027
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-5 lg:pl-12">
            <h4 className="font-display text-[32px] mb-8 lowercase">business hours</h4>
            <div className="space-y-4">
              <div className="flex flex-col">
                <p className="text-[14px] leading-[24px] font-light tracking-wide text-neutral-800 lowercase">
                  Sun - Th: 10:30 am to 10 pm
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[14px] leading-[24px] font-light tracking-wide text-neutral-800 lowercase">
                  Fri: 10:30 am to 11 pm
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[14px] leading-[24px] font-light tracking-wide text-neutral-800 lowercase">
                  Sat: 9 am to 11 pm
                </p>
              </div>
            </div>
          </div>

          {/* By 71three Logo */}
          <div className="lg:col-span-3 flex md:justify-end items-end pb-2">
            <a href="https://71three.com" target="_blank" rel="noopener noreferrer" className="block w-[120px]">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/71three-logo-7.svg" 
                alt="By 71three" 
                className="w-full h-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;