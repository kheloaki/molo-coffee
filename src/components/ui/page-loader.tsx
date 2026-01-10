"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loader after a set time or when the window is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, 2500); // 2.5 seconds total for the sequence
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timeout in case load event doesn't fire as expected
      const timeout = setTimeout(handleLoad, 4000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

  const images = [
    "https://jfvegancafe.com/wp-content/uploads/2025/custom/falafel1.jpg",
    "https://jfvegancafe.com/wp-content/uploads/2025/custom/falafel2.jpg",
    "https://jfvegancafe.com/wp-content/uploads/2025/custom/falafel3.jpg",
    "https://jfvegancafe.com/wp-content/uploads/2025/custom/falafel4.jpg",
  ];

  return (
    <AnimatePresence>
      {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          >
            <div className="relative w-56 h-56 md:w-80 md:h-80 flex items-center justify-center">
              {/* Image Sequence Container */}
              <div className="absolute inset-0 overflow-hidden rounded-full shadow-lg">
                {images.map((src, index) => (
                  <motion.img
                    key={src}
                    src={src}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      times: [0, 0.2, 0.8, 1],
                      delay: index * 0.4,
                      repeat: 0,
                    }}
                    alt=""
                  />
                ))}
              </div>
              
              {/* Logo - Fades in at the same position */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="z-10"
              >
                <img 
                  className="w-40 md:w-52" 
                  src="/logo.png" 
                  alt="Logo" 
                />
              </motion.div>
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
