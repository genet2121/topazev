'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  operatesNetwork: 'yes' | 'no' | '';
  chargersNext12Months: string;
  consent: boolean;
};

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

const fieldClass =
  'h-12 w-full rounded-2xl border border-border-muted bg-background-card/40 px-4 text-sm text-text-primary shadow-sm outline-none transition-all placeholder:text-text-muted focus:border-primary-accent focus:bg-background-main focus:ring-4 focus:ring-[color-mix(in_srgb,var(--primary-accent)_14%,transparent)]';

const labelClass = 'text-sm font-semibold text-text-primary';

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinejoin="round" />
      <path d="m22 6-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SectionTitle({ step, children }: { step: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-tint-bg)] text-xs font-bold text-primary-accent">
        {step}
      </span>
      <h2 className="text-base font-bold text-text-primary">{children}</h2>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    operatesNetwork: '',
    chargersNext12Months: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = `AddisEV — Get in touch (${form.company || 'No company'})`;
    const body = [
      `Name: ${form.name || '-'}`,
      `Email: ${form.email || '-'}`,
      `Phone: ${form.phone || '-'}`,
      `Company: ${form.company || '-'}`,
      `Operate charging network: ${form.operatesNetwork || '-'}`,
      `Chargers (next 12 months): ${form.chargersNext12Months || '-'}`,
      `Consent: ${form.consent ? 'Yes' : 'No'}`,
      '',
      form.message || '-',
    ].join('\n');

    return `mailto:sales@addisev.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [
    form.chargersNext12Months,
    form.company,
    form.consent,
    form.email,
    form.message,
    form.name,
    form.operatesNetwork,
    form.phone,
  ]);

  const canSubmit =
    form.name.trim().length >= 2 &&
    isEmail(form.email) &&
    form.message.trim().length >= 10 &&
    (form.operatesNetwork === 'yes' || form.operatesNetwork === 'no') &&
    form.chargersNext12Months.trim().length > 0 &&
    form.consent;

  const messageRemaining = Math.max(0, 10 - form.message.trim().length);

  return (
    <div className="min-h-[calc(100vh-5rem)] w-full bg-gradient-to-b from-background-card/80 via-background-main to-background-main pb-16 pt-8 sm:pt-12">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 md:px-8 lg:px-14">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-text-secondary">
          <Link href="/" className="font-medium text-primary-accent transition-colors hover:text-[var(--primary-accent-hover)]">
            Home
          </Link>
          <span aria-hidden className="text-text-muted">
            /
          </span>
          <span className="text-text-primary">Contact</span>
        </nav>

        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-accent">We’re here to help</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-[2.5rem]">
            Let’s talk about your EV charging goals
          </h1>
          <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-[17px]">
            Share a few details and we’ll get back with clear next steps—whether you’re piloting a
            small site or scaling a national network.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Form column */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-border-muted bg-background-main shadow-[0_24px_80px_-24px_color-mix(in_srgb,var(--primary-background)_28%,transparent)]">
              <div className="addisev-gradient-cta px-6 py-5 sm:px-8 sm:py-6">
                <p className="text-sm font-medium text-white">
                 Fill in the form below to get in touch with us.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center py-4 text-center sm:py-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-tint-bg)] text-primary-accent">
                      <IconCheck className="h-8 w-8" />
                    </div>
                    <p className="mt-6 text-xl font-bold text-text-primary">You’re all set</p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-text-secondary">
                      Open your email app to send the message—we’ve filled in everything for you.
                      You can still edit the email before sending.
                    </p>
                    <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
                      <a
                        href={mailtoHref}
                        className="inline-flex flex-1 items-center justify-center rounded-2xl bg-primary-accent px-6 py-3.5 text-sm font-semibold text-text-inverse shadow-sm transition-colors hover:bg-[var(--primary-accent-hover)]"
                      >
                        Open in email
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="inline-flex flex-1 items-center justify-center rounded-2xl border-2 border-border-muted bg-transparent px-6 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:bg-background-card"
                      >
                        Change answers
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    className="flex flex-col gap-10"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!canSubmit) return;
                      setSubmitted(true);
                    }}
                    noValidate
                  >
                    <div>
                      <SectionTitle step="1">Your details</SectionTitle>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="contact-name" className={labelClass}>
                            Full name <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="contact-name"
                            value={form.name}
                            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                            className={fieldClass}
                            placeholder="e.g. Sara Mekonnen"
                            autoComplete="name"
                            aria-required
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="contact-email" className={labelClass}>
                            Work email <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                            className={fieldClass}
                            placeholder="you@company.com"
                            autoComplete="email"
                            aria-required
                          />
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="contact-phone" className={labelClass}>
                            Phone <span className="font-normal text-text-secondary">(optional)</span>
                          </label>
                          <input
                            id="contact-phone"
                            value={form.phone}
                            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                            className={fieldClass}
                            placeholder="+251 … or +1 …"
                            autoComplete="tel"
                            inputMode="tel"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="contact-company" className={labelClass}>
                            Company <span className="font-normal text-text-secondary">(optional)</span>
                          </label>
                          <input
                            id="contact-company"
                            value={form.company}
                            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                            className={fieldClass}
                            placeholder="Organization name"
                            autoComplete="organization"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <SectionTitle step="2">About your network</SectionTitle>
                      <fieldset className="rounded-2xl border border-border-muted bg-background-card/30 p-5 sm:p-6">
                        <legend className={`${labelClass} px-1`}>
                          Do you currently operate a charging network?{' '}
                          <span className="text-red-600">*</span>
                        </legend>
                        <p className="mt-1 text-xs text-text-secondary">Tap one option — it helps us tailor our reply.</p>
                        <div className="mt-4 grid grid-cols-2 gap-3 sm:max-w-md">
                          <button
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, operatesNetwork: 'yes' }))}
                            className={`rounded-2xl border-2 py-3.5 text-sm font-semibold transition-all ${
                              form.operatesNetwork === 'yes'
                                ? 'border-primary-accent bg-[var(--accent-tint-bg)] text-primary-background shadow-sm'
                                : 'border-border-muted bg-background-main text-text-primary hover:border-primary-accent/40'
                            }`}
                            aria-pressed={form.operatesNetwork === 'yes'}
                          >
                            Yes
                          </button>
                          <button
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, operatesNetwork: 'no' }))}
                            className={`rounded-2xl border-2 py-3.5 text-sm font-semibold transition-all ${
                              form.operatesNetwork === 'no'
                                ? 'border-primary-accent bg-[var(--accent-tint-bg)] text-primary-background shadow-sm'
                                : 'border-border-muted bg-background-main text-text-primary hover:border-primary-accent/40'
                            }`}
                            aria-pressed={form.operatesNetwork === 'no'}
                          >
                            No
                          </button>
                        </div>
                      </fieldset>

                      <div className="mt-4 flex flex-col gap-2">
                        <label htmlFor="contact-chargers" className={labelClass}>
                          Chargers in the next 12 months <span className="text-red-600">*</span>
                        </label>
                        <p className="text-xs text-text-secondary">Rough estimate is fine.</p>
                        <div className="relative">
                          <select
                            id="contact-chargers"
                            value={form.chargersNext12Months}
                            onChange={(e) =>
                              setForm((f) => ({ ...f, chargersNext12Months: e.target.value }))
                            }
                            className={`${fieldClass} appearance-none pr-10`}
                            required
                            aria-required
                          >
                            <option value="" disabled>
                              Choose a range
                            </option>
                            <option value="1–10">1–10</option>
                            <option value="11–50">11–50</option>
                            <option value="51–200">51–200</option>
                            <option value="201–500">201–500</option>
                            <option value="500+">500+</option>
                          </select>
                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
                            ▾
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <SectionTitle step="3">How can we help?</SectionTitle>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="contact-message" className={labelClass}>
                          Message <span className="text-red-600">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          value={form.message}
                          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                          className={`${fieldClass} min-h-[150px] resize-y py-3 leading-relaxed`}
                          placeholder="Tell us about timelines, OCPP version, integrations, or anything else we should know."
                          aria-required
                        />
                        <p className="text-xs text-text-secondary">
                          {form.message.trim().length >= 10 ? (
                            <span className="text-secondary-light">Looks good — you can send when everything above is complete.</span>
                          ) : (
                            <span>
                              Add at least <strong className="text-text-primary">{messageRemaining}</strong> more{' '}
                              {messageRemaining === 1 ? 'character' : 'characters'}.
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border-muted bg-background-card/40 p-5 sm:p-6">
                      <label className="flex cursor-pointer gap-4">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                          className="mt-1 h-5 w-5 shrink-0 rounded-md border-border-muted text-primary-accent accent-[var(--primary-accent)]"
                          required
                        />
                        <span className="text-sm leading-relaxed text-text-secondary">
                          Yes, I agree to the{' '}
                          <Link href="/privacy" className="font-semibold text-primary-accent underline-offset-2 hover:underline">
                            data protection declaration
                          </Link>{' '}
                          and agree that the data I have provided may be collected and stored
                          electronically. My data will only be used to process and respond to my
                          request. By continuing, I agree to this processing.{' '}
                          <span className="text-red-600">*</span>
                        </span>
                      </label>
                    </div>

                    <div className="flex flex-col gap-4 border-t border-border-muted pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-text-secondary">
                        Prefer to reach out directly?{' '}
                        <a className="font-semibold text-primary-accent hover:underline" href="mailto:sales@addisev.com">
                          sales@addisev.com
                        </a>
                      </p>
                      <button
                        type="submit"
                        // disabled={!canSubmit}
                        className="inline-flex w-full items-center justify-center rounded-2xl bg-background-dark px-8 py-3.5 text-sm font-semibold text-text-inverse shadow-md transition-all hover:bg-[var(--primary-accent-hover)] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto sm:min-w-[200px]"
                      >
                        send
                      </button>
                    </div>
                    {!canSubmit ? (
                      <p className="-mt-2 text-center text-xs text-text-muted sm:text-left">
                        Complete the fields marked with * and the consent box to continue.
                      </p>
                    ) : null}
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="addisev-gradient-panel overflow-hidden rounded-3xl border border-white/10 p-6 text-text-inverse shadow-xl sm:p-8">
                <div className="flex items-start gap-4">
                  <Image
                    src="/images/AddisEV-LOGO-TP.png"
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-xl bg-white/10 p-1"
                  />
                  <div>
                    <p className="text-lg font-bold leading-snug">AddisEV team</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/80">
                      We typically reply within <strong className="text-white">1–2 business days</strong>.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-white/85">
                  Not a fan of forms? Reach us directly — we’ll route you to the right person.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="mailto:sales@addisev.com"
                    className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 transition-colors hover:bg-white/15"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                      <IconMail className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium uppercase tracking-wide text-white/60">Email</p>
                      <p className="truncate text-sm font-semibold text-white group-hover:underline">
                        sales@addisev.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+12013915675"
                    className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-4 transition-colors hover:bg-white/15"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                      <IconPhone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-white/60">Phone</p>
                      <p className="text-sm font-semibold text-white">+251 943 337 884</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border-muted bg-background-card/50 p-5 sm:p-6">
                <p className="text-sm font-semibold text-text-primary">What happens next?</p>
                <ol className="mt-4 space-y-3 text-sm text-text-secondary">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-tint-bg)] text-xs font-bold text-primary-accent">
                      1
                    </span>
                    <span>We review your note and may ask a quick follow-up.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-tint-bg)] text-xs font-bold text-primary-accent">
                      2
                    </span>
                    <span>You’ll get a tailored reply — demo, pricing context, or a call.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-tint-bg)] text-xs font-bold text-primary-accent">
                      3
                    </span>
                    <span>No obligation — you stay in control of next steps.</span>
                  </li>
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
