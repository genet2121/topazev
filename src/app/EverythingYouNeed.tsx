import type { ReactNode } from 'react';

function IconDashboard({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  );
}

function IconPulse({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
      <path d="M22 12h-4l-3-9-4 18-3-9H2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconApi({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
      <path d="m16 18 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.5 11.5 19 14" strokeLinecap="round" />
      <path d="m8 6-2-2-4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 12.5 5 10" strokeLinecap="round" />
      <path d="M10 18h4" strokeLinecap="round" />
      <path d="M10 6h4" strokeLinecap="round" />
    </svg>
  );
}

function IconRocket({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" aria-hidden>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3 17 17 0 0 1 8-4 17 17 0 0 1-4 8 22 22 0 0 1-3 2Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureIconPlate({ children }: { children: ReactNode }) {
  const plateGradient =
    'radial-gradient(ellipse 100% 100% at 58% 28%, #0d5568 0%, #083344 35%, #041018 68%, #000000 100%)';

  return (
    <div className="flex min-h-[168px] w-full max-w-[168px] flex-col items-center justify-center">
      <div className="relative flex h-[130px] w-[140px] shrink-0 items-center justify-center">
        {/* Parallelogram: skewed rectangle (4 sides), icon counter-skewed to stay upright */}
        <div
          className="absolute inset-x-2 inset-y-3 origin-center -skew-x-[18deg] rounded-xl shadow-[0_14px_36px_-10px_rgba(0,0,0,0.55)]"
          style={{ background: plateGradient }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-2 inset-y-3 origin-center -skew-x-[18deg] rounded-xl bg-gradient-to-br from-white/[0.14] via-transparent to-transparent opacity-90"
          aria-hidden
        />
        <div className="relative z-10 flex h-16 w-16 skew-x-[18deg] items-center justify-center text-white [&>svg]:h-[2.65rem] [&>svg]:w-[2.65rem] [&>svg]:stroke-[1.45]">
          {children}
        </div>
      </div>
    </div>
  );
}

type Feature = {
  id: number;
  icon: ReactNode;
  title: string[];
  description: string[];
};

export default function EverythingYouNeed() {
  const features: Feature[] = [
    {
      id: 1,
      icon: <IconDashboard />,
      title: ['Operator', 'Dashboard'],
      description: ['Monitor your entire', 'charging network in', 'one place'],
    },
    {
      id: 2,
      icon: <IconPulse />,
      title: ['Real-Time', 'Monitoring'],
      description: ['Track status, sessions,', 'and performance', 'instantly'],
    },
    {
      id: 3,
      icon: <IconApi />,
      title: ['APIs for', 'Integration'],
      description: ['Connect with energy', 'systems, enterprise', 'tools, and custom', 'workflows'],
    },
    {
      id: 4,
      icon: <IconRocket />,
      title: ['Faster', 'Integration'],
      description: ['Move from pilot to', 'production with', 'confidence'],
    },
  ];

  return (
    <section className="mt-4.5 w-full bg-background-main px-4 py-20 sm:py-24 md:py-26 lg:py-28 sm:px-6 md:px-8 lg:px-14">
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="flex flex-col gap-[90px] sm:gap-[100px] md:gap-[110px] lg:gap-29.5">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-[28px] font-bold leading-[36px] text-text-primary sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[44px] lg:text-4xl lg:leading-4xl">
              Everything you need to launch, manage,
            </h2>
            <h2 className="text-center text-[28px] font-bold leading-[36px] text-text-primary sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[44px] lg:text-4xl lg:leading-4xl">
              and scale your EV charging network
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-0">
                  <FeatureIconPlate>{feature.icon}</FeatureIconPlate>

                  <div className="mt-3.5 h-[6px] w-[6px] rounded-sm bg-primary-background" />
                  <div className="h-[66px] w-[1px] bg-primary-background" />
                </div>

                <div className="mt-2.5 flex flex-col items-center gap-3.5 py-2.5">
                  <div className="flex flex-col items-center">
                    {feature.title.map((line, index) => (
                      <h3
                        key={index}
                        className="text-center text-lg font-bold leading-lg text-text-primary"
                      >
                        {line}
                      </h3>
                    ))}
                  </div>

                  <div className="flex flex-col items-center">
                    {feature.description.map((line, index) => (
                      <p
                        key={index}
                        className="text-center text-xs font-normal leading-xs text-text-primary"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
