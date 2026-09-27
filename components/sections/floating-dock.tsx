"use client";

import React, { useState, useEffect } from "react";
import { useTrack } from "@/components/track-context";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Briefcase, Wrench, Search, Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingDockProps {
  onOpenCommandPalette?: () => void;
}

export function FloatingDock({ onOpenCommandPalette }: FloatingDockProps) {
  const { track, setTrack } = useTrack();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-5 pointer-events-none transition-all duration-300">
      <div
        className={cn(
          "pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 py-2.5 rounded-2xl border transition-all duration-300 backdrop-blur-xl",
          scrolled
            ? "bg-[#0b1019]/90 border-slate-700/80 shadow-2xl shadow-black/80 py-2"
            : "bg-[#0c121d]/75 border-slate-800/80 shadow-lg shadow-black/40"
        )}
      >
        {/* Brand Logo & Systems Uptime Badge */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 p-0.5 shadow-md shadow-orange-600/30">
            <div className="w-full h-full bg-[#070a0f] rounded-[10px] flex items-center justify-center">
              <span className="font-display font-black text-sm text-orange-500">K</span>
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-extrabold tracking-wider text-sm text-white group-hover:text-orange-400 transition">
              KAIVEX <span className="text-orange-500">SYSTEMS</span>
            </span>
            <p className="font-mono text-[9px] text-slate-400 tracking-wider">
              GROWTH &amp; DIGITAL INFRASTRUCTURE
            </p>
          </div>
        </a>

        {/* Center Track Horizon Switcher (Spell 1) */}
        <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner">
          <button
            onClick={() => setTrack("b2b")}
            className={cn(
              "px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer",
              track === "b2b"
                ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-md shadow-orange-600/30"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span className="hidden md:inline">High-Ticket</span> B2B
          </button>
          <button
            onClick={() => setTrack("contractors")}
            className={cn(
              "px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer",
              track === "contractors"
                ? "bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md shadow-teal-600/30"
                : "text-slate-400 hover:text-slate-200"
            )}
          >
            <Wrench className="w-3.5 h-3.5" />
            Contractors<span className="hidden md:inline"> &amp; Local</span>
          </button>
        </div>

        {/* Right Navigation & CTAs */}
        <div className="flex items-center gap-2">
          {/* Cmd+K Search trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 text-xs font-mono text-slate-400 hover:text-slate-200 transition cursor-pointer"
            title="Open Command Palette"
          >
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">
              ⌘K
            </kbd>
          </button>

          {/* Cal.com CTA */}
          <a
            href="https://cal.com/ahmad-farooq-tuwcnw/15min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagneticButton className="px-3.5 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold font-mono tracking-wide shadow-lg shadow-orange-600/30 transition flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Call</span>
              <ChevronRight className="w-3 h-3 text-orange-200" />
            </MagneticButton>
          </a>
        </div>
      </div>
    </header>
  );
}
