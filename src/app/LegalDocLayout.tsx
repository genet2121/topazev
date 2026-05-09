import Link from 'next/link';
import type { ReactNode } from 'react';

type LegalDocLayoutProps = {
  title: string;
  subtitle?: string;
  breadcrumbCurrent: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalDocLayout({
  title,
  subtitle,
  breadcrumbCurrent,
  lastUpdated,
  children,
}: LegalDocLayoutProps) {
  return (
    <div className="min-h-[calc(100vh-5rem)] w-full bg-gradient-to-b from-background-card/80 via-background-main to-background-main pb-20 pt-8 sm:pt-12">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 md:px-8 lg:px-14">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-text-secondary">
          <Link
            href="/"
            className="font-medium text-primary-accent transition-colors hover:text-[var(--primary-accent-hover)]"
          >
            Home
          </Link>
          <span aria-hidden className="text-text-muted">
            /
          </span>
          <span className="text-text-primary">{breadcrumbCurrent}</span>
        </nav>

        <header className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-accent">Legal</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-text-primary sm:text-4xl">{title}</h1>
          {subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-text-secondary">{subtitle}</p>
          ) : null}
          <p className="mt-4 text-sm text-text-muted">Last updated: {lastUpdated}</p>
        </header>

        <article className="legal-prose max-w-3xl space-y-8 text-base leading-relaxed">
          {children}
        </article>

        <p className="mt-12 max-w-3xl rounded-2xl border border-border-muted bg-background-card/50 p-5 text-sm text-text-secondary">
          Questions? Email{' '}
          <a
            href="mailto:sales@addisev.com"
            className="font-medium text-primary-accent underline underline-offset-2 hover:text-[var(--primary-accent-hover)]"
          >
            sales@addisev.com
          </a>
          {' '}
          or use our{' '}
          <Link
            href="/contact"
            className="font-medium text-primary-accent underline underline-offset-2 hover:text-[var(--primary-accent-hover)]"
          >
            contact form
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
