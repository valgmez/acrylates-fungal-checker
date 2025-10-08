import { AnalysisResult, IndividualAnalysis } from '../types';

// A detailed list of keywords for acrylates and related compounds.
// All keywords are lowercase for case-insensitive matching.
const ACRYLATES_TRIGGERS: string[] = [
  'acrylate',
  'acrylates',
  'methacrylate',
  'cyanoacrylate',
  'carbomer',
  'polyquaternium-10',
  'polyquaternium-37',
  'polyquaternium-7',
  'styrene',
  'polyacrylate',
  'vinyl acetate', // Can cross-react
];

// A detailed list of keywords for fungal acne (Malassezia folliculitis) triggers.
const FUNGAL_ACNE_TRIGGERS: string[] = [
  // Fatty Acids (problematic carbon chain lengths are ~11-24)
  'lauric acid',
  'myristic acid',
  'palmitic acid',
  'stearic acid',
  'oleic acid',
  'linoleic acid',

  // Esters (a very common class of triggers)
  'isopropyl palmitate',
  'isopropyl myristate',
  'ethylhexyl palmitate',
  'glyceryl stearate',
  'peg-100 stearate',
  'cetearyl ethylhexanoate',
  'isohexadecane',
  'sorbitan oleate',
  'decyl oleate',
  'c12-15 alkyl benzoate',
  'polyglyceryl-3 diisostearate',
  'sucrose cocoate',
  
  // Oils & Butters (most are not FA-safe)
  'cocos nucifera oil', // coconut oil
  'olea europaea fruit oil', // olive oil
  'prunus amygdalus dulcis oil', // sweet almond oil
  'persea gratissima oil', // avocado oil
  'butyrospermum parkii butter', // shea butter
  'theobroma cacao seed butter', // cocoa butter
  'argania spinosa kernel oil', // argan oil
  'rosa canina fruit oil', // rosehip oil
  'helianthus annuus seed oil', // sunflower oil
  'simmondsia chinensis seed oil', // jojoba oil (technically a wax ester, debated)
  'glycine soja oil', // soybean oil
  'ricinus communis seed oil', // castor oil
  'hydrogenated vegetable oil',

  // Polysorbates
  'polysorbate 20',
  'polysorbate 60',
  'polysorbate 80',

  // Ferments
  'galactomyces ferment filtrate',
  'saccharomyces ferment filtrate',
  'bifida ferment lysate',
  
  // Other known triggers
  'lanolin',
];

/**
 * Performs analysis for a specific condition against a list of ingredients.
 * @param ingredients - The cleaned list of ingredients.
 * @param triggerList - The dictionary of trigger keywords for the condition.
 * @param safeExplanation - The explanation text if no triggers are found.
 * @param unsafeExplanation - The explanation text if triggers are found.
 * @returns An IndividualAnalysis object.
 */
const performAnalysis = (
  ingredients: string[],
  triggerList: string[],
  safeExplanation: string,
  unsafeExplanation: string
): IndividualAnalysis => {
  const foundIngredients = new Set<string>();

  for (const ingredient of ingredients) {
    for (const trigger of triggerList) {
      if (ingredient.includes(trigger)) {
        // Add the original-cased ingredient from the full list for better readability
        foundIngredients.add(ingredient);
        break; // Move to the next ingredient once a trigger is found
      }
    }
  }

  const foundArray = Array.from(foundIngredients);
  const isSafe = foundArray.length === 0;

  return {
    isSafe,
    foundIngredients: foundArray,
    explanation: isSafe ? safeExplanation : unsafeExplanation,
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
  await new Promise(resolve => setTimeout(resolve, 250));

  try {
    const ingredients = ingredientList
      .toLowerCase()
      .split(/, ?|\. ?|; ?|\n/) // Split by common delimiters including newlines
      .map(ing => ing.trim())
      .filter(ing => ing.length > 0);

    const acrylatesAnalysis = performAnalysis(
      ingredients,
      ACRYLATES_TRIGGERS,
      "Based on our dictionary, no ingredients known to be acrylates or common cross-reactors were detected.",
      "One or more ingredients that could be problematic for an acrylates allergy were found in the list."
    );

    let fungalAcneAnalysis: IndividualAnalysis | undefined = undefined;
    if (checkFungalAcne) {
      fungalAcneAnalysis = performAnalysis(
        ingredients,
        FUNGAL_ACNE_TRIGGERS,
        "Based on our dictionary, no ingredients known to be common fungal acne triggers were detected.",
        "One or more ingredients that could be problematic for fungal acne were found in the list."
      );
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
