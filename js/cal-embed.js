/**
 * Cal.com Embed Script - External File
 * Security-enhanced version of Cal.com inline embed
 */

(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        // Enhanced script loading with security attributes
        const script = d.createElement("script");
        script.src = A;
        script.crossOrigin = "anonymous";
        script.onerror = function () {
          console.error("Failed to load Cal.com embed script");
        };
        d.head.appendChild(script);
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
})(window, "https://app.cal.com/embed/embed.js", "init");

// Initialize Cal.com embed
Cal("init", "discovery", { origin: "https://cal.com" });

Cal.ns.discovery("inline", {
  elementOrSelector: "#my-cal-inline",
  config: { layout: "month_view" },
  calLink: "dylanhover-hyperechoai/discovery",
});

Cal.ns.discovery("ui", {
  cssVarsPerTheme: {
    light: { "cal-brand": "#160f9a" },
    dark: { "cal-brand": "#6366f1" },
  },
  hideEventTypeDetails: false,
  layout: "month_view",
});
