'use client';
import { useState } from 'react';
import Image from 'next/image';

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
}

export default function WhatMakesAddisEVDifferent() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'How does AddisEV help operators scale their networks cost-effectively?',
      answer:
        'AddisEV uses clear, predictable pricing with no revenue sharing or per-session fees. As you add chargers, the per-station cost can decrease, helping you scale without surprises while keeping 100% of your charging revenue.',
    },
    {
      id: 2,
      question: 'Can AddisEV be customized for unique business needs?',
      answer:
        'Yes. AddisEV is built on open standards and open APIs, making it easier to tailor workflows, integrations, branding, and operational rules to your specific business requirements.',
    },
    {
      id: 3,
      question: 'Is AddisEV secure and compliant with industry standards?',
      answer:
        'AddisEV is designed to support enterprise deployments and modern OCPP versions. Security posture depends on your deployment and configuration, but the platform is built to support best practices like access control, auditability, and secure integrations.',
    },
    {
      id: 4,
      question: 'What does it mean that AddisEV is "Powered by Open-Source Innovation"?',
      answer:
        'It means the platform is built on open-source foundations (like CitrineOS), so you benefit from transparent development, extensibility, and a broader ecosystem—without vendor lock-in.',
    },
    {
      id: 5,
      question: 'How is AddisEV different from traditional Charge Station Management Systems (CSMS)?',
      answer:
        'AddisEV combines a managed experience with open-source flexibility. You get fast time-to-value and ongoing support, while still keeping open APIs, OCPP compatibility, and control over your data and integrations.',
    },
    {
      id: 6,
      question: 'Can AddisEV support both new and existing EV networks?',
      answer:
        'Yes. You can onboard greenfield sites and connect existing chargers into the same AddisEV tenant. OCPP-based stations can typically be pointed at AddisEV without replacing hardware, while new rollouts use the same CSMS, reporting, and operational workflows.',
    },
    {
      id: 7,
      question: 'What technologies does AddisEV support for integration?',
      answer:
        'AddisEV supports OCPP 1.6, 2.0.1, and 2.1 for charger communication, plus REST-style APIs and webhooks for billing, CRM, identity, and custom dashboards. Because it builds on CitrineOS and open standards, you can integrate with common cloud stacks and your own services.',
    },
    {
      id: 8,
      question: 'How easy is it to integrate AddisEV with my existing infrastructure?',
      answer:
        'Most teams start with OCPP reconfiguration and API keys, then layer integrations over time. If you already operate a CSMS or back office, AddisEV can often run alongside or replace it incrementally—your team defines the pace, and we can help scope a minimal integration path.',
    },
  ];

  const toggleExpand = (id: number): void => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section className="mt-[100px] w-full bg-[#ffffff] px-4 py-16 sm:mt-[110px] sm:py-18 md:mt-[120px] md:py-20 lg:mt-32.5 lg:py-20 sm:px-6 md:px-8 lg:px-38">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="flex flex-col gap-[70px] sm:gap-[75px] md:gap-[80px] lg:gap-21.5">
          <div className="flex flex-col items-center gap-9 px-4 sm:px-8 md:px-12 lg:px-56">
            <h2 className="text-center text-[28px] font-bold leading-[36px] text-[#020202] sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[44px] lg:text-4xl lg:leading-4xl">
              What Makes AddisEV Different?
            </h2>

            <div className="flex flex-col items-center">
              <p className="text-center text-sm font-normal leading-md text-[#020202] sm:text-[15px] md:text-md">
                Scale your EV charging infrastructure without unpredictable costs. AddisEV offers
              </p>
              <p className="text-center text-sm font-normal leading-md text-[#020202] sm:text-[15px] md:text-md">
                clear, flexible pricing without revenue sharing or per-session charges. As your
              </p>
              <p className="text-center text-sm font-normal leading-md text-[#020202] sm:text-[15px] md:text-md">
                network expands, benefit from decreasing per-station costs, keeping 100% of your
              </p>
              <p className="text-center text-sm font-normal leading-md text-[#020202] sm:text-[15px] md:text-md">
                charging revenue.
              </p>
            </div>
          </div>

          <div className="w-full rounded-lg bg-[#ffffff] px-6 py-8 shadow-[0px_0px_60px_#00000019] sm:px-10 md:px-12 lg:px-14 lg:py-10">
            <div className="mx-auto flex max-w-[880px] flex-col gap-6.5">
              {faqItems.map((item) => {
                const isOpen = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    className="border-b border-[#f0f0f0] pb-6.5 last:border-0 last:pb-0"
                  >
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      className="flex w-full items-start justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      id={`faq-question-${item.id}`}
                    >
                      <span className="flex-1 text-base font-bold leading-sm text-[#020202]">
                        {item.question}
                      </span>
                      <Image
                        src="/images/img_image_faq_arrow.svg"
                        alt=""
                        width={16}
                        height={16}
                        className={`mt-1 w-icon-sm shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                        aria-hidden
                      />
                    </button>
                    {isOpen && item.answer ? (
                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-question-${item.id}`}
                        className="pt-3 text-sm leading-relaxed text-[#202024cc] sm:text-[15px] md:text-base"
                      >
                        {item.answer}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
