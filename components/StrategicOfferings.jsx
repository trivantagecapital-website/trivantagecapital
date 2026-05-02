"use client";
import React from "react";
import { useResidency } from "@/hooks/useResidency";

const StrategicOfferings = () => {
  const { isUS, isLoaded } = useResidency();

  if (!isLoaded || isUS) return null;

  return (
    <section className="bg-primary/5 py-16 sm:py-20 md:py-23">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">

        <div className="border-b border-primary/10 pb-4 mb-10 sm:mb-12 md:mb-16">
          <h2 className="!font-display text-primary text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Our Offering
          </h2>
        </div>

        {/* Edge Portfolio Card */}
        <div className="group bg-white border border-primary/5 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col md:flex-row">

            {/* Image */}
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[400px] overflow-hidden bg-background-light">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrp5105VKpD3fY8oS6ZMr3VDILMxiFzcmBHJgWv5TWRUs_2USgnOOPoqQT3LalOD56Ryu7MgG0cO2eRUlWVe0_Rmk9f9y_453YLPPO75RtuYPnpD80LPPVsHIM_ebCXYmIV_wBFpnZygUzDzgvq1BWBoJr4hT0CTppxWaziAUj-YipTwa_3wcC2j39urWSYyjBeWFqMHHqSAzU5fpOyAHd0G_uqjbMWPr6sNzSg2BNPV5N2Ouq_xax_8ZSOWyQr2VlTIqS-BtGm3U')",
                }}
                role="img"
                aria-label="Strategy Illustration"
              ></div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
              <span className="text-primary/80 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Strategy: Competitive Moats
              </span>

              <h3 className="text-primary text-2xl sm:text-3xl lg:text-4xl font-medium mb-5 serif-heading !font-serif">
                Edge Portfolio
              </h3>

              <div className="h-[2px] w-12 bg-primary/20 mb-5"></div>

              <p className="text-primary/80 text-base sm:text-lg leading-relaxed mb-8">
                Focusing on resilience and market dominance. We invest in
                established businesses with sustainable competitive moats and
                high entry barriers.
              </p>

              <div>
                <a
                  className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 hover:opacity-90 transition-opacity"
                  href="/our-offering"
                >
                  Know More
                  <span className="material-symbols-outlined !text-base" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicOfferings;