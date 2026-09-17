import React from "react";

export const metadata = {
  title: "List of Empanelled Distributors | Trivantage Capital",
  description:
    "List of distributors empanelled with Trivantage Capital, along with their APRN, address, contact details and date of empanelment.",
};

const DISTRIBUTORS = [
  {
    name: "Agatsu Wealth Services LLP",
    aprn: "APRN07347",
    address:
      "4th Floor, Unit O-438, Phase 1, Boulevard Part of Towers, Sadhuvaswani Road, Ghorpadi, Pune, 411001",
    phones: [{ label: "+91 9765555651", href: "tel:+919765555651" }],
    empanelledOn: "14-Jan-26",
  },
  {
    name: "Centrum Wealth Ltd.",
    aprn: "APRN02283",
    address:
      "Centrum House, CST Road, Vidyanagari Marg, Kalina, Santacruz East, Mumbai 400098",
    phones: [{ label: "+91 9619561666", href: "tel:+919619561666" }],
    empanelledOn: "21-Dec-15",
  },
  {
    name: "Fermat Prime Enterprises Pvt. Ltd.",
    aprn: "APRN03493",
    address: "155, Sahyog Apartment, Mayur Vihar, Phase 1, Delhi - 110091",
    phones: [{ label: "+91 9810875858", href: "tel:+919810875858" }],
    empanelledOn: "02-Jul-24",
  },
  {
    name: "Greenback Capital LLP",
    aprn: "APRN01863",
    address: "401-C, Eastern Court, Tejpal Road, Vileparle East, Mumbai - 400057",
    phones: [{ label: "022-40060087", href: "tel:+912240060087" }],
    empanelledOn: "15-Jun-23",
  },
  {
    name: "LGT Wealth India Pvt. Ltd.",
    aprn: "APRN01500",
    address: "7th Floor, A Block, Shiv Sagar Estate, Worli, Mumbai - 400018",
    phones: [{ label: "022-50941000", href: "tel:+912250941000" }],
    empanelledOn: "21-Dec-23",
  },
  {
    name: "Neo Wealth Management Pvt. Ltd.",
    aprn: "APRN00292",
    address:
      "903 B Wing, 9th Floor, Marathon Futurex, Mafatlal Mills Compound, N. M. Joshi Marg, Lower Parel, Mumbai - 400013",
    phones: [{ label: "022-66423600", href: "tel:+912266423600" }],
    empanelledOn: "09-Nov-22",
  },
  {
    name: "Neo Wealth Partners Pvt. Ltd.",
    aprn: "APRN00269",
    address:
      "903 B Wing, Marathon Futurex, Mafatlal Mills Compound, N. M. Joshi Marg, Lower Parel, Mumbai - 400013",
    phones: [{ label: "022-66423600", href: "tel:+912266423600" }],
    empanelledOn: "08-Feb-23",
  },
  {
    name: "Nuvama Wealth and Investment Ltd.",
    aprn: "APRN00984",
    address:
      "8th Floor, 801-804, Wing A, Building No. 3, Inspire BKC, G Block, Bandra Kurla Complex, Bandra East, Mumbai 400050",
    phones: [{ label: "022-69223155", href: "tel:+912269223155" }],
    empanelledOn: "19-Nov-18",
  },
  {
    name: "PA Wealth Pvt. Ltd.",
    aprn: "APRN04632",
    address:
      "804, 8th Floor, Apra Tower, Feroj Gandhi Market, Ludhiana, Punjab - 141001",
    phones: [{ label: "+91 9779945039", href: "tel:+919779945039" }],
    empanelledOn: "21-Jul-25",
  },
  {
    name: "Parami Financial Services Pvt. Ltd.",
    aprn: "APRN03327",
    address:
      "Office No. 404, Persipolis Building, Plot No. 74, Sector 17, Vashi, Navi Mumbai - 400703",
    phones: [{ label: "022-49677421", href: "tel:+912249677421" }],
    empanelledOn: "26-May-23",
  },
  {
    name: "Spark PWM Pvt. Ltd.",
    aprn: "APRN00662",
    address:
      "No. 1, 3rd Floor, First Crescent Park Road, Gandhi Nagar, Adyar, Chennai 600020",
    phones: [{ label: "+91 9167944394", href: "tel:+919167944394" }],
    empanelledOn: "23-Jun-23",
  },
  {
    name: "Wealth1",
    aprn: "APRN06193",
    address:
      "911, One Lodha Place, Senapati Bapat Marg, Delisle Road, Lower Parel, Mumbai 400013",
    phones: [{ label: "+91 9872917500", href: "tel:+919872917500" }],
    empanelledOn: "29-Jun-26",
  },
  {
    name: "Trufid Services Pvt. Ltd.",
    aprn: "APRN01278",
    address:
      "4th Floor, 409, Kanakia Wall Street, Wing A, Mahakali Caves Road, Andheri East, Mumbai 400093",
    phones: [{ label: "+91 7738987360", href: "tel:+917738987360" }],
    emails: ["madhuri@trufid.com", "tanveermonga@gmail.com"],
    empanelledOn: "31-Aug-26",
  },
];

const Page = () => {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero Section */}
      <section className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-14 md:pb-16">
        <h1 className="serif-heading text-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6 font-serif!">
          List of Empanelled Distributors
        </h1>

        <div className="h-px w-24 bg-primary/20"></div>
      </section>

      {/* Distributors Table */}
      <section className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10 pb-12 sm:pb-16">
        <div
          className="overflow-x-auto rounded-lg border border-primary/10"
          tabIndex={0}
          role="region"
          aria-label="List of empanelled distributors (scrollable)"
        >
          <table className="w-full text-sm font-sans border-collapse min-w-[900px]">
            <caption className="sr-only">
              List of distributors empanelled with Trivantage Capital, with
              APRN, address, contact details and date of empanelment
            </caption>
            <thead className="sticky top-0">
              <tr className="bg-primary text-white">
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest"
                >
                  Distributor Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest whitespace-nowrap"
                >
                  Distributor APRN
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest"
                >
                  Distributor Address
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest whitespace-nowrap"
                >
                  Contact Details
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-widest whitespace-nowrap"
                >
                  Date of Empanelment
                </th>
              </tr>
            </thead>
            <tbody>
              {DISTRIBUTORS.map((d, i) => (
                <tr
                  key={d.aprn + d.name}
                  className={`border-b border-primary/5 align-top ${
                    i % 2 === 1 ? 'bg-primary/[0.03]' : 'bg-white'
                  }`}
                >
                  <th
                    scope="row"
                    className="px-4 py-3 text-left font-semibold text-primary min-w-[190px]"
                  >
                    {d.name}
                  </th>
                  <td className="px-4 py-3 text-primary/70 whitespace-nowrap">
                    {d.aprn}
                  </td>
                  <td className="px-4 py-3 text-primary/70 min-w-[280px] leading-relaxed">
                    {d.address}
                  </td>
                  <td className="px-4 py-3 text-primary/70 whitespace-nowrap">
                    <div className="space-y-1">
                      {d.phones.map((p) => (
                        <div key={p.href}>
                          <a
                            href={p.href}
                            className="border-b border-transparent hover:border-primary/30 hover:text-primary transition-colors"
                          >
                            {p.label}
                          </a>
                        </div>
                      ))}
                      {d.emails?.map((email) => (
                        <div key={email}>
                          <a
                            href={`mailto:${email}`}
                            className="border-b border-transparent hover:border-primary/30 hover:text-primary transition-colors"
                          >
                            {email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-primary/70 whitespace-nowrap">
                    {d.empanelledOn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Back Link */}
      <section className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20 md:pb-24">
        <a
          href="/invest"
          className="inline-flex items-center gap-2 text-primary text-sm font-sans border-b border-primary/20 hover:border-primary/60 transition-colors"
        >
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            arrow_back
          </span>
          Back to Invest With Us
        </a>
      </section>

    </main>
  );
};

export default Page;
