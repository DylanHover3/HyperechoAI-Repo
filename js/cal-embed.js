/**
 * Cal.com Embed Script - Security Enhanced
 * Enhanced version with better error handling and security practices
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
          // Fallback: show manual booking message
          const calElement = d.getElementById("my-cal-inline");
          if (calElement) {
            calElement.innerHTML = `
              <div style="text-align: center; padding: 40px; border: 1px solid #e5e5e5; border-radius: 8px;">
                <h3>Schedule Your Consultation</h3>
                <p>Unable to load booking calendar. Please contact us directly to schedule your consultation.</p>
                <a href="mailto:contact@hyperechoai.com" style="color: #160f9a; text-decoration: underline;">contact@hyperechoai.com</a>
              </div>
            `;
          }
        };
        
        // Add timeout for loading
        const timeoutId = setTimeout(() => {
          if (!cal.loaded) {
            console.warn("Cal.com embed script loading timeout");
            script.onerror();
          }
        }, 10000); // 10 second timeout
        
        script.onload = function() {
          clearTimeout(timeoutId);
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

// Only initialize if we're on the contact page
if (document.getElementById("my-cal-inline")) {
  // Initialize Cal.com embed with error handling
  try {
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
  } catch (error) {
    console.error("Error initializing Cal.com embed:", error);
  }
}
