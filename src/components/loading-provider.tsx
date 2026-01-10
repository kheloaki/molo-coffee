"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import IntroLoadingAnimation from "./sections/intro-loading-animation";

const LoadingContext = createContext({ isLoading: true });

export const useLoading = () => useContext(LoadingContext);

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasChecked, setHasChecked] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show the loader on every page load/navigation
    setIsLoading(true);
    setHasChecked(true);
  }, [pathname]);

  const handleComplete = () => {
    setIsLoading(false);
  };

  // Initial mount check
  if (!hasChecked) {
    return (
      <div className="fixed inset-0 bg-white z-[9999]" />
    );
  }

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {isLoading && <IntroLoadingAnimation onComplete={handleComplete} key={pathname} />}
      <div 
        style={{ 
          opacity: isLoading ? 0 : 1,
          visibility: isLoading ? "hidden" : "visible",
          transition: "opacity 0.8s ease-in-out"
        }}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  );
}
