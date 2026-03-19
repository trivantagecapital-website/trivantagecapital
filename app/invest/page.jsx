import React from "react";
import Image from "next/image";


const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">

        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal !font-serif">
          Invest With Us
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>

        <p className="text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed mb-8 font-medium ">
          Investing made effortless — open your account with ease.
        </p>

        <p className="text-base text-primary/70 max-w-[800px] leading-relaxed font-light">
          Opening a PMS account with Trivantage Capital is quick, simple, and
          hassle-free. With both Digital (Aadhaar-based E-sign) and Physical
          modes available, the process requires only a few basic documents.
          Our dedicated operations and client service teams ensure a smooth
          and seamless account opening experience.
        </p>

      </section>

      {/* Process Section */}
      <section className="bg-white py-20 border-y border-primary/5">

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

          <h2 className="serif-heading text-3xl text-primary mb-12 !font-serif">
            Account Opening Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

            {/* Connector Line */}
            <div className="hidden md:block absolute top-[24px] left-[15%] right-[15%] h-[1px] bg-primary/20 -z-10"></div>

            {/* Step 1 */}
            <div className="bg-background-light p-8 rounded border border-primary/5 relative">

              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-serif font-bold mb-6 mx-auto md:mx-0">
                1
              </div>

              <h3 className="text-xl font-bold text-primary mb-4 text-center md:text-left !font-serif">
                Submit Documents
              </h3>

              <p className="text-primary/70 text-sm leading-relaxed text-center md:text-left">
                Send us a scanned copy of your PAN, address proof, and
                cancelled cheque. Our team will verify the documents,
                get in touch for any additional details, and guide you
                on choosing between digital or physical account opening.
              </p>

            </div>

            {/* Step 2 */}
            <div className="bg-background-light p-8 rounded border border-primary/5 relative">

              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-serif font-bold mb-6 mx-auto md:mx-0">
                2
              </div>

              <h3 className="text-xl font-bold text-primary mb-4 text-center md:text-left !font-serif">
                Choose Mode
              </h3>

              <div className="space-y-4">

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2 text-center md:text-left">
                    Digital Mode
                  </h4>

                  <p className="text-primary/70 text-sm leading-relaxed text-center md:text-left">
                    Based on your details, we will prepare the online forms
                    and agreements for digital signatures. A few documents
                    may still require physical signing.
                  </p>
                </div>

                <div className="w-full h-[1px] bg-primary/10"></div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2 text-center md:text-left">
                    Physical Mode
                  </h4>

                  <p className="text-primary/70 text-sm leading-relaxed text-center md:text-left">
                    Based on your details, we will pre-fill the forms and
                    documents and send it over for your signatures.
                  </p>
                </div>

              </div>

            </div>

            {/* Step 3 */}
            <div className="bg-background-light p-8 rounded border border-primary/5 relative">

              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-serif font-bold mb-6 mx-auto md:mx-0">
                3
              </div>

              <h3 className="text-xl font-bold text-primary mb-4 text-center md:text-left !font-serif">
                Processing
              </h3>

              <p className="text-primary/70 text-sm leading-relaxed text-center md:text-left">
                Upon receipt of the documents, our team will process the
                paperwork quickly and set up your account.
              </p>

            </div>

          </div>
        </div>

      </section>

      {/* Resources & Contact */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">

          {/* Important Links */}
          <div className="lg:order-2 bg-background-light border border-primary/10 rounded p-8 lg:p-10 h-full">

            <h3 className="serif-heading text-2xl text-primary mb-8">
              Important Documents & Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="/invest/Trivantage%20Capital%20-%20Disclosure%20Document%20-%20April%202025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 text-primary/70 hover:text-primary transition-colors group border border-primary/10 rounded px-4 py-3 bg-white"
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
                  href="/invest/Fee-Calculation-Tool.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 text-primary/70 hover:text-primary transition-colors group border border-primary/10 rounded px-4 py-3 bg-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl opacity-60 group-hover:opacity-100">
                      description
                    </span>

                    <span className="border-b border-transparent group-hover:border-primary/20">
                      Fee Calculation Tool
                    </span>
                  </span>

                  <span className="material-symbols-outlined text-base opacity-50 group-hover:opacity-100">
                    open_in_new
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="/invest/Investor%20Charter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 text-primary/70 hover:text-primary transition-colors group border border-primary/10 rounded px-4 py-3 bg-white"
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

            </ul>

            <div className="mt-10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary/60 mb-4">
                Invest Using QR Code
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary/50 mb-2">
                    Kotak Mahindra Bank
                  </p>

                  <div className="relative w-full max-w-[240px] aspect-square border border-primary/10 rounded bg-white overflow-hidden shadow-sm">
                    <Image
                      src="/invest/QR%20-%20Kotak%20Mahindra%20Bank.jpg"
                      alt="Kotak Mahindra Bank QR Code"
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary/50 mb-2">
                    IndusInd Bank
                  </p>

                  <div className="relative w-full max-w-[240px] aspect-square border border-primary/10 rounded bg-white overflow-hidden shadow-sm">
                    <Image
                      src="/invest/QR%20-%20IndusInd%20Bank.jpg"
                      alt="IndusInd Bank QR Code"
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Box */}
          <div className="bg-primary text-white p-10 rounded lg:order-1 h-full flex flex-col justify-between min-h-[320px]">

            <h3 className="serif-heading text-2xl mb-6">
              Have Queries?
            </h3>

            <p className="text-white/80 mb-8 leading-relaxed">
              Our team is here to help you with any clarifications
              regarding the account opening process.
            </p>

            <div className="flex items-center gap-4">

              <span className="material-symbols-outlined text-3xl">
                call
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
                  Call Us
                </p>

                <a
                  href="tel:+912249034408"
                  className="text-2xl font-serif font-bold hover:opacity-80 transition-opacity"
                >
                  +91-22-4903 4408
                </a>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Page;