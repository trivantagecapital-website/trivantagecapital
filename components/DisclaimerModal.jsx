"use client";

import React, { useState, useEffect, useRef } from "react";

const STORAGE_KEY = "disclaimerAccepted";
const RESIDENCY_KEY = "disclaimerResidency";

const FOCUSABLE_SELECTOR =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';

const CAUTION_TEXT = `Trivantage Capital hereby cautions all users against fraudulent websites, applications, and communications falsely claiming association with the company. Neither Trivantage Capital nor its employees will ever solicit participation through WhatsApp groups, social media accounts, or any mobile application for trading in securities. Further, the company does not publish advertisements promoting investments in specific stocks or inviting cash transactions. Any person encountering such activity is advised to report the matter to the appropriate law enforcement authorities and notify us immediately at info @trivantagecapital.com`;

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedValue, setSelectedValue] = useState(null);
  const dialogRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    const check = () => {
      if (typeof window !== "undefined" && !sessionStorage.getItem(STORAGE_KEY)) {
        setIsOpen(true);
        setStep(1);
        setSelectedValue(null);
      }
    };
    check();
    window.addEventListener("storage", check);
    return () => window.removeEventListener("storage", check);
  }, []);

  // Focus trap + initial focus + body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current =
      typeof document !== "undefined" ? document.activeElement : null;

    const dialog = dialogRef.current;
    if (!dialog) return;

    // Move focus into the dialog on open / step change
    const focusable = dialog.querySelectorAll(FOCUSABLE_SELECTOR);
    const initial = focusable[0] || dialog;
    initial.focus({ preventScroll: true });

    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;

      const nodes = Array.from(
        dialog.querySelectorAll(FOCUSABLE_SELECTOR)
      ).filter(
        (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
      );
      if (nodes.length === 0) {
        e.preventDefault();
        dialog.focus();
        return;
      }

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;

      if (e.shiftKey) {
        if (active === first || !dialog.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      const previous = previouslyFocusedRef.current;
      if (previous && typeof previous.focus === "function") {
        previous.focus({ preventScroll: true });
      }
    };
  }, [isOpen, step]);

  const handleProceed = () => {
    if (selectedValue) {
      setStep(2);
    }
  };

  const handleCautionOk = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "true");
      sessionStorage.setItem(RESIDENCY_KEY, selectedValue);
      const shouldRedirect = sessionStorage.getItem("disclaimerRedirectHome") === "true";
      sessionStorage.removeItem("disclaimerRedirectHome");
      window.dispatchEvent(new Event("storage"));
      if (shouldRedirect) {
        window.scrollTo(0, 0);
        window.location.href = "/";
      }
    }
  };

  if (!isOpen) return null;

  const isStep2 = step === 2;

  return (
    <div
      id="disclaimerModal"
      className="fixed inset-0 z-[100]"
      role="dialog"
      aria-modal="true"
      aria-labelledby={isStep2 ? "caution-title" : "disclaimer-title"}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background-dark/90 backdrop-blur-sm transition-opacity" aria-hidden="true" />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 py-4 sm:py-6 overflow-y-auto">
        <div
          ref={dialogRef}
          tabIndex={-1}
          className="bg-white w-full max-w-2xl rounded shadow-2xl border border-primary/10 p-5 sm:p-6 md:p-8 lg:p-12 my-auto max-h-[90vh] sm:max-h-[88vh] md:max-h-[85vh] overflow-y-auto relative outline-none"
        >
          {isStep2 ? (
            /* Step 2: Caution Against Fraudulent Activities */
            <>
              <h2
                id="caution-title"
                className="serif-heading text-xl sm:text-2xl md:text-3xl text-primary mb-5 sm:mb-6 md:mb-8 text-center"
              >
                Caution Against Fraudulent Activities
              </h2>

              <div className="bg-primary/5 border border-primary/10 rounded p-3 sm:p-4 mb-5 sm:mb-6 text-sm sm:text-base text-primary/80 text-center">
                {selectedValue === "us" ? (
                  <p>You have declared that you <strong className="text-primary">ARE</strong> a resident of the United States of America.</p>
                ) : (
                  <p>You have declared that you are <strong className="text-primary">NOT</strong> a resident of the United States of America.</p>
                )}
              </div>

              <p className="text-primary/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                {CAUTION_TEXT}
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="border border-primary/20 text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded font-bold uppercase tracking-widest text-xs hover:bg-primary/5 transition-all"
                >
                  Go Back
                </button>
                <button
                  onClick={handleCautionOk}
                  className="bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all"
                >
                  OK
                </button>
              </div>
            </>
          ) : (
            /* Step 1: Residency Declaration */
            <>
              <h2
                id="disclaimer-title"
                className="serif-heading text-xl sm:text-2xl md:text-3xl text-primary mb-5 sm:mb-6 md:mb-8 text-center"
              >
                Disclaimers & Declarations
              </h2>

              <p className="text-primary/80 mb-5 sm:mb-6 md:mb-8 text-center text-base sm:text-lg">
                Please select the option that applies to you:
              </p>

              <div role="radiogroup" aria-labelledby="disclaimer-title" className="space-y-3 sm:space-y-4 mb-5 sm:mb-6 md:mb-8">
            <label htmlFor="residency-non-us" className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded border border-primary/10 hover:bg-background-light cursor-pointer transition-colors group">
              <input
                id="residency-non-us"
                type="radio"
                name="residency"
                value="non-us"
                aria-labelledby="residency-non-us-label"
                checked={selectedValue === "non-us"}
                onChange={() => setSelectedValue("non-us")}
                className="mt-1 text-primary focus:ring-primary bg-transparent border-gray-400"
              />

              <span id="residency-non-us-label" className="text-sm md:text-base text-primary/80 group-hover:text-primary">
                I confirm that I am <strong>NOT</strong> a resident of the United
                States of America, nor of any jurisdiction where laws prohibit
                soliciting advisory or securities business without registration
                and/or prohibit the use of any information on this website.
              </span>
            </label>

            <label htmlFor="residency-us" className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded border border-primary/10 hover:bg-background-light cursor-pointer transition-colors group">
              <input
                id="residency-us"
                type="radio"
                name="residency"
                value="us"
                aria-labelledby="residency-us-label"
                checked={selectedValue === "us"}
                onChange={() => setSelectedValue("us")}
                className="mt-1 text-primary focus:ring-primary bg-transparent border-gray-400"
              />

              <span id="residency-us-label" className="text-sm md:text-base text-primary/80 group-hover:text-primary">
                I confirm that I <strong>AM</strong> a resident of the United
                States of America or of a jurisdiction where laws prohibit
                soliciting advisory or securities business without registration
                and/or prohibit the use of any information on this website.
              </span>
            </label>

          </div>

          <div className="flex justify-center mb-5 sm:mb-6 md:mb-8">
            <button
              onClick={handleProceed}
              disabled={!selectedValue}
              className="bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              id="submitDisclaimer"
            >
              Proceed
            </button>

          </div>

          <div className="bg-red-50 p-3 sm:p-4 rounded border-l-4 border-red-500">
            <p className="text-[11px] sm:text-xs text-red-800">
              <strong>Important Notice:</strong> Providing a false declaration
              while accessing this website will make the person solely
              responsible for any legal and financial consequences arising from
              the use of information contained herein.
            </p>
          </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;