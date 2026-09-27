'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  PhoneMissed,
  MessageSquare,
  Calendar,
  CheckCircle2,
  Wrench,
  Scissors,
  ChevronDown,
  Sun,
  Moon,
} from 'lucide-react';
import { KaivexLogo } from '@/components/ui/kaivex-logo';
import { DotGridHero } from '@/components/ui/dot-grid-hero';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { LuminousText } from '@/components/ui/luminous-text';

const WHATSAPP_URL =
  "https://wa.me/18484004949?text=Hey%20Ahmad,%20I%20run%20a%20local%20service/trades/salon%20business%20and%20want%20to%20stop%20losing%20clients%20to%20missed%20calls.";
const CAL_URL = 'https://cal.com/ahmad-farooq-tuwcnw/15min';

export default function TradesLandingPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const isLight = theme === 'light';

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tradeServices = [
    'Plumbing',
    'HVAC & AC Repair',
    'Roofing & Gutters',
    'Electricians',
    'Landscaping & Tree Care',
    'Painting',
    'Pest Control',
    'Garage Door Repair',
    'Flooring & Tile',
    'General Remodeling',
  ];

  const studioServices = [
    'Barbershops',
    'Hair Salons & Stylists',
    'Beauticians & Lash Techs',
    'Nail Salons',
    'Auto Detailing & Tinting',
    'Medspas & Aesthetics',
    'Massage & Wellness',
    'Tattoo Studios',
  ];

  const faqs = [
    {
      q: 'Do I need to change my cell or business phone number?',
      a: 'No! It connects directly to your existing phone number. You keep the exact same number you already have on your cards, storefront, and Instagram/Google profiles.',
    },
    {
      q: 'Do I have to learn complicated computer software?',
      a: 'Zero. You do not need to learn anything new. Whenever a customer asks for a quote or books an appointment, you get a clean text notification right on your regular phone.',
    },
    {
      q: 'What happens when someone calls while my hands are busy with a client or tools?',
      a: 'The moment you miss the call, our system sends them a friendly text in under 30 seconds: "Hey! I am currently working with a client right now. How can we help you out today?" They reply with what they need so they do not go book with your competitor.',
    },
    {
      q: 'How fast can we set this up for my business?',
      a: 'We set up and test the whole system in 48 to 72 hours. You do not have to lift a finger because we build and test everything for you.',
    },
    {
      q: 'What if someone calls after closing hours or late at night?',
      a: 'The system automatically texts them back, lets them know your morning hours or booking link, collects their info, and puts them first in line for when you open.',
    },
  ];

  // Dual-surface palette tokens matching the main site exactly
  const c = isLight
    ? {
        bg: '#EBE3D3',
        panel: '#E2DAC8',
        panelHover: '#DDD4BF',
        text: '#14181B',
        textMuted: '#6B655F',
        flare: '#D9551F',
        current: '#2E9C82',
        border: 'rgba(20, 24, 27, 0.09)',
        borderStrong: 'rgba(20, 24, 27, 0.16)',
        navBg: 'rgba(235, 227, 211, 0.88)',
        navBorder: 'rgba(20, 24, 27, 0.08)',
        footerBg: '#DFD7C4',
        quoteBg: 'rgba(255, 255, 255, 0.7)',
        tagBg: 'rgba(255, 255, 255, 0.6)',
      }
    : {
        bg: '#0B0F14',
        panel: '#121A21',
        panelHover: '#17222B',
        text: '#E7ECEC',
        textMuted: '#98A6AD',
        flare: '#FF7A47',
        current: '#8FE0CE',
        border: 'rgba(255, 255, 255, 0.08)',
        borderStrong: 'rgba(255, 255, 255, 0.16)',
        navBg: 'rgba(11, 15, 20, 0.88)',
        navBorder: 'rgba(255, 255, 255, 0.08)',
        footerBg: '#070A0E',
        quoteBg: 'rgba(0, 0, 0, 0.4)',
        tagBg: 'rgba(255, 255, 255, 0.05)',
      };

  return (
    <div
      style={{ backgroundColor: c.bg, color: c.text }}
      className="min-h-screen font-sans antialiased selection:bg-[#D9551F] selection:text-white relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Interactive Dot Grid Hero Effect */}
      <DotGridHero theme={theme} />

      {/* Hardware-Accelerated Ambient Glow & Precision Focus Ring Cursor */}
      <CustomCursor theme={theme} />

      {/* 1. CLEAN WALLED-GARDEN NAVIGATION */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          style={{
            backgroundColor: c.navBg,
            borderColor: c.navBorder,
            boxShadow: isLight
              ? '0 10px 30px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)'
              : '0 10px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
          className="pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-2xl border backdrop-blur-2xl max-w-4xl w-full shadow-sm transition-all"
        >
          {/* Logo - Scrolls top cleanly without hash */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity bg-transparent border-none p-0 cursor-pointer text-left"
            title="Kaivex Local Services - Return to top"
          >
            <KaivexLogo variant="full" size="sm" theme={theme} showSublabel={false} animate={false} />
            <span
              style={{
                backgroundColor: isLight ? 'rgba(46,156,130,0.1)' : 'rgba(143,224,206,0.1)',
                color: c.current,
                borderColor: isLight ? 'rgba(46,156,130,0.25)' : 'rgba(143,224,206,0.25)',
              }}
              className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border"
            >
              TRADES, BARBERS &amp; LOCAL SERVICES
            </span>
          </button>

          {/* Nav Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              style={{ color: c.textMuted }}
              className="text-xs font-semibold hover:opacity-80 transition hidden md:block bg-transparent border-none cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={(e) => scrollToSection(e, 'who-its-for')}
              style={{ color: c.textMuted }}
              className="text-xs font-semibold hover:opacity-80 transition hidden md:block bg-transparent border-none cursor-pointer"
            >
              Who It&apos;s For
            </button>
            <button
              onClick={(e) => scrollToSection(e, 'faq')}
              style={{ color: c.textMuted }}
              className="text-xs font-semibold hover:opacity-80 transition hidden md:block bg-transparent border-none cursor-pointer"
            >
              Questions
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={() => setTheme(isLight ? 'dark' : 'light')}
              style={{ borderColor: c.border, color: c.text }}
              className="p-2 rounded-xl border hover:opacity-80 transition flex items-center justify-center bg-transparent cursor-pointer"
              title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>

            {/* Direct WhatsApp Top Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#1EA952] hover:bg-[#189647] transition shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative z-10 pt-32 pb-16 sm:pt-44 sm:pb-24 px-4 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div
          style={{
            backgroundColor: isLight ? 'rgba(217,85,31,0.1)' : 'rgba(255,122,71,0.12)',
            color: c.flare,
            borderColor: isLight ? 'rgba(217,85,31,0.25)' : 'rgba(255,122,71,0.25)',
          }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-6"
        >
          <PhoneMissed className="w-3.5 h-3.5" />
          STOP LOSING CLIENTS TO UNANSWERED CALLS
        </div>

        {/* Big Bold Plain English Headline with Luminous Typography and NO underline */}
        <h1
          style={{ color: c.text }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto"
        >
          Stop losing{' '}
          <LuminousText text="$15,000+ every month" theme={theme} />
          <br className="hidden sm:inline" /> to missed customer calls.
        </h1>

        {/* 10-Year-Old Simple Subhead */}
        <p
          style={{ color: c.textMuted }}
          className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed tracking-[-0.015em]"
        >
          You are on a ladder, cutting hair, under a sink, or with a client and can&apos;t answer your phone. We text customers back in 30 seconds, answer their questions, and book the job or appointment on your calendar automatically.
        </p>

        {/* Dual CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {/* Main WhatsApp Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-[#1EA952] hover:bg-[#189647] transition shadow-md hover:-translate-y-0.5"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat on WhatsApp (Direct Line)</span>
          </a>

          {/* Secondary Phone Booking Button */}
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: c.panel, borderColor: c.border, color: c.text }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold border hover:opacity-90 transition"
          >
            <Calendar style={{ color: c.flare }} className="w-4 h-4" />
            <span>Or Schedule a 15-Min Phone Call</span>
          </a>
        </div>

        {/* Quick Social Proof Strip */}
        <div
          style={{ color: c.textMuted }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs font-semibold"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 style={{ color: c.current }} className="w-4 h-4" />
            <span>Works with your existing phone</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 style={{ color: c.current }} className="w-4 h-4" />
            <span>Ready in 48 to 72 hours</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 style={{ color: c.current }} className="w-4 h-4" />
            <span>Zero apps to learn</span>
          </div>
        </div>
      </section>

      {/* 3. THE REAL PROBLEM (The Lost Customer Math) */}
      <section
        style={{ borderColor: c.border }}
        className="py-16 px-4 max-w-4xl mx-auto border-t relative z-10"
      >
        <div className="text-center mb-10">
          <span style={{ color: c.flare }} className="text-xs font-mono font-bold uppercase tracking-wider">
            THE EXPENSIVE MISTAKE
          </span>
          <h2 style={{ color: c.text }} className="text-2xl sm:text-4xl font-serif font-bold mt-2">
            What happens when you miss a call right now:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col justify-between shadow-sm"
          >
            <div>
              <span style={{ color: c.flare }} className="text-2xl font-bold font-serif block mb-2">1</span>
              <h3 style={{ color: c.text }} className="text-lg font-bold font-serif mb-2">The Customer Calls</h3>
              <p style={{ color: c.textMuted }} className="text-xs sm:text-sm leading-relaxed">
                Someone needs a haircut, an emergency plumber, a fresh set of lashes, or AC repair. They want it booked right now and call you first.
              </p>
            </div>
          </div>

          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col justify-between shadow-sm"
          >
            <div>
              <span style={{ color: c.flare }} className="text-2xl font-bold font-serif block mb-2">2</span>
              <h3 style={{ color: c.text }} className="text-lg font-bold font-serif mb-2">You Can&apos;t Answer</h3>
              <p style={{ color: c.textMuted }} className="text-xs sm:text-sm leading-relaxed">
                Your hands are busy with shears, tools, or treating a client in your chair. The call goes to voicemail. Nobody leaves voicemails anymore.
              </p>
            </div>
          </div>

          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col justify-between shadow-sm"
          >
            <div>
              <span style={{ color: c.flare }} className="text-2xl font-bold font-serif block mb-2">3</span>
              <h3 style={{ color: c.text }} className="text-lg font-bold font-serif mb-2">They Go to Your Competitor</h3>
              <p style={{ color: c.textMuted }} className="text-xs sm:text-sm leading-relaxed">
                They immediately dial the next shop or contractor on Google or Instagram. In under 60 seconds, you just lost a customer who would have spent hundreds or thousands with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE FIX IT (The 3-Step Simple System) */}
      <section
        id="how-it-works"
        style={{ borderColor: c.border }}
        className="py-20 px-4 max-w-4xl mx-auto border-t relative z-10"
      >
        <div className="text-center mb-12">
          <span style={{ color: c.current }} className="text-xs font-mono font-bold uppercase tracking-wider">
            THE 3-STEP FIX
          </span>
          <h2 style={{ color: c.text }} className="text-2xl sm:text-4xl font-serif font-bold mt-2">
            How we turn missed calls into booked money
          </h2>
          <p style={{ color: c.textMuted }} className="text-sm max-w-xl mx-auto mt-2">
            Everything runs automatically in the background while you focus on doing great work.
          </p>
        </div>

        <div className="space-y-4">
          {/* Step 1 */}
          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col sm:flex-row items-start gap-4 shadow-sm"
          >
            <div
              style={{
                backgroundColor: isLight ? 'rgba(46,156,130,0.15)' : 'rgba(143,224,206,0.15)',
                color: c.current,
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0"
            >
              1
            </div>
            <div className="flex-1">
              <h3 style={{ color: c.text }} className="text-lg font-bold font-serif mb-1">
                Instant Auto Text-Back in Under 30 Seconds
              </h3>
              <p style={{ color: c.textMuted }} className="text-sm leading-relaxed">
                The exact second you miss a call, our system sends them a friendly text message:
              </p>
              <div
                style={{ backgroundColor: c.quoteBg, borderColor: c.border, color: c.text }}
                className="mt-3 p-3 rounded-xl border font-mono text-xs"
              >
                &quot;Hey! This is Ahmad. I&apos;m currently working with a client right now and couldn&apos;t pick up. How can we help you out today?&quot;
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col sm:flex-row items-start gap-4 shadow-sm"
          >
            <div
              style={{
                backgroundColor: isLight ? 'rgba(46,156,130,0.15)' : 'rgba(143,224,206,0.15)',
                color: c.current,
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0"
            >
              2
            </div>
            <div className="flex-1">
              <h3 style={{ color: c.text }} className="text-lg font-bold font-serif mb-1">
                Appointment or Estimate Booked On Your Phone
              </h3>
              <p style={{ color: c.textMuted }} className="text-sm leading-relaxed">
                The customer texts back what service they need. The system asks what day and time they prefer, or gives them your booking calendar. You get an instant text notification with all details ready to go.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col sm:flex-row items-start gap-4 shadow-sm"
          >
            <div
              style={{
                backgroundColor: isLight ? 'rgba(46,156,130,0.15)' : 'rgba(143,224,206,0.15)',
                color: c.current,
              }}
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shrink-0"
            >
              3
            </div>
            <div className="flex-1">
              <h3 style={{ color: c.text }} className="text-lg font-bold font-serif mb-1">
                Automatic 5-Star Google Reviews
              </h3>
              <p style={{ color: c.textMuted }} className="text-sm leading-relaxed">
                Once the job or appointment is finished, the system automatically sends a friendly 1-tap text asking for a Google review. You quickly pile up dozens of 5-star reviews, pushing you to the top of Google Maps in your town.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO THIS IS BUILT FOR (Expanded to Trades, Barbers & Salons) */}
      <section
        id="who-its-for"
        style={{ borderColor: c.border }}
        className="py-16 px-4 max-w-4xl mx-auto border-t relative z-10"
      >
        <div className="text-center mb-10">
          <span style={{ color: c.flare }} className="text-xs font-mono font-bold uppercase tracking-wider">
            WHO THIS IS BUILT FOR
          </span>
          <h2 style={{ color: c.text }} className="text-2xl sm:text-3xl font-serif font-bold mt-2">
            Built for any service business whose hands are busy with clients
          </h2>
          <p style={{ color: c.textMuted }} className="text-sm max-w-xl mx-auto mt-2">
            If you do great work but lose money whenever your phone rings while you are busy, this is for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Column A: Trades & Field Services */}
          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border shadow-sm space-y-4"
          >
            <div className="flex items-center gap-2">
              <div
                style={{
                  backgroundColor: isLight ? 'rgba(217,85,31,0.15)' : 'rgba(255,122,71,0.15)',
                  color: c.flare,
                }}
                className="w-8 h-8 rounded-lg flex items-center justify-center"
              >
                <Wrench className="w-4 h-4" />
              </div>
              <h3 style={{ color: c.text }} className="font-serif font-bold text-base">
                Home Services &amp; Trades
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tradeServices.map((trade, idx) => (
                <span
                  key={idx}
                  style={{ backgroundColor: c.tagBg, borderColor: c.border, color: c.text }}
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                >
                  {trade}
                </span>
              ))}
            </div>
          </div>

          {/* Column B: Barbers, Salons & Studios */}
          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border shadow-sm space-y-4"
          >
            <div className="flex items-center gap-2">
              <div
                style={{
                  backgroundColor: isLight ? 'rgba(46,156,130,0.15)' : 'rgba(143,224,206,0.15)',
                  color: c.current,
                }}
                className="w-8 h-8 rounded-lg flex items-center justify-center"
              >
                <Scissors className="w-4 h-4" />
              </div>
              <h3 style={{ color: c.text }} className="font-serif font-bold text-base">
                Barbers, Salons &amp; Studios
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {studioServices.map((studio, idx) => (
                <span
                  key={idx}
                  style={{ backgroundColor: c.tagBg, borderColor: c.border, color: c.text }}
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                >
                  {studio}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMON QUESTIONS (FAQ) */}
      <section
        id="faq"
        style={{ borderColor: c.border }}
        className="py-20 px-4 max-w-3xl mx-auto border-t relative z-10"
      >
        <div className="text-center mb-10">
          <span style={{ color: c.current }} className="text-xs font-mono font-bold uppercase tracking-wider">
            COMMON QUESTIONS
          </span>
          <h2 style={{ color: c.text }} className="text-2xl sm:text-4xl font-serif font-bold mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = faqOpen === idx;
            return (
              <div
                key={idx}
                style={{ backgroundColor: c.panel, borderColor: c.border }}
                className="rounded-2xl border overflow-hidden transition shadow-sm"
              >
                <button
                  onClick={() => setFaqOpen(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 bg-transparent border-none cursor-pointer"
                >
                  <span style={{ color: c.text }} className="font-bold text-sm sm:text-base font-serif">
                    {faq.q}
                  </span>
                  <ChevronDown
                    style={{ color: c.flare }}
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    style={{ borderColor: c.border, color: c.textMuted }}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. FINAL ACTION SECTION */}
      <section
        style={{ borderColor: c.border }}
        className="py-20 px-4 max-w-3xl mx-auto border-t text-center relative z-10"
      >
        <span style={{ color: c.flare }} className="text-xs font-mono font-bold uppercase tracking-wider mb-3 block">
          READY TO STOP LOSING JOBS &amp; CLIENTS?
        </span>
        <h2 style={{ color: c.text }} className="text-3xl sm:text-4xl font-serif font-bold mb-4">
          Let&apos;s get this running on your phone this week.
        </h2>
        <p style={{ color: c.textMuted }} className="text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
          Zero pressure. Send us a quick text on WhatsApp or pick a quick 15-minute time. We will show you how it works live on your phone.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#1EA952] hover:bg-[#189647] transition shadow-md"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat With Us on WhatsApp</span>
          </a>

          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: c.panel, borderColor: c.border, color: c.text }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold border hover:opacity-90 transition"
          >
            <Calendar style={{ color: c.flare }} className="w-4 h-4" />
            <span>Schedule 15-Min Phone Call</span>
          </a>
        </div>
      </section>

      {/* 8. WALLED GARDEN FOOTER */}
      <footer
        style={{ backgroundColor: c.footerBg, borderColor: c.border, color: c.textMuted }}
        className="py-12 px-4 border-t text-center text-xs relative z-10 transition-colors"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <button
            onClick={scrollToTop}
            className="bg-transparent border-none p-0 cursor-pointer"
            title="Kaivex Local Services - Return to top"
          >
            <KaivexLogo variant="full" size="sm" theme={theme} showSublabel={false} animate={false} />
          </button>
          <p className="max-w-md">
            Kaivex Local Services &amp; Trades Division. Dedicated missed-call recovery and automated reviews for local appointment and service businesses.
          </p>
          <div style={{ color: c.text }} className="flex items-center gap-4 font-mono text-[11px]">
            <a href="tel:+18484004949" className="hover:underline">
              +1 (848) 400-4949
            </a>
            <span>•</span>
            <a href="mailto:kaivexsystems@gmail.com" className="hover:underline">
              kaivexsystems@gmail.com
            </a>
          </div>
          <p style={{ color: c.textMuted }} className="text-[10px] mt-2">
            &copy; {new Date().getFullYear()} Kaivex Systems. All rights reserved.
          </p>
        </div>
      </footer>

      {/* 9. STICKY MOBILE BOTTOM BAR (Always visible for contractors on phones) */}
      <div
        style={{ backgroundColor: c.navBg, borderColor: c.border }}
        className="fixed bottom-0 left-0 right-0 p-3 backdrop-blur-lg border-t z-40 sm:hidden flex items-center justify-between gap-3 shadow-lg"
      >
        <div className="flex flex-col">
          <span style={{ color: c.text }} className="text-[11px] font-bold leading-tight">Got questions?</span>
          <span style={{ color: c.textMuted }} className="text-[10px]">Chat directly with our team</span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1EA952] hover:bg-[#189647] shadow transition"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
