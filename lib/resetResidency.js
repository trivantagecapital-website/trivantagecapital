export function resetResidency() {
  sessionStorage.removeItem("disclaimerAccepted");
  sessionStorage.removeItem("disclaimerResidency");
  sessionStorage.setItem("disclaimerRedirectHome", "true");
  window.dispatchEvent(new Event("storage"));
}
