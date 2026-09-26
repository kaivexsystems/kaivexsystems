'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { KaivexLogo } from '@/components/ui/kaivex-logo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#EBE3D3] text-[#14181B] flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="mb-8">
        <KaivexLogo variant="stacked" size="lg" theme="light" showSublabel={true} />
      </div>

      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D9551F] mb-3">
        404 // ROUTE NOT FOUND
      </span>

      <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight mb-4 text-[#14181B]">
        This page does not exist.
      </h1>

      <p className="text-sm sm:text-base text-[#6B655F] max-w-md mb-8 leading-relaxed">
        The destination you requested is not active in our current digital infrastructure.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-[#14181B] text-white text-xs font-bold font-sans tracking-wide hover:bg-[#D9551F] transition-all flex items-center gap-2 shadow-sm active:scale-95"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
