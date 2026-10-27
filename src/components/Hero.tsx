import React from 'react';
import { ArrowDown, Sliders, Layers } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
  onOpenAccessibility: () => void;
  scrollY: number;
  reducedMotion: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  isDark,
  onOpenAccessibility,
  scrollY,
  reducedMotion,
}) => {
  // Smooth parallax without sudden snap or jump
  const driftY = reducedMotion ? 0 : Math.min(scrollY * 0.15, 60);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="intro"
      className="relative min-h-[100svh] w-full flex flex-col justify-center items-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden select-none"
    >
      {/* Background ambient radial glow layers (smoothly anchored, never blopnou) */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 -right-16 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full blur-3xl transition-opacity duration-300 ${
            isDark ? 'bg-sky-500/10' : 'bg-sky-500/10'
          }`}
          style={{
            transform: `translate3d(0, ${driftY * -0.5}px, 0)`,
          }}
        />
        <div
          className={`absolute bottom-1/4 -left-16 w-72 sm:w-[420px] h-72 sm:h-[420px] rounded-full blur-3xl transition-opacity duration-300 ${
            isDark ? 'bg-indigo-500/10' : 'bg-indigo-500/10'
          }`}
          style={{
            transform: `translate3d(0, ${driftY * 0.4}px, 0)`,
          }}
        />
      </div>

      {/* Main Centered Content Container - Perfectly centered, rock solid */}
      <div
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center will-change-transform"
        style={{
          transform: `translate3d(0, ${-driftY * 0.2}px, 0)`,
        }}
      >
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-6 text-[11px] font-mono-tech tracking-wider uppercase backdrop-blur-md transition-all shadow-xs border-inherit bg-black/5 dark:bg-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="opacity-90">Cinematic edge motion · living canvas grain</span>
        </div>

        {/* 3D Headline: BLUR AT THE EDGE */}
        <h1
          className="font-display text-shadow-3d tracking-tight font-black uppercase leading-[0.84] text-[clamp(52px,12vw,144px)] mb-6 text-inherit transition-transform duration-200"
          aria-label="BLUR AT THE EDGE"
        >
          <span className="block">BLUR</span>
          <span className="block">AT THE</span>
          <span className="block text-sky-500">EDGE.</span>
        </h1>

        {/* Description - High contrast & accessible */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 transition-colors duration-200 opacity-90 text-[var(--muted)]">
          Symmetric top and bottom glass edges with smooth inertial scrolling, velocity response,
          layered parallax, and living 35mm film grain—crafted for aesthetic impact and certified WCAG accessibility.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => scrollToSection('blur')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md hover:shadow-sky-500/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 active:scale-95"
          >
            <span>Explore Experience</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('stack')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full border text-xs sm:text-sm font-semibold tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isDark
                ? 'border-white/20 bg-white/5 hover:bg-white/10 text-white focus-visible:outline-white'
                : 'border-black/15 bg-black/5 hover:bg-black/10 text-black focus-visible:outline-black'
            }`}
          >
            <Layers className="w-4 h-4 text-sky-500" />
            <span>Interactive Stack</span>
          </button>

          <button
            type="button"
            onClick={onOpenAccessibility}
            className={`inline-flex items-center gap-2 px-4 py-3 rounded-full border text-xs sm:text-sm font-semibold tracking-wide transition-all focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isDark
                ? 'border-white/15 bg-white/5 hover:bg-white/10 text-neutral-300'
                : 'border-black/15 bg-black/5 hover:bg-black/10 text-neutral-700'
            }`}
            title="Accessibility settings"
          >
            <Sliders className="w-4 h-4 text-amber-500" />
            <span className="hidden sm:inline">Accessibility</span>
          </button>
        </div>

        {/* Feature Highlights Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 w-full max-w-3xl pt-8 border-t border-[var(--line)]">
          <div className="flex flex-col items-center p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-inherit">
            <span className="font-mono-tech text-xs font-bold text-sky-500">01</span>
            <span className="text-xs font-bold uppercase tracking-wider mt-1">Symmetric Blur</span>
            <span className="text-[10px] opacity-75 mt-0.5">Top & Bottom</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-inherit">
            <span className="font-mono-tech text-xs font-bold text-sky-500">02</span>
            <span className="text-xs font-bold uppercase tracking-wider mt-1">Dual Gradient</span>
            <span className="text-[10px] opacity-75 mt-0.5">Soft Falloff</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-inherit">
            <span className="font-mono-tech text-xs font-bold text-sky-500">03</span>
            <span className="text-xs font-bold uppercase tracking-wider mt-1">Living Grain</span>
            <span className="text-[10px] opacity-75 mt-0.5">24fps Emulsion</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-inherit">
            <span className="font-mono-tech text-xs font-bold text-sky-500">04</span>
            <span className="text-xs font-bold uppercase tracking-wider mt-1">WCAG AAA</span>
            <span className="text-[10px] opacity-75 mt-0.5">Dark & Light</span>
          </div>
        </div>
      </div>
    </section>
  );
};
