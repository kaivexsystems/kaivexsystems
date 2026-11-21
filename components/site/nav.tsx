'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { KaivexLogo } from '@/components/ui/kaivex-logo';
import { ThemeToggle } from './theme-toggle';
import { Button } from './button';
import { NAV } from '@/lib/site';

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const links = [{ href: '/', label: 'Home' }, ...NAV];

  return (
    <>
      <motion.div aria-hidden style={{ scaleX: progress, transformOrigin: '0% 50%', background: 'var(--k-flare)' }} className="fixed top-0 left-0 right-0 h-[3px] z-[60]" />
      <header
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl transition-[background-color,border-color] duration-300"
        style={{ background: scrolled ? 'var(--k-nav)' : 'transparent', borderBottom: `1px solid ${scrolled ? 'var(--k-border)' : 'transparent'}` }}
      >
        <div className="k-container flex items-center justify-between h-[68px] gap-4">
          <Link href="/" aria-label="Kaivex Systems, home" className="flex items-center shrink-0">
            <span className="k-light-only"><KaivexLogo theme="light" size="md" /></span>
            <span className="k-dark-only"><KaivexLogo theme="dark" size="md" /></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {NAV.map((n) => {
              const active = pathname === n.href || pathname.startsWith(n.href + '/');
              return (
                <Link key={n.href} href={n.href} aria-current={active ? 'page' : undefined} className="relative px-4 py-2.5 text-[0.95rem] font-semibold whitespace-nowrap" style={{ color: active ? 'var(--k-text)' : 'var(--k-muted)' }}>
                  <span className="k-link" data-active={active}>{n.label}</span>
                  {active && <motion.span layoutId="nav-dot" aria-hidden className="absolute left-1/2 -bottom-0.5 w-1.5 h-1.5 -ml-[3px] rounded-full" style={{ background: 'var(--k-flare)' }} transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <span className="hidden sm:block"><Button href="/audit" size="sm">Free store audit</Button></span>
            <span className="lg:hidden">
              <button ref={menuBtn} type="button" className="k-chip !px-3" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)}>
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </span>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 pt-24 px-6 pb-10 lg:hidden flex flex-col overflow-y-auto" style={{ background: 'var(--k-bg)' }}>
            <nav aria-label="Mobile" className="flex flex-col">
              {links.map((n, i) => (
                <motion.div key={n.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  <Link href={n.href} className="k-h2 text-[2rem] py-3 flex items-center justify-between border-b" style={{ borderColor: 'var(--k-border)' }}>
                    {n.label}
                    <span aria-hidden className="k-flare">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pt-8 space-y-3">
              <Button href="/audit" full>Free store audit</Button>
              <Button href="/book" variant="ghost" full>Book a call</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
