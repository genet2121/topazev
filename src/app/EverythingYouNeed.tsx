'use client';
import Image from'next/image';

export default function EverythingYouNeed() {
  const features = [
    {
      id: 1,
      icon: '/images/img_div_feature_it.png',
      title: ['Operator', 'Dashboard'],
      description: ['Monitor your entire', 'charging network in', 'one place']
    },
    {
      id: 2,
      icon: '/images/img_div_feature_it_168x168.png',
      title: ['Real-Time', 'Monitoring'],
      description: ['Track status, sessions,', 'and performance', 'instantly']
    },
    {
      id: 3,
      icon: '/images/img_div_feature_it_white_a700.png',
      title: ['Open APIs for', 'Integration'],
      description: ['Connect with energy', 'systems, enterprise', 'tools, and custom', 'workflows']
    },
    {
      id: 4,
      icon: '/images/img_div_feature_it_white_a700_168x168.png',
      title: ['Native Cloud', 'Deployment'],
      description: ['No deployment,', 'hosting, or', 'maintenance', 'required']
    },
    {
      id: 5,
      icon: '/images/img_div_feature_it_1.png',
      title: ['Faster', 'Deployment'],
      description: ['Move from pilot to', 'production with', 'confidence']
    }
  ]

  return (
    <section className="w-full bg-[#ffffff] py-20 sm:py-24 md:py-26 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-14 mt-4.5">
      <div className="w-full max-w-[1312px] mx-auto">
        <div className="flex flex-col gap-[90px] sm:gap-[100px] md:gap-[110px] lg:gap-29.5">
          <div className="flex flex-col items-center">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#020202] text-center">
              Everything you need to launch, manage,
            </h2>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#020202] text-center">
              and scale your EV charging network
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title.join(' ')}
                    width={168}
                    height={168}
                    className="w-card-sm h-card-sm"
                  />

                  <div className="w-[6px] h-[6px] bg-[#000000] rounded-sm mt-3.5" />
                  <div className="w-[1px] h-[66px] bg-[#000000]" />
                </div>

                <div className="flex flex-col gap-3.5 items-center mt-2.5 py-2.5">
                  <div className="flex flex-col items-center">
                    {feature.title.map((line, index) => (
                      <h3 key={index} className="text-lg font-bold leading-lg text-[#020202] text-center">
                        {line}
                      </h3>
                    ))}
                  </div>

                  <div className="flex flex-col items-center">
                    {feature.description.map((line, index) => (
                      <p key={index} className="text-xs font-normal leading-xs text-[#020202] text-center">
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
  )
}