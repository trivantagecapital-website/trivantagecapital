import React from "react";
import Image from "next/image";
import TeamMembersGrid from "@/components/TeamMembersGrid";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 !font-serif">
          Avadhoot Joshi
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
                  src="/team/avadhoot-joshi.jpg"
                  alt="Avadhoot Joshi - Equity Analyst"
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
                  Avadhoot Joshi
                </h2>
                <p className="text-primary/60 font-bold uppercase tracking-widest text-sm">
                  Equity Analyst
                </p>
              </div>

              <div className="text-primary/80 leading-relaxed font-light max-w-none space-y-6">
              <p>
                Avadhoot brings over five years of experience in fundamental, bottom-up equity research, with a focus on India’s small- and mid-cap universe. 

Prior to joining Trivantage Capital, he was part of the investment team at Bryanston Investments (the Pidilite Family Office), where he worked on a concentrated portfolio of quality-growth businesses across sectors including manufacturing, packaging, diagnostics, and consumer industries.

Earlier in his career, Avadhoot worked with Valeo India Pvt. Ltd. in the automotive sector, where he was involved in project execution, cost optimisation, and client program management for leading global OEMs such as General Motors, Renault, Volkswagen, and Ford.He holds a Post Graduate Program in Securities Markets from the National Institute of Securities Markets (NISM) and a Bachelor’s degree in Production Engineering from Pune University.

              </p>
                {/* Bio content */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rest of the Team */}
      <TeamMembersGrid currentHref="/avadhoot" />

    </main>
  );
};

export default Page;
