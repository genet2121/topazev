'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-4 sm:px-6 sm:pt-5 md:px-8 lg:px-14">
        <div className="mx-auto flex w-full max-w-[560px] items-center justify-between rounded-xl bg-background-overlay px-4 py-2.5 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/img_pfad_20486.svg"
              alt="AddisEV"
              width={74}
              height={20}
              className="w-[60px] sm:w-[65px] md:w-[70px] lg:w-[74px]"
            />
            <div className="h-5 w-[1px] bg-background-translucent" />
            <span className="text-white font-semibold text-sm sm:text-base tracking-wide">CSMS</span>
          </Link>
          <Link
            href="/contact"
            className="ml-6 rounded-lg bg-background-main px-4 py-2 text-sm font-bold text-text-primary transition-colors hover:bg-background-card"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

