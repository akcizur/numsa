/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import {
  shouldShowBackToTop,
  calculateScrollProgress,
  calculateProgressOffset,
  formatScrollPercentage,
} from '../utils/scrollHelper';

interface BackToTopProps {
  isDark: boolean;
  onScrollToTop?: () => void;
}

export const BackToTop: React.FC<BackToTopProps> = ({ isDark, onScrollToTop }) => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = calculateProgressOffset(progress, circumference);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const maxScroll = Math.max(1, docHeight - vh);

    const isPastFirstViewport = shouldShowBackToTop(scrollY, vh, 0.82);
    setVisible(isPastFirstViewport);

    const currentProgress = calculateScrollProgress(scrollY, maxScroll);
    setProgress(currentProgress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  // Keyboard shortcut 'H' for Home/Apex
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      if (activeEl && /INPUT|TEXTAREA|SELECT/i.test(activeEl.tagName)) return;
      if (e.key === 'h' || e.key === 'H') {
        scrollToTop();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-7 right-7 z-[95] transition-all duration-300 ease-out transform ${
        visible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[rgba(15,18,25,0.72)] dark:bg-[rgba(10,12,18,0.78)] light:bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-white/20 dark:border-white/20 light:border-black/15 shadow-[0_8px_32px_rgba(0,0,0,0.36)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.35)] hover:border-cyan-400/50 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        aria-label={`Zpět na začátek stránky (${formatScrollPercentage(progress)} proscrollováno)`}
        title={`Reset scroll pozice na apex (Klávesa: H · ${formatScrollPercentage(progress)})`}
      >
        {/* Fluent acrylic glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-emerald-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm" />

        {/* Circular Progress SVG */}
        <svg
          className="w-13 h-13 -rotate-90 pointer-events-none"
          viewBox="0 0 52 52"
          aria-hidden="true"
        >
          {/* Background Track */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="none"
            stroke={isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'}
            strokeWidth="2.5"
          />
          {/* Animated Progress Stroke */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            fill="none"
            stroke="url(#fluentProgressGradient)"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-150 ease-out"
          />
          <defs>
            <linearGradient id="fluentProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Icon & Hover Percentage Indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ArrowUp
            className={`w-5 h-5 transition-transform duration-200 ${
              isHovered
                ? '-translate-y-0.5 text-cyan-400 scale-110'
                : isDark
                ? 'text-white/90'
                : 'text-neutral-900'
            }`}
          />
        </div>

        {/* Tooltip on hover */}
        <span
          className={`absolute right-full mr-3 px-3 py-1.5 rounded-xl font-mono text-[11px] font-semibold whitespace-nowrap bg-black/80 dark:bg-black/90 light:bg-white/95 text-white light:text-neutral-900 border border-white/15 light:border-black/10 backdrop-blur-md shadow-xl transition-all duration-200 pointer-events-none ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span className="text-cyan-400 font-bold mr-1.5">{formatScrollPercentage(progress)}</span>
          <span>APEX ↑ (H)</span>
        </span>
      </button>
    </div>
  );
};
