/**
 * Google Analytics - External File
 * Extracted from inline script for CSP compliance
 */

// Initialize dataLayer and gtag function
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

// Set up Google Analytics
gtag("js", new Date());

// Get GA tracking ID from data attribute on script tag
(function () {
  const scripts = document.querySelectorAll(
    'script[src*="google-analytics.js"]'
  );
  const gaScript = scripts[scripts.length - 1]; // Get the current script
  const trackingId = gaScript.getAttribute("data-ga-id");

  if (trackingId) {
    gtag("config", trackingId);
  }
})();
