import { AnalysisResult, FoundIngredient, IndividualAnalysis } from "../types";

const ACRYLATES_MASTER_LIST_EXPLANATIONS: ReadonlyMap<string, string> = new Map(
  [
    // Old
    [
      "acroleic acid",
      "an acrylic‑family acid structurally related to propenoic acids",
    ],
    ["acrylate", "a general term for salts or esters of acrylic acid"],
    [
      "acrylates",
      "a broad class of materials made from acrylic acid or its esters",
    ],
    [
      "carbomar",
      "misspelling/variant of carbomer, a crosslinked acrylic acid polymer",
    ],
    [
      "cyanoacrylate",
      "a fast‑curing adhesive resin made from cyano‑substituted acrylates",
    ],
    [
      "dermabond",
      "a medical‑grade cyanoacrylate adhesive used for wound closure",
    ],
    ["diakon", "a trade name for PMMA (acrylic plastic)"],
    [
      "eudragit",
      "a family of acrylic and methacrylic copolymers used in pharmaceuticals",
    ],
    [
      "ethylenecarboxylic acid",
      "another name for acrylic acid or closely related acids",
    ],
    ["histoacryl", "a medical tissue adhesive made from cyanoacrylate"],
    ["lucite", "a brand name for PMMA, also known as acrylic plastic"],
    ["methacrylate", "a monomer or resin made from methacrylic acid"],
    [
      "methoxycrylene",
      "a UV stabilizer structurally related to octocrylene and cyanoacrylates",
    ],
    ["perspex", "a trade name for PMMA (acrylic plastic)"],
    ["plexiglas", "a trade name for PMMA (acrylic sheet material)"],
    ["polyacrylate", "a polymer made from acrylic acid or its salts"],
    ["polycarbophil", "a crosslinked acrylic acid polymer used as a thickener"],
    [
      "polycarboxylates",
      "a group of acrylic‑derived polymers used for binding or thickening",
    ],
    ["propenoic acid", "another chemical name for acrylic acid"],
    ["styrene", "a monomer that can co‑polymerize with acrylates"],
    ["vinyl acetate", "a vinyl monomer that can cross‑react with acrylates"],
    [
      "vinylformic acid",
      "a vinyl derivative chemically related to acrylic acid",
    ],
    // New ones
    ["acrylic acid", "a simple acrylic acid used to make polymers and gels"],
    [
      "methacrylic acid",
      "a methacrylate used as a building block in resins and plastics",
    ],
    [
      "pentaerythritol triacrylate",
      "an acrylate monomer used in adhesives and UV-cured coatings",
    ],
    [
      "pentaerythritol tetraacrylate",
      "an acrylate monomer used in crosslinked resins",
    ],
    ["octocrylene", "a UV filter related to cyanoacrylate chemistry"],
    ["etocrylene", "a UV filter related to cyanoacrylate chemistry"],
    [
      "di-hema trimethylhexyl dicarbamate",
      "a methacrylate-based monomer with urethane groups",
    ],
    [
      "bis-gma",
      "a resin made from methacrylate monomers, used in dental and nail products",
    ],
    [
      "bis-ema",
      "a methacrylate-based resin, similar to Bis-GMA but less viscous",
    ],
    [
      "dipentaerythritol hexaacrylate",
      "a highly reactive acrylate monomer used in UV-curable systems",
    ],
    [
      "pegda",
      "polyethylene glycol diacrylate, a water-soluble acrylate monomer",
    ],
    [
      "pegdma",
      "polyethylene glycol dimethacrylate, a crosslinking methacrylate monomer",
    ],
    ["pegma", "polyethylene glycol methacrylate, a water-soluble methacrylate"],
    ["carbomer", "a gel-forming polymer made from crosslinked acrylic acid"],
    [
      "carbomer 934",
      "a gel-forming polymer made from crosslinked acrylic acid",
    ],
    [
      "carbomer 940",
      "a gel-forming polymer made from crosslinked acrylic acid",
    ],
    [
      "carbomer 941",
      "a gel-forming polymer made from crosslinked acrylic acid",
    ],
    [
      "carbomer 980",
      "a gel-forming polymer made from crosslinked acrylic acid",
    ],
    [
      "carbomer 981",
      "a gel-forming polymer made from crosslinked acrylic acid",
    ],
    [
      "carbomer 1382",
      "a gel-forming polymer made from crosslinked acrylic acid",
    ],
    [
      "carboxypolymethylene",
      "a crosslinked poly(acrylic acid) used as a thickener",
    ],
    ["carbopol", "a brand of crosslinked poly(acrylic acid) polymers"],
    ["ultrez", "a type of crosslinked poly(acrylic acid) used for thickening"],
    ["pemulen tr-1", "acrylate-based copolymers used as emulsifiers"],
    ["pemulen tr-2", "acrylate-based copolymers used as emulsifiers"],
    ["etd 2020", "an acrylate copolymer used for thickening or emulsifying"],
    ["poly(acrylic acid)", "a synthetic polymer made from acrylic acid"],
    ["paa", "abbreviation for poly(acrylic acid), a synthetic thickener"],
    ["shellac/acrylates copolymer", "a shellac-modified acrylate copolymer"],
    ["shellac acrylate", "a hybrid material combining shellac and acrylates"],
    ["polyester-8", "a polyester that includes acrylate or methacrylate units"],
    [
      "pmma",
      "a hard plastic made from methyl methacrylate (e.g., in acrylic nails)",
    ],
    [
      "udma",
      "urethane dimethacrylate, a key component in dental and nail resins",
    ],
    [
      "2-ethylhexyl 2-cyano-3,3-diphenylprop-2-enoate",
      "a UV filter derived from cyanoacrylate chemistry",
    ],
    ["uvinul n-539", "a trade name for a cyanoacrylate-based UV filter"],
    ["polyquaternium-5", "a copolymer made from acrylamide and acrylate units"],
    [
      "polyquaternium-7",
      "made from acrylamide and diallyldimethylammonium chloride",
    ],
    ["polyquaternium-8", "includes methyl acrylate in a vinyl-based polymer"],
    [
      "polyquaternium-9",
      "includes methacrylamide as part of a quaternary polymer",
    ],
    ["polyquaternium-11", "contains methacrylate as part of a vinyl copolymer"],
    [
      "polyquaternium-14",
      "contains methacrylamide and quaternary ammonium units",
    ],
    ["polyquaternium-15", "includes both acrylamide and methacrylate units"],
    [
      "polyquaternium-22",
      "acrylic acid copolymer with quaternary ammonium groups",
    ],
    ["polyquaternium-28", "includes methacrylamide units in a vinyl copolymer"],
    ["polyquaternium-30", "built from methacrylate monomers"],
    ["polyquaternium-31", "includes methacrylamide and vinyl monomers"],
    [
      "polyquaternium-32",
      "acrylamide-based polymer with quaternary ammonium salt",
    ],
    [
      "polyquaternium-33",
      "copolymer of acrylamide and acrylate-based quaternary salt",
    ],
    ["polyquaternium-35", "made from methacrylate-derived ammonium salts"],
    ["polyquaternium-36", "contains acrylamide and acrylate building blocks"],
    [
      "polyquaternium-37",
      "a homopolymer of acrylate-based quaternary ammonium",
    ],
    [
      "polyquaternium-39",
      "includes acrylic acid and acrylamide in a quaternary polymer",
    ],
    [
      "polyquaternium-43",
      "copolymer of acrylamide and acrylate-related monomers",
    ],
    [
      "polyquaternium-47",
      "includes acrylic acid, methacrylamide, and methyl acrylate",
    ],
    ["polyquaternium-53", "built from acrylic acid and acrylamide units"],
    ["polyquaternium-56", "contains quaternized methacrylate monomers"],
    // Polyurethanes
    [
      "polyurethane-9",
      "a polyurethane resin modified with acrylate units for film-forming properties",
    ],
    [
      "polyurethane-50",
      "includes acrylate or methacrylate components for flexibility and adhesion",
    ],
    [
      "polyurethane-51",
      "contains acrylate building blocks as part of a cosmetic polymer system",
    ],
    [
      "polyurethane-52",
      "an acrylate-modified polyurethane used in styling or color cosmetics",
    ],
    [
      "polyurethane-53",
      "a hybrid polymer made from urethane and acrylate components",
    ],
    [
      "polyurethane-54",
      "a cosmetic film former based on urethane-acrylate chemistry",
    ],
    [
      "polyurethane-55",
      "includes acrylate monomers in a polyurethane backbone",
    ],
    [
      "polyurethane-56",
      "a urethane-acrylate copolymer used for flexible, water-resistant films",
    ],
    [
      "polyurethane-57",
      "made from urethane and acrylate units, often in waterproof formulas",
    ],
  ]
);

const ACRYLATES_MASTER_LIST: ReadonlySet<string> = new Set(
  ACRYLATES_MASTER_LIST_EXPLANATIONS.keys()
);

const ACRYLATE_FALSE_POSITIVES = [
  "ethylene/propylene/styrene copolymer",
  "butylene/ethylene/styrene copolymer",
  "styrene/butadiene copolymer",
  "styrene/isoprene copolymer",
  "ethylene/styrene copolymer",
];

const SUBSTRING_TRIGGERS: ReadonlyArray<string> = [
  "acryl",
  "acrylate",
  "methacryl",
  "cyanoacrylate",
  "polyacrylate",
  "carbomer",
  "acrylate crosspolymer",
  "paa",
  "cryl",
  "crylene",
];

// A detailed list of keywords for fungal acne (Malassezia folliculitis) triggers.
const FUNGAL_ACNE_TRIGGERS: ReadonlyMap<string, string> = new Map([
  // Fatty Acids (problematic carbon chain lengths are ~11-24)
  ["lauric acid", "fatty acid that feeds Malassezia yeast"],
  ["linoleic acid", "fatty acid that may support yeast growth"],
  ["myristic acid", "fatty acid that can feed Malassezia"],
  ["oleic acid", "fatty acid that can encourage yeast overgrowth"],
  ["palmitic acid", "fatty acid that may trigger fungal acne"],
  ["stearic acid", "fatty acid that can worsen Malassezia conditions"],

  // Esters & ester‑style emollients
  ["c12-15 alkyl benzoate", "ester that may act as food source for yeast"],
  ["cetearyl ethylhexanoate", "ester/emollient likely to feed Malassezia"],
  ["cetyl ethylhexanoate", "ester/emollient likely to feed Malassezia"],
  ["decyl oleate", "oleate-based ester that can support yeast"],
  ["ethylhexyl palmitate", "palmitate ester, a common fungal‑acne trigger"],
  ["ethylhexyl stearate", "stearate ester, it may feed Malassezia"],
  ["glyceryl stearate", "stearate-based ester that can support yeast growth"],
  ["isohexadecane", "oil/emollient that may be problematic for fungal acne"],
  ["isopropyl myristate", "myristate ester, frequently linked to fungal acne"],
  ["isopropyl palmitate", "palmitate ester, common trigger for fungal acne"],
  [
    "peg-100 stearate",
    "steareate-type ester or surfactant that may feed yeast",
  ],
  [
    "peg-7 glyceryl cocoate",
    "PEG‑cocoate ester that may foster Malassezia growth",
  ],
  [
    "polyglyceryl-3 diisostearate",
    "emollient ester that can trigger fungal acne",
  ],
  ["sorbeth-30 tetraoleate", "oleate‑based ester likely to feed yeast"],
  ["sorbitan isostearate", "isostearate-based ester that may be problematic"],
  ["sorbitan oleate", "oleate-based este, common fungal‑acne suspect"],
  ["sucrose cocoate", "sugar‑based ester mixture that may feed Malassezia"],

  // Oils & Butters (often high in fatty acids / esters)
  [
    "argania spinosa kernel oil",
    "plant oil, it contains fatty acids that feed yeast",
  ],
  ["castor oil", "castor oil may worsen fungal acne"],
  [
    "butyrospermum parkii butter",
    "shea butter, rich in fatty acids/esters that may worsen fungal acne",
  ],
  [
    "carthamus tinctorius oil",
    "safflower oil, plant oil potentially feeding Malassezia",
  ],
  [
    "cocos nucifera oil",
    "coconut oil, high in fatty acids often associated with fungal acne",
  ],
  ["glycine soja oil", "soybean oil, plant oil that may fuel yeast growth"],
  [
    "helianthus annuus seed oil",
    "sunflower oil, oil that may worsen fungal‑acne prone skin",
  ],
  ["hydrogenated vegetable oil", "vegetable-derived oil which may feed yeast"],
  ["olea europaea fruit oil", "olive oil, oil linked to Malassezia overgrowth"],
  [
    "oryza sativa bran oil",
    "rice bran oil, plant oil possibly problematic for fungal acne",
  ],
  ["persea gratissima oil", "avocado oil, oil that may feed Malassezia"],
  [
    "prunus amygdalus dulcis oil",
    "sweet almond oil, plant oil potentially feeding yeast",
  ],
  [
    "ricinus communis seed oil",
    "castor oil, oil that may worsen fungal‑acne conditions",
  ],
  ["rosa canina fruit oil", "rosehip oil, plant oil that may feed yeast"],
  [
    "simmondsia chinensis seed oil",
    "jojoba oil/wax ester, debated but may trigger fungal acne",
  ],
  [
    "theobroma cacao seed butter",
    "cocoa butter, rich in fatty acids/esters that may feed yeast",
  ],

  // Polysorbates / emulsifiers / surfactants
  [
    "polysorbate 20",
    "polysorbate emulsifier, frequently flagged as fungal‑acne trigger",
  ],
  ["polysorbate 60", "polysorbate emulsifier, may support yeast growth"],
  [
    "polysorbate 80",
    "polysorbate emulsifier, common problematic emulsifier for fungal acne",
  ],
  ["sorbitane sesquioleate", "emulsifier that may feed Malassezia yeast"],

  // Ferments / fermented extracts
  [
    "bifida ferment lysate",
    "fermented ingredient, may provide nutrients that feed yeast",
  ],
  [
    "galactomyces ferment filtrate",
    "fermented ingredient, can supply residues that feed Malassezia",
  ],
  [
    "saccharomyces ferment filtrate",
    "yeast-based ferment, often flagged as trigger for fungal acne",
  ],

  // Other known triggers
  ["lanolin", "wax-like derivative that can clog follicles and feed yeast"],
]);

const FUNGAL_ACNE_LIST: ReadonlySet<string> = new Set(
  FUNGAL_ACNE_TRIGGERS.keys()
);

const analyzeAcrylates = (
  ingredients: string[]
): Omit<IndividualAnalysis, "explanation"> => {
  const found: FoundIngredient[] = [];

  for (const originalIngredient of ingredients) {
    const ingredient = originalIngredient.toLowerCase().trim();

    if (ACRYLATE_FALSE_POSITIVES.includes(ingredient)) {
      continue; //skip
    }

    if (
      (ingredient.includes("colophonium") ||
        ingredient.includes("rosin") ||
        ingredient.includes("colophane")) &&
      !ingredient.includes("acryl")
    ) {
      continue;
    }

    if (ACRYLATES_MASTER_LIST.has(ingredient)) {
      found.push({
        name: originalIngredient,
        reason: ACRYLATES_MASTER_LIST_EXPLANATIONS.get(ingredient)!,
        status: "Unsafe",
      });
      continue;
    }

    const trigger = SUBSTRING_TRIGGERS.find((t) => ingredient.includes(t));
    if (trigger) {
      found.push({
        name: originalIngredient,
        reason: `Includes the term “${trigger}”, which typically signals an acrylate-based ingredient.`,
        status: "Unsafe",
      });
      continue;
    }

    if (
      ingredient.startsWith("polyurethane-") &&
      !ingredient.includes("acryl")
    ) {
      continue;
    }

    const polyquaterniumMatch = ingredient.match(/^polyquaternium-(\d+)$/);
    if (polyquaterniumMatch) {
      found.push({
        name: originalIngredient,
        reason:
          "Unknown polyquaternium number. Chemistry is unclear and requires external verification to check for acrylate/methacrylate components.",
        status: "Unknown",
      });
      continue;
    }

    const resinRegex = /\bresin\b/i;
    if (resinRegex.test(ingredient)) {
      const modifierRegex = /\b(epoxy|urethane|polyester|alkyd|silicone)\b/i;
      const initiatorRegex =
        /\b(UV|LED|photo|Irgacure|benzophenone|TPO|BAPO)\b/i;

      if (modifierRegex.test(ingredient) && initiatorRegex.test(ingredient)) {
        found.push({
          name: originalIngredient,
          reason:
            "Potentially a UV-curable resin containing acrylates. Requires external verification of specific chemistry.",
          status: "Unknown",
        });
      } else {
        found.push({
          name: originalIngredient,
          reason:
            "Generic/unspecified resin—chemistry not disclosed. Cannot rule out acrylates.",
          status: "Unknown",
        });
      }
      continue;
    }
  }

  return {
    isSafe: found.length === 0,
    foundIngredients: found,
  };
};

/**
 * Performs analysis for a specific condition against a list of ingredients.
 * @param ingredients - The cleaned list of ingredients.
 * @returns An IndividualAnalysis object.
 */
const analyzeFungalAcne = (
  ingredients: string[]
): Omit<IndividualAnalysis, "explanation"> => {
  const found: FoundIngredient[] = [];

  for (const ingredient of ingredients) {
    // Normalize ingredient by removing content in parentheses and extra spaces for more robust matching.
    // e.g., "helianthus annuus (sunflower) seed oil" becomes "helianthus annuus seed oil"
    const normalizedIngredient = ingredient
      .replace(/\s*\(.*?\)\s*/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (FUNGAL_ACNE_LIST.has(normalizedIngredient)) {
      // Add the original, non-normalized ingredient from the list for better readability
      found.push({
        name: ingredient,
        reason: FUNGAL_ACNE_TRIGGERS.get(normalizedIngredient)!,
        status: "Unsafe",
      });
      continue; // Move to the next ingredient once a trigger is found
    }
  }

  return {
    isSafe: found.length === 0,
    foundIngredients: found,
  };
};

/**
 * Analyzes a cosmetic ingredient list for acrylates and fungal acne triggers.
 * @param ingredientList - The raw ingredient list string from the user.
 * @param checkFungalAcne - A boolean indicating whether to check for fungal acne triggers.
 * @returns A promise that resolves to an AnalysisResult object.
 */
export const analyzeIngredients = async (
  ingredientList: string,
  checkFungalAcne: boolean
): Promise<AnalysisResult> => {
  // Simulate a brief async operation for a smoother UX with the loading spinner
  await new Promise((resolve) => setTimeout(resolve, 250));

  try {
    const ingredients = ingredientList
      .toLowerCase()
      .split(/, ?|\. ?|; ?|\n/) // Split by common delimiters including newlines
      .map((ing) => ing.trim())
      .filter((ing) => ing.length > 0);

    const acrylatesAnalysisResult = analyzeAcrylates(ingredients);
    const acrylatesAnalysis: IndividualAnalysis = {
      ...acrylatesAnalysisResult,
      explanation: acrylatesAnalysisResult.isSafe
        ? "Based on our analysis database, no ingredients known to be acrylates or common cross-reactors were detected."
        : "One or more ingredients that could be problematic for an acrylates allergy were found in the list.",
    };
    let fungalAcneAnalysis: IndividualAnalysis | undefined = undefined;
    if (checkFungalAcne) {
      const fungalAcneAnalysisResult = analyzeFungalAcne(ingredients);
      fungalAcneAnalysis = {
        ...fungalAcneAnalysisResult,
        explanation: fungalAcneAnalysisResult.isSafe
          ? "Based on our analysis database, no ingredients known to be fungal acne triggers were detected."
          : "One or more ingredients that could be problematic for fungal acne were found in the list.",
      };
    }

    return {
      acrylates: acrylatesAnalysis,
      fungalAcne: fungalAcneAnalysis,
    };
  } catch (error) {
    console.error("Local analysis failed:", error);
    throw new Error("Failed to perform local ingredient analysis.");
  }
};
