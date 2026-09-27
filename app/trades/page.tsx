'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  PhoneMissed,
  MessageSquare,
  Calendar,
  CheckCircle2,
  Wrench,
  ChevronDown,
} from 'lucide-react';
import { KaivexLogo } from '@/components/ui/kaivex-logo';
import { DotGridHero } from '@/components/ui/dot-grid-hero';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { LuminousText } from '@/components/ui/luminous-text';

const WHATSAPP_URL =
  "https://wa.me/18484004949?text=Hey%20Ahmad,%20I%20run%20a%20trades/home%20services%20business%20and%20want%20to%20stop%20losing%20jobs%20to%20missed%20calls.";
const CAL_URL = 'https://cal.com/ahmad-farooq-tuwcnw/15min';

export default function TradesLandingPage() {
  const [theme] = useState<'light'>('light');
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

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

  const tradesList = [
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

  const faqs = [
    {
      q: 'Do I need to change my cell or business phone number?',
      a: 'No! It connects directly to your existing phone number. You keep the exact same number you already have on your trucks and business cards.',
    },
    {
      q: 'Do I have to learn complicated computer software?',
      a: 'Zero. You do not need to learn anything new. Whenever a customer asks for a quote or books an appointment, you get a clean text message right on your regular phone.',
    },
    {
      q: 'What happens when someone calls while my hands are dirty or I am driving?',
      a: 'The moment you miss the call, our system sends them a friendly text in under 30 seconds asking what they need help with. They text back their address and problem so you do not lose the job.',
    },
    {
      q: 'How fast can we set this up for my business?',
      a: 'We set up and test the whole system in 48 to 72 hours. You do not have to lift a finger—we build and test everything for you.',
    },
    {
      q: 'What if a customer calls late at night?',
      a: 'The system automatically texts them, lets them know your emergency policy or morning hours, collects their info, and puts them first in line for when you open.',
    },
  ];

  // Brand color tokens matching main site exactly
  const c = {
    bg: '#EBE3D3',
    panel: '#E2DAC8',
    panelHover: '#DDD4BF',
    text: '#14181B',
    textMuted: '#6B655F',
    flare: '#D9551F',
    current: '#2E9C82',
    border: 'rgba(20, 24, 27, 0.09)',
    navBg: 'rgba(235, 227, 211, 0.88)',
    navBorder: 'rgba(20, 24, 27, 0.08)',
    footerBg: '#DFD7C4',
  };

  return (
    <div className="min-h-screen bg-[#EBE3D3] text-[#14181B] font-sans antialiased selection:bg-[#D9551F] selection:text-white relative overflow-hidden">
      {/* Background Interactive Dot Grid Hero Effect */}
      <DotGridHero theme="light" />

      {/* Hardware-Accelerated Ambient Glow & Precision Focus Ring Cursor */}
      <CustomCursor theme="light" />

      {/* 1. CLEAN WALLED-GARDEN NAVIGATION */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          style={{
            backgroundColor: c.navBg,
            borderColor: c.navBorder,
            boxShadow: '0 10px 30px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
          className="pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-2xl border backdrop-blur-2xl max-w-4xl w-full shadow-sm transition-all"
        >
          {/* Logo - Scrolls top cleanly without hash */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity bg-transparent border-none p-0 cursor-pointer text-left"
            title="Kaivex Trades - Return to top"
          >
            <KaivexLogo variant="full" size="sm" theme={theme} showSublabel={false} animate={false} />
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#2E9C82]/10 text-[#2E9C82] border border-[#2E9C82]/20">
              TRADES &amp; HOME SERVICES
            </span>
          </button>

          {/* Nav Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="text-xs font-semibold text-[#6B655F] hover:text-[#14181B] transition hidden md:block bg-transparent border-none cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={(e) => scrollToSection(e, 'faq')}
              className="text-xs font-semibold text-[#6B655F] hover:text-[#14181B] transition hidden md:block bg-transparent border-none cursor-pointer"
            >
              Questions
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D9551F]/10 text-[#D9551F] border border-[#D9551F]/20 mb-6">
          <PhoneMissed className="w-3.5 h-3.5" />
          STOP LOSING JOBS TO UNANSWERED CALLS
        </div>

        {/* Big Bold Plain English Headline with Luminous Typography and NO underline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#14181B] leading-[1.15] mb-6 max-w-4xl mx-auto">
          Stop losing{' '}
          <LuminousText text="$15,000+ every month" theme="light" />
          <br className="hidden sm:inline" /> to missed customer calls.
        </h1>

        {/* 10-Year-Old Simple Subhead */}
        <p className="text-base sm:text-lg md:text-xl text-[#6B655F] max-w-2xl mb-8 leading-relaxed tracking-[-0.015em]">
          You are on a ladder or fixing a pipe and can&apos;t answer your phone. We text customers back in 30 seconds, answer their questions, and book the job on your calendar—automatically.
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
            <span>Chat on WhatsApp (Reply in 60s)</span>
          </a>

          {/* Secondary Phone Booking Button */}
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-[#14181B] hover:bg-[#DDD4BF] border transition"
          >
            <Calendar className="w-4 h-4 text-[#D9551F]" />
            <span>Or Schedule a 15-Min Phone Call</span>
          </a>
        </div>

        {/* Quick Social Proof Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-[#6B655F] font-semibold">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2E9C82]" />
            <span>Works with your existing phone</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2E9C82]" />
            <span>Ready in 48 to 72 hours</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2E9C82]" />
            <span>Zero apps to learn</span>
          </div>
        </div>
      </section>

      {/* 3. THE REAL PROBLEM (The Lost Job Math) */}
      <section
        style={{ borderColor: c.border }}
        className="py-16 px-4 max-w-4xl mx-auto border-t relative z-10"
      >
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D9551F]">
            THE EXPENSIVE MISTAKE
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#14181B] mt-2">
            What happens when you miss a call right now:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col justify-between shadow-sm"
          >
            <div>
              <span className="text-2xl font-bold font-serif text-[#D9551F] block mb-2">1</span>
              <h3 className="text-lg font-bold font-serif mb-2">The Customer Calls</h3>
              <p className="text-xs sm:text-sm text-[#6B655F] leading-relaxed">
                A homeowner has a broken furnace or a leaky toilet. They want help right now and call you first.
              </p>
            </div>
          </div>

          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col justify-between shadow-sm"
          >
            <div>
              <span className="text-2xl font-bold font-serif text-[#D9551F] block mb-2">2</span>
              <h3 className="text-lg font-bold font-serif mb-2">You Can&apos;t Answer</h3>
              <p className="text-xs sm:text-sm text-[#6B655F] leading-relaxed">
                Your hands are busy holding tools, driving, or talking to a client. The call goes to voicemail. Nobody leaves voicemails anymore.
              </p>
            </div>
          </div>

          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col justify-between shadow-sm"
          >
            <div>
              <span className="text-2xl font-bold font-serif text-[#D9551F] block mb-2">3</span>
              <h3 className="text-lg font-bold font-serif mb-2">They Hire Your Competitor</h3>
              <p className="text-xs sm:text-sm text-[#6B655F] leading-relaxed">
                They immediately dial the next number on Google. In 60 seconds, you just lost a $1,500 to $5,000 job to the guy down the street.
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
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E9C82]">
            THE 3-STEP FIX
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#14181B] mt-2">
            How we turn missed calls into booked money
          </h2>
          <p className="text-sm text-[#6B655F] max-w-xl mx-auto mt-2">
            Everything runs automatically in the background while you focus on doing great work.
          </p>
        </div>

        <div className="space-y-4">
          {/* Step 1 */}
          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col sm:flex-row items-start gap-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2E9C82]/15 text-[#2E9C82] flex items-center justify-center font-bold text-lg shrink-0">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold font-serif mb-1">
                Instant Auto Text-Back in Under 30 Seconds
              </h3>
              <p className="text-sm text-[#6B655F] leading-relaxed">
                The exact second you miss a call, our system sends them a friendly text message:
              </p>
              <div
                style={{ backgroundColor: 'rgba(255,255,255,0.7)', borderColor: c.border }}
                className="mt-3 p-3 rounded-xl border font-mono text-xs text-[#14181B]"
              >
                &quot;Hey! This is Ahmad with Kaivex Plumbing. I&apos;m on a job site right now and couldn&apos;t pick up. How can we help you out today?&quot;
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col sm:flex-row items-start gap-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2E9C82]/15 text-[#2E9C82] flex items-center justify-center font-bold text-lg shrink-0">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold font-serif mb-1">
                Quote &amp; Estimate Booked On Your Phone
              </h3>
              <p className="text-sm text-[#6B655F] leading-relaxed">
                The customer texts back what is broken and where they live. The system can ask a couple simple questions and give them your available times to come look at it. You get a text notification with all details ready to go.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="p-6 rounded-2xl border flex flex-col sm:flex-row items-start gap-4 shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-[#2E9C82]/15 text-[#2E9C82] flex items-center justify-center font-bold text-lg shrink-0">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold font-serif mb-1">
                Automatic 5-Star Google Reviews
              </h3>
              <p className="text-sm text-[#6B655F] leading-relaxed">
                Once you finish the job, tap one button or let the system automatically send a 1-tap text asking for a review. You quickly pile up dozens of 5-star Google reviews, pushing your business to the top of Google Maps in your city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRADES WE WORK WITH */}
      <section
        style={{ borderColor: c.border }}
        className="py-16 px-4 max-w-4xl mx-auto border-t relative z-10"
      >
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D9551F]">
            WHO THIS IS BUILT FOR
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#14181B] mt-2">
            Built for hard-working trade businesses
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
          {tradesList.map((trade, idx) => (
            <span
              key={idx}
              style={{ backgroundColor: c.panel, borderColor: c.border }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border text-[#14181B] shadow-sm"
            >
              <Wrench className="w-3 h-3 text-[#D9551F]" />
              {trade}
            </span>
          ))}
        </div>
      </section>

      {/* 6. COMMON QUESTIONS (FAQ) */}
      <section
        id="faq"
        style={{ borderColor: c.border }}
        className="py-20 px-4 max-w-3xl mx-auto border-t relative z-10"
      >
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E9C82]">
            COMMON QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#14181B] mt-2">
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
                  <span className="font-bold text-sm sm:text-base font-serif text-[#14181B]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D9551F] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    style={{ borderColor: c.border }}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6B655F] leading-relaxed border-t"
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
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D9551F] mb-3 block">
          READY TO STOP LOSING JOBS?
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#14181B] mb-4">
          Let&apos;s get this set up for your business this week.
        </h2>
        <p className="text-sm sm:text-base text-[#6B655F] max-w-lg mx-auto mb-8 leading-relaxed">
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
            style={{ backgroundColor: c.panel, borderColor: c.border }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-[#14181B] hover:bg-[#DDD4BF] border transition"
          >
            <Calendar className="w-4 h-4 text-[#D9551F]" />
            <span>Schedule 15-Min Phone Call</span>
          </a>
        </div>
      </section>

      {/* 8. WALLED GARDEN FOOTER */}
      <footer
        style={{ backgroundColor: c.footerBg, borderColor: c.border }}
        className="py-12 px-4 border-t text-center text-xs text-[#6B655F] relative z-10"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <button
            onClick={scrollToTop}
            className="bg-transparent border-none p-0 cursor-pointer"
            title="Kaivex Trades - Return to top"
          >
            <KaivexLogo variant="full" size="sm" theme={theme} showSublabel={false} animate={false} />
          </button>
          <p className="max-w-md">
            Kaivex Trades &amp; Home Services Division. Dedicated missed-call recovery and review automation for local service businesses.
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px] text-[#14181B]">
            <a href="tel:+18484004949" className="hover:underline">
              +1 (848) 400-4949
            </a>
            <span>•</span>
            <a href="mailto:kaivexsystems@gmail.com" className="hover:underline">
              kaivexsystems@gmail.com
            </a>
          </div>
          <p className="text-[10px] text-[#7A828A] mt-2">
            &copy; {new Date().getFullYear()} Kaivex Systems. All rights reserved.
          </p>
        </div>
      </footer>

      {/* 9. STICKY MOBILE BOTTOM BAR (Always visible for contractors on phones) */}
      <div
        style={{ backgroundColor: 'rgba(235, 227, 211, 0.95)', borderColor: c.border }}
        className="fixed bottom-0 left-0 right-0 p-3 backdrop-blur-lg border-t z-40 sm:hidden flex items-center justify-between gap-3 shadow-lg"
      >
        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-[#14181B] leading-tight">Got questions?</span>
          <span className="text-[10px] text-[#6B655F]">Instant WhatsApp response</span>
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
