import React from "react";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">

        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal">
          Build Your Future With Us
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>

        <p className="text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed mb-8 font-medium italic">
          A career with Trivantage Capital is more than just a job—it's an opportunity
          to be part of a dynamic journey.
        </p>

        <p className="text-base text-primary/70 max-w-[800px] leading-relaxed font-light">
          We seek passionate professionals who are eager to learn, grow, and help us
          deliver long-term value to our clients.
        </p>

      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Openings */}
          <div>

            <h2 className="serif-heading text-3xl text-primary mb-8">
              Explore Current Openings
            </h2>

            <div className="border border-primary/10 rounded-lg overflow-hidden">

              <div className="bg-white p-6 border-l-4 border-primary">

                <h3 className="text-xl font-bold text-primary mb-2">
                  Equity Research Analyst
                </h3>

                <div className="mt-4 space-y-4">

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">
                      About The Job
                    </h4>

                    <p className="text-sm text-primary/70 leading-relaxed">
                      Analyze financial data, research market trends, and identify
                      investment opportunities to support portfolio decision-making.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">
                      Key Requirements
                    </h4>

                    <ul className="list-disc list-inside text-sm text-primary/70 leading-relaxed">
                      <li>Strong analytical and financial modeling skills.</li>
                      <li>Deep understanding of equity markets.</li>
                      <li>Excellent communication and report writing abilities.</li>
                    </ul>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Application Form */}
          <div>

            <div className="bg-white p-8 rounded-lg border border-primary/5">

              <h3 className="serif-heading text-2xl text-primary mb-6">
                Apply Now
              </h3>

              <form className="space-y-6">

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-widest text-primary/60 mb-2"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    className="w-full bg-background-light border border-primary/10 rounded px-4 py-3 focus:ring-1 focus:ring-primary/20 transition-all text-primary placeholder-primary/30"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold uppercase tracking-widest text-primary/60 mb-2"
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-background-light border border-primary/10 rounded px-4 py-3 focus:ring-1 focus:ring-primary/20 transition-all text-primary placeholder-primary/30"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-widest text-primary/60 mb-2"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    className="w-full bg-background-light border border-primary/10 rounded px-4 py-3 focus:ring-1 focus:ring-primary/20 transition-all text-primary placeholder-primary/30"
                    placeholder="Your Email Address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cv"
                    className="block text-xs font-bold uppercase tracking-widest text-primary/60 mb-2"
                  >
                    Attach CV
                  </label>

                  <input
                    type="file"
                    id="cv"
                    className="w-full text-sm text-primary/70 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3.5 rounded font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all"
                >
                  Submit Application
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Page;