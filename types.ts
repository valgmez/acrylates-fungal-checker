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
