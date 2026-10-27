import React, { useState, useEffect } from 'react';
import { X, Mail, Copy, Check, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, isDark }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'ruzickajakub95@gmail.com';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-lg p-6 sm:p-8 rounded-3xl border shadow-2xl transition-all ${
          isDark
            ? 'bg-neutral-950 border-white/20 text-neutral-100'
            : 'bg-white border-black/15 text-neutral-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-inherit mb-5">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-sky-500" />
            <h2 id="contact-modal-title" className="text-xl font-bold tracking-tight">
              Get In Touch
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg border border-inherit hover:bg-neutral-500/10 transition-colors"
            aria-label="Close contact dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Email Direct Copy Box */}
        <div className="p-4 rounded-2xl border border-inherit bg-black/5 dark:bg-white/5 flex items-center justify-between gap-3 mb-6">
          <div className="flex flex-col truncate">
            <span className="text-[10px] font-mono-tech uppercase opacity-60">Direct Email</span>
            <span className="text-sm font-mono-tech font-bold truncate text-sky-500 select-all">
              {emailAddress}
            </span>
          </div>
          <button
            type="button"
            onClick={copyEmail}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center my-4 animate-in fade-in">
            <Check className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <h3 className="font-bold text-base mb-1">Message Sent!</h3>
            <p className="text-xs text-[var(--muted)]">
              Thank you for reaching out. Jakub will respond shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold mb-1">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-inherit bg-transparent text-sm focus:outline-sky-500"
                placeholder="Alex Morgan"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold mb-1">
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-inherit bg-transparent text-sm focus:outline-sky-500"
                placeholder="alex@domain.com"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold mb-1">
                Message / Project Inquiries
              </label>
              <textarea
                id="contact-message"
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-inherit bg-transparent text-sm focus:outline-sky-500 resize-none"
                placeholder="Let's build something extraordinary together..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}

        {/* Social Links */}
        <div className="pt-5 mt-5 border-t border-inherit flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--muted)] hover:text-sky-500 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--muted)] hover:text-sky-500 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="flex items-center gap-1.5 text-xs font-medium text-[var(--muted)] hover:text-sky-500 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Direct Email</span>
          </button>
        </div>
      </div>
    </div>
  );
};
