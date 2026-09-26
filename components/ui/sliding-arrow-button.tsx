'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface SlidingArrowButtonProps {
  href: string;
  label?: string;
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'default' | 'compact';
}

/**
 * Sliding Arrow CTA Button
 * Replicates Screen Recording 20260924-1114-55:
 * On hover, the arrow icon circle slides across the pill button
 * and rotates 45° to point diagonally up-right (↗).
 */
export function SlidingArrowButton({
  href,
  label = 'Book a 15-Minute Diagnostic Call',
  theme = 'light',
  className = '',
  size = 'default',
}: SlidingArrowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isLight = theme === 'light';

  const isCompact = size === 'compact';

  const styles = isLight
    ? {
        bg: '#14181B',
        text: '#FFFFFF',
        circleBg: '#D9551F',
        circleColor: '#FFFFFF',
        shadow: '0 6px 24px rgba(20, 24, 27, 0.2)',
        shadowHover: '0 8px 30px rgba(217, 85, 31, 0.35)',
      }
    : {
        bg: '#FFFFFF',
        text: '#0B0F14',
        circleBg: '#FF7A47',
        circleColor: '#0B0F14',
        shadow: '0 6px 24px rgba(255, 255, 255, 0.15)',
        shadowHover: '0 8px 32px rgba(255, 122, 71, 0.35)',
      };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
      style={{
        backgroundColor: styles.bg,
        color: styles.text,
        boxShadow: isHovered ? styles.shadowHover : styles.shadow,
      }}
      className={`group relative inline-flex items-center justify-between rounded-xl font-bold font-sans tracking-wide transition-all duration-300 overflow-hidden select-none cursor-pointer ${
        isCompact ? 'px-4 py-2 text-xs gap-3' : 'px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base gap-4'
      } ${className}`}
    >
      {/* Label */}
      <span className="relative z-10 font-bold transition-transform duration-300 group-hover:translate-x-0.5">
        {label}
      </span>

      {/* Sliding Arrow Circle Badge */}
      <motion.div
        animate={{
          x: isHovered ? 4 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          backgroundColor: styles.circleBg,
          color: styles.circleColor,
        }}
        className={`relative z-10 flex items-center justify-center rounded-lg shadow-sm transition-transform duration-300 shrink-0 ${
          isCompact ? 'w-5 h-5' : 'w-6 h-6'
        }`}
      >
        <motion.div
          animate={{
            rotate: isHovered ? -45 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center"
        >
          <ArrowRight className={isCompact ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
        </motion.div>
      </motion.div>
    </motion.a>
  );
}

export default SlidingArrowButton;
