import React from "react";
import JobAccordion from "@/components/JobAccordion";
import CareersForm from "@/components/CareersForm";

export const metadata = {
  title: "Careers | Trivantage Capital",
  description:
    "Open roles at Trivantage Capital. Apply to join our research and investment team.",
};

async function getCareersJobs() {
  try {
    const res = await fetch(process.env.WP_CAREERS_URL, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data.posts || [];
  } catch (err) {
    console.error("Failed to fetch careers posts:", err);
    return [];
  }
}

const Page = async () => {
  const jobs = await getCareersJobs();

  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">

        <h1 className="serif-heading text-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6 font-normal">
          Build Your Future With Us
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mb-6 sm:mb-8"></div>

        <p className="text-base sm:text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed mb-6 sm:mb-8 font-medium">
          A career with Trivantage Capital is more than just a job—it's an opportunity
          to be part of a dynamic journey.
        </p>

        <p className="text-base text-primary/70 max-w-[800px] leading-relaxed font-light">
          We seek passionate professionals who are eager to learn, grow, and help us
          deliver long-term value to our clients.
        </p>

      </section>

      <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20 md:pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 sm:gap-10 md:gap-12">

          {/* Openings */}
          <div>
            <h2 className="serif-heading text-3xl text-primary mb-8">
              Explore Current Openings
            </h2>
            <JobAccordion posts={jobs} />
          </div>

          {/* Application Form */}
          <div>
            <CareersForm jobs={jobs} />
          </div>

        </div>

      </section>

    </main>
  );
};

export default Page;
