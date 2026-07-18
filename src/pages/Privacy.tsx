import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const Privacy: React.FC = () => {
  return (
    <>
      <Seo
        title="Privacy Policy – Acrylis"
        description="Read the privacy policy for Acrylis. Understand how your data is handled when you use the ingredient analyzer. Your privacy is important to me."
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-acrylis-mist/70 p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-extrabold text-acrylis-deep tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: July 17, 2026
          </p>

          <div className="mt-6 text-gray-700 space-y-4">
            <p>
              Your privacy is important to me. This Privacy Policy explains how
              information is handled on Acrylis.
            </p>

            <h2 className="text-xl font-semibold text-acrylis-deep pt-4">
              Ingredient Analysis
            </h2>
            <p>
              The ingredient lists you paste into the analyzer are processed
              entirely within your browser.{" "}
              <strong>
                This information is never sent to any server, stored, or shared.
              </strong>{" "}
              The analysis is performed locally on your device.
            </p>

            <h2 className="text-xl font-semibold text-acrylis-deep pt-4">
              Analytics
            </h2>
            <p>
              I use Google Analytics to understand how visitors interact with
              the website. This helps me improve the tool and provide more
              relevant content. Google Analytics uses cookies to collect
              anonymous information about your usage patterns. You can opt-out
              by selecting "Decline" on the cookie consent banner.
            </p>

            <h2 className="text-xl font-semibold text-acrylis-deep pt-4">
              Third-Party Advertising and Cookies
            </h2>
            <p>
              Google AdSense is used to display ads on this website. By using
              the site, you acknowledge and agree that Google and its partners
              may collect and process data about you for advertising purposes.
            </p>
            <p className="mt-2">
              Google uses cookies and other technologies to:
            </p>
            <ul className="mt-2">
              <li className="ml-4 list-disc">
                Serve and personalize ads based on your previous visits to this
                website and other sites
              </li>
              <li className="ml-4 list-disc">
                Measure the effectiveness of ads
              </li>
              <li className="ml-4 list-disc">
                Protect against fraud and abuse
              </li>
              <li className="ml-4 list-disc">
                Customize your advertising experience
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-acrylis-deep pt-4">
              Your Choices and Rights
            </h3>
            <ul className="mt-2">
              <li className="ml-4 list-disc">
                You can opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  className="text-acrylis hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Ads Settings
                </a>
              </li>
              <li className="ml-4 list-disc">
                You can learn how Google uses data when you use this site by
                visiting{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  className="text-acrylis hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How Google uses information from sites or apps that use our
                  services
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-acrylis-deep pt-4">
              EU Users and GDPR
            </h3>
            <p className="mt-2">
              For users in the European Economic Area, consent is obtained for
              the use of cookies and similar technologies in accordance with the
              ePrivacy Directive and GDPR. You have the right to:
            </p>
            <ul className="mt-2">
              <li className="ml-4 list-disc">Access your personal data</li>
              <li className="ml-4 list-disc">
                Request correction or deletion of your data
              </li>
              <li className="ml-4 list-disc">
                Object to or restrict processing of your data
              </li>
              <li className="ml-4 list-disc">Request data portability</li>
            </ul>

            <h2 className="text-xl font-semibold text-acrylis-deep pt-4">
              Changes to This Policy
            </h2>
            <p>
              This Privacy Policy may be updated from time to time. Changes will
              be communicated by posting the new Privacy Policy on this page.
            </p>

            <div className="mt-8 pt-6 border-t text-center">
              <Link
                to="/"
                className="bg-acrylis text-white px-8 py-3 rounded-full font-bold hover:bg-acrylis-deep transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 transition-transform transform hover:scale-105"
              >
                Try the Ingredient Analyzer
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Privacy;
