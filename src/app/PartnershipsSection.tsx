'use client';
import Image from'next/image';

export default function PartnershipsSection() {
  const partnerships = [
    {
      id: 1,
      title: 'Linux Foundation Energy',
      logos: [
        { src: '/images/img_image_citrine.png', width: 152, height: 36 },
        { src: '/images/img_image_citrine_48x122.png', width: 122, height: 48 }
      ]
    },
    {
      id: 2,
      title: 'Visit TopazEV on GitHub',
      logos: [
        { src: '/images/img_image_topaz_ev_logo.png', width: 246, height: 66 },
        { src: '/images/img_image_github_logo.png', width: 60, height: 66 }
      ]
    },
    {
      id: 3,
      title: 'Foundation Member',
      logos: [
        { src: '/images/img_image_citrine_76x308.png', width: 308, height: 76 }
      ]
    }
  ]

  return (
    <section className="w-full bg-[#ffffff] py-16 sm:py-18 md:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-38 mt-[180px] sm:mt-[200px] md:mt-[220px] lg:mt-56.5">
      <div className="w-full max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-3.5 md:gap-3.5 lg:gap-3.5">
          {partnerships.map((partnership) => (
            <div
              key={partnership.id}
              className="flex flex-col gap-14 sm:gap-14.5 md:gap-15 lg:gap-16 items-center bg-[#ffffff] rounded-lg shadow-[0px_0px_60px_#00000019] px-7 sm:px-7 md:px-4.5 lg:px-7 py-8"
            >
              <p className="text-md font-normal leading-base text-[#020202] text-center">
                {partnership.title}
              </p>

              {partnership.id === 1 && (
                <div className="flex justify-between items-center gap-4 w-full">
                  {partnership.logos.map((logo, index) => (
                    <Image
                      key={index}
                      src={logo.src}
                      alt={partnership.title}
                      width={logo.width}
                      height={logo.height}
                      className={index === 0 ? 'w-[50%]' : 'w-[40%]'}
                    />
                  ))}
                </div>
              )}

              {partnership.id === 2 && (
                <div className="flex gap-2 items-center">
                  {partnership.logos.map((logo, index) => (
                    <Image
                      key={index}
                      src={logo.src}
                      alt={partnership.title}
                      width={logo.width}
                      height={logo.height}
                      className={index === 0 ? 'w-[80%]' : 'w-[20%]'}
                    />
                  ))}
                </div>
              )}

              {partnership.id === 3 && (
                <Image
                  src={partnership.logos[0].src}
                  alt={partnership.title}
                  width={partnership.logos[0].width}
                  height={partnership.logos[0].height}
                  className="w-full"
                />
              )}

              <button className="bg-[#000000] border border-[#000000] rounded-2xl px-7.5 py-3.5 text-sm font-semibold leading-sm text-[#ffffff] hover:bg-[#333333] transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}