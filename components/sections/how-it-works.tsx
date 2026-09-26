'use client';

import { motion } from 'motion/react';
import { Phone, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Discovery Call',
    timeframe: 'Day 0',
    description: '30-minute diagnostic session. We analyze your unit economics, current pipeline, and conversion bottlenecks. Zero sales pitch, pure strategy.',
    icon: Phone,
  },
  {
    id: 2,
    title: 'Architecture Sprint',
    timeframe: 'Days 1 to 3',
    description: 'Map your custom system blueprint. Define scorecard logic, outbound infrastructure, or speed-to-lead workflows. Full project scope locked with zero ambiguity.',
    icon: PenTool,
  },
  {
    id: 3,
    title: 'Build and Ship',
    timeframe: 'Days 4 to 12',
    description: 'Custom code, not templates. Daily async updates in your dedicated Slack channel. Real infrastructure: SMTP verification, Twilio IVR, interactive web apps.',
    icon: Code2,
  },
  {
    id: 4,
    title: 'Go Live and Optimize',
    timeframe: 'Days 13 to 14',
    description: 'Full deployment and handover. You own 100% of the source code and infrastructure. Bi-weekly optimization reviews included.',
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-[#04060A] to-[#070a0f] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-px w-8 bg-[#0d9488]" />
            <span className="text-[#0d9488] font-mono text-sm tracking-widest uppercase">
              How It Works
            </span>
            <span className="h-px w-8 bg-[#0d9488]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6"
          >
            From First Call to Live System in 14 Days
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400 font-sans leading-relaxed"
          >
            No bloated timelines. No scope creep. Here is exactly how we build your growth infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-slate-800" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                className="relative group flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="mb-6 relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-slate-900 border border-slate-800 group-hover:border-[#0d9488] transition-colors duration-300">
                  <div className="absolute inset-0 bg-[#0d9488]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="w-8 h-8 text-[#0d9488]" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-[#0d9488] text-white text-sm font-bold rounded-full font-mono">
                    {step.id}
                  </span>
                </div>
                
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#0d9488] text-xs font-mono mb-4">
                    {step.timeframe}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
