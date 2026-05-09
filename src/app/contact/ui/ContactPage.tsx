'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';

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

    return `mailto:sales@topazev.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form.company, form.email, form.message, form.name]);

  const canSubmit =
    form.name.trim().length >= 2 &&
    isEmail(form.email) &&
    form.message.trim().length >= 10 &&
    (form.operatesNetwork === 'yes' || form.operatesNetwork === 'no') &&
    form.chargersNext12Months.trim().length > 0 &&
    form.consent;

  return (
    <section className="w-full bg-background-main px-4 pb-20 pt-10 sm:px-6 md:px-8 lg:px-14">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="relative overflow-hidden rounded-3xl border border-border-muted bg-background-main p-6 shadow-[0_30px_90px_-28px_color-mix(in_srgb,var(--primary-background)_30%,transparent)] sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.9]"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 75% 55% at 15% 0%, color-mix(in srgb, var(--primary-accent) 16%, transparent), transparent 55%), radial-gradient(ellipse 65% 55% at 95% 40%, color-mix(in srgb, var(--secondary-light) 10%, transparent), transparent 60%)',
            }}
          />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-accent">
                Contact
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
                Get in touch
              </h1>
              <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-text-secondary sm:text-[15px]">
                Tell us about your network and what you want to build. We’ll reply with next steps
                and a suggested integration path.
              </p>

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
                    <span className="text-xs font-semibold text-text-primary">Phone number</span>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="h-11 rounded-xl border border-border-muted bg-background-main px-4 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary-accent"
                      placeholder="+251 9xx xxx xxx"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-text-primary">
                      Company (optional)
                    </span>
                    <input
                      value={form.company}
                      onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                      className="h-11 rounded-xl border border-border-muted bg-background-main px-4 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary-accent"
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </label>

                  <fieldset className="rounded-2xl border border-border-muted bg-background-main/70 p-5">
                    <legend className="px-1 text-sm font-semibold text-text-primary">
                      Do you currently operate a charging network?
                    </legend>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, operatesNetwork: 'yes' }))}
                        className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                          form.operatesNetwork === 'yes'
                            ? 'bg-primary-accent text-text-inverse'
                            : 'border border-border-muted bg-background-main text-text-primary hover:bg-background-card'
                        }`}
                        aria-pressed={form.operatesNetwork === 'yes'}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, operatesNetwork: 'no' }))}
                        className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                          form.operatesNetwork === 'no'
                            ? 'bg-primary-accent text-text-inverse'
                            : 'border border-border-muted bg-background-main text-text-primary hover:bg-background-card'
                        }`}
                        aria-pressed={form.operatesNetwork === 'no'}
                      >
                        No
                      </button>
                    </div>
                  </fieldset>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-text-primary">
                      How many chargers are you planning to manage in the next 12 months?
                    </span>
                    <select
                      value={form.chargersNext12Months}
                      onChange={(e) => setForm((f) => ({ ...f, chargersNext12Months: e.target.value }))}
                      className="h-11 rounded-xl border border-border-muted bg-background-main px-4 text-sm text-text-primary outline-none transition-colors focus:border-primary-accent"
                      required
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option value="1–10">1–10</option>
                      <option value="11–50">11–50</option>
                      <option value="51–200">51–200</option>
                      <option value="201–500">201–500</option>
                      <option value="500+">500+</option>
                    </select>
                  </label>

               

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-text-primary">How can we help you?</span>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="min-h-[140px] resize-none rounded-xl border border-border-muted bg-background-main px-4 py-3 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary-accent"
                      placeholder="Stations count, OCPP version, integrations, timeline…"
                      required
                    />
                  </label>

                  <label className="flex gap-3 rounded-2xl border border-border-muted bg-background-main/70 p-5">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                      className="mt-1 h-4 w-4 accent-[var(--primary-accent)]"
                      required
                    />
                    <span className="text-xs leading-relaxed text-text-secondary">
                      Yes, I agree of the data protection declaration and agree that the data I have
                      provided may be collected and stored electronically. My data will only be used
                      for the purpose of processing and responding to my request. By sending the
                      contact form, I agree to the processing.
                    </span>
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
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-2xl border border-border-muted bg-background-main/70 p-6 backdrop-blur sm:p-7">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/AddisEV-LOGO-TP.png"
                    alt="AddisEV logo"
                    width={44}
                    height={44}
                    className="h-auto w-11"
                  />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Fast response</p>
                    <p className="text-xs text-text-secondary">
                      We usually reply within 1–2 business days.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="mailto:sales@topazev.com"
                    className="inline-flex items-center justify-center rounded-xl border border-border-muted bg-background-main px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-background-card"
                  >
                    Email: sales@topazev.com
                  </a>
                  <a
                    href="tel:+12013915675"
                    className="inline-flex items-center justify-center rounded-xl border border-border-muted bg-background-main px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-background-card"
                  >
                    Call: +1 (201) 391-5675
                  </a>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-text-secondary">
                  If forms aren’t your thing, feel free to write us directly—we’ll route you to the
                  right person.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

