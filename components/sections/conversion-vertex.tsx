"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Calendar, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export function ConversionVertex() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <SpotlightCard
        spotlightColor="rgba(234, 88, 12, 0.18)"
        borderColor="rgba(234, 88, 12, 0.45)"
        className="p-8 sm:p-14 text-center relative overflow-hidden bg-gradient-to-b from-[#0e1626] to-[#070a0f] border-orange-500/30"
      >
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-950/60 border border-orange-700/50 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3.5 h-3.5" />
            DIRECT TO CALENDAR // ZERO SPAM SALES SCRIPTS
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6">
            Ready to Engineer Your <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent glow-orange">
              Predictable Acquisition Engine?
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a private 30-minute diagnostic session directly with Ahmad Farooq &amp; Ayaan Habib. We analyze your unit economics, identify where your pipeline leaks capital, and map out your custom 14-day foundation sprint.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="https://cal.com/ahmad-farooq-tuwcnw/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagneticButton className="px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-mono text-sm font-bold tracking-wider shadow-2xl shadow-orange-600/40 transition flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-orange-200" />
                <span>Select Diagnostic Time on Cal.com</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-400 pt-8 border-t border-slate-800">
            <span className="flex items-center justify-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Strictly Diagnostic (No Hard Pitch)
            </span>
            <span className="flex items-center justify-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 14-Day Delivery Timeline
            </span>
            <span className="flex items-center justify-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Owned Digital Infrastructure
            </span>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
