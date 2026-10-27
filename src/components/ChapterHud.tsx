import React from 'react';

interface ChapterHudProps {
  isDark: boolean;
  activeSection: string;
  scrollProgress: number;
}

export const ChapterHud: React.FC<ChapterHudProps> = ({
  isDark,
  activeSection,
  scrollProgress,
}) => {
  const chapters: Record<string, { n: string; name: string }> = {
    intro: { n: '00', name: 'INTRO' },
    blur: { n: '01', name: 'BLUR' },
    gradient: { n: '02', name: 'GRADIENT' },
    fade: { n: '03', name: 'FADE' },
    stack: { n: '04', name: 'STACK' },
    works: { n: '05', name: 'WORKS' },
    about: { n: '06', name: 'ABOUT' },
  };

  const current = chapters[activeSection] || chapters.intro;

  return (
    <aside
      aria-hidden="true"
      className="fixed left-5 sm:left-7 bottom-6 sm:bottom-8 z-40 flex items-center gap-3 text-[10px] font-mono-tech tracking-widest uppercase pointer-events-none select-none transition-colors"
    >
      <div
        className={`flex items-center gap-3 px-3 py-1.5 rounded-full border backdrop-blur-md shadow-xs ${
          isDark
            ? 'bg-neutral-900/80 border-white/15 text-neutral-300'
            : 'bg-white/90 border-black/15 text-neutral-700 shadow-sm'
        }`}
      >
        <b className="font-extrabold text-sky-500 text-xs">{current.n}</b>

        {/* Progress micro-bar */}
        <div
          className={`w-12 h-[2px] rounded-full overflow-hidden ${
            isDark ? 'bg-white/20' : 'bg-black/15'
          }`}
        >
          <div
            className="h-full bg-sky-500 transition-all duration-100 ease-out origin-left"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>

        <span className="font-bold tracking-wider">{current.name}</span>
      </div>
    </aside>
  );
};
