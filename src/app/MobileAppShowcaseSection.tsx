'use client';
import Image from 'next/image';
import Link from 'next/link';

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
      className="relative w-full overflow-hidden addisev-gradient-cta px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 md:pb-24 md:pt-24 lg:px-14 lg:pb-[7rem] lg:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.75]"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 15% 45%, color-mix(in srgb, var(--primary-accent) 16%, transparent), transparent 55%), radial-gradient(ellipse 70% 45% at 85% 65%, color-mix(in srgb, var(--secondary-light) 10%, transparent), transparent 50%)',
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-accent/20 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="relative flex justify-center lg:order-1 lg:justify-start">
          <div className="group relative w-full max-w-[340px] sm:max-w-[380px]">
            <div
              className="addisev-mobile-glow-orbit pointer-events-none absolute -inset-6 rounded-[2rem] opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <div className="relative rounded-[1.75rem] p-6  transition-[transform,box-shadow] duration-500 ease-out will-change-transform group-hover:-translate-y-1  sm:p-8">
              <Image
                src="/images/addisev-mobile-app-removebg.png"
                alt="AddisEV mobile app showing registration screen and map with charging station pins"
                width={356}
                height={700}
                className="mx-auto h-auto w-full max-w-[280px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.035] sm:max-w-none"
                sizes="(max-width: 1024px) 72vw, 380px"
                priority={false}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:order-2 lg:max-w-[560px] lg:pl-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Mobile app
          </p>
          <h2 className="text-[28px] font-bold leading-[1.12] text-white sm:text-[34px] md:text-[40px] lg:text-[44px]">
            Promote your network with the AddisEV driver app
          </h2>
          <p className="text-base leading-relaxed text-white sm:text-[17px]">
            Showcase your stations with a modern driver experience—onboarding, discovery, and a
            clear path to starting a charge. Designed to feel premium, fast, and trustworthy.
          </p>

          <ul className="flex flex-col gap-5">
            {highlights.map((item) => (
              <li key={item.title} className="flex gap-4 ">
                <span
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--primary-accent)_18%,transparent)] text-sm font-bold text-white"
                  aria-hidden
                >
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white sm:text-[15px]">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button
              type="button"
              className="rounded-full bg-primary-accent px-8 py-3.5 text-sm font-semibold text-text-inverse transition-colors hover:bg-[var(--primary-accent-hover)]"
            >
              Get the app
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-tint-bg)]"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
