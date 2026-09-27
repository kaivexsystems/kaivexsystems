'use client';

import React, { useEffect, useRef } from 'react';

interface CustomCursorProps {
  theme?: 'light' | 'dark';
}

/**
 * Premium Studio Ambient Follower & Interactive Focus Cursor
 * - 100% Hardware-Accelerated (Zero React state re-renders)
 * - Subtle ambient illumination beam that highlights editorial panels
 * - Precision magnetic focus ring that softly frames clickable elements
 * - Automatically disables on touchscreens for maximum performance
 */
export function CustomCursor({ theme = 'light' }: CustomCursorProps) {
  const haloRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const isLight = theme === 'light';

  useEffect(() => {
    // Only run on non-touch devices with fine pointers
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const halo = haloRef.current;
    const ring = ringRef.current;
    if (!halo || !ring) return;

    let mouseX = -500;
    let mouseY = -500;
    let currentX = -500;
    let currentY = -500;
    let ringX = -500;
    let ringY = -500;
    let isHovering = false;
    let isVisible = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        halo.style.opacity = '1';
        ring.style.opacity = '1';
      }

      // Check for interactive targets
      const target = e.target as HTMLElement | null;
      const clickable = target?.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer');
      isHovering = !!clickable;
    };

    const onMouseLeave = () => {
      isVisible = false;
      halo.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      halo.style.opacity = '1';
      ring.style.opacity = '1';
    };

    // Smooth 120 FPS Lerp Loop running on compositor
    const render = () => {
      // Fast response for ambient halo
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      // Silky magnetic lag for precision ring
      ringX += (mouseX - ringX) * 0.28;
      ringY += (mouseY - ringY) * 0.28;

      halo.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.55 : 1})`;

      if (isHovering) {
        ring.style.borderColor = isLight ? 'rgba(217, 85, 31, 0.7)' : 'rgba(255, 122, 71, 0.8)';
        ring.style.backgroundColor = isLight ? 'rgba(217, 85, 31, 0.08)' : 'rgba(255, 122, 71, 0.12)';
      } else {
        ring.style.borderColor = isLight ? 'rgba(20, 24, 27, 0.22)' : 'rgba(255, 255, 255, 0.25)';
        ring.style.backgroundColor = 'transparent';
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isLight]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden hidden md:block">
      {/* 1. Ambient Editorial Diffuse Beam (Illuminates underlying paper/panels softly) */}
      <div
        ref={haloRef}
        style={{
          width: '320px',
          height: '320px',
          background: isLight
            ? 'radial-gradient(circle, rgba(217, 85, 31, 0.06) 0%, rgba(46, 156, 130, 0.03) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 122, 71, 0.08) 0%, rgba(143, 224, 206, 0.04) 45%, transparent 70%)',
          willChange: 'transform',
          opacity: 0,
          transition: 'opacity 0.4s ease-out',
        }}
        className="fixed top-0 left-0 rounded-full blur-xl"
      />

      {/* 2. Precision Micro Focus Ring (Subtle, sleek, non-distracting) */}
      <div
        ref={ringRef}
        style={{
          width: '26px',
          height: '26px',
          borderWidth: '1.2px',
          willChange: 'transform, border-color, background-color',
          opacity: 0,
          transition: 'opacity 0.25s ease-out, scale 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s, background-color 0.2s',
        }}
        className="fixed top-0 left-0 rounded-full border"
      />
    </div>
  );
}
