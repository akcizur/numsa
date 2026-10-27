import React from 'react';
import { ArrowUp, Terminal, ShieldCheck } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
  onOpenAccessibility: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  isDark,
  onOpenAccessibility,
  onOpenContact,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full border-t border-[var(--line)] py-12 px-5 sm:px-8 bg-[var(--bg)] transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[var(--muted)]">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2 font-mono-tech font-bold text-inherit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>RUZICKAJAKUB · DESIGN ENGINEERING</span>
          </div>
          <span className="text-[11px] opacity-75">
            Symmetric edge glass · smooth inertia · velocity parallax · living grain
          </span>
        </div>

        <div className="flex items-center gap-5 font-mono-tech text-[11px]">
          <button
            type="button"
            onClick={onOpenAccessibility}
            className="hover:text-sky-500 transition-colors flex items-center gap-1"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>A11y (WCAG AAA)</span>
          </button>

          <button
            type="button"
            onClick={onOpenContact}
            className="hover:text-sky-500 transition-colors"
          >
            Contact
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-full border border-inherit hover:bg-neutral-500/10 transition-colors"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
