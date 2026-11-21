'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './button';
import { mailLink, whatsappLink } from '@/lib/site';

type Q = { id: string; cat: string; q: string; fix: string };
const QUESTIONS: Q[] = [
  { id: 'p1', cat: 'Product pages', q: 'Each product page leads with the main benefit, not just a feature list.', fix: 'Rewrite the top of your product pages around the outcome the customer wants.' },
  { id: 'p2', cat: 'Product pages', q: 'Ratings and reviews are visible next to the price.', fix: 'Move review stars and count beside the price and add a review summary.' },
  { id: 'p3', cat: 'Product pages', q: 'Every product has 4+ good images or a short video.', fix: 'Add lifestyle, scale and detail images or a 10-second demo video.' },
  { id: 'c1', cat: 'Trust & checkout', q: 'Shipping cost, delivery time and returns are clear before checkout.', fix: 'Show shipping and returns beside the add-to-cart button.' },
  { id: 'c2', cat: 'Trust & checkout', q: 'Guest checkout and express pay (Shop Pay, Apple Pay) are enabled.', fix: 'Enable express checkout and remove forced account creation.' },
  { id: 'c3', cat: 'Trust & checkout', q: 'On mobile, the add-to-cart button stays reachable as people scroll.', fix: 'Add a sticky add-to-cart bar on mobile product pages.' },
  { id: 's1', cat: 'Speed', q: 'Your store loads in about 3 seconds or less on a mobile connection.', fix: 'Audit page speed: compress images, defer scripts, remove unused apps.' },
  { id: 's2', cat: 'Speed', q: 'You regularly remove unused apps and scripts from the store.', fix: 'Review installed apps and third-party scripts; each one adds weight.' },
  { id: 't1', cat: 'Tracking & growth', q: 'Purchases are tracked accurately in your ad platforms and analytics.', fix: 'Fix conversion tracking first: pixel, server-side events and GA4 purchases.' },
  { id: 't2', cat: 'Tracking & growth', q: 'You can state your blended CAC and ROAS from a single report.', fix: 'Build one reporting view that ties ad spend to revenue.' },
  { id: 't3', cat: 'Tracking & growth', q: 'You test new ad creative at least once a month.', fix: 'Set a monthly creative testing cadence with a clear hypothesis per test.' },
  { id: 't4', cat: 'Tracking & growth', q: 'Abandoned-cart and post-purchase emails are running.', fix: 'Set up abandoned cart, welcome and post-purchase email flows.' },
];

const OPTS = [
  { v: 2, label: 'Yes' },
  { v: 1, label: 'Partly' },
  { v: 0, label: 'No' },
];

export function AuditTool() {
  const [ans, setAns] = useState<Record<string, number>>({});
  const [url, setUrl] = useState('');
  const answered = Object.keys(ans).length;
  const max = QUESTIONS.length * 2;
  const score = QUESTIONS.reduce((s, q) => s + (ans[q.id] ?? 0), 0);
  const pct = Math.round((score / max) * 100);
  const complete = answered === QUESTIONS.length;
  const cats = useMemo(() => Array.from(new Set(QUESTIONS.map((q) => q.cat))), []);
  const fixes = QUESTIONS.filter((q) => ans[q.id] !== undefined && ans[q.id] < 2)
    .sort((a, b) => ans[a.id] - ans[b.id])
    .slice(0, 4);
  const band = pct >= 75 ? 'Strong foundations' : pct >= 45 ? 'Solid base, clear gaps' : 'Significant leaks';

  const R = 54;
  const C = 2 * Math.PI * R;
  const summary = `Store: ${url || '(add URL)'}\nSelf-audit score: ${pct}% (${band})\nTop gaps: ${fixes.map((f) => f.q).join(' | ') || 'n/a'}`;

  return (
    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
      <div className="space-y-8">
        {cats.map((cat) => (
          <div key={cat}>
            <p className="k-eyebrow mb-3">{cat}</p>
            <div className="space-y-3">
              {QUESTIONS.filter((q) => q.cat === cat).map((q) => (
                <fieldset key={q.id} className="k-card min-w-0 p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                  <legend className="sr-only">{q.q}</legend>
                  <p aria-hidden="true" className="text-[1rem] leading-snug md:max-w-[62%]">{q.q}</p>
                  <div className="flex gap-2 shrink-0">
                    {OPTS.map((o) => (
                      <label key={o.v} className="k-opt">
                        <input type="radio" name={q.id} value={o.v} checked={ans[q.id] === o.v} onChange={() => setAns((a) => ({ ...a, [q.id]: o.v }))} />
                        <span>{o.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="lg:sticky lg:top-28 space-y-4">
        <div className="k-card p-6 text-center">
          <div className="relative w-36 h-36 mx-auto">
            <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
              <circle cx="60" cy="60" r={R} fill="none" stroke="var(--k-border-strong)" strokeWidth="9" />
              <motion.circle cx="60" cy="60" r={R} fill="none" stroke="var(--k-flare)" strokeWidth="9" strokeLinecap="round" strokeDasharray={C} animate={{ strokeDashoffset: C * (1 - pct / 100) }} transition={{ duration: 0.6, ease: 'easeOut' }} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="k-h1 text-[2.6rem] leading-none tabular-nums">{pct}</span>
              <span className="text-[0.75rem] k-muted mt-1">of 100</span>
            </div>
          </div>
          <p role="status" className="font-semibold mt-4">{complete ? band : `${answered}/${QUESTIONS.length} answered`}</p>
          <p className="text-[0.82rem] k-muted mt-1">A quick self-check, not a technical scan.</p>
        </div>

        {fixes.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="k-card p-5">
            <p className="k-eyebrow mb-3">Fix these first</p>
            <ul className="space-y-3 text-sm">
              {fixes.map((f) => (
                <li key={f.id} className="flex gap-2.5"><span className="k-flare">→</span><span>{f.fix}</span></li>
              ))}
            </ul>
          </motion.div>
        )}

        <div className="k-card p-5 space-y-3">
          <label htmlFor="audit-url" className="font-semibold text-[0.95rem] block">Want us to audit your real store?</label>
          <input id="audit-url" className="k-input" placeholder="yourstore.com" inputMode="url" autoComplete="url" value={url} onChange={(e) => setUrl(e.target.value)} />
          <Button href="/book" variant="flare" full>Book a call to go through your audit</Button>
          <Button variant="ghost" href={mailLink('Free store audit request', `Hi Kaivex,\n\nI would like a free store audit.\n\n${summary}`)} full>Request by email</Button>
          <Button href={whatsappLink(`Hi Kaivex, I would like a free store audit.\n${summary}`)} variant="ghost" full>Send on WhatsApp</Button>
          <p className="text-[0.8rem] k-muted leading-relaxed">Nothing is stored on this page. Your answers only go anywhere if you press a button above.</p>
        </div>
      </div>
    </div>
  );
}
