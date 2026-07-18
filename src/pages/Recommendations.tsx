import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Accordion from "../components/Accordion";

interface Product {
  brand: string;
  name: string;
  link: string;
}

const RecommendationList: React.FC<{ items: Product[] }> = ({ items }) => (
  <ul className="list-disc pl-5 space-y-3 pt-2">
    {items.map((product) => (
      <li key={product.brand + product.name} className="text-gray-700">
        <span className="font-bold text-gray-900">{product.brand}</span> {product.name} —{" "}
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="text-acrylis hover:underline text-sm font-bold inline-flex items-center gap-1 group/link"
          onClick={() => {
            if (typeof (window as any).gtag === "function") {
              (window as any).gtag("event", "click_recommendation", {
                brand: product.brand,
                product_name: product.name,
              });
            }
          }}
        >
          Shop Now <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
        </a>
      </li>
    ))}
  </ul>
);

const RecommendationsDisclaimer: React.FC = () => (
  <div className="mb-10 mt-6">
    <div className="bg-acrylis-mist border-l-4 border-acrylis p-6 rounded-r-2xl shadow-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-6 w-6 text-acrylis"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-base font-bold text-acrylis-deep">
            Product Recommendations Disclaimer
          </h3>
          <div className="mt-3 text-sm text-acrylis-deep/80 space-y-3">
            <p className="font-semibold">Before using any recommended products:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Formulations can change at any time — always verify ingredients</li>
              <li>Patch test any new product, even if it's listed as "safe"</li>
              <li>Individual reactions can vary - what works for others may not work for you</li>
              <li>Consult with a healthcare provider if you have sensitive skin</li>
            </ul>
            <p className="text-xs italic">
              Links may be affiliate links. This helps keep Acrylis free, but doesn't affect my choices 💖
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Recommendations: React.FC = () => {
  // Makeup
  const eyelashGlues: Product[] = [
    {
      brand: "imPRESS",
      name: "Press-On Falsies",
      link: "https://amzn.to/4dsRV1p",
    },
  ];
  const mascaras: Product[] = [
    {
      brand: "Essence",
      name: "Lash Princess Mascara",
      link: "https://amzn.to/3R62lNh",
    },
    {
      brand: "Honest Beauty",
      name: "Extreme Length Mascara + Lash Primer",
      link: "https://amzn.to/4tIxrbo",
    },
    {
      brand: "Burt’s Bees",
      name: "Nourishing Mascara",
      link: "https://amzn.to/43d6QYV",
    },
  ];
  const eyeliners: Product[] = [
    {
      brand: "SHEGLAM",
      name: "Bold Moves Kohl Cream Eyeliner Pencil",
      link: "https://amzn.to/3Ru10zM",
    },
    {
      brand: "Sephora Collection",
      name: "Long-Lasting 12HR Wear Eye Liner 01 Black",
      link: "https://amzn.to/4uc5b1L",
    },
    {
      brand: "Pacifica",
      name: "Vegan Water Resistant Eyeliner - Fringe for Women 0.04 oz Eyeliner",
      link: "https://amzn.to/42FVkoM",
    },
  ];
  const settingSprays: Product[] = [
    {
      brand: "NYX",
      name: "Matte Finish Makeup Setting Spray",
      link: "https://amzn.to/4dfchMX",
    },
  ];
  const foundations: Product[] = [
    {
      brand: "Estee Lauder",
      name: "Double Wear Foundation",
      link: "https://amzn.to/4tGkEWG",
    },
    {
      brand: "SHEGLAM",
      name: "Skinfinite Hydrating Foundation-Buttercream",
      link: "https://amzn.to/3RtYg5r",
    },
    {
      brand: "Max Factor",
      name: "Pan Stik Foundation",
      link: "https://amzn.to/4wA3Vac",
    },
    {
      brand: "L’Oréal",
      name: "True Match Nude Tinted Serum",
      link: "https://amzn.to/4wBxBnr",
    },
  ];
  const eyebrowProducts: Product[] = [
    {
      brand: "NYX",
      name: "Micro Brow Pencil",
      link: "https://amzn.to/43deX7T",
    },
  ];

  const eyeshadows: Product[] = [
    {
      brand: "SHEGLAM",
      name: "Viva La Leopard Palette",
      link: "https://www.sheglam.com/product/Viva-La-Leopard-Palette-6811289780389",
    },
  ];
  const blushes: Product[] = [
    {
      brand: "Benefit",
      name: "Powder Blushes",
      link: "https://amzn.to/4eR7XEX",
    },
  ];

  // Skincare
  const moisturizers: Product[] = [
    {
      brand: "Nivea",
      name: "Creme",
      link: "https://amzn.to/4ujY0on",
    },
    {
      brand: "The Ordinary",
      name: "Natural Moisturizing Factors + PhytoCeramides",
      link: "https://amzn.to/4tQ3ciQ",
    },
    {
      brand: "Various",
      name: "Pure Rosehip Oil",
      link: "https://amzn.to/499HrTA",
    },
    {
      brand: "Various",
      name: "Pure Argan Oil",
      link: "https://amzn.to/42F1DJo",
    },
  ];
  const cleansers: Product[] = [
    {
      brand: "Beauty of Joseon",
      name: "Green Plum Refreshing Cleanser",
      link: "https://amzn.to/4dg9ZNx",
    },
    {
      brand: "Holika Holika",
      name: "Aloe Facial Cleansing Foam",
      link: "https://amzn.to/3Pq1Ay0",
    },
  ];
  const toners: Product[] = [
    {
      brand: "HaruHaru Wonder",
      name: "Black Rice Hyaluronic Toner (Fragrance Free)",
      link: "https://amzn.to/3RcgLeJ",
    },
    {
      brand: "Equalberry",
      name: "Swimming Pool Toner",
      link: "https://amzn.to/4nx4Ggl",
    },
  ];
  const serumsAndTreatments: Product[] = [
    {
      brand: "The Ordinary",
      name: "Soothe & Barrier Support Serum",
      link: "https://amzn.to/4eI2TTj",
    },
    {
      brand: "The Ordinary",
      name: "Aloe 2% + NAG 2% Solution",
      link: "https://amzn.to/4wCq5cb",
    },
    {
      brand: "The Ordinary",
      name: "Salicylic Acid 2% Solution",
      link: "https://amzn.to/4ngREDk",
    },
    {
      brand: "Medipeel",
      name: "Peptide 9 Volume Bio Tox Ampoule Pro 100ml",
      link: "https://amzn.to/4weRCzX",
    },
    {
      brand: "VT Cosmetics",
      name: "Cica A1 Azelaic Acid Serum",
      link: "https://www.yesstyle.com/en/vt-azelaic-a1-calming-ampoule-30ml/info.html/pid.1134366027?utm_medium=LinkShare&utm_source=dynamic&mcg=influencer",
    },
    {
      brand: "Skinoren",
      name: "20% Azelaic Acid Cream",
      link: "",
    },
  ];
  const spf: Product[] = [
    {
      brand: "OMI Sun Bears",
      name: "Active Protect Milk SPF 50+ PA++++",
      link: "https://www.yesstyle.com/en/omi-sun-bears-active-protect-milk-sunscreen-spf-50-pa-30g/info.html/pid.1112540945?utm_medium=LinkShare&utm_source=dynamic&mcg=influencer",
    },
    {
      brand: "Nivea Sun",
      name: "UV Face Fluid SPF 50",
      link: "https://amzn.to/4hl1Slb",
    },
    {
      brand: "PRETTY SKIN",
      name: "Pink Tone Up Sun Cream SPF 50+ PA++++",
      link: "https://www.yesstyle.com/en/pretty-skin-sun-cream-3-types-pink-tone-up/info.html/pid.1133315821?utm_medium=LinkShare&utm_source=dynamic&mcg=influencer",
    },
  ];

  // Nail Products
  const nailPolishes: Product[] = [
    {
      brand: "Manicurist",
      name: "Green Natural Nail Polish",
      link: "https://amzn.to/3PbE9Zf",
    },
    {
      brand: "OPI",
      name: "Nature Strong Nail Lacquer",
      link: "https://amzn.to/4eSEUAU",
    },
    {
      brand: "Rimmel London",
      name: "Kind and Free Clean Nail Polish",
      link: "https://amzn.to/4wAMXIU",
    },
    {
      brand: "Nail Kind",
      name: "Natural Nail Polish",
      link: "https://amzn.to/4wEPdyY",
    },
    {
      brand: "Essie",
      name: "Good to Go Top Coat",
      link: "https://amzn.to/4nES8DK",
    },
  ];

  const haircare: Product[] = [
    {
      brand: "Various",
      name: "Whole Brown Flaxseeds (for DIY Gel)",
      link: "https://amzn.to/4tyZART",
    },
  ];

  const bodyCare: Product[] = [
    {
      brand: "Liquid Silk",
      name: "Silicone Lubricant (Carbomer-Free)",
      link: "https://amzn.to/3PE4gN9",
    },
  ];

  return (
    <>
      <Seo
        title="Acrylate-Free Product Recommendations – Makeup & Skincare"
        description="My personal curated list of makeup, skincare, and nail products that are free from acrylates. Safe products I've found and vetted for anyone with an acrylates allergy or fungal acne concerns."
        keywords="acrylate-free products, fungal acne safe makeup, safe skincare, acrylate-free mascara, acrylate-free foundation, nail polish without acrylates"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-acrylis-deep tracking-tight mb-4">
              Acrylate-Free Favorites
            </h1>
            <p className="text-lg text-gray-600">
              Tried, tested, and vetted products for sensitive skin.
            </p>
          </div>

          <RecommendationsDisclaimer />

          <div className="space-y-6">
            {/* Makeup */}
            <Accordion
              title="Makeup Recommendations 💅"
              titleClassName="text-2xl"
              defaultOpen={true}
            >
              <div className="prose prose-acrylis max-w-none mb-8 text-gray-600">
                <p>
                  Finding acrylate-free makeup can be challenging because
                  acrylates are widely used as film formers in mascaras,
                  eyeliners, and lash adhesives.
                </p>
              </div>
              <div className="space-y-10">
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Eyelash Glues
                  </h3>
                  <RecommendationList items={eyelashGlues} />
                </section>
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Mascaras
                  </h3>
                  <RecommendationList items={mascaras} />
                </section>
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Eyeliners
                  </h3>
                  <RecommendationList items={eyeliners} />
                </section>
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Setting Sprays
                  </h3>
                  <RecommendationList items={settingSprays} />
                </section>
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Foundations
                  </h3>
                  <RecommendationList items={foundations} />
                </section>
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Eyebrow Products
                  </h3>
                  <RecommendationList items={eyebrowProducts} />
                </section>
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Eyeshadows
                  </h3>
                  <RecommendationList items={eyeshadows} />
                </section>
                <section>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Blush
                  </h3>
                  <RecommendationList items={blushes} />
                </section>
              </div>
            </Accordion>

            {/* Skincare */}
            <Accordion
              title="Skincare Recommendations ✨"
              titleClassName="text-2xl"
            >
              <div className="prose prose-acrylis max-w-none mb-8 text-gray-600">
                <p>
                  Skincare products can be a hidden source of acrylates through thickening agents and texture enhancers.
                  For a complete guide, read my{" "}
                  <a
                    href="/blog/safe-skincare-routine"
                    className="text-acrylis font-bold underline"
                  >
                    routine building article
                  </a>.
                </p>
              </div>
              <div className="space-y-10">
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Toners
                  </h3>
                  <RecommendationList items={toners} />
                </section>
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Moisturizers
                  </h3>
                  <RecommendationList items={moisturizers} />
                </section>
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Serums & Treatments
                  </h3>
                  <RecommendationList items={serumsAndTreatments} />
                </section>
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    Cleansers
                  </h3>
                  <RecommendationList items={cleansers} />
                </section>
                <section>
                  <h3 className="text-xl font-bold text-acrylis-deep mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-acrylis rounded-full"></span>
                    SPF
                  </h3>
                  <RecommendationList items={spf} />
                </section>
              </div>
            </Accordion>

            {/* Nail Products */}
            <Accordion
              title="Nail Recommendations 💅"
              titleClassName="text-2xl"
            >
              <div className="prose prose-acrylis max-w-none mb-8 text-gray-600">
                <p>
                  Nail products are the single largest source of acrylate exposure.
                  Avoid gel and acrylic systems if you have a confirmed allergy!
                </p>
              </div>
              <section>
                <RecommendationList items={nailPolishes} />
              </section>
              <div className="mt-8 bg-acrylis-unsafe-light text-acrylis-unsafe-deep p-6 rounded-2xl border border-acrylis-unsafe/20 text-sm italic shadow-md">
                <strong>Safety First:</strong> Traditional polishes are generally safer than gel systems, but always patch test.
              </div>
            </Accordion>

            {/* Haircare */}
            <Accordion
              title="Haircare Recommendations 🌿"
              titleClassName="text-2xl"
            >
              <div className="prose prose-acrylis max-w-none mb-8 text-gray-600">
                <p>
                  Many hair gels and styling products contain acrylate copolymers for hold.
                  Switching to natural alternatives like DIY flaxseed gel can make a huge difference
                  for forehead and neck irritation.
                </p>
              </div>
              <section>
                <RecommendationList items={haircare} />
              </section>
              <div className="mt-8 bg-acrylis-mist p-6 rounded-2xl border border-gray-100 text-sm shadow-md">
                <p className="font-bold text-acrylis-deep mb-2">DIY Flaxseed Gel Guide</p>
                <p className="text-gray-600 mb-4">
                  Check out my blog post on how to make your own acrylate-free styling gel at home for pennies!
                </p>
                <Link
                  to="/blog/flaxseed-gel-hair-care"
                  className="text-acrylis font-bold hover:underline"
                >
                  Read the Guide &rarr;
                </Link>
              </div>
            </Accordion>

            {/* Body & Intimacy */}
            <Accordion
              title="Body & Intimacy Recommendations 💧"
              titleClassName="text-2xl"
            >
              <div className="prose prose-acrylis max-w-none mb-8 text-gray-600">
                <p>
                  Intimate products frequently contain carbomers to create that classic gel consistency.
                  If you are experiencing unexplained burning, check your labels.
                </p>
                <div className="mt-4 bg-acrylis-unsafe-light text-acrylis-unsafe-deep p-4 rounded-xl border border-acrylis-unsafe/20 text-sm shadow-sm">
                  <strong>A Note on Glycerin:</strong> Many water-based options contain high amounts of glycerin. If you are prone to yeast infections, glycerin can feed the yeast and cause burning that mimics an allergic reaction.
                </div>
              </div>
              <section>
                <RecommendationList items={bodyCare} />
              </section>
              <div className="mt-8 bg-acrylis-mist p-6 rounded-2xl border border-gray-100 text-sm shadow-md">
                <p className="font-bold text-acrylis-deep mb-2">My Carbomer & Lube Story</p>
                <p className="text-gray-600 mb-4">
                  I wrote about mistaking carbomer-induced chemical burning for vaginismus, and how throwing out my old lube solved it.
                </p>
                <Link
                  to="/blog/carbomer-in-lubricants-burning"
                  className="text-acrylis font-bold hover:underline"
                >
                  Read the Post &rarr;
                </Link>
              </div>
            </Accordion>


            {/* Tips */}
            <section className="bg-acrylis-mist p-10 rounded-2xl border border-gray-100 shadow-md">
              <h2 className="text-2xl font-bold text-acrylis-deep mb-6 flex items-center gap-3">
                <span className="p-2 bg-acrylis-light/30 rounded-lg shadow-sm">💡</span>
                Quick Tips for Shopping
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <ul className="list-disc list-inside space-y-4">
                  <li>
                    Look for <span className="font-bold underline decoration-acrylis-lilac">"all natural"</span> labels but still read the back.
                  </li>
                  <li>
                    Watch out for <span className="font-bold text-acrylis">carbomers</span> — they are everywhere!
                  </li>
                  <li>
                    When in doubt, stick to simple minerals and oils.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-16 text-center text-sm text-gray-400 pb-4 italic">
            <p>
              Always double-check formulas as brands change them without notice.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Recommendations;
