import React from "react";

export const metadata = {
  title: "Privacy Statement | Trivantage Capital",
  description:
    "Privacy Statement of Trivantage Capital Management India Private Limited — how we collect, use, store, share and protect personal data.",
};

const sections = [
  {
    id: 1,
    title: "Information We May Collect",
    items: [
      "We may collect personal data voluntarily provided through the website, including name, email address, telephone number, postal address, company or organisation name, designation, and any other information submitted through contact forms or other communications.",
      "Where a user subscribes to newsletters or other updates, we may collect the email address and any related information provided for the purpose of managing such subscriptions and sending the requested communications.",
      "Where a user applies for a role through the website, we may collect information and documents submitted as part of the application, including resume or curriculum vitae, educational qualifications, employment history, professional details, cover letters, writing samples, and any other information shared in connection with the application.",
      "We may also collect certain technical and usage-related information automatically when the website is accessed, such as IP address, browser type, device information, date and time of access, pages viewed, and website navigation behaviour.",
    ],
  },
  {
    id: 2,
    title: "How We Collect Information",
    items: [
      "Information may be collected when a user subscribes to newsletters or updates, fills in a contact or enquiry form, applies for a position through the careers section, sends an email or otherwise communicates through the website, or browses and interacts with the website.",
      "Certain technical information may also be collected through cookies or similar technologies used for website functionality, analytics, performance, and security.",
    ],
  },
  {
    id: 3,
    title: "How We Use Information",
    items: [
      "Personal data may be used to send newsletters, market updates, insights and other communications that a user has requested or subscribed to receive.",
      "It may also be used to manage subscriptions and mailing lists, respond to enquiries or requests, assess and process job applications, communicate with candidates regarding current or future opportunities, operate and improve the website, analyse website usage and performance, maintain website security, comply with legal or regulatory requirements, and establish, exercise or defend legal rights.",
    ],
  },
  {
    id: 4,
    title: "Newsletter Subscriptions",
    items: [
      "Where a user subscribes to newsletters or other communications, the company may use the email address and any related information provided to send the requested communications.",
      "Users may unsubscribe from such communications at any time by using the unsubscribe option included in the relevant communication, where available, or by contacting the company using the details provided in this Privacy Statement.",
    ],
  },
  {
    id: 5,
    title: "Careers and Job Applications",
    items: [
      "If a user applies for a position through the website, the company may collect and process the information and documents submitted for recruitment-related purposes, including evaluating candidature, communicating with the applicant, maintaining records relating to the recruitment process, and considering the applicant for relevant current or future opportunities unless the applicant requests otherwise.",
      "Applicants should submit only information that is relevant to their application. Information submitted through the careers section may be reviewed internally by persons involved in the recruitment and evaluation process, where appropriate and lawful.",
    ],
  },
  {
    id: 6,
    title: "Sharing of Information",
    items: [
      "The company does not sell personal data.",
      "Personal data may be shared with service providers, professional advisors, or technology partners who support website operations, communications, recruitment processes, hosting, analytics, IT systems, security, or compliance functions, subject to appropriate confidentiality and data protection safeguards.",
      "Information may also be disclosed where required by law, regulation, court order, or lawful governmental request, or where necessary to protect the rights, systems, business interests, or security of the company.",
    ],
  },
  {
    id: 7,
    title: "Cookies and Similar Technologies",
    items: [
      "The website may use cookies or similar technologies to support functionality, improve user experience, analyse traffic, and strengthen website security.",
      "Users may manage or disable cookies through their browser settings. However, certain parts of the website may not function properly if cookies are disabled.",
    ],
  },
  {
    id: 8,
    title: "Data Retention",
    items: [
      "Personal data will be retained only for as long as reasonably necessary for the purpose for which it was collected, or as required under applicable law, regulation, compliance, record-keeping, or legitimate business needs.",
      "Information submitted for newsletter subscriptions will generally be retained until the user unsubscribes or requests that such communications stop, subject to any legal or compliance requirements.",
      "Information submitted in connection with job applications may be retained for a reasonable period for recruitment, record-keeping, and compliance purposes, unless a longer period is required or permitted by law.",
    ],
  },
  {
    id: 9,
    title: "Data Security",
    items: [
      "The company maintains reasonable technical and organisational measures designed to protect personal data against unauthorised access, disclosure, alteration, misuse, or destruction. However, no method of internet transmission or electronic storage can be guaranteed to be completely secure.",
    ],
  },
  {
    id: 10,
    title: "Your Rights",
    items: [
      "Subject to applicable law, individuals may have the right to seek access to, correction of, updating of, or deletion of their personal data, or to withdraw consent where processing is based on consent.",
      "Any privacy-related request or concern may be addressed using the contact details set out below.",
    ],
  },
  {
    id: 11,
    title: "Third-Party Links",
    items: [
      "The website may contain links to third-party websites or platforms for convenience or information. Trivantage Capital Management India Private Limited is not responsible for the privacy practices, content, or security of such third-party websites, and users should review their policies separately.",
    ],
  },
  {
    id: 12,
    title: "Changes to This Privacy Statement",
    items: [
      "This Privacy Statement may be updated from time to time to reflect changes in law, technology, business practices, or website functionality. Any revised version will be posted on the website with an updated effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="flex-1">

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mb-6">
          Legal
        </p>
        <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal">
          Privacy Statement
        </h1>
        <div className="h-[1px] w-24 bg-primary/20 mb-6"></div>
        <p className="text-base text-primary/70 font-light">
          Trivantage Capital Management India Private Limited
        </p>
      </section>

      {/* Content */}
      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">
        <div className="max-w-[800px]">

          {/* Purpose box */}
          <div className="border border-primary/10 bg-primary/[0.03] rounded-sm px-6 py-5 mb-12">
            <p className="text-sm text-primary/80 leading-relaxed">
              <span className="font-semibold">Purpose.</span> This Privacy Statement explains how
              Trivantage Capital Management India Private Limited collects, uses, stores, shares and
              protects personal data when individuals visit its website, subscribe to newsletters,
              apply for positions, or otherwise interact with the website.
            </p>
          </div>

          <p className="text-sm text-primary/70 italic leading-relaxed mb-12">
            By using the website or submitting information through it, users acknowledge that they
            have read and understood this Privacy Statement.
          </p>

          {/* Sections */}
          <div className="space-y-10">
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

          {/* Contact Details */}
          <div className="mt-12">
            <h2 className="serif-heading text-xl text-primary font-normal mb-4">
              13. Contact Details
            </h2>
            <p className="text-sm text-primary/70 leading-relaxed mb-6">
              For any questions, requests or concerns relating to this Privacy Statement or the
              processing of personal data, please contact:
            </p>
            <div className="border border-primary/10 rounded-sm overflow-hidden">
              {[
                { label: "Company", value: "Trivantage Capital Management India Private Limited" },
                { label: "Address", value: "508, Arcadia, NCPA Marg, Nariman Point, Mumbai – 400 021" },
                {
                  label: "Email",
                  value: "shridhar.iyer@trivantagecapital.com",
                  href: "mailto:shridhar.iyer@trivantagecapital.com",
                },
                { label: "Phone", value: "+91 22 4903 4408", href: "tel:+912249034408" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row border-b border-dashed border-primary/10 last:border-b-0"
                >
                  <span className="sm:w-32 shrink-0 px-5 py-4 text-xs font-bold uppercase tracking-widest text-primary/70 bg-primary/[0.02]">
                    {row.label}
                  </span>
                  <span className="px-5 py-4 text-sm text-primary/70">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="hover:text-primary transition-colors hover:underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
