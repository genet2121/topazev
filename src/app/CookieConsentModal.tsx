'use client';
import { useState } from 'react';

interface CookieConsentModalProps {
  onClose: () => void;
}

export default function CookieConsentModal({ onClose }: CookieConsentModalProps) {
  const [showCustomize, setShowCustomize] = useState<boolean>(false);

  const handleAllowAll = (): void => {
    onClose();
  };

  const handleRequiredOnly = (): void => {
    onClose();
  };

  const handleCustomize = (): void => {
    setShowCustomize(!showCustomize);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 px-0 sm:px-4">
      <div className="relative w-full sm:max-w-[560px] bg-white rounded-t-3xl sm:rounded-3xl px-8 pt-10 pb-10">
        {/* Title */}
        <h2 className="text-[2rem] sm:text-[2.25rem] font-bold text-black leading-tight mb-6">
          Welcome to S44
        </h2>

        {/* Body text */}
        <div className="flex flex-col gap-5 mb-10">
          <p className="text-base text-black leading-relaxed">
            To give you the best experience, we collect data from your usage and your device to operate the site and its features, others are for statistical or marketing purposes.
          </p>
          <p className="text-base text-black leading-relaxed">
            By clicking &quot;Allow all&quot; you consent to S44&apos;s collection of this tracking technology data for the above purposes. You can set your preferences by clicking &quot;Customize&quot;. Read more in our{' '}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <button
            onClick={handleAllowAll}
            className="w-full bg-black text-white text-base font-semibold py-5 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Allow all
          </button>

          <button
            onClick={handleRequiredOnly}
            className="w-full bg-black text-white text-base font-semibold py-5 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Required only
          </button>

          <button
            onClick={handleCustomize}
            className="w-full text-black text-base font-bold py-3 hover:opacity-70 transition-opacity"
          >
            Customize
          </button>
        </div>
      </div>
    </div>
  );
}