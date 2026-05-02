import React from "react";

export const metadata = {
  title: "Our Offering | Trivantage Capital",
  description:
    "Curated portfolios and disciplined execution — explore Trivantage Capital's investment offerings.",
};

const Page = () => {
  return (
    <main id="main-content" className="flex-1">
      
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        <h1 className="serif-heading text-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6 font-normal !font-serif">
          Curated Portfolio.<br />Disciplined Execution.
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mb-6 sm:mb-8"></div>

        <p className="text-base sm:text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed mb-6 sm:mb-8 font-medium">
          Portfolio shaped by learning, guided by quality, and built for compounding.
        </p>

        <p className="text-sm sm:text-base text-primary max-w-[800px] leading-relaxed font-light">
          Each discretionary investment approach reflects our research depth and sectoral insights,
          translating conviction into opportunity. With a clear focus on growth, governance, and
          alignment, we build portfolios that convert insight into sustainable compounding.
        </p>
      </section>

      {/* Offerings Sections */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20 md:pb-24">

        {/* Edge Portfolio */}
        <section id="edge-portfolio" className="mb-16 sm:mb-20 md:mb-24">
          <div className="group flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-16 items-start">
            
            <div className="w-full md:w-1/2 aspect-[4/3] rounded overflow-hidden bg-background-light relative">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrp5105VKpD3fY8oS6ZMr3VDILMxiFzcmBHJgWv5TWRUs_2USgnOOPoqQT3LalOD56Ryu7MgG0cO2eRUlWVe0_Rmk9f9y_453YLPPO75RtuYPnpD80LPPVsHIM_ebCXYmIV_wBFpnZygUzDzgvq1BWBoJr4hT0CTppxWaziAUj-YipTwa_3wcC2j39urWSYyjBeWFqMHHqSAzU5fpOyAHd0G_uqjbMWPr6sNzSg2BNPV5N2Ouq_xax_8ZSOWyQr2VlTIqS-BtGm3U')",
                }}
              ></div>
            </div>

            <div className="w-full md:w-1/2 pt-4">
              <h2 className="serif-heading text-3xl font-bold text-primary mb-6 !font-serif">
                Trivantage Capital Edge Portfolio
              </h2>

              <div className="text-primary leading-relaxed font-light space-y-4">
                <p>
                  Focuses on identifying businesses with strong competitive moats,
                  scalable business models, and robust governance standards.
                </p>

                <p>
                  The investment approach combines deep fundamental research with
                  disciplined risk management to select companies that demonstrate
                  sustainable earnings growth, prudent capital allocation, and the
                  ability to navigate market cycles.
                </p>

                <p>
                  By emphasizing quality and durability of business models, the
                  portfolio is positioned to generate superior risk-adjusted
                  returns and participate meaningfully in India's long-term
                  growth story.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Emerging Leaders Portfolio */}
        {/* <section id="emerging-leaders">
          <div className="group flex flex-col md:flex-row-reverse gap-6 sm:gap-8 lg:gap-16 items-start">
            
            <div className="w-full md:w-1/2 aspect-[4/3] rounded overflow-hidden bg-background-light relative">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBB5jLObQATwX75ko7nV7epkkXPvDqX1GdKbaLWQZUtvtl7UyNGOGsPpQJPxAdH0qMxND9oyv_jtMjUfIQqDOBcuCmHHloDPM9PaEJaEBu2maOyVu9F9FKaMc55eAzrp0XFgAruWXZadeT89PpP0ML8Z6ai5PHBuTgZ4DxHadC1wspjemU4E7rycB7TZkDIJT-_pjZ7HewS14kZzKK69ZCFvwU1O15akXbRY63ACKlo8HRdxLEXH-hijTEQb-qxhlDpICH-_pwqPYE')",
                }}
              ></div>
            </div>

            <div className="w-full md:w-1/2 pt-4">
              <h2 className="serif-heading text-3xl font-bold text-primary mb-6 !font-serif">
                Trivantage Capital Emerging Leaders Portfolio
              </h2>

              <div className="text-primary leading-relaxed font-light space-y-4">
                <p>
                  Crafted to spot companies at an inflection point—businesses
                  transitioning from promising challengers into future industry
                  leaders.
                </p>

                <p>
                  The portfolio emphasizes agility, innovation, and early-stage
                  scalability, investing in firms that benefit from structural
                  tailwinds and strong execution capabilities.
                </p>

                <p>
                  By capturing opportunities ahead of the curve, the strategy is
                  designed to generate outsized growth while maintaining a
                  disciplined approach to risk.
                </p>
              </div>
            </div>


          </div>
        </section> */}

         <a
              href="/invest"
              className="bg-primary text-white px-5 py-2.5 hover:opacity-90 transition-all text-[11px] font-semibold uppercase tracking-widest mt-10 sm:mt-12 md:mt-[50px] flex items-center gap-2 w-fit justify-center mx-auto"
            >
              Invest With Us
            </a>

      </div>
    </main>
  );
};

export default Page;