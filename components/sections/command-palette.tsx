"use client";

import React, { useState, useEffect } from "react";
import { useTrack } from "@/components/track-context";
import { 
  Search, 
  Calendar, 
  Layers, 
  Calculator, 
  CreditCard, 
  ExternalLink, 
  X, 
  Volume2, 
  VolumeX, 
  Sparkles,
  ArrowRight,
  Briefcase,
  Wrench
} from "lucide-react";
import confetti from "canvas-confetti";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const { track, setTrack } = useTrack();
  const [query, setQuery] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Play subtle synth audio blip
  const playSound = (freq = 440) => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch {
      // AudioContext unavailable
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose(); // toggle logic handled by parent
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleAction = (callback: () => void) => {
    playSound(520);
    callback();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-2xl border border-slate-800 bg-[#0a0f18] shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-[#0d1422]">
          <Search className="w-4 h-4 text-orange-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search systems (e.g., 'book', 'calculator', 'pricing')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-[360px] overflow-y-auto space-y-1 font-mono text-xs">
          <p className="px-3 py-1.5 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            Quick Actions
          </p>

          {/* Book Call */}
          <button
            onClick={() =>
              handleAction(() => {
                window.open("https://cal.com/ahmad-farooq-tuwcnw/30min", "_blank");
              })
            }
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-orange-600/20 hover:border-orange-500/40 border border-transparent transition text-left group"
          >
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-orange-400" />
              <span>Book 30-Min Diagnostic Call (Cal.com)</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-orange-400 transition" />
          </button>

          {/* Switch Track */}
          <button
            onClick={() =>
              handleAction(() => {
                setTrack(track === "b2b" ? "contractors" : "b2b");
              })
            }
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-teal-600/20 hover:border-teal-500/40 border border-transparent transition text-left group"
          >
            <div className="flex items-center gap-2.5">
              {track === "b2b" ? (
                <>
                  <Wrench className="w-4 h-4 text-teal-400" />
                  <span>Switch View to: Contractors &amp; Home Services</span>
                </>
              ) : (
                <>
                  <Briefcase className="w-4 h-4 text-orange-400" />
                  <span>Switch View to: High-Ticket B2B &amp; Consultants</span>
                </>
              )}
            </div>
            <span className="text-[10px] text-slate-500 font-bold">TOGGLE</span>
          </button>

          {/* Jump to Blueprint */}
          <button
            onClick={() =>
              handleAction(() => {
                document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
              })
            }
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition text-left"
          >
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Jump to: Architecture Bento</span>
            </div>
            <span className="text-[10px] text-slate-500">SECTION</span>
          </button>

          {/* Jump to Calculator */}
          <button
            onClick={() =>
              handleAction(() => {
                document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
              })
            }
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition text-left"
          >
            <div className="flex items-center gap-2.5">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Jump to: Pipeline Leak Calculator</span>
            </div>
            <span className="text-[10px] text-slate-500">SECTION</span>
          </button>

          {/* Jump to Pricing */}
          <button
            onClick={() =>
              handleAction(() => {
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
              })
            }
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition text-left"
          >
            <div className="flex items-center gap-2.5">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span>Jump to: Sprint &amp; Retainer Pricing</span>
            </div>
            <span className="text-[10px] text-slate-500">SECTION</span>
          </button>

          <p className="px-3 pt-3 pb-1 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
            Design Spells / Interactive
          </p>

          {/* Confetti Spell */}
          <button
            onClick={() => {
              playSound(660);
              confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
              onClose();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition text-left"
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Trigger Design Spell: Confetti Explosion</span>
            </div>
            <span className="text-[10px] text-yellow-400 font-bold">✨ SPELL</span>
          </button>

          {/* Toggle Audio */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              playSound(soundEnabled ? 300 : 600);
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition text-left"
          >
            <div className="flex items-center gap-2.5">
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
              <span>UI Audio Haptics (Web Audio API)</span>
            </div>
            <span className={soundEnabled ? "text-emerald-400 font-bold" : "text-slate-500"}>
              {soundEnabled ? "ENABLED" : "MUTED"}
            </span>
          </button>
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 bg-[#060910] border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center font-mono">
          <span>Navigation: ↑ ↓ Enter</span>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}
