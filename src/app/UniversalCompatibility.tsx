'use client';
export default function UniversalCompatibility() {
  const column1 = ['ABB', 'aixACCT', 'Alfen', 'Alpitronic', 'BTC Power', 'ChargeLink']
  const column2 = ['ChargePoint', 'ChargeSim', 'Compleo', 'EVBox', 'EVerest', 'Lincoln Electric']
  const column3 = ['Megmeet', 'SwitchEV', 'Udenco', 'VectorInformatik', 'Wallbox', 'XCharge']

  return (
    <section className="w-full bg-[#ffffff] py-16 sm:py-18 md:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-14 mt-[90px] sm:mt-[100px] md:mt-[105px] lg:mt-27.5">
      <div className="w-full max-w-[1120px] mx-auto">
        <div className="flex flex-col gap-16.5 sm:gap-16.5 md:gap-16.5 lg:gap-16.5 items-center">
          <h2 className="text-lg font-bold leading-lg text-[#020202] text-center">
            Universal Compatibility — Verified with Select Chargers
          </h2>

          <div className="w-full flex justify-center">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-16 lg:gap-16 items-start sm:items-start">
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                {column1?.map((item, index) => (
                  <p key={index} className="text-md font-normal leading-md text-[#020202]">
                    {item}
                  </p>
                ))}
              </div>

              <div className="flex gap-8.5 sm:gap-8.5 md:gap-8.5 lg:gap-8.5">
                <div className="flex flex-col gap-2">
                  {column2?.map((item, index) => (
                    <p key={index} className="text-md font-normal leading-md text-[#020202]">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  {column3?.map((item, index) => (
                    <p key={index} className="text-md font-normal leading-md text-[#020202]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}