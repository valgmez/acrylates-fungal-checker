import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const About: React.FC = () => {
  return (
    <>
      <Seo
        title="About Acrylis – Our Mission for Safer Skincare"
        description="Learn about the mission behind Acrylis. Discover why we created this free ingredient analyzer for acrylates allergies and fungal acne, and how we're dedicated to empowering consumers."
        keywords="about acrylis, skincare safety, cosmetic ingredient checker, our mission, fungal acne tool, acrylates allergy help"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            About Acrylis 💁‍♀️
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to make skincare safer and easier for everyone. 💖
          </p>

          <div className="mt-6 text-gray-700 space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
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
                  <p className="text-sm text-yellow-700">
                    <strong>Medical Disclaimer:</strong> The information
                    provided by Acrylis is for informational purposes only and
                    is not a substitute for professional medical advice. Always
                    consult with a qualified healthcare provider, such as a
                    dermatologist or allergist, for proper diagnosis and
                    treatment of skin conditions.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p>
              Acrylis was born from personal experience. After developing an
              allergy to acrylates myself, I spent countless hours poring over
              ingredient lists, trying to decipher which products were safe to
              use. The process was overwhelming and time-consuming – reading
              through complicated chemical names, cross-checking with research
              papers, and still sometimes missing problematic ingredients.
            </p>
            <p>
              This frustrating experience led me to create Acrylis. I wanted to
              help others who, like me, were struggling to navigate the complex
              world of skincare with an acrylates allergy. Later, we expanded to
              include fungal acne triggers as well, as we discovered many people
              faced similar challenges in identifying safe products.
            </p>
            <p>
              Today, we maintain a comprehensive, offline database of known
              acrylates, cross-reactors, and fungal acne triggers based on
              dermatological research and community-driven data. By pasting an
              ingredient list into our analyzer, you get an instant,
              easy-to-understand breakdown of potentially problematic
              components.
            </p>
            <p>
              Our mission is simple: to help you make informed decisions about
              your skincare products quickly and easily, saving you from the
              time-consuming process of manually checking each ingredient.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Remember:</strong> While we strive to maintain
                    accurate and up-to-date information, individual reactions
                    can vary. What works for one person may not work for
                    another. Always patch test new products and work with
                    healthcare professionals to manage your skin concerns.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
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

export default About;
