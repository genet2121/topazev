'use client';
import Image from'next/image';
 import Link from'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#121212] py-6.5 px-6.5 mt-[210px] sm:mt-[240px] md:mt-[250px] lg:mt-66.5">
      <div className="w-full max-w-[864px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4 md:gap-6 lg:gap-8">
            <a href="mailto:sales@topazev.com" className="text-md font-normal leading-base text-[#808080] hover:text-[#ffffff] transition-colors">
              sales@topazev.com
            </a>
            
            <Link href="/privacy" className="text-md font-normal leading-base text-[#808080] hover:text-[#ffffff] transition-colors">
              Privacy
            </Link>
            
            <Link href="/imprint" className="text-md font-normal leading-base text-[#808080] hover:text-[#ffffff] transition-colors">
              Imprint
            </Link>
          </div>

          <div className="flex items-center gap-3.5">
            <p className="text-xs font-normal leading-xs text-[#808080]">
              powered by AddisEV
            </p>
            {/* <Image
              src="/images/.svg"
              alt="S44 Energy"
              width={200}
              height={26}
              className="w-[160px] sm:w-[180px] md:w-[190px] lg:w-[200px]"
            /> */}
          </div>
        </div>
      </div>
    </footer>
  )
}