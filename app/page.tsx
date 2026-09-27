'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { CheckCircle2, Moon, Sun, Mail, MessageSquare, ArrowUpRight, ArrowRight } from 'lucide-react';
import { KaivexLogo } from '@/components/ui/kaivex-logo';
import { DotGridHero } from '@/components/ui/dot-grid-hero';
import { LuminousText } from '@/components/ui/luminous-text';
import { FeatureCarouselSteps } from '@/components/sections/feature-carousel-steps';
import { AvatarTooltipStack } from '@/components/ui/avatar-tooltip-stack';
import { SlidingArrowButton } from '@/components/ui/sliding-arrow-button';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { SystemsArchitectureFlow } from '@/components/sections/systems-architecture-flow';

const InstagramIcon = ({ className = 'w-3.5 h-3.5', color }: { className?: string; color?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={color ? { color } : undefined}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const BOOKING_URL = 'https://cal.com/ahmad-farooq-tuwcnw/15min';
const WHATSAPP_URL = 'https://wa.me/18484004949';
const INSTAGRAM_URL = 'https://www.instagram.com/kaivexsystems/';
const EMAIL = 'kaivexsystems@gmail.com';

// Unified Framer Motion entrance animation preset
const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, ease: 'easeOut' as const },
};

export default function KaivexLandingPage() {
  // Starts INITIALLY in the official Light Theme per request
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const isLight = theme === 'light';

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dual-Surface Palette Tokens strictly grounded in Brand Guideline v2
  const c = isLight
    ? {
        bg: '#EBE3D3',          // Ledger Cream
        panel: '#E2DAC8',       // Cream Panel
        panelHover: '#DDD4BF',
        text: '#14181B',        // Deep Charcoal Ink
        textMuted: '#6B655F',   // Warm Fog
        flare: '#D9551F',       // Flare, deepened
        current: '#2E9C82',     // Current, deepened
        border: 'rgba(20, 24, 27, 0.09)',
        borderStrong: 'rgba(20, 24, 27, 0.16)',
        navBg: 'rgba(235, 227, 211, 0.88)',
        navBorder: 'rgba(20, 24, 27, 0.08)',
        ctaBg: '#14181B',
        ctaText: '#FFFFFF',
        glow: 'rgba(217, 85, 31, 0.12)',
        footerBg: '#DFD7C4',
      }
    : {
        bg: '#0B0F14',          // Abyss Ink
        panel: '#121A21',       // Current Panel
        panelHover: '#17222B',
        text: '#E7ECEC',        // White Mist
        textMuted: '#98A6AD',   // Fog
        flare: '#FF7A47',       // Signal Flare
        current: '#8FE0CE',     // Ice Current
        border: 'rgba(255, 255, 255, 0.08)',
        borderStrong: 'rgba(255, 255, 255, 0.16)',
        navBg: 'rgba(11, 15, 20, 0.88)',
        navBorder: 'rgba(255, 255, 255, 0.08)',
        ctaBg: '#FFFFFF',
        ctaText: '#0B0F14',
        glow: 'rgba(255, 122, 71, 0.12)',
        footerBg: '#070A0E',
      };

  return (
    <div
      id="top"
      style={{ backgroundColor: c.bg, color: c.text }}
      className="relative min-h-screen font-sans transition-colors duration-500 selection:bg-[#D9551F] selection:text-white overflow-x-clip"
    >
      {/* Precision Trailing Custom Cursor Follower */}
      <CustomCursor theme={theme} />

      {/* Fullscreen Fixed Interactive Dot Grid Canvas (Elastic mouse displacement across entire page) */}
      <DotGridHero theme={theme} />

      {/* 0. Minimal Crystal Floating Navigation Bar */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            backgroundColor: c.navBg,
            borderColor: c.navBorder,
            boxShadow: isLight
              ? '0 10px 30px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)'
              : '0 10px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
          className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-5 py-2.5 rounded-2xl border backdrop-blur-2xl max-w-4xl w-full transition-all duration-300"
        >
          {/* Logo with subtle sway/breathing animation - Clickable to top */}
          <a
            href="/"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            title="Kaivex Systems - Return to top"
          >
            <KaivexLogo variant="full" size="sm" theme={theme} showSublabel={false} animate={true} />
          </a>

          {/* Right controls: WhatsApp + Instagram + Theme Switcher + CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick WhatsApp button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              style={{ borderColor: c.border, color: c.textMuted }}
              className="p-2 rounded-xl border hover:opacity-100 transition hidden sm:flex items-center"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#2E9C82]" />
            </a>

            {/* Quick Instagram button */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram @kaivexsystems"
              style={{ borderColor: c.border, color: c.textMuted }}
              className="p-2 rounded-xl border hover:opacity-100 transition hidden sm:flex items-center"
            >
              <InstagramIcon className="w-3.5 h-3.5" color="#D9551F" />
            </a>

            {/* Theme Toggle Pill */}
            <button
              onClick={() => setTheme(isLight ? 'dark' : 'light')}
              style={{
                borderColor: c.border,
                color: c.textMuted,
              }}
              title={isLight ? 'Switch to Dark Surface' : 'Switch to Light Surface'}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl border hover:opacity-100 transition flex items-center gap-1.5 text-xs font-mono cursor-pointer"
            >
              <AnimatePresence mode="wait">
                {isLight ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 45, scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5"
                  >
                    <Moon className="w-3.5 h-3.5 text-[#14181B]" />
                    <span className="hidden md:inline text-[11px] font-medium text-[#14181B]">Dark</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 45, scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5"
                  >
                    <Sun className="w-3.5 h-3.5 text-[#FF7A47]" />
                    <span className="hidden md:inline text-[11px] font-medium text-[#FF7A47]">Light</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Sliding Arrow CTA Button in Header */}
            <SlidingArrowButton
              href={BOOKING_URL}
              label="Book Call"
              theme={theme}
              size="compact"
            />
          </div>
        </motion.div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-4 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Ambient glow centered */}
        <div
          style={{ background: `radial-gradient(circle, ${c.glow} 0%, transparent 70%)` }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] blur-[130px] rounded-full pointer-events-none"
        />

        <motion.div {...sectionMotion} className="relative z-10 flex flex-col items-center">
          {/* Eyebrow tag with animated current dot */}
          <div
            style={{
              borderColor: c.border,
              backgroundColor: isLight ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.04)',
              color: c.current,
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-[11px] font-mono font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md shadow-xs"
          >
            <span
              style={{ backgroundColor: c.current }}
              className="w-1.5 h-1.5 rounded-full animate-ping"
            />
            MARKETING SYSTEMS STUDIO
          </div>

          {/* Headline in Distinctive Serif with "Light in Motion" Continuous Luminous Typography */}
          <h1
            style={{ color: c.text }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl"
          >
            Marketing systems that add{' '}
            <LuminousText
              text="10+ qualified call bookings"
              theme={theme}
            />{' '}
            every month, consistently.
          </h1>

          {/* One-line subhead in General Sans with tightened tracking */}
          <p
            style={{ color: c.textMuted }}
            className="text-base sm:text-lg md:text-xl font-sans font-normal leading-relaxed mb-10 max-w-2xl tracking-[-0.015em]"
          >
            For B2B founders, coaches, and consultants tired of referral dependency and inconsistent outbound.
          </p>

          {/* Single CTA Button with Sliding Arrow Hover Effect */}
          <SlidingArrowButton
            href={BOOKING_URL}
            label="Book a 15-Minute Diagnostic Call"
            theme={theme}
            size="default"
          />
        </motion.div>
      </section>

      {/* 2. PROBLEM SECTION (3 short lines) */}
      <section
        style={{ borderColor: c.border }}
        className="py-20 px-4 max-w-4xl mx-auto border-t relative z-10"
      >
        <motion.div {...sectionMotion}>
          <div className="text-center mb-12">
            <span
              style={{ color: c.flare }}
              className="font-mono text-xs font-bold uppercase tracking-widest"
            >
              THE BOTTLENECK
            </span>
            <h2
              style={{ color: c.text }}
              className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mt-2"
            >
              Why your pipeline stalls
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Line 1: Inconsistent Pipeline */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: c.panel, borderColor: c.border }}
              className="p-6 rounded-2xl border flex flex-col justify-between transition-colors shadow-sm"
            >
              <div>
                <span
                  style={{ color: c.flare }}
                  className="font-mono text-[11px] font-bold uppercase tracking-wider block mb-3"
                >
                  01 // REVENUE SWINGS
                </span>
                <h3 style={{ color: c.text }} className="text-xl font-serif font-bold mb-2">
                  Unpredictable client flow
                </h3>
                <p style={{ color: c.textMuted }} className="text-xs sm:text-sm font-sans leading-relaxed tracking-[-0.012em]">
                  Revenue swings from busy months to quiet months because you don&apos;t have a predictable way to bring in new clients on demand.
                </p>
              </div>
            </motion.div>

            {/* Line 2: Agency Bloat */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: c.panel, borderColor: c.border }}
              className="p-6 rounded-2xl border flex flex-col justify-between transition-colors shadow-sm"
            >
              <div>
                <span
                  style={{ color: c.current }}
                  className="font-mono text-[11px] font-bold uppercase tracking-wider block mb-3"
                >
                  02 // OVERPAYING
                </span>
                <h3 style={{ color: c.text }} className="text-xl font-serif font-bold mb-2">
                  Expensive agency bloat
                </h3>
                <p style={{ color: c.textMuted }} className="text-xs sm:text-sm font-sans leading-relaxed tracking-[-0.012em]">
                  You pay thousands to agencies with junior account managers who don&apos;t understand your business and deliver zero booked calls.
                </p>
              </div>
            </motion.div>

            {/* Line 3: Referral Dependency */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: c.panel, borderColor: c.border }}
              className="p-6 rounded-2xl border flex flex-col justify-between transition-colors shadow-sm"
            >
              <div>
                <span
                  style={{ color: c.textMuted }}
                  className="font-mono text-[11px] font-bold uppercase tracking-wider block mb-3"
                >
                  03 // TRAPPED
                </span>
                <h3 style={{ color: c.text }} className="text-xl font-serif font-bold mb-2">
                  Relying only on referrals
                </h3>
                <p style={{ color: c.textMuted }} className="text-xs sm:text-sm font-sans leading-relaxed tracking-[-0.012em]">
                  Word of mouth is great, but you can&apos;t control when it happens. You need a real system bringing qualified buyers to you every week.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. OFFER SECTION (3 bullet points, 10+ qualified call bookings framing) */}
      <section
        style={{ borderColor: c.border }}
        className="py-20 px-4 max-w-4xl mx-auto border-t relative z-10"
      >
        <motion.div {...sectionMotion}>
          <div className="text-center mb-12">
            <span
              style={{ color: c.current }}
              className="font-mono text-xs font-bold uppercase tracking-widest"
            >
              THE SOLUTION
            </span>
            <h2
              style={{ color: c.text }}
              className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mt-2"
            >
              Everything built to deliver 10+ qualified call bookings every month
            </h2>
          </div>

          <div className="space-y-4">
            {/* Bullet 1: Fast High Converting Website */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: c.panel, borderColor: c.border }}
              className="p-6 rounded-2xl border flex items-start gap-4 shadow-sm"
            >
              <div
                style={{
                  backgroundColor: isLight ? 'rgba(46,156,130,0.12)' : 'rgba(143,224,206,0.12)',
                  borderColor: isLight ? 'rgba(46,156,130,0.2)' : 'rgba(143,224,206,0.2)',
                }}
                className="w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 mt-0.5"
              >
                <CheckCircle2 style={{ color: c.current }} className="w-4 h-4" />
              </div>
              <div>
                <h3 style={{ color: c.text }} className="text-lg sm:text-xl font-serif font-bold mb-1">
                  Fast, High-Converting Website
                </h3>
                <p style={{ color: c.textMuted }} className="text-xs sm:text-sm font-sans leading-relaxed tracking-[-0.012em]">
                  Clean, modern websites built to turn cold visitors into booked client meetings without confusing forms or fluff.
                </p>
              </div>
            </motion.div>

            {/* Bullet 2: Pre-Call Qualification */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: c.panel, borderColor: c.border }}
              className="p-6 rounded-2xl border flex items-start gap-4 shadow-sm"
            >
              <div
                style={{
                  backgroundColor: isLight ? 'rgba(46,156,130,0.12)' : 'rgba(143,224,206,0.12)',
                  borderColor: isLight ? 'rgba(46,156,130,0.2)' : 'rgba(143,224,206,0.2)',
                }}
                className="w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 mt-0.5"
              >
                <CheckCircle2 style={{ color: c.current }} className="w-4 h-4" />
              </div>
              <div>
                <h3 style={{ color: c.text }} className="text-lg sm:text-xl font-serif font-bold mb-1">
                  Pre-Call Client Qualification
                </h3>
                <p style={{ color: c.textMuted }} className="text-xs sm:text-sm font-sans leading-relaxed tracking-[-0.012em]">
                  A simple 2-minute questionnaire asks their budget and needs before they book, so you only talk to real buyers with real budgets.
                </p>
              </div>
            </motion.div>

            {/* Bullet 3: Done-For-You Outreach */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: c.panel, borderColor: c.border }}
              className="p-6 rounded-2xl border flex items-start gap-4 shadow-sm"
            >
              <div
                style={{
                  backgroundColor: isLight ? 'rgba(46,156,130,0.12)' : 'rgba(143,224,206,0.12)',
                  borderColor: isLight ? 'rgba(46,156,130,0.2)' : 'rgba(143,224,206,0.2)',
                }}
                className="w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 mt-0.5"
              >
                <CheckCircle2 style={{ color: c.current }} className="w-4 h-4" />
              </div>
              <div>
                <h3 style={{ color: c.text }} className="text-lg sm:text-xl font-serif font-bold mb-1">
                  Done-For-You LinkedIn &amp; Email Outreach
                </h3>
                <p style={{ color: c.textMuted }} className="text-xs sm:text-sm font-sans leading-relaxed tracking-[-0.012em]">
                  We write your LinkedIn authority posts and send targeted emails directly to your ideal buyers, consistently booking 10+ qualified calls on your calendar every month.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. PROOF SECTION (3 items + Team Avatar Tooltip Stack) */}
      <section
        style={{ borderColor: c.border }}
        className="py-20 px-4 max-w-4xl mx-auto border-t relative z-10"
      >
        <motion.div {...sectionMotion}>
          <div className="text-center mb-12">
            <span
              style={{ color: c.flare }}
              className="font-mono text-xs font-bold uppercase tracking-widest"
            >
              PROVEN TRACK RECORD
            </span>
            <h2
              style={{ color: c.text }}
              className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mt-2"
            >
              Tested systems. Verifiable numbers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Item 1: Series A EdTech Founder */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: c.panel, borderColor: c.border }}
              className="p-6 rounded-2xl border flex flex-col justify-between shadow-sm"
            >
              <div>
                <div
                  style={{ color: c.flare }}
                  className="text-3xl sm:text-4xl font-extrabold font-serif mb-2"
                >
                  $300K
                </div>
                <h3 style={{ color: c.text }} className="text-base font-serif font-bold mb-2">
                  Series A EdTech Founder
                </h3>
                <p style={{ color: c.textMuted }} className="text-xs font-sans leading-relaxed tracking-[-0.012em]">
                  Attributed pipeline built via organic LinkedIn authority and landing architecture.
                </p>
              </div>
            </motion.div>

            {/* Item 2: ARKA */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: c.panel, borderColor: c.border }}
              className="p-6 rounded-2xl border flex flex-col justify-between shadow-sm"
            >
              <div>
                <div
                  style={{ color: c.current }}
                  className="text-3xl sm:text-4xl font-extrabold font-serif mb-2"
                >
                  &lt; 24h
                </div>
                <h3 style={{ color: c.text }} className="text-base font-serif font-bold mb-2">
                  ARKA Platform
                </h3>
                <p style={{ color: c.textMuted }} className="text-xs font-sans leading-relaxed tracking-[-0.012em]">
                  Full-stack agency operations dashboard, built and deployed in under 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Item 3: Coin Bureau */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{ backgroundColor: c.panel, borderColor: c.border }}
              className="p-6 rounded-2xl border flex flex-col justify-between shadow-sm"
            >
              <div>
                <div
                  style={{ color: c.text }}
                  className="text-3xl sm:text-4xl font-extrabold font-serif mb-2"
                >
                  2M+
                </div>
                <h3 style={{ color: c.text }} className="text-base font-serif font-bold mb-2">
                  Coin Bureau
                </h3>
                <p style={{ color: c.textMuted }} className="text-xs font-sans leading-relaxed tracking-[-0.012em]">
                  Cross-platform funnel strategy (YouTube/Instagram to newsletter to academy) for a 2M+ audience brand.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Avatar Tooltip Stack for Ahmad Farooq & Ayaan Habib */}
          <AvatarTooltipStack theme={theme} />
        </motion.div>
      </section>

      {/* 5. SYSTEMS ARCHITECTURE FLOW (Visual Infrastructure Blueprint) */}
      <div style={{ borderColor: c.border }} className="border-t relative z-10">
        <motion.div {...sectionMotion}>
          <SystemsArchitectureFlow theme={theme} />
        </motion.div>
      </div>

      {/* 6. HOW IT WORKS (Feature Carousel Steps from Recording) */}
      <section
        style={{ borderColor: c.border }}
        className="py-20 px-4 max-w-4xl mx-auto border-t relative z-10"
      >
        <motion.div {...sectionMotion}>
          <div className="text-center mb-10">
            <span
              style={{ color: c.current }}
              className="font-mono text-xs font-bold uppercase tracking-widest"
            >
              THE PROCESS
            </span>
            <h2
              style={{ color: c.text }}
              className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mt-2"
            >
              How it works
            </h2>
          </div>

          {/* Feature Carousel Component */}
          <FeatureCarouselSteps theme={theme} />
        </motion.div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section
        style={{ borderColor: c.border }}
        className="relative py-28 px-4 max-w-4xl mx-auto border-t text-center overflow-hidden"
      >
        <motion.div {...sectionMotion} className="relative z-10 flex flex-col items-center">
          <span
            style={{ color: c.flare }}
            className="font-mono text-xs font-bold uppercase tracking-widest mb-3"
          >
            READY TO DEPLOY
          </span>
          <h2
            style={{ color: c.text }}
            className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mb-4 max-w-2xl leading-[1.15]"
          >
            Ready to add 10+ qualified call bookings every month?
          </h2>
          <p
            style={{ color: c.textMuted }}
            className="text-sm sm:text-base font-sans max-w-lg mb-8 leading-relaxed tracking-[-0.015em]"
          >
            Zero sales pitch. We look at your current numbers and show you how to start booking high-paying clients consistently.
          </p>

          {/* Sliding Arrow CTA Button */}
          <SlidingArrowButton
            href={BOOKING_URL}
            label="Book a 15-Minute Diagnostic Call"
            theme={theme}
            size="default"
          />
        </motion.div>
      </section>

      {/* 7. FOOTER */}
      <footer
        style={{
          backgroundColor: c.footerBg,
          borderColor: c.border,
        }}
        className="py-14 px-4 border-t transition-colors relative z-10"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {/* Kaivex logo with subtle breathing animation in footer */}
              <a href="/" onClick={scrollToTop} title="Return to top">
                <KaivexLogo variant="full" size="sm" theme={theme} showSublabel={true} animate={true} />
              </a>
            </div>

            {/* Social and Direct Contact Channels */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono">
              <a
                href={`mailto:${EMAIL}`}
                style={{ color: c.text }}
                className="hover:underline transition-colors flex items-center gap-1.5 font-medium"
              >
                <Mail style={{ color: c.flare }} className="w-3.5 h-3.5" />
                <span>{EMAIL}</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: c.text }}
                className="hover:underline transition-colors flex items-center gap-1.5 font-medium"
              >
                <MessageSquare style={{ color: c.current }} className="w-3.5 h-3.5" />
                <span>WhatsApp (+1 848 400 4949)</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: c.text }}
                className="hover:underline transition-colors flex items-center gap-1.5 font-medium"
              >
                <InstagramIcon className="w-3.5 h-3.5" color={c.flare} />
                <span>@kaivexsystems</span>
              </a>
            </div>
          </div>

          {/* Bottom Legal Bar: Privacy Policy & Terms of Service */}
          <div
            style={{ borderColor: c.border, color: c.textMuted }}
            className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono"
          >
            <div>
              &copy; {new Date().getFullYear()} Kaivex Systems Ltd. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:underline transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
