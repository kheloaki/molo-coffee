import React from "react";

/**
 * AboutHero Section
 * 
 * Features:
 * - Full-screen background video
 * - Overlaid centered headline "full of flavor, free of cruelty"
 * - Absolute positioning to allow the header to sit on top
 * - Bottom border radius (30px) as seen in the HTML structure
 */
const AboutHero: React.FC = () => {
  // Video asset from provided list
  const videoSrc = "https://71three.sfo3.cdn.digitaloceanspaces.com/jf/about_web.mp4";
  
  // Logo overlay for the loading state/initial brand presence
  const logoWhite = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6c1406a-22ef-4a17-8ced-5c9430975e89-jfvegancafe-com/assets/images/Logo_vector_white-1.png";

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-white">
      {/* 
          Banner Wrapper 
          Using relative positioning to contain absolute elements 
      */}
      <div className="relative h-full w-full">
        
        {/* Loading/Center Logo - Matches HTML 'falafel-logo-loading' */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 md:top-[45%] pointer-events-none opacity-0 transition-opacity duration-700 animate-in fade-in-0 fill-mode-forwards">
          <div className="w-[120px] md:w-[200px]">
            <img 
              src={logoWhite} 
              alt="Just Falafel Logo" 
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Video Background Container */}
        <div className="relative h-full w-full overflow-hidden rounded-b-[30px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            id="bannerVideo"
            className="h-full w-full object-cover"
            poster="" // No poster provided in assets
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Subtle overlay to ensure text readability if needed, though high-level design suggests high contrast */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* 
            Headline Overlay
            Text: "full of flavor, free of cruelty"
            Font: Cormorant Garamond (defined as --font-display)
        */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="max-w-[800px] text-center">
            <h1 
              className="text-white font-display lowercase leading-[1.1] tracking-normal"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.125rem)",
                fontWeight: 400,
                textShadow: "0px 2px 10px rgba(0,0,0,0.15)"
              }}
            >
              full of flavor, free of cruelty
            </h1>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;