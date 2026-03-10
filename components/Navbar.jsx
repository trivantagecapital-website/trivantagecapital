import React from "react";

const Navbar = () => {
  return (
    <header className="w-full border-b border-primary/10 sticky top-0 bg-background/75 backdrop-blur-xl z-50">
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="block" aria-label="Trivantage Capital Home">
          <img
            src="/TrivantageLogo.png"
            alt="Trivantage Capital Logo"
            className="h-9 md:h-10 w-auto"
          />
        </a>

        <div className="flex items-center gap-10">

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Main Navigation">

            <a
              className="text-primary/80 hover:text-primary text-[13px] font-semibold transition-colors uppercase tracking-widest"
              href="/"
            >
              Home
            </a>

            {/* About Dropdown */}
            <div className="relative group flex items-center">
              
              <button className="text-primary/80 hover:text-primary text-[13px] font-semibold transition-colors uppercase tracking-widest flex items-center gap-1.5">
                About Us
                <span className="material-symbols-outlined text-[16px]">
                  expand_more
                </span>
              </button>

              <div className="absolute top-full left-0 mt-5 w-64 bg-white border border-primary/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 rounded-md">
                
                <div className="py-3 flex flex-col">

                  

                  <a
                    href="/about/our-team"
                    className="px-6 py-3 text-sm text-primary/70 hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    Our Team
                  </a>

                  <a
                    href="/about/our-advisors"
                    className="px-6 py-3 text-sm text-primary/70 hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    Our Advisors
                  </a>

                 

                  <a
                    href="/about/awards"
                    className="px-6 py-3 text-sm text-primary/70 hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    Awards
                  </a>

                </div>
              </div>
            </div>

            <a
              className="text-primary/80 hover:text-primary text-[13px] font-semibold transition-colors uppercase tracking-widest"
              href="/our-offering"
            >
              Our Offering
            </a>

            <a
              className="text-primary/80 hover:text-primary text-[13px] font-semibold transition-colors uppercase tracking-widest"
              href="/insights"
            >
              Insights
            </a>

            <a
              className="text-primary/80 hover:text-primary text-[13px] font-semibold transition-colors uppercase tracking-widest"
              href="/careers"
            >
              Careers
            </a>

            <a
              className="text-primary/80 hover:text-primary text-[13px] font-semibold transition-colors uppercase tracking-widest"
              href="/contact"
            >
              Contact
            </a>

          </nav>

          {/* Desktop Buttons */}
          <div className="hidden xl:flex items-center gap-3">

            <a
              href="/login"
              className="text-primary text-[11px] font-semibold uppercase tracking-widest border border-primary/20 px-5 py-2.5 rounded-md hover:bg-primary/5 transition-all"
            >
              Client Login
            </a>

            <a
              href="/invest"
              className="bg-primary text-white px-5 py-2.5 rounded-md hover:opacity-90 transition-all text-[11px] font-semibold uppercase tracking-widest"
            >
              Invest With Us
            </a>

          </div>

          {/* Mobile Button */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden p-2 text-primary"
            aria-label="Open Mobile Menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              menu
            </span>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden fixed inset-0 z-[100] bg-background-light overflow-y-auto"
      >
        <div className="p-6">

          <div className="flex items-center justify-between mb-10">
            <a href="/" className="block" aria-label="Trivantage Capital Home"/>
            <img src="/TrivantageLogo.png" className="h-10 w-auto" />

            <button className="p-2 text-primary">
              <span className="material-symbols-outlined text-3xl">
                close
              </span>
            </button>
          </div>

          <nav className="flex flex-col gap-7 text-primary">

            <a href="/" className="text-xl font-semibold">Home</a>

            <div className="space-y-5">
              <p className="text-xs uppercase tracking-widest text-primary/40">
                About Us
              </p>

              <div className="pl-4 flex flex-col gap-5 border-l border-primary/10">
               
                <a href="/about/our-team" className="text-lg text-primary/80">Our Team</a>
                <a href="/about/our-advisors" className="text-lg text-primary/80">Our Advisors</a>
               
                <a href="/about/awards" className="text-lg text-primary/80">Awards</a>
              </div>
            </div>

            <a href="/our-offering" className="text-xl font-semibold">Our Offering</a>
            <a href="/insights" className="text-xl font-semibold">Insights</a>
            <a href="/careers" className="text-xl font-semibold">Careers</a>
            <a href="/contact" className="text-xl font-semibold">Contact</a>

          </nav>

        </div>
      </div>
    </header>
  );
};

export default Navbar;