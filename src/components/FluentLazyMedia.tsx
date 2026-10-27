/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';
import {
  determineMediaLoadingState,
  getFluentBlobGradient,
  calculateAspectRatioPadding,
  createLazyObserverOptions,
  MediaLoadState,
} from '../utils/lazyMediaHelper';

interface FluentLazyMediaProps {
  src: string;
  alt: string;
  category?: 'projekty' | 'kits' | 'assets' | 'social' | 'default';
  isDark?: boolean;
  aspectWidth?: number;
  aspectHeight?: number;
  className?: string;
  title?: string;
  badge?: string;
}

export const FluentLazyMedia: React.FC<FluentLazyMediaProps> = ({
  src,
  alt,
  category = 'default',
  isDark = true,
  aspectWidth = 16,
  aspectHeight = 10,
  className = '',
  title,
  badge,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, createLazyObserverOptions('120px 0px'));

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const state: MediaLoadState = determineMediaLoadingState(inView, isLoaded, hasError);
  const blobGradient = getFluentBlobGradient(category, isDark);
  const paddingTop = calculateAspectRatioPadding(aspectWidth, aspectHeight);

  return (
    <div
      ref={containerRef}
      className={`fluent-media-container relative w-full overflow-hidden rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10 bg-neutral-900/40 dark:bg-neutral-950/60 light:bg-slate-100/70 backdrop-blur-md ${className}`}
      style={{ paddingBottom: paddingTop }}
    >
      {/* 1) Dynamic Fluent Load Blob Skeleton Placeholder */}
      <div
        className={`fluent-skeleton-blob absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out pointer-events-none ${
          state === 'loaded' ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      >
        {/* Ambient Acrylic Mesh Backing */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent dark:from-white/[0.03] light:from-black/[0.02]" />

        {/* Morphing Organic Blob */}
        <div
          className="fluent-morph-blob"
          style={{ background: blobGradient }}
        />

        {/* Secondary Harmonic Mini Blob */}
        <div
          className="fluent-morph-blob-secondary"
          style={{ background: blobGradient }}
        />

        {/* Dynamic Shimmer Wave */}
        <div className="fluent-shimmer-sweep" />

        {/* Fluent Badge & Placeholder Info */}
        <div className="relative z-10 flex flex-col items-center gap-1.5 px-4 py-2 rounded-xl bg-black/30 dark:bg-black/40 light:bg-white/60 backdrop-blur-md border border-white/10 light:border-black/5 shadow-sm text-center">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-[10px] tracking-wider text-cyan-400 uppercase font-bold">
              {badge || category.toUpperCase()}
            </span>
          </div>
          {title && (
            <span className="text-[11px] font-semibold text-white/80 dark:text-white/80 light:text-neutral-800 line-clamp-1 max-w-[180px]">
              {title}
            </span>
          )}
        </div>
      </div>

      {/* 2) Actual High-Fidelity Resource (Loaded on Viewport Intersection) */}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out transform ${
            state === 'loaded'
              ? 'opacity-100 filter-none scale-100'
              : 'opacity-0 blur-lg scale-105'
          }`}
        />
      )}

      {/* 3) Error State Fallback */}
      {state === 'error' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-neutral-900/80 text-center">
          <ImageIcon className="w-6 h-6 text-neutral-500 mb-1" />
          <span className="text-xs font-mono text-neutral-400">Media Preview Secured</span>
        </div>
      )}

      {/* 4) Subtle Specular Edge Polish on Image */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-inset ring-white/10 dark:ring-white/10 light:ring-black/5" />
    </div>
  );
};
