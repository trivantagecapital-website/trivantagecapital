import React from "react";
import InvestCallbackForm from "../../components/InvestCallbackForm";
import ExternalLink from "../../components/ExternalLink";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* ================= HERO + FORM ================= */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 md:pt-24 pb-0">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <h1 className="serif-heading text-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6 font-normal !font-serif">
              Invest With Us
            </h1>

            <div className="h-[1px] w-24 bg-primary/20 mb-6 sm:mb-8"></div>

            <p className="text-sm sm:text-base text-primary/70 max-w-[750px] leading-relaxed mb-8 sm:mb-10">
              Experience a bespoke investment journey tailored to your financial goals. 
              Our boutique approach ensures your capital is managed with institutional rigor and personal care.
            </p>

            {/* ONBOARDING */}
            <div>
              <h2 className="text-xl font-semibold text-primary mb-6">
                Onboarding Experience
              </h2>

              {/* JOURNEY */}
              <div className="bg-white border border-primary/10 rounded p-4 sm:p-6 space-y-6 sm:space-y-10">

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      Document Verification
                    </h4>
                    <p className="text-sm text-primary/70">
                      Seamless KYC process and automated verification of financial proofs through secure gateways.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      Preparation
                    </h4>
                    <p className="text-sm text-primary/70">
                      Personalized account setup and digital execution of investment management agreements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">
                      Processing
                    </h4>
                    <p className="text-sm text-primary/70">
                      Final compliance approval and immediate capital deployment into your chosen strategy.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-primary/10 rounded-xl p-5 sm:p-6 shadow-sm">

            <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
              Request a Callback
            </h3>

            <p className="text-sm text-primary/70 mb-4 sm:mb-6">
              Our team will contact you within 24 hours.
            </p>

            <InvestCallbackForm />

          </div>

        </div>

      </section>

      {/* Resources & Contact */}
      <section className="py-10 sm:py-12 md:py-14 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-stretch">

          {/* Important Links */}
          <div className="bg-white lg:order-2 bg-background-light border border-primary/10 rounded p-5 sm:p-6 md:p-8 lg:p-10 h-full">

            <h3 className="serif-heading text-2xl text-primary mb-8">
              Important Documents & Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="/invest/Trivantage%20Capital%20-%20Disclosure%20Document%20-%20April%202025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 text-primary hover:text-primary transition-colors group border border-primary/10 rounded px-4 py-3 bg-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl opacity-60 group-hover:opacity-100">
                      description
                    </span>
                    <span className="border-b border-transparent group-hover:border-primary/20">
                      Disclosure Document
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-base opacity-50 group-hover:opacity-100">
                    open_in_new
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/invest/Fee-Calculation-Tool.xlsx"
                  download="Fee-Calculation-Tool.xlsx"
                  className="flex items-center justify-between gap-3 text-primary hover:text-primary transition-colors group border border-primary/10 rounded px-4 py-3 bg-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl opacity-60 group-hover:opacity-100">
                      table_chart
                    </span>
                    <span className="border-b border-transparent group-hover:border-primary/20">
                      Fee Calculation Tool
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-base opacity-50 group-hover:opacity-100">
                    download
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/invest/Trivantage%20Capital%20-%20Investor%20Charter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 text-primary hover:text-primary transition-colors group border border-primary/10 rounded px-4 py-3 bg-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl opacity-60 group-hover:opacity-100">
                      description
                    </span>
                    <span className="border-b border-transparent group-hover:border-primary/20">
                      Investor Charter
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-base opacity-50 group-hover:opacity-100">
                    open_in_new
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/grievance"
                  className="flex items-center justify-between gap-3 text-primary hover:text-primary transition-colors group border border-primary/10 rounded px-4 py-3 bg-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl opacity-60 group-hover:opacity-100">
                      inbox
                    </span>
                    <span className="border-b border-transparent group-hover:border-primary/20">
                      Complaints Data
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-base opacity-50 group-hover:opacity-100">
                    arrow_forward
                  </span>
                </a>
              </li>

              <li>
                <ExternalLink
                  href="https://smartodr.in/login"
                  className="w-full flex items-center justify-between gap-3 text-primary hover:text-primary transition-colors group border border-primary/10 rounded px-4 py-3 bg-white cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl opacity-60 group-hover:opacity-100">
                      link
                    </span>
                    <span className="border-b border-transparent group-hover:border-primary/20">
                      Link to ODR Portal
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-base opacity-50 group-hover:opacity-100">
                    open_in_new
                  </span>
                </ExternalLink>
              </li>

              <li>
                <a
                  href="/invest/payment"
                  className="flex items-center justify-between gap-3 text-primary hover:text-primary transition-colors group border border-primary/10 rounded px-4 py-3 bg-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl opacity-60 group-hover:opacity-100">
                      qr_code_2
                    </span>
                    <span className="border-b border-transparent group-hover:border-primary/20">
                      Payment FAQ & UPI QR Code
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-base opacity-50 group-hover:opacity-100">
                    arrow_forward
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/invest/Grievance%20Redressal%20Mechanism.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 text-primary hover:text-primary transition-colors group border border-primary/10 rounded px-4 py-3 bg-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl opacity-60 group-hover:opacity-100">
                      policy
                    </span>
                    <span className="border-b border-transparent group-hover:border-primary/20">
                      Grievance Redressal Policy
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-base opacity-50 group-hover:opacity-100">
                    open_in_new
                  </span>
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="flex items-center justify-between gap-3 text-primary hover:text-primary transition-colors group border border-primary/10 rounded px-4 py-3 bg-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl opacity-60 group-hover:opacity-100">
                      gavel
                    </span>
                    <span className="border-b border-transparent group-hover:border-primary/20">
                      Code of Conduct
                    </span>
                  </span>
                  <span className="material-symbols-outlined text-base opacity-50 group-hover:opacity-100">
                    open_in_new
                  </span>
                </a>
              </li>

            </ul>

          </div>

          {/* Contact Box */}
          <div className="bg-white border border-primary/10 rounded p-6 sm:p-8 md:p-10 lg:order-1 h-full flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">

            <div>
              <div className="h-[1px] w-12 bg-primary/30 mb-8"></div>

              <h3 className="serif-heading text-2xl text-primary mb-4 !font-serif">
                Have Queries?
              </h3>

              <p className="text-primary leading-relaxed">
                Our team is here to help you with any clarifications
                regarding the account opening process.
              </p>

            </div>

            <div className="mt-6 flex flex-col gap-6">

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-xl text-primary">
                    call
                  </span>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-1">
                    Call Us
                  </p>

                  <a
                    href="tel:+912249034408"
                    className="text-xl font-serif font-semibold text-primary hover:text-primary transition-colors"
                  >
                    +91-22-4903 4408
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href="https://www.linkedin.com/company/trivantage-capital-management-india-pvt-ltd/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0 hover:bg-primary/15 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@TrivantageCapital"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-12 h-12 rounded-full bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0 hover:bg-primary/15 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                <div className="ml-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-1">
                    Follow Us
                  </p>
                  <p className="text-sm text-primary/70">
                    Stay connected on social media
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};


export default Page;