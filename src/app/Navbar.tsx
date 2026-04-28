import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-14 pt-4 sm:pt-5">
        <div className="mx-auto flex items-center justify-between w-full max-w-[560px] bg-[#00000099] rounded-xl px-4 py-2.5 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/img_pfad_20486.svg"
              alt="S44 Logo"
              width={74}
              height={20}
              className="w-[60px] sm:w-[65px] md:w-[70px] lg:w-[74px]"
            />
            <div className="w-[1px] h-5 bg-[#ffffff99]" />
            <span className="text-white font-semibold text-sm sm:text-base tracking-wide">CSMS</span>
          </div>
          <button className="bg-[#ffffff] rounded-lg px-4 py-2 text-sm font-bold text-[#020202] hover:bg-[#f5f5f5] transition-colors ml-6">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

