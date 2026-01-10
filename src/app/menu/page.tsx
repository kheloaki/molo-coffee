import Header from "@/components/sections/header";
import MenuIntro from "@/components/sections/menu-intro";
import MenuStarters from "@/components/sections/menu-starters";
import MenuMain from "@/components/sections/menu-main";
import MenuSoupsSides from "@/components/sections/menu-soups-sides";
import MenuFriesDesserts from "@/components/sections/menu-fries-desserts";
import FooterCTA from "@/components/sections/footer-cta";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <MenuIntro />
      <MenuStarters />
      <MenuMain />
      <MenuSoupsSides />
      <MenuFriesDesserts />
      <FooterCTA />
    </main>
  );
}
