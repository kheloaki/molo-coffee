"use client";

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();
  const isDarkHero = pathname === '/' || pathname === '/about';
  const textColor = isDarkHero ? 'text-white' : 'text-foreground';
  const logoSrc = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/Falafel_vector-1.svg";

  return (
    <header className="falafel-header absolute left-0 top-0 w-full z-40 bg-transparent">
      <div className="container">
        <nav className="header-wrapper relative flex items-center py-[30px]">
          {/* Left Menu */}
          <div className="left-menu header-menu flex-1">
            <ul id="menu-header-menu-left" className="flex gap-[50px] items-center">
              <li className="menu-item list-none">
                <Link 
                  href="/menu" 
                  className={`nav-link ${textColor} hover:text-accent transition-colors duration-300 ${pathname === '/menu' ? 'relative after:content-[\'\'] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[1px] after:bg-current' : ''}`}
                >
                  Menu
                </Link>
              </li>
              <li className="menu-item list-none">
                <Link 
                  href="/about" 
                  className={`nav-link ${textColor} hover:text-accent transition-colors duration-300 ${pathname === '/about' ? 'relative after:content-[\'\'] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[1px] after:bg-current' : ''}`}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Centered Logo */}
          <div className="falafel-logo px-10">
            <Link className="block fl-logo2" href="/">
              <Image 
                src={logoSrc} 
                alt="Just Falafel Logo" 
                width={120} 
                height={60} 
                className={`w-full h-auto max-w-[124px] ${isDarkHero ? 'brightness-0 invert' : ''}`}
                priority
              />
            </Link>
          </div>

          {/* Right Menu */}
          <div className="right-menu header-menu flex gap-[50px] flex-1 justify-end items-center">
            <ul id="menu-header-menu-right" className="flex gap-[50px] items-center">
              <li className="menu-item list-none">
                <Link 
                  href="/contact" 
                  className={`nav-link ${textColor} hover:text-accent transition-colors duration-300 ${pathname === '/contact' ? 'relative after:content-[\'\'] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[1px] after:bg-current' : ''}`}
                >
                  Contact
                </Link>
              </li>
              <li className="menu-item list-none">
                <a 
                  href="https://app.squareup.com/gift/ML0TJAV1T1BQ2/order" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`nav-link ${textColor} hover:text-accent transition-colors duration-300`}
                >
                  Gift Card
                </a>
              </li>
            </ul>
            <ul className="flex items-center">
              <li className="menu-item list-none">
                <a 
                  href="https://www.grubhub.com/restaurant/just-falafel-vegan-cafe-2111-west-loop-south-houston/9333792?proof=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`nav-link ${textColor} hover:text-accent transition-colors duration-300 underline underline-offset-8 decoration-1`}
                >
                  Order Now
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Trigger (Hidden on Desktop) */}
          <div className="mobile-veggeiburger cursor-pointer hidden flex-col gap-[6px] absolute right-0 z-50 lg:hidden">
            <span className={`w-[25px] h-[1px] ${isDarkHero ? 'bg-white' : 'bg-foreground'}`}></span>
            <span className={`w-[25px] h-[1px] ${isDarkHero ? 'bg-white' : 'bg-foreground'}`}></span>
          </div>
        </nav>
      </div>

      <style jsx global>{`
        .nav-link {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          white-space: nowrap;
        }
        
        @media (max-width: 1024px) {
          .left-menu, .right-menu {
            display: none;
          }
          .mobile-veggeiburger {
            display: flex;
          }
          .header-wrapper {
            justify-content: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
