export enum ResultStatus {
  Initial,
  Loading,
  Safe,
  Unsafe,
  Error
}

export interface IndividualAnalysis {
  isSafe: boolean;
  foundIngredients: string[];
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
