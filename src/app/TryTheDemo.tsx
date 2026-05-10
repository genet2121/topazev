'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function TryTheDemo() {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Submit your email',
      description: 'Use the demo form to request access.'
    },
    {
      id: 2,
      number: '02',
      title: 'Receive login credentials',
      description: 'Your team sends access details directly.'
    },
    {
      id: 3,
      number: '03',
      title: 'Explore the platform',
      description: ['Review dashboards, statuses, sessions &', 'workflows.']
    }
  ]

  return (
    <section className="mt-[120px] w-full bg-background-card py-16 sm:mt-[130px] sm:py-18 md:mt-[135px] md:py-20 lg:mt-35.5 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12.5">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-14 sm:gap-14 md:gap-14 lg:gap-14">
          <div className="flex flex-col gap-9 items-center px-4 sm:px-8 md:px-12 lg:px-56 pt-13">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-text-primary text-center">
              Try the AddisEV demo
            </h2>

            <p className="text-lg font-normal leading-lg text-text-primary text-center">
              Explore the platform firsthand before deploying it in production.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-15 items-start lg:items-center ">
            <div className="w-full lg:w-[42%] flex flex-col gap-10.5 sm:gap-10.5 md:gap-10.5 lg:gap-10.5 mt-0 lg:mt-10.5 px-5.5 sm:px-5.5 md:px-5.5 lg:px-5.5">
              <div className="flex flex-col gap-0">
                <p className="text-lg font-bold leading-lg text-text-primary">
                  View a live operator dashboard
                </p>
                <p className="text-lg font-bold leading-lg text-text-primary">
                  Monitor charger status and sessions
                </p>
                <p className="text-lg font-bold leading-lg text-text-primary">
                  Explore real workflows
                </p>
                <p className="text-lg font-bold leading-lg text-text-primary">
                  See how managed deployments work
                </p>
              </div>

              <div className="flex flex-col gap-5 pr-11.5">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="addisev-gradient-step flex gap-4 rounded-md p-3.5"
                  >
                    <p className="mt-2 text-3xl font-bold leading-3xl text-text-inverse">
                      {step.number}
                    </p>

                    <div className="flex flex-col flex-1">
                      <h3 className="text-lg font-bold leading-lg text-text-inverse">
                        {step.title}
                      </h3>
                      {Array.isArray(step.description) ? (
                        step.description.map((line, index) => (
                          <p key={index} className="text-lg font-normal leading-lg text-text-inverse">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-lg font-normal leading-lg text-text-inverse">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5">
                <Link href='/contact'
                 className="rounded-2xl border border-button-border-primary bg-button-bg-primary px-7.5 py-3.5 text-sm font-semibold leading-sm text-button-text-primary transition-colors hover:opacity-90">
                  Get Demo Access
                </Link>
                <Link
                  href="/#faq"
                  className="inline-flex items-center justify-center rounded-2xl border-medium border-button-border-primary bg-button-bg-secondary px-8 py-3.5 text-sm font-semibold leading-sm text-button-text-secondary transition-colors hover:bg-background-card"
                >
                  View FAQ
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-[100%] flex justify-end ">
              <Image
                src="/images/dashboard_table_tilted_removedbg.png"
                alt="Demo Dashboard"
                width={726}
                height={1200}
                className="w-full max-w-[800px] sm:max-w-[650px] md:max-w-[700px] lg:max-w-[1100px] rounded-lg h-[600px]"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}