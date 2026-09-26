'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface CustomCursorProps {
  theme?: 'light' | 'dark';
}

/**
 * Custom Fluid Pointer Animation
 * Provides an organic trailing cursor ring and precision dot
 * that magnetizes and expands over interactive links and buttons.
 */
export function CustomCursor({ theme = 'light' }: CustomCursorProps) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isLight = theme === 'light';
  const dotColor = isLight ? '#D9551F' : '#FF7A47';
  const ringColor = isLight ? 'rgba(217, 85, 31, 0.45)' : 'rgba(255, 122, 71, 0.5)';

  useEffect(() => {
    // Only activate on devices with mouse pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('input') ||
        target?.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Center Dot */}
      <motion.div
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
          scale: isHovering ? 0.6 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
        style={{ backgroundColor: dotColor }}
        className="w-1.5 h-1.5 rounded-full fixed top-0 left-0 pointer-events-none"
      />

      {/* Trailing Elastic Micro-Ring */}
      <motion.div
        animate={{
          x: mousePos.x - 14,
          y: mousePos.y - 14,
          scale: isHovering ? 1.6 : 1,
          borderColor: isHovering ? dotColor : ringColor,
          backgroundColor: isHovering ? (isLight ? 'rgba(217, 85, 31, 0.08)' : 'rgba(255, 122, 71, 0.12)') : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 220, mass: 0.3 }}
        className="w-7 h-7 rounded-full border border-current fixed top-0 left-0 pointer-events-none backdrop-blur-[0.5px]"
      />
    </div>
  );
}

export default CustomCursor;
