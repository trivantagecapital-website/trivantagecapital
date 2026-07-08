import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/teamConfig";

const TeamMembersGrid = ({ currentSlug }) => {
  const others = teamMembers.filter((m) => m.slug !== currentSlug);

  return (
    <section className="py-12 sm:py-16 md:py-24 max-w-300 mx-auto px-5 sm:px-6 lg:px-10">
      <h2 className="serif-heading text-xl sm:text-2xl text-primary mb-8 sm:mb-12 font-serif!">
        Meet the Team
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-12">
        {others.map((member) => (
          <div key={member.slug} className="flex flex-col items-center text-center group">
            <Link
              href={`/about/${member.slug}`}
              aria-label={member.name}
              className="w-36 h-32 sm:w-40 sm:h-36 md:w-60 md:h-52 rounded-lg overflow-hidden mb-4 border border-primary/10 bg-background-light relative shrink-0 block"
            >
              <Image
                src={member.image}
                alt=""
                fill
                sizes="(max-width: 639px) 144px, 160px"
                style={{ objectPosition: member.gridImagePosition || "top" }}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <h3 className="text-base font-bold text-primary mb-1 font-serif!">
              <Link href={`/about/${member.slug}`} className="hover:underline">
                {member.name}
              </Link>
            </h3>

            <p className="text-xs font-medium text-primary/70 uppercase tracking-widest leading-relaxed">
              {member.designation.split('&').map((part, i, arr) => (
                <span key={i} className="block">
                  {part.trim()}{i < arr.length - 1 ? ' &' : ''}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembersGrid;
