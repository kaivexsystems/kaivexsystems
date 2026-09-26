'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('kaivex_cookie_consent');
      if (!consent) {
        // Show after a brief delay for smoother UX
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('kaivex_cookie_consent', 'accepted');
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('kaivex_cookie_consent', 'declined');
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-5 right-5 left-5 sm:left-auto sm:max-w-md z-50 p-4 rounded-xl border border-white/10 bg-[#0B0F14]/95 text-white backdrop-blur-md shadow-2xl transition-all duration-300 font-sans text-xs"
    >
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-[#D9551F] mt-1.5 shrink-0 animate-pulse" />
        <div className="space-y-2">
          <p className="text-slate-300 leading-relaxed">
            We use essential cookies to optimize performance and analyze traffic to improve our growth infrastructure. Read our{' '}
            <Link href="/privacy" className="text-[#8FE0CE] underline hover:text-white transition-colors">
              Privacy Policy
            </Link>.
          </p>
          <div className="flex items-center gap-2 pt-1 font-mono">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-lg bg-white text-[#0B0F14] font-medium hover:bg-slate-200 transition-colors text-xs"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-lg border border-white/15 text-slate-300 hover:text-white hover:border-white/30 transition-colors text-xs"
            >
              Essential Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
