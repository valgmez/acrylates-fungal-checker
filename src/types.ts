export enum ResultStatus {
  Initial,
  Loading,
  Safe,
  Unsafe,
  Unknown, // Added for ingredients that need verification
  Error,
}

export interface FoundIngredient {
  name: string;
  reason: string;
  status: "Unsafe" | "Unknown";
}

export interface IndividualAnalysis {
  isSafe: boolean;
  foundIngredients: FoundIngredient[];
  explanation: string;
}

export interface AnalysisResult {
  acrylates: IndividualAnalysis;
  fungalAcne?: IndividualAnalysis;
}

export interface HistoryItem {
  id: string;
  name: string;
  ingredients: string;
  checkFungalAcne: boolean;
  result: AnalysisResult;
  timestamp: number;
}
