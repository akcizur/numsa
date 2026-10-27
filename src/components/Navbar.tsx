import React, { useState } from 'react';
import { Sliders, Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenAccessibility: () => void;
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenAccessibility,
  onOpenContact,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#intro', label: 'INTRO', id: 'intro' },
    { href: '#blur', label: '01 BLUR', id: 'blur' },
    { href: '#gradient', label: '02 GRADIENT', id: 'gradient' },
    { href: '#fade', label: '03 FADE', id: 'fade' },
    { href: '#stack', label: 'STACK', id: 'stack' },
    { href: '#works', label: 'WORKS', id: 'works' },
    { href: '#about', label: 'ABOUT', id: 'about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      history.pushState(null, '', href);
    }
  };

  return (
    <>
      {/* Accessible skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-600 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 inset-x-0 h-[var(--nav-height)] z-40 flex items-center transition-all duration-200 border-b ${
          isDark
            ? 'bg-neutral-950/80 border-white/10 text-neutral-100 backdrop-blur-md'
            : 'bg-white/85 border-black/10 text-neutral-900 backdrop-blur-md'
        }`}
      >
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#intro"
              onClick={(e) => handleLinkClick(e, '#intro')}
              className="group flex items-center gap-2 text-sm font-extrabold tracking-widest uppercase transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 rounded-sm"
            >
              <span className="w-2 h-2 rounded-full bg-sky-500 group-hover:scale-125 transition-transform" />
              <span>RUZICKAJAKUB</span>
            </a>
            <span
              className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono-tech border ${
                isDark
                  ? 'bg-neutral-900/60 border-white/10 text-neutral-400'
                  : 'bg-neutral-100 border-black/10 text-neutral-600'
              }`}
            >
              <Terminal className="w-3 h-3 text-sky-500" />
              Design Engineer
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[12px] font-semibold tracking-wider" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition-colors py-1 relative hover:text-sky-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 rounded-sm ${
                    isActive
                      ? isDark ? 'text-white font-bold' : 'text-black font-bold'
                      : isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-[2px] bg-sky-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Controls: Theme Toggle, Accessibility button, Contact */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            <button
              type="button"
              onClick={onOpenAccessibility}
              className={`p-2 rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                isDark
                  ? 'border-white/15 bg-neutral-900/70 text-neutral-300 hover:text-white hover:border-white/30'
                  : 'border-black/15 bg-neutral-100 text-neutral-700 hover:text-black hover:border-black/30'
              }`}
              aria-label="Open accessibility and motion preferences"
              title="Accessibility & display preferences"
            >
              <Sliders className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold tracking-wider transition-all shadow-xs hover:shadow-sky-500/20"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'border-white/15 bg-neutral-900 text-neutral-300'
                  : 'border-black/15 bg-neutral-100 text-neutral-700'
              }`}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with backdrop */}
        {mobileMenuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 top-[var(--nav-height)] bg-black/50 z-30 animate-in fade-in"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              className={`lg:hidden absolute top-[var(--nav-height)] inset-x-0 border-b p-5 transition-all shadow-2xl z-40 ${
                isDark
                  ? 'bg-neutral-950 border-white/15 text-neutral-100'
                  : 'bg-white border-black/15 text-neutral-900'
              }`}
            >
              <div className="flex flex-col gap-2.5 font-semibold text-sm">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`p-2.5 rounded-xl transition-colors ${
                      activeSection === link.id
                        ? 'bg-sky-500/10 text-sky-500 font-bold'
                        : isDark
                        ? 'text-neutral-300 hover:bg-neutral-900'
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-inherit flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenContact();
                    }}
                    className="w-full py-3 text-center rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs tracking-wider uppercase transition-colors"
                  >
                    Get in touch
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};
