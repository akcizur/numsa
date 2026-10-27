import React, { useEffect } from 'react';
import { X, Sliders, Contrast, Eye, Sparkles, Move } from 'lucide-react';

interface AccessibilitySettings {
  isDark: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  enableGrain: boolean;
  enableEdgeBlur: boolean;
  grainIntensity: number;
}

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AccessibilitySettings;
  updateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
  isOpen,
  onClose,
  settings,
  updateSettings,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="accessibility-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-md p-6 rounded-2xl border shadow-2xl transition-all duration-200 ${
          settings.isDark
            ? 'bg-neutral-950 border-white/15 text-neutral-100'
            : 'bg-white border-black/10 text-neutral-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-inherit">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-sky-500" />
            <h2 id="accessibility-title" className="text-base font-bold tracking-tight">
              Accessibility & Display Preferences
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={`p-1.5 rounded-lg border transition-colors ${
              settings.isDark
                ? 'border-white/10 hover:bg-neutral-900 text-neutral-400 hover:text-white'
                : 'border-black/10 hover:bg-neutral-100 text-neutral-600 hover:text-black'
            }`}
            aria-label="Close preferences dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm">
          {/* Theme */}
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="font-semibold flex items-center gap-2">
                <Contrast className="w-4 h-4 text-amber-500" />
                Color Theme
              </div>
              <div className={`text-xs mt-0.5 ${settings.isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Switch between cinematic dark mode and high-readability light mode
              </div>
            </div>
            <button
              type="button"
              onClick={() => updateSettings({ isDark: !settings.isDark })}
              className={`px-3 py-1.5 rounded-lg border font-mono-tech text-xs font-semibold ${
                settings.isDark
                  ? 'bg-neutral-900 border-white/20 text-neutral-200 hover:bg-neutral-800'
                  : 'bg-neutral-100 border-black/20 text-neutral-800 hover:bg-neutral-200'
              }`}
            >
              {settings.isDark ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="font-semibold flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-500" />
                High Contrast (WCAG AAA)
              </div>
              <div className={`text-xs mt-0.5 ${settings.isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Sharper borders and elevated text contrast
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.highContrast}
              onClick={() => updateSettings({ highContrast: !settings.highContrast })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                settings.highContrast ? 'bg-sky-600' : settings.isDark ? 'bg-neutral-800' : 'bg-neutral-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="font-semibold flex items-center gap-2">
                <Move className="w-4 h-4 text-purple-500" />
                Reduce Motion
              </div>
              <div className={`text-xs mt-0.5 ${settings.isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Disable inertial drift and viewport jitter
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.reducedMotion}
              onClick={() => updateSettings({ reducedMotion: !settings.reducedMotion })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                settings.reducedMotion ? 'bg-sky-600' : settings.isDark ? 'bg-neutral-800' : 'bg-neutral-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.reducedMotion ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Living Film Grain */}
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                Living 35mm Grain (24 FPS)
              </div>
              <div className={`text-xs mt-0.5 ${settings.isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Photographic emulsion canvas overlay
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.enableGrain}
              onClick={() => updateSettings({ enableGrain: !settings.enableGrain })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                settings.enableGrain ? 'bg-sky-600' : settings.isDark ? 'bg-neutral-800' : 'bg-neutral-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.enableGrain ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Symmetric Edge Blur */}
          <div className="flex items-center justify-between py-2">
            <div>
              <div className="font-semibold">Symmetric Edge Blur</div>
              <div className={`text-xs mt-0.5 ${settings.isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Hardware-accelerated top & bottom glass overlays
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings.enableEdgeBlur}
              onClick={() => updateSettings({ enableEdgeBlur: !settings.enableEdgeBlur })}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                settings.enableEdgeBlur ? 'bg-sky-600' : settings.isDark ? 'bg-neutral-800' : 'bg-neutral-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  settings.enableEdgeBlur ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-inherit flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white shadow-xs transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
