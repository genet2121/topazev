'use client';
import { useState } from 'react';
 import Image from'next/image';

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
}

export default function WhatMakesTopazEVDifferent() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const tabs = [
    { id: 1, label: 'What Makes Topaz Unique?', active: true },
    { id: 2, label: 'How does OaaS work?', active: false },
    { id: 3, label: 'How is it implemented?', active: false },
    { id: 4, label: ['What types of plans/pricing', 'tiers do you offer?'], active: false },
    { id: 5, label: ['What is included vs. requires', 'custom build?'], active: false }
  ]

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'How does Topaz help operators scale their networks cost-effectively?'
    },
    {
      id: 2,
      question: 'Can Topaz be customized for unique business needs?'
    },
    {
      id: 3,
      question: 'Is Topaz secure and compliant with industry standards?'
    },
    {
      id: 4,
      question: 'What does it mean that Topaz is &quot;Powered by Open-Source Innovation&quot;?'
    },
    {
      id: 5,
      question: 'How is Topaz different from traditional Charge Station Management Systems (CSMS)?'
    }
  ]

  const toggleExpand = (id: number): void => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="w-full bg-[#ffffff] py-16 sm:py-18 md:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-38 mt-[100px] sm:mt-[110px] md:mt-[120px] lg:mt-32.5">
      <div className="w-full max-w-[1120px] mx-auto">
        <div className="flex flex-col gap-[70px] sm:gap-[75px] md:gap-[80px] lg:gap-21.5">
          <div className="flex flex-col gap-9 items-center px-4 sm:px-8 md:px-12 lg:px-56">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#020202] text-center">
              What Makes TopazEV Different?
            </h2>

            <div className="flex flex-col items-center">
              <p className="text-sm sm:text-[15px] md:text-md font-normal leading-md text-[#020202] text-center">
                Scale your EV charging infrastructure without unpredictable costs. TopazEV offers
              </p>
              <p className="text-sm sm:text-[15px] md:text-md font-normal leading-md text-[#020202] text-center">
                clear, flexible pricing without revenue sharing or per-session charges. As your
              </p>
              <p className="text-sm sm:text-[15px] md:text-md font-normal leading-md text-[#020202] text-center">
                network expands, benefit from decreasing per-station costs, keeping 100% of your
              </p>
              <p className="text-sm sm:text-[15px] md:text-md font-normal leading-md text-[#020202] text-center">
                charging revenue.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-[28%] flex flex-col gap-6.5 pl-7">
              {tabs.map((tab) => (
                <div key={tab.id}>
                  {Array.isArray(tab.label) ? (
                    <div className="flex flex-col">
                      {tab.label.map((line, index) => (
                        <p
                          key={index}
                          className={`text-lg font-bold leading-lg ${
                            tab.active ? 'text-[#00b4f5]' : 'text-[#20202466]'
                          } cursor-pointer hover:text-[#00b4f5] transition-colors`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p
                      className={`text-lg font-bold leading-lg ${
                        tab.active ? 'text-[#00b4f5]' : 'text-[#20202466]'
                      } cursor-pointer hover:text-[#00b4f5] transition-colors`}
                    >
                      {tab.label}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full lg:flex-1 bg-[#ffffff] rounded-lg shadow-[0px_0px_60px_#00000019] px-8 sm:px-10 md:px-12 lg:px-14 py-8 sm:py-9 md:py-10 lg:py-10">
              <div className="flex flex-col gap-6.5">
                {faqItems.map((item) => (
                  <div key={item.id} className="border-b border-[#f0f0f0] last:border-0 pb-6.5 last:pb-0">
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="w-full flex justify-between items-start gap-4 text-left"
                    >
                      <p className="text-base font-bold leading-sm text-[#020202] flex-1">
                        {item.question}
                      </p>
                      <Image
                        src="/images/img_image_faq_arrow.svg"
                        alt="Toggle"
                        width={16}
                        height={16}
                        className={`w-icon-sm flex-shrink-0 transition-transform ${
                          expandedId === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}