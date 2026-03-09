import React from "react";

const CTASection = () => {
  return (
    <section className="py-32 border-t border-primary/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col items-center text-center">
        
        <h3 className="serif-heading text-4xl md:text-5xl text-primary mb-8">
          Ready to experience our approach?
        </h3>

        <p className="text-primary/60 max-w-[600px] mb-12 font-light text-lg">
          Discover how our disciplined investment philosophy translates into
          meaningful results for your portfolio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          
          <a
            href="contact.html"
            className="bg-primary text-white px-10 py-4 rounded font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all"
          >
            Contact Our Team
          </a>

          <a
            href="offerings.html"
            className="border border-primary/20 text-primary px-10 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-primary/5 transition-all"
          >
            Explore Funds
          </a>

        </div>
      </div>
    </section>
  );
};

export default CTASection;