"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useResidency } from "@/hooks/useResidency";
import { resetResidency } from "@/lib/resetResidency";

const Footer = () => {
  const pathname = usePathname();
  const { isUS } = useResidency();
  const showCaution = pathname === "/" || pathname === "/invest";

  return (
    <footer className="bg-white border-t border-primary/5 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* Fraud Caution Section */}
        {showCaution && !isUS && (
          <div className="mb-12 sm:mb-16 md:mb-20 p-5 sm:p-6 md:p-8 bg-red-50 border border-red-100 rounded-lg">
            <h3 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined" aria-hidden="true">warning</span>
              Caution Against Fraudulent Activities
            </h3>

            <div className="text-primary/70 text-sm leading-relaxed space-y-4">
              <p>
                Trivantage Capital hereby cautions all users against fraudulent
                websites, applications, and communications falsely claiming
                association with the company. Neither Trivantage Capital nor its
                employees will ever solicit participation through WhatsApp
                groups, social media accounts, or any mobile application for
                trading in securities. Further, the company does not publish
                advertisements promoting investments in specific stocks or
                inviting cash transactions.
              </p>

              <p className="font-medium">
                Any person encountering such activity is advised to report the
                matter to the appropriate law enforcement authorities and notify
                us immediately at{" "}
                <a
                  href="mailto:info@trivantagecapital.com"
                  className="text-primary underline"
                >
                  info@trivantagecapital.com
                </a>
              </p>
            </div>
          </div>
        )}

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20"
        >
          {/* Logo Section */}
          <div className="col-span-1">
            <a
              href="/"
              className="block mb-2"
              aria-label="Trivantage Capital Home"
            >
              <img
                src="/TrivantageLogo.png"
                alt=""
                className="h-25 w-auto"
              />
            </a>

            <p className="text-primary/70 text-sm leading-relaxed max-w-[240px]">
              A boutique investment firm focused on structural growth and
              high-conviction strategies.
            </p>

            {!isUS && (
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://www.linkedin.com/company/trivantage-capital-management-india-pvt-ltd/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-primary/60 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@TrivantageCapital"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-primary/60 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Navigation */}
          {!isUS ? (
            <div className="col-span-1 grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary/70">
                  Navigation
                </p>

                <a
                  className="text-sm hover:text-primary/60"
                  href="/#philosophy"
                >
                  Investment Philosophy
                </a>

                <a
                  className="text-sm hover:text-primary/60"
                  href="/about/our-team"
                >
                  Our Team
                </a>
                <a
                  className="text-sm hover:text-primary/60"
                  href="/invest/Trivantage%20Capital%20-%20Disclosure%20Document%20-%20April%202025%20(Accessible).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Disclosure Document
                </a>
                <a className="text-sm hover:text-primary/60" href="/grievance">
                  Investor Grievance
                </a>
                
                <a className="text-sm hover:text-primary/60" href="/login">
                  Client Login
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary/70">
                  Legal
                </p>

                <a
                  className="text-sm hover:text-primary/60"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>

                <a
                  className="text-sm hover:text-primary/60"
                  href="/terms-of-service"
                >
                  Terms of Service
                </a>

                <a className="text-sm hover:text-primary/60" href="/regulatory">
                  Regulatory
                </a>
              </div>
            </div>
          ) : (
            <div className="col-span-1 flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-primary/40">
                Legal
              </p>

              <a
                className="text-sm hover:text-primary/60"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>

              <a
                className="text-sm hover:text-primary/60"
                href="/terms-of-service"
              >
                Terms of Service
              </a>

              <a className="text-sm hover:text-primary/60" href="/regulatory">
                Regulatory
              </a>
            </div>
          )}

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center gap-4 sm:relative sm:flex-row sm:justify-center pt-8 sm:pt-10 border-t border-primary/5">
          <button
            onClick={resetResidency}
            className="sm:absolute sm:left-0 text-primary hover:text-primary/60 text-xs font-medium underline transition-colors"
          >
            Change Region
          </button>

          <p className="text-primary text-xs font-medium text-center leading-relaxed px-2 sm:px-4 md:px-0">
            <span className="whitespace-nowrap">CIN: U749999MH2014PTC258940</span>
            <span className="hidden sm:inline"> | </span>
            <br className="sm:hidden" />
            <span className="whitespace-nowrap">PMS SEBI Reg. No.: INP000004656</span>
            <br />
            © 2026 Trivantage Capital Management India Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
