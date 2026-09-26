"use client";

import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AnimatedThemeTogglerProps {
  variant?: "square" | "circle";
  className?: string;
  onToggle?: (isDark: boolean) => void;
}

export function AnimatedThemeToggler({
  variant = "square",
  className = "",
  onToggle,
}: AnimatedThemeTogglerProps) {
  const [isDark, setIsDark] = useState(true);

  const toggle = () => {
    setIsDark(!isDark);
    if (onToggle) onToggle(!isDark);
  };

  return (
    <button
      onClick={toggle}
      className={`relative flex items-center justify-center p-2.5 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${
        variant === "square" ? "rounded-xl" : "rounded-full"
      } ${className}`}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-amber-400"
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-orange-500"
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export function AnimatedThemeTogglerSquareDemo() {
  return (
    <div className="flex justify-center p-6">
      <AnimatedThemeToggler variant="square" />
    </div>
  );
}

export default AnimatedThemeToggler;
