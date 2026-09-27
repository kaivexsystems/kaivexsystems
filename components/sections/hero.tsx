"use client";

import React from "react";
import { useTrack } from "@/components/track-context";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, Sparkles, Terminal, Activity } from "lucide-react";

export function Hero() {
  const { track, setTrack } = useTrack();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 px-4 flex flex-col justify-center items-center overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-orange-600/15 via-teal-500/10 to-transparent blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Systems Status Beacon */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 shadow-lg shadow-black/50 mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs font-bold text-slate-300 tracking-wider">
            KAIVEX SYSTEMS 2.0 // DEPLOYED &amp; ACTIVE
          </span>
          <span className="text-slate-600 font-mono text-xs">•</span>
          <span className="font-mono text-[11px] text-teal-400 font-semibold">
            0% Fluff • 100% Code &amp; Execution
          </span>
        </motion.div>

        {/* Dynamic Track-Adaptive Headline */}
        <AnimatePresence mode="wait">
          {track === "b2b" ? (
            <motion.div
              key="b2b-headline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-950/60 border border-orange-600/40 text-orange-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <Zap className="w-3.5 h-3.5 text-orange-400" />
                Track 01: High-Ticket B2B &amp; Executive Consultants
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.08] mb-6">
                Engineered Inbound Authority. <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 bg-clip-text text-transparent glow-orange">
                  Zero Ad Spend. Closed Retainers.
                </span>
              </h1>
              <p className="max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-10">
                For B2B Founders, Executive Coaches &amp; Boutique Advisors. We unite high-status LinkedIn ghostwriting, custom interactive scorecard web apps, and hand-verified C-suite outbound pipelines into a predictable deal machine.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="contractor-headline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-950/60 border border-teal-600/40 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <Activity className="w-3.5 h-3.5 text-teal-400" />
                Track 02: Home Services &amp; Trade Contractors
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.08] mb-6">
                Sub-60s Speed to Lead. <br />
                <span className="bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-300 bg-clip-text text-transparent glow-teal">
                  Recover Every Missed Call. Fill Crews.
                </span>
              </h1>
              <p className="max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-10">
                For Plumbers, HVAC Technicians &amp; Roofing Operators. Stop letting \$3,000 emergency jobs slip to competitors who pick up first. We engineer instant missed-call auto-textbacks, US VoIP dialers, and dedicated cold callers.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dual Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://cal.com/ahmad-farooq-tuwcnw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton className="px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-mono text-sm font-bold tracking-wide shadow-xl shadow-orange-600/35 transition flex items-center gap-2">
              <span>Book 30-Min Diagnostic</span>
              <ArrowRight className="w-4 h-4 text-orange-200" />
            </MagneticButton>
          </a>

          <a href="#architecture">
            <MagneticButton className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-sm font-semibold transition flex items-center gap-2">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span>Explore Systems Blueprint</span>
            </MagneticButton>
          </a>
        </motion.div>

        {/* Metrics Grid Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 p-4 rounded-2xl border border-slate-800/80 bg-[#0b1019]/70 backdrop-blur-xl shadow-2xl"
        >
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <p className="font-mono text-[10px] text-orange-400 font-bold uppercase mb-1">Empirical Proof</p>
            <p className="font-display font-extrabold text-2xl text-white">4 Leads</p>
            <p className="text-[11px] text-slate-400 font-mono">Week 1 Execution ($0 Ads)</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <p className="font-mono text-[10px] text-teal-400 font-bold uppercase mb-1">Scale Record</p>
            <p className="font-display font-extrabold text-2xl text-white">10x Growth</p>
            <p className="text-[11px] text-slate-400 font-mono">Coin Bureau Audience</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <p className="font-mono text-[10px] text-blue-400 font-bold uppercase mb-1">Contractor Metric</p>
            <p className="font-display font-extrabold text-2xl text-white">&lt; 45 Sec</p>
            <p className="text-[11px] text-slate-400 font-mono">Missed-Call Speed-to-Lead</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <p className="font-mono text-[10px] text-emerald-400 font-bold uppercase mb-1">Architecture</p>
            <p className="font-display font-extrabold text-2xl text-white">100% Owned</p>
            <p className="text-[11px] text-slate-400 font-mono">Custom Code • Zero Lock-in</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
