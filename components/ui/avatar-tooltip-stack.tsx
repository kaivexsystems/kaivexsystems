'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bgGradient: string;
}

const team: TeamMember[] = [
  {
    name: 'Ahmad Farooq',
    role: 'Full-Stack Builder & Strategist',
    initials: 'AF',
    bgGradient: 'from-[#D9551F] to-[#FF7A47]',
  },
  {
    name: 'Ayaan Habib',
    role: 'Growth Architecture & Operations',
    initials: 'AH',
    bgGradient: 'from-[#2E9C82] to-[#8FE0CE]',
  },
];

interface AvatarTooltipStackProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export function AvatarTooltipStack({ theme = 'light', className = '' }: AvatarTooltipStackProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center p-2">
        {team.map((member, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={member.name}
              className="relative"
              style={{
                marginLeft: idx === 0 ? 0 : -14,
                zIndex: isHovered ? 30 : idx === 1 ? 20 : 10,
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Avatar Circle */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.12 : 1,
                  y: isHovered ? -3 : 0,
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className={`w-10 h-10 rounded-full border-2 border-[#EBE3D3] dark:border-[#0B0F14] bg-gradient-to-br ${member.bgGradient} flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-md cursor-pointer select-none`}
              >
                {member.initials}
              </motion.div>

              {/* Floating Dark Pill Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -48, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 px-3.5 py-1.5 rounded-xl bg-[#0B0F14] border border-white/15 text-white shadow-xl shadow-black/40 flex flex-col items-center whitespace-nowrap pointer-events-none"
                    style={{ zIndex: 50 }}
                  >
                    <span className="text-xs font-bold leading-tight tracking-tight">
                      {member.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#8FE0CE] tracking-normal leading-tight mt-0.5">
                      {member.role}
                    </span>
                    {/* Tiny arrow pointing down */}
                    <div className="w-2 h-2 bg-[#0B0F14] border-r border-b border-white/15 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <span className="text-[11px] font-mono opacity-70 tracking-wider">
        Solo senior execution &bull; Zero junior handoffs
      </span>
    </div>
  );
}

export default AvatarTooltipStack;
