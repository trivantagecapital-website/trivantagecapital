import React from 'react';
import ComplaintForm from '@/components/ComplaintForm';

export const metadata = {
    title: "Investor Grievance | Trivantage Capital",
    description:
        "Register an investor complaint, view our grievance redressal mechanism, and access SCORES & ODR portals.",
};

const SIDEBAR_LINKS = [
    { label: "Grievance Redressal Policy", href: "/complaints/Trivantage Capital - Grievance Redressal Mechanism.pdf", external: true, note: "PDF, 48 KB, opens in new tab" },
    { label: "Complaints Data", href: "/grievance/complaints-data", external: false },
    { label: "Link to SCORES Website", href: "https://scores.sebi.gov.in", external: true, note: "opens in new tab" },
    { label: "SEBI’s Master Circular on Online Dispute Resolution (ODR)", href: "/complaints/SEBI Master Circular on ODRs - 4 Aug 2023.pdf", external: true, note: "PDF, 848 KB, opens in new tab" },
    { label: "Link to ODR Portal", href: "https://smartodr.in/login", external: true, note: "opens in new tab" },
];

export default function ComplaintsPage() {
    return (
        <main id="main-content" className="flex-1">

            {/* Hero / Title */}
            <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12">
                <h1 className="serif-heading text-primary text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 sm:mb-6 font-normal">
                    Investor Grievance
                </h1>
                <div className="h-[1px] w-24 bg-primary/20 mb-6"></div>
            </section>

            <section className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 pb-16 sm:pb-20 md:pb-24">

                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,480px)_1fr] gap-8 sm:gap-10 lg:gap-16 items-start">

                    {/* ── Left Sidebar ── */}
                    <aside aria-label="Related grievance resources">
                        <div className="border border-primary/10 rounded-sm overflow-hidden">
                            {SIDEBAR_LINKS.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="flex items-center justify-between bg-white px-5 py-4 text-sm font-medium text-primary hover:text-primary/70 hover:bg-primary/5 transition-colors border-b border-dashed border-primary/15 last:border-b-0"
                                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    {link.label}
                                    {link.note && <span className="sr-only"> ({link.note})</span>}
                                    <span className="material-symbols-outlined text-base opacity-50" aria-hidden="true">
                                        {link.external ? 'open_in_new' : 'arrow_forward'}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </aside>

                    {/* ── Right: Form ── */}
                    <div>
                        <h2 className="serif-heading text-2xl sm:text-3xl md:text-4xl text-primary font-normal mb-6 sm:mb-8">
                            Complaint Registration Form
                        </h2>
                        <ComplaintForm />
                    </div>

                </div>
            </section>
        </main>
    );
}
