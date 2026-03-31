import React from "react";
import Image from "next/image";
import TeamMembersGrid from "@/components/TeamMembersGrid";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 !font-serif">
          Shridhar Iyer
        </h1>
        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>
        <p className="text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed font-light">
          Chief Operating Officer
        </p>
      </section>

      {/* Profile Section */}
      <section className="bg-white py-20 border-y border-primary/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-4">
              <div className="aspect-4/5 bg-background-light rounded-lg overflow-hidden relative w-full max-w-[420px] mx-auto lg:mx-0">
                <Image
                  src="/team/shridhar_iyer.jpg"
                  alt="Shridhar Iyer - Chief Operating Officer"
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
                  Shridhar Iyer
                </h2>
                <p className="text-primary/60 font-bold uppercase tracking-widest text-sm">
                  Chief Operating Officer
                </p>
              </div>

              <div className="text-primary/80 leading-relaxed font-light max-w-none space-y-6">
              <p>
                Shridhar is the Chief Operating Officer and Compliance Officer at Trivantage Capital, with over 14 years of experience in the asset management industry.

Prior to joining Trivantage Capital, he served as Head – Fund Operations and Information Technology at BNP Paribas Asset Management, India. In this role, he oversaw end-to-end client transaction processing and was responsible for delivering a seamless investment experience across retail, high-net-worth, and institutional client segments.

Shridhar has led and project-managed several critical cross-functional initiatives, including large-scale service provider migrations and the implementation of new regulatory requirements as well as changes to existing frameworks. He has also been responsible for managing and strengthening key service provider relationships, ensuring operational robustness, regulatory compliance, and scalability of the platform.

              </p>
                {/* Bio content */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rest of the Team */}
      <TeamMembersGrid currentHref="/shridhar" />

    </main>
  );
};

export default Page;
