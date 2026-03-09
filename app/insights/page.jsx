import React from "react";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal">
          Insights
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>

        <p className="text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed mb-8 font-medium italic">
          VantagePoint: Navigating Change with Clarity
        </p>

        <p className="text-base text-primary/70 max-w-[800px] leading-relaxed font-light">
          VantagePoint offers a curated view of markets, strategies, and ideas
          that shape our thinking at Trivantage Capital. It brings together
          in-depth research, long-term perspectives, and practical insights
          designed to help investors navigate change with confidence. Through
          VantagePoint, we aim to share not just information, but clarity —
          highlighting the trends and themes driving sustainable value creation
          in India's capital markets.
        </p>
      </section>

      {/* Insights List Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">

        <div className="border-t border-primary/10">

          {/* Item 1 */}
          <div className="group py-8 border-b border-primary/10 hover:bg-primary/5 transition-colors cursor-pointer">
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-2 block">
                  January 2025
                </span>

                <h3 className="text-xl md:text-2xl font-serif text-primary group-hover:text-primary/80 transition-colors">
                  Xxxxxxx xxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxx xxxxxxxxxx
                </h3>
              </div>

              <div className="flex items-center gap-2 text-primary/60 text-sm font-bold uppercase tracking-widest">
                Read More
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </div>

            </div>
          </div>

          {/* Item 2 */}
          <div className="group py-8 border-b border-primary/10 hover:bg-primary/5 transition-colors cursor-pointer">
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-2 block">
                  August 2024
                </span>

                <h3 className="text-xl md:text-2xl font-serif text-primary group-hover:text-primary/80 transition-colors">
                  Xxxxxxx xxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxx xxxxxxxxxx
                </h3>
              </div>

              <div className="flex items-center gap-2 text-primary/60 text-sm font-bold uppercase tracking-widest">
                Read More
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </div>

            </div>
          </div>

          {/* Item 3 */}
          <div className="group py-8 border-b border-primary/10 hover:bg-primary/5 transition-colors cursor-pointer">
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-2 block">
                  September 2023
                </span>

                <h3 className="text-xl md:text-2xl font-serif text-primary group-hover:text-primary/80 transition-colors">
                  Xxxxxxx xxxxxxxxxxxxxx xxxxxxxxx xxxxxxxxxx xxxxxxxxxx
                </h3>
              </div>

              <div className="flex items-center gap-2 text-primary/60 text-sm font-bold uppercase tracking-widest">
                Read More
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </div>

            </div>
          </div>

        </div>

      </section>

    </main>
  );
};

export default Page;