'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Menu, PhoneCall, Sparkles, Moon, Sun, ArrowRight, ExternalLink } from 'lucide-react';
import { KaivexLogo } from '@/components/ui/kaivex-logo';

export default function BrandShowcasePage() {
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light'>('dark');
  const isDark = activeTheme === 'dark';

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans p-6 sm:p-12 ${
        isDark ? 'bg-[#0B0F14] text-[#E7ECEC]' : 'bg-[#EBE3D3] text-[#14181B]'
      }`}
    >
      {/* Header controls */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-black/10 dark:border-white/10 mb-12">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF7A47] dark:text-[#FF7A47] font-semibold">
            Brand Guideline v2 System
          </span>
        </div>

        {/* Surface theme switcher */}
        <div className="flex items-center gap-2 p-1 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
          <button
            onClick={() => setActiveTheme('dark')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition ${
              isDark
                ? 'bg-[#121A21] text-[#E7ECEC] shadow-md'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>Dark (Abyss Ink)</span>
          </button>
          <button
            onClick={() => setActiveTheme('light')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition ${
              !isDark
                ? 'bg-[#E2DAC8] text-[#14181B] shadow-md'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Light (Ledger Cream)</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight mb-3">
            Kaivex Systems Logo & Header/Footer Mockups
          </h1>
          <p className="text-sm sm:text-base opacity-75 max-w-2xl font-sans leading-relaxed">
            The authentic brand geometry: non-converging three-line wave mark (Fog, Current, Signal Flare) paired with the signature <span className="font-semibold font-display">Kaive<span className="text-[#FF7A47] dark:text-[#FF7A47]">x</span></span> wordmark in Space Grotesk.
          </p>
        </div>

        {/* 1. MOCKUP: Floating Crystal Glass Navbar (Desktop) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF7A47] font-bold">
              01 // Desktop Floating Crystal Navbar
            </span>
            <span className="font-mono text-[11px] opacity-60">Full Lockup + Blur-2xl Glass</span>
          </div>

          <div
            className={`relative p-8 rounded-3xl border transition-all ${
              isDark
                ? 'bg-[#06080D] border-white/10'
                : 'bg-[#DCD4C3] border-black/10'
            }`}
          >
            {/* The Floating Nav inside simulation */}
            <div className="max-w-4xl mx-auto">
              <div
                className={`flex items-center justify-between px-5 py-2.5 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-white/[0.04] border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]'
                    : 'bg-black/[0.03] border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]'
                } backdrop-blur-2xl`}
              >
                {/* Brand Logo Lockup */}
                <div className="pr-4 border-r border-black/10 dark:border-white/10">
                  <KaivexLogo
                    variant="full"
                    size="md"
                    theme={activeTheme}
                    showSublabel={false}
                  />
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-1">
                  {['Services', 'Process', 'Results', 'Pricing', 'Contact'].map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 rounded-xl text-xs font-sans font-medium transition cursor-pointer ${
                        item === 'Services'
                          ? isDark
                            ? 'text-white bg-white/10'
                            : 'text-black bg-black/10 font-bold'
                          : isDark
                          ? 'text-stone-400 hover:text-white'
                          : 'text-stone-600 hover:text-black'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </nav>

                {/* CTA */}
                <div className="pl-4 border-l border-black/10 dark:border-white/10">
                  <button
                    className={`px-4 py-1.5 rounded-xl text-xs font-sans font-bold flex items-center gap-1.5 transition ${
                      isDark
                        ? 'bg-white text-black hover:bg-stone-200 shadow-md shadow-white/10'
                        : 'bg-[#14181B] text-[#E7ECEC] hover:bg-black shadow-md'
                    }`}
                  >
                    <span>Book a Call</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MOCKUP: Mobile Header & Tablet Header */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mobile Header Mockup */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF7A47] font-bold">
                02 // Mobile Header Mockup (375px)
              </span>
              <span className="font-mono text-[11px] opacity-60">Compact Mark + Wordmark</span>
            </div>

            <div
              className={`p-6 rounded-3xl border flex justify-center ${
                isDark ? 'bg-[#06080D] border-white/10' : 'bg-[#DCD4C3] border-black/10'
              }`}
            >
              <div
                className={`w-full max-w-[360px] rounded-2xl p-4 border flex items-center justify-between ${
                  isDark
                    ? 'bg-[#121A21] border-white/10 shadow-xl'
                    : 'bg-[#E2DAC8] border-black/10 shadow-md'
                }`}
              >
                <KaivexLogo
                  variant="full"
                  size="sm"
                  theme={activeTheme}
                  showSublabel={false}
                />
                <div className="flex items-center gap-2">
                  <a
                    href="https://cal.com/ahmad-farooq-tuwcnw/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg text-xs font-bold font-mono ${
                      isDark ? 'bg-[#FF7A47] text-black' : 'bg-[#D9551F] text-white'
                    }`}
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                  </a>
                  <button
                    className={`p-2 rounded-lg border ${
                      isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'
                    }`}
                  >
                    <Menu className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet / Subhead Bar */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF7A47] font-bold">
                03 // Tablet / Editorial Header
              </span>
              <span className="font-mono text-[11px] opacity-60">Includes "SYSTEMS" Subtitle</span>
            </div>

            <div
              className={`p-6 rounded-3xl border flex items-center justify-center ${
                isDark ? 'bg-[#06080D] border-white/10' : 'bg-[#DCD4C3] border-black/10'
              }`}
            >
              <div
                className={`w-full rounded-2xl px-6 py-3.5 border flex items-center justify-between ${
                  isDark
                    ? 'bg-[#121A21] border-white/10 shadow-xl'
                    : 'bg-[#E2DAC8] border-black/10 shadow-md'
                }`}
              >
                <KaivexLogo
                  variant="full"
                  size="md"
                  theme={activeTheme}
                  showSublabel={true}
                />
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="opacity-60 hidden sm:inline">Lahore &bull; Operating Worldwide</span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      isDark
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-emerald-800/10 text-emerald-800 border border-emerald-800/20'
                    }`}
                  >
                    Systems Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MOCKUP: Footer Lockups (Stacked Editorial & Minimal) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF7A47] font-bold">
              04 // Footer Lockups
            </span>
            <span className="font-mono text-[11px] opacity-60">Stacked Architectural & Horizontal Split</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stacked Center Footer */}
            <div
              className={`p-8 rounded-3xl border flex flex-col items-center justify-center text-center space-y-6 ${
                isDark ? 'bg-[#06080D] border-white/10' : 'bg-[#E2DAC8] border-black/10'
              }`}
            >
              <KaivexLogo
                variant="stacked"
                size="lg"
                theme={activeTheme}
                showSublabel={true}
              />
              <p className="text-xs opacity-70 max-w-xs font-sans">
                Predictable pipeline engineering and high-converting digital infrastructure for founders and contractors.
              </p>
              <div className="flex items-center gap-6 text-xs font-mono opacity-60">
                <span>Infrastructure</span>
                <span>Results</span>
                <span>Pricing</span>
                <span>Terms</span>
              </div>
              <p className="text-[11px] font-mono opacity-40">
                &copy; 2026 Kaivex Systems Ltd. All rights reserved.
              </p>
            </div>

            {/* Horizontal Split Footer */}
            <div
              className={`p-8 rounded-3xl border flex flex-col justify-between space-y-8 ${
                isDark ? 'bg-[#121A21] border-white/10' : 'bg-[#DCD4C3] border-black/10'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <KaivexLogo
                    variant="full"
                    size="lg"
                    theme={activeTheme}
                    showSublabel={true}
                  />
                  <p className="text-xs opacity-70 mt-3 font-sans max-w-xs">
                    Zero translation loss between growth strategy and software architecture.
                  </p>
                </div>
                <KaivexLogo
                  variant="monogram"
                  size="md"
                  theme={activeTheme}
                />
              </div>

              <div className="pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono opacity-60">
                <span>Deep Current / Dual Surface</span>
                <span>Lahore, PK</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Standalone Marks & App Badges */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF7A47] font-bold">
              05 // Standalone Marks & App Icons
            </span>
            <span className="font-mono text-[11px] opacity-60">Favicon, App Monogram, Three-Line Current Only</span>
          </div>

          <div
            className={`p-8 rounded-3xl border grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center ${
              isDark ? 'bg-[#06080D] border-white/10' : 'bg-[#E2DAC8] border-black/10'
            }`}
          >
            {/* Mark Only */}
            <div className="flex flex-col items-center gap-3">
              <KaivexLogo variant="mark" size="md" theme={activeTheme} />
              <span className="font-mono text-[10px] opacity-60 uppercase">Three-Line Wave</span>
            </div>

            {/* Monogram Badge SM */}
            <div className="flex flex-col items-center gap-3">
              <KaivexLogo variant="monogram" size="sm" theme={activeTheme} />
              <span className="font-mono text-[10px] opacity-60 uppercase">Favicon (24px)</span>
            </div>

            {/* Monogram Badge MD */}
            <div className="flex flex-col items-center gap-3">
              <KaivexLogo variant="monogram" size="md" theme={activeTheme} />
              <span className="font-mono text-[10px] opacity-60 uppercase">App Icon (48px)</span>
            </div>

            {/* Monogram Badge LG */}
            <div className="flex flex-col items-center gap-3">
              <KaivexLogo variant="monogram" size="lg" theme={activeTheme} />
              <span className="font-mono text-[10px] opacity-60 uppercase">Avatar Icon (64px)</span>
            </div>
          </div>
        </section>

        {/* 5. Geometry & Signature Rules */}
        <section
          className={`p-8 rounded-3xl border space-y-4 ${
            isDark ? 'bg-[#121A21] border-white/10' : 'bg-[#E2DAC8] border-black/10'
          }`}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF7A47]" />
            <h3 className="font-mono text-xs uppercase tracking-widest font-bold">
              Brand Geometry & Signature Rules
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono opacity-80 leading-relaxed">
            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 space-y-1">
              <span className="text-emerald-500 font-bold block mb-1">&bull; RULE: Separate Current Lanes</span>
              The three current wave lines must stay in parallel separate lanes with clear vertical gaps. They never cross and never converge to a single vanishing point.
            </div>
            <div className="p-4 rounded-xl border border-black/10 dark:border-white/10 space-y-1">
              <span className="text-emerald-500 font-bold block mb-1">&bull; RULE: The Terminal "x" Accent</span>
              In "Kaivex", 'K' is uppercase, 'aive' is lowercase in primary text color. Only the final 'x' carries the accent color (Signal Flare `#FF7A47` in dark, `#D9551F` in light).
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
