import React from "react";
import Image from "next/image";
import TeamMembersGrid from "@/components/TeamMembersGrid";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 !font-serif">
          Harsh Bhutda
        </h1>
        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>
        <p className="text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed font-light">
          Equity Analyst
        </p>
      </section>

      {/* Profile Section */}
      <section className="bg-white py-20 border-y border-primary/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-4">
              <div className="aspect-4/5 bg-background-light rounded-lg overflow-hidden relative w-full max-w-[420px] mx-auto lg:mx-0">
                <Image
                  src="/team/harsh-bhutda.jpg"
                  alt="Harsh Bhutda - Equity Analyst"
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
                  Harsh Bhutda
                </h2>
                <p className="text-primary/60 font-bold uppercase tracking-widest text-sm">
                  Equity Analyst
                </p>
              </div>

              <div className="text-primary/80 leading-relaxed font-light max-w-none space-y-6">
              <p>
                Harsh is a finance professional with a strong academic foundation and a disciplined, research-oriented approach to capital markets. He has cleared all three levels of the CFA Program, ranking in the top decile in both Level I and Level II.

A B.Tech graduate from VJTI, Harsh brings analytical rigour, structured thinking, and a deep interest in understanding businesses and long-term value creation.

He has been consistently engaged in finance-related pursuits throughout his academic journey and continues to build expertise across investment analysis and market dynamics. Outside of work, he maintains an active interest in sports and is involved in community-oriented initiatives.

              </p>
                {/* Bio content */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rest of the Team */}
      <TeamMembersGrid currentHref="/harsh" />

    </main>
  );
};

export default Page;
