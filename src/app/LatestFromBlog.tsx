'use client';
import Image from'next/image';

export default function LatestFromBlog() {
  const blogPosts = [
    {
      id: 1,
      image: '/images/img_image_global_a.png',
      category: 'Insights',
      readTime: 'min read',
      title: ['EV Charging Needs Open', 'Source'],
      description: [
        'Open-source EV charging software like CitrineOS and',
        'AddisEV gives operators flexibility, interoperability, and',
        'control that closed SaaS platforms cannot match.'
      ]
    },
    {
      id: 2,
      image: '/images/img_image_global_a_168x344.png',
      category: 'Press',
      readTime: 'min read',
      title: ['S44 Energy Launches', 'AddisEV to Democratize', 'Access to EV Charging', 'Software'],
      description: [
        'Press release: AddisEV is the industry&apos;s first OaaS',
        'CSMS. Supports OCPP 1.6, 2.0.1, OCPI, and ISO 15118.',
        'Eliminates vendor lock-in and per-session fees.'
      ]
    },
    {
      id: 3,
      image: '/images/img_image_global_a_1.png',
      category: 'Press',
      readTime: 'min read',
      title: ['Q&A with Olga Haygood,', 'CEO of S44 Energy'],
      description: [
        'CEO Olga Haygood explains why 1 in 5 charging',
        'attempts fail, the importance of OCPP 2.0.1, and how',
        'open infrastructure solves EV charging&apos;s core',
        'problems.'
      ]
    }
  ]

  return (
    <section className="w-full bg-[#020202] py-16 sm:py-18 md:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-14 mt-15">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-[100px] sm:gap-[110px] md:gap-[115px] lg:gap-30.5 mb-34">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 mt-34">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-4xl font-bold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-4xl text-[#ffffff]">
              Latest from the Blog
            </h2>

            <button className="bg-[#ffffff] border border-[#ffffff] rounded-2xl px-7.5 py-3.5 text-sm font-semibold leading-sm text-[#000000] hover:bg-[#f5f5f5] transition-colors">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-14 lg:gap-17 px-5">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col gap-7">
                <Image
                  src={post.image}
                  alt={post.title.join(' ')}
                  width={344}
                  height={168}
                  className="w-full rounded-lg"
                />

                <div className="flex flex-col gap-5.5 sm:gap-5.5 md:gap-5.5 lg:gap-5.5">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-normal leading-xs text-[#ffffff]">
                      {post.category}
                    </p>
                    <div className="w-1 h-1 bg-[#b3b3b3] rounded-xs" />
                    <p className="text-xs font-normal leading-xs text-[#b3b3b3]">
                      {post.readTime}
                    </p>
                  </div>

                  <div className="flex flex-col">
                    {post.title.map((line, index) => (
                      <h3 key={index} className="text-2xl font-bold leading-2xl text-[#ffffff]">
                        {line}
                      </h3>
                    ))}
                  </div>

                  <div className="flex flex-col">
                    {post.description.map((line, index) => (
                      <p key={index} className="text-xs font-normal leading-xs text-[#ffffff]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}