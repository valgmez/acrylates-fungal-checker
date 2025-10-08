import React, { useEffect } from 'react';

// Make adsbygoogle available on the window object
declare global {
  interface Window {
    adsbygoogle?: { [key: string]: unknown }[];
  }
}

export const AdSense: React.FC = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="my-6" aria-label="Advertisement">
      {/* 
        This is a responsive ad unit.
        IMPORTANT: Replace the data-ad-client and data-ad-slot with your own values from AdSense.
      */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-0000000000000000" // Replace with your publisher ID
        data-ad-slot="0000000000" // Replace with your ad slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
