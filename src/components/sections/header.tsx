"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoPrimary = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/Falafel_vector-1.svg";
  const logoWhite = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/Logo_vector_white-1.png";

  return (
    <header 
      className={`fixed left-0 top-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* Background Gradient Mask Effect */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 bg-gradient-to-b from-black/40 to-transparent h-[200px] ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <div className="container relative z-10 px-4 md:px-8">
        <nav className="flex items-center justify-between py-[25px] md:py-[30px]">
          
          {/* Left Menu */}
          <div className="hidden lg:flex flex-1 items-center">
            <ul className="flex items-center gap-[50px]">
              <li>
                <a 
                  href="/menu" 
                  className={`nav-link transition-colors duration-300 ${isScrolled ? 'text-black hover:text-sage' : 'text-white hover:text-sage'}`}
                >
                  Menu
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className={`nav-link transition-colors duration-300 ${isScrolled ? 'text-black hover:text-sage' : 'text-white hover:text-sage'}`}
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Logo Central */}
          <div className="flex items-center justify-center">
            <a href="/" className="relative block h-[50px] w-[140px] md:h-[65px] md:w-[180px]">
              <Image
                src={isScrolled ? logoPrimary : logoWhite}
                alt="Just Falafel Logo"
                fill
                className="object-contain transition-all duration-500"
                priority
              />
            </a>
          </div>

          {/* Right Menu */}
          <div className="hidden lg:flex flex-1 items-center justify-end">
            <ul className="flex items-center gap-[50px]">
              <li>
                <a 
                  href="/contact" 
                  className={`nav-link transition-colors duration-300 ${isScrolled ? 'text-black hover:text-sage' : 'text-white hover:text-sage'}`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="https://app.squareup.com/gift/ML0TJAV1T1BQ2/order" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`nav-link transition-colors duration-300 ${isScrolled ? 'text-black hover:text-sage' : 'text-white hover:text-sage'}`}
                >
                  Gift Card
                </a>
              </li>
              <li>
                <a 
                  href="https://www.grubhub.com/restaurant/just-falafel-vegan-cafe-2111-west-loop-south-houston/9333792"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`nav-link px-6 py-2 border rounded-full transition-all duration-300 ${
                    isScrolled 
                      ? 'border-black text-black hover:bg-black hover:text-white' 
                      : 'border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  Order Now
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden flex flex-col gap-1.5 z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-8 h-[2px] transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            } ${isScrolled || mobileMenuOpen ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            } ${isScrolled || mobileMenuOpen ? 'bg-black' : 'bg-white'}`}></span>
            <span className={`block w-8 h-[2px] transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            } ${isScrolled || mobileMenuOpen ? 'bg-black' : 'bg-white'}`}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed inset-0 bg-white transition-transform duration-500 ease-in-out lg:hidden pt-[120px] px-8 flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-8">
          <a href="/" className="font-display text-4xl text-black" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/menu" className="font-display text-4xl text-black" onClick={() => setMobileMenuOpen(false)}>Menu</a>
          <a href="/about" className="font-display text-4xl text-black" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="/contact" className="font-display text-4xl text-black" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a 
            href="https://app.squareup.com/gift/ML0TJAV1T1BQ2/order" 
            className="font-display text-4xl text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gift Card
          </a>
          <a 
            href="https://www.grubhub.com/restaurant/just-falafel-vegan-cafe-2111-west-loop-south-houston/9333792"
            className="font-display text-4xl text-sage"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </a>
        </nav>

        <div className="mt-auto pb-12">
          <div className="w-full h-[1px] bg-border mb-8"></div>
          <p className="text-sm font-body uppercase tracking-widest mb-2">Location</p>
          <address className="not-italic text-lg text-muted-foreground font-body">
            2111 W Loop S Suite 100<br />
            Houston, TX 77027
          </address>
          <div className="mt-6">
            <a href="tel:713.505.1044" className="text-3xl font-display text-black">713.505.1044</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .nav-link {
          font-family: var(--font-body);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 500;
          display: inline-block;
          position: relative;
        }
        
        @media (max-width: 1024px) {
          .nav-link { font-size: 14px; }
        }
      `}</style>
    </header>
  );
};

export default Header;