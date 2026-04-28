'use client';
import { useState } from 'react';
 

interface CookieConsentModalProps {
  onClose: () => void;
}

export default function CookieConsentModal({ onClose }: CookieConsentModalProps) {
  const [showCustomize, setShowCustomize] = useState<boolean>(false)

  const handleAllowAll = (): void => {
    onClose()
  }

  const handleRequiredOnly = (): void => {
    onClose()
  }

  const handleCustomize = (): void => {
    setShowCustomize(!showCustomize)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000066] px-4 sm:px-6 lg:px-14">
      <div className="relative w-full max-w-[420px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[940px] bg-[#ffffff] rounded-xl p-7 sm:p-8 md:p-10 lg:p-7">
        <div className="flex flex-col items-start gap-3.5 sm:gap-4 md:gap-5 lg:gap-7">
          <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-bold leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-2xl text-[#020202] mt-3">
            Welcome to S44
          </h2>

          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-1">
              <p className="text-xs sm:text-[13px] font-normal leading-xs text-[#020202]">
                To give you the best experience, we collect data from your usage
              </p>
              <p className="text-xs sm:text-[13px] font-normal leading-xs text-[#020202]">
                and your device to operate the site and its features, others are for
              </p>
              <p className="text-xs sm:text-[13px] font-normal leading-xs text-[#020202]">
                statistical or marketing purposes.
              </p>

              <p className="text-xs sm:text-[13px] font-normal leading-xs text-[#020202] mt-5">
                By clicking &quot;Allow all&quot; you consent to S44&apos;s collection of this
              </p>
              <p className="text-xs sm:text-[13px] font-normal leading-xs text-[#020202]">
                tracking technology data for the above purposes. You can set your
              </p>
              <div className="relative">
                <p className="text-xs sm:text-[13px] font-normal leading-xs text-[#020202]">
                  preferences by clicking &quot;Customize&quot;. Read more in our
                </p>
                <div className="flex flex-col items-end gap-0 mt-[-2px]">
                  <a href="#" className="text-xs sm:text-[13px] font-normal leading-xs underline text-[#0000ee]">
                    Privacy
                  </a>
                  <a href="#" className="text-xs sm:text-[13px] font-normal leading-xs underline text-[#0000ee]">
                    Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1.5 w-full mt-7 sm:mt-8 md:mt-10 lg:mt-14">
            <div className="flex flex-col gap-1.5 w-full">
              <button
                onClick={handleAllowAll}
                className="w-full bg-[#000000] border border-[#000000] rounded-2xl px-8.5 py-3.5 text-sm font-semibold leading-sm text-[#ffffff] hover:bg-[#333333] transition-colors"
              >
                Allow all
              </button>

              <button
                onClick={handleRequiredOnly}
                className="w-full bg-[#000000] border border-[#000000] rounded-2xl px-8.5 py-3.5 text-sm font-semibold leading-sm text-[#ffffff] hover:bg-[#333333] transition-colors"
              >
                Required only
              </button>
            </div>

            <button
              onClick={handleCustomize}
              className="px-3.5 py-3.5 text-sm font-semibold leading-sm text-[#000000] hover:bg-[#f5f5f5] transition-colors rounded"
            >
              Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}