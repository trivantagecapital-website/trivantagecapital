"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const showCaution = pathname === "/" || pathname === "/invest";

  return (
    <footer className="bg-white border-t border-primary/5 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Fraud Caution Section */}
        {showCaution && (
          <div className="mb-20 p-8 bg-red-50 border border-red-100 rounded-lg">
            <h3 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">warning</span>
              Caution Against Fraudulent Activities
            </h3>

            <div className="text-primary/70 text-sm leading-relaxed space-y-4">
              <p>
                Trivantage Capital hereby cautions all users against fraudulent
                websites, applications, and communications falsely claiming
                association with the company. Neither Trivantage Capital nor its
                employees will ever solicit participation through WhatsApp groups,
                social media accounts, or any mobile application for trading in
                securities. Further, the company does not publish advertisements
                promoting investments in specific stocks or inviting cash
                transactions.
              </p>

              <p className="font-medium">
                Any person encountering such activity is advised to report the
                matter to the appropriate law enforcement authorities and notify
                us immediately at{" "}
                <a
                  href="mailto:info@trivantagecapital.com"
                  className="text-primary hover:underline"
                >
                  info@trivantagecapital.com
                </a>
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

          {/* Logo Section */}
          <div className="col-span-1">
            <a href="/" className="block mb-6">
              <img
                src="/TrivantageLogo.png"
                alt="Trivantage Capital"
                className="h-14 w-auto"
              />
            </a>

            <p className="text-primary/60 text-sm leading-relaxed max-w-[240px]">
              A boutique investment firm focused on structural growth and
              high-conviction strategies.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1 grid grid-cols-2 gap-8">

            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-primary/40">
                Navigation
              </p>

              <a className="text-sm hover:text-primary/60" href="/#philosophy">
                Philosophy
              </a>

              <a className="text-sm hover:text-primary/60" href="/about/our-team">
                Investment Team
              </a>

              <a className="text-sm hover:text-primary/60" href="https://trivantage.in/webfincrm/login.jsp">
                Investor Portal
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-primary/40">
                Legal
              </p>

              <a className="text-sm hover:text-primary/60" href="/legal/Privacy Policy.pdf"
              target="_blank">
                Privacy Policy
              </a>

              <a className="text-sm hover:text-primary/60" href="/legal/Terms & Conditions.pdf" target="_blank">
                Terms of Service
              </a>

              <a className="text-sm hover:text-primary/60" href="/legal/Disclaimer.pdf" target="_blank">
                Regulatory
              </a>
            </div>

          </div>

          {/* Newsletter */}
          <div className="col-span-1 flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/40">
              Newsletter
            </p>

            <p className="text-sm text-primary/60 mb-2">
              Subscribe to our market insights.
            </p>

            <div className="flex gap-2">
              <input
                className="bg-primary/5 border-none rounded text-sm px-4 py-3 flex-1 focus:ring-1 focus:ring-primary/20"
                placeholder="Email Address"
                type="email"
              />

              <button className="bg-primary text-white px-4 py-2 rounded text-xs font-bold">
                JOIN
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-primary/5">
          <p className="text-primary/40 text-xs font-medium">
            © 2026 Trivantage Capital. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a className="text-primary/40 hover:text-primary" href="#">
              <span className="material-symbols-outlined !text-lg">public</span>
            </a>

            <a className="text-primary/40 hover:text-primary" href="#">
              <span className="material-symbols-outlined !text-lg">share</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;