"use client";

import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Manifesto from "@/components/sections/manifesto";
import DishSlider from "@/components/sections/dish-slider";
import EatSipSplit from "@/components/sections/eat-sip-split";
import GalleryGrid from "@/components/sections/gallery-grid";
import FooterCTA from "@/components/sections/footer-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Manifesto />
      <DishSlider />
      <EatSipSplit />
      <GalleryGrid />
      <FooterCTA />
    </main>
  );
}
