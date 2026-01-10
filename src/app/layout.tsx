import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import IntroLoadingAnimation from "@/components/sections/intro-loading-animation";

export const metadata: Metadata = {
  title: "JF Vegan Cafe | Fully-Vegan Restaurant in Houston",
  description: "Elevate your palate, uplift the earth. JF Vegan Cafe offers a premium fully-vegan culinary experience in Houston.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <IntroLoadingAnimation />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
