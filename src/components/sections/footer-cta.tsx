import React from 'react';
import Image from 'next/image';

const FooterCTA = () => {
  // Assets from provided list
  const greenVines = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/golden-gate-23.png";
  const developerLogo = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/71three-logo-7.svg";

  return (
    <footer className="footer-section bg-white w-full overflow-hidden">
      {/* Top Footer Navigation / Logo */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pt-20 pb-12 flex flex-col md:flex-row justify-between items-center md:items-end border-b border-transparent">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="w-[80px] md:w-[100px] h-auto">
               <Image 
                src="/logo.png" 
                alt="MD Logo" 
                width={100} 
                height={60} 
                className="w-full h-auto"
              />
            </div>
          </div>
        <nav className="flex gap-8 lg:gap-12">
          <a href="/menu" className="nav-link text-[12px] font-medium tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300">Menu</a>
          <a href="/about" className="nav-link text-[12px] font-medium tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300">About</a>
          <a href="/contact" className="nav-link text-[12px] font-medium tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300">Contact</a>
          <a href="#" className="nav-link text-[12px] font-medium tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300">Gift Card</a>
        </nav>
      </div>

      {/* Black Marble Contact Bar */}
      <div className="relative w-full h-[140px] md:h-[180px] black-marble-footer flex items-center overflow-visible group">
        {/* The Golden Vein Marble effect is handled via CSS class in globals.css or can be inline styled */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1618221823713-3990861cc422?q=80&w=2070&auto=format&fit=crop')",
            backgroundBlendMode: 'multiply'
          }}
        />
        
        {/* Overhanging Vines Asset */}
        <div className="absolute top-[-45px] right-[5%] md:right-[10%] w-[300px] md:w-[500px] z-20 pointer-events-none">
          <Image 
            src={greenVines} 
            alt="vines" 
            width={500} 
            height={100} 
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 w-full relative z-10 flex justify-between items-center">
          <a 
            href="tel:713.505.1044" 
            className="font-accent text-[28px] md:text-[40px] lg:text-[50px] text-white hover:text-gold transition-colors duration-500 font-light"
          >
            713.505.1044
          </a>
          
          <a 
            href="https://www.grubhub.com/restaurant/just-falafel-vegan-cafe-2111-west-loop-south-houston/9333792?proof=true"
            className="font-display italic text-[24px] md:text-[36px] lg:text-[45px] text-white hover:italic underline underline-offset-8 decoration-1 hover:text-gold transition-all duration-500"
          >
            order now
          </a>
        </div>
      </div>

      {/* Information Section */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 items-start">
          
          {/* Address Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display text-[24px] text-black capitalize">just falafel</h4>
            <address className="not-italic text-[14px] leading-[1.8] tracking-[0.05em] text-black font-body font-normal opacity-80">
              2111 W Loop S Suite 100<br />
              Houston, TX 77027
            </address>
          </div>

          {/* Hours Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-display text-[24px] text-black capitalize">business hours</h4>
            <div className="text-[13px] leading-[2] tracking-[0.05em] text-black font-body font-normal opacity-70">
              <p>Sun - Th: 10:30 am to 10 pm</p>
              <p>Fri: 10:30 am to 11 pm</p>
              <p>Sat: 9 am to 11 pm</p>
            </div>
          </div>

          {/* Credits Column */}
          <div className="flex items-center justify-start md:justify-end md:col-span-2 lg:col-span-1 pt-8 lg:pt-0">
            <a href="https://71three.com" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
               <span className="text-[10px] uppercase tracking-widest mr-2 align-middle font-body">by</span>
               <Image 
                src={developerLogo} 
                alt="71three" 
                width={70} 
                height={20} 
                className="inline-block h-4 w-auto grayscale brightness-0"
              />
            </a>
          </div>

        </div>
      </div>
      
      {/* Dynamic Marquee or Scroll Spacer would go here in full site */}
      <div className="h-4 w-full bg-white"></div>
    </footer>
  );
};

export default FooterCTA;