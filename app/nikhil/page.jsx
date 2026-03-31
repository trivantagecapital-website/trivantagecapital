import React from "react";
import Image from "next/image";
import TeamMembersGrid from "@/components/TeamMembersGrid";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 !font-serif">
          Nikhil Johri
        </h1>
        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>
        <p className="text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed font-light">
          Founder & Chief Investment Officer
        </p>
      </section>

      {/* Profile Section */}
      <section className="bg-white py-20 border-y border-primary/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-4">
              <div className="aspect-4/5 bg-background-light rounded-lg overflow-hidden relative w-full max-w-[420px] mx-auto lg:mx-0">
                <Image
                  src="/Nikhil Johri.jpg"
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
                <h2 className="serif-heading text-4xl text-primary mb-2 !font-serif">
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
                  The name Trivantage reflects its vision—combining &ldquo;Tri&rdquo; (inspired by the Indian Tricolour) and &ldquo;Vantage Point&rdquo;—and its belief in India&apos;s rise as one of the world&apos;s top three economies.
                </p>
                <p className="font-medium">
                  He is an alumnus of IIM Ahmedabad (MBA, 1985–1987) and a member of The Institute of Chartered Accountants of India.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rest of the Team */}
      <TeamMembersGrid currentHref="/nikhil" />

    </main>
  );
};

export default Page;
