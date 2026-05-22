"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useResidency } from "@/hooks/useResidency";

const Navbar = () => {
  const pathname = usePathname();
  const { isUS } = useResidency();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const ariaCurrent = (href) => (isActive(href) ? "page" : undefined);

  return (
    <header className="w-full border-b border-primary/10 sticky top-0 bg-white z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="block" aria-label="Trivantage Capital Home">
          <img
            src="/TrivantageLogo.png"
            alt="Trivantage Capital Logo"
            className="h-25 md:h-25 w-auto"
          />
        </a>

        <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-9"
            aria-label="Main Navigation"
          >
            {/* About Dropdown */}
            <div
              className="relative group flex items-center"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
              onFocus={() => setIsAboutOpen(true)}
              onBlur={() => setIsAboutOpen(false)}
            >
              <button
                type="button"
                aria-expanded={isAboutOpen}
                aria-haspopup="true"
                aria-controls={isAboutOpen ? "about-menu" : undefined}
                onClick={() => setIsAboutOpen((v) => !v)}
                className="text-primary/80 hover:text-primary text-[13px] font-semibold transition-colors uppercase tracking-widest flex items-center gap-1.5"
              >
                About Us
                <span
                  className="material-symbols-outlined text-[16px]"
                  aria-hidden="true"
                >
                  expand_more
                </span>
              </button>

              <div
                id="about-menu"
                className="absolute top-full left-0 mt-5 w-64 bg-white border border-primary/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0 rounded-md"
              >
                <div className="py-3 flex flex-col">
                  <a
                    href="/about/our-team"
                    aria-current={ariaCurrent("/about/our-team")}
                    className="px-6 py-3 text-sm text-primary/70 hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    Our Team
                  </a>

                  <a
                    href="/about/our-advisors"
                    aria-current={ariaCurrent("/about/our-advisors")}
                    className="px-6 py-3 text-sm text-primary/70 hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    Our Advisors
                  </a>
                </div>
              </div>
            </div>

            {!isUS && (
              <a
                className="text-primary/80 hover:text-primary text-[13px] font-semibold transition-colors uppercase tracking-widest"
                href="/our-offering"
                aria-current={ariaCurrent("/our-offering")}
              >
                Our Offering
              </a>
            )}

            {!isUS && (
              <a
                className="text-primary/80 hover:text-primary text-[13px] font-semibold transition-colors uppercase tracking-widest"
                href="/careers"
                aria-current={ariaCurrent("/careers")}
              >
                Careers
              </a>
            )}

            {!isUS && (
              <a
                className="text-primary/80 hover:text-primary text-[13px] font-semibold transition-colors uppercase tracking-widest"
                href="/contact"
                aria-current={ariaCurrent("/contact")}
              >
                Contact Us
              </a>
            )}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {!isUS && (
              <a
                href="/invest"
                aria-current={ariaCurrent("/invest")}
                className="bg-primary text-white px-5 py-2.5  hover:opacity-90 transition-all text-[11px] font-semibold uppercase tracking-widest"
              >
                Invest With Us
              </a>
            )}

            <a
              href="/login"
              aria-current={ariaCurrent("/login")}
              className="text-primary text-[11px] font-semibold uppercase tracking-widest border border-primary/20 px-5 py-2.5  hover:bg-primary/5 transition-all"
            >
              Client Login
            </a>
          </div>

          {/* Mobile Button */}
          <button
            id="mobile-menu-btn"
            type="button"
            className="lg:hidden p-2 text-primary"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
            aria-haspopup="dialog"
            aria-controls="primary-mobile-nav"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <span
              className="material-symbols-outlined text-[28px]"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        id="primary-mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full bg-white">
          <div className="flex items-center justify-between p-6 border-b border-primary/10">
            <span className="text-lg font-semibold text-primary uppercase tracking-widest">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <span
                className="material-symbols-outlined text-[24px]"
                aria-hidden="true"
              >
                close
              </span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="text-primary/50 text-sm font-semibold uppercase tracking-widest">
                About Us
              </div>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary/10">
                <a
                  href="/about/our-team"
                  aria-current={ariaCurrent("/about/our-team")}
                  className="text-primary/80 hover:text-primary font-medium"
                >
                  Our Team
                </a>
                <a
                  href="/about/our-advisors"
                  aria-current={ariaCurrent("/about/our-advisors")}
                  className="text-primary/80 hover:text-primary font-medium"
                >
                  Our Advisors
                </a>
              </div>
            </div>

            {!isUS && (
              <a
                href="/our-offering"
                aria-current={ariaCurrent("/our-offering")}
                className="text-primary/80 hover:text-primary font-semibold text-lg"
              >
                Our Offering
              </a>
            )}
            {!isUS && (
              <a
                href="/careers"
                aria-current={ariaCurrent("/careers")}
                className="text-primary/80 hover:text-primary font-semibold text-lg"
              >
                Careers
              </a>
            )}
            {!isUS && (
              <a
                href="/contact"
                aria-current={ariaCurrent("/contact")}
                className="text-primary/80 hover:text-primary font-semibold text-lg"
              >
                Contact
              </a>
            )}

            <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-primary/10">
              <a
                href="https://trivantage.in/webfincrm/login.jsp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-primary font-semibold border border-primary/20 px-5 py-3 hover:bg-primary/5 transition-all uppercase tracking-widest text-sm"
              >
                Client Login
              </a>
              {!isUS && (
                <a
                  href="/invest"
                  aria-current={ariaCurrent("/invest")}
                  className="text-center bg-primary text-white px-5 py-3 hover:opacity-90 transition-all font-semibold uppercase tracking-widest text-sm"
                >
                  Invest With Us
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
