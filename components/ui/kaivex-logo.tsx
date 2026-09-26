import React from 'react';
import { motion } from 'motion/react';

export interface KaivexLogoProps {
  variant?: 'full' | 'mark' | 'monogram' | 'stacked';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSublabel?: boolean;
  animate?: boolean;
}

/**
 * Official Kaivex Systems Logo (Deep Current, Dual Surface)
 * Follows Brand Guideline v2:
 * - 3 non-converging current wave lines (Fog, Current, Signal Flare)
 * - "Kaivex" wordmark: Capital 'K', lowercase 'aive', terminal accent 'x'
 */
export function KaivexLogo({
  variant = 'full',
  theme = 'dark',
  className = '',
  size = 'md',
  showSublabel = false,
  animate = false,
}: KaivexLogoProps) {
  const isLight = theme === 'light';

  // Palette mapped per Brand Guideline v2
  const colors = isLight
    ? {
        topLine: '#6B655F', // Warm Fog
        midLine: '#2E9C82', // Current, deepened
        botLine: '#D9551F', // Flare, deepened
        text: '#14181B',    // Primary text
        accentX: '#D9551F', // Accent terminal 'x'
        sub: '#6B655F',
        border: 'rgba(20,24,27,0.12)',
        badgeBg: '#E2DAC8',
      }
    : {
        topLine: '#98A6AD', // Fog
        midLine: '#8FE0CE', // Ice Current
        botLine: '#FF7A47', // Signal Flare
        text: '#E7ECEC',    // Primary text
        accentX: '#FF7A47', // Accent terminal 'x'
        sub: '#98A6AD',
        border: 'rgba(255,255,255,0.12)',
        badgeBg: '#121A21',
      };

  // Dimensions based on size
  const scale = {
    sm: { h: 22, textSz: 16, subSz: 8 },
    md: { h: 28, textSz: 20, subSz: 9 },
    lg: { h: 36, textSz: 26, subSz: 11 },
    xl: { h: 48, textSz: 34, subSz: 13 },
  }[size];

  // The authentic 3-line current SVG mark
  const CurrentMarkSvg = ({ width = 48, height = 32 }: { width?: number; height?: number }) => (
    <motion.svg
      viewBox="0 0 82 52"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={animate ? { y: [0, -1.6, 0], opacity: [0.94, 1, 0.94] } : undefined}
      transition={animate ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : undefined}
      className="shrink-0 transition-transform duration-300"
    >
      <g transform="translate(2, 2)">
        {/* Top Wave (Muted/Fog) */}
        <path
          d="M0,10 C13,4 26,16 39,10 C52,4 65,16 78,10"
          stroke={colors.topLine}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* Middle Wave (Ice Current) */}
        <path
          d="M0,26 C13,32 26,20 39,26 C52,32 65,20 78,26"
          stroke={colors.midLine}
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        {/* Bottom Wave (Signal Flare) */}
        <path
          d="M0,42 C13,36 26,48 39,42 C52,36 65,48 78,42"
          stroke={colors.botLine}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
    </motion.svg>
  );

  // Mark-only
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <CurrentMarkSvg
          width={scale.h * 1.5}
          height={scale.h}
        />
      </div>
    );
  }

  // Monogram / App Icon Badge
  if (variant === 'monogram') {
    const badgePad = size === 'sm' ? 'p-1.5' : size === 'lg' ? 'p-3' : 'p-2';
    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl border transition-all ${badgePad} ${className}`}
        style={{
          backgroundColor: colors.badgeBg,
          borderColor: colors.border,
          boxShadow: isLight
            ? '0 2px 8px rgba(0,0,0,0.06)'
            : '0 4px 16px rgba(0,0,0,0.4)',
        }}
      >
        <CurrentMarkSvg
          width={scale.h * 1.3}
          height={scale.h * 0.85}
        />
      </div>
    );
  }

  // Stacked variant (mark on top, wordmark below)
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center gap-2 ${className}`}>
        <CurrentMarkSvg
          width={scale.h * 2}
          height={scale.h * 1.25}
        />
        <div className="flex flex-col items-center leading-none">
          <span
            className="font-bold tracking-tight font-display select-none"
            style={{ color: colors.text, fontSize: scale.textSz }}
          >
            Kaive<span style={{ color: colors.accentX }}>x</span>
          </span>
          {showSublabel && (
            <span
              className="font-mono tracking-[0.25em] uppercase font-medium mt-1 select-none"
              style={{ color: colors.sub, fontSize: scale.subSz }}
            >
              SYSTEMS
            </span>
          )}
        </div>
      </div>
    );
  }

  // Full horizontal lockup (mark + wordmark)
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <CurrentMarkSvg
        width={scale.h * 1.45}
        height={scale.h * 0.92}
      />
      <div className="flex flex-col leading-none">
        <span
          className="font-bold tracking-tight font-display"
          style={{ color: colors.text, fontSize: scale.textSz }}
        >
          Kaive<span style={{ color: colors.accentX }}>x</span>
        </span>
        {showSublabel && (
          <span
            className="font-mono tracking-[0.22em] uppercase font-semibold mt-1"
            style={{ color: colors.sub, fontSize: scale.subSz }}
          >
            SYSTEMS
          </span>
        )}
      </div>
    </div>
  );
}

export default KaivexLogo;
