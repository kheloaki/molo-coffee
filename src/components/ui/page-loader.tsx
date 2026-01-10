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
          <div className="relative w-full h-full">
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
                  duration: 1,
                  times: [0, 0.2, 0.8, 1],
                  delay: index * 0.5,
                  repeat: 0,
                }}
                alt=""
              />
            ))}
            
            {/* Logo Vector Overlay */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <img 
                className="w-48 brightness-0" 
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
