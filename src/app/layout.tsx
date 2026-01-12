import type { Metadata } from "next";
import "./globals.css";
import { PageLoader } from "@/components/ui/page-loader";

export const metadata: Metadata = {
  title: "Molo Coffee | Fully-Vegan Restaurant in Agadir",
  description: "Elevate your palate, uplift the earth. Molo Coffee offers a premium fully-vegan culinary experience in Agadir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="antialiased">
          <PageLoader />
          {children}
        </body>
    </html>
  );
}
