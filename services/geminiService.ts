import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const singleAnalysisSchema = {
    type: Type.OBJECT,
    properties: {
        isSafe: {
            type: Type.BOOLEAN,
            description: "True if no problematic ingredients are found, false otherwise."
        },
        foundIngredients: {
            type: Type.ARRAY,
            description: "A list of all ingredients identified as problematic. Empty if none are found.",
            items: {
                type: Type.STRING
            }
        },
        explanation: {
            type: Type.STRING,
            description: "A brief, one or two-sentence explanation of the result for the user."
        }
    },
    required: ["isSafe", "foundIngredients", "explanation"]
};

const analysisSchema = (checkFungalAcne: boolean) => {
    const properties: any = {
        acrylates: singleAnalysisSchema,
    };

    if (checkFungalAcne) {
        properties.fungalAcne = singleAnalysisSchema;
    }

    return {
        type: Type.OBJECT,
        properties,
        required: checkFungalAcne ? ["acrylates", "fungalAcne"] : ["acrylates"]
    };
};

export const analyzeIngredients = async (ingredientList: string, checkFungalAcne: boolean): Promise<AnalysisResult> => {
  try {
    const acrylatesPrompt = `
      First, analyze the following list of cosmetic ingredients for a user with a severe acrylates allergy. 
      Identify any form of acrylate, methacrylate, cyanoacrylate, or any closely related chemical compound that is known to cause cross-reactivity or allergic reactions in individuals with an acrylates allergy.
    `;

    const fungalAcnePrompt = `
      Second, analyze the same ingredient list for triggers of Malassezia folliculitis (fungal acne). 
      Identify ingredients that are generally considered unsafe, such as most oils, esters, fatty acids (especially with carbon chain lengths from 11 to 24), polysorbates, and fermented ingredients.
    `;

    const prompt = `
      You will perform one or two analyses on a cosmetic ingredient list.
      ${acrylatesPrompt}
      ${checkFungalAcne ? fungalAcnePrompt : ''}
      
      Ingredient List:
      ---
      ${ingredientList}
      ---
      
      Based on your analysis, provide the results in the specified JSON format. For each analysis, determine if the product is likely safe for that specific condition.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: analysisSchema(checkFungalAcne),
        temperature: 0.1
      },
    });

    const jsonText = response.text;
    const parsedResult = JSON.parse(jsonText) as AnalysisResult;
    
    // Fallback explanations for acrylates
    if (!parsedResult.acrylates.explanation) {
        if (parsedResult.acrylates.isSafe) {
            parsedResult.acrylates.explanation = "Based on the analysis, no ingredients known to be acrylates or common cross-reactors were detected.";
        } else {
            parsedResult.acrylates.explanation = "One or more ingredients that could be problematic for an acrylates allergy were found in the list.";
        }
    }
    
    // Fallback explanations for fungal acne
    if (checkFungalAcne && parsedResult.fungalAcne && !parsedResult.fungalAcne.explanation) {
        if (parsedResult.fungalAcne.isSafe) {
            parsedResult.fungalAcne.explanation = "Based on the analysis, no ingredients known to be common fungal acne triggers were detected.";
        } else {
            parsedResult.fungalAcne.explanation = "One or more ingredients that could be problematic for fungal acne were found in the list.";
        }
    }
    
    return parsedResult;

  } catch (error) {
    console.error("Gemini API call failed:", error);
    throw new Error("Failed to get analysis from the AI model.");
  }
};