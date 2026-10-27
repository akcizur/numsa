import React, { useState } from 'react';
import { Layers, Activity, Sliders } from 'lucide-react';

interface SectionGradientProps {
  isDark: boolean;
}

export const SectionGradient: React.FC<SectionGradientProps> = ({ isDark }) => {
  const [gradientSoftness, setGradientSoftness] = useState<number>(65);

  return (
    <article
      id="gradient"
      className="relative min-h-[92svh] w-full flex items-center justify-center py-20 px-4 sm:px-6 border-t border-[var(--line)] scroll-mt-20"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Column: Visual Dual Gradient Demonstrator */}
        <div className="flex flex-col items-center justify-center order-2 md:order-1">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl p-6 overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] shadow-2xl flex flex-col justify-between">
            {/* Top gradient layer */}
            <div
              className="absolute top-0 inset-x-0 h-1/2 pointer-events-none transition-all duration-200"
              style={{
                background: isDark
                  ? `linear-gradient(180deg, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0.05) ${gradientSoftness / 2}%, transparent 100%)`
                  : `linear-gradient(180deg, rgba(2, 132, 199, 0.25) 0%, rgba(2, 132, 199, 0.06) ${gradientSoftness / 2}%, transparent 100%)`,
              }}
            />

            {/* Bottom gradient layer */}
            <div
              className="absolute bottom-0 inset-x-0 h-1/2 pointer-events-none transition-all duration-200"
              style={{
                background: isDark
                  ? `linear-gradient(0deg, rgba(129, 140, 248, 0.22) 0%, rgba(129, 140, 248, 0.05) ${gradientSoftness / 2}%, transparent 100%)`
                  : `linear-gradient(0deg, rgba(79, 70, 229, 0.25) 0%, rgba(79, 70, 229, 0.06) ${gradientSoftness / 2}%, transparent 100%)`,
              }}
            />

            {/* Content overlay inside card */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono-tech border-b border-inherit pb-3">
              <span className="flex items-center gap-1.5 font-bold text-sky-500">
                <Layers className="w-3.5 h-3.5" />
                SYMMETRIC_GRADIENT.map
              </span>
              <span className="opacity-75">{gradientSoftness}% falloff</span>
            </div>

            <div className="relative z-10 my-auto text-center py-6">
              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-mono-tech mb-2 border border-inherit bg-black/5 dark:bg-white/5">
                Harmonic Luminance Balance
              </div>
              <p className="text-sm font-semibold max-w-xs mx-auto">
                Gradual optical compression from 100% opacity at screen edge to 0% at reader focal zone.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-tech pt-3 border-t border-inherit">
              <span className="flex items-center gap-1 text-emerald-500">
                <Activity className="w-3 h-3" />
                Zero Color Banding
              </span>
              <span className="opacity-70">10-bit Dithered</span>
            </div>
          </div>
        </div>

        {/* Right Column: Title & Text */}
        <div className="flex flex-col items-start justify-center order-1 md:order-2">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold text-sky-500 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Phase 02 · Luminance Field</span>
          </div>

          <h2 className="font-display text-shadow-3d font-black uppercase text-[clamp(48px,8vw,96px)] leading-[0.88] tracking-tight mb-6">
            <span className="text-neutral-400 dark:text-neutral-500 text-3xl sm:text-5xl block mb-1">02</span>
            GRADIENT
          </h2>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-lg mb-6">
            The gradient is strongest at each viewport boundary and softens toward the content, mirrored from top to
            bottom. Combined with gate weave film grain, color banding is mathematically eliminated across all displays.
          </p>

          {/* Interactive softness slider */}
          <div className="w-full max-w-md p-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md shadow-xs">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-sky-500" />
                Falloff Softness Curve
              </span>
              <span className="font-mono-tech text-sky-500">{gradientSoftness}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="95"
              value={gradientSoftness}
              onChange={(e) => setGradientSoftness(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-300 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              aria-label="Adjust gradient falloff softness"
            />
            <div className="flex justify-between text-[10px] text-[var(--muted-subtle)] mt-1.5 font-mono-tech">
              <span>Sharp Ramp</span>
              <span>Smooth Cosine (65%)</span>
              <span>Ultra Diffused</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
