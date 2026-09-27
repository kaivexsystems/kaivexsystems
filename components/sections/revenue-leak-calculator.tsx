"use client";

import React, { useState } from "react";
import { useTrack } from "@/components/track-context";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Calculator, ArrowRight, TrendingUp, AlertTriangle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export function RevenueLeakCalculator() {
  const { track } = useTrack();

  // B2B State
  const [b2bViews, setB2bViews] = useState(800);
  const [b2bRetainer, setB2bRetainer] = useState(3500);
  const [b2bCloseRate, setB2bCloseRate] = useState(1); // percent

  // Contractor State
  const [contractorCalls, setContractorCalls] = useState(80);
  const [contractorTicket, setContractorTicket] = useState(2400);
  const [missedCallRate, setMissedCallRate] = useState(25); // percent

  // Calculations
  // B2B: Views * 0.02 (potential opt-in) * 0.15 (call booked) * Retainer * 6 months
  const b2bLostRevenue = Math.round(
    b2bViews * 0.03 * (b2bRetainer * 3) // 3-month LTV of missed deals
  );
  const b2bRecovered = Math.round(b2bLostRevenue * 0.65);

  // Contractor: Calls * (missed% / 100) * 0.70 (competitor gets it) * Ticket
  const contractorLostRevenue = Math.round(
    contractorCalls * (missedCallRate / 100) * 0.75 * contractorTicket
  );
  const contractorRecovered = Math.round(contractorLostRevenue * 0.68);

  const triggerCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: track === "b2b" ? ["#ea580c", "#f97316", "#fed7aa"] : ["#0d9488", "#14b8a6", "#99f6e4"],
    });
  };

  return (
    <section id="calculator" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="font-mono text-xs font-bold text-orange-400 bg-orange-950/60 border border-orange-700/50 px-3 py-1 rounded-full uppercase tracking-wider">
          DESIGN SPELL // INTERACTIVE AUDIT
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-3 mb-4">
          The Pipeline Leak Calculator
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {track === "b2b"
            ? "Calculate how much retained advisory revenue you leak each month without an interactive scorecard & verified outbound."
            : "Calculate how many emergency high-ticket jobs you lose to faster competitors every month from missed calls."}
        </p>
      </div>

      <SpotlightCard
        spotlightColor={track === "b2b" ? "rgba(234, 88, 12, 0.12)" : "rgba(13, 148, 136, 0.15)"}
        borderColor={track === "b2b" ? "rgba(234, 88, 12, 0.35)" : "rgba(13, 148, 136, 0.4)"}
        className="p-6 sm:p-10"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Sliders Side */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-orange-500" />
              <h3 className="font-display font-bold text-lg text-white">
                {track === "b2b" ? "Your B2B Traffic & Pricing" : "Your Contractor Call Volume"}
              </h3>
            </div>

            {track === "b2b" ? (
              <>
                {/* B2B Slider 1: Views */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span>Monthly Profile Views:</span>
                    <span className="font-bold text-orange-400 text-sm">{b2bViews.toLocaleString()} views</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="3000"
                    step="100"
                    value={b2bViews}
                    onChange={(e) => setB2bViews(Number(e.target.value))}
                    className="w-full accent-orange-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* B2B Slider 2: Retainer */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span>Average Monthly Retainer:</span>
                    <span className="font-bold text-orange-400 text-sm">${b2bRetainer.toLocaleString()} / mo</span>
                  </div>
                  <input
                    type="range"
                    min="1500"
                    max="10000"
                    step="500"
                    value={b2bRetainer}
                    onChange={(e) => setB2bRetainer(Number(e.target.value))}
                    className="w-full accent-orange-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </>
            ) : (
              <>
                {/* Contractor Slider 1: Calls */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span>Monthly Incoming Inquiries:</span>
                    <span className="font-bold text-teal-400 text-sm">{contractorCalls} calls / mo</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="250"
                    step="5"
                    value={contractorCalls}
                    onChange={(e) => setContractorCalls(Number(e.target.value))}
                    className="w-full accent-teal-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Contractor Slider 2: Ticket Size */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span>Average Job Ticket:</span>
                    <span className="font-bold text-teal-400 text-sm">${contractorTicket.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="800"
                    max="6000"
                    step="200"
                    value={contractorTicket}
                    onChange={(e) => setContractorTicket(Number(e.target.value))}
                    className="w-full accent-teal-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Contractor Slider 3: Missed Call % */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span>Estimated Missed / Unanswered Calls:</span>
                    <span className="font-bold text-red-400 text-sm">{missedCallRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={missedCallRate}
                    onChange={(e) => setMissedCallRate(Number(e.target.value))}
                    className="w-full accent-red-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </>
            )}
          </div>

          {/* Results Card */}
          <div className="p-6 rounded-2xl bg-[#070b12] border border-slate-800/90 flex flex-col justify-between h-full shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  REAL-TIME LEAK AUDIT
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-red-400 bg-red-950/40 border border-red-800/40 px-2 py-0.5 rounded">
                  <AlertTriangle className="w-3 h-3" /> Uncaptured Pipeline
                </span>
              </div>

              {/* Monthly Lost */}
              <div className="mb-6">
                <p className="text-xs text-slate-400 font-mono mb-1">
                  {track === "b2b"
                    ? "Estimated Advisory Capital Leaked (3-Mo LTV):"
                    : "Estimated Job Revenue Lost to Competitors / Mo:"}
                </p>
                <p className="font-display font-black text-3xl sm:text-4xl text-red-400">
                  ${track === "b2b" ? b2bLostRevenue.toLocaleString() : contractorLostRevenue.toLocaleString()}
                </p>
              </div>

              {/* Recoverable with Kaivex */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-xs text-emerald-400 font-bold">
                    Recoverable with Kaivex Systems:
                  </span>
                </div>
                <p className="font-display font-extrabold text-2xl text-emerald-300">
                  +${track === "b2b" ? b2bRecovered.toLocaleString() : contractorRecovered.toLocaleString()}
                  <span className="text-xs text-slate-400 font-mono font-normal"> / month</span>
                </p>
              </div>
            </div>

            <div>
              <a
                href="https://cal.com/ahmad-farooq-tuwcnw/15min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerCelebration}
              >
                <MagneticButton className="w-full py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-mono text-xs font-bold tracking-wider shadow-lg shadow-orange-600/30 transition flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Plug This Leak in 14 Days</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </a>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
