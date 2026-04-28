'use client';
import Image from'next/image';

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
    <section className="w-full bg-[#f5f5ff] py-16 sm:py-18 md:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12.5 mt-[120px] sm:mt-[130px] md:mt-[135px] lg:mt-35.5">
      <div className="w-full max-w-[1340px] mx-auto">
        <div className="flex flex-col gap-14 sm:gap-14 md:gap-14 lg:gap-14">
          <div className="flex flex-col gap-9 items-center px-4 sm:px-8 md:px-12 lg:px-56 pt-13">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#020202] text-center">
              Try the TopazEV demo
            </h2>

            <p className="text-lg font-normal leading-lg text-[#020202] text-center">
              Explore the platform firsthand before deploying it in production.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-15 items-start lg:items-center">
            <div className="w-full lg:w-[42%] flex flex-col gap-10.5 sm:gap-10.5 md:gap-10.5 lg:gap-10.5 mt-0 lg:mt-10.5 px-5.5 sm:px-5.5 md:px-5.5 lg:px-5.5">
              <div className="flex flex-col gap-0">
                <p className="text-lg font-bold leading-lg text-[#020202]">
                  View a live operator dashboard
                </p>
                <p className="text-lg font-bold leading-lg text-[#020202]">
                  Monitor charger status and sessions
                </p>
                <p className="text-lg font-bold leading-lg text-[#020202]">
                  Explore real workflows
                </p>
                <p className="text-lg font-bold leading-lg text-[#020202]">
                  See how managed deployments work
                </p>
              </div>

              <div className="flex flex-col gap-5 pr-11.5">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="flex gap-4 bg-[linear-gradient(119deg,#01121a_0%,#01161f_50%,#055980_100%)] rounded-md p-3.5"
                  >
                    <p className="text-3xl font-bold leading-3xl text-[#ffffff] mt-2">
                      {step.number}
                    </p>

                    <div className="flex flex-col flex-1">
                      <h3 className="text-lg font-bold leading-lg text-[#ffffff]">
                        {step.title}
                      </h3>
                      {Array.isArray(step.description) ? (
                        step.description.map((line, index) => (
                          <p key={index} className="text-lg font-normal leading-lg text-[#ffffff]">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-lg font-normal leading-lg text-[#ffffff]">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5">
                <button className="bg-[#000000] border border-[#000000] rounded-2xl px-7.5 py-3.5 text-sm font-semibold leading-sm text-[#ffffff] hover:bg-[#333333] transition-colors">
                  Get Demo Access
                </button>
                <button className="bg-[#ffffff] border-medium border-[#000000] rounded-2xl px-8 py-3.5 text-sm font-semibold leading-sm text-[#000000] hover:bg-[#f5f5f5] transition-colors">
                  View FAQ
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[56%] flex justify-center">
              <Image
                src="/images/img_image_image_3.png"
                alt="Demo Dashboard"
                width={726}
                height={764}
                className="w-full max-w-[600px] sm:max-w-[650px] md:max-w-[700px] lg:max-w-[726px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}