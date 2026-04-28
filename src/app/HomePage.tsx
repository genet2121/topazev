'use client';
import { useState } from 'react';
 import CookieConsentModal from'./CookieConsentModal';
 import HeroSection from'./HeroSection';
 import WhatIsTopazEV from'./WhatIsTopazEV';
 import TryTheDemo from'./TryTheDemo';
 import EverythingYouNeed from'./EverythingYouNeed';
 import DesignedToConnect from'./DesignedToConnect';
 import BuiltForOrganizations from'./BuiltForOrganizations';
import WhatMakesTopazEVDifferent from './WhatMakesTopazEVDifferent';
 import UniversalCompatibility from'./UniversalCompatibility';
 import LatestFromBlog from'./LatestFromBlog';
 import PartnershipsSection from'./PartnershipsSection';
 import CTASection from'./CTASection';
 import Footer from'./Footer';

export default function HomePage() {
  const [showCookieConsent, setShowCookieConsent] = useState<boolean>(true)

  const handleCookieConsent = (): void => {
    setShowCookieConsent(false)
  }

  return (
    <>
      {showCookieConsent && <CookieConsentModal onClose={handleCookieConsent} />}
      
      <main>
        <HeroSection />
        <WhatIsTopazEV />
        <TryTheDemo />
        <EverythingYouNeed />
        <DesignedToConnect />
        <BuiltForOrganizations />
        <WhatMakesTopazEVDifferent />
        <UniversalCompatibility />
        <LatestFromBlog />
        <PartnershipsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}