"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export function CoreThesis() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="font-mono text-xs font-bold text-orange-500 bg-orange-950/60 border border-orange-700/50 px-3 py-1 rounded-full uppercase tracking-wider">
          THE STRATEGIC PARADIGM
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-3 mb-4">
          Why Traditional Agencies Burn Capital
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          The typical agency splits strategy and code across two disconnected teams. The strategist stalls at handoff; the developer builds the wrong thing fast.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* The Flawed Agency Model */}
        <SpotlightCard
          spotlightColor="rgba(239, 68, 68, 0.08)"
          borderColor="rgba(239, 68, 68, 0.3)"
          className="border-red-950/40 bg-gradient-to-b from-[#100c14] to-[#070a0f]"
        >
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="w-5 h-5 text-red-500" />
            <h3 className="font-display font-bold text-lg text-white">
              The Disconnected Agency Model
            </h3>
          </div>
          <p className="text-xs text-slate-400 mb-6 font-mono">
            High cost, zero commercial empathy, endless revision cycles.
          </p>

          <div className="space-y-4 text-xs text-slate-300">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-mono text-red-400 font-bold block mb-1">
                The Account Strategist:
              </span>
              Understands high-level copy and positioning, but cannot write software, debug database bottlenecks, or deploy automated backend webhooks.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-mono text-red-400 font-bold block mb-1">
                The Disconnected Developer:
              </span>
              Can write code, but has zero commercial empathy, doesn&apos;t understand offer psychology, high-ticket qualification, or conversion mechanics.
            </div>
            <div className="p-3 rounded-lg bg-red-950/30 border border-red-800/40 font-mono text-[11px] text-red-300">
              RESULT: Client pays \$10k+/mo to watch them misunderstand each other.
            </div>
          </div>
        </SpotlightCard>

        {/* The Kaivex Builder-Strategist System */}
        <SpotlightCard
          spotlightColor="rgba(13, 148, 136, 0.15)"
          borderColor="rgba(13, 148, 136, 0.4)"
          className="border-teal-950/50 bg-gradient-to-b from-[#0b171c] to-[#070a0f]"
        >
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-teal-400" />
            <h3 className="font-display font-bold text-lg text-white">
              The Kaivex Builder-Strategist Engine
            </h3>
          </div>
          <p className="text-xs text-slate-400 mb-6 font-mono">
            Zero translation loss. High-speed engineering meets revenue psychology.
          </p>

          <div className="space-y-4 text-xs text-slate-300">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-mono text-teal-400 font-bold block mb-1">
                Ahmad Farooq (Growth &amp; Software):
              </span>
              Full-stack software engineer who writes the copy, architects the custom web app, and executes the outbound infrastructure with surgical accuracy.
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-mono text-teal-400 font-bold block mb-1">
                Ayaan Habib (Operations &amp; Systems):
              </span>
              Operational maestro managing contractor dialer infrastructure, speed-to-lead automation, and LUMS outbound caller teams.
            </div>
            <div className="p-3 rounded-lg bg-teal-950/30 border border-teal-800/40 font-mono text-[11px] text-teal-300">
              RESULT: Systems deploy in days, not months. Zero translation loss.
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
