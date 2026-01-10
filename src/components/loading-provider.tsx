"use client";

import { useState, useEffect, createContext, useContext } from "react";
import IntroLoadingAnimation from "./sections/intro-loading-animation";

const LoadingContext = createContext({ isLoading: true });

export const useLoading = () => useContext(LoadingContext);

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    // Check if we've already shown the loader in this session
    const hasShown = sessionStorage.getItem("hasShownIntroLoader");
    if (hasShown) {
      setIsLoading(false);
    }
    setHasChecked(true);
  }, []);

  const handleComplete = () => {
    setIsLoading(false);
  };

  // While checking sessionStorage, render nothing to avoid flash of content
  if (!hasChecked) {
    return (
      <div className="fixed inset-0 bg-white z-[9999]" />
    );
  }

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {isLoading && <IntroLoadingAnimation onComplete={handleComplete} />}
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
