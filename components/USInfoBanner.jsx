"use client";

import { useState, useEffect } from "react";
import { useResidency } from "@/hooks/useResidency";
import { resetResidency } from "@/lib/resetResidency";

const DISMISS_KEY = "usBannerDismissed";

export default function USInfoBanner() {
  const { isUS, isLoaded } = useResidency();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (isLoaded && isUS) {
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === "true");
    }
  }, [isUS, isLoaded]);

  if (!isLoaded || !isUS || dismissed) return null;

  return (
    <div className="bg-primary/5 border-b border-primary/10 px-4 py-2.5 text-center text-xs sm:text-sm text-primary/70 flex items-center justify-center gap-3 relative">
      <p>
        You are viewing a limited version of this website. Selected your region incorrectly?{" "}
        <button
          onClick={resetResidency}
          className="underline font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Change Region
        </button>
      </p>

      <button
        onClick={() => {
          sessionStorage.setItem(DISMISS_KEY, "true");
          setDismissed(true);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/70 hover:text-primary transition-colors p-1"
        aria-label="Dismiss banner"
      >
        <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
  );
}
