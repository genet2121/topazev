import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'TopazEV - Open Source EV Charging Platform',
    template: 'TopazEV - Open Source EV Charging Platform | %s',
  },
  description: 'TopazEV is a fully managed, open-source Charge Station Management System built on CitrineOS. Enterprise-grade EV charging infrastructure with OCPP 1.6 and 2.0.1 compatibility for scalable electric vehicle charging solutions.',
  keywords: 'EV charging, electric vehicle charging, OCPP, CitrineOS, charge station management, open source EV, CSMS, charging infrastructure, OCPP 2.0.1, charging platform',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'TopazEV - Open Source EV Charging Platform',
      template: 'TopazEV - Open Source EV Charging Platform | %s',
    },
    description: 'Enterprise-grade open-source Charge Station Management System. Deploy scalable EV charging infrastructure with full OCPP support and CitrineOS integration.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Ftopazev2977back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}