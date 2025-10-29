import React, { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (
      attr: "name" | "property",
      value: string,
      content: string
    ) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("name", "description", description);

    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      updateMetaTag("name", "keywords", keywords);
    } else if (keywordsTag) {
      keywordsTag.remove();
    }

    // Update Open Graph tags for social sharing
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);

    // Update Twitter Card tags
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);

    // Add or update canonical link
    const canonicalUrl = window.location.origin + window.location.pathname;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);
  }, [title, description, keywords]);

  return null; // This component does not render anything to the DOM itself
};

export default Seo;
