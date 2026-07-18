import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-CZGZ5P3CGF";

const Analytics: React.FC = () => {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    // Check for existing consent in localStorage
    const savedConsent = localStorage.getItem("acrylis-cookie-consent");
    if (savedConsent === "granted") {
      setConsent(true);
      initGA();
    } else if (savedConsent === "denied") {
      setConsent(false);
    }
  }, []);

  const initGA = () => {
    // Avoid double initialization
    if (document.getElementById("google-analytics-script")) return;

    const script = document.createElement("script");
    script.id = "google-analytics-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    const configScript = document.createElement("script");
    configScript.id = "google-analytics-config";
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(configScript);
  };

  const handleAccept = () => {
    localStorage.setItem("acrylis-cookie-consent", "granted");
    setConsent(true);
    initGA();
  };

  const handleDecline = () => {
    localStorage.setItem("acrylis-cookie-consent", "denied");
    setConsent(false);
  };

  // Hide banner if consent has already been decided
  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-acrylis-mist/70 border-t border-gray-200 p-6 shadow-2xl z-[100] animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <h3 className="font-bold text-acrylis-deep mb-1">Cookie Consent 🍪</h3>
          <p className="text-sm text-gray-600">
            I use cookies to analyze site traffic and improve the analyzer. No
            personal data or ingredient lists are ever collected. See the{" "}
            <Link
              to="/privacy"
              className="text-acrylis hover:underline font-semibold"
            >
              Privacy Policy
            </Link>{" "}
            for more information.
          </p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto flex-shrink-0">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none text-sm text-gray-500 hover:text-gray-800 font-semibold px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-acrylis hover:bg-acrylis-deep text-white px-8 py-2 rounded-full text-sm font-bold shadow-md transition-all active:scale-95"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
