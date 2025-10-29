import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const Privacy: React.FC = () => {
  return (
    <>
      <Seo
        title="Privacy Policy – Acrylis"
        description="Read the privacy policy for Acrylis. Understand how your data is handled when you use our ingredient analyzer. Your privacy is important to us."
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: October 10, 2025
          </p>

          <div className="mt-6 text-gray-700 space-y-4">
            <p>
              Your privacy is important to us. This Privacy Policy explains how
              we handle information on Acrylis.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 pt-4">
              Ingredient Analysis
            </h2>
            <p>
              The ingredient lists you paste into our analyzer are processed
              entirely within your browser.{" "}
              <strong>
                This information is never sent to our servers, stored, or
                shared.
              </strong>{" "}
              The analysis is performed locally on your device.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 pt-4">
              Third-Party Advertising and Cookies
            </h2>
            <p>
              We use Google AdSense to display ads on our website. By using our
              site, you acknowledge and agree that Google and its partners may
              collect and process data about you for advertising purposes.
            </p>
            <p className="mt-2">
              Google uses cookies and other technologies to:
            </p>
            <ul className="mt-2">
              <li className="ml-4 list-disc">
                Serve and personalize ads based on your previous visits to our
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

            <h3 className="text-lg font-semibold text-gray-800 pt-4">
              Your Choices and Rights
            </h3>
            <ul className="mt-2">
              <li className="ml-4 list-disc">
                You can opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Ads Settings
                </a>
              </li>
              <li className="ml-4 list-disc">
                You can learn how Google uses data when you use our site by
                visiting{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How Google uses information from sites or apps that use our
                  services
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 pt-4">
              EU Users and GDPR
            </h3>
            <p className="mt-2">
              For users in the European Economic Area, we obtain consent for the
              use of cookies and similar technologies in accordance with the
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

            <h2 className="text-xl font-semibold text-gray-800 pt-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>

            <div className="mt-8 pt-6 border-t text-center">
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                &rarr; Check your ingredients with Acrylis &larr;
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Privacy;
