'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full -mt-20 min-h-[560px] sm:min-h-[620px] md:min-h-[680px] lg:min-h-[720px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/images/Screenshot_from_2026-04-28_09-10-19-1777356660432.png"
          alt="EV charging station at dusk with electric car and glowing canopy"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay — stronger on left, fades to transparent on right */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#02131b_0%,#02131bcc_30%,#04374f66_60%,#04374f00_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col ">
        {/* Hero Content */}
        <div className="mt-20 mx-auto w-full flex flex-col gap-6 sm:gap-7 px-6 sm:px-10 md:px-14 lg:px-20 pt-10 sm:pt-12 md:pt-14 pb-[80px] sm:pb-[100px] md:pb-[120px] lg:pb-[140px] max-w-[600px] lg:max-w-[1200px]">
          <div className="flex flex-row items-center gap-3">
            {/* AddisEV Logo */}
            <Image
              src="/images/AddisEV-LOGO-TP.png"
              alt="AddisEV CSMS Logo"
              width={64}
              height={100}
              className="h-auto w-14 shrink-0 sm:w-16"
            />
            <p className="text-white text-5xl font-bold uppercase">
              Addis<span className="text-primary-accent">EV</span>
            </p>
          </div>

          {/* Headline */}
          <div className="flex flex-col">
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-bold leading-[1.1] text-white">
             Electric Vehicle
            </h1>
            <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-bold leading-[1.1] text-white">
              Charging Platform
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed text-white max-w-[480px]">
            AddisEV is a fully managed Charge Station Management System built on CitrineOS. Launch faster, monitor chargers in real time, and scale with open APIs and support for OCPP 1.6, 2.0.1, and 2.1.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3.5">
            <button className="bg-[#ffffff] border border-[#ffffff] rounded-full px-7 py-3 text-sm font-semibold text-[#000000] hover:bg-[#f0f0f0] transition-colors whitespace-nowrap">
              Request Demo
            </button>
            <button className="border-2 border-[#ffffff] rounded-full px-7 py-3 text-sm font-semibold text-[#ffffff] hover:bg-[#ffffff] hover:text-[#000000] transition-colors whitespace-nowrap">
              How it works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}