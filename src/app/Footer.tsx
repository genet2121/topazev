'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-[210px] w-full bg-footer-bg px-6.5 pb-10 pt-14 sm:mt-[240px] sm:pb-12 sm:pt-16 md:mt-[250px] lg:mt-66.5">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/AddisEV-LOGO-TP.png"
                alt="AddisEV logo"
                width={56}
                height={56}
                className="h-auto w-12 sm:w-14"
              />
              <div className="flex flex-col">
                <p className="text-lg font-bold tracking-tight text-text-inverse">AddisEV</p>
                <p className="text-sm text-text-secondary">Charging platform</p>
              </div>
            </div>

            <p className="mt-5 max-w-[420px] text-sm leading-relaxed text-text-secondary">
              Run and scale EV charging networks with open standards, flexible integrations, and a
              modern operator experience—powered by Addis EV innovation.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:sales@addisev.com"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-text-inverse transition-colors hover:border-white/30 hover:bg-white/10"
              >
                sales@addisev.com
              </a>
              <Link
                href="/#pricing"
                className="rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm font-semibold text-text-inverse transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Pricing
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/Shambu-p"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-text-inverse transition-colors hover:border-white/30 hover:bg-white/10"
                aria-label="GitHub"
                title="GitHub"
              >
                <span aria-hidden className="text-base font-bold">
                  GH
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/abnet-kebede-3a564b221/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-text-inverse transition-colors hover:border-white/30 hover:bg-white/10"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <span aria-hidden className="text-base font-bold">
                  IN
                </span>
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-text-inverse transition-colors hover:border-white/30 hover:bg-white/10"
                aria-label="X"
                title="X"
              >
                <span aria-hidden className="text-base font-bold">
                  X
                </span>
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-text-inverse">Product</p>
                <div className="mt-4 flex flex-col gap-3">
                  <Link href="/#mobile-app" className="text-sm text-text-secondary hover:text-text-inverse transition-colors">
                    Driver app
                  </Link>
                  <Link href="/#pricing" className="text-sm text-text-secondary hover:text-text-inverse transition-colors">
                    Pricing
                  </Link>
                  {/* <Link href="/contact" className="text-sm text-text-secondary hover:text-text-inverse transition-colors">
                    Request demo
                  </Link> */}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-text-inverse">Company</p>
                <div className="mt-4 flex flex-col gap-3">
                  <Link href="/#hero" className="text-sm text-text-secondary hover:text-text-inverse transition-colors">
                    About
                  </Link>
                  <a
                    href="/contact"
                    className="text-sm text-text-secondary hover:text-text-inverse transition-colors"
                  >
                    Contact
                  </a>
                  <Link href="/contact" className="text-sm text-text-secondary hover:text-text-inverse transition-colors">
                    Partnerships
                  </Link>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-sm font-semibold text-text-inverse">Stay in the loop</p>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  Get product updates and release notes.
                </p>
                {/* <div className="mt-4 flex gap-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-text-inverse placeholder:text-white/45 outline-none transition-colors focus:border-primary-accent"
                  />
                  <button
                    type="button"
                    className="h-11 shrink-0 rounded-xl bg-primary-accent px-4 text-sm font-semibold text-text-inverse transition-colors hover:bg-[var(--primary-accent-hover)]"
                  >
                    Subscribe
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-text-secondary">
              © {new Date().getFullYear()} AddisEV. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy" className="text-xs text-text-secondary hover:text-text-inverse transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-text-secondary hover:text-text-inverse transition-colors">
                Terms of Use
              </Link>
           
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}