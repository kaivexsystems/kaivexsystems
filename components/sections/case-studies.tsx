"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ExternalLink, TrendingUp, ShieldCheck, Zap } from "lucide-react";

interface CaseStudy {
  tag: string;
  client: string;
  category: string;
  metric: string;
  description: string;
  highlights: string[];
  link?: string;
  linkText?: string;
}

const caseStudies: CaseStudy[] = [
  {
    tag: "High-Ticket B2B & Outbound",
    client: "Rise with Fariha (Executive Banking Coach)",
    category: "Dubai & Abu Dhabi C-Suite Advisory",
    metric: "4 Executive Leads Booked",
    description: "Built the Dual Client-Acquisition Engine for a 20-year UAE banking leader and ICF mentor coach. Deployed high-signal LinkedIn authority alongside curated SMTP-verified outbound.",
    highlights: [
      "Fariha Fatima: Confirmed Diagnostic Meet",
      "Richard Romm (RommComm): Demo Showcase Meet",
      "Tariq Al-Hashemi: Finalizing Kickoff Time",
      "< 30 min/day input • $0 ad spend"
    ],
  },
  {
    tag: "Audience & Content Engineering",
    client: "Coin Bureau Media Group",
    category: "Global Financial & Tech Media",
    metric: "10x Engagement Scale",
    description: "Architected written content distribution systems, institutional hooks, and editorial operations scaling social reach across millions of global readers.",
    highlights: [
      "10x sustained lift in reader engagement",
      "Deep institutional frameworks for crypto & macro",
      "High-velocity publishing infrastructure"
    ],
  },
  {
    tag: "Full-Stack Web Engineering",
    client: "UniLimo Luxury Fleet Engine",
    category: "High-End Transport Reservation",
    metric: "Sub-Second Fleet Portal",
    description: "Engineered a custom, luxury web application with zero template bloat. Dynamic reservation workflows, custom fleet catalog, and instant mobile responsiveness.",
    highlights: [
      "Sub-second load times across mobile devices",
      "Tailwind + Next.js custom interactive booking",
      "Zero WordPress plugin security vulnerabilities"
    ],
    link: "https://unilimo.vercel.app/",
    linkText: "View Live Portal",
  },
];

export function CaseStudies() {
  return (
    <section id="proof" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="font-mono text-xs font-bold text-teal-400 bg-teal-950/60 border border-teal-700/50 px-3 py-1 rounded-full uppercase tracking-wider">
          EMPIRICAL PROOF OF CRAFT
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-3 mb-4">
          Engineered Case Studies
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Real code, real distribution, and verified metrics. We don&apos;t show vanity mockups; we build digital assets that produce closed revenue.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {caseStudies.map((study, idx) => (
          <SpotlightCard
            key={idx}
            spotlightColor="rgba(13, 148, 136, 0.12)"
            borderColor="rgba(13, 148, 136, 0.35)"
            className="flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {study.tag}
                </span>
                <span className="font-mono text-[10px] text-teal-400 font-bold">
                  CASE #{idx + 1}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-1">
                {study.client}
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-4">
                {study.category}
              </p>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-4">
                <div className="flex items-center gap-1.5 text-xs font-mono text-teal-400 mb-0.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>PRIMARY METRIC</span>
                </div>
                <p className="font-display font-black text-2xl text-teal-300">
                  {study.metric}
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                {study.description}
              </p>

              <ul className="space-y-1.5 mb-6">
                {study.highlights.map((item, hIdx) => (
                  <li
                    key={hIdx}
                    className="flex items-start gap-1.5 text-xs font-mono text-slate-400"
                  >
                    <span className="text-teal-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {study.link && (
              <div className="pt-3 border-t border-slate-800">
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal-400 hover:text-teal-300 transition"
                >
                  <span>{study.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
