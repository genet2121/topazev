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
      className="w-full bg-[#ffffff] py-16 sm:py-18 md:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-38 mt-[180px] sm:mt-[200px] md:mt-[220px] lg:mt-56.5"
    >
      <div className="w-full max-w-[1120px] mx-auto">
        <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
          <div className="flex flex-col gap-4 sm:gap-5 items-center text-center px-2 sm:px-8 max-w-[720px] mx-auto">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[1.15] text-[#020202]">
              Pricing
            </h2>
            <p className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed text-[#202024cc]">
              Clear, flexible plans without revenue sharing or per-session fees. You keep 100% of
              your charging revenue—we align pricing to your network size and how you deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-5 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="group relative flex flex-col rounded-lg bg-[#ffffff] px-7 py-8 text-[#020202] shadow-[0px_0px_60px_#00000019] ring-2 ring-transparent transition-all duration-300 ease-out sm:px-8 sm:py-9 hover:z-[1] hover:bg-[#02131b] hover:shadow-[0px_0px_60px_#00000029] hover:ring-[#00b4f5] lg:hover:scale-[1.02]"
              >
                <div className="mb-6 flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#00b4f5]">
                    {tier.name}
                  </p>
                  <p className="text-base font-normal leading-relaxed text-[#202024b3] transition-colors group-hover:text-white/85">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6 border-b border-dashed border-[#f0f0f0] pb-6 transition-colors group-hover:border-white/20">
                  <p className="text-3xl font-bold leading-tight text-[#020202] transition-colors group-hover:text-white sm:text-4xl">
                    {tier.priceLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#20202499] transition-colors group-hover:text-white/70">
                    {tier.priceDetail}
                  </p>
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-snug sm:text-[15px]">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f9fe] text-xs font-bold text-[#00b4f5] transition-colors group-hover:bg-[#00b4f5] group-hover:text-[#02131b]"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span className="text-[#202024cc] transition-colors group-hover:text-white/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={
                    tier.ctaVariant === 'primary'
                      ? 'mt-auto w-full rounded-2xl border-0 bg-[#000000] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#333333] group-hover:bg-[#00b4f5] group-hover:text-[#02131b] group-hover:hover:bg-[#33c5f7]'
                      : 'mt-auto w-full rounded-2xl border-2 border-[#020202] bg-transparent px-7 py-3.5 text-sm font-semibold text-[#020202] transition-colors hover:bg-[#f5f5f5] group-hover:border-white/40 group-hover:text-white group-hover:hover:bg-white/10'
                  }
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-[#20202480] max-w-[640px] mx-auto">
            Final pricing depends on deployment model, integrations, and support level. We will
            share a tailored quote after a short discovery call.
          </p>
        </div>
      </div>
    </section>
  );
}
