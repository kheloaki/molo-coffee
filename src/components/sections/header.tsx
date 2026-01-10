"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`falafel-header fixed left-0 top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <nav className="header-wrapper relative flex items-center py-[20px] md:py-[30px]">
          {/* Left Menu */}
          <div className="left-menu hidden md:flex flex-1 items-center">
            <ul className="flex gap-[50px]">
              <li>
                <a
                  href="https://jfvegancafe.com/menu/"
                  className={`nav-link text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  } hover:text-[#9d794f]`}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="https://jfvegancafe.com/about/"
                  className={`nav-link text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  } hover:text-[#9d794f]`}
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="falafel-logo flex justify-center items-center px-4">
            <a href="https://jfvegancafe.com/" className="block">
              <img
                src={
                  scrolled
                    ? "https://jfvegancafe.com/wp-content/uploads/2024/08/Falafel_vector.svg"
                    : "https://jfvegancafe.com/wp-content/uploads/2024/09/Logo_vector_white.png"
                }
                alt="Just Falafel"
                className={`transition-all duration-300 ${
                  scrolled ? "w-[80px]" : "w-[120px]"
                } h-auto`}
              />
            </a>
          </div>

          {/* Right Menu */}
          <div className="right-menu hidden md:flex flex-1 items-center justify-end gap-[50px]">
            <ul className="flex gap-[50px]">
              <li>
                <a
                  href="https://jfvegancafe.com/contact/"
                  className={`nav-link text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  } hover:text-[#9d794f]`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://app.squareup.com/gift/ML0TJAV1T1BQ2/order"
                  className={`nav-link text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  } hover:text-[#9d794f]`}
                >
                  Gift Card
                </a>
              </li>
            </ul>
            <ul className="flex">
              <li>
                <a
                  href="https://www.grubhub.com/restaurant/just-falafel-vegan-cafe-2111-west-loop-south-houston/9333792?proof=true"
                  className={`nav-link text-[12px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  } hover:text-[#9d794f] border-b border-transparent hover:border-[#9d794f] pb-1`}
                >
                  Order Now
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="mobile-veggeiburger flex md:hidden cursor-pointer flex-col gap-[6px] absolute right-4 top-1/2 -translate-y-1/2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className={`block w-6 h-[2px] transition-transform duration-300 ${
                scrolled || mobileMenuOpen ? "bg-black" : "bg-white"
              } ${mobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
            ></span>
            <span
              className={`block w-6 h-[2px] transition-opacity duration-300 ${
                scrolled || mobileMenuOpen ? "bg-black" : "bg-white"
              } ${mobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-[2px] transition-transform duration-300 ${
                scrolled || mobileMenuOpen ? "bg-black" : "bg-white"
              } ${mobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
            ></span>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-500 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-32 px-10 pb-10">
          <ul className="flex flex-col gap-6 mb-10">
            <li>
              <a
                href="https://jfvegancafe.com/"
                className="text-[28px] font-display font-normal text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://jfvegancafe.com/menu/"
                className="text-[28px] font-display font-normal text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="https://jfvegancafe.com/about/"
                className="text-[28px] font-display font-normal text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://jfvegancafe.com/contact/"
                className="text-[28px] font-display font-normal text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://app.squareup.com/gift/ML0TJAV1T1BQ2/order"
                className="text-[28px] font-display font-normal text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gift Card
              </a>
            </li>
          </ul>

          <a
            href="https://www.grubhub.com/restaurant/just-falafel-vegan-cafe-2111-west-loop-south-houston/9333792?proof=true"
            className="text-[24px] font-display font-normal text-[#9d794f] mb-12"
          >
            Order Now
          </a>

          <div className="h-[1px] bg-gray-100 w-full mb-10"></div>

          <div className="mobile-address mb-8">
            <p className="font-sans text-[14px] leading-relaxed text-gray-600 tracking-wide uppercase">
              2111 W Loop S Suite 100 <br />
              Houston, TX 77027
            </p>
          </div>

          <div className="mobile-number mb-10">
            <a
              href="tel:713.505.1044"
              className="text-[33px] font-display font-normal text-black tracking-tight"
            >
              713.505.1044
            </a>
          </div>

          <div className="social-logo w-[32px] h-[32px]">
            <a href="https://www.instagram.com/jfvegancafe" target="_blank" rel="noopener noreferrer">
              <img
                src="https://jfvegancafe.com/wp-content/uploads/2024/04/load-more-btn.svg"
                alt="Instagram"
                className="w-full h-full opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;