'use client';

import type { ReactNode } from 'react';

function IconBattery({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="7" width="16" height="10" rx="2" />
      <path d="M22 10v4" />
    </svg>
  );
}

function IconEnergyFlow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v4" />
      <path d="M6.4 6.4l2.8 2.8" />
      <path d="M3 12h4" />
      <path d="M6.4 17.6l2.8-2.8" />
      <path d="M12 17v4" />
      <path d="M17.6 17.6l-2.8-2.8" />
      <path d="M21 12h-4" />
      <path d="M17.6 6.4l-2.8 2.8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconEnterprise({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 21V8.5l6-2.5v15" />
      <path d="M10 6 20 3v18" />
      <path d="M7 21v-4h3" />
      <path d="M14 21v-4h3" />
      <path d="M7 13h3" />
      <path d="M7 9h3" />
      <path d="M14 13h3" />
      <path d="M14 9h3" />
    </svg>
  );
}

type IntegrationItem = {
  id: number;
  icon: ReactNode;
  title: string | string[];
  description: string[];
};

export default function DesignedToConnect() {
  const iconClass = 'h-[52px] w-[52px] sm:h-[58px] sm:w-[58px] md:h-[62px] md:w-[62px]';

  const integrations: IntegrationItem[] = [
    {
      id: 1,
      icon: <IconBattery className={iconClass} />,
      title: 'Battery storage',
      description: ['Support smarter site energy', 'coordination.'],
    },
    {
      id: 2,
      icon: <IconEnergyFlow className={iconClass} />,
      title: ['Energy management', 'platforms'],
      description: ['Integrate charging into', 'broader power strategies.'],
    },
    {
      id: 3,
      icon: <IconEnterprise className={iconClass} />,
      title: 'Enterprise systems',
      description: ['Connect with business', 'operations and reporting', 'workflows.'],
    },
  ];

  return (
    <section className="w-full bg-background-card py-16 sm:py-18 md:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="flex flex-col items-center gap-6.5">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-[28px] font-bold leading-[36px] text-text-primary sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[44px] lg:text-4xl lg:leading-4xl">
              Designed to connect with the systems around your
            </h2>
            <h2 className="text-center text-[28px] font-bold leading-[36px] text-text-primary sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[44px] lg:text-4xl lg:leading-4xl">
              charging network.
            </h2>
          </div>

          <div className="mb-3 flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-27.5">
            <p className="text-center text-sm font-normal leading-md text-text-primary sm:text-[15px] md:text-md">
              AddisEV is built to extend over time, so you can connect charging with energy,
              operations, and
            </p>
            <p className="text-center text-sm font-normal leading-md text-text-primary sm:text-[15px] md:text-md">
              enterprise systems as your network grows.
            </p>
          </div>

          <div className="mb-7.5 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration) => (
              <div
                key={integration.id}
                className="addisev-gradient-panel flex flex-col items-center gap-2.5 rounded-md border border-border-secondary p-5 sm:p-5 md:p-4 lg:p-5"
              >
                <span
                  className="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--primary-accent)_22%,transparent)] text-[var(--secondary-light)]"
                  aria-hidden
                >
                  {integration.icon}
                </span>

                <div className="flex flex-col items-center">
                  {Array.isArray(integration.title) ? (
                    integration.title.map((line, index) => (
                      <h3
                        key={index}
                        className="text-center text-xl font-bold leading-xl text-text-inverse"
                      >
                        {line}
                      </h3>
                    ))
                  ) : (
                    <h3 className="text-center text-xl font-bold leading-xl text-text-inverse">
                      {integration.title}
                    </h3>
                  )}
                </div>

                <div className="flex flex-col items-center">
                  {integration.description.map((line, index) => (
                    <p
                      key={index}
                      className="text-center text-md font-normal leading-md text-text-inverse"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
