import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Script from "next/script";
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
          <Script
            id="orchids-browser-logs"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
            strategy="afterInteractive"
            data-orchids-project-id="c6c1406a-22ef-4a17-8ced-5c9430975e89"
          />
          {children}
          <VisualEditsMessenger />
        </body>
    </html>
  );
}
