import React from "react";
import InvestCallbackForm from "@/components/InvestCallbackForm";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">

        <h1 className="serif-heading text-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6 font-normal !font-serif">
          Contact Us
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mb-6 sm:mb-8"></div>

        <div className="flex flex-col md:flex-row gap-8 items-start">

          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-2">
              Find Us
            </p>

            <address className="not-italic text-base sm:text-lg text-primary font-medium mb-4">
              508, Arcadia, NCPA Marg,<br />
              Nariman Point,<br />
              Mumbai - 400 021
            </address>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="text-sm font-bold uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
            >
              Get Directions
              <span className="material-symbols-outlined text-sm">
                open_in_new
              </span>
            </a>

          </div>

        </div>

      </section>

      {/* Contact Sections */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20 md:pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 sm:mb-16 md:mb-20">

          {/* Invest */}
          <div className="bg-white p-8 border border-primary/5 rounded grid grid-rows-subgrid row-span-3">

            <h3 className="serif-heading text-2xl text-primary mb-4 !font-serif">
              Invest With Us
            </h3>

            <p className="text-primary/70 text-sm leading-relaxed mb-6">
              Leverage our experience and expertise to grow and protect your
              wealth. To know more about how we can partner with you on your
              investment journey:
            </p>

            <div className="self-start">
              <a
                href="mailto:monalisa.shilov@trivantagecapital.com"
                className="text-primary font-bold hover:underline block mb-4 break-all"
              >
                monalisa.shilov@trivantagecapital.com
              </a>

              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary/60">
                  call
                </span>

                <a
                  href="tel:+912249034409"
                  className="text-primary font-bold hover:underline"
                >
                  +91-22-4903 4409
                </a>
              </div>
            </div>

          </div>

          {/* Partner */}
          <div className="bg-white p-8 border border-primary/5 rounded grid grid-rows-subgrid row-span-3">

            <h3 className="serif-heading text-2xl text-primary mb-4 !font-serif">
              Partner With Us
            </h3>

            <p className="text-primary/70 text-sm leading-relaxed mb-6">
              At Trivantage Capital, we collaborate with partners who aim to
              meet their client's evolving and sophisticated financial needs.
              To explore partnership opportunities:
            </p>

            <div className="self-start">
              <a
                href="mailto:monalisa.shilov@trivantagecapital.com"
                className="text-primary font-bold hover:underline block break-all"
              >
                monalisa.shilov@trivantagecapital.com
              </a>

              <div className="mt-4 h-6" aria-hidden="true"></div>
            </div>

          </div>

          {/* Existing Clients */}
          <div className="bg-white p-8 border border-primary/5 rounded grid grid-rows-subgrid row-span-3">

            <h3 className="serif-heading text-2xl text-primary mb-4 !font-serif">
              Existing Clients
            </h3>

            <p className="text-primary/70 text-sm leading-relaxed mb-6">
              For queries or clarifications, you may write to us at:
            </p>

            <div className="self-start">
              <a
                href="mailto:ops@trivantagecapital.com"
                className="text-primary font-bold hover:underline block"
              >
                ops@trivantagecapital.com
              </a>

              <div className="mt-4 h-6" aria-hidden="true"></div>
            </div>

          </div>

        </div>

        {/* Call Back Form */}
        <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-16 rounded border border-primary/10">

          <h3 className="serif-heading text-2xl sm:text-3xl text-primary mb-6 sm:mb-8 text-center !font-serif">
            Request a call back
          </h3>

          <InvestCallbackForm />

        </div>

      </section>

    </main>
  );
};

export default Page;