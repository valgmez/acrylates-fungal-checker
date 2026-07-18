import React from "react";
import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, keywords }) => {
  const canonicalUrl = typeof window !== "undefined" ? window.location.origin + window.location.pathname : "https://acrylis.cc";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter Card tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default Seo;
