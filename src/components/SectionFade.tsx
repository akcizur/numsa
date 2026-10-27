import React, { useState } from 'react';
import { EyeOff, Layers, CheckCircle } from 'lucide-react';

interface SectionFadeProps {
  isDark: boolean;
}

export const SectionFade: React.FC<SectionFadeProps> = ({ isDark }) => {
  const [maskCurve, setMaskCurve] = useState<'linear' | 'cubic' | 'exponential'>('cubic');

  return (
    <article
      id="fade"
      className="relative min-h-[92svh] w-full flex items-center justify-center py-20 px-4 sm:px-6 border-t border-[var(--line)] scroll-mt-20"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Column: Heading & Description */}
        <div className="flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold text-sky-500 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Phase 03 · Progressive Masking</span>
          </div>

          <h2 className="font-display text-shadow-3d font-black uppercase text-[clamp(48px,8vw,96px)] leading-[0.88] tracking-tight mb-6">
            <span className="text-neutral-400 dark:text-neutral-500 text-3xl sm:text-5xl block mb-1">03</span>
            FADE
          </h2>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-lg mb-6">
            CSS mask-image removes the glass progressively so there is no hard lower or upper panel seam.
            Parallax keeps depth alive while content slides underneath with continuous optical continuity.
          </p>

          {/* Mask Curve Selector */}
          <div className="w-full max-w-md p-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md shadow-xs">
            <div className="text-xs font-semibold mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <EyeOff className="w-3.5 h-3.5 text-sky-500" />
                Select Alpha Mask Falloff Function
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(['linear', 'cubic', 'exponential'] as const).map((curve) => (
                <button
                  key={curve}
                  type="button"
                  onClick={() => setMaskCurve(curve)}
                  className={`py-2 px-3 rounded-xl text-xs font-mono-tech capitalize border transition-all ${
                    maskCurve === curve
                      ? 'bg-sky-600 border-sky-500 text-white font-bold shadow-xs'
                      : isDark
                      ? 'border-white/10 hover:bg-white/5 text-neutral-300'
                      : 'border-black/10 hover:bg-black/5 text-neutral-700'
                  }`}
                >
                  {curve}
                </button>
              ))}
            </div>
            <div className="mt-3 text-[11px] text-[var(--muted-subtle)] font-mono-tech flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>
                {maskCurve === 'cubic' && 'Cubic Hermite curve: zero perceptual step'}
                {maskCurve === 'linear' && 'Linear step: uniform slope transition'}
                {maskCurve === 'exponential' && 'Exponential: aggressive edge retention'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Progressive Mask Visualization Card */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl p-6 overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)] shadow-2xl flex flex-col justify-between">
            {/* Visual gradient showing mask curve */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-300"
              style={{
                background: isDark
                  ? maskCurve === 'cubic'
                    ? 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.02) 65%, transparent 100%)'
                    : maskCurve === 'linear'
                    ? 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)'
                    : 'linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.03) 40%, transparent 100%)'
                  : maskCurve === 'cubic'
                  ? 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.06) 25%, rgba(0,0,0,0.015) 65%, transparent 100%)'
                  : maskCurve === 'linear'
                  ? 'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, transparent 100%)'
                  : 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.02) 40%, transparent 100%)',
              }}
            />

            <div className="relative z-10 flex items-center justify-between text-xs font-mono-tech border-b border-inherit pb-3">
              <span className="flex items-center gap-1.5 font-bold text-sky-500">
                <Layers className="w-3.5 h-3.5" />
                MASK_COMPOSITOR
              </span>
              <span className="opacity-75">{maskCurve.toUpperCase()}_EASING</span>
            </div>

            {/* Micro demo of text sliding under mask */}
            <div className="relative z-10 my-auto text-center py-4">
              <div className="w-48 h-12 mx-auto rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center font-mono-tech text-xs font-bold text-sky-500 mb-2">
                CONTENT_LAYER: SLIDING
              </div>
              <p className="text-xs text-[var(--muted)] max-w-xs mx-auto">
                No visual clipping rectangle, perfectly feathered transparent boundary.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-tech pt-3 border-t border-inherit">
              <span>Hardware Blending</span>
              <span className="text-emerald-500 font-bold">120 FPS Ready</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
