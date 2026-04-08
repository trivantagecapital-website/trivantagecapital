import React from 'react';

const YouTubeSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-18 bg-primary">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">

        <div className="max-w-[800px] mb-10 sm:mb-12 md:mb-16 text-center md:text-left">
          <p className="text-white/70 text-xs font-bold uppercase tracking-[0.3em] mb-4">
            WATCH
          </p>

          <h2 className="!font-display text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            From Our Desk
          </h2>

          <p className="text-lg sm:text-xl text-white/80 font-light">
            Perspectives on markets and investing from the Trivantage Capital team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

          <div className="relative w-full aspect-video rounded overflow-hidden border border-white/10 shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/bIHPMe3rTb8"
              title="Trivantage Capital Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="relative w-full aspect-video rounded overflow-hidden border border-white/10 shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/dc-LGEnlh2U"
              title="Trivantage Capital Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default YouTubeSection;
