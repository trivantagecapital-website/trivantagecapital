import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal">
          Our Team
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>

        <p className="text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed font-light">
          Guided by experience, conviction, and a shared commitment to long-term wealth creation.
        </p>
      </section>

      {/* Founder Section */}
      <section className="bg-white py-20 border-y border-primary/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-4">
              <div className="aspect-[4/5] bg-background-light rounded-lg overflow-hidden relative w-full max-w-[420px] mx-auto lg:mx-0">
                <Image
                  src="/team/nikhil_johri.jpg"
                  alt="Nikhil Johri - Founder & Chief Investment Officer"
                  fill
                  sizes="(max-width: 1023px) 100vw, 420px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">

              <div>
                <h2 className="serif-heading text-4xl text-primary mb-2">
                  Nikhil Johri
                </h2>

                <p className="text-primary/60 font-bold uppercase tracking-widest text-sm">
                  Founder & Chief Investment Officer
                </p>
              </div>

              <div className="text-primary/80 leading-relaxed font-light max-w-none space-y-6">

                <p>
                  Nikhil is a veteran with over three decades of leadership experience across leading banks and global asset managers in India. He has headed the India businesses of Alliance Capital (now AllianceBernstein), ABN AMRO, and BNP Paribas, serving on their Indian Boards and Asian Management teams. He has also been a Director on the Board of the Association of Mutual Funds in India (AMFI).
                </p>

                <p>
                  Nikhil began his career at ICICI Limited (now ICICI Bank), managed treasury portfolios at ANZ Bank including a stint in Sydney, and later served as Treasurer of Great Eastern Shipping. In 2014, he founded Trivantage Capital, a portfolio management company focused on identifying small-cap equities with the potential to scale into mid- and large-caps.
                </p>

                <p>
                  The firm has built a decade-long track record of spotting multi-baggers across sectors, guided by a rigorous bottom-up process, disciplined due diligence, and a balance between diversification and concentration.
                </p>

                <p>
                  The name Trivantage reflects its vision—combining “Tri” (inspired by the Indian Tricolour) and “Vantage Point”—and its belief in India’s rise as one of the world’s top three economies.
                </p>

                <p className="font-medium">
                  He is an alumnus of IIM Ahmedabad (MBA, 1985–1987) and a member of The Institute of Chartered Accountants of India.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 lg:px-10">

        <h3 className="serif-heading text-3xl text-primary mb-16 text-center">
          Leadership Team
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

          {/* Team Member */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border border-primary/10 bg-background-light relative shrink-0">
              <Image
                src="/team/monalisa_shilov.jpg"
                alt="Monalisa Shilov - Chief Business Officer"
                fill
                sizes="(max-width: 639px) 128px, (max-width: 767px) 160px, 192px"
                className="object-cover object-top"
              />
            </div>

            <h4 className="text-xl font-bold text-primary mb-2">
              Monalisa Shilov
            </h4>

            <p className="text-sm font-medium text-primary/60 uppercase tracking-widest">
              Chief Business Officer
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border border-primary/10 bg-background-light relative shrink-0">
              <Image
                src="/team/shridhar_iyer.jpg"
                alt="Shridhar Iyer - COO & Compliance Officer"
                fill
                sizes="(max-width: 639px) 128px, (max-width: 767px) 160px, 192px"
                className="object-cover object-top"
              />
            </div>

            <h4 className="text-xl font-bold text-primary mb-2">
              Shridhar Iyer
            </h4>

            <p className="text-sm font-medium text-primary/60 uppercase tracking-widest">
              COO & Compliance Officer
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border border-primary/10 bg-background-light relative shrink-0">
              <Image
                src="/team/aahan-tulshan.jpg"
                alt="Aahan Tulshan - Equity Analyst"
                fill
                sizes="(max-width: 639px) 128px, (max-width: 767px) 160px, 192px"
                className="object-cover object-top"
              />
            </div>

            <h4 className="text-xl font-bold text-primary mb-2">
              Aahan Tulshan
            </h4>

            <p className="text-sm font-medium text-primary/60 uppercase tracking-widest">
              Equity Analyst
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border border-primary/10 bg-background-light relative shrink-0">
              <Image
                src="/team/harsh-bhutda.jpg"
                alt="Harsh Bhutda - Equity Analyst"
                fill
                sizes="(max-width: 639px) 128px, (max-width: 767px) 160px, 192px"
                className="object-cover object-top"
              />
            </div>

            <h4 className="text-xl font-bold text-primary mb-2">
              Harsh Bhutda
            </h4>

            <p className="text-sm font-medium text-primary/60 uppercase tracking-widest">
              Equity Analyst
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border border-primary/10 bg-background-light relative shrink-0">
              <Image
                src="/team/ashish_agarwal.jpg"
                alt="Ashish Agarwal - AVP Operations"
                fill
                sizes="(max-width: 639px) 128px, (max-width: 767px) 160px, 192px"
                className="object-cover object-top"
              />
            </div>

            <h4 className="text-xl font-bold text-primary mb-2">
              Ashish Agarwal
            </h4>

            <p className="text-sm font-medium text-primary/60 uppercase tracking-widest">
              AVP - Operations
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border border-primary/10 bg-background-light relative shrink-0">
              <Image
                src="/team/avadhoot-joshi.jpg"
                alt="Pushkar Joshi - Manager Operations"
                fill
                sizes="(max-width: 639px) 128px, (max-width: 767px) 160px, 192px"
                className="object-cover object-top"
              />
            </div>

            <h4 className="text-xl font-bold text-primary mb-2">
              Pushkar Joshi
            </h4>

            <p className="text-sm font-medium text-primary/60 uppercase tracking-widest">
              Manager - Operations
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Page;