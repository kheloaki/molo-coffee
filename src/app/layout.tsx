import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import LoadingProvider from "@/components/loading-provider";
import Script from "next/script";

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
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="c6c1406a-22ef-4a17-8ced-5c9430975e89"
        />
        <LoadingProvider>
          {children}
        </LoadingProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
