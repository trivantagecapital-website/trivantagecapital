import Image from "next/image";
import Link from "next/link";

const TEAM_MEMBERS = [
  {
    name: "Nikhil Johri",
    title: "Founder & Chief Investment Officer",
    href: "/nikhil",
    img: "/photos/nikhil.jpg",
  },
  {
    name: "Monalisa Shilov",
    title: "Chief Business Officer & Investment Specialist",
    href: "/monalisa",
    img: "/photos/monalisa.png",
  },
  {
    name: "Shridhar Iyer",
    title: "Chief Operating Officer",
    href: "/shridhar",
    img: "/Photos/shridhar.png",
  },
  {
    name: "Avadhoot Joshi",
    title: "Equity Analyst",
    href: "/avadhoot",
    img: "/team/avadhoot-joshi.jpg",
  },
  {
    name: "Harsh Bhutda",
    title: "Equity Analyst",
    href: "/harsh",
    img: "/team/harsh-bhutda.jpg",
  },
  {
    name: "Ashish Agarwal",
    title: "Senior Manager - Operations",
    href: "/aashish",
    img: "/photos/ashish.JPG",
  },
  {
    name: "Pushkar Joshi",
    title: "Manager - Operations",
    href: "/pushkar",
    img: "/photos/pushkar.JPG",
  },
];

const TeamMembersGrid = ({ currentHref }) => {
  const others = TEAM_MEMBERS.filter((m) => m.href !== currentHref);

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6 lg:px-10">
      <h3 className="serif-heading text-2xl text-primary mb-12 !font-serif">
        Meet the Team
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {others.map((member) => (
          <div key={member.href} className="flex flex-col items-center text-center group">
            <Link
              href={member.href}
              className="w-36 h-32 sm:w-40 sm:h-36 rounded-lg overflow-hidden mb-4 border border-primary/10 bg-background-light relative shrink-0 block"
            >
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="(max-width: 639px) 144px, 160px"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <h4 className="text-base font-bold text-primary mb-1 !font-serif">
              <Link href={member.href} className="hover:underline">
                {member.name}
              </Link>
            </h4>

            <p className="text-xs font-medium text-primary/60 uppercase tracking-widest leading-relaxed">
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembersGrid;
