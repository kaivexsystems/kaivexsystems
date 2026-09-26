'use client';

import React, { useRef, useEffect, useCallback, useMemo } from 'react';

export interface DotGridHeroProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  theme?: 'light' | 'dark';
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  className?: string;
}

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  vx: number;
  vy: number;
  isShocked: boolean;
}

function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 100, g: 100, b: 120 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

/**
 * Fullscreen Interactive Dot Grid Matrix
 * Replicates Screen Recording "20260924-1112-55.mp4" (Dot Field):
 * Renders an elastic 2D dot matrix that covers the full viewport,
 * displacing dynamically around the mouse pointer and rippling on click.
 */
export function DotGridHero({
  dotSize = 2.8,
  gap = 26,
  theme = 'light',
  baseColor,
  activeColor,
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 280,
  shockStrength = 16,
  maxSpeed = 3500,
  className = '',
}: DotGridHeroProps) {
  // Clear, distinct dot contrast for both themes
  const resolvedBaseColor = baseColor || (theme === 'light' ? '#C8BEAA' : '#222E3C');
  const resolvedActiveColor = activeColor || (theme === 'light' ? '#D9551F' : '#FF7A47');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: -9999,
    y: -9999,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
    active: false,
  });

  const baseRgb = useMemo(() => hexToRgb(resolvedBaseColor), [resolvedBaseColor]);
  const activeRgb = useMemo(() => hexToRgb(resolvedActiveColor), [resolvedActiveColor]);

  // Build grid covering full window viewport
  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const cell = dotSize + gap;
    const cols = Math.floor((width + gap) / cell);
    const rows = Math.floor((height + gap) / cell);

    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;

    const startX = (width - gridW) / 2 + dotSize / 2;
    const startY = (height - gridH) / 2 + dotSize / 2;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: startX + x * cell,
          cy: startY + y * cell,
          xOffset: 0,
          yOffset: 0,
          vx: 0,
          vy: 0,
          isShocked: false,
        });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  // High performance physics render loop
  useEffect(() => {
    let rafId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const proxSq = proximity * proximity;
    const springStiffness = 0.08;
    const springDamping = 0.82;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const { x: px, y: py, active } = pointerRef.current;

      for (let i = 0; i < dotsRef.current.length; i++) {
        const dot = dotsRef.current[i];

        // Physics step: spring return to (0,0)
        const ax = -dot.xOffset * springStiffness;
        const ay = -dot.yOffset * springStiffness;
        dot.vx = (dot.vx + ax) * springDamping;
        dot.vy = (dot.vy + ay) * springDamping;
        dot.xOffset += dot.vx;
        dot.yOffset += dot.vy;

        // Render coordinates
        const renderX = dot.cx + dot.xOffset;
        const renderY = dot.cy + dot.yOffset;

        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let r = dotSize / 2;
        let fillStyle: string;

        if (active && dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / proximity;
          r = dotSize / 2 + t * 2.2;
          const alpha = 0.5 + t * 0.5;

          const red = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const green = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const blue = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        } else {
          // Visible base dot opacity
          const alpha = theme === 'light' ? 0.45 : 0.6;
          fillStyle = `rgba(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}, ${alpha})`;
        }

        ctx.beginPath();
        ctx.arc(renderX, renderY, r, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();
      }

      ctx.restore();
      rafId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, dotSize, baseRgb, activeRgb, theme]);

  // Window resize observer
  useEffect(() => {
    buildGrid();
    const handleResize = () => buildGrid();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [buildGrid]);

  // Mouse tracking & shockwave across whole window
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? Math.max(now - pr.lastTime, 16) : 16;
      const clientX = e.clientX;
      const clientY = e.clientY;

      const dx = clientX - pr.lastX;
      const dy = clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);

      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }

      pr.lastTime = now;
      pr.lastX = clientX;
      pr.lastY = clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;
      pr.x = clientX;
      pr.y = clientY;
      pr.active = true;

      // Speed-triggered physical displacement
      if (speed > speedTrigger) {
        const dots = dotsRef.current;
        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i];
          const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
          if (dist < proximity) {
            const pushFactor = (1 - dist / proximity) * 0.45;
            dot.vx += (dot.cx - pr.x) * 0.08 + vx * 0.003 * pushFactor;
            dot.vy += (dot.cy - pr.y) * 0.08 + vy * 0.003 * pushFactor;
          }
        }
      }
    };

    // Click Shockwave
    const onClick = (e: MouseEvent) => {
      const cx = e.clientX;
      const cy = e.clientY;

      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius) {
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const force = shockStrength * falloff * 2.8;
          const angle = Math.atan2(dot.cy - cy, dot.cx - cx);
          dot.vx += Math.cos(angle) * force;
          dot.vy += Math.sin(angle) * force;
        }
      }
    };

    const onMouseLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('click', onClick);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [maxSpeed, speedTrigger, proximity, shockRadius, shockStrength]);

  return (
    <div
      className={`fixed inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      style={{ zIndex: 0 }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

export default DotGridHero;
