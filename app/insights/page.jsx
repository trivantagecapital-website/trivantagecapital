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
    return data.posts || [];
  } catch (err) {
    console.error('Failed to fetch posts:', err);
    return [];
  }
}

async function getFeaturedPost() {
  const posts = await getPosts();
  return posts.find(post => {
    const categories = Object.keys(post.categories || {}).map(cat => cat.toLowerCase());
    return categories.includes('featured');
  }) || null;
}

const Page = async () => {

  const posts = await getPosts();
  const featuredPost = await getFeaturedPost();
  const categories = Object.keys(featuredPost.categories || {}).filter(
    (cat) => cat.toLowerCase() !== 'featured'
  );

  const category = categories[0] || 'Article';

  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="relative bg-primary">
        <div className="max-w-[1200px] mx-auto flex justify-between">
          <div className="py-20">
            <h1 className="serif-heading text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal">
              Insights
            </h1>

            <div className="h-[1px] w-24 bg-white mb-8"></div>

            <p className="text-lg md:text-xl text-white max-w-[800px] leading-relaxed mb-8 font-medium">
              VantagePoint: Navigating Change with Clarity
            </p>

            <p className="text-base text-white max-w-[700px] leading-relaxed font-light">
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
          <div className="h-full bg-white/30 py-20 px-8 z-10">
            <p className="w-sm text-sm font-medium tracking-widest text-white uppercase font-display border-b border-white/50 pb-2 mb-8 ">FEATURED</p>
            {featuredPost && (
              <div className="flex flex-col w-full max-w-sm mx-auto sm:mx-0">

                {/* Image Container */}
                <Link href={getPostLink(featuredPost, featuredPost.categories)} className="block overflow-hidden mb-5">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-sm">
                    <Image
                      src={featuredPost.featured_image || '/hero-skyscraper.png'}
                      alt={featuredPost.title}
                      fill // Fills the container
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </Link>

                {/* Text Container */}
                <div className='flex flex-col justify-between flex-1'>
                  <div className="flex flex-col gap-3">
                    {/* Metadata: Category | Date */}
                    <div className="flex items-center text-xs font-bold tracking-widest text-white uppercase font-display">
                      <span>{category}</span>
                      <span className="mx-2 text-white">|</span>
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>

                    {/* Title */}
                    <Link href={getPostLink(featuredPost, featuredPost.categories)} className="block">
                      <h3 className="text-2xl md:text-[1.3rem] font-semibold !font-serif !text-white leading-[1.15] hover:underline">
                        {featuredPost.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-base text-white font-display leading-relaxed line-clamp-3">
                      {stripHtml(featuredPost.excerpt)}
                    </p>
                  </div>
                  {/* Read More Button */}
                  <Link
                    href={getPostLink(featuredPost, featuredPost.categories)}
                    className="group mt-8 inline-flex items-center text-xs font-bold tracking-widest text-white uppercase font-display decoration-2 underline-offset-4 transition-all w-fit"
                  >
                    KNOW MORE
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

            )}
          </div>
        </div>
        <img src="/AbstractLines.png" alt="" className="absolute -bottom-20 opacity-30"/>
      </section>

      {/* Insights List Section */}
      <InsightsListSection />

    </main>
  );
};

export default Page;