'use client';
import Image from 'next/image';

type ImageLayout = 'default' | 'showcase';

interface BlogPost {
  id: number;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageLayout?: ImageLayout;
  category: string;
  readTime: string;
  title: string[];
  description: string[];
}

export default function LatestFromBlog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: '/images/mobile_app_ad_image.jpeg',
      imageWidth: 522,
      imageHeight: 1024,
      imageLayout: 'showcase',
      category: 'Insights',
      readTime: 'min read',
      title: ['EV Charging Needs Open', 'Source'],
      description: [
        'Open-source EV charging software like CitrineOS and',
        'AddisEV gives operators flexibility, interoperability, and',
        'control that closed SaaS platforms cannot match.',
      ],
    },
    {
      id: 2,
      image: '/images/img_image_global_a_168x344.png',
      imageWidth: 344,
      imageHeight: 168,
      category: 'Press',
      readTime: 'min read',
      title: ['S44 Energy Launches', 'AddisEV to Democratize', 'Access to EV Charging', 'Software'],
      description: [
        'Press release: AddisEV is the industry&apos;s first OaaS',
        'CSMS. Supports OCPP 1.6, 2.0.1, OCPI, and ISO 15118.',
        'Eliminates vendor lock-in and per-session fees.',
      ],
    },
    {
      id: 3,
      image: '/images/img_image_global_a_1.png',
      imageWidth: 344,
      imageHeight: 168,
      category: 'Press',
      readTime: 'min read',
      title: ['Q&A with Olga Haygood,', 'CEO of S44 Energy'],
      description: [
        'CEO Olga Haygood explains why 1 in 5 charging',
        'attempts fail, the importance of OCPP 2.0.1, and how',
        'open infrastructure solves EV charging&apos;s core',
        'problems.',
      ],
    },
  ];

  return (
    <section className="mt-15 w-full bg-primary-background py-16 sm:py-18 md:py-20 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-14">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-34 flex flex-col gap-[100px] sm:gap-[110px] md:gap-[115px] lg:gap-30.5">
          <div className="mt-34 flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
            <h2 className="text-center text-[28px] font-bold leading-[36px] text-text-inverse sm:text-left sm:text-[32px] sm:leading-[40px] md:text-[36px] md:leading-[44px] lg:text-4xl lg:leading-4xl">
              Latest from the Blog
            </h2>

            <button
              type="button"
              className="rounded-2xl border border-background-main bg-background-main px-7.5 py-3.5 text-sm font-semibold leading-sm text-primary-background transition-colors hover:bg-background-card"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 px-5 sm:grid-cols-2 sm:gap-12 md:gap-14 lg:grid-cols-3 lg:gap-17">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group/card flex cursor-default flex-col gap-7"
              >
                {post.imageLayout === 'showcase' ? (
                  <div className="addisev-blog-showcase relative overflow-hidden rounded-2xl p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.08] transition-all duration-300 ease-out sm:p-8 group-hover/card:shadow-[0_28px_80px_-12px_color-mix(in_srgb,var(--primary-accent)_22%,transparent)] group-hover/card:ring-primary-accent/45">
                    <div
                      className="addisev-blog-showcase-glow pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-300 group-hover/card:opacity-100"
                      aria-hidden
                    />
                    <div className="relative flex min-h-[200px] items-center justify-center sm:min-h-[240px]">
                      <Image
                        src={post.image}
                        alt={post.title.join(' ')}
                        width={post.imageWidth}
                        height={post.imageHeight}
                        className="h-auto w-full max-w-[220px] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out will-change-transform group-hover/card:scale-[1.045] sm:max-w-[260px]"
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 280px"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative overflow-hidden rounded-xl bg-secondary-background ring-1 ring-white/[0.06] transition-all duration-300 ease-out group-hover/card:shadow-[0_20px_50px_-12px_color-mix(in_srgb,var(--primary-accent)_14%,transparent)] group-hover/card:ring-primary-accent/35">
                    <div className="aspect-[344/168] w-full">
                      <Image
                        src={post.image}
                        alt={post.title.join(' ')}
                        width={post.imageWidth}
                        height={post.imageHeight}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      />
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-5.5">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-normal leading-xs text-text-inverse">{post.category}</p>
                    <div className="h-1 w-1 rounded-xs bg-text-muted" />
                    <p className="text-xs font-normal leading-xs text-text-muted">{post.readTime}</p>
                  </div>

                  <div className="flex flex-col">
                    {post.title.map((line, index) => (
                      <h3
                        key={index}
                        className="text-2xl font-bold leading-2xl text-text-inverse transition-colors duration-200 group-hover/card:text-[var(--accent-tint-bg)]"
                      >
                        {line}
                      </h3>
                    ))}
                  </div>

                  <div className="flex flex-col">
                    {post.description.map((line, index) => (
                      <p key={index} className="text-xs font-normal leading-xs text-text-inverse/85">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
