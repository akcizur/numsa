import React, { useState } from 'react';
import { Eye, SlidersHorizontal, Sparkles } from 'lucide-react';

interface SectionBlurProps {
  isDark: boolean;
  edgeBlur: number;
  setEdgeBlur: (val: number) => void;
}

export const SectionBlur: React.FC<SectionBlurProps> = ({
  isDark,
  edgeBlur,
  setEdgeBlur,
}) => {
  const [interactiveBlur, setInteractiveBlur] = useState<number>(edgeBlur);

  const handleBlurChange = (val: number) => {
    setInteractiveBlur(val);
    setEdgeBlur(val);
  };

  return (
    <article
      id="blur"
      className="relative min-h-[92svh] w-full flex items-center justify-center py-20 px-4 sm:px-6 border-t border-[var(--line)] scroll-mt-20"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Column: Title & Number */}
        <div className="flex flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold text-sky-500 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Phase 01 · Optical Refraction</span>
          </div>

          <h2 className="font-display text-shadow-3d font-black uppercase text-[clamp(48px,8vw,96px)] leading-[0.88] tracking-tight mb-6">
            <span className="text-neutral-400 dark:text-neutral-500 text-3xl sm:text-5xl block mb-1">01</span>
            BLUR
          </h2>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-lg mb-6">
            The fixed edge layers stay visually transparent while dynamically adapting their blur and glow to page
            movement. Hardware-accelerated with fluid lerp interpolation so text never flickers or jumps when scrolling.
          </p>

          {/* Live Blur Adjustment interactive control */}
          <div className="w-full max-w-md p-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md shadow-xs">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-sky-500" />
                Live Glass Blur Intensity
              </span>
              <span className="font-mono-tech text-sky-500">{interactiveBlur}px</span>
            </div>
            <input
              type="range"
              min="20"
              max="130"
              value={interactiveBlur}
              onChange={(e) => handleBlurChange(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-300 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              aria-label="Adjust live glass blur intensity"
            />
            <div className="flex justify-between text-[10px] text-[var(--muted-subtle)] mt-1.5 font-mono-tech">
              <span>20px (Minimal)</span>
              <span>72px (Balanced)</span>
              <span>130px (Deep Frost)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Glass Card Simulation */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl p-6 overflow-hidden border border-[var(--card-border)] bg-gradient-to-br from-neutral-200/40 dark:from-neutral-900/60 to-transparent flex flex-col justify-between shadow-2xl">
            {/* Background elements refracted behind the card */}
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-sky-500/25 blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-indigo-500/25 blur-xl" />

            {/* Simulated Frosted Edge Bar (Top) */}
            <div
              className="w-full h-16 rounded-xl border border-white/20 dark:border-white/10 p-3 flex items-center justify-between transition-all duration-150"
              style={{
                backdropFilter: `blur(${interactiveBlur}px)`,
                WebkitBackdropFilter: `blur(${interactiveBlur}px)`,
                backgroundColor: isDark ? 'rgba(5, 5, 5, 0.45)' : 'rgba(255, 255, 255, 0.55)',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-mono-tech text-[11px] font-bold tracking-wide">EDGE_TOP.active</span>
              </div>
              <span className="font-mono-tech text-[10px] opacity-75">{interactiveBlur}px gaussian</span>
            </div>

            {/* Inner content */}
            <div className="relative z-10 my-auto py-4 text-center">
              <span className="text-xs uppercase font-mono-tech tracking-widest text-sky-500 font-bold block mb-1">
                Refractive Specimen
              </span>
              <p className="text-sm font-medium opacity-90 max-w-xs mx-auto">
                Real-time backdrop refraction without layout reflow or rendering spikes.
              </p>
            </div>

            {/* Simulated Frosted Edge Bar (Bottom) */}
            <div
              className="w-full h-16 rounded-xl border border-white/20 dark:border-white/10 p-3 flex items-center justify-between transition-all duration-150"
              style={{
                backdropFilter: `blur(${interactiveBlur}px)`,
                WebkitBackdropFilter: `blur(${interactiveBlur}px)`,
                backgroundColor: isDark ? 'rgba(5, 5, 5, 0.45)' : 'rgba(255, 255, 255, 0.55)',
              }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono-tech text-[11px] font-bold tracking-wide">EDGE_BOTTOM.active</span>
              </div>
              <span className="font-mono-tech text-[10px] opacity-75">Symmetric Mirror</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
