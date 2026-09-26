"use client";

import React from "react";
import { useTrack } from "@/components/track-context";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { 
  FileText, 
  Sparkles, 
  Send, 
  Calendar, 
  PhoneCall, 
  MessageSquare, 
  Users, 
  Wrench,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function DualEngineBento() {
  const { track } = useTrack();

  return (
    <section id="architecture" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="font-mono text-xs font-bold text-teal-400 bg-teal-950/60 border border-teal-700/50 px-3 py-1 rounded-full uppercase tracking-wider">
          SYSTEMS BLUEPRINT
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-3 mb-4">
          The Architecture Bento
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {track === "b2b"
            ? "Engineered for executive consultants, coaches, and SaaS founders to command high-ticket retained deal flow."
            : "Engineered for trade contractors to eliminate lead leakage and maintain fully booked dispatch boards."}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {track === "b2b" ? (
          <motion.div
            key="b2b-bento"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {/* Card 1: Positioning Landing Page (Col 2) */}
            <SpotlightCard
              spotlightColor="rgba(37, 99, 235, 0.15)"
              borderColor="rgba(37, 99, 235, 0.4)"
              className="md:col-span-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-700/50">
                    INBOUND ENGINE
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Profile &amp; Positioning Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  We transform your standard LinkedIn profile into an executive sales landing page. We craft high-status banners, structured offer hooks, and direct Cal.com conversion bridges that position you as the definitive authority in your niche.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
                <span className="flex items-center gap-1.5 text-blue-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 800–1,200 Monthly Views
                </span>
                <span className="flex items-center gap-1.5 text-blue-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Zero Resume Formatting
                </span>
              </div>
            </SpotlightCard>

            {/* Card 2: Ghostwriting 3x/week */}
            <SpotlightCard
              spotlightColor="rgba(234, 88, 12, 0.15)"
              borderColor="rgba(234, 88, 12, 0.4)"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-orange-900/40 text-orange-300 border border-orange-700/50">
                    10% TIME INPUT
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Executive Ghostwriting
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Spend 45–60 minutes a month sending quick voice notes or joining a strategy sync. We translate your raw boardroom stories into 3x weekly high-signal LinkedIn frameworks.
                </p>
              </div>
              <div className="text-xs font-mono text-orange-400 pt-3 border-t border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 20,000+ Monthly Impressions
              </div>
            </SpotlightCard>

            {/* Card 3: Interactive Scorecard App */}
            <SpotlightCard
              spotlightColor="rgba(13, 148, 136, 0.15)"
              borderColor="rgba(13, 148, 136, 0.4)"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-teal-900/40 text-teal-300 border border-teal-700/50">
                    LEAD MAGNET APP
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Interactive Diagnostic Web App
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Custom-coded 3-minute self-diagnostic scorecard. Captures work email, company, and decision-maker title while delivering an automated leadership PDF report.
                </p>
              </div>
              <div className="text-xs font-mono text-teal-400 pt-3 border-t border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 40–60 Corporate Opt-ins / Mo
              </div>
            </SpotlightCard>

            {/* Card 4: Precision Outbound (Col 2) */}
            <SpotlightCard
              spotlightColor="rgba(234, 88, 12, 0.15)"
              borderColor="rgba(234, 88, 12, 0.4)"
              className="md:col-span-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    <Send className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-orange-900/40 text-orange-300 border border-orange-700/50">
                    OUTBOUND PRECISION
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Verified C-Suite Decision-Maker Inboxes
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  100 hand-picked enterprise executives (MDs, VPs, CHROs) verified via direct SMTP socket checks. We execute bespoke 3-touch observation sequences that spark organic conversations without robotic spam filters.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
                <span className="flex items-center gap-1.5 text-orange-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 0% Bounce Rate Guarantee
                </span>
                <span className="flex items-center gap-1.5 text-orange-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 8%–12% Reply Benchmark
                </span>
              </div>
            </SpotlightCard>
          </motion.div>
        ) : (
          <motion.div
            key="contractors-bento"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {/* Contractor Card 1: Sub-60s Speed to Lead (Col 2) */}
            <SpotlightCard
              spotlightColor="rgba(13, 148, 136, 0.15)"
              borderColor="rgba(13, 148, 136, 0.4)"
              className="md:col-span-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-teal-900/40 text-teal-300 border border-teal-700/50">
                    SPEED TO LEAD
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Sub-60s Missed-Call Auto-Textback
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  When a homeowner calls while your technicians are under a sink or on a roof, our webhook fires a personalized text message in under 45 seconds. You capture the \$2,500 emergency job before they can call the next contractor on Google.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
                <span className="flex items-center gap-1.5 text-teal-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Under 45-Second Response
                </span>
                <span className="flex items-center gap-1.5 text-teal-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 68% Recovery Rate
                </span>
              </div>
            </SpotlightCard>

            {/* Contractor Card 2: VoIP Dialer */}
            <SpotlightCard
              spotlightColor="rgba(37, 99, 235, 0.15)"
              borderColor="rgba(37, 99, 235, 0.4)"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-blue-900/40 text-blue-300 border border-blue-700/50">
                    DIALER INFRASTRUCTURE
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Dedicated US VoIP Infrastructure
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Local area-code phone provisioning, call recording, whisper monitoring, and automated dispatch routing configured specifically for your trade market.
                </p>
              </div>
              <div className="text-xs font-mono text-blue-400 pt-3 border-t border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> High-Reputation Telecom Carrier
              </div>
            </SpotlightCard>

            {/* Contractor Card 3: LUMS Calling Ops */}
            <SpotlightCard
              spotlightColor="rgba(234, 88, 12, 0.15)"
              borderColor="rgba(234, 88, 12, 0.4)"
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-orange-900/40 text-orange-300 border border-orange-700/50">
                    OPERATIONS (AYAAN)
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Dedicated Outbound Calling Reps
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Trained university-caliber cold callers dialing local property managers, commercial accounts, and high-value residential leads to book estimates directly onto your schedule.
                </p>
              </div>
              <div className="text-xs font-mono text-orange-400 pt-3 border-t border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Daily Call Audits &amp; Rehearsals
              </div>
            </SpotlightCard>

            {/* Contractor Card 4: High-Converting Portal (Col 2) */}
            <SpotlightCard
              spotlightColor="rgba(13, 148, 136, 0.15)"
              borderColor="rgba(13, 148, 136, 0.4)"
              className="md:col-span-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-teal-900/40 text-teal-300 border border-teal-700/50">
                    CONVERSION FRONT DOOR
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  High-Converting Contractor Digital Portals
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Built on modern sub-second web tech (like our UniLimo build). Frictionless emergency quote forms, instant calendar booking, and Google Local Service optimization that outranks competitors still using slow WordPress templates.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
                <span className="flex items-center gap-1.5 text-teal-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Sub-Second Mobile Load Times
                </span>
                <span className="flex items-center gap-1.5 text-teal-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Instant CRM Webhook Routing
                </span>
              </div>
            </SpotlightCard>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
