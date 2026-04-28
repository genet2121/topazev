'use client';
import Image from'next/image';

export default function WhatIsTopazEV() {
  const features = [
    {
      id: 1,
      icon: '/images/img_image.png',
      title: 'Production-ready CSMS',
      description: ['Vertically & horizontally', 'scalable; Built on CitrineOS.']
    },
    {
      id: 2,
      icon: '/images/img_image_64x64.png',
      title: 'Open-as-a-Service',
      description: ['Open-source flexibility with', 'fully managed delivery.']
    },
    {
      id: 3,
      icon: '/images/img_image_1.png',
      title: 'Broad Compatibility',
      description: ['Compatible with OCPP 1.6,', '2.0.1, and 2.1 chargers.']
    },
    {
      id: 4,
      icon: '/images/img_image_2.png',
      title: 'Operational support',
      description: ['Hosting, monitoring, and', 'platform operations', 'handled for you.']
    }
  ]

  return (
    <section className="w-full bg-[#ffffff] py-12 sm:py-16 md:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="w-full max-w-[1120px] mx-auto">
        <div className="flex flex-col gap-0.5 items-center">
          <div className="flex flex-col gap-6.5 items-center mb-[70px] sm:mb-[75px] md:mb-[80px] lg:mb-21">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#020202] text-center">
              What is TopazEV?
            </h2>

            <div className="flex flex-col items-center px-1 sm:px-2">
              <p className="text-sm sm:text-[15px] md:text-md font-normal leading-md text-[#020202] text-center">
                TopazEV is an API-first EV charging platform that gives you full control without SaaS lock-in. It handles the complex layers of open
              </p>
              <p className="text-sm sm:text-[15px] md:text-md font-normal leading-md text-[#020202] text-center">
                protocols (OCPP/OCPI/ISO15118), device connectivity, and infrastructure orchestration so you can build or deploy faster while owning your
              </p>
              <p className="text-sm sm:text-[15px] md:text-md font-normal leading-md text-[#020202] text-center">
                stack and data.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4 sm:px-4 md:px-4 lg:px-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col gap-2.5 items-center bg-[linear-gradient(138deg,#01121a_0%,#055980_100%)] border border-[#2c547f] rounded-md p-5"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />

                <h3 className="text-lg font-bold leading-lg text-[#ffffff] text-center">
                  {feature.title}
                </h3>

                <div className="flex flex-col items-center">
                  {feature.description.map((line, index) => (
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