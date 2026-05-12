'use client';

import type { ReactNode } from 'react';

function IconStation({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z" />
      <path d="M9.5 11h5" />
      <path d="M12 8.5v5" />
    </svg>
  );
}

function IconCharger({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  );
}

function IconTeam({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconRevenue({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

interface PricingTier {
  id: number;
  name: string;
  description: string;
  priceLabel: string;
  priceDetail: string;
  metrics: {
    stations: string;
    chargers: string;
    team: string;
  };
  revenueSharing: boolean;
  cta: string;
  ctaVariant: 'primary' | 'outline';
}

function MetricTile({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border-muted/90 bg-gradient-to-b from-background-card/80 to-background-card/40 px-3 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65)] transition-all duration-300 group-hover:border-white/18 group-hover:from-white/[0.08] group-hover:to-white/[0.03] group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] sm:px-4 sm:py-3.5">
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-40 blur-2xl transition-opacity duration-300 group-hover:opacity-70"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--primary-accent) 35%, transparent), transparent 70%)',
        }}
        aria-hidden
      />
      <div className="relative flex min-h-10 items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-tint-bg)] text-primary-accent transition-colors duration-300 group-hover:bg-primary-accent group-hover:text-primary-background">
          <span className="[&>svg]:h-5 [&>svg]:w-5">{icon}</span>
        </span>
        <p className="min-w-0 flex-1 text-[11px] font-semibold uppercase leading-tight tracking-[0.14em] text-text-translucent transition-colors group-hover:text-white/55 sm:text-xs">
          {label}
        </p>
        <p className="shrink-0 text-xl font-bold tabular-nums tracking-tight text-text-primary transition-colors group-hover:text-white sm:text-2xl">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const tiers: PricingTier[] = [
    {
      id: 1,
      name: 'Pilot',
      description: 'Validate AddisEV on a small footprint before you scale.',
      priceLabel: 'Custom',
      priceDetail: 'Based on station count and term',
      metrics: { stations: '1', chargers: '1', team: '1' },
      revenueSharing: false,
      cta: 'Talk to sales',
      ctaVariant: 'outline',
    },
    {
      id: 2,
      name: 'Scale',
      description: 'For growing networks that need predictability as you add chargers.',
      priceLabel: 'Volume pricing',
      priceDetail: 'Per-station costs can decrease as you expand',
      metrics: { stations: '10', chargers: '10', team: '11' },
      revenueSharing: false,
      cta: 'Request demo',
      ctaVariant: 'primary',
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'Dedicated options for large deployments and compliance needs.',
      priceLabel: 'Enterprise',
      priceDetail: 'SLA, security review, and custom terms',
      metrics: { stations: '100', chargers: '100', team: '101' },
      revenueSharing: true,
      cta: 'Contact us',
      ctaVariant: 'outline',
    },
  ];

  return (
    <section
      id="pricing"
      className="mt-[180px] w-full bg-background-main py-16 sm:mt-[200px] sm:py-18 md:mt-[220px] md:py-20 lg:mt-56.5 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-38"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
          <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 px-2 text-center sm:gap-5 sm:px-8">
            <h2 className="text-[28px] font-bold leading-[1.15] text-text-primary sm:text-[32px] md:text-[36px] lg:text-4xl">
              Pricing
            </h2>
            <p className="text-sm font-normal leading-relaxed text-text-translucent sm:text-[15px] md:text-base">
              Clear, flexible plans without revenue sharing or per-session fees. You keep best of
              your charging revenue—we align pricing to your network size and how you deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-6 lg:grid-cols-3 lg:gap-5">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="group relative flex flex-col rounded-2xl bg-background-main px-6 py-8 text-text-primary shadow-[0px_0px_60px_color-mix(in_srgb,var(--primary-background)_12%,transparent)] ring-2 ring-transparent transition-all duration-300 ease-out sm:px-8 sm:py-9 lg:hover:z-[1] lg:hover:scale-[1.02] lg:hover:bg-primary-background lg:hover:shadow-[0px_0px_60px_color-mix(in_srgb,var(--primary-background)_22%,transparent)] lg:hover:ring-primary-accent"
              >
                <div className=" flex flex-col gap-2">
                  {/* <p className="text-xs font-semibold uppercase tracking-wide text-primary-accent transition-colors lg:group-hover:text-[color-mix(in_srgb,var(--primary-accent)_88%,white)]">
                    {tier.name}
                  </p> */}
                 
                </div>

                <div className="mb-6 border-b border-dashed border-border-muted pb-6 transition-colors lg:group-hover:border-white/20">
                  <p className="text-3xl font-bold leading-tight text-text-primary transition-colors sm:text-4xl lg:group-hover:text-white">
                    {tier.priceLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-translucent transition-colors lg:group-hover:text-white/70">
                    {tier.priceDetail}
                  </p>
                  <p className="text-base font-normal leading-relaxed text-text-translucent transition-colors lg:group-hover:text-white/85">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-2 flex flex-1 flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-translucent transition-colors lg:group-hover:text-white/50">
                      Plan limits
                    </p>
                    <span className="h-px flex-1 bg-gradient-to-r from-border-muted to-transparent transition-opacity lg:group-hover:from-white/25" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <MetricTile icon={<IconStation />} label="Stations" value={tier.metrics.stations} />
                    <MetricTile icon={<IconCharger />} label="Chargers" value={tier.metrics.chargers} />
                    <MetricTile icon={<IconTeam />} label="Team seats" value={tier.metrics.team} />
                  </div>

                  <div
                    className={
                      tier.revenueSharing
                        ? 'relative overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--secondary-light)_42%,var(--border-muted))] bg-[color-mix(in_srgb,var(--secondary-light)_12%,var(--background-card))] px-4 py-3.5 transition-colors lg:group-hover:border-[color-mix(in_srgb,var(--secondary-light)_55%,transparent)] lg:group-hover:bg-[color-mix(in_srgb,var(--secondary-light)_18%,transparent)]'
                        : 'relative overflow-hidden rounded-2xl border border-border-muted bg-background-card/50 px-4 py-3.5 transition-colors lg:group-hover:border-white/15 lg:group-hover:bg-white/[0.06]'
                    }
                  >
                    <div className="flex gap-3">
                      <span
                        className={
                          tier.revenueSharing
                            ? 'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--secondary-light)_22%,white)] text-[var(--secondary-light)] transition-colors lg:group-hover:bg-[color-mix(in_srgb,var(--secondary-light)_35%,transparent)] lg:group-hover:text-white'
                            : 'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-tint-bg)] text-primary-accent transition-colors lg:group-hover:bg-primary-accent lg:group-hover:text-primary-background'
                        }
                      >
                        <IconRevenue className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-translucent transition-colors lg:group-hover:text-white/55">
                          Session revenue
                        </p>
                        <p className="mt-0.5 text-sm font-semibold leading-snug text-text-primary transition-colors lg:group-hover:text-white">
                          {tier.revenueSharing
                            ? 'Revenue sharing on sessions'
                            : 'No revenue sharing '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <button
                  type="button"
                  className={
                    tier.ctaVariant === 'primary'
                      ? 'mt-auto w-full rounded-2xl border-0 bg-button-bg-primary px-7 py-3.5 text-sm font-semibold text-button-text-primary transition-colors hover:opacity-90 group-hover:bg-primary-accent group-hover:text-primary-background group-hover:hover:bg-[var(--primary-accent-hover)]'
                      : 'mt-auto w-full rounded-2xl border-2 border-text-primary bg-transparent px-7 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:bg-background-card group-hover:border-white/40 group-hover:text-white group-hover:hover:bg-white/10'
                  }
                >
                  {tier.cta}
                </button> */}
              </div>
            ))}
          </div>

          <p className="mx-auto max-w-[640px] text-center text-xs text-text-translucent sm:text-sm">
            Final pricing depends on deployment model, integrations, and support level. We will
            share a tailored quote after a short discovery call.
          </p>
        </div>
      </div>
    </section>
  );
}
