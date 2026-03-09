import React from "react";

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal">
          Awards & Recognition
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mb-8"></div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="border border-primary/10 p-12 text-center rounded bg-white shadow-sm">

            <span className="material-symbols-outlined text-6xl text-primary/40 mb-6">
              emoji_events
            </span>

            <h2 className="serif-heading text-2xl text-primary mb-4">
              Most Innovative Product - India (2015)
            </h2>

            <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-6">
              Awarded by Asia Asset Management, Hong Kong
            </p>

            <p className="text-primary/70 leading-relaxed font-light mb-6">
              This recognition highlights Trivantage Capital's innovation in
              India's asset management industry. The award acknowledges
              outstanding players across Asia based on their achievements,
              capabilities, and overall impact in shaping the asset management
              sector within their respective countries.
            </p>

            <p className="text-primary/80 font-medium italic">
              This accolade underscores our commitment to creating
              differentiated investment solutions that deliver long-term value
              for clients.
            </p>

          </div>

          {/* Placeholder for Award Image */}
          <div className="aspect-square bg-background-light rounded-lg overflow-hidden relative flex items-center justify-center">
            <span className="material-symbols-outlined text-9xl text-primary/10">
              trophy
            </span>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Page;