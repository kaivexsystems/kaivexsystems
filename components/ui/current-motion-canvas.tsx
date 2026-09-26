'use client';

import React, { useRef, useEffect } from 'react';

interface CurrentMotionCanvasProps {
  theme: 'light' | 'dark';
  className?: string;
}

/**
 * Organic Deep Current Motion Canvas
 * Renders flowing hydrodynamic sine-wave currents mapped to Brand Guideline v2:
 * Light: Ledger Cream (#EBE3D3) with deepened flare (#D9551F) & deepened current (#2E9C82)
 * Dark: Abyss Ink (#0B0F14) with signal flare (#FF7A47) & ice current (#8FE0CE)
 */
export function CurrentMotionCanvas({ theme, className = '' }: CurrentMotionCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Wave parameters (3 waves corresponding to the 3 current lines in the logo)
    let step = 0;

    const render = () => {
      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);
      step += 0.008;

      const isLight = theme === 'light';

      // Wave configurations
      const waves = isLight
        ? [
            {
              color: 'rgba(107, 101, 95, 0.08)', // Warm Fog
              amplitude: 25,
              frequency: 0.0018,
              speed: 0.012,
              offsetY: height * 0.28,
              lineWidth: 1.5,
            },
            {
              color: 'rgba(46, 156, 130, 0.12)', // Current, deepened
              amplitude: 45,
              frequency: 0.0022,
              speed: 0.018,
              offsetY: height * 0.42,
              lineWidth: 2.8,
            },
            {
              color: 'rgba(217, 85, 31, 0.14)', // Flare, deepened
              amplitude: 60,
              frequency: 0.0026,
              speed: 0.014,
              offsetY: height * 0.58,
              lineWidth: 3.5,
            },
          ]
        : [
            {
              color: 'rgba(152, 166, 173, 0.09)', // Fog
              amplitude: 30,
              frequency: 0.0016,
              speed: 0.012,
              offsetY: height * 0.28,
              lineWidth: 1.5,
            },
            {
              color: 'rgba(143, 224, 206, 0.18)', // Ice Current
              amplitude: 50,
              frequency: 0.0022,
              speed: 0.018,
              offsetY: height * 0.42,
              lineWidth: 2.8,
            },
            {
              color: 'rgba(255, 122, 71, 0.22)', // Signal Flare
              amplitude: 70,
              frequency: 0.0028,
              speed: 0.015,
              offsetY: height * 0.58,
              lineWidth: 3.8,
            },
          ];

      // Draw each harmonic current line
      waves.forEach((wave, idx) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;
        ctx.lineCap = 'round';

        const mouseInfluence = (mouseY / height - 0.5) * 60;
        const startY = wave.offsetY + mouseInfluence * (idx === 1 ? -1 : 1);

        for (let x = 0; x <= width; x += 6) {
          const distanceToMouse = Math.abs(x - mouseX);
          const mouseDamp = Math.max(0, 1 - distanceToMouse / (width * 0.45)) * 25;

          const y =
            startY +
            Math.sin(x * wave.frequency + step * (idx + 1) * 0.8) * (wave.amplitude + mouseDamp) +
            Math.cos(x * 0.001 + step * 0.5) * 15;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      // Subtle ambient light particle drift
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full select-none transition-opacity duration-700 ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}

export default CurrentMotionCanvas;
