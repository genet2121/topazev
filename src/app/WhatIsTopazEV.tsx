'use client';

function IconShieldCheck({ className }: { className?: string }) {
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
      <path d="M12 3 5 6v5c0 5.1 3.4 9.2 7 10.8 3.6-1.6 7-5.7 7-10.8V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconPlug({ className }: { className?: string }) {
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
      <path d="M12 22v-5" />
      <path d="M9 8V2h2v4" />
      <path d="M15 8V2h-2v4" />
      <path d="M18 8v4a6 6 0 0 1-12 0V8h12Z" />
    </svg>
  );
}

function IconTools({ className }: { className?: string }) {
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
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      <path d="m5.5 13.5-2.5 2.5" />
      <path d="M9 21l1.5-1.5" />
    </svg>
  );
}

type Feature = {
  id: number;
  Icon: (props: { className?: string }) => JSX.Element;
  title: string;
  description: string[];
};

export default function WhatIsAddisEV() {
  const features: Feature[] = [
    {
      id: 1,
      Icon: IconShieldCheck,
      title: 'Production-ready CSMS',
      description: ['Vertically & horizontally scalable.'],
    },
    {
      id: 2,
      Icon: IconPlug,
      title: 'Broad Compatibility',
      description: ['Compatible with OCPP 1.6,', '2.0.1, and 2.1 chargers.'],
    },
    {
      id: 3,
      Icon: IconTools,
      title: 'Operational support',
      description: ['Hosting, monitoring, and', 'platform operations', 'handled for you.'],
    },
  ];

  return (
    <section
      id="what-is-addisev"
      className="scroll-mt-24 w-full bg-background-main px-4 py-12 sm:scroll-mt-28 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-14 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="flex flex-col items-center gap-0.5">
          <div className="mb-[70px] flex flex-col items-center gap-6.5 sm:mb-[75px] md:mb-[80px] lg:mb-21">
            <h2 className="text-center text-[28px] font-bold leading-[36px] text-text-primary sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[44px] lg:text-4xl lg:leading-4xl">
              What is AddisEV?
            </h2>

            <div className="flex flex-col items-center px-1 sm:px-2">
              <p className="text-center text-sm font-normal leading-md text-text-primary sm:text-[15px] md:text-md">
                AddisEV is an API-first EV charging platform that gives you full control without SaaS
                lock-in. It handles the complex layers of open
              </p>
              <p className="text-center text-sm font-normal leading-md text-text-primary sm:text-[15px] md:text-md">
                protocols (OCPP/OCPI/ISO15118), device connectivity, and infrastructure orchestration
                so you can build or deploy faster while owning your
              </p>
              <p className="text-center text-sm font-normal leading-md text-text-primary sm:text-[15px] md:text-md">
                stack and data.
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-4 lg:grid-cols-3">
            {features.map((feature) => {
              const { Icon } = feature;
              return (
                <div
                  key={feature.id}
                  className="addisev-gradient-panel flex flex-col items-center gap-4 rounded-xl border border-border-secondary/80 p-6 shadow-[0_12px_40px_-18px_color-mix(in_srgb,var(--primary-background)_45%,transparent)] sm:p-7"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background-main text-primary-background ring-1 ring-white/20"
                    aria-hidden
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-center text-lg font-bold leading-snug text-text-inverse">
                    {feature.title}
                  </h3>

                  <div className="flex flex-col items-center gap-0.5">
                    {feature.description.map((line, index) => (
                      <p
                        key={index}
                        className="text-center text-[15px] font-normal leading-relaxed text-text-inverse"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
