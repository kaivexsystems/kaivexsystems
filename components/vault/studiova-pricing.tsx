"use client";

import React, { useState } from "react";

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: number;
  annualPrice: number;
  originalPrice?: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

interface StudiovaPricingTableProps {
  title?: string;
  subtitle?: string;
  tagNumber?: string;
  tagLabel?: string;
  tiers?: PricingTier[];
  brandBacklink?: string;
  className?: string;
}

const DEFAULT_TIERS: PricingTier[] = [
  {
    id: "launch",
    name: "14-Day Sprint",
    monthlyPrice: 3000,
    annualPrice: 2500,
    description: "Rapid deployment of core client acquisition or speed-to-lead infrastructure in two weeks.",
    features: [
      "Custom Interactive Scorecard or Dispatch Portal",
      "Full SMTP DNS spread (64 inboxes) or Twilio IVR",
      "High-converting intake funnel & Cal.com sync",
      "Comprehensive telemetry & conversion tracking",
      "100% owned source code deliverable",
    ],
    ctaText: "Lock sprint slot",
    ctaLink: "https://cal.com/ahmad-farooq-tuwcnw/15min",
  },
  {
    id: "scale",
    name: "Growth Retainer",
    badge: "Most popular",
    isPopular: true,
    monthlyPrice: 2000,
    annualPrice: 1700,
    originalPrice: 2500,
    description: "Ongoing growth engineering, LinkedIn ghostwriting, and outbound pipeline optimization.",
    features: [
      "4-6 high-authority LinkedIn ghostwritten assets/week",
      "Continuous inbox rotation & Clay.com enrichment",
      "Active C-suite lead triage & conversion tracking",
      "Bi-weekly strategy & performance reviews",
      "Dedicated Slack channel with Ahmad & Ayaan",
    ],
    ctaText: "Initiate retainer",
    ctaLink: "https://cal.com/ahmad-farooq-tuwcnw/15min",
  },
  {
    id: "elevate",
    name: "Full Partnership",
    monthlyPrice: 4500,
    annualPrice: 3800,
    description: "End-to-end full-stack growth partner. Zero VAs. Custom software & dedicated cold callers.",
    features: [
      "Everything in Growth Retainer",
      "LUMS-trained US outbound cold caller team (Trades)",
      "Bespoke internal web tools & CRM automations",
      "Quarterly market expansion & offer architecture",
      "Full priority engineering SLA with zero backlog",
    ],
    ctaText: "Apply for partnership",
    ctaLink: "https://cal.com/ahmad-farooq-tuwcnw/15min",
  },
];

export function StudiovaPricingTable({
  title = "Engineering Sprints & Retainers",
  subtitle = "Transparent pricing for high-conviction growth infrastructure. Zero hidden fees. 100% owned assets.",
  tagNumber = "04",
  tagLabel = "PRICING",
  tiers = DEFAULT_TIERS,
  brandBacklink = "https://cal.com/ahmad-farooq-tuwcnw/15min",
  className = "",
}: StudiovaPricingTableProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      className={`py-20 px-4 md:px-8 bg-[#07090E] text-white relative overflow-hidden font-sans ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E2B774]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-4 flex items-center gap-4">
            <span className="w-9 h-9 rounded-full bg-[#E2B774] text-black font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(226,183,116,0.35)]">
              {tagNumber}
            </span>
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-medium tracking-wider text-zinc-300">
              {tagLabel}
            </span>
          </div>

          <div className="lg:col-span-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
                {title}
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Monthly / Annual Billing Switcher */}
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 self-start md:self-auto flex-shrink-0">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  !isAnnual
                    ? "bg-[#E2B774] text-black font-bold shadow"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Quarterly
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all ${
                  isAnnual
                    ? "bg-[#E2B774] text-black font-bold shadow"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Annual
                <span className="px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 text-[10px] rounded-full border border-emerald-500/30">
                  -15%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const currentPrice = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                  tier.isPopular
                    ? "bg-gradient-to-b from-[#141622] to-[#0a0c13] border-[#E2B774]/50 shadow-[0_20px_50px_rgba(226,183,116,0.12)] scale-[1.02]"
                    : "bg-[#0c0e16] border-white/10 hover:border-white/20 shadow-xl"
                }`}
              >
                {/* Popular Pill */}
                {tier.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E2B774] text-black text-[11px] font-extrabold tracking-wide uppercase shadow-md">
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Top Info */}
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {tier.name}
                    </h3>
                  </div>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-2 mb-3">
                    {tier.originalPrice && !isAnnual && (
                      <span className="text-zinc-500 text-lg line-through">
                        ${tier.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                      ${currentPrice.toLocaleString()}
                    </span>
                    <span className="text-zinc-400 text-sm font-medium">
                      /month
                    </span>
                  </div>

                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <hr className="border-white/10 mb-6" />

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                      Deliverables & Scope:
                    </h4>
                    <ul className="space-y-3">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                          <span className="w-5 h-5 rounded-full bg-[#E2B774] flex-shrink-0 flex items-center justify-center mt-0.5 shadow-[0_0_8px_rgba(226,183,116,0.3)]">
                            <svg
                              className="w-3 h-3 text-black stroke-current stroke-2 fill-none"
                              viewBox="0 0 24 24"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={tier.ctaLink || brandBacklink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-sm flex items-center justify-between transition-all duration-200 transform active:scale-98 ${
                    tier.isPopular
                      ? "bg-[#E2B774] text-black hover:bg-[#d8a860] shadow-[0_0_25px_rgba(226,183,116,0.35)]"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
                >
                  <span>{tier.ctaText || "Lock in spot"}</span>
                  <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center text-current">
                    &rarr;
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StudiovaPricingTable;
