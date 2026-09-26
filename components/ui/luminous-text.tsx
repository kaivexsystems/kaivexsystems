'use client';

import React from 'react';

interface LuminousTextProps {
  text: string;
  theme?: 'light' | 'dark';
  className?: string;
}

/**
 * Continuous Luminous Typography ("Light in Motion")
 * Replicates Screen Recording "Light in Motion.mp4" (Continuous Luminous Typography):
 * A smooth, uninterrupted light reflection wave glides continuously across the text
 * from left to right, creating a luminous metallic sheen with zero stutter.
 */
export function LuminousText({ text, theme = 'light', className = '' }: LuminousTextProps) {
  const isLight = theme === 'light';

  // Base colors and luminous reflection gradients
  const baseColor = isLight ? '#D9551F' : '#FF7A47';
  const shimmerColor = isLight ? '#FFFFFF' : '#FFF1E8';

  return (
    <span
      className={`relative inline-block font-inherit overflow-hidden select-none ${className}`}
      style={{
        color: baseColor,
      }}
    >
      {/* Base text */}
      <span className="relative z-10">{text}</span>

      {/* The Continuous Luminous Sheen Layer */}
      <span
        aria-hidden="true"
        className="absolute inset-0 z-20 pointer-events-none select-none bg-clip-text text-transparent animate-luminous-sweep"
        style={{
          backgroundImage: `linear-gradient(110deg, transparent 20%, ${shimmerColor} 48%, transparent 75%)`,
          backgroundSize: '250% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mixBlendMode: isLight ? 'overlay' : 'screen',
        }}
      >
        {text}
      </span>
    </span>
  );
}

export default LuminousText;
