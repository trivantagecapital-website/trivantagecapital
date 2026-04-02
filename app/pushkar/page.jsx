import React from "react";
import Image from "next/image";
import TeamMembersGrid from "@/components/TeamMembersGrid";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 !font-serif">
          Pushkar Joshi
        </h1>
        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>
        <p className="text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed font-light">
          Manager - Operations
        </p>
      </section>

      {/* Profile Section */}
      <section className="bg-white py-20 border-y border-primary/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-4">
              <div className="aspect-4/5 bg-background-light rounded-lg overflow-hidden relative w-full max-w-[420px] mx-auto lg:mx-0">
                <Image
                  src="/team/pushkar-joshi.JPG"
                  alt="Pushkar Joshi - Manager Operations"
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
                  Pushkar Joshi
                </h2>
                <p className="text-primary/60 font-bold uppercase tracking-widest text-sm">
                  Manager - Operations
                </p>
              </div>

              <div className="text-primary/80 leading-relaxed font-light max-w-none space-y-6">
              <p>
                Pushkar is part of the Operations and Client Servicing team at Trivantage Capital, supporting portfolio management processes and investor servicing.

He began his career at IL&FS, where he gained experience in fund accounting, working on NAV computation, reconciliations, reporting, and coordination with custodians and counterparties. This role provided him with a solid foundation in fund operations, process controls, and regulatory discipline.

He subsequently joined Systematix, where he was part of the operations function supporting trading, settlements, and back-office activities. His experience across both fund accounting and brokerage operations allows him to contribute effectively to operational efficiency as well as client servicing requirements.

He holds a degree in Commerce and continues to deepen his understanding of financial markets and investment operations.
              </p>
                {/* Bio content */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rest of the Team */}
      <TeamMembersGrid currentHref="/pushkar" />

    </main>
  );
};

export default Page;
