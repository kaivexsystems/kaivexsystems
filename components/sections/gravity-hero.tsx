'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Calendar } from 'lucide-react';

interface FloatingNode {
  id: string;
  label: string;
  x: number; // percentage from center
  y: number; // percentage from center
  targetId: string;
}

const floatingNodes: FloatingNode[] = [
  { id: '1', label: 'B2B GROWTH', x: -38, y: -28, targetId: 'services' },
  { id: '2', label: 'SPEED TO LEAD', x: 36, y: -30, targetId: 'services' },
  { id: '3', label: 'CLIENT RESULTS', x: -42, y: 15, targetId: 'results' },
  { id: '4', label: 'HOW IT WORKS', x: 40, y: 18, targetId: 'process' },
  { id: '5', label: 'PRICING', x: -22, y: 36, targetId: 'pricing' },
  { id: '6', label: 'BOOK A CALL', x: 24, y: 35, targetId: 'booking' },
];

export function GravityHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Canvas Starfield & Particle Orbit
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate stars
    const starCount = 180;
    const stars: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.05 + 0.02,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle radial center dark aura
      const radialGradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        50,
        width / 2,
        height / 2,
        width / 1.5
      );
      radialGradient.addColorStop(0, 'rgba(10, 13, 22, 0.4)');
      radialGradient.addColorStop(1, 'rgba(4, 6, 10, 1)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw and gently drift stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y -= star.speed;
        if (star.y < 0) star.y = height;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#04060A] text-white select-none pt-20 pb-16 px-4"
    >
      {/* Background Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Floating Orbital Nodes (From Kexsio Space Hero recording) */}
      <div className="absolute inset-0 pointer-events-none z-10 max-w-6xl mx-auto">
        {floatingNodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          return (
            <div
              key={node.id}
              style={{
                left: `calc(50% + ${node.x}%)`,
                top: `calc(50% + ${node.y}%)`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            >
              <button
                type="button"
                onClick={() => scrollTo(node.targetId)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                {/* Concentric gravitational rings on hover */}
                {isHovered && (
                  <span className="absolute -inset-3 rounded-full border border-purple-500/40 animate-ping pointer-events-none" />
                )}
                {isHovered && (
                  <span className="absolute -inset-1.5 rounded-full border border-purple-500/60 pointer-events-none" />
                )}

                {/* Glowing celestial dot */}
                <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7] group-hover:scale-125 transition-transform" />

                {/* Label in architectural clean sans */}
                <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors uppercase">
                  {node.label}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Main Monumental Centerpiece */}
      <div className="relative z-20 text-center flex flex-col items-center max-w-4xl mx-auto px-4 mt-8">
        {/* Subtle Micro-Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-slate-300 uppercase">
            GROWTH ARCHITECTURE & CUSTOM INFRASTRUCTURE
          </span>
        </div>

        {/* Monumental Layered Typography */}
        <div className="relative leading-none mb-6">
          {/* Outlined Wireframe Title Row */}
          <h1
            className="text-6xl sm:text-8xl md:text-9xl font-black font-display tracking-tight text-transparent select-none uppercase"
            style={{
              WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.35)',
            }}
          >
            PREDICTABLE
          </h1>

          {/* Heavy Solid White Title Row with Soft Aura */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black font-display tracking-tight text-white select-none uppercase -mt-2 sm:-mt-5 drop-shadow-[0_0_60px_rgba(255,255,255,0.35)]">
            PIPELINES
          </h1>
        </div>

        {/* Clean, Plain English Description */}
        <p className="max-w-xl text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed mb-10">
          We build client acquisition systems and custom software for founders and contractors.
          More qualified appointments. Fast response times. Consistent revenue.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://cal.com/ahmad-farooq-tuwcnw/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-7 py-3.5 rounded-full bg-white text-black font-sans font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.45)] transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <span>Book a 30-Min Call</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            type="button"
            onClick={() => scrollTo('results')}
            className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-sans font-medium text-sm transition-all"
          >
            View Real Results &darr;
          </button>
        </div>

        {/* Simple Location & Proof Footnote */}
        <div className="mt-14 flex items-center gap-6 text-xs text-slate-500 font-sans tracking-wide">
          <span>Based in Lahore, operating worldwide</span>
          <span>&bull;</span>
          <span>100% Custom Code</span>
          <span>&bull;</span>
          <span>Zero VAs</span>
        </div>
      </div>
    </div>
  );
}

export default GravityHero;
