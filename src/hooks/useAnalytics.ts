import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "set",
      targetId: string,
      config?: Record<string, any>,
    ) => void;
  }
}

/**
 * Hook to track page views in GA4 on route changes.
 * Ensure the GA4 script is added to your index.html.
 */
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
      });
    }
  }, [location]);
};
