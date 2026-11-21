'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { RotateCcw, X, Sparkles } from 'lucide-react';
import { Button } from './button';
import { whatsappLink } from '@/lib/site';

type Answers = { type?: 'ecom' | 'local' | 'explore'; stage?: 'pre' | 'scale' | 'flat'; need?: string };
type Opt = { label: string; next?: string; href?: string; set?: Partial<Answers> };
type Node = { say: string[]; options: Opt[] };
type Msg = { from: 'bot' | 'me'; text: string; id: number };

const NODES: Record<string, Node> = {
  start: {
    say: ['Hi, this is the Kaivex guide. It is a short scripted flow, not an AI chat. Two quick questions and I will point you to the right next step.', 'What best describes your business?'],
    options: [
      { label: 'I run a Shopify or online store', next: 'ecom_stage', set: { type: 'ecom' } },
      { label: 'I run a local service business', next: 'local_need', set: { type: 'local' } },
      { label: 'Just exploring', next: 'explore', set: { type: 'explore' } },
    ],
  },
  ecom_stage: {
    say: ['Good. Where is the store right now?'],
    options: [
      { label: 'Not selling yet', next: 'ecom_need', set: { stage: 'pre' } },
      { label: 'Selling, want to scale', next: 'ecom_need', set: { stage: 'scale' } },
      { label: 'Sales are flat or dropping', next: 'ecom_need', set: { stage: 'flat' } },
    ],
  },
  ecom_need: {
    say: ['What is the biggest bottleneck?'],
    options: [
      { label: 'Ads are not profitable', next: 'result', set: { need: 'ads' } },
      { label: 'Visitors do not buy', next: 'result', set: { need: 'cvr' } },
      { label: 'I cannot tell what is working', next: 'result', set: { need: 'tracking' } },
      { label: 'Creative keeps going stale', next: 'result', set: { need: 'creative' } },
      { label: 'I am launching a product', next: 'result', set: { need: 'launch' } },
    ],
  },
  local_need: {
    say: ['What do you want to fix first?'],
    options: [
      { label: 'Not enough enquiries', next: 'result', set: { need: 'leads' } },
      { label: 'My website is outdated', next: 'result', set: { need: 'site' } },
      { label: 'Google Ads is not paying off', next: 'result', set: { need: 'ads' } },
    ],
  },
  explore: {
    say: ['No problem. Where do you want to go?'],
    options: [
      { label: 'How do you work?', href: '/process' },
      { label: 'What have you built?', href: '/work' },
      { label: 'Who is behind Kaivex?', href: '/about' },
      { label: 'Talk to a human', href: '/book' },
    ],
  },
};

const ECOM_ADVICE: Record<string, string> = {
  ads: 'Unprofitable ads are usually a storefront or measurement problem before they are a budget problem. We would check product pages and tracking before touching spend.',
  cvr: 'Conversion leaks are often the fastest win: product pages, trust signals, speed and checkout friction. A focused audit finds them quickly.',
  tracking: 'If tracking is unreliable you are optimizing blind. Clean conversion tracking is a core Phase 1 deliverable for us.',
  creative: 'Creative fatigue is a testing-system problem. A structured creative testing cadence beats occasional big shoots.',
  launch: 'A launch needs the page, the creative and the campaign built together. That is exactly what our foundation sprint covers.',
};
const LOCAL_ADVICE: Record<string, string> = {
  leads: 'Enquiries come from being found and making it easy to ask. Local SEO, a strong Google Business Profile and a clear enquiry path are the foundation.',
  site: 'An outdated site quietly turns away customers. Service pages, mobile layout and enquiry forms usually fix most of it.',
  ads: 'Local Google Ads often fail on the landing page and tracking side. We would audit those first.',
};

const STAGE_LABEL: Record<string, string> = { pre: 'not selling yet', scale: 'selling, want to scale', flat: 'sales flat or dropping' };
const NEED_LABEL: Record<string, string> = { ads: 'ads are not profitable', cvr: 'visitors do not buy', tracking: 'cannot tell what is working', creative: 'creative keeps going stale', launch: 'launching a product', leads: 'not enough enquiries', site: 'website is outdated' };

function buildResult(a: Answers) {
  if (a.type === 'local') {
    return {
      text: LOCAL_ADVICE[a.need ?? 'leads'],
      ctas: [
        { label: 'See the local services offer', href: '/local-services', primary: true },
        { label: 'Book a call', href: '/book' },
      ],
      wa: `Hi Kaivex, I run a local service business. Biggest issue: ${NEED_LABEL[a.need ?? 'leads']}. Can we talk?`,
    };
  }
  const honest =
    a.stage === 'pre'
      ? ' Honest note: we work best with stores that already have a validated product and some sales. Run the audit anyway and we will tell you straight if you are early.'
      : '';
  return {
    text: ECOM_ADVICE[a.need ?? 'cvr'] + honest,
    ctas: [
      { label: 'Run the free store audit', href: '/audit', primary: true },
      { label: 'See the e-commerce offer', href: '/ecommerce' },
      { label: 'Book a call', href: '/book' },
    ],
    wa: `Hi Kaivex, I run an online store (${STAGE_LABEL[a.stage ?? 'scale']}). Biggest issue: ${NEED_LABEL[a.need ?? 'cvr']}. Can we talk?`,
  };
}

export function Guide() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [nodeId, setNodeId] = useState<string>('start');
  const [answers, setAnswers] = useState<Answers>({});
  const [done, setDone] = useState(false);
  const idRef = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scroller = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const panel = useRef<HTMLDivElement>(null);
  const fab = useRef<HTMLButtonElement>(null);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const botSay = useCallback((lines: string[], after?: () => void) => {
    setTyping(true);
    let t = 0;
    lines.forEach((line, i) => {
      t += 650 + Math.min(900, line.length * 9);
      timers.current.push(
        setTimeout(() => {
          setMsgs((m) => [...m, { from: 'bot', text: line, id: ++idRef.current }]);
          if (i === lines.length - 1) {
            setTyping(false);
            after?.();
          }
        }, t),
      );
    });
  }, []);

  const begin = useCallback(() => {
    clearTimers();
    setMsgs([]);
    setAnswers({});
    setDone(false);
    setNodeId('start');
    botSay(NODES.start.say);
  }, [botSay]);

  // First open starts the flow.
  useEffect(() => {
    if (open && !started.current) {
      started.current = true;
      begin();
    }
  }, [open, begin]);

  // Teaser after a short delay, once per session.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem('kaivex_guide_seen') === '1';
    } catch {}
    if (seen) return;
    const t = setTimeout(() => {
      let consented = false;
      try {
        consented = !!localStorage.getItem('kaivex_cookie_consent');
      } catch {}
      if (consented) setTeaser(true);
    }, 9000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, typing, done]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        fab.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => () => clearTimers(), []);
  useEffect(() => {
    const openIt = () => setOpen(true);
    window.addEventListener('kaivex:guide', openIt);
    return () => window.removeEventListener('kaivex:guide', openIt);
  }, []);
  useEffect(() => {
    if (open) panel.current?.focus();
  }, [open]);

  const dismissTeaser = () => {
    setTeaser(false);
    try {
      sessionStorage.setItem('kaivex_guide_seen', '1');
    } catch {}
  };

  const choose = (o: Opt) => {
    if (typing) return;
    setMsgs((m) => [...m, { from: 'me', text: o.label, id: ++idRef.current }]);
    if (o.href) {
      timers.current.push(
        setTimeout(() => {
          setOpen(false);
          router.push(o.href!);
        }, 350),
      );
      return;
    }
    const next = { ...answers, ...(o.set ?? {}) };
    setAnswers(next);
    if (o.next === 'result') {
      const r = buildResult(next);
      botSay(['Based on that, here is what I would do:', r.text], () => setDone(true));
      setNodeId('result');
    } else if (o.next) {
      setNodeId(o.next);
      botSay(NODES[o.next].say);
    }
  };

  const node = NODES[nodeId];
  const showOptions = !typing && !done && node && nodeId !== 'result';
  const result = done ? buildResult(answers) : null;
  const answered = msgs.filter((m) => m.from === 'me').length;

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 hidden md:flex flex-col items-end gap-3">
        <AnimatePresence>
          {teaser && !open && (
            <motion.button
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={() => {
                dismissTeaser();
                setOpen(true);
              }}
              className="k-card !rounded-2xl px-4 py-3 text-left text-sm cursor-pointer max-w-[230px]"
            >
              <span className="font-semibold block">New here?</span>
              <span className="k-muted">Take the 30-second guide and I will point you to the right page.</span>
            </motion.button>
          )}
        </AnimatePresence>
        <motion.button
          ref={fab}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            dismissTeaser();
            setOpen((v) => !v);
          }}
          aria-label={open ? 'Close guide' : 'Open guided help'}
          className="inline-flex items-center gap-2 rounded-full px-5 min-h-[48px] font-bold shadow-xl cursor-pointer"
          style={{ background: 'var(--k-btn-flare)', color: 'var(--k-cta-text)' }}
        >
          {open ? <X size={18} /> : <Sparkles size={18} />}
          <span>{open ? 'Close' : 'Guide me'}</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panel}
            tabIndex={-1}
            role="dialog"
            aria-labelledby="guide-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed z-50 inset-x-0 bottom-0 w-full max-h-[85dvh] rounded-t-3xl sm:inset-x-auto sm:right-5 sm:bottom-24 sm:w-[390px] sm:max-h-[min(620px,calc(100vh-8rem))] sm:rounded-3xl flex flex-col overflow-hidden outline-none"
            style={{ background: 'var(--k-bg)', border: '1px solid var(--k-border-strong)', boxShadow: '0 30px 80px -20px rgba(0,0,0,0.45)' }}
          >
            <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid var(--k-border)', background: 'var(--k-panel)' }}>
              <div className="flex items-center gap-3">
                <span className="k-dot" />
                <div>
                  <p id="guide-title" className="font-bold text-[0.95rem] leading-none">Kaivex guide</p>
                  <p className="text-[0.8rem] k-muted mt-1">Scripted, no data stored</p>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="k-chip !px-3 sm:hidden mr-2" aria-label="Close guide"><X size={16} /></button>
              <button type="button" onClick={begin} className="k-chip !px-3 !py-1.5 !text-[0.82rem]" aria-label="Restart guide">
                <RotateCcw size={12} /> Restart
              </button>
            </div>

            <div className="h-1" style={{ background: 'var(--k-border)' }}>
              <motion.div className="h-full" style={{ background: 'var(--k-flare)' }} animate={{ width: done ? '100%' : `${Math.min(90, answered * 34)}%` }} transition={{ duration: 0.5 }} />
            </div>

            <div ref={scroller} role="log" aria-live="polite" aria-relevant="additions" className="flex-1 overflow-y-auto px-5 py-5 space-y-3 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              {msgs.map((m) => (
                <motion.div key={m.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={m.from === 'me' ? 'flex justify-end' : 'flex'}>
                  <div
                    className="max-w-[86%] px-4 py-2.5 text-[0.95rem] leading-relaxed"
                    style={
                      m.from === 'me'
                        ? { background: 'var(--k-cta)', color: 'var(--k-cta-text)', borderRadius: '1.1rem 1.1rem 0.3rem 1.1rem' }
                        : { background: 'var(--k-panel)', borderRadius: '1.1rem 1.1rem 1.1rem 0.3rem' }
                    }
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex">
                  <div className="k-typing px-4 py-3" style={{ background: 'var(--k-panel)', borderRadius: '1.1rem 1.1rem 1.1rem 0.3rem' }}>
                    <span /><span /><span />
                  </div>
                </div>
              )}

              {showOptions && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 pt-1">
                  {node.options.map((o) => (
                    <button key={o.label} type="button" className="k-chip" onClick={() => choose(o)}>
                      {o.label}
                    </button>
                  ))}
                </motion.div>
              )}

              {result && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2.5 pt-2">
                  {result.ctas.map((c) => (
                    <Button key={c.href} href={c.href} onClick={() => setOpen(false)} full variant={'primary' in c && c.primary ? 'primary' : 'ghost'} size="sm">
                      {c.label}
                    </Button>
                  ))}
                  <Button href={whatsappLink(result.wa)} variant="ghost" full size="sm">Send this to us on WhatsApp</Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
