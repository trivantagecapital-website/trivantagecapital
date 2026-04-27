import React from "react";
import Image from "next/image";

import { teamMembers } from "@/lib/teamConfig";
import TeamMembersGrid from "@/components/TeamMembersGrid";

const founder = teamMembers[0];

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        <h1 className="serif-heading text-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6 font-serif!">
          Our Team
        </h1>

        <div className="h-[1px] w-24 bg-primary/20 mb-6 sm:mb-8"></div>

        <p className="text-base sm:text-lg md:text-xl text-primary/80 max-w-[800px] leading-relaxed font-light">
          Guided by experience, conviction, and a shared commitment to long-term wealth creation.
        </p>
      </section>

      {/* Founder Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 border-y border-primary/5">
        <div className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-4">
              <div className="aspect-4/5 bg-background-light rounded-lg overflow-hidden relative w-full max-w-[420px] mx-auto lg:mx-0 block shadow-lg border-2 border-gray-400/50">
                <Image
                  src={founder.image}
                  alt={`${founder.name} - ${founder.designation}`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 420px"
                  className="object-cover"
                  style={{ objectPosition: founder.imagePosition || "center top" }}
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">

              <div>
                <h2 className="serif-heading text-4xl text-primary mb-2 font-serif!">
                  {founder.name}
                </h2>

                <p className="text-primary/70 font-bold uppercase tracking-widest text-sm">
                  {founder.designation}
                </p>
              </div>

              <div className="text-primary/80 leading-relaxed font-light max-w-none space-y-6">
                {founder.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className={
                      founder.lastParagraphBold && i === founder.bio.length - 1
                        ? "font-medium"
                        : undefined
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <TeamMembersGrid currentSlug={founder.slug} />

    </main>
  );
};

export default Page;
