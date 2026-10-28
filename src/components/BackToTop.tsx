/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';
import { shouldShowBackToTop } from '../utils/scrollHelper';

interface BackToTopProps {
  isDark: boolean;
  onScrollToTop?: () => void;
}

export const BackToTop: React.FC<BackToTopProps> = ({ isDark, onScrollToTop }) => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const isPastFirstViewport = shouldShowBackToTop(scrollY, vh, 0.82);
    setVisible(isPastFirstViewport);
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
      const isTyping = activeEl instanceof HTMLElement && (
        activeEl.isContentEditable ||
        Boolean(activeEl.closest('input, textarea, select, [contenteditable="true"], [role="textbox"]'))
      );
      if (isTyping || e.altKey || e.ctrlKey || e.metaKey || e.repeat) return;
      if (e.key.toLowerCase() === 'h') {
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
      className={`fixed bottom-7 right-7 z-[9999] transition-all duration-300 ease-out transform ${
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
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-black/50 dark:bg-black/50 light:bg-white/50 backdrop-blur-xl border border-white/25 dark:border-white/25 light:border-black/20 shadow-[0_8px_32px_rgba(0,0,0,0.24)] hover:bg-black/60 dark:hover:bg-black/60 light:hover:bg-white/60 hover:border-white/40 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        aria-label="Zpět na začátek stránky"
        title="Zpět na začátek stránky (H)"
      >
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ArrowUp
            className={`w-5 h-5 transition-transform duration-200 ${
              isHovered
                ? '-translate-y-0.5 scale-110'
                : isDark
                ? 'text-white/80'
                : 'text-neutral-900/80'
            }`}
          />
        </div>

        {/* Tooltip on hover */}
        <span
          className={`absolute right-full mr-3 px-3 py-1.5 rounded-xl font-mono text-[11px] font-semibold whitespace-nowrap bg-black/80 dark:bg-black/90 light:bg-white/95 text-white light:text-neutral-900 border border-white/15 light:border-black/10 backdrop-blur-md shadow-xl transition-all duration-200 pointer-events-none ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span>Nahoru ↑ (H)</span>
        </span>
      </button>
    </div>
  );
};
