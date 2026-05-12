'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section
      className="addisev-gradient-cta relative mx-auto mt-[180px] w-full max-w-[1300px] overflow-hidden rounded-[8px] py-4 px-4 shadow-[0_24px_60px_-20px_color-mix(in_srgb,var(--primary-background)_35%,transparent)] ring-1 ring-white/10 sm:mt-[200px] sm:rounded-xl sm:px-6 md:mt-[220px] md:px-8 lg:mt-56 lg:px-47.5"
    >
      <div
        className="addisev-gradient-cta-glow pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-[900px] px-7.5 py-8.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 mt-5">
          <div className="flex flex-col gap-7.5 w-full sm:w-[90%] px-5 sm:px-5 md:px-5 lg:px-5">
            <div className="flex flex-col">
              <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-text-inverse">
                Addis EV charging software, fully
              </h2>
              <h2 className="ml-2 text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-text-inverse">
                managed for scale
              </h2>
            </div>

            <div className="flex flex-col">
              <p className="text-md font-normal leading-md text-text-inverse">
                Launch faster, scale confidently, and keep control of your charging
              </p>
              <p className="text-md font-normal leading-md text-text-inverse">
                network.
              </p>
            </div>

            <Link href="/contact" className="w-fit rounded-2xl border border-background-main bg-background-main px-7.5 py-3.5 text-sm font-semibold leading-sm text-primary-background transition-colors hover:bg-background-card">
              Contact Us
            </Link>
          </div>

          <button className="flex-shrink-0 rounded-full border-thick border-background-main p-5.5">
            <Image
              src="/images/img_div_footer_cta_button.svg"
              alt="CTA Button"
              width={42}
              height={42}
              className="w-[15px] h-[15px]"
            />
          </button>
        </div>
      </div>
    </section>
  )
}