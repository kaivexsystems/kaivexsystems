'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ShoppingBag,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  TrendingUp,
  BarChart3,
  Globe,
} from 'lucide-react';

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
          An engineered architecture connecting customer acquisition channels, conversion-optimized web infrastructure, and reliable revenue measurement.
        </p>
      </div>

      {/* Schematic Diagram Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
          
          {/* 1. INPUT CHANNELS (Cols 1-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider font-bold mb-1 flex items-center gap-2" style={{ color: c.textMuted }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.flare }} />
              01 // Acquisition Channels
            </div>

            {/* Input Card A: Performance Ads */}
            <div
              onMouseEnter={() => setActiveNode(1)}
              onMouseLeave={() => setActiveNode(null)}
              style={{ backgroundColor: c.cardBg, borderColor: activeNode === 1 ? c.cardBorderHover : c.cardBorder }}
              className="p-4 rounded-xl border transition-all duration-300 shadow-sm hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: isLight ? 'rgba(217,85,31,0.1)' : 'rgba(255,122,71,0.15)' }}>
                  <ShoppingBag style={{ color: c.flare }} className="w-4 h-4" />
                </div>
                <h4 style={{ color: c.text }} className="text-sm font-serif font-bold">
                  Meta &amp; Google Ads
                </h4>
              </div>
              <p style={{ color: c.textMuted }} className="text-xs font-sans">
                Full-funnel campaign management and retargeting aligned with unit economics.
              </p>
            </div>

            {/* Input Card B: Local Search & GBP */}
            <div
              onMouseEnter={() => setActiveNode(2)}
              onMouseLeave={() => setActiveNode(null)}
              style={{ backgroundColor: c.cardBg, borderColor: activeNode === 2 ? c.cardBorderHover : c.cardBorder }}
              className="p-4 rounded-xl border transition-all duration-300 shadow-sm hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: isLight ? 'rgba(46,156,130,0.1)' : 'rgba(143,224,206,0.15)' }}>
                  <Search style={{ color: c.current }} className="w-4 h-4" />
                </div>
                <h4 style={{ color: c.text }} className="text-sm font-serif font-bold">
                  Local SEO &amp; Google Business
                </h4>
              </div>
              <p style={{ color: c.textMuted }} className="text-xs font-sans">
                Local keyword dominance, citation strategy, and high-intent local search ads.
              </p>
            </div>

            {/* Input Card C: Creative Strategy & Testing */}
            <div
              onMouseEnter={() => setActiveNode(3)}
              onMouseLeave={() => setActiveNode(null)}
              style={{ backgroundColor: c.cardBg, borderColor: activeNode === 3 ? c.cardBorderHover : c.cardBorder }}
              className="p-4 rounded-xl border transition-all duration-300 shadow-sm hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: isLight ? 'rgba(217,85,31,0.1)' : 'rgba(255,122,71,0.15)' }}>
                  <Sparkles style={{ color: c.flare }} className="w-4 h-4" />
                </div>
                <h4 style={{ color: c.text }} className="text-sm font-serif font-bold">
                  Creative Strategy &amp; Testing
                </h4>
              </div>
              <p style={{ color: c.textMuted }} className="text-xs font-sans">
                Consistent ad creative production and messaging iterations that combat ad fatigue.
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
                  CONVERSION FOUNDATION
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Active
                </span>
              </div>

              {/* Engine Inner Feature 1 */}
              <div className="flex items-start gap-3 p-3 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
                <Layers style={{ color: c.flare }} className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <h5 style={{ color: c.text }} className="text-xs font-bold font-sans">
                    Storefront &amp; Website Architecture
                  </h5>
                  <p style={{ color: c.textMuted }} className="text-[11px] leading-tight mt-0.5">
                    Custom Shopify stores and local service sites engineered for sub-second speed and maximum conversion.
                  </p>
                </div>
              </div>

              {/* Engine Inner Feature 2 */}
              <div className="flex items-start gap-3 p-3 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
                <Globe style={{ color: c.current }} className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <h5 style={{ color: c.text }} className="text-xs font-bold font-sans">
                    Enquiry &amp; Checkout Flow
                  </h5>
                  <p style={{ color: c.textMuted }} className="text-[11px] leading-tight mt-0.5">
                    Frictionless checkout paths and dedicated enquiry forms with seamless lead routing.
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
              03 // Revenue &amp; Attribution
            </div>

            <div
              style={{ backgroundColor: c.cardBg, borderColor: c.cardBorder }}
              className="p-6 rounded-xl border space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg" style={{ backgroundColor: isLight ? 'rgba(46,156,130,0.1)' : 'rgba(143,224,206,0.15)' }}>
                  <TrendingUp style={{ color: c.current }} className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider block" style={{ color: c.current }}>
                    Direct Outcome
                  </span>
                  <h4 style={{ color: c.text }} className="text-base font-serif font-bold">
                    Predictable Revenue &amp; Pipeline
                  </h4>
                </div>
              </div>

              <ul className="space-y-2 text-xs font-sans" style={{ color: c.textMuted }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 style={{ color: c.current }} className="w-3.5 h-3.5 shrink-0" />
                  <span>Clean conversion tracking &amp; reporting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 style={{ color: c.current }} className="w-3.5 h-3.5 shrink-0" />
                  <span>Qualified buyer enquiries &amp; customer orders</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 style={{ color: c.current }} className="w-3.5 h-3.5 shrink-0" />
                  <span>Modular scope aligned with unit economics</span>
                </li>
              </ul>

              <div
                className="pt-3 border-t text-[11px] font-mono flex items-center justify-between"
                style={{ borderColor: c.cardBorder }}
              >
                <span style={{ color: c.textMuted }}>Operating Principle:</span>
                <span className="font-bold text-xs" style={{ color: c.flare }}>
                  Repeatable Systems
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
