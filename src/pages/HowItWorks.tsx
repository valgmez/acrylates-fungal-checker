import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon?: string }> = ({ title, children, icon }) => (
  <div className="bg-acrylis-mist rounded-2xl shadow-md border border-gray-100 p-8 md:p-10 transition-all hover:shadow-lg">
    <h2 className="text-2xl font-bold text-acrylis-deep flex items-center gap-3 mb-6">
      <span className="p-2 bg-acrylis-light/30 rounded-xl group-hover:bg-acrylis-lilac transition-colors">
        {icon}
      </span>
      {title}
    </h2>
    <div className="prose prose-acrylis max-w-none text-gray-600 leading-relaxed">
      {children}
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <>
      <Seo
        title="How It Works – Acrylis Ingredient Analyzer"
        description="Learn how the Acrylis ingredient analyzer works, including the matching algorithm, database sources, privacy architecture, and how to get the most accurate results."
        keywords="how acrylis works, ingredient analyzer algorithm, skincare analysis tool, acrylate detection, fungal acne checker method"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-acrylis-deep tracking-tight mb-4">
              How Acrylis Works
            </h1>
            <p className="text-lg text-gray-600">
              A transparent look at our privacy-first analysis engine and scientific methodology.
            </p>
          </div>

          <div className="space-y-8">
            <InfoCard title="Privacy-First Architecture" icon="🔒">
              <p>
                Acrylis runs entirely in your web browser. When you paste an
                ingredient list and click "Analyze," the processing happens
                locally on your device using JavaScript. Your ingredient lists are
                never sent to any server, stored in any database, or shared with
                anyone.
              </p>
              <p className="mt-4">
                This means the analyzer works instantly without waiting
                for server responses and even functions offline once the page has
                loaded. Your privacy is protected by design — that was important
                to me from the very beginning.
              </p>
            </InfoCard>

            <InfoCard title="Step 1: Parsing Your Ingredient List" icon="✍️">
              <p>
                When you paste an ingredient list into the analyzer, the tool
                first splits it into individual ingredients. It recognizes common
                delimiters including commas, periods, semicolons, and newlines.
              </p>
              <p className="mt-4">
                The parser also handles parenthetical content, such as "CI 77891
                (Titanium Dioxide)," by normalizing the ingredient name while
                preserving the full original text for accurate matching. Extra
                whitespace, capitalization differences, and common formatting
                variations are all normalized to ensure consistent matching.
              </p>
            </InfoCard>

            <InfoCard title="Step 2: Exact Match Search" icon="🎯">
              <p>
                Each parsed ingredient is first checked against the database using
                exact string matching (case-insensitive). The acrylates database
                contains over 90 known acrylate compounds and cross-reactors, each
                paired with an explanation of why the ingredient is flagged.
              </p>
              <p className="mt-4">
                The fungal acne trigger database contains over 45 known
                Malassezia-feeding ingredients. If an exact match is found, the
                ingredient is immediately flagged with its classification and a
                detailed explanation.
              </p>
            </InfoCard>

            <InfoCard title="Step 3: Substring and Pattern Matching" icon="🧪">
              <p>
                If no exact match is found, the algorithm performs substring
                matching against known acrylate-related terms. This catches
                ingredients whose names contain recognizable acrylate fragments,
                such as ingredients ending in "-acrylate," "-methacrylate," or
                containing terms like "acrylamide" or "cryl."
              </p>
              <p className="mt-4">
                Substring matches are flagged with an "Unknown" classification because the exact
                compound may or may not be problematic depending on its specific
                chemical structure. The algorithm also checks for certain
                polyquaternium compounds and resin-based ingredients that may use
                acrylate chemistry.
              </p>
            </InfoCard>

            <InfoCard title="Step 4: False Positive Filtering" icon="🛡️">
              <p>
                Not every ingredient containing acrylate-related substrings is
                actually problematic. The false positive filter excludes specific
                copolymers and compounds that have been verified as non-acrylate
                and non-allergenic, preventing unnecessary flags.
              </p>
              <p className="mt-4">
                This filter is continuously updated as new information becomes available from
                dermatological research and community feedback.
              </p>
            </InfoCard>

            <InfoCard title="Step 5: Results and Grading" icon="📊">
              <p>
                The analyzer produces a detailed breakdown of all identified
                ingredients, categorizing each as "Safe," "Unsafe," or "Unknown."
                Unsafe ingredients include the specific reason they are flagged
                and practical guidance.
              </p>
              <p className="mt-4">
                The overall result is graded on a scale from A+ (no issues found) to D
                (multiple high-risk ingredients detected), with ingredient
                position in the list taken into account (ingredients in the top
                five positions are weighted more heavily because they are present
                in higher concentrations).
              </p>
            </InfoCard>

            <InfoCard title="My Data Sources" icon="📚">
              <p>
                The acrylates database is compiled from the American Academy of
                Dermatology clinical guidelines, the North American Contact
                Dermatitis Group allergen prevalence data, DermNet NZ, and the
                Contact Dermatitis Institute.
              </p>
              <p className="mt-4">
                The fungal acne trigger database draws from the Simple Skincare Science research compilation,
                Folliculitis Scout, and peer-reviewed research published through
                NCBI on Malassezia lipid metabolism. For a full list of sources,
                visit the{" "}
                <Link
                  to="/references"
                  className="text-acrylis hover:text-acrylis-deep underline font-bold"
                >
                  References page
                </Link>.
              </p>
            </InfoCard>

            <div className="bg-acrylis-mist p-10 rounded-2xl border border-acrylis-lilac shadow-md">
              <h2 className="text-2xl font-bold text-acrylis-deep mb-6 flex items-center gap-3">
                <span>💡</span> Tips for Accurate Results
              </h2>
              <ul className="space-y-4 text-acrylis-deep/80">
                <li className="flex items-start gap-3">
                  <span className="text-acrylis font-bold mt-0.5">→</span>
                  <span>Copy the entire ingredient list exactly as it appears on the product label.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-acrylis font-bold mt-0.5">→</span>
                  <span>Include all parenthetical content (some acrylates hide there!).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-acrylis font-bold mt-0.5">→</span>
                  <span>Re-check products after any formula change or reformulation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-acrylis font-bold mt-0.5">→</span>
                  <span>Remember that individual reactions vary — use results as a guide.</span>
                </li>
              </ul>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100 text-center">
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

export default HowItWorks;
