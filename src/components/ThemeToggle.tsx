import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wider transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
        isDark
          ? 'bg-neutral-900/80 border-white/15 text-neutral-200 hover:border-white/30 hover:bg-neutral-800 focus-visible:outline-white'
          : 'bg-white/80 border-black/15 text-neutral-800 hover:border-black/30 hover:bg-neutral-100 focus-visible:outline-neutral-900 shadow-xs'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode (Shortcut: T)`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode (Shortcut: T)`}
    >
      <span className="relative flex items-center justify-center w-4 h-4">
        {isDark ? (
          <Sun className="w-3.5 h-3.5 text-amber-300 transition-transform duration-200 rotate-0 scale-100" />
        ) : (
          <Moon className="w-3.5 h-3.5 text-indigo-600 transition-transform duration-200 rotate-0 scale-100" />
        )}
      </span>
      <span className="font-mono-tech text-[11px] uppercase">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};
