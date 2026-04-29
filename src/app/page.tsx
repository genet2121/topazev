import { Metadata } from 'next';
 import HomePage from'./HomePage';

export const metadata: Metadata = {
  title: 'AddisEV - Open-Source EV Charging Platform | OCPP Compatible CSMS',
  description: 'AddisEV is a fully managed Charge Station Management System built on CitrineOS. Launch faster, monitor chargers in real time, and scale with open APIs and support for OCPP 1.6, 2.0.1, and 2.1.',
  keywords: 'AddisEV, EV charging, CSMS, CitrineOS, OCPP, open-source, charge station management, electric vehicle charging, OCPP 1.6, OCPP 2.0.1, OCPP 2.1',
  
  openGraph: {
    title: 'AddisEV - Open-Source EV Charging Platform | OCPP Compatible CSMS',
    description: 'AddisEV is a fully managed Charge Station Management System built on CitrineOS. Launch faster, monitor chargers in real time, and scale with open APIs and support for OCPP 1.6, 2.0.1, and 2.1.',
  }
}

export default function Page() {
  return <HomePage />
}