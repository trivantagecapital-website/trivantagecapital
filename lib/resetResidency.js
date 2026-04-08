export function resetResidency() {
  sessionStorage.removeItem("disclaimerAccepted");
  sessionStorage.removeItem("disclaimerResidency");
  window.dispatchEvent(new Event("storage"));
}
