import Header from "@/components/sections/header";
import ContactHero from "@/components/sections/contact-hero";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  );
}
