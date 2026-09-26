'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

interface PinnedProcessCardsProps {
  theme: 'light' | 'dark';
}

const steps = [
  {
    step: 'STEP 01',
    title: 'Diagnostic call',
    description: 'A 15-minute diagnostic session to audit your current pipeline, conversion bottlenecks, and economics.',
    tilt: -3.5,
    pinColor: '#D9551F',
    pinColorDark: '#FF7A47',
  },
  {
    step: 'STEP 02',
    title: 'Custom roadmap',
    description: 'We engineer your custom qualification flow, messaging architecture, and outbound sprint blueprint.',
    tilt: 4.2,
    pinColor: '#2E9C82',
    pinColorDark: '#8FE0CE',
  },
  {
    step: 'STEP 03',
    title: 'Build & launch',
    description: 'We write the copy, code the infrastructure, and ship your live client acquisition system in 14 days.',
    tilt: -2.8,
    pinColor: '#14181B',
    pinColorDark: '#E7ECEC',
  },
];

export function PinnedProcessCards({ theme }: PinnedProcessCardsProps) {
  const isLight = theme === 'light';
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const colors = isLight
    ? {
        cardBg: '#E2DAC8',
        cardBorder: 'rgba(20, 24, 27, 0.12)',
        cardShadow: '0 10px 25px -5px rgba(20, 24, 27, 0.08), 0 8px 10px -6px rgba(20, 24, 27, 0.05)',
        cardShadowHover: '0 20px 35px -5px rgba(20, 24, 27, 0.16), 0 12px 16px -6px rgba(20, 24, 27, 0.1)',
        text: '#14181B',
        textMuted: '#6B655F',
        line: 'rgba(107, 101, 95, 0.35)',
      }
    : {
        cardBg: '#121A21',
        cardBorder: 'rgba(255, 255, 255, 0.12)',
        cardShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
        cardShadowHover: '0 25px 45px -5px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 122, 71, 0.15)',
        text: '#E7ECEC',
        textMuted: '#98A6AD',
        line: 'rgba(255, 255, 255, 0.2)',
      };

  return (
    <div className="relative w-full py-8">
      {/* Dashed SVG Connecting Line between card pushpins on desktop */}
      <svg
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {/* Line 1 -> 2 */}
        <path
          d="M 180,60 C 260,110 320,30 430,70"
          fill="none"
          stroke={colors.line}
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        {/* Line 2 -> 3 */}
        <path
          d="M 470,70 C 560,120 620,30 730,60"
          fill="none"
          stroke={colors.line}
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {steps.map((item, idx) => {
          const isHovered = hoveredIndex === idx;
          const pin = isLight ? item.pinColor : item.pinColorDark;

          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                rotate: isHovered ? 0 : item.tilt,
                y: isHovered ? -10 : 0,
              }}
              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.cardBorder,
                boxShadow: isHovered ? colors.cardShadowHover : colors.cardShadow,
                transformOrigin: 'top center',
              }}
              className="relative p-7 pt-9 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px]"
            >
              {/* Realistic 3D Pushpin Marker at top center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                <div
                  style={{
                    backgroundColor: pin,
                    boxShadow: `0 3px 6px rgba(0,0,0,0.35), inset 0 1px 2px rgba(255,255,255,0.4)`,
                  }}
                  className="w-4 h-4 rounded-full border border-black/20"
                />
                <div className="w-1.5 h-1.5 bg-black/40 rounded-full blur-[0.5px] mt-0.5" />
              </div>

              <div>
                <span
                  style={{ color: isLight ? (idx === 1 ? '#D9551F' : idx === 0 ? '#2E9C82' : '#14181B') : (idx === 1 ? '#FF7A47' : idx === 0 ? '#8FE0CE' : '#E7ECEC') }}
                  className="font-mono text-xs font-bold uppercase tracking-wider block mb-3"
                >
                  {item.step}
                </span>
                <h3
                  style={{ color: colors.text }}
                  className="text-xl font-bold font-serif tracking-tight mb-2.5"
                >
                  {item.title}
                </h3>
                <p
                  style={{ color: colors.textMuted }}
                  className="text-xs sm:text-sm leading-relaxed"
                >
                  {item.description}
                </p>
              </div>

              {/* Pinhole dot on card */}
              <div className="w-1.5 h-1.5 rounded-full bg-black/20 mx-auto mt-4" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default PinnedProcessCards;
