'use client';

interface PricingTier {
  id: number;
  name: string;
  description: string;
  priceLabel: string;
  priceDetail: string;
  features: string[];
  cta: string;
  ctaVariant: 'primary' | 'outline';
}

export default function PricingSection() {
  const tiers: PricingTier[] = [
    {
      id: 1,
      name: 'Pilot',
      description: 'Validate AddisEV on a small footprint before you scale.',
      priceLabel: 'Custom',
      priceDetail: 'Based on station count and term',
      features: [
        'Core CSMS & OCPP connectivity',
        'Operator dashboards & alerts',
        'Email support',
        'No revenue sharing on sessions',
      ],
      cta: 'Talk to sales',
      ctaVariant: 'outline',
    },
    {
      id: 2,
      name: 'Scale',
      description: 'For growing networks that need predictability as you add chargers.',
      priceLabel: 'Volume pricing',
      priceDetail: 'Per-station costs can decrease as you expand',
      features: [
        'Everything in Pilot',
        'Advanced reporting & APIs',
        'Priority support options',
        'Integration & onboarding assistance',
      ],
      cta: 'Request demo',
      ctaVariant: 'primary',
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'Dedicated options for large deployments and compliance needs.',
      priceLabel: 'Enterprise',
      priceDetail: 'SLA, security review, and custom terms',
      features: [
        'Everything in Scale',
        'Dedicated success & escalation paths',
        'Custom integrations & environments',
        'Optional professional services',
      ],
      cta: 'Contact us',
      ctaVariant: 'outline',
    },
  ];

  return (
    <section
      id="pricing"
      className="mt-[180px] w-full bg-background-main py-16 sm:mt-[200px] sm:py-18 md:mt-[220px] md:py-20 lg:mt-56.5 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-38"
    >
      <div className="w-full max-w-[1120px] mx-auto">
        <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
          <div className="flex flex-col gap-4 sm:gap-5 items-center text-center px-2 sm:px-8 max-w-[720px] mx-auto">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[1.15] text-text-primary">
              Pricing
            </h2>
            <p className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed text-text-translucent">
              Clear, flexible plans without revenue sharing or per-session fees. You keep 100% of
              your charging revenue—we align pricing to your network size and how you deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-5 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="group relative flex flex-col rounded-lg bg-background-main px-7 py-8 text-text-primary shadow-[0px_0px_60px_color-mix(in_srgb,var(--primary-background)_12%,transparent)] ring-2 ring-transparent transition-all duration-300 ease-out sm:px-8 sm:py-9 hover:z-[1] hover:bg-primary-background hover:shadow-[0px_0px_60px_color-mix(in_srgb,var(--primary-background)_22%,transparent)] hover:ring-primary-accent lg:hover:scale-[1.02]"
              >
                <div className="mb-6 flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-accent">
                    {tier.name}
                  </p>
                  <p className="text-base font-normal leading-relaxed text-text-translucent transition-colors group-hover:text-white/85">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6 border-b border-dashed border-border-muted pb-6 transition-colors group-hover:border-white/20">
                  <p className="text-3xl font-bold leading-tight text-text-primary transition-colors group-hover:text-white sm:text-4xl">
                    {tier.priceLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-translucent transition-colors group-hover:text-white/70">
                    {tier.priceDetail}
                  </p>
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-snug sm:text-[15px]">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-tint-bg)] text-xs font-bold text-primary-accent transition-colors group-hover:bg-primary-accent group-hover:text-primary-background"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span className="text-text-translucent transition-colors group-hover:text-white/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={
                    tier.ctaVariant === 'primary'
                      ? 'mt-auto w-full rounded-2xl border-0 bg-button-bg-primary px-7 py-3.5 text-sm font-semibold text-button-text-primary transition-colors hover:opacity-90 group-hover:bg-primary-accent group-hover:text-primary-background group-hover:hover:bg-[var(--primary-accent-hover)]'
                      : 'mt-auto w-full rounded-2xl border-2 border-text-primary bg-transparent px-7 py-3.5 text-sm font-semibold text-text-primary transition-colors hover:bg-background-card group-hover:border-white/40 group-hover:text-white group-hover:hover:bg-white/10'
                  }
                >
                  {tier.cta}
                </button>
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
