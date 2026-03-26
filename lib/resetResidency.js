export function resetResidency() {
  localStorage.removeItem("disclaimerAccepted");
  localStorage.removeItem("disclaimerResidency");
  window.dispatchEvent(new Event("storage"));
}
