'use client';
import Image from 'next/image';

const highlights = [
  {
    title: 'Onboard drivers fast',
    body: 'Registration and OTP flows keep the first session simple, with clear paths back to sign-in.',
  },
  {
    title: 'Find chargers on the map',
    body: 'Station pins and a quick action put nearby AddisEV-connected sites one tap away.',
  },
  {
    title: 'Start a session with confidence',
    body: 'A clean, guided UI reduces failed attempts and helps drivers complete a charge smoothly.',
  },
];

export default function MobileAppShowcaseSection() {
  return (
    <section
      id="mobile-app"
      className="relative mt-[100px] w-full overflow-hidden bg-[#020202] px-4 py-20 sm:mt-[110px] sm:px-6 md:mt-[120px] md:py-24 lg:mt-32 lg:px-14 lg:py-[7rem]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.65]"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 15% 45%, rgba(0,180,245,0.14), transparent 55%), radial-gradient(ellipse 70% 45% at 85% 65%, rgba(0,180,245,0.08), transparent 50%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="relative flex justify-center lg:order-1 lg:justify-start">
          <div className="group relative w-full max-w-[340px] sm:max-w-[380px]">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              // style={{
              //   background:
              //     'radial-gradient(circle at 50% 40%, rgba(0,180,245,0.35), transparent 68%)',
              // }}
              aria-hidden
            />
            <div className="relative rounded-[1.75rem] p-6 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85)] transition-[transform,box-shadow] duration-500 ease-out will-change-transform group-hover:-translate-y-1 group-hover:shadow-[0_50px_120px_-16px_rgba(0,180,245,0.18)] sm:p-8">
              <Image
                src="/images/addisev-mobile-app-removebg.png"
                alt="AddisEV mobile app showing registration screen and map with charging station pins"
                width={356}
                height={700}
                className="mx-auto h-auto w-full max-w-[280px] object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:scale-[1.035] sm:max-w-none"
                sizes="(max-width: 1024px) 72vw, 380px"
                priority={false}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:order-2 lg:max-w-[560px] lg:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00b4f5]">
            Mobile app
          </p>
          <h2 className="text-[28px] font-bold leading-[1.12] text-white sm:text-[34px] md:text-[40px] lg:text-[44px]">
            Promote your network with the AddisEV driver app
          </h2>
          <p className="text-base leading-relaxed text-white/75 sm:text-[17px]">
            Showcase your stations with a modern driver experience—onboarding, discovery, and a
            clear path to starting a charge. Designed to feel premium, fast, and trustworthy.
          </p>

          <ul className="flex flex-col gap-5">
            {highlights.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00b4f5]/15 text-sm font-bold text-[#00b4f5]"
                  aria-hidden
                >
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/65 sm:text-[15px]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button
              type="button"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#020202] transition-colors hover:bg-[#e8fbff]"
            >
              Get the app
            </button>
            <button
              type="button"
              className="rounded-full border-2 border-white/35 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Partner with us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
