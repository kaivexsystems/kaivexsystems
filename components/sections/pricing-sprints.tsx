"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Check, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export function PricingSprints() {
  return (
    <section id="pricing" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="font-mono text-xs font-bold text-orange-400 bg-orange-950/60 border border-orange-700/50 px-3 py-1 rounded-full uppercase tracking-wider">
          TRANSPARENT SPRINT TIERS
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-3 mb-4">
          Transparent Partnership Models
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Zero vague agency contracts. Fixed timelines, clear deliverables, and guaranteed digital assets you own 100%.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {/* Tier 1: 14-Day Sprint */}
        <SpotlightCard
          spotlightColor="rgba(234, 88, 12, 0.12)"
          borderColor="rgba(234, 88, 12, 0.35)"
          className="flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-orange-400 uppercase">
                PHASE 1 SPRINT
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-orange-900/40 text-orange-300">
                14-DAY BUILD
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-1">
              Foundation Launchpad
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-4">
              Rapid infrastructure deployment &amp; core funnel asset build.
            </p>

            <div className="mb-6">
              <span className="font-display font-black text-4xl text-white">
                $3,000
              </span>
              <span className="text-xs text-slate-400 font-mono"> / one-time fixed</span>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Profile &amp; Offer Sales Page Architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Interactive Scorecard Web App or Speed-to-Lead Bot</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>100 SMTP-Verified Decision Maker Inboxes</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Cal.com Integration with Qualification Questions</span>
              </li>
            </ul>
          </div>

          <a
            href="https://cal.com/ahmad-farooq-tuwcnw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-mono text-xs font-bold transition flex items-center justify-center gap-2">
              <span>Select 14-Day Sprint</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </MagneticButton>
          </a>
        </SpotlightCard>

        {/* Tier 2: Monthly Retainer (Featured) */}
        <SpotlightCard
          spotlightColor="rgba(13, 148, 136, 0.2)"
          borderColor="rgba(13, 148, 136, 0.5)"
          className="flex flex-col justify-between border-teal-500/40 relative shadow-2xl shadow-teal-950/30"
        >
          <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-0.5 rounded-full bg-teal-500 text-slate-950 font-mono text-[10px] font-black uppercase tracking-wider">
            MOST POPULAR
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-teal-400 uppercase">
                ONGOING RETAINER
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-teal-900/40 text-teal-300">
                PIPELINE ENGINE
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-1">
              Authority &amp; Outbound
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-4">
              Consistent monthly C-suite pipeline on 10% founder input.
            </p>

            <div className="mb-6">
              <span className="font-display font-black text-4xl text-white">
                $2,000
              </span>
              <span className="text-xs text-slate-400 font-mono"> / month</span>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>12–16 Ghostwritten High-Signal Posts / Month</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>100 Fresh Verified Executive Outbound Contacts / Mo</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Active DM Nurturing &amp; Booking Conversion</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Only 45–60 min/mo input required from client</span>
              </li>
            </ul>
          </div>

          <a
            href="https://cal.com/ahmad-farooq-tuwcnw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-slate-950 font-mono text-xs font-bold tracking-wider shadow-lg shadow-teal-600/30 transition flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply for Monthly Retainer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </a>
        </SpotlightCard>

        {/* Tier 3: Complete Inbound Engine */}
        <SpotlightCard
          spotlightColor="rgba(37, 99, 235, 0.15)"
          borderColor="rgba(37, 99, 235, 0.4)"
          className="flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-blue-400 uppercase">
                HYBRID PARTNERSHIP
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-900/40 text-blue-300">
                END-TO-END
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mb-1">
              Complete Growth Engine
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-4">
              Sprint build in Month 1 + 3 months of scaled distribution.
            </p>

            <div className="mb-6">
              <span className="font-display font-black text-4xl text-white">
                $4,500
              </span>
              <span className="text-xs text-slate-400 font-mono"> / month (or $12k / quarter)</span>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Full Funnel &amp; Software Web App Sprint (Month 1)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>3-Month High-Signal Inbound Authority Ownership</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Ongoing A/B Testing of Copy, Hooks &amp; Conversion</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Direct Slack Channel Access to Ahmad &amp; Ayaan</span>
              </li>
            </ul>
          </div>

          <a
            href="https://cal.com/ahmad-farooq-tuwcnw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-mono text-xs font-bold transition flex items-center justify-center gap-2">
              <span>Engage Full Partnership</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </MagneticButton>
          </a>
        </SpotlightCard>
      </div>
    </section>
  );
}
