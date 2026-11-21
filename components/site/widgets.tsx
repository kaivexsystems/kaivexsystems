'use client';

import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Star, ShoppingBag } from 'lucide-react';
import { PILLARS } from '@/lib/site';

/* ---------- Hero: annotated product page with hotspots ---------- */
const HOTSPOTS = [
  { id: 1, x: '14%', y: '30%', title: 'Lead with the outcome', text: 'One clear image and a benefit headline, not a feature list.' },
  { id: 2, x: '93%', y: '11%', title: 'Proof above the fold', text: 'Rating and review count next to the price, where the buying decision happens.' },
  { id: 3, x: '40%', y: '95%', title: 'Remove checkout friction', text: 'Shipping and returns beside the button answer the last objection.' },
  { id: 4, x: '95%', y: '84%', title: 'Sticky add-to-cart', text: 'On mobile the buy button should never scroll out of reach.' },
];

export function HeroStoreMock() {
  const [active, setActive] = useState<number>(1);
  const spot = HOTSPOTS.find((h) => h.id === active)!;
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div className="k-card !rounded-[1.4rem] p-4" style={{ background: 'var(--k-surface)' }}>
        <div className="flex items-center justify-between px-1 pb-3">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--k-border-strong)' }} />
            ))}
          </div>
          <span className="text-[0.75rem] k-muted">yourstore.com/products/example</span>
          <ShoppingBag size={14} className="k-muted" />
        </div>
        <div className="relative grid grid-cols-[1fr_1fr] gap-4 rounded-xl p-4" style={{ background: 'var(--k-bg)', minHeight: 300 }}>
          <div className="rounded-lg h-full min-h-[220px]" style={{ background: 'linear-gradient(135deg, var(--k-panel), var(--k-panel-hover))', border: '1px solid var(--k-border)' }}>
            <div className="h-full flex items-center justify-center">
              <div className="w-20 h-28 rounded-xl" style={{ background: 'linear-gradient(160deg, var(--k-current), var(--k-flare))', opacity: 0.85 }} />
            </div>
          </div>
          <div className="flex flex-col gap-2.5 py-1">
            <div className="flex items-center gap-1 k-flare">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={12} fill="currentColor" />
              ))}
              <span className="text-[0.75rem] k-muted ml-1">4.8 (conceptual)</span>
            </div>
            <div className="h-3.5 rounded w-[85%]" style={{ background: 'var(--k-text)', opacity: 0.85 }} />
            <div className="h-3.5 rounded w-[60%]" style={{ background: 'var(--k-text)', opacity: 0.85 }} />
            <div className="h-2 rounded w-full" style={{ background: 'var(--k-border-strong)' }} />
            <div className="h-2 rounded w-[90%]" style={{ background: 'var(--k-border-strong)' }} />
            <div className="mt-auto rounded-lg py-2.5 text-center text-xs font-semibold" style={{ background: 'var(--k-cta)', color: 'var(--k-cta-text)' }}>Add to cart</div>
            <div className="text-[0.75rem] k-muted text-center">Free shipping · 30-day returns</div>
          </div>
          {HOTSPOTS.map((h) => (
            <button
              key={h.id}
              type="button"
              aria-label={`Show tip ${h.id}: ${h.title}`}
              onMouseEnter={() => setActive(h.id)}
              onFocus={() => setActive(h.id)}
              onClick={() => setActive(h.id)}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full text-xs font-bold cursor-pointer"
              style={{ left: h.x, top: h.y, background: 'var(--k-flare)', color: '#fff', boxShadow: active === h.id ? '0 0 0 6px var(--k-glow)' : 'none', transition: 'box-shadow .25s, transform .2s', transform: `translate(-50%,-50%) scale(${active === h.id ? 1.15 : 1})` }}
            >
              {h.id}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={spot.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="mt-3 rounded-xl px-4 py-3" style={{ background: 'var(--k-panel)', border: '1px solid var(--k-border)' }}>
            <p className="text-sm font-semibold"><span className="k-flare">{spot.id}.</span> {spot.title}</p>
            <p className="text-[0.82rem] k-muted mt-0.5">{spot.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-center text-[0.75rem] k-muted mt-3">Illustrative example. Tap or hover the numbers.</p>
    </div>
  );
}

/* ---------- Ad profit simulator ---------- */
function money(n: number, sign = false) {
  const v = Math.round(Math.abs(n)).toLocaleString('en-US');
  return (n < 0 ? '-' : sign && n > 0 ? '+' : '') + '$' + v;
}

type Levers = { cr: boolean; aov: boolean; cpc: boolean };

export function ProfitSimulator() {
  const [spend, setSpend] = useState(5000);
  const [cpc, setCpc] = useState(1.2);
  const [cr, setCr] = useState(1.8);
  const [aov, setAov] = useState(65);
  const [margin, setMargin] = useState(55);
  const [lev, setLev] = useState<Levers>({ cr: false, aov: false, cpc: false });

  const calc = (o: Partial<Levers>) => {
    const c = cpc * (o.cpc ? 0.85 : 1);
    const r = cr * (o.cr ? 1.2 : 1);
    const a = aov * (o.aov ? 1.15 : 1);
    const clicks = spend / c;
    const orders = (clicks * r) / 100;
    const revenue = orders * a;
    const profit = (revenue * margin) / 100 - spend;
    return { clicks, orders, revenue, profit, roas: revenue / spend, cac: orders > 0 ? spend / orders : 0 };
  };

  const base = calc({});
  const now = calc(lev);
  const breakEven = 100 / margin;
  const deltas = [
    { key: 'cr' as const, label: 'Conversion rate +20%', d: calc({ cr: true }).profit - base.profit },
    { key: 'aov' as const, label: 'Order value +15%', d: calc({ aov: true }).profit - base.profit },
    { key: 'cpc' as const, label: 'Cost per click -15%', d: calc({ cpc: true }).profit - base.profit },
  ];
  const best = deltas.reduce((m, x) => (x.d > m.d ? x : m), deltas[0]);

  const status = now.profit > spend * 0.03 ? 'Profitable' : now.profit < -spend * 0.03 ? 'Losing money' : 'Roughly break-even';
  const tone = status === 'Profitable' ? 'var(--k-current-text)' : status === 'Losing money' ? 'var(--k-flare-text)' : 'var(--k-text)';

  // Where each $100 of sales goes
  const cogs = 100 - margin;
  const ads = now.revenue > 0 ? (spend / now.revenue) * 100 : 100;
  const keep = 100 - cogs - ads;
  const total = Math.max(100, cogs + ads);
  const w = (v: number) => `${Math.max(0, (v / total) * 100)}%`;

  // ROAS gauge
  const gaugeMax = Math.max(now.roas, breakEven) * 1.35;
  const pos = (v: number) => `${Math.min(100, (v / gaugeMax) * 100)}%`;

  const sliders = [
    { id: 'sim-spend', label: 'Monthly ad spend', text: money(spend), min: 500, max: 50000, step: 500, v: spend, set: setSpend },
    { id: 'sim-cpc', label: 'Cost per click', text: '$' + cpc.toFixed(2), min: 0.3, max: 4, step: 0.05, v: cpc, set: setCpc },
    { id: 'sim-cr', label: 'Conversion rate', text: cr.toFixed(1) + '%', min: 0.4, max: 5, step: 0.1, v: cr, set: setCr },
    { id: 'sim-aov', label: 'Average order value', text: '$' + aov, min: 20, max: 250, step: 5, v: aov, set: setAov },
    { id: 'sim-margin', label: 'Gross margin', text: margin + '%', min: 20, max: 80, step: 1, v: margin, set: setMargin },
  ];

  return (
    <div className="k-card p-5 sm:p-7 md:p-9 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
      <div className="space-y-6">
        <p className="font-semibold">Your numbers</p>
        {sliders.map((r) => (
          <div key={r.id}>
            <div className="flex justify-between items-baseline text-[0.95rem] mb-3">
              <label htmlFor={r.id} className="font-semibold">{r.label}</label>
              <output htmlFor={r.id} className="k-flare font-bold tabular-nums">{r.text}</output>
            </div>
            <input id={r.id} className="k-range" type="range" min={r.min} max={r.max} step={r.step} value={r.v} aria-valuetext={r.text} onChange={(e) => r.set(parseFloat(e.target.value))} />
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center gap-2 text-[0.95rem] font-bold" style={{ color: tone }}>
          <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: tone }} />
          {status}
        </div>
        <motion.p key={Math.round(now.profit)} initial={{ opacity: 0.5, y: 6 }} animate={{ opacity: 1, y: 0 }} className="k-h1 text-[3rem] sm:text-[3.8rem] tabular-nums mt-1" style={{ color: tone }}>
          {money(now.profit, true)}
        </motion.p>
        <p className="k-muted text-[0.95rem]">profit per month after ad spend, from {Math.round(now.orders).toLocaleString('en-US')} orders at about {money(now.cac)} each</p>

        <div className="mt-6">
          <div className="flex justify-between text-[0.85rem] mb-2">
            <span>Your ROAS <strong className="tabular-nums">{now.roas.toFixed(1)}x</strong></span>
            <span className="k-muted">Break-even <strong className="tabular-nums">{breakEven.toFixed(1)}x</strong></span>
          </div>
          <div className="relative h-3 rounded-full" style={{ background: 'var(--k-border-strong)' }} role="img" aria-label={`ROAS ${now.roas.toFixed(1)} times against a break-even of ${breakEven.toFixed(1)} times`}>
            <div className="absolute inset-y-0 left-0 rounded-full transition-all duration-500" style={{ width: pos(now.roas), background: now.roas >= breakEven ? 'var(--k-current)' : 'var(--k-flare)' }} />
            <div className="absolute -top-1.5 -bottom-1.5 w-0.5" style={{ left: pos(breakEven), background: 'var(--k-text)' }} />
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[0.85rem] font-semibold mb-2">Where each $100 of sales goes</p>
          <div className="flex h-9 rounded-xl overflow-hidden text-[0.78rem] font-bold" style={{ border: '1px solid var(--k-border-strong)' }}>
            <div className="flex items-center justify-center transition-all duration-500" style={{ width: w(cogs), background: 'var(--k-border-strong)' }}>{cogs >= 12 ? `$${Math.round(cogs)}` : ''}</div>
            <div className="flex items-center justify-center transition-all duration-500"  style={{ width: w(ads), background: 'var(--k-btn-flare)', color: 'var(--k-cta-text)' }}>{ads >= 12 ? `$${Math.round(ads)}` : ''}</div>
            {keep > 0 && <div className="flex items-center justify-center transition-all duration-500" style={{ width: w(keep), background: 'var(--k-current)', color: '#0b0f14' }}>{keep >= 8 ? `$${Math.round(keep)}` : ''}</div>}
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[0.82rem] mt-2 k-muted">
            <li>Product cost ${Math.round(cogs)}</li>
            <li>Ads ${Math.round(ads)}</li>
            <li>{keep >= 0 ? `You keep $${Math.round(keep)}` : `You lose $${Math.round(-keep)}`}</li>
          </ul>
        </div>

        <div className="mt-7">
          <p className="text-[0.85rem] font-semibold mb-2">Which fix is worth the most? Tap to apply.</p>
          <div className="flex flex-wrap gap-2">
            {deltas.map((d) => (
              <button key={d.key} type="button" aria-pressed={lev[d.key]} data-active={lev[d.key]} className="k-chip !rounded-xl !py-2" onClick={() => setLev((l) => ({ ...l, [d.key]: !l[d.key] }))}>
                {d.label} <span className="tabular-nums opacity-80">{money(d.d, true)}</span>
              </button>
            ))}
          </div>
          <p role="status" className="text-[0.92rem] mt-3 leading-relaxed">
            {base.profit < 0
              ? `At these numbers you lose money on every order. Raising spend would make it worse, so fix ${best.label.split(' +')[0].split(' -')[0].toLowerCase()} first.`
              : `The biggest lever here is ${best.label.toLowerCase()}, worth about ${money(best.d)} a month. That is the kind of thing our audit looks for.`}
          </p>
        </div>
        <p className="text-[0.78rem] k-muted mt-4 leading-relaxed">Simple arithmetic on the numbers you enter. It is not a forecast or a promise of results.</p>
      </div>
    </div>
  );
}

/* ---------- Offer pillars (tabs) ---------- */
export function PillarTabs() {
  const [id, setId] = useState<string>(PILLARS[0].id);
  const p = PILLARS.find((x) => x.id === id)!;
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist">
        {PILLARS.map((x) => (
          <button key={x.id} role="tab" aria-selected={x.id === id} data-active={x.id === id} className="k-chip" onClick={() => setId(x.id)}>
            {x.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="k-card p-7 md:p-9 grid md:grid-cols-[1fr_1.2fr] gap-8">
          <div>
            <h3 className="k-h2 text-[2rem]">{p.label}</h3>
            <p className="k-muted mt-3 leading-relaxed">{p.blurb}</p>
          </div>
          <ul className="space-y-3">
            {p.items.map((it, i) => (
              <motion.li key={it} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }} className="flex items-start gap-3 text-[0.95rem]">
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'var(--k-glow)', color: 'var(--k-flare)' }}>
                  <Check size={12} strokeWidth={3} />
                </span>
                {it}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------- Before / after slider (concept teardown) ---------- */
function MockPage({ after }: { after: boolean }) {
  return (
    <div className="absolute inset-0 p-5 md:p-7 grid grid-cols-2 gap-5" style={{ background: after ? 'var(--k-surface)' : 'var(--k-panel)' }}>
      <div className="rounded-lg" style={{ background: after ? 'linear-gradient(160deg, var(--k-current), var(--k-flare))' : 'var(--k-border-strong)', opacity: after ? 0.9 : 1 }} />
      <div className="flex flex-col gap-2.5">
        {after && (
          <div className="flex items-center gap-1 k-flare text-xs">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={12} fill="currentColor" />
            ))}
            <span className="k-muted ml-1">4.8 · 1,240 reviews</span>
          </div>
        )}
        <div className="h-4 rounded" style={{ background: 'var(--k-text)', opacity: after ? 0.9 : 0.35, width: after ? '80%' : '95%' }} />
        <div className="h-4 rounded" style={{ background: 'var(--k-text)', opacity: after ? 0.9 : 0.35, width: after ? '55%' : '70%' }} />
        {!after && <div className="h-2 rounded w-full" style={{ background: 'var(--k-border-strong)' }} />}
        {!after && <div className="h-2 rounded w-full" style={{ background: 'var(--k-border-strong)' }} />}
        {!after && <div className="h-2 rounded w-[85%]" style={{ background: 'var(--k-border-strong)' }} />}
        {after && <p className="text-[0.78rem] k-muted leading-snug">Soothes dry skin in 7 days, or your money back.</p>}
        <div className="mt-auto rounded-lg py-3 text-center text-sm font-semibold" style={{ background: after ? 'var(--k-flare)' : 'var(--k-muted)', color: '#fff' }}>{after ? 'Add to cart · $38' : 'Submit'}</div>
        {after && <p className="text-[0.75rem] k-muted text-center">Free shipping over $50 · 30-day returns</p>}
      </div>
    </div>
  );
}

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const drag = useRef(false);
  const update = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100)));
  };
  return (
    <div>
      <div
        ref={box}
        className="relative w-full overflow-hidden rounded-2xl select-none touch-pan-y"
        style={{ aspectRatio: '16 / 10', border: '1px solid var(--k-border-strong)' }}
        onPointerDown={(e) => {
          drag.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          update(e.clientX);
        }}
        onPointerMove={(e) => drag.current && update(e.clientX)}
        onPointerUp={() => (drag.current = false)}
      >
        <MockPage after />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <MockPage after={false} />
        </div>
        <span className="absolute top-3 left-3 k-chip !py-1 !px-2.5 !text-[0.75rem]">Before</span>
        <span className="absolute top-3 right-3 k-chip !py-1 !px-2.5 !text-[0.75rem]" data-active="true">After</span>
        <div className="absolute top-0 bottom-0 w-0.5" style={{ left: `${pos}%`, background: 'var(--k-flare)' }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg" style={{ background: 'var(--k-flare)' }}>
            ⇄
          </div>
        </div>
      </div>
      <input aria-label="Compare before and after" className="k-range mt-4" type="range" min={4} max={96} value={pos} onChange={(e) => setPos(parseInt(e.target.value))} />
    </div>
  );
}
