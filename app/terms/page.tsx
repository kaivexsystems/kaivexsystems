'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { KaivexLogo } from '@/components/ui/kaivex-logo';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#EBE3D3] text-[#14181B] font-sans p-6 sm:p-12 selection:bg-[#D9551F] selection:text-white">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between pb-6 border-b border-black/10">
          <Link href="/" className="flex items-center gap-2 text-xs font-mono hover:opacity-80 transition">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <KaivexLogo variant="full" size="sm" theme="light" />
        </div>

        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D9551F]">
            LEGAL ARCHITECTURE
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight mt-2 text-[#14181B]">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs font-mono text-[#6B655F] mt-2">Last updated: September 2026</p>
        </div>

        <div className="space-y-6 text-sm text-[#14181B]/80 leading-relaxed font-sans">
          <section className="space-y-2">
            <h2 className="font-serif font-bold text-xl text-[#14181B]">1. Scope of Work</h2>
            <p>
              Kaivex Systems delivers custom client acquisition engines, funnels, and digital infrastructure. All deliverables, timelines, and sprint milestones are locked in writing prior to sprint execution.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-xl text-[#14181B]">2. Capacity Limitation</h2>
            <p>
              To maintain strict execution quality and eliminate account-management bloat, Kaivex operates with a maximum of three concurrent active client partnerships.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif font-bold text-xl text-[#14181B]">3. Contact &amp; Governance</h2>
            <p>
              For legal inquiries, write to{' '}
              <a href="mailto:kaivexsystems@gmail.com" className="text-[#D9551F] font-bold underline">
                kaivexsystems@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
