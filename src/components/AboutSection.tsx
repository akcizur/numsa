import React from 'react';
import { ShieldCheck, Cpu, Sparkles, Feather } from 'lucide-react';

export const AboutSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const principles = [
    {
      icon: ShieldCheck,
      title: 'Accessibility First',
      desc: 'WCAG AAA color contrast, semantic landmarks, keyboard trapping, and strict reduced-motion options built in from line one.',
    },
    {
      icon: Cpu,
      title: '60 FPS Performance',
      desc: 'No layout recalculations or memory leaks. Zero scroll jank through requestAnimationFrame batching and GPU compositing.',
    },
    {
      icon: Feather,
      title: 'Zero Blopnutí (Anti-Glitch)',
      desc: 'Smooth mathematical convergence towards viewport center with continuous easing and no abrupt position snapping.',
    },
    {
      icon: Sparkles,
      title: 'Tactile Physicality',
      desc: 'Living 35mm film grain, 3D extruded typography, and symmetric glass edge blur that breathes with user gestures.',
    },
  ];

  return (
    <article
      id="about"
      className="relative min-h-[92svh] w-full flex items-center justify-center py-20 px-4 sm:px-6 border-t border-[var(--line)] scroll-mt-20"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold text-sky-500 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Philosophy & Craft</span>
          </div>
          <h2 className="font-display text-shadow-3d font-black uppercase text-[clamp(44px,7vw,84px)] leading-[0.88] tracking-tight mb-4">
            ABOUT
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Jakub Růžička is a design engineer and creative technologist bridging high-fidelity visual aesthetics and
            production software engineering.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mb-12">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md flex flex-col items-start shadow-xs hover:border-sky-500/30 transition-all"
              >
                <div className="p-2.5 rounded-2xl bg-sky-500/10 text-sky-500 mb-4 border border-sky-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bio summary pill */}
        <div className="w-full max-w-3xl p-6 rounded-2xl border border-inherit bg-black/5 dark:bg-white/5 text-center flex flex-col items-center">
          <p className="text-sm sm:text-base font-medium leading-relaxed max-w-xl text-[var(--muted)]">
            "Design engineering isn't just making things look modern—it's creating experiences that feel responsive to human
            physics, respectful of all abilities, and uncompromising in craft."
          </p>
          <span className="mt-3 font-mono-tech text-xs font-bold text-sky-500">
            Jakub Růžička · Prague & Remote
          </span>
        </div>
      </div>
    </article>
  );
};
