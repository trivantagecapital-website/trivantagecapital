import React from 'react';
import ComplaintForm from '@/components/ComplaintForm';

const SIDEBAR_LINKS = [
    { label: 'Grievance Redressal Policy', href: '/complaints/Trivantage Capital - Grievance Redressal Mechanism.pdf' },
    { label: 'Complaints Data', href: '#' },
    { label: 'Link to SCORES Website', href: 'https://scores.sebi.gov.in' },
    { label: "SEBI’s Master Circular on Online Dispute Resolution (ODR)", href: '/complaints/SEBI Master Circular on ODRs - 4 Aug 2023.pdf' },
    { label: "Link to ODR Portal", href: 'https://smartodr.in/login' },
];

export default function ComplaintsPage() {
    return (
        <main id="main-content" className="flex-1">

            {/* Hero / Title */}
            <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-24 pb-12">
                <h1 className="serif-heading text-primary text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 font-normal">
                    Complaint Data &amp; Registration
                </h1>
                <div className="h-[1px] w-24 bg-primary/20 mb-6"></div>
                <p className="text-base text-primary/60 font-light">Portfolio Manager</p>
            </section>

            <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">

                <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-10 lg:gap-16 items-start">

                    {/* ── Left Sidebar ── */}
                    <aside>
                        <div className="border border-primary/10 rounded-sm overflow-hidden">
                            {SIDEBAR_LINKS.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="flex items-center justify-between bg-white px-5 py-4 text-sm font-medium text-primary hover:text-primary/70 hover:bg-primary/5 transition-colors border-b border-dashed border-primary/15 last:border-b-0"
                                    target='_blank'
                                >
                                    {link.label}
                                    <span className="material-symbols-outlined text-base opacity-50 group-hover:opacity-100">
                                        open_in_new
                                    </span>
                                </a>
                            ))}
                        </div>
                    </aside>

                    {/* ── Right: Form ── */}
                    <div>
                        <h1 className="serif-heading text-3xl sm:text-4xl text-primary font-normal mb-8">
                            Complaint Registration form
                        </h1>
                        <ComplaintForm />
                    </div>

                </div>
            </section>
        </main>
    );
}
