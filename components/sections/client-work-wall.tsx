'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2, TrendingUp, Sparkles, ShieldCheck } from 'lucide-react';


interface ClientWorkItem {
  id: string;
  client: string;
  category: 'b2b' | 'contractors';
  badge: string;
  headline: string;
  metric: string;
  subMetric: string;
  tech: string[];
  gradient: string;
}

const clientWorkItems: ClientWorkItem[] = [
  {
    id: 'coin-bureau',
    client: 'Coin Bureau',
    category: 'b2b',
    badge: 'Media & Web3',
    headline: '10x Content Authority & Growth Engine',
    metric: '2.5M+',
    subMetric: 'Organic Impressions',
    tech: ['Ghostwriting', 'Funnel Tech', 'Analytics'],
    gradient: 'from-amber-500/20 via-orange-600/10 to-transparent',
  },
  {
    id: 'unilimo',
    client: 'UniLimo',
    category: 'b2b',
    badge: 'Luxury Mobility',
    headline: 'High-Ticket Corporate Dispatch Engine',
    metric: '$80k/mo',
    subMetric: 'Automated GMV',
    tech: ['Dispatch Portal', 'Stripe Connect', 'SMS Dispatch'],
    gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
  },
  {
    id: 'fariha',
    client: 'Rise with Fariha',
    category: 'b2b',
    badge: 'Executive Coaching',
    headline: 'High-Ticket Inbound Engine & Scorecard',
    metric: '4 Leads',
    subMetric: 'Delivered in 48 Hours',
    tech: ['Scorecard Diagnostic', 'LinkedIn Inbound', 'Cal.com'],
    gradient: 'from-purple-600/20 via-pink-600/10 to-transparent',
  },
  {
    id: 'texas-plumbing',
    client: 'Texas Premier Plumbing',
    category: 'contractors',
    badge: 'Residential Plumbing',
    headline: 'Sub-45s Speed-to-Lead Auto-Textback',
    metric: '42s',
    subMetric: 'Avg Lead Response Time',
    tech: ['Twilio SMS', 'Missed Call Triage', 'Jobber Sync'],
    gradient: 'from-teal-500/20 via-cyan-600/10 to-transparent',
  },
  {
    id: 'lonestar-hvac',
    client: 'LoneStar HVAC Pros',
    category: 'contractors',
    badge: 'Commercial HVAC',
    headline: 'After-Hours Emergency Dispatcher',
    metric: '$62k',
    subMetric: 'Emergency Repipes Booked',
    tech: ['AI Call Routing', 'LUMS Caller Ops', 'Automated CRM'],
    gradient: 'from-emerald-500/20 via-teal-600/10 to-transparent',
  },
  {
    id: 'apex-roofing',
    client: 'Apex Roofing & Solar',
    category: 'contractors',
    badge: 'Exterior & Roofing',
    headline: 'Drone Estimate Portal & Insurance Nurture',
    metric: '$140k',
    subMetric: 'Qualified Pipeline in 30d',
    tech: ['Custom Quote App', 'Automated Follow-ups', 'VoIP'],
    gradient: 'from-orange-500/20 via-amber-600/10 to-transparent',
  },
  {
    id: 'arka-saas',
    client: 'Arka Enterprise SaaS',
    category: 'b2b',
    badge: 'Enterprise Software',
    headline: '64-Inbox Cold Infrastructure Engine',
    metric: '14 Demos',
    subMetric: 'Booked in Week One',
    tech: ['SMTP Warmup', 'DNS Spreads', 'Clay.com Enrichment'],
    gradient: 'from-cyan-500/20 via-blue-600/10 to-transparent',
  },
  {
    id: 'austin-electric',
    client: 'Austin Precision Electric',
    category: 'contractors',
    badge: 'Electrical Contracting',
    headline: 'Google LSA Webhook Auto-Booking',
    metric: '74%',
    subMetric: 'Call-to-Job Conversion',
    tech: ['LSA Webhooks', 'Instant Textback', 'VoIP Ring Groups'],
    gradient: 'from-yellow-500/20 via-orange-600/10 to-transparent',
  },
  {
    id: 'nexus-consulting',
    client: 'Nexus Global Advisory',
    category: 'b2b',
    badge: 'M&A Consulting',
    headline: 'Founder Personal Brand & Deal Flow Protocol',
    metric: '$45k',
    subMetric: 'Retainer Pipeline',
    tech: ['Authority Systems', 'Ghostwriting', 'Video Clips'],
    gradient: 'from-rose-500/20 via-purple-600/10 to-transparent',
  },
  {
    id: 'summit-drain',
    client: 'Summit Drain & Rooter',
    category: 'contractors',
    badge: 'Emergency Trades',
    headline: 'Smart IVR Phone Tree & Voicemail Drop',
    metric: '91%',
    subMetric: 'Answer Rate on Inbound Calls',
    tech: ['Twilio Studio', 'Voice Triage', 'Zapier Automation'],
    gradient: 'from-blue-500/20 via-teal-600/10 to-transparent',
  },
  {
    id: 'scaleops-cloud',
    client: 'ScaleOps Systems',
    category: 'b2b',
    badge: 'DevOps & Cloud',
    headline: 'Interactive Cloud ROI Assessment Engine',
    metric: '320+',
    subMetric: 'Completed Audits',
    tech: ['Next.js App', 'Dynamic PDF Gen', 'HubSpot API'],
    gradient: 'from-violet-500/20 via-fuchsia-600/10 to-transparent',
  },
  {
    id: 'comfort-air',
    client: 'Comfort Air Texas',
    category: 'contractors',
    badge: 'HVAC Services',
    headline: 'Seasonal Tune-up Reactivation Campaign',
    metric: '48 Jobs',
    subMetric: 'Reactivated from Dead Leads',
    tech: ['Database Reactivation', 'Automated SMS', 'Stripe Deposit'],
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
  },
];

export function ClientWorkWall() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Split into 5 vertical columns for the Wall effect
  const columns = [
    [clientWorkItems[0], clientWorkItems[3], clientWorkItems[6], clientWorkItems[9]],
    [clientWorkItems[1], clientWorkItems[4], clientWorkItems[7], clientWorkItems[10]],
    [clientWorkItems[2], clientWorkItems[5], clientWorkItems[8], clientWorkItems[11]],
    [clientWorkItems[6], clientWorkItems[1], clientWorkItems[9], clientWorkItems[4]],
    [clientWorkItems[3], clientWorkItems[7], clientWorkItems[0], clientWorkItems[5]],
  ];

  return (
    <section id="results" className="relative py-28 overflow-hidden bg-[#05070B] select-none">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-purple-500/10 via-teal-500/10 to-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top & Bottom gradient mask for smooth fade into page */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#05070B] via-[#05070B]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05070B] via-[#05070B]/80 to-transparent z-20 pointer-events-none" />

      {/* Center Fixed Big Title Overlay: REAL CLIENT RESULTS */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center backdrop-blur-md bg-black/70 px-8 py-6 rounded-3xl border border-white/10 shadow-2xl shadow-black"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-sans font-semibold text-slate-300 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            Verified Case Studies
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            CLIENT RESULTS
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-sans text-slate-400 max-w-md mx-auto">
            Live systems and revenue pipelines engineered by Kaivex.
          </p>
        </motion.div>
      </div>

      {/* Multi-Column Scrolling Tile Grid */}
      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 h-[720px] overflow-hidden">
        {columns.map((col, colIdx) => {
          // Alternating scroll animation speed and direction
          const duration = colIdx % 2 === 0 ? 30 : 36;
          const isReverse = colIdx % 2 === 1;

          // Duplicate items to ensure seamless infinite looping
          const loopedCol = [...col, ...col, ...col];

          return (
            <div
              key={colIdx}
              className="relative overflow-hidden flex flex-col gap-4 group"
            >
              <motion.div
                animate={{
                  y: isReverse ? ['-50%', '0%'] : ['0%', '-50%'],
                }}
                transition={{
                  duration,
                  ease: 'linear',
                  repeat: Infinity,
                }}
                className={`flex flex-col gap-4 ${
                  hoveredCard ? '[animation-play-state:paused]' : ''
                }`}
              >
                {loopedCol.map((item, itemIdx) => {
                  const isHovered = hoveredCard === `${item.id}-${colIdx}-${itemIdx}`;

                  return (
                    <div
                      key={`${item.id}-${colIdx}-${itemIdx}`}
                      onMouseEnter={() =>
                        setHoveredCard(`${item.id}-${colIdx}-${itemIdx}`)
                      }
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md ${
                        isHovered
                          ? 'scale-105 z-30 shadow-2xl shadow-black border-white/40 bg-[#0d121c]'
                          : 'border-white/10 bg-[#0a0d14]/80 hover:border-white/20'
                      }`}
                    >
                      {/* Subtle ambient corner gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 pointer-events-none`}
                      />

                      {/* Header Badge */}
                      <div className="relative flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                          {item.badge}
                        </span>
                        </div>

                      {/* Client Name */}
                      <h4 className="relative text-base font-bold text-white font-mono tracking-tight flex items-center justify-between">
                        {item.client}
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>

                      {/* Headline */}
                      <p className="relative mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {item.headline}
                      </p>

                      {/* Core Metric Highlight */}
                      <div className="relative mt-4 pt-3 border-t border-white/10 flex items-baseline justify-between">
                        <div>
                          <div className="text-xl font-black font-mono tracking-tight text-white flex items-center gap-1">
                            {item.metric}
                            <TrendingUp className="w-3 h-3 text-emerald-400" />
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                            {item.subMetric}
                          </div>
                        </div>
                      </div>

                      {/* Tech Pills (Visible on Hover) */}
                      <div className="relative mt-3 flex flex-wrap gap-1">
                        {item.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/40 border border-white/5 text-slate-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA to verify live builds */}
      <div className="relative z-20 mt-10 text-center">
        <a
          href="#booking"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-xs font-mono text-white transition-all hover:bg-white/10 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-400" />
          Request a custom breakdown of our architecture for your business &rarr;
        </a>
      </div>
    </section>
  );
}
