import React, { useState } from 'react';
import { Layers, Activity, Gauge, Zap, Sparkles, Sliders } from 'lucide-react';

interface EffectStackProps {
  isDark: boolean;
  currentVelocity: number;
  lerpRate: number;
  setLerpRate: (val: number) => void;
  parallaxScale: number;
  setParallaxScale: (val: number) => void;
}

export const EffectStack: React.FC<EffectStackProps> = ({
  isDark,
  currentVelocity,
  lerpRate,
  setLerpRate,
  parallaxScale,
  setParallaxScale,
}) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const stackLayers = [
    {
      step: '01',
      title: 'Inertia Physics',
      badge: 'LERP_INTERPOLATOR',
      desc: 'Sub-pixel dampening and momentum preservation that feels tactile on trackpads and wheels.',
      metric: `${(lerpRate * 100).toFixed(0)}% dampening`,
    },
    {
      step: '02',
      title: 'Velocity Sensing',
      badge: 'RATE_OF_CHANGE',
      desc: 'Continuously sampled scroll delta dynamically boosting edge blur radius and haze.',
      metric: `${Math.abs(Math.round(currentVelocity))} px/s`,
    },
    {
      step: '03',
      title: 'Layered Parallax',
      badge: 'DEPTH_FIELD',
      desc: 'Differential depth multipliers moving background ambient lights and foreground headers at decoupled speeds.',
      metric: `${parallaxScale.toFixed(2)}x depth`,
    },
    {
      step: '04',
      title: 'Symmetric Glass Edge',
      badge: 'OPTICAL_REFRACTOR',
      desc: 'Dual top/bottom frosted glass boundaries with continuous cubic masking and zero hard seams.',
      metric: 'Mirrored Y-Axis',
    },
    {
      step: '05',
      title: 'Living 35mm Grain',
      badge: '24FPS_EMULSION',
      desc: 'Stochastic half-res canvas with 6 swap buffers and 1px gate weave jitter.',
      metric: '24 FPS Jitter',
    },
  ];

  return (
    <article
      id="stack"
      className="relative min-h-[92svh] w-full flex items-center justify-center py-20 px-4 sm:px-6 border-t border-[var(--line)] scroll-mt-20"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold text-sky-500 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Interactive Engineering Playground</span>
          </div>
          <h2 className="font-display text-shadow-3d font-black uppercase text-[clamp(44px,7vw,84px)] leading-[0.88] tracking-tight mb-4">
            EFFECT STACK
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            The full rendering pipeline executing in harmony. Inspect live parameters or adjust physics settings below.
          </p>
        </div>

        {/* The Famous Effect Stack Card from original design */}
        <div className="w-full max-w-4xl p-6 sm:p-8 rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-xl shadow-2xl mb-10 transition-all">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-inherit pb-6 mb-6">
            <div>
              <span className="text-xs font-mono-tech uppercase tracking-widest text-[var(--muted-subtle)] font-bold block mb-1">
                Pipeline Architecture
              </span>
              <strong className="text-lg sm:text-2xl font-extrabold tracking-tight block">
                inertia → velocity → parallax → glass edge → living grain
              </strong>
            </div>

            {/* Live velocity badge */}
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-inherit bg-black/5 dark:bg-white/5 font-mono-tech text-xs">
              <Gauge className="w-4 h-4 text-sky-500" />
              <span>Velocity:</span>
              <span className="font-bold text-sky-500">{Math.abs(Math.round(currentVelocity))} px/s</span>
            </div>
          </div>

          {/* Interactive Stack Layers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            {stackLayers.map((layer, idx) => (
              <button
                key={layer.step}
                type="button"
                onClick={() => setActiveLayer(idx)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activeLayer === idx
                    ? 'border-sky-500 bg-sky-500/10 shadow-xs ring-1 ring-sky-500'
                    : isDark
                    ? 'border-white/10 hover:border-white/20 bg-white/5'
                    : 'border-black/10 hover:border-black/20 bg-black/5'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono-tech mb-2">
                  <span className="font-bold text-sky-500">{layer.step}</span>
                  <span className="text-[10px] opacity-75">{layer.metric}</span>
                </div>
                <div className="font-bold text-sm mb-1 leading-snug">{layer.title}</div>
                <div className="text-[10px] font-mono-tech opacity-60 uppercase">{layer.badge}</div>
              </button>
            ))}
          </div>

          {/* Active Layer Details */}
          <div className="p-5 rounded-2xl border border-inherit bg-black/5 dark:bg-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-sky-500 mb-1">
                <Zap className="w-3.5 h-3.5" />
                LAYER {stackLayers[activeLayer].step}: {stackLayers[activeLayer].badge}
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {stackLayers[activeLayer].desc}
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="px-3.5 py-2 rounded-xl border border-inherit bg-[var(--card-bg)] text-xs font-mono-tech text-center">
                <span className="block text-[10px] opacity-60">Status</span>
                <span className="text-emerald-500 font-bold">Synchronized</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl border border-inherit bg-[var(--card-bg)] text-xs font-mono-tech text-center">
                <span className="block text-[10px] opacity-60">Latency</span>
                <span className="text-sky-500 font-bold">&lt; 1.2ms</span>
              </div>
            </div>
          </div>

          {/* Interactive Physics Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-inherit">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-sky-500" />
                  Inertia Lerp Coefficient
                </span>
                <span className="font-mono-tech text-sky-500">{lerpRate.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.04"
                max="0.25"
                step="0.01"
                value={lerpRate}
                onChange={(e) => setLerpRate(Number(e.target.value))}
                className="w-full h-1.5 bg-neutral-300 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                aria-label="Adjust inertia lerp coefficient"
              />
              <div className="flex justify-between text-[10px] text-[var(--muted-subtle)] mt-1 font-mono-tech">
                <span>0.04 (Liquid)</span>
                <span>0.09 (Default)</span>
                <span>0.25 (Crisp)</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sky-500" />
                  Parallax Depth Factor
                </span>
                <span className="font-mono-tech text-sky-500">{parallaxScale.toFixed(2)}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={parallaxScale}
                onChange={(e) => setParallaxScale(Number(e.target.value))}
                className="w-full h-1.5 bg-neutral-300 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                aria-label="Adjust parallax depth factor"
              />
              <div className="flex justify-between text-[10px] text-[var(--muted-subtle)] mt-1 font-mono-tech">
                <span>0.5x (Subtle)</span>
                <span>1.0x (Optimal)</span>
                <span>2.0x (Hyper)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
