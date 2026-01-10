import React from 'react';
import Image from 'next/image';

const MenuIntro = () => {
  const categories = [
    { name: 'Starters', href: '#starters' },
    { name: 'Main', href: '#main' },
    { name: 'Soups', href: '#soups' },
    { name: 'Sides', href: '#sides' },
    { name: 'Friendz Fries', href: '#friendz-fries' },
    { name: 'Desserts', href: '#desserts' },
    { name: 'Coffee & Tea', href: '#coffee-tea' },
    { name: 'Mocktails', href: '#mocktails' },
  ];

  const pdfUrl = "https://71three.sfo3.cdn.digitaloceanspaces.com/jf-regular-menu.pdf";
  const downloadIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/download-sign-3.svg";

  return (
    <section className="menu-intro-section md:pt-[160px] pt-[100px] overflow-hidden bg-white">
      <div className="container relative">
        <div className="flex flex-col items-center">
          {/* Headline */}
          <h1 className="section-headline text-[48px] md:text-[60px] leading-tight text-center text-black font-display tracking-[0.1em] lowercase mb-6">
            menu
          </h1>

          {/* Category Filter Bar */}
          <div className="menu-tabs w-full">
            <ul className="mx-auto flex flex-wrap justify-center gap-[10px] mt-[25px] max-w-[842px]">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="pill-button block text-center min-w-[100px] hover:bg-black hover:text-white transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PDF Links - Desktop */}
          <div className="hidden md:flex w-full justify-end mt-[105px] mb-[25px]">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-pdf flex gap-2 items-center group cursor-pointer"
            >
              <div className="relative w-[16px] h-[20px]">
                <Image 
                  src={downloadIcon} 
                  alt="download icon" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[14px] leading-[17px] font-medium font-body uppercase tracking-[0.2em] text-black">
                view pdf
              </span>
            </a>
          </div>

          {/* PDF Links - Mobile */}
          <div className="md:hidden flex justify-center mt-[30px] mb-[25px]">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-menu relative flex gap-2 items-center"
            >
              <span className="text-[14px] leading-[17px] font-medium font-body uppercase tracking-[0.2em] text-black border-b border-black pb-1">
                quick view menu
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Spacer line for the next section transition if needed */}
      <div className="menu-top-js h-0 w-full" />
    </section>
  );
};

export default MenuIntro;