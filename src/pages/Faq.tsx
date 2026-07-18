import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Accordion from "../components/Accordion";

const faqItems = [
  {
    question: "What are acrylates?",
    answer:
      "Acrylates are a family of synthetic chemicals derived from acrylic acid. They are widely used in cosmetics, nail products, adhesives, and medical supplies to provide adhesion, form durable films, or thicken formulas. While generally safe for most people, acrylates are a known cause of allergic contact dermatitis — a Type IV delayed hypersensitivity reaction that can develop over time with repeated exposure. Common acrylate compounds include ethyl acrylate, methyl methacrylate, and 2-hydroxyethyl methacrylate (HEMA). An allergy can develop at any point, even after years of using products containing these chemicals without issue.",
  },
  {
    question: "What is fungal acne?",
    answer:
      '"Fungal acne," officially known as Malassezia folliculitis, is a skin condition caused by an overgrowth of Malassezia yeast within hair follicles. Despite its popular name, it is not true acne but a yeast infection that produces acne-like symptoms. It typically appears as small, uniform, itchy bumps on the upper chest, back, shoulders, and forehead. Certain cosmetic ingredients — particularly specific fatty acids, esters, and oils — can feed Malassezia yeast and worsen the condition. Fungal acne requires antifungal treatment rather than the antibacterial approaches used for regular acne.',
  },
  {
    question: "How does the Acrylis ingredient analyzer work?",
    answer:
      "My tool uses a comprehensive internal database of known acrylates and fungal acne triggers. When you paste an ingredient list, the tool parses it into individual ingredients and performs a multi-stage search: first, exact matching against the database; second, substring and pattern matching to catch ingredient name variations; and third, false positive filtering to exclude verified safe compounds. The entire process runs in your browser — your ingredient list is never sent to a server. For a detailed technical explanation, visit my How It Works page.",
  },
  {
    question: "How accurate is the ingredient analyzer?",
    answer:
      "The analyzer relies on a curated database of over 90 acrylate compounds and 45+ fungal acne triggers, compiled from dermatological research and clinical resources. While I strive to keep the database comprehensive, it may not be exhaustive. New chemical names, proprietary blends, or reformulated products may contain ingredients not yet in the database. The substring matching may also produce false positives for ingredients that contain acrylate-related substrings but are not themselves allergenic. Results should be used as a helpful guideline alongside other research and professional advice, not as a definitive verdict.",
  },
  {
    question: "Is my ingredient data private?",
    answer:
      "Yes. Acrylis runs entirely in your web browser. When you paste an ingredient list, it is processed locally using JavaScript on your device. Your ingredient lists are never transmitted to any server, stored in any database, or shared with anyone. Your analysis history is saved only in your browser's local storage and is never accessible to me or anyone else. You can clear your analysis history at any time through the tool interface.",
  },
  {
    question: "Is this tool a substitute for medical advice?",
    answer:
      "No. This tool is for informational and educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. If you suspect you have an acrylate allergy or fungal acne, consult a qualified dermatologist or allergist for proper testing (such as patch testing) and personalised treatment. The results provided by the analyzer should be used as one input in your product selection process, alongside professional guidance and your own experience.",
  },
  {
    question: "What ingredient names does the analyser recognise?",
    answer:
      'The analyser recognises INCI (International Nomenclature of Cosmetic Ingredients) names, which is the standard naming system used on cosmetic and skincare product labels worldwide. This includes common names, Latin botanical names, and chemical compound names. The database also handles common variations and abbreviations, such as "HEMA" for 2-hydroxyethyl methacrylate. Substring matching catches ingredients that contain acrylate-related fragments even if the exact compound is not in the database.',
  },
  {
    question:
      "Why was my product flagged when it doesn't contain obvious acrylates?",
    answer:
      'Some cosmetic ingredients contain acrylate-related compounds under names that are not immediately obvious. For example, "carbomer" is a polyacrylic acid derivative, "acrylates copolymer" is used as a film-forming agent, and certain polyquaternium compounds may use acrylate chemistry. Additionally, the substring matcher flags ingredients containing patterns like "acryl," "methacryl," or "cryl" as "Unknown" — meaning the ingredient could potentially be problematic but has not been specifically verified. These Unknown flags are conservative and should be evaluated on a case-by-case basis.',
  },
  {
    question: "How often is the ingredient database updated?",
    answer:
      "I review and update the database approximately quarterly, incorporating new dermatological research, community feedback, and newly reported allergens. When I identify new ingredients to add or existing entries to correct, the changes are published as part of a website update. You can see an update notification in the tool when a new database version is available. If you believe an ingredient is incorrectly classified, please get in touch with details so I can investigate.",
  },
  {
    question: "Can I use Acrylis on my phone or tablet?",
    answer:
      "Yes. Acrylis is fully responsive and works on smartphones, tablets, and desktop computers. The interface adapts to your screen size for comfortable use on any device. Your analysis history is saved in your browser's local storage, so it persists between sessions on the same device and browser, but it does not sync across different devices or browsers.",
  },
  {
    question:
      "What should I do if I have a reaction to a product that Acrylis marked as safe?",
    answer:
      "If you experience a reaction to a product that the analyser did not flag, there are several possible explanations. The product may have been recently reformulated with new ingredients not yet in the database. The specific ingredient causing your reaction may be one that is not yet recognised as an allergen. Or you may have a sensitivity to an ingredient that is not related to acrylates or fungal acne triggers. In any case, discontinue use of the product and consult a dermatologist for proper allergy testing. Please also get in touch to report the incident so I can investigate and potentially update the database.",
  },
  {
    question: "How is Acrylis different from other ingredient checkers?",
    answer:
      "Acrylis combines both acrylate detection and fungal acne trigger identification in a single tool, which is relatively uncommon. I focus specifically on these two categories, allowing for deeper and more accurate databases for these specific concerns rather than trying to cover every possible skin concern. Additionally, the tool runs entirely client-side for privacy, provides detailed explanations for each flagged ingredient, and includes a grading system that accounts for ingredient concentration based on label position.",
  },
];

const Faq: React.FC = () => {
  return (
    <>
      <Seo
        title="FAQ – Acrylates & Fungal Acne Questions Answered"
        description="Find answers to frequently asked questions about acrylates allergies, fungal acne (Malassezia folliculitis), and how the Acrylis ingredient analyzer works."
        keywords="skincare faq, what are acrylates, what is fungal acne, ingredient checker accuracy, cosmetic safety questions"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-acrylis-deep tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Clear answers to your questions about acrylates, fungal acne, and our analyser.
            </p>
          </div>

          <div className="mb-10 bg-acrylis-unsafe-light border-l-4 border-acrylis-unsafe p-6 rounded-r-2xl shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-acrylis-unsafe"
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
              <div className="ml-4">
                <h3 className="text-base font-bold text-acrylis-unsafe-deep">
                  Important Medical Disclaimer
                </h3>
                <div className="mt-2 text-sm text-acrylis-unsafe-deep/90 space-y-3">
                  <p className="font-semibold">
                    The information provided on this website and through the
                    ingredient analyzer:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Is for educational and informational purposes only</li>
                    <li>
                      Is not medical advice or a substitute for professional
                      medical consultation
                    </li>
                    <li>
                      Should not be used to diagnose, treat, cure, or prevent
                      any medical condition
                    </li>
                  </ul>
                  <p>
                    Always consult with qualified healthcare professionals such
                    as dermatologists or allergists for proper diagnosis and
                    treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                title={item.question}
                titleClassName="text-lg md:text-xl"
              >
                <div className="prose prose-sm prose-acrylis max-w-none">
                  <p>{item.answer}</p>
                </div>
              </Accordion>
            ))}
          </div>

          <div className="mt-16 pt-4 border-t border-gray-100 text-center">
            <Link
              to="/"
              className="bg-acrylis text-white px-8 py-3 rounded-full font-bold hover:bg-acrylis-deep transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 transition-transform transform hover:scale-105"
            >
              Try the Ingredient Analyzer
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Faq;
