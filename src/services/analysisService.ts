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
  'linoleic acid',
  'myristic acid',
  'oleic acid',
  'palmitic acid',
  'stearic acid',

  // Esters (a very common class of triggers)
  'c12-15 alkyl benzoate',
  'cetearyl ethylhexanoate',
  'cetyl ethylhexanoate',
  'decyl oleate',
  'ethylhexyl palmitate',
  'ethylhexyl stearate',
  'glyceryl stearate',
  'isohexadecane',
  'isopropyl myristate',
  'isopropyl palmitate',
  'peg-100 stearate',
  'peg-7 glyceryl cocoate',
  'polyglyceryl-3 diisostearate',
  'sorbeth-30 tetraoleate',
  'sorbitan isostearate',
  'sorbitan oleate',
  'sucrose cocoate',
  
  // Oils & Butters (most are not FA-safe)
  'argania spinosa kernel oil', // argan oil
  'butyrospermum parkii butter', // shea butter
  'carthamus tinctorius oil', // safflower oil
  'cocos nucifera oil', // coconut oil
  'glycine soja oil', // soybean oil
  'helianthus annuus seed oil', // sunflower oil
  'hydrogenated vegetable oil',
  'olea europaea fruit oil', // olive oil
  'oryza sativa bran oil', // rice bran oil
  'persea gratissima oil', // avocado oil
  'prunus amygdalus dulcis oil', // sweet almond oil
  'ricinus communis seed oil', // castor oil
  'rosa canina fruit oil', // rosehip oil
  'simmondsia chinensis seed oil', // jojoba oil (technically a wax ester, debated)
  'theobroma cacao seed butter', // cocoa butter

  // Polysorbates
  'polysorbate 20',
  'polysorbate 60',
  'polysorbate 80',

  // Ferments
  'bifida ferment lysate',
  'galactomyces ferment filtrate',
  'saccharomyces ferment filtrate',
  
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
    // Normalize ingredient by removing content in parentheses and extra spaces for more robust matching.
    // e.g., "helianthus annuus (sunflower) seed oil" becomes "helianthus annuus seed oil"
    const normalizedIngredient = ingredient.replace(/\s*\(.*?\)\s*/g, ' ').replace(/\s+/g, ' ').trim();

    for (const trigger of triggerList) {
      if (normalizedIngredient.includes(trigger)) {
        // Add the original, non-normalized ingredient from the list for better readability
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