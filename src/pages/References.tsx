import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Accordion from "../components/Accordion";

const ReferenceItem: React.FC<{
  title: string;
  description: string;
  url: string;
}> = ({ title, description, url }) => (
  <div className="border-l-4 border-acrylis-lilac pl-6 py-2 transition-all hover:border-acrylis">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-bold text-gray-900 hover:text-acrylis transition-colors"
    >
      {title}
    </a>
    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{description}</p>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-3 text-acrylis text-xs font-semibold hover:underline"
    >
      Visit Source &rarr;
    </a>
  </div>
);

const References: React.FC = () => {
  return (
    <>
      <Seo
        title="References & Sources – Acrylis Ingredient Checker"
        description="Explore the scientific sources, dermatological resources, and community-driven data that power the Acrylis ingredient database for acrylates and fungal acne."
        keywords="skincare research, dermatology sources, acrylates allergy study, malassezia folliculitis research, ingredient database sources"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-acrylis-deep tracking-tight mb-4">
              References & Sources
            </h1>
            <p className="text-lg text-gray-600">
              The science and community expertise behind the Acrylis analyzer.
            </p>
          </div>

          <div className="space-y-6">
            <Accordion
              title="Acrylates Allergy Research 🔬"
              defaultOpen={true}
              titleClassName="text-xl"
            >
              <div className="space-y-8 pt-4">
                <ReferenceItem
                  title="American Academy of Dermatology (AAD)"
                  description="Provides clinical overviews and patient information on contact dermatitis, including allergens like acrylates found in cosmetics, medical devices, and nail products. Their clinical guidelines inform our primary acrylate classifications."
                  url="https://www.aad.org/public/diseases/eczema/contact-dermatitis"
                />
                <ReferenceItem
                  title="Contact Dermatitis Institute"
                  description="Offers detailed information on various allergens, including isobornyl acrylate and other acrylate compounds, along with their sources and cross-reactivity patterns. A key reference for our nail product and medical device allergen data."
                  url="https://www.contactdermatitisinstitute.com/"
                />
                <ReferenceItem
                  title="DermNet NZ – Allergy to Acrylates"
                  description="A comprehensive New Zealand-based dermatological resource providing information on the causes, symptoms, diagnosis, and treatment of allergic contact dermatitis to acrylates. Includes detailed information on specific acrylate compounds and occupational exposure risks."
                  url="https://dermnetnz.org/topics/allergy-to-acrylates"
                />
                <ReferenceItem
                  title="North American Contact Dermatitis Group (NACDG)"
                  description="Publishes periodic prevalence studies of contact allergens in North America, providing epidemiological data on the most common causes of allergic contact dermatitis. Their data helps prioritise which acrylate compounds to include in the database."
                  url="https://www.acdermatitissoceity.org/nacdg"
                />
                <ReferenceItem
                  title="NCBI – Acrylate Allergy and Contact Dermatitis Research"
                  description="The National Center for Biotechnology Information hosts peer-reviewed scientific literature on acrylate sensitisation, including studies on the mechanisms of acrylate allergy, prevalence data, and clinical management guidelines."
                  url="https://www.ncbi.nlm.nih.gov/pubmed/?term=acrylate+allergy+contact+dermatitis"
                />
              </div>
            </Accordion>

            <Accordion
              title="Fungal Acne (Malassezia Folliculitis) Studies 🧪"
              titleClassName="text-xl"
            >
              <div className="space-y-8 pt-4">
                <ReferenceItem
                  title="Simple Skincare Science – Malassezia Folliculitis Treatment Guide"
                  description="An extensively researched blog post that is widely considered the definitive community guide on Malassezia folliculitis. Includes a comprehensive master list of safe and unsafe ingredients based on fatty acid carbon chain length analysis. This is our primary source for fungal acne trigger classifications."
                  url="https://simpleskincarescience.com/pityrosporum-folliculitis-treatment-malassezia-cure/"
                />
                <ReferenceItem
                  title="Folliculitis Scout"
                  description="A dedicated resource that provides tools and ingredient lists to help users identify products that are safe for those with Malassezia folliculitis. Their ingredient classification methodology informs our approach to categorising esters and fatty acid derivatives."
                  url="https://folliculitisscout.com/"
                />
                <ReferenceItem
                  title="NCBI – The Role of Lipids in Malassezia Growth"
                  description="Scientific literature and research papers discussing the biochemistry of Malassezia yeast, particularly the relationship between fatty acid carbon chain length and yeast growth. This research underpins our understanding of why specific ingredients feed Malassezia and informs our trigger classifications."
                  url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3969248/"
                />
                <ReferenceItem
                  title="DermNet NZ – Malassezia Folliculitis"
                  description="Clinical information on the diagnosis, symptoms, and treatment of Malassezia folliculitis from a trusted dermatological resource. Provides medical context that helps us understand the practical significance of our ingredient classifications."
                  url="https://dermnetnz.org/topics/folliculitis"
                />
                <ReferenceItem
                  title="NCBI – Malassezia and Skin Disorders"
                  description="A broader collection of peer-reviewed research on Malassezia yeast species, their role in various skin conditions, and the environmental and host factors that influence Malassezia proliferation on human skin."
                  url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3184838/"
                />
              </div>
            </Accordion>

            <Accordion
              title="Ingredient Databases & Regulatory Resources 🏛️"
              titleClassName="text-xl"
            >
              <div className="space-y-8 pt-4">
                <ReferenceItem
                  title="EU CosIng Database"
                  description="The European Commission's CosIng database provides comprehensive information on cosmetic ingredients, including their functions, restrictions, and safety assessments. Used as a reference for verifying ingredient names and INCI nomenclature."
                  url="https://ec.europa.eu/growth/tools-databases/cosing"
                />
                <ReferenceItem
                  title="EWG Skin Deep Database"
                  description="The Environmental Working Group's database provides hazard ratings and safety assessments for thousands of cosmetic ingredients. Used as a supplementary reference for ingredient safety evaluation."
                  url="https://www.ewg.org/skindeep/"
                />
              </div>
            </Accordion>

            <div className="mt-16 pt-10 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500 max-w-2xl mx-auto italic">
                This list is not exhaustive. I continuously review new research
                to keep the analyzer as accurate as possible. If you know of a
                source that should be included, please{" "}
                <Link
                  to="/contact"
                  className="text-acrylis hover:underline font-semibold"
                >
                  get in touch
                </Link>.
              </p>
              <div className="mt-8">
                <Link
                  to="/"
                  className="bg-acrylis text-white px-8 py-3 rounded-full font-bold hover:bg-acrylis-deep transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 transition-transform transform hover:scale-105"
                >
                  Try the Ingredient Analyzer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default References;
