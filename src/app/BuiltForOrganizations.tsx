'use client';
import Image from'next/image';

export default function BuiltForOrganizations() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[634px]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#01121a_0%,#055980_100%)] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-22.5 py-3">
          <Image
            src="/images/img_vector_530x530.png"
            alt="Background"
            width={530}
            height={530}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] sm:w-[450px] md:w-[500px] lg:w-[530px] opacity-20"
          />

          <div className="relative z-10 flex flex-col gap-9.5 sm:gap-9.5 md:gap-9.5 lg:gap-9.5 items-start px-5 sm:px-5 md:px-5 lg:px-5 max-w-[1244px] mx-auto">
            <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-61.5 mt-5">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#ffffff] text-center">
                AddisEV is built for organizations
              </h2>
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#ffffff] text-center">
                deploying and operating EV charging
              </h2>
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#ffffff] text-center">
                networks.
              </h2>
            </div>

            <Image
              src="/assets/images/image-1777833443236.png"
              alt="AddisEV Ecosystem Diagram"
              width={600}
              height={350}
              className="w-full max-w-[450px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}