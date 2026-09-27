'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Filter,
  Calendar,
  Zap,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const LinkedinIcon = ({ className = 'w-4 h-4', style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface SystemsArchitectureFlowProps {
  theme?: 'light' | 'dark';
}

export function SystemsArchitectureFlow({ theme = 'light' }: SystemsArchitectureFlowProps) {
  const isLight = theme === 'light';
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Brand Palette Tokens
  const c = isLight
    ? {
        cardBg: '#E2DAC8',
        cardBorder: 'rgba(20, 24, 27, 0.1)',
        cardBorderHover: '#D9551F',
        text: '#14181B',
        textMuted: '#6B655F',
        flare: '#D9551F',
        current: '#2E9C82',
        badgeBg: 'rgba(46, 156, 130, 0.12)',
        badgeBorder: 'rgba(46, 156, 130, 0.25)',
        coreBg: '#DDD4BF',
        pulseGlow: 'rgba(217, 85, 31, 0.18)',
      }
    : {
        cardBg: '#121A21',
        cardBorder: 'rgba(255, 255, 255, 0.08)',
        cardBorderHover: '#FF7A47',
        text: '#E7ECEC',
        textMuted: '#98A6AD',
        flare: '#FF7A47',
        current: '#8FE0CE',
        badgeBg: 'rgba(143, 224, 206, 0.12)',
        badgeBorder: 'rgba(143, 224, 206, 0.25)',
        coreBg: '#17222B',
        pulseGlow: 'rgba(255, 122, 71, 0.22)',
      };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase"
          style={{ backgroundColor: c.badgeBg, color: c.current, border: `1px solid ${c.badgeBorder}` }}
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          SYSTEMS BLUEPRINT // ARCHITECTURE FLOW
        </div>
        <h2 style={{ color: c.text }} className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
          How the growth infrastructure operates
        </h2>
        <p style={{ color: c.textMuted }} className="max-w-2xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
          An engineered, automated pipeline converting cold market signals into booked, pre-qualified C-suite calls.
        </p>
      </div>

      {/* Schematic Diagram Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
          
          {/* 1. INPUT CHANNELS (Cols 1-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider font-bold mb-1 flex items-center gap-2" style={{ color: c.textMuted }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.flare }} />
              01 // Outbound &amp; Inbound Signals
            </div>

            {/* Input Card A: Dedicated SMTP */}
            <div
              onMouseEnter={() => setActiveNode(1)}
              onMouseLeave={() => setActiveNode(null)}
              style={{ backgroundColor: c.cardBg, borderColor: activeNode === 1 ? c.cardBorderHover : c.cardBorder }}
              className="p-4 rounded-xl border transition-all duration-300 shadow-sm hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: isLight ? 'rgba(217,85,31,0.1)' : 'rgba(255,122,71,0.15)' }}>
                  <Mail style={{ color: c.flare }} className="w-4 h-4" />
                </div>
                <h4 style={{ color: c.text }} className="text-sm font-serif font-bold">
                  Dedicated Multi-Domain SMTP
                </h4>
              </div>
              <p style={{ color: c.textMuted }} className="text-xs font-sans">
                Secondary domain isolation with 99.4% inbox delivery algorithms.
              </p>
            </div>

            {/* Input Card B: LinkedIn Authority */}
            <div
              onMouseEnter={() => setActiveNode(2)}
              onMouseLeave={() => setActiveNode(null)}
              style={{ backgroundColor: c.cardBg, borderColor: activeNode === 2 ? c.cardBorderHover : c.cardBorder }}
              className="p-4 rounded-xl border transition-all duration-300 shadow-sm hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: isLight ? 'rgba(46,156,130,0.1)' : 'rgba(143,224,206,0.15)' }}>
                  <LinkedinIcon style={{ color: c.current }} className="w-4 h-4" />
                </div>
                <h4 style={{ color: c.text }} className="text-sm font-serif font-bold">
                  C-Suite Authority Ghostwriting
                </h4>
              </div>
              <p style={{ color: c.textMuted }} className="text-xs font-sans">
                Algorithmic organic distribution targeting active founders and decision-makers.
              </p>
            </div>

            {/* Input Card C: Speed-to-Lead Inbound */}
            <div
              onMouseEnter={() => setActiveNode(3)}
              onMouseLeave={() => setActiveNode(null)}
              style={{ backgroundColor: c.cardBg, borderColor: activeNode === 3 ? c.cardBorderHover : c.cardBorder }}
              className="p-4 rounded-xl border transition-all duration-300 shadow-sm hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: isLight ? 'rgba(217,85,31,0.1)' : 'rgba(255,122,71,0.15)' }}>
                  <Zap style={{ color: c.flare }} className="w-4 h-4" />
                </div>
                <h4 style={{ color: c.text }} className="text-sm font-serif font-bold">
                  Sub-60s Inbound Dispatch
                </h4>
              </div>
              <p style={{ color: c.textMuted }} className="text-xs font-sans">
                Instant SMS and VoIP auto-textback engaging leads while intent is hottest.
              </p>
            </div>
          </div>

          {/* CONNECTOR 1 (Desktop Arrow) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
            <div className="w-full flex items-center justify-center relative">
              <div className="h-[2px] w-full" style={{ backgroundColor: c.cardBorder }} />
              <ArrowRight style={{ color: c.flare }} className="w-5 h-5 absolute right-0 translate-x-1" />
            </div>
          </div>

          {/* 2. CORE ENGINE NODE (Cols 5-7) */}
          <div className="lg:col-span-3">
            <div className="text-xs font-mono uppercase tracking-wider font-bold mb-2 flex items-center gap-2" style={{ color: c.textMuted }}>
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: c.current }} />
              02 // The Kaivex Core
            </div>

            <div
              style={{
                backgroundColor: c.coreBg,
                borderColor: c.cardBorder,
                boxShadow: `0 0 35px ${c.pulseGlow}`,
              }}
              className="p-6 rounded-2xl border relative overflow-hidden space-y-4"
            >
              {/* Subtle top scanline */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, ${c.flare}, ${c.current})` }}
              />

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider" style={{ color: c.current }}>
                  QUALIFICATION ENGINE
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>

              {/* Engine Inner Feature 1 */}
              <div className="flex items-start gap-3 p-3 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
                <Filter style={{ color: c.flare }} className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <h5 style={{ color: c.text }} className="text-xs font-bold font-sans">
                    Interactive Scorecard Logic
                  </h5>
                  <p style={{ color: c.textMuted }} className="text-[11px] leading-tight mt-0.5">
                    Prospects complete a 6-point diagnostic auditing revenue, stack, and bottlenecks.
                  </p>
                </div>
              </div>

              {/* Engine Inner Feature 2 */}
              <div className="flex items-start gap-3 p-3 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
                <ShieldCheck style={{ color: c.current }} className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <h5 style={{ color: c.text }} className="text-xs font-bold font-sans">
                    Tire-Kicker Elimination Gate
                  </h5>
                  <p style={{ color: c.textMuted }} className="text-[11px] leading-tight mt-0.5">
                    Strict budget and qualification thresholds ensure zero wasted founder hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONNECTOR 2 (Desktop Arrow) */}
          <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
            <div className="w-full flex items-center justify-center relative">
              <div className="h-[2px] w-full" style={{ backgroundColor: c.cardBorder }} />
              <ArrowRight style={{ color: c.current }} className="w-5 h-5 absolute right-0 translate-x-1" />
            </div>
          </div>

          {/* 3. VERIFIED OUTPUT (Cols 9-11) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider font-bold mb-1 flex items-center gap-2" style={{ color: c.textMuted }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.current }} />
              03 // The Revenue Outcome
            </div>

            <div
              style={{ backgroundColor: c.cardBg, borderColor: c.cardBorder }}
              className="p-6 rounded-xl border space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg" style={{ backgroundColor: isLight ? 'rgba(46,156,130,0.1)' : 'rgba(143,224,206,0.15)' }}>
                  <Calendar style={{ color: c.current }} className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider block" style={{ color: c.current }}>
                    Direct Outcome
                  </span>
                  <h4 style={{ color: c.text }} className="text-base font-serif font-bold">
                    10+ Qualified B2B Calls
                  </h4>
                </div>
              </div>

              <ul className="space-y-2 text-xs font-sans" style={{ color: c.textMuted }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 style={{ color: c.current }} className="w-3.5 h-3.5 shrink-0" />
                  <span>Calendar pre-synced with Cal.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 style={{ color: c.current }} className="w-3.5 h-3.5 shrink-0" />
                  <span>Diagnostic answers delivered before the call</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 style={{ color: c.current }} className="w-3.5 h-3.5 shrink-0" />
                  <span>Zero cold pitch fatigue</span>
                </li>
              </ul>

              <div
                className="pt-3 border-t text-[11px] font-mono flex items-center justify-between"
                style={{ borderColor: c.cardBorder }}
              >
                <span style={{ color: c.textMuted }}>Monthly Yield:</span>
                <span className="font-bold text-xs" style={{ color: c.flare }}>
                  10 - 18 Qualified Ops
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
