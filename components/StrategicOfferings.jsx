"use client";
import React from "react";
import { useResidency } from "@/hooks/useResidency";

const StrategicOfferings = () => {
  const { isUS, isLoaded } = useResidency();

  if (!isLoaded || isUS) return null;

  return (
    <section className="bg-primary/5 py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        
        <div className="border-b border-primary/10 pb-4 mb-16">
          <h2 className="!font-display text-primary text-5xl font-bold tracking-tight">
            Our Offerings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          

          {/* Card 1 */}
          <div className="group flex flex-col bg-white border border-primary/5 rounded p-8 lg:p-12 hover:shadow-2xl transition-all duration-500">
            
            <div className="h-64 w-full mb-8 overflow-hidden rounded bg-background-light">
              
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrp5105VKpD3fY8oS6ZMr3VDILMxiFzcmBHJgWv5TWRUs_2USgnOOPoqQT3LalOD56Ryu7MgG0cO2eRUlWVe0_Rmk9f9y_453YLPPO75RtuYPnpD80LPPVsHIM_ebCXYmIV_wBFpnZygUzDzgvq1BWBoJr4hT0CTppxWaziAUj-YipTwa_3wcC2j39urWSYyjBeWFqMHHqSAzU5fpOyAHd0G_uqjbMWPr6sNzSg2BNPV5N2Ouq_xax_8ZSOWyQr2VlTIqS-BtGm3U')",
                }}
                role="img" aria-label="Strategy Illustration"
              ></div>

            </div>

            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Strategy: Competitive Moats
            </span>

            <h3 className="text-primary text-2xl lg:text-3xl font-medium mb-4 serif-heading !font-serif">
              Edge Portfolio
            </h3>

            <p className="text-primary text-base leading-relaxed mb-8 flex-grow">
              Focusing on resilience and market dominance. We invest in
              established businesses with sustainable competitive moats and
              high entry barriers.
            </p>

            <div className="flex items-center">
              <a
                className="text-primary text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                href="/our-offering"
              >
                Know More
                <span className="material-symbols-outlined !text-lg">
                  arrow_forward
                </span>
              </a>
            </div>

          </div>

          {/* Card 2 */}
          <div className="group flex flex-col bg-white border border-primary/5 rounded p-8 lg:p-12 hover:shadow-2xl transition-all duration-500">
            
            <div className="h-64 w-full mb-8 overflow-hidden rounded bg-background-light">
              
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBB5jLObQATwX75ko7nV7epkkXPvDqX1GdKbaLWQZUtvtl7UyNGOGsPpQJPxAdH0qMxND9oyv_jtMjUfIQqDOBcuCmHHloDPM9PaEJaEBu2maOyVu9F9FKaMc55eAzrp0XFgAruWXZadeT89PpP0ML8Z6ai5PHBuTgZ4DxHadC1wspjemU4E7rycB7TZkDIJT-_pjZ7HewS14kZzKK69ZCFvwU1O15akXbRY63ACKlo8HRdxLEXH-hijTEQb-qxhlDpICH-_pwqPYE')",
                }}
                role="img" aria-label="Strategy Illustration"
              ></div>

            </div>

            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3">
              Strategy: Transitioning Challengers
            </span>

            <h3 className="text-primary text-2xl lg:text-3xl font-medium mb-4 serif-heading !font-serif">
              Emerging Leaders Portfolio
            </h3>

            <p className="text-primary text-base leading-relaxed mb-8 flex-grow">
              We identify businesses at an inflection point. These are transitioning
              challengers poised for market leadership through innovation,
              operational scaling, and sector tailwinds.
            </p>

            <div className="flex items-center">
              <a
                className="text-primary text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                href="/our-offering"
              >
                Know More
                <span className="material-symbols-outlined !text-lg">
                  arrow_forward
                </span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default StrategicOfferings;