import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-white font-body">
      {/* Divider with Diamond */}
      <div className="container mx-auto px-8">
        <div className="divider-diamond my-16 md:my-24"></div>
      </div>

      {/* Secondary Ribbon Navigation / Logo Area */}
      <div className="container mx-auto px-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-[120px] md:w-[150px]">
            <a href="/">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/Falafel_vector-1.svg" 
                alt="just falafel logo" 
                width={150} 
                height={60} 
                className="w-full h-auto"
              />
            </a>
          </div>
          <nav className="flex items-center gap-6 md:gap-12">
            <a href="/menu" className="nav-link text-[12px] tracking-[0.15em] font-medium hover:text-accent transition-colors">Menu</a>
            <a href="/about" className="nav-link text-[12px] tracking-[0.15em] font-medium hover:text-accent transition-colors">About</a>
            <a href="/contact" className="nav-link text-[12px] tracking-[0.15em] font-medium border-b border-black pb-1">Contact</a>
            <a href="https://app.squareup.com/gift/ML0TJAV1T1BQ2/order" className="nav-link text-[12px] tracking-[0.15em] font-medium hover:text-accent transition-colors">Gift Card</a>
          </nav>
        </div>
      </div>

      {/* Order Now CTA Strip with Marble Background and Ivy */}
      <section className="relative w-full h-[200px] md:h-[160px] flex items-center overflow-hidden">
        {/* Black Marble Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://71three.sfo3.cdn.digitaloceanspaces.com/jf/dark-marble.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Ivy Leaves Overlay */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-10 pointer-events-none translate-y-[-10%] md:translate-y-[-20%] translate-x-[5%]">
            <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/branch_final-min-8.png" 
                alt="ivy decoration" 
                width={600} 
                height={200}
                className="w-full h-auto object-contain object-right opacity-90"
            />
        </div>

        <div className="container mx-auto px-8 relative z-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white">
            <div className="text-[28px] md:text-[36px] font-display font-light tracking-wide italic">
              <a href="tel:713.505.1044" className="hover:text-accent transition-colors">713.505.1044</a>
            </div>
            <div className="text-[32px] md:text-[44px] font-display font-light border-b border-white pb-1 leading-none hover:text-accent hover:border-accent transition-all cursor-pointer">
              <a href="https://www.grubhub.com/restaurant/just-falafel-vegan-cafe-2111-west-loop-south-houston/9333792?proof=true">
                order now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Info */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Column 1: Address */}
            <div>
              <h4 className="font-display text-[22px] mb-6 capitalize italic">just falafel</h4>
              <p className="text-[#5a5a5a] text-[15px] leading-relaxed">
                2111 W Loop S Suite 100<br />
                Houston, TX 77027
              </p>
            </div>

            {/* Column 2: Hours */}
            <div>
              <h4 className="font-display text-[22px] mb-6 capitalize italic">business hours</h4>
              <p className="text-[#5a5a5a] text-[15px] leading-7">
                Sun - Th: 10:30 am to 10 pm<br />
                Fri: 10:30 am to 11 pm<br />
                Sat: 9 am to 11 pm
              </p>
            </div>

            {/* Column 3: Secondary Logo / Creator Credits */}
            <div className="flex flex-col items-start md:items-end justify-end">
              <div className="w-[100px] mb-4">
                <a href="https://71three.com" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/svgs/71three-logo-5.svg" 
                    alt="71three logo" 
                    width={100} 
                    height={40} 
                    className="w-full h-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </a>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#5a5a5a] opacity-50">
                &copy; {new Date().getFullYear()} Just Falafel. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;