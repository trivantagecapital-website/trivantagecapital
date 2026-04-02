import React from "react";

const PhilosophySection = () => {
  return (
    <section
      id="philosophy"
      className=" py-24 md:py-24 scroll-mt-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        
        {/* Philosophy Header */}
        <div className="max-w-[900px] mb-20 text-center md:text-left">
          <p className="text-primary/60 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Investment Philosophy
          </p>

          <h2 className="serif-heading text-primary text-4xl md:text-5xl lg:text-6xl mb-6 !font-serif">
            Research. Conviction. Growth.
          </h2>

          <p className="text-xl text-primary/80 mb-8 font-light">
            Turning insights into high-conviction investments that compound over time.
          </p>

          <p className="text-primary/70 max-w-[600px] leading-relaxed">
            At Trivantage Capital, our investment philosophy is more than a
            framework — it is a mindset. Four principles guide everything we do:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">

          {/* Pillar 1 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary opacity-40">
                auto_stories
              </span>
              <div className="h-[1px] flex-1 bg-primary/10"></div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-primary !font-serif">
              Intense Focus on Learning
            </h3>

            <div className="text-primary/70 leading-relaxed font-light text-base max-w-[480px]">
              <p className="mb-4">
                We constantly evolve to remain relevant in a rapidly changing
                investment landscape.
              </p>
              <p>
                Our research process is iterative, curious, and open-minded —
                ensuring we are always ahead of change, not behind it.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary opacity-40">
                trending_up
              </span>
              <div className="h-[1px] flex-1 bg-primary/10"></div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-primary !font-serif">
              Growth Mindset
            </h3>

            <div className="text-primary/70 leading-relaxed font-light text-base max-w-[480px]">
              <p className="mb-4">
                Just as we adopt a growth mindset ourselves, we seek it in the
                businesses we invest in.
              </p>
              <p>
                Consistent, industry-leading growth is a key filter in
                identifying tomorrow's leaders.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary opacity-40">
                handshake
              </span>
              <div className="h-[1px] flex-1 bg-primary/10"></div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-primary !font-serif">
              Strong Alignment with Investors
            </h3>

            <div className="text-primary/70 leading-relaxed font-light text-base max-w-[480px]">
              <p className="mb-4">
                We invest alongside our clients. Both the company and its
                founders have co-invested meaningfully in investment approaches
                we manage.
              </p>
              <p>
                This ensures complete alignment, true skin in the game, and
                shared conviction in every decision we make.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary opacity-40">
                verified_user
              </span>
              <div className="h-[1px] flex-1 bg-primary/10"></div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-primary font-display !font-serif">
  Premium on Quality
</h3>

            <div className="text-primary/70 leading-relaxed font-light text-base max-w-[480px]">
              <p className="mb-4">
                We are willing to pay a premium for quality of management and
                governance in our investable companies.
              </p>
              <p>
                We believe leadership integrity and governance standards are as
                important as financial performance in driving long-term wealth
                creation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;