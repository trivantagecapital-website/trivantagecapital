import React from "react";
import Image from "next/image";
import TeamMembersGrid from "@/components/TeamMembersGrid";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 !font-serif">
          Monalisa Shilov
        </h1>
        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>
        <p className="text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed font-light">
          Chief Business Officer & Investment Specialist
        </p>
      </section>

      {/* Profile Section */}
      <section className="bg-white py-20 border-y border-primary/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-4">
              <div className="aspect-4/5 bg-background-light rounded-lg overflow-hidden relative w-full max-w-[420px] mx-auto lg:mx-0">
                <Image
                  src="/photos/monalisa.png"
                  alt="Monalisa Shilov - Chief Business Officer & Investment Specialist"
                  fill
                  sizes="(max-width: 1023px) 100vw, 420px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="serif-heading text-4xl text-primary mb-2 !font-serif">
                  Monalisa Shilov
                </h2>
                <p className="text-primary/60 font-bold uppercase tracking-widest text-sm">
                  Chief Business Officer & Investment Specialist
                </p>
              </div>

              <div className="text-primary/80 leading-relaxed font-light max-w-none space-y-6">

              <p>Monalisa is the Chief Business Officer at Trivantage Capital, with over 17 years of experience in the asset management industry. Prior to joining Trivantage Capital, she served as Head - Sales and Marketing at BNP Paribas Asset Management, India.

In her previous roles, she led business development and strategy execution across the firm's Mutual Fund and Portfolio Management Services businesses, and was closely involved in product development and validation. She also worked extensively as an investment specialist, partnering with investment teams to clearly articulate investment philosophy, portfolio positioning, and performance drivers to distributors and large investors. During her tenure at BNP Paribas Asset Management, she built strong relationships with key distribution houses and played a pivotal role in scaling assets across both debt and equity strategies.

Monalisa has deep expertise in the HNI distribution ecosystem and a strong track record of launching and scaling differentiated investment concepts, including those new to the market. Earlier in her career, she held senior sales, distribution, and investment-facing roles across several leading asset management firms in India, giving her a well-rounded perspective that bridges investments, products, and client needs.
</p>
                {/* Bio content */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rest of the Team */}
      <TeamMembersGrid currentHref="/monalisa" />

    </main>
  );
};

export default Page;
