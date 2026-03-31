import React from "react";
import Image from "next/image";
import TeamMembersGrid from "@/components/TeamMembersGrid";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 !font-serif">
          Ashish Agarwal
        </h1>
        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>
        <p className="text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed font-light">
          Senior Manager - Operations
        </p>
      </section>

      {/* Profile Section */}
      <section className="bg-white py-20 border-y border-primary/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-4">
              <div className="aspect-4/5 bg-background-light rounded-lg overflow-hidden relative w-full max-w-[420px] mx-auto lg:mx-0">
                <Image
                  src="/team/ashish_agarwal.jpg"
                  alt="Ashish Agarwal - Senior Manager Operations"
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
                  Ashish Agarwal
                </h2>
                <p className="text-primary/60 font-bold uppercase tracking-widest text-sm">
                  Senior Manager - Operations
                </p>
              </div>

              <div className="text-primary/80 leading-relaxed font-light max-y-none space-y-6">
              <p>
                Ashish brings over a decade of experience in portfolio management operations, with deep expertise across wealth management and institutional investment platforms.

Prior to joining Trivantage Capital, he served as Senior Manager – Operations at Kotak Mahindra Bank (Wealth Management), where he oversaw critical operational functions supporting portfolio management activities. 

Earlier in his career, he was part of the operations team at ASK Investment Managers and worked with Kotak Securities in Treasury and PMS operations, gaining hands-on experience across trade execution, settlements, reconciliations, and client servicing processes.Ashish holds a degree in Finance and a postgraduate qualification in Financial Management.

              </p>
                {/* Bio content */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rest of the Team */}
      <TeamMembersGrid currentHref="/aashish" />

    </main>
  );
};

export default Page;
