import React from "react";
import { stripHtml, formatDate, getPostLink } from "@/lib/blogUtils";
import Image from "next/image";
import Link from "next/link";
import InsightsListSection from "@/components/InsightsListSection";

const WP_API_URL = process.env.WP_RECENT_POSTS_URL;

async function getPosts() {
  try {
    const res = await fetch(WP_API_URL, {
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    const data = await res.json();
    const posts = data.posts || [];
    return posts.filter(post =>
      !Object.values(post.categories || {}).some(c => c.slug?.toLowerCase() === 'careers')
    );
  } catch (err) {
    console.error('Failed to fetch posts:', err);
    return [];
  }
}


const Page = async ({ searchParams }) => {
 
  const posts = await getPosts();
  const featuredPost = posts[0] || null;
  const categories = Object.keys(featuredPost?.categories || {}).filter(
    (cat) => cat.toLowerCase() !== 'featured'
  );

  const category = categories[0] || 'Article';

  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        <div className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-8 sm:gap-10 md:gap-14 py-10 sm:py-14 md:py-20">
            <div className="w-full lg:max-w-[58%]">
              <h1 className="serif-heading text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6 font-normal !font-serif">
                Insights
              </h1>

              <div className="h-px w-20 sm:w-24 bg-white mb-6 sm:mb-8"></div>

              <p className="text-base sm:text-lg md:text-xl text-white max-w-200 leading-relaxed mb-6 sm:mb-8 font-medium">
                VantagePoint: Navigating Change with Clarity
              </p>

              <p className="text-sm sm:text-base text-white max-w-175 leading-relaxed font-light">
                VantagePoint offers a curated view of markets, strategies, and ideas
                that shape our thinking at Trivantage Capital. It brings together
                in-depth research, long-term perspectives, and practical insights
                designed to help investors navigate change with confidence. Through
                VantagePoint, we aim to share not just information, but clarity —
                highlighting the trends and themes driving sustainable value creation
                in India's capital markets.
              </p>
            </div>

            {/* Featured section */}
            {featuredPost && (
              <div className="w-full lg:max-w-105 bg-white/20 sm:bg-white/25 lg:bg-white/30 py-8 sm:py-10 lg:py-12 px-5 sm:px-6 lg:px-8 z-10 backdrop-blur-[1px]">
                <p className="w-full text-xs sm:text-sm font-medium tracking-widest text-white uppercase font-display border-b border-white/50 pb-2 mb-6 sm:mb-8">FEATURED</p>
                <div className="flex flex-col w-full max-w-sm mx-auto lg:mx-0">

                  {/* Image Container */}
                  <Link href={getPostLink(featuredPost, featuredPost.categories)} className="block overflow-hidden mb-5">
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100 rounded-sm">
                      <Image
                        src={featuredPost.featured_image || '/hero-skyscraper3.jpg'}
                        alt={featuredPost.title}
                        fill // Fills the container
                        className="object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </Link>

                  {/* Text Container */}
                  <div className='flex flex-col justify-between flex-1'>
                    <div className="flex flex-col gap-3">
                      {/* Metadata: Category | Date */}
                      <div className="flex flex-wrap items-center gap-y-1 text-[11px] sm:text-xs font-bold tracking-widest text-white uppercase font-display">
                        <span>{category}</span>
                        <span className="mx-2 text-white">|</span>
                        <span>{formatDate(featuredPost.date)}</span>
                      </div>

                      {/* Title */}
                      <Link href={getPostLink(featuredPost, featuredPost.categories)} className="block">
                        <h3 className="text-xl sm:text-2xl md:text-[1.3rem] font-semibold font-serif! text-white! leading-[1.2] hover:underline">
                          {featuredPost.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-sm sm:text-base text-white font-display leading-relaxed line-clamp-3">
                        {stripHtml(featuredPost.excerpt)}
                      </p>
                    </div>
                    {/* Read More Button */}
                    <Link
                      href={getPostLink(featuredPost, featuredPost.categories)}
                      className="group mt-6 sm:mt-8 inline-flex items-center text-[11px] sm:text-xs font-bold tracking-widest text-white uppercase font-display decoration-2 underline-offset-4 transition-all w-fit"
                    >
                      KNOW MORE
                      <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
        <img src="/AbstractLines.png" alt="decorative background image" className="pointer-events-none absolute bottom-0 md:-bottom-14 lg:-bottom-20 right-0 opacity-30 w-auto max-w-none" />
      </section>

      {/* Insights List Section */}
      <InsightsListSection />

    </main>
  );
};

export default Page;