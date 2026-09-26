'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

interface SignalFlickerTextProps {
  text: string;
  theme?: 'light' | 'dark';
  className?: string;
  color?: string;
}

/**
 * Signal Frequency / Light in Motion Typography
 * Replicates Screen Recording 20260924-1111-07 ("Visual Frequency Test / Idea in Motion"):
 * Individual characters react dynamically to hover with outline-to-fill signal flicker,
 * subtle micro-offsets, and chromatic glow in the brand accent color.
 */
export function SignalFlickerText({
  text,
  theme = 'light',
  className = '',
  color,
}: SignalFlickerTextProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const isLight = theme === 'light';

  const defaultColor = color || (isLight ? '#D9551F' : '#FF7A47');
  const glowColor = isLight ? 'rgba(217, 85, 31, 0.4)' : 'rgba(255, 122, 71, 0.6)';

  return (
    <span
      className={`inline-flex flex-wrap items-baseline select-none cursor-pointer relative ${className}`}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {text.split('').map((char, i) => {
        const isHovered = hoveredIdx === i;
        const isNeighbor = hoveredIdx !== null && Math.abs(hoveredIdx - i) === 1;

        if (char === ' ') {
          return <span key={i} className="inline-block w-[0.28em]">&nbsp;</span>;
        }

        return (
          <motion.span
            key={i}
            onMouseEnter={() => setHoveredIdx(i)}
            animate={
              isHovered
                ? {
                    y: [0, -3, 1, 0],
                    opacity: [1, 0.6, 1, 0.85, 1],
                    scale: 1.06,
                    textShadow: `0 0 16px ${glowColor}, 0 0 28px ${glowColor}`,
                  }
                : isNeighbor
                ? {
                    y: [0, -1.5, 0],
                    opacity: [1, 0.75, 1],
                    scale: 1.02,
                    textShadow: `0 0 10px ${glowColor}`,
                  }
                : {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    textShadow: 'none',
                  }
            }
            transition={{
              duration: 0.28,
              ease: 'easeOut',
            }}
            style={{
              color: defaultColor,
              WebkitTextStroke: isHovered ? `1px ${defaultColor}` : '0px transparent',
            }}
            className="inline-block font-inherit transition-colors duration-150 relative"
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}

export default SignalFlickerText;
