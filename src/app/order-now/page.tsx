"use client";

import Header from "@/components/sections/header";
import FooterCTA from "@/components/sections/footer-cta";

export default function OrderNowPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <section className="flex-grow flex items-center justify-center pt-32 pb-20">
        <div className="container px-4 text-center">
          <span className="text-sage font-body text-sm uppercase tracking-[0.3em] mb-4 block">Online Ordering</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-black mb-8">
            Coming Soon
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-body leading-relaxed mb-12">
            We're currently perfecting our online ordering experience to bring Molo Coffee right to your doorstep. Stay tuned for our launch!
          </p>
          <div className="w-24 h-[1px] bg-black/10 mx-auto mb-12"></div>
          <a 
            href="/menu" 
            className="inline-block px-10 py-4 bg-black text-white rounded-full font-body text-sm uppercase tracking-widest hover:bg-sage transition-colors duration-300"
          >
            Explore our Menu
          </a>
        </div>
      </section>

      <FooterCTA />
    </main>
  );
}
