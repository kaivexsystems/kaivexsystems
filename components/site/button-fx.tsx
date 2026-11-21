'use client';

import { useEffect } from 'react';

/** One global listener: cursor glow and a gentle magnetic pull on .zbtn buttons (fine pointers only). */
export function ButtonFx() {
  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let current: HTMLElement | null = null;
    const reset = (el: HTMLElement | null) => {
      if (el) el.style.translate = '';
    };
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.('.zbtn') as HTMLElement | null;
      if (el !== current) {
        reset(current);
        current = el;
      }
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.translate = `${Math.max(-6, Math.min(6, dx * 0.08))}px ${Math.max(-4, Math.min(4, dy * 0.1))}px`;
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);
  return null;
}
