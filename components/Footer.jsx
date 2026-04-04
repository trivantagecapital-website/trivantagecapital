"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useResidency } from "@/hooks/useResidency";
import { resetResidency } from "@/lib/resetResidency";
import SubscribeForm from "./SubscribeForm";

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
              <span className="material-symbols-outlined">warning</span>
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
          className={`grid grid-cols-1 ${isUS ? "md:grid-cols-2" : "md:grid-cols-3"} gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20`}
        >
          {/* Logo Section */}
          <div className="col-span-1">
            <a href="/" className="block mb-2">
              <img
                src="/TrivantageLogo.png"
                alt="Trivantage Capital"
                className="h-25 w-auto"
              />
            </a>

            <p className="text-primary/70 text-sm leading-relaxed max-w-[240px]">
              A boutique investment firm focused on structural growth and
              high-conviction strategies.
            </p>
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
                  Philosophy
                </a>

                <a
                  className="text-sm hover:text-primary/60"
                  href="/about/our-team"
                >
                  Investment Team
                </a>

                <a
                  className="text-sm hover:text-primary/60"
                  href="/login"
                >
                  Client Login
                </a>

                <a
                  className="text-sm hover:text-primary/60"
                  href="/grievance"
                >
                  Investor Grievance
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

          {/* Newsletter */}
          {!isUS && (
            <div className="col-span-1 flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-primary/70">
                Newsletter
              </p>

              <p className="text-sm text-primary/70 mb-2">
                Subscribe to our market insights.
              </p>

              <SubscribeForm />
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

          <p className="text-primary text-xs font-medium text-center">
            © 2026 Trivantage Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
