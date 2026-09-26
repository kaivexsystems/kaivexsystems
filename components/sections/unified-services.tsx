'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Clock, Shield } from 'lucide-react';

export function UnifiedServices() {
  return (
    <section id="services" className="py-28 px-4 max-w-6xl mx-auto text-white select-none">
      {/* Clean Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-sans font-bold tracking-[0.2em] text-purple-400 uppercase px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40">
          WHO WE HELP
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight mt-4 text-white">
          Two clear solutions. Zero confusion.
        </h2>
        <p className="text-slate-400 text-base mt-3 leading-relaxed">
          We build growth infrastructure for two distinct business models. Choose what fits you best.
        </p>
      </div>

      {/* Side-by-Side Unified Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Solution 1: B2B Founders & Consultants */}
        <div className="relative rounded-3xl p-8 sm:p-10 bg-[#0A0D15] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[90px] pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap className="w-3.5 h-3.5" />
              Solution 01
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
              For B2B Consultants, Coaches & SaaS
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Predictable high-ticket clients without spending thousands on paid ads. We engineer your personal brand authority and private outbound email engine.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">Custom Interactive Scorecard</p>
                  <p className="text-xs text-slate-400">Diagnostic web tools that qualify high-intent clients automatically.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">LinkedIn Executive Ghostwriting</p>
                  <p className="text-xs text-slate-400">High-conviction content that drives inbound messages to your inbox.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">Verified Outbound Infrastructure</p>
                  <p className="text-xs text-slate-400">64 secondary inboxes with strict SPF, DKIM, and DMARC verification.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-sans text-slate-500 uppercase tracking-wider block">Proven Metric</span>
              <span className="text-lg font-bold text-purple-400">4 Leads in 48 Hours ($0 Ads)</span>
            </div>
            <a
              href="https://cal.com/ahmad-farooq-tuwcnw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-sans text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Solution 2: Home Service & Trade Contractors */}
        <div className="relative rounded-3xl p-8 sm:p-10 bg-[#0A0D15] border border-white/10 hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/5 rounded-full blur-[90px] pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Clock className="w-3.5 h-3.5" />
              Solution 02
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
              For Plumbers, HVAC & Roofers
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Never lose an emergency job because you could not answer the phone. We respond to every lead in under 60 seconds and fill your crew schedules.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">Sub-60s Missed-Call Auto-Textback</p>
                  <p className="text-xs text-slate-400">Instantly texts homeowners back while they are still looking to buy.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">Twilio Smart Phone Tree & Routing</p>
                  <p className="text-xs text-slate-400">Routes emergency jobs to on-call technicians without messy handoffs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">US Outbound Cold Caller Operations</p>
                  <p className="text-xs text-slate-400">Trained callers dialing commercial property managers to win contracts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-sans text-slate-500 uppercase tracking-wider block">Proven Metric</span>
              <span className="text-lg font-bold text-teal-400">&lt; 45 Second Response Time</span>
            </div>
            <a
              href="https://cal.com/ahmad-farooq-tuwcnw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-sans text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnifiedServices;
