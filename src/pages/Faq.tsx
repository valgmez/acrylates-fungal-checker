import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const Faq: React.FC = () => {
  return (
    <>
      <Seo
        title="FAQ – Acrylates & Fungal Acne Questions Answered"
        description="Find answers to frequently asked questions about acrylates allergies, fungal acne (Malassezia folliculitis), and how the Acrylis ingredient analyzer works."
        keywords="skincare faq, what are acrylates, what is fungal acne, ingredient checker accuracy, cosmetic safety questions"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            Frequently Asked Questions 🤔
          </h1>

          <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Important Medical Disclaimer
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p className="font-bold">
                    The information provided on this website and through our
                    ingredient analyzer:
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Is for educational and informational purposes only</li>
                    <li>
                      Is not medical advice or a substitute for professional
                      medical consultation
                    </li>
                    <li>
                      Should not be used to diagnose, treat, cure, or prevent
                      any medical condition
                    </li>
                    <li>May not be complete or up-to-date</li>
                  </ul>
                  <p className="mt-2">
                    Always consult with qualified healthcare professionals such
                    as dermatologists or allergists for proper diagnosis and
                    treatment of skin conditions, allergies, or other medical
                    concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-8 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                What are acrylates? 🧪
              </h2>
              <p className="mt-2">
                Acrylates are a family of chemicals commonly used in cosmetics,
                skincare, and nail products to provide adhesion, form a film, or
                thicken a formula. While generally safe, they are a known cause
                of allergic contact dermatitis for a growing number of people.
                An allergy can develop over time with repeated exposure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                What is fungal acne? 🧐
              </h2>
              <p className="mt-2">
                "Fungal acne," officially known as Malassezia folliculitis, is
                an infection of the hair follicle caused by an overgrowth of
                Malassezia yeast, which is naturally present on the skin. This
                condition results in small, itchy, acne-like bumps. Certain
                cosmetic ingredients, particularly specific fatty acids and
                esters, can "feed" this yeast and worsen the condition.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                How does this tool work? ⚙️
              </h2>
              <p className="mt-2">
                Our tool uses a comprehensive internal database of known
                acrylates and fungal acne triggers. When you paste an ingredient
                list, the tool performs a rapid search against this database to
                identify any matches. It's a fast, offline process that respects
                your privacy, as your ingredient list is never sent to a server.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                How accurate is the tool? 🎯
              </h2>
              <p className="mt-2">
                The analyzer relies on a curated list of known trigger
                ingredients. While we strive to keep our database comprehensive
                and up-to-date, it may not be exhaustive. New chemical names or
                derivatives may not be included. Therefore, the results should
                be used as a guideline, not a definitive verdict. Always
                double-check with other sources and consult a professional if
                you have serious concerns.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Is this tool a substitute for medical advice? ⚕️
              </h2>
              <p className="mt-2">
                <strong>No.</strong> This tool is for informational and
                educational purposes only and is not a substitute for
                professional medical advice, diagnosis, or treatment. Always
                consult with a qualified healthcare professional or
                dermatologist regarding your specific condition, allergies, and
                product choices.
              </p>
            </div>

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

export default Faq;
