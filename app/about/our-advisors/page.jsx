import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal !font-serif">
          Our Advisors
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>

        <p className="text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed font-light">
          Our Advisory Board provides strategic guidance and seasoned perspective
          to Trivantage Capital. Its members bring deep industry expertise and
          independent insights that strengthen our long-term vision.
        </p>
      </section>

      {/* Advisor Profile */}
      <section className="bg-white py-20 border-y border-primary/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-4">
              <div className="aspect-[4/5] bg-background-light rounded-lg overflow-hidden relative w-full max-w-[420px] mx-auto lg:mx-0">
                <Image
                  src="/team/brijesh_mehraHD.jpg"
                  alt="Brijesh Mehra - Senior Advisor"
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
                  Brijesh Mehra
                </h2>

                <p className="text-primary/60 font-bold uppercase tracking-widest text-sm">
                  Senior Advisor
                </p>
              </div>

              <div className="text-primary/80 leading-relaxed font-light max-w-none space-y-6">
                <p>
                  Mr. Mehra brings with him a distinguished career in banking,
                  having held senior roles including Country Executive - India
                  and Southeast Asia/India Cluster Head at RBS. Most recently, he
                  led the Wholesale Banking division at RBL Bank, where he was
                  instrumental in shaping strategic lending initiatives across
                  sectors. His experience spans strategic lending, governance and
                  risk oversight, and deep exposure to Asian markets.
                </p>

                <p>
                  An alumnus of Delhi University and the Indian Institute of
                  Management Ahmedabad, Mr. Mehra combines strong domain
                  expertise with a sharp strategic lens.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Page;