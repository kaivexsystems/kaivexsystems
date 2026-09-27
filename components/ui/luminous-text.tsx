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
 *
 * Implemented using pure inline font inheritance with CSS background-clip: text.
 * This guarantees 100% pixel-perfect typographic baseline alignment with surrounding text,
 * preventing any vertical drop or misalignment.
 */
export function LuminousText({ text, theme = 'light', className = '' }: LuminousTextProps) {
  const isLight = theme === 'light';

  // Base brand colors and metallic luminous sheen highlights
  const baseColor = isLight ? '#D9551F' : '#FF7A47';
  const shimmerColor = isLight ? '#FFE7DB' : '#FFF6F0';

  return (
    <span
      className={`inline font-inherit select-none animate-luminous-sweep ${className}`}
      style={{
        backgroundImage: `linear-gradient(110deg, ${baseColor} 20%, ${shimmerColor} 48%, ${baseColor} 76%)`,
        backgroundSize: '250% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline',
        verticalAlign: 'baseline',
      }}
    >
      {text}
    </span>
  );
}

export default LuminousText;
