import React from "react";

export const metadata = {
  title: "Website Disclaimer | Trivantage Capital",
  description:
    "Website Disclaimer for Trivantage Capital — important information about general use, no solicitation, performance disclaimers and regulatory matters.",
};

const sections = [
  {
    id: 1,
    title: "General Information Only",
    items: [
      "All information, material, commentary and content published, distributed or otherwise made available on this website are for general informational purposes only and for your personal, non-commercial use.",
      "Nothing on this website constitutes, or should be construed as, an offer to sell, a solicitation to buy, a recommendation, or an invitation to enter into any transaction in securities, financial products or investment products.",
      "Nothing on this website constitutes investment advice, portfolio advice, legal advice, tax advice, accounting advice, or any other professional advice.",
    ],
  },
  {
    id: 2,
    title: "No Solicitation",
    items: [
      "By accessing this website, you acknowledge that you are doing so on your own initiative and that there has been no solicitation, inducement or advertisement by Trivantage Capital to access the website or act on any information contained in it.",
      "This website is not directed at any person in any jurisdiction where its publication or availability would be contrary to law or regulation.",
    ],
  },
  {
    id: 3,
    title: "Performance and Returns Disclaimer",
    items: [
      "Any reference to past performance, portfolio performance, strategy performance, back-tested data, model portfolio outcomes or any historical data is provided for information purposes only and should not be relied upon as an indication or guarantee of future results.",
      "Past performance does not indicate or guarantee future performance. Actual performance and returns may vary materially.",
      "Any target returns, expected returns, projections, illustrative outcomes, simulations or hypothetical examples, if mentioned anywhere on the website, are forward-looking in nature, are based on assumptions, and are not assured, guaranteed or promised outcomes.",
      "Investment values may go up or down and investors may lose part or all of their capital depending on the nature of the investment and market conditions.",
    ],
  },
  {
    id: 4,
    title: "Market Views and Forward-Looking Statements",
    items: [
      "Any market views, commentary, opinions, outlooks or statements regarding trends, sectors, securities, macroeconomic conditions or investment themes reflect judgement as of the date stated, or if no date is stated, as of the date of publication.",
      "Such views are subject to change without notice and may no longer be current or valid at the time you access them.",
      "Market commentary is not intended to predict future events or to serve as the sole basis for any investment decision.",
    ],
  },
  {
    id: 5,
    title: "Client Relationship and Regulatory Documentation",
    items: [
      "Any portfolio management or related services that may be offered by Trivantage Capital are subject to applicable law, regulatory requirements, internal processes and the execution of definitive client documentation.",
      "The relationship between a portfolio manager and a client is governed by the applicable agreement, disclosures and statutory documentation, and not by this website alone.",
    ],
  },
  {
    id: 6,
    title: "Fraud and Impersonation Warning",
    items: [
      "Trivantage Capital, its directors, employees, representatives and authorised persons do not offer assured or guaranteed returns, stock tips, trading calls, overnight wealth schemes or payments in exchange for jobs, meetings or access to personnel.",
      "Trivantage Capital does not ask investors or applicants to transfer money to personal accounts or to make cash payments for investments, employment opportunities or related services.",
      "Any communication, website, account, profile, group or person claiming to represent Trivantage Capital and offering such services should be treated with caution.",
      "If you become aware of any impersonation, misuse, fraudulent communication or suspicious activity in the name of Trivantage Capital, you should report the matter to the appropriate law enforcement authorities and also notify Trivantage Capital at the contact details published on the website.",
    ],
  },
  {
    id: 7,
    title: "Accuracy, Completeness and Liability",
    items: [
      "While reasonable care may be taken in preparing content for this website, Trivantage Capital does not represent or warrant that any information on the website is accurate, complete, current or error-free.",
      "Content may be changed, updated or withdrawn without notice.",
      "Any action taken by you based on information on this website is entirely at your own risk. To the fullest extent permitted by law, Trivantage Capital shall not be liable for any loss or damage arising directly or indirectly from the use of, or reliance on, any content available on this website.",
    ],
  },
  {
    id: 8,
    title: "Third-Party Links",
    items: [
      "This website may contain links to third-party websites or platforms for convenience only. Trivantage Capital does not control or endorse, and is not responsible for, the content, privacy practices, security or availability of any third-party website.",
    ],
  },
  {
    id: 9,
    title: "Contact",
    items: [
      "For questions regarding this disclaimer, or to report suspected impersonation or fraudulent activity in the name of Trivantage Capital, please use the official contact details published on the website.",
    ],
  },
];

export default function RegulatoryPage() {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-6">
          Legal
        </p>
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal">
          Website Disclaimer
        </h1>
        <div className="h-[1px] w-24 bg-primary/20 mb-6"></div>
        <p className="text-base text-primary/60 font-light">
          Trivantage Capital
        </p>
      </section>

      {/* Content */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">
        <div className="max-w-[800px]">

          {/* Intro box */}
          <div className="border border-primary/10 bg-primary/[0.03] rounded-sm px-6 py-5 mb-8">
            <p className="text-sm text-primary/80 leading-relaxed italic">
              <span className="font-semibold not-italic">Important:</span> This website is intended for
              general informational purposes only. Please read this disclaimer together with the Terms
              and Conditions, Privacy Statement and applicable regulatory disclosures published on the
              website.
            </p>
          </div>

          {/* Cross-links */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { label: "Privacy Statement", href: "/privacy-policy" },
              { label: "Terms and Conditions", href: "/terms-of-service" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary/60 border border-primary/15 rounded px-3 py-1.5 hover:text-primary hover:border-primary/30 transition-colors"
              >
                <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-10 mb-16">
            {sections.map((section) => (
              <div key={section.id}>
                <h2 className="serif-heading text-xl text-primary font-normal mb-4">
                  {section.id}. {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-primary/70 leading-relaxed">
                      <span className="mt-[6px] shrink-0 w-1 h-1 rounded-full bg-primary/40"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="border border-primary/10 bg-primary/[0.02] rounded-sm px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-3">
              Official Contact
            </p>
            <p className="text-sm font-medium text-primary mb-1">
              Trivantage Capital Management India Private Limited
            </p>
            <p className="text-sm text-primary/60 mb-3">
              508, Arcadia, NCPA Marg, Nariman Point, Mumbai – 400 021
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:shridhar.iyer@trivantagecapital.com"
                className="text-sm text-primary/70 hover:text-primary transition-colors hover:underline"
              >
                shridhar.iyer@trivantagecapital.com
              </a>
              <span className="hidden sm:block text-primary/20">|</span>
              <a
                href="tel:+912249034408"
                className="text-sm text-primary/70 hover:text-primary transition-colors hover:underline"
              >
                +91 22 4903 4408
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
