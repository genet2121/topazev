'use client';
import { useEffect, useMemo, useState } from 'react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = `AddisEV — Get in touch (${form.company || 'No company'})`;
    const body = [
      `Name: ${form.name || '-'}`,
      `Email: ${form.email || '-'}`,
      `Company: ${form.company || '-'}`,
      '',
      form.message || '-',
    ].join('\n');

    return `mailto:sales@topazev.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form.company, form.email, form.message, form.name]);

  const canSubmit =
    form.name.trim().length >= 2 &&
    isEmail(form.email) &&
    form.message.trim().length >= 10;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, open]);

  useEffect(() => {
    if (open) return;
    setSubmitted(false);
    setForm({ name: '', email: '', company: '', message: '' });
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-background-overlay px-0 sm:items-center sm:px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Get in touch"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full overflow-hidden rounded-t-3xl bg-background-main px-6 pb-8 pt-8 shadow-[0_30px_80px_-20px_color-mix(in_srgb,var(--primary-background)_40%,transparent)] sm:max-w-[640px] sm:rounded-3xl sm:px-10 sm:pb-10 sm:pt-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.9]"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 75% 55% at 20% 0%, color-mix(in srgb, var(--primary-accent) 18%, transparent), transparent 55%), radial-gradient(ellipse 65% 55% at 90% 40%, color-mix(in srgb, var(--secondary-light) 12%, transparent), transparent 60%)',
          }}
        />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-accent">
                Contact
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-text-secondary">
                Tell us about your network and what you want to build. We’ll reply with next steps
                and a suggested integration path.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-muted bg-background-main text-text-primary transition-colors hover:bg-background-card"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-border-muted bg-background-main p-6">
              <p className="text-lg font-semibold text-text-primary">Thanks — message ready.</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Click below to open your email client with everything pre-filled.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center rounded-xl bg-primary-accent px-5 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-[var(--primary-accent-hover)]"
                >
                  Open email
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center rounded-xl border border-primary-accent bg-transparent px-5 py-3 text-sm font-semibold text-primary-accent transition-colors hover:bg-[var(--accent-tint-bg)]"
                >
                  Edit message
                </button>
              </div>
            </div>
          ) : (
            <form
              className="mt-8 grid grid-cols-1 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (!canSubmit) return;
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-text-primary">Full name</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="h-11 rounded-xl border border-border-muted bg-background-main px-4 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary-accent"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-text-primary">Email</span>
                  <input
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="h-11 rounded-xl border border-border-muted bg-background-main px-4 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary-accent"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-text-primary">Company (optional)</span>
                <input
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  className="h-11 rounded-xl border border-border-muted bg-background-main px-4 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary-accent"
                  placeholder="Company name"
                  autoComplete="organization"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-text-primary">What do you need?</span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="min-h-[120px] resize-none rounded-xl border border-border-muted bg-background-main px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary-accent"
                  placeholder="Stations count, OCPP version, integrations, timeline…"
                  required
                />
              </label>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-text-secondary">
                  Prefer email?{' '}
                  <a className="text-primary-accent underline" href="mailto:sales@topazev.com">
                    sales@topazev.com
                  </a>
                </p>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="inline-flex items-center justify-center rounded-xl bg-primary-accent px-6 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-[var(--primary-accent-hover)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

