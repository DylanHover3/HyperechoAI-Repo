/**
 * Theme Handler - External File
 * Handles dark/light theme switching based on localStorage
 */

(function () {
  // Get theme setting from data attribute on script tag
  const scripts = document.querySelectorAll('script[src*="theme-handler.js"]');
  const themeScript = scripts[scripts.length - 1];
  const colorScheme = themeScript.getAttribute("data-color-scheme");

  if (colorScheme === "auto" || colorScheme === "" || !colorScheme) {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.setAttribute("dark", "");
      document.documentElement.classList.add("dark-mode");
    }
  } else if (colorScheme === "light") {
    document.documentElement.setAttribute("light", "");
    document.documentElement.classList.add("light-mode");
  } else if (colorScheme === "dark") {
    document.documentElement.setAttribute("dark", "");
    document.documentElement.classList.add("dark-mode");
  }
})();
