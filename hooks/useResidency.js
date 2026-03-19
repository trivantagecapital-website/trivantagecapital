"use client";
import { useState, useEffect } from "react";

export function useResidency() {
  const [state, setState] = useState({ isUS: false, isLoaded: false });

  useEffect(() => {
    const read = () => {
      const accepted = localStorage.getItem("disclaimerAccepted") === "true";
      const residency = localStorage.getItem("disclaimerResidency");
      setState({ isUS: accepted && residency === "us", isLoaded: true });
    };
    read();
    window.addEventListener("storage", read);
    return () => window.removeEventListener("storage", read);
  }, []);

  return state;
}
