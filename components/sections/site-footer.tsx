'use client';

import React from 'react';
import { useTrack } from '../track-context';

export function SiteFooter() {
  const { track, trackColor } = useTrack();

  return (
    <footer className="relative bg-[#040608] border-t border-white/10 text-slate-400 font-mono text-xs overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] opacity-50 blur-[1px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${trackColor}, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded flex items-center justify-center font-bold text-white text-xs"
                style={{ backgroundColor: trackColor }}
              >
                K
              </div>
              <span className="font-bold text-white tracking-widest text-sm">
                KAIVEX SYSTEMS
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed text-xs">
              Dual-engine growth infrastructure. We build automated C-suite client acquisition
              pipelines for B2B founders and sub-60-second speed-to-lead dispatch systems for trade
              contractors.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                All Engines Operational
              </span>
              <span className="text-[10px] text-slate-500">
                Lahore &bull; Parlin, New Jersey
              </span>
            </div>
          </div>

          {/* Track 1: B2B Growth */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">
              B2B & Founders Engine
            </h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a href="#engine" className="hover:text-white transition-colors">
                  Interactive Scorecard Funnels
                </a>
              </li>
              <li>
                <a href="#engine" className="hover:text-white transition-colors">
                  LinkedIn Ghostwriting & Authority
                </a>
              </li>
              <li>
                <a href="#engine" className="hover:text-white transition-colors">
                  Dedicated SMTP Infrastructure
                </a>
              </li>
              <li>
                <a href="#wall" className="hover:text-white transition-colors">
                  Coin Bureau Case Study
                </a>
              </li>
              <li>
                <a href="#wall" className="hover:text-white transition-colors">
                  Rise with Fariha Blueprint
                </a>
              </li>
            </ul>
          </div>

          {/* Track 2: Trade Contractors */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Trade Contractors
            </h5>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a href="#engine" className="hover:text-white transition-colors">
                  Sub-60s Speed-to-Lead
                </a>
              </li>
              <li>
                <a href="#engine" className="hover:text-white transition-colors">
                  Missed-Call AI Auto-Textback
                </a>
              </li>
              <li>
                <a href="#engine" className="hover:text-white transition-colors">
                  VoIP IVR & Twilio Routing
                </a>
              </li>
              <li>
                <a href="#engine" className="hover:text-white transition-colors">
                  LUMS Outbound Cold Caller Ops
                </a>
              </li>
              <li>
                <a href="#wall" className="hover:text-white transition-colors">
                  Texas Plumbing & HVAC Proof
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Kaivex Systems Ltd. Built with Next.js 15, Motion & Tailwind v4.
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-white transition-colors">
              Back to Top &uarr;
            </a>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400">
              Zero Vanity Metrics. Production Deployments Only.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
