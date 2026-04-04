import React from "react";
import ComplaintDataTable from "@/components/ComplaintDataTable";
import TrendMonthlyTable from "@/components/TrendMonthlyTable";
import TrendYearlyTable from "@/components/TrendYearlyTable";

export const metadata = {
  title: "Complaint Data | Trivantage Capital",
  description: "Monthly complaint data of Portfolio Manager as per SEBI regulations.",
};

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-14 md:pb-16">
        <h1 className="serif-heading text-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6 font-serif!">
          Complaint Data
        </h1>

        <div className="h-px w-24 bg-primary/20 mb-6 sm:mb-8"></div>

        <p className="text-base sm:text-lg md:text-xl text-primary/80 max-w-200 leading-relaxed font-light">
          Information on Complaints Received by the Portfolio Manager
        </p>
      </section>

      {/* Data Section */}
      <section className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10 pb-12 sm:pb-16">
        <ComplaintDataTable />
      </section>

      {/* Trend Section */}
      <section className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20 md:pb-24">
        <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-primary mb-6 sm:mb-8 font-serif!">
          Trend of monthly disposal of complaints
        </h2>
        <TrendMonthlyTable />
      </section>

      {/* Yearly Trend Section */}
      <section className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20 md:pb-24">
        <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-primary mb-6 sm:mb-8 font-serif!">
          Trend of annual disposal of complaints
        </h2>
        <TrendYearlyTable />
      </section>

      {/* Notes */}
      <section className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20 md:pb-24">
        <div className="border-t border-primary/10 pt-6 sm:pt-8 text-sm sm:text-base text-primary/70 leading-relaxed space-y-3">
          <p className="font-bold">Notes:</p>
          <p><sup>^</sup> Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by total number of complaints resolved in the current month.</p>
          <p><sup>*</sup> Inclusive of complaints of previous months resolved in the current month.</p>
          <p><sup>#</sup> Inclusive of complaints pending as on the last day of the month.</p>
        </div>
      </section>

    </main>
  );
};

export default Page;
