'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, Map, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FeatureCarouselStepsProps {
  theme: 'light' | 'dark';
}

const steps = [
  {
    id: 0,
    tag: 'STEP 01 // 15 MINUTES',
    title: 'Diagnostic call',
    shortLabel: 'Diagnostic Call',
    icon: PhoneCall,
    description: 'A 15-minute diagnostic session to audit your current pipeline, conversion bottlenecks, and economics.',
    deliverables: [
      'Zero sales pitch or generic agency pressure',
      'Audit of your current customer acquisition cost',
      'Identification of primary conversion leaks',
    ],
    metric: '15-Min Audit',
  },
  {
    id: 1,
    tag: 'STEP 02 // SPRINT BLUEPRINT',
    title: 'Custom roadmap',
    shortLabel: 'Custom Roadmap',
    icon: Map,
    description: 'We engineer your custom qualification flow, messaging architecture, and outbound sprint blueprint.',
    deliverables: [
      'Interactive qualification logic specification',
      'High-signal messaging & founder authority angles',
      'Bespoke outbound target architecture',
    ],
    metric: '100% Custom Scope',
  },
  {
    id: 2,
    tag: 'STEP 03 // 14-DAY SHIP',
    title: 'Build & launch',
    shortLabel: 'Build & Launch',
    icon: Rocket,
    description: 'We write the copy, code the infrastructure, and ship your live client acquisition system in 14 days.',
    deliverables: [
      'Sub-second landing page custom-coded in React',
      'Dedicated Slack channel with daily async updates',
      'Full handover: you own 100% of the code and assets',
    ],
    metric: '14-Day Delivery',
  },
];

/**
 * Feature Carousel for Process Steps
 * Replicates Screen Recording "Feature CAreousle.mp4":
 * Left: Interactive vertical pill selector with animated active indicator.
 * Right: 3D perspective stacked card deck where the active step card is in front
 * and adjacent steps sit behind in depth, smoothly sliding into view.
 */
export function FeatureCarouselSteps({ theme }: FeatureCarouselStepsProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const isLight = theme === 'light';

  const c = isLight
    ? {
        cardBg: '#E2DAC8',
        cardBorder: 'rgba(20, 24, 27, 0.12)',
        cardShadow: '0 20px 40px -10px rgba(20, 24, 27, 0.12), 0 0 1px rgba(20, 24, 27, 0.2)',
        pillBg: 'rgba(20, 24, 27, 0.05)',
        pillActiveBg: '#14181B',
        pillActiveText: '#FFFFFF',
        text: '#14181B',
        textMuted: '#6B655F',
        flare: '#D9551F',
        current: '#2E9C82',
        badgeBg: 'rgba(46, 156, 130, 0.12)',
      }
    : {
        cardBg: '#121A21',
        cardBorder: 'rgba(255, 255, 255, 0.12)',
        cardShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 122, 71, 0.15)',
        pillBg: 'rgba(255, 255, 255, 0.05)',
        pillActiveBg: '#FFFFFF',
        pillActiveText: '#0B0F14',
        text: '#E7ECEC',
        textMuted: '#98A6AD',
        flare: '#FF7A47',
        current: '#8FE0CE',
        badgeBg: 'rgba(143, 224, 206, 0.12)',
      };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
      {/* Left Column: Interactive Navigation Pills */}
      <div className="lg:col-span-5 flex flex-col gap-3">
        {steps.map((step, idx) => {
          const isActive = activeIdx === idx;
          const Icon = step.icon;

          return (
            <button
              key={step.id}
              onClick={() => setActiveIdx(idx)}
              style={{
                backgroundColor: isActive ? c.pillActiveBg : c.pillBg,
                color: isActive ? c.pillActiveText : c.text,
                borderColor: isActive ? 'transparent' : c.cardBorder,
              }}
              className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer shadow-sm active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div
                  style={{
                    backgroundColor: isActive
                      ? isLight ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'
                      : isLight ? 'rgba(20,24,27,0.06)' : 'rgba(255,255,255,0.08)',
                    color: isActive ? (isLight ? '#FFFFFF' : '#0B0F14') : c.flare,
                  }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span
                    style={{
                      color: isActive ? (isLight ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)') : c.textMuted,
                    }}
                    className="font-mono text-[10px] font-bold uppercase tracking-wider block mb-0.5"
                  >
                    {step.tag.split('//')[0]}
                  </span>
                  <h4 className="font-serif font-bold text-base sm:text-lg leading-tight">
                    {step.title}
                  </h4>
                </div>
              </div>

              <div
                style={{
                  color: isActive ? (isLight ? '#FFFFFF' : '#0B0F14') : c.textMuted,
                }}
                className={`transition-transform duration-300 ${isActive ? 'translate-x-0' : '-translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`}
              >
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Right Column: 3D Stacked Feature Cards Deck */}
      <div className="lg:col-span-7 relative flex items-center justify-center min-h-[360px] sm:min-h-[400px]">
        <div className="relative w-full max-w-lg perspective-1000">
          <AnimatePresence mode="wait">
            {steps.map((step, idx) => {
              if (activeIdx !== idx) return null;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 40, scale: 0.92, rotateY: 8 }}
                  animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, x: -40, scale: 0.92, rotateY: -8 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    backgroundColor: c.cardBg,
                    borderColor: c.cardBorder,
                    boxShadow: c.cardShadow,
                  }}
                  className="relative p-7 sm:p-9 rounded-3xl border flex flex-col justify-between"
                >
                  {/* Top Bar with Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      style={{
                        backgroundColor: c.badgeBg,
                        color: c.current,
                        borderColor: isLight ? 'rgba(46,156,130,0.2)' : 'rgba(143,224,206,0.2)',
                      }}
                      className="px-3 py-1 rounded-full border text-[11px] font-mono font-bold tracking-wider uppercase"
                    >
                      {step.tag}
                    </span>
                    <span
                      style={{ color: c.flare }}
                      className="font-mono text-xs font-bold"
                    >
                      {step.metric}
                    </span>
                  </div>

                  {/* Headline & Description */}
                  <div className="mb-6">
                    <h3
                      style={{ color: c.text }}
                      className="text-2xl sm:text-3xl font-serif font-bold tracking-tight mb-3"
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{ color: c.textMuted }}
                      className="text-xs sm:text-sm leading-relaxed font-sans"
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2.5 pt-5 border-t" style={{ borderColor: c.cardBorder }}>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans">
                        <CheckCircle2
                          style={{ color: c.current }}
                          className="w-4 h-4 shrink-0 mt-0.5"
                        />
                        <span style={{ color: c.text }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Background Card Preview in 3D Stack (Replicating Screen Recording) */}
          <div
            aria-hidden="true"
            style={{
              backgroundColor: c.cardBg,
              borderColor: c.cardBorder,
              transform: 'scale(0.92) translateX(24px) translateZ(-50px)',
              opacity: 0.35,
              zIndex: -1,
            }}
            className="absolute inset-0 rounded-3xl border pointer-events-none hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
}

export default FeatureCarouselSteps;
