'use client';
import Image from'next/image';

export default function CTASection() {
  return (
    <section 
      className="relative w-full px-4 sm:px-6 md:px-8 lg:px-47.5 mt-[180px] sm:mt-[200px] md:mt-[220px] lg:mt-56"
      style={{
        backgroundImage: 'url(/images/img_clip_path_group.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-full max-w-[1080px] mx-auto px-7.5 py-8.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 mt-5">
          <div className="flex flex-col gap-7.5 w-full sm:w-[90%] px-5 sm:px-5 md:px-5 lg:px-5">
            <div className="flex flex-col">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#ffffff]">
                Open EV charging software, fully
              </h2>
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#ffffff] ml-2">
                managed for scale
              </h2>
            </div>

            <div className="flex flex-col">
              <p className="text-md font-normal leading-md text-[#ffffff]">
                Launch faster, scale confidently, and keep control of your charging
              </p>
              <p className="text-md font-normal leading-md text-[#ffffff]">
                network.
              </p>
            </div>

            <button className="bg-[#ffffff] border border-[#ffffff] rounded-2xl px-7.5 py-3.5 text-sm font-semibold leading-sm text-[#000000] hover:bg-[#f5f5f5] transition-colors w-fit">
              Get Demo Access
            </button>
          </div>

          <button className="flex-shrink-0 border-thick border-[#ffffff] rounded-full p-5.5">
            <Image
              src="/images/img_div_footer_cta_button.svg"
              alt="CTA Button"
              width={62}
              height={62}
              className="w-[62px] h-[62px]"
            />
          </button>
        </div>
      </div>
    </section>
  )
}