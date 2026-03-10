"use client";

import React, { useState, useEffect } from "react";

const STORAGE_KEY = "disclaimerAccepted";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem(STORAGE_KEY)) {
      setIsOpen(true);
    }
  }, []);

  const handleSubmit = () => {
    if (selectedValue === "non-us") {
      setIsOpen(false);
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, "true");
      }
    } else if (selectedValue === "us") {
      alert(
        "Based on your selection, you are not permitted to access the content of this website in compliance with applicable laws."
      );
      setSelectedValue(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="disclaimerModal"
      className="fixed inset-0 z-[100]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background-dark/90 backdrop-blur-sm transition-opacity" />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 py-4 sm:py-6 overflow-y-auto">
        <div className="bg-white w-full max-w-2xl rounded shadow-2xl border border-primary/10 p-5 sm:p-6 md:p-8 lg:p-12 my-auto max-h-[90vh] sm:max-h-[88vh] md:max-h-[85vh] overflow-y-auto relative">
          <h2
            id="disclaimer-title"
            className="serif-heading text-xl sm:text-2xl md:text-3xl text-primary mb-5 sm:mb-6 md:mb-8 text-center"
          >
            Disclaimers & Declarations
          </h2>

          <p className="text-primary/80 mb-5 sm:mb-6 md:mb-8 text-center text-base sm:text-lg">
            Please select the option that applies to you:
          </p>

          <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6 md:mb-8">
            <label className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded border border-primary/10 hover:bg-background-light cursor-pointer transition-colors group">
              <input
                type="radio"
                name="residency"
                value="non-us"
                checked={selectedValue === "non-us"}
                onChange={() => setSelectedValue("non-us")}
                className="mt-1 text-primary focus:ring-primary bg-transparent border-gray-400"
              />

              <span className="text-sm md:text-base text-primary/80 group-hover:text-primary">
                I confirm that I am <strong>NOT</strong> a resident of the United
                States of America, nor of any jurisdiction where laws prohibit
                soliciting advisory or securities business without registration
                and/or prohibit the use of any information on this website.
              </span>
            </label>

            <label className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded border border-primary/10 hover:bg-background-light cursor-pointer transition-colors group">
              <input
                type="radio"
                name="residency"
                value="us"
                checked={selectedValue === "us"}
                onChange={() => setSelectedValue("us")}
                className="mt-1 text-primary focus:ring-primary bg-transparent border-gray-400"
              />

              <span className="text-sm md:text-base text-primary/80 group-hover:text-primary">
                I confirm that I <strong>AM</strong> a resident of the United
                States of America or of a jurisdiction where laws prohibit
                soliciting advisory or securities business without registration
                and/or prohibit the use of any information on this website.
              </span>
            </label>

          </div>

          <div className="flex justify-center mb-5 sm:mb-6 md:mb-8">
            <button
              onClick={handleSubmit}
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

        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;