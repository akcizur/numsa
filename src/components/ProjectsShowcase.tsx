import React, { useState } from 'react';
import { ExternalLink, Terminal, Sparkles, Layers, ArrowUpRight, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  tags: string[];
  metrics: string[];
}

export const ProjectsShowcase: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'cinematic-edge',
      title: 'Symmetric Glass Viewport Engine',
      category: 'Design Systems · Physics Engine',
      year: '2026',
      summary: 'Dynamic CSS backdrop-filter and WebGL shader compositing system for high-performance glass aesthetics.',
      description:
        'Engineered an ultra-fluid viewport edge refraction system that responds in real-time to scroll velocity, gesture momentum, and ambient display brightness. Features custom cubic Hermite masks and 6-buffer stochastic 35mm grain simulation.',
      tags: ['TypeScript', 'WebGL', 'CSS Masking', 'Lerp Physics', 'WCAG AAA'],
      metrics: ['60 FPS Sustained', '<1.2ms Frame Latency', '0 layout thrashing'],
    },
    {
      id: 'spatial-typography',
      title: 'Dimensional Embossed Typography',
      category: 'Creative Technology · Shaders',
      year: '2025',
      summary: 'Sculptured 3D letterpress text shadows tuned for dynamic luminance shifts in dark and light modes.',
      description:
        'A dual-mode typographical depth system that renders extruded dimensional lettering using pure CSS multi-layer shadows without heavy 3D mesh overhead. Automatically adapts specular highlights between obsidian dark and slate light themes.',
      tags: ['Typography', 'Optical Tuning', 'Pure CSS', 'Accessibility'],
      metrics: ['20:1 Contrast Ratio', 'Zero GPU Memory Overhead', 'Responsive Type Scale'],
    },
    {
      id: 'accessible-inertial-scroll',
      title: 'Tactile Momentum & Inertia Engine',
      category: 'Interaction Engineering',
      year: '2025',
      summary: 'Decoupled wheel, pointer, and keyboard momentum engine with zero center pop (antiglitch).',
      description:
        'Built to eliminate the jarring "blop" or sudden position jump typical of automated scroll-snap engines. Provides smooth mathematical convergence towards viewport center with continuous easing and instantaneous user interrupt handling.',
      tags: ['Physics Math', 'RAF Loop', 'Event Normalization', 'Reduced Motion'],
      metrics: ['Continuous Derivability', 'WCAG 2.2 Compatible', 'Zero Jank'],
    },
    {
      id: 'stochastic-film-emulsion',
      title: 'Living 35mm Emulsion Generator',
      category: 'Visual Simulation',
      year: '2024',
      summary: 'Half-resolution canvas procedural grain simulation running at 24fps with organic gate weave.',
      description:
        'Simulates photochemical film grain without loading heavy 4K video textures or static looping GIFs. Generates stochastic grain frames on the fly and jitter-swaps them at cinematic 24fps with subtle micro gate weave.',
      tags: ['Canvas 2D', 'Procedural Noise', 'Cinematic 24FPS', 'Micro-Jitter'],
      metrics: ['240x240 Buffer Size', 'Ultra Lightweight', 'Zero Bandwidth'],
    },
  ];

  return (
    <article
      id="works"
      className="relative min-h-[92svh] w-full flex items-center justify-center py-20 px-4 sm:px-6 border-t border-[var(--line)] scroll-mt-20"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs font-bold text-sky-500 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>Selected Projects & Engineering</span>
          </div>
          <h2 className="font-display text-shadow-3d font-black uppercase text-[clamp(44px,7vw,84px)] leading-[0.88] tracking-tight mb-4">
            WORKS
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Explorations at the boundary of visual craft, high-speed physics, and accessibility standards.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group p-6 sm:p-7 rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-md hover:border-sky-500/40 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedProject(proj)}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-tech mb-3">
                  <span className="text-sky-500 font-bold">{proj.category}</span>
                  <span className="opacity-60">{proj.year}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 group-hover:text-sky-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  {proj.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono-tech border border-inherit bg-black/5 dark:bg-white/5 opacity-80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-inherit text-xs font-semibold">
                  <span className="text-sky-500 flex items-center gap-1 group-hover:underline">
                    View technical case study
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-sky-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className={`w-full max-w-lg p-6 sm:p-8 rounded-3xl border shadow-2xl ${
                isDark
                  ? 'bg-neutral-950 border-white/20 text-neutral-100'
                  : 'bg-white border-black/15 text-neutral-900'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-inherit mb-4">
                <span className="font-mono-tech text-xs text-sky-500 font-bold uppercase">
                  {selectedProject.category} · {selectedProject.year}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg border border-inherit hover:bg-neutral-500/10 transition-colors"
                  aria-label="Close project details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h2 id="project-modal-title" className="text-2xl font-black tracking-tight mb-3">
                {selectedProject.title}
              </h2>

              <p className="text-sm leading-relaxed text-[var(--muted)] mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <span className="text-xs font-mono-tech uppercase font-bold text-sky-500 block mb-2">
                  Key Performance Metrics
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedProject.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl border border-inherit bg-black/5 dark:bg-white/5 text-center text-xs font-mono-tech font-bold"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono-tech border border-inherit bg-black/5 dark:bg-white/5 opacity-80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-inherit flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors"
                >
                  Close Spec
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
