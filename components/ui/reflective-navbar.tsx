'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { KaivexLogo } from './kaivex-logo';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'process', label: 'Process', href: '#process' },
  { id: 'results', label: 'Results', href: '#results' },
  { id: 'pricing', label: 'Pricing', href: '#pricing' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function ReflectiveNavbar() {
  const [activeItem, setActiveItem] = useState('services');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto"
      >
        <div
          className={`flex items-center gap-2 sm:gap-5 px-3 sm:px-5 py-2 rounded-2xl border transition-all duration-500 ${
            scrolled
              ? 'bg-white/[0.04] border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]'
              : 'bg-white/[0.03] border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]'
          } backdrop-blur-2xl backdrop-saturate-150`}
        >
          {/* Brand Monogram & Authentic Logo */}
          <a
            href="#"
            aria-label="Kaivex Systems Home"
            className="flex items-center gap-2 pr-3 border-r border-white/[0.08] group transition-opacity hover:opacity-90"
          >
            <KaivexLogo variant="full" size="sm" theme="dark" showSublabel={false} />
          </a>

          {/* Navigation Links */}
          <nav className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveItem(item.id);
                    scrollTo(item.href);
                  }}
                  className={`relative px-3 py-1.5 rounded-xl text-xs font-sans font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_1px_3px_rgba(0,0,0,0.3)]'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/[0.05]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Book a Call CTA */}
          <div className="pl-3 border-l border-white/[0.08]">
            <a
              href="https://cal.com/ahmad-farooq-tuwcnw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-4 py-1.5 rounded-xl bg-white/90 hover:bg-white text-black text-xs font-sans font-bold transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_16px_rgba(255,255,255,0.1)] hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] active:scale-95"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default ReflectiveNavbar;
