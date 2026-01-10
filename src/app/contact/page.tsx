import Header from "@/components/sections/header";
import ContactHero from "@/components/sections/contact-hero";
import ContactForm from "@/components/sections/contact-form";
import FooterCTA from "@/components/sections/footer-cta";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <ContactForm />
      <FooterCTA />
    </main>
  );
}
