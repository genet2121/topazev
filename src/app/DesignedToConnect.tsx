'use client';
import Image from'next/image';

export default function DesignedToConnect() {
  const integrations = [
    // {
    //   id: 1,
    //   icon: '/images/img_image_image_4.png',
    //   title: 'Solar energy systems',
    //   description: ['Connect charging to', 'distributed energy', 'assets.']
    // },
    {
      id: 1,
      icon: '/images/img_image_78x78.png',
      title: 'Battery storage',
      description: ['Support smarter site energy', 'coordination.']
    },
    {
      id: 2,
      icon: '/images/img_image_3.png',
      title: ['Energy management', 'platforms'],
      description: ['Integrate charging into', 'broader power strategies.']
    },
    {
      id: 3,
      icon: '/images/img_image_4.png',
      title: 'Enterprise systems',
      description: ['Connect with business', 'operations and reporting', 'workflows.']
    }
  ]

  return (
    <section className="w-full bg-[#f5f5ff] py-16 sm:py-18 md:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="w-full max-w-[1120px] mx-auto">
        <div className="flex flex-col gap-6.5 items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#020202] text-center">
              Designed to connect with the systems around your
            </h2>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#020202] text-center">
              charging network.
            </h2>
          </div>

          <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-27.5 mb-3">
            <p className="text-sm sm:text-[15px] md:text-md font-normal leading-md text-[#020202] text-center">
              AddisEV is built to extend over time, so you can connect charging with energy, operations, and
            </p>
            <p className="text-sm sm:text-[15px] md:text-md font-normal leading-md text-[#020202] text-center">
              enterprise systems as your network grows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-7.5">
            {integrations.map((integration) => (
              <div
                key={integration.id}
                className="flex flex-col gap-2.5 items-center bg-[linear-gradient(138deg,#01121a_0%,#055980_100%)] border border-[#2c547f] rounded-md p-5 sm:p-5 md:p-4 lg:p-5"
              >
                <Image
                  src={integration.icon}
                  alt={Array.isArray(integration.title) ? integration.title.join(' ') : integration.title}
                  width={78}
                  height={78}
                  className="w-[78px] h-[78px]"
                />

                <div className="flex flex-col items-center">
                  {Array.isArray(integration.title) ? (
                    integration.title.map((line, index) => (
                      <h3 key={index} className="text-xl font-bold leading-xl text-[#ffffff] text-center">
                        {line}
                      </h3>
                    ))
                  ) : (
                    <h3 className="text-xl font-bold leading-xl text-[#ffffff] text-center">
                      {integration.title}
                    </h3>
                  )}
                </div>

                <div className="flex flex-col items-center">
                  {integration.description.map((line, index) => (
                    <p key={index} className="text-md font-normal leading-md text-[#ffffff] text-center">
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
  )
}