import Header from "@/components/sections/header";
import AboutHero from "@/components/sections/about-hero";
import AboutIntro from "@/components/sections/about-intro";
import AboutMission from "@/components/sections/about-mission";
import AboutValues from "@/components/sections/about-values";
import AboutDifferentiation from "@/components/sections/about-differentiation";
import AboutCTA from "@/components/sections/about-cta";
import FooterCTA from "@/components/sections/footer-cta";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutIntro />
      <AboutMission />
      <AboutValues />
      <AboutDifferentiation />
      <AboutCTA />
      <FooterCTA />
    </main>
  );
}
