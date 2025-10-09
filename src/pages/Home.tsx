import React, { useState, useCallback } from 'react';
import { analyzeIngredients } from '../services/analysisService';
import { AnalysisResult, ResultStatus, IndividualAnalysis } from '../types';
import { Spinner } from '../components/Spinner';
import { AlertTriangle, CheckCircle, Info } from '../components/Icons';

const Home: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [checkFungalAcne, setCheckFungalAcne] = useState<boolean>(true);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [status, setStatus] = useState<ResultStatus>(ResultStatus.Initial);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!ingredients.trim()) {
      setError('Please paste an ingredient list.');
      setStatus(ResultStatus.Error);
      return;
    }
    setStatus(ResultStatus.Loading);
    setError(null);
    setResult(null);

    try {
      const analysis = await analyzeIngredients(ingredients, checkFungalAcne);
      setResult(analysis);
      
      const overallIsSafe = analysis.acrylates.isSafe && (!analysis.fungalAcne || analysis.fungalAcne.isSafe);
      setStatus(overallIsSafe ? ResultStatus.Safe : ResultStatus.Unsafe);
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred during analysis. Please try again.');
      setStatus(ResultStatus.Error);
    }
  }, [ingredients, checkFungalAcne]);

  const AnalysisDetailCard: React.FC<{ title: string; analysis: IndividualAnalysis }> = ({ title, analysis }) => {
    const isSafe = analysis.isSafe;
    const cardClasses = isSafe ? 'bg-green-50/50 border-green-200' : 'bg-red-50/50 border-red-200';
    const icon = isSafe ? <CheckCircle className="h-6 w-6 text-green-500" /> : <AlertTriangle className="h-6 w-6 text-red-500" />;
    const titleText = isSafe ? 'Likely Safe' : 'Potential Issues Found';
    const titleClasses = isSafe ? 'text-green-800' : 'text-red-800';
    const textColor = isSafe ? 'text-green-700' : 'text-red-700';
    
    return (
        <div className={`p-4 border rounded-lg ${cardClasses}`}>
            <div className="flex items-center">
                {icon}
                <div className='ml-3'>
                    <h4 className={`font-semibold ${titleClasses}`}>{title}</h4>
                    <p className={`text-sm ${titleClasses}`}>{titleText}</p>
                </div>
            </div>
            <p className={`mt-3 text-sm ${isSafe ? 'text-gray-600' : textColor}`}>{analysis.explanation}</p>
            {!isSafe && analysis.foundIngredients.length > 0 && (
                <div className="mt-3">
                    <h5 className="text-sm font-semibold text-red-800">Identified Ingredients:</h5>
                    <ul className="mt-1 flex flex-wrap gap-2">
                        {analysis.foundIngredients.map((item, index) => (
                        <li key={index} className="font-mono text-xs text-red-900 bg-red-100 px-2 py-1 rounded-md">
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
  };

  const ResultCard: React.FC = () => {
    if (status === ResultStatus.Initial) {
      return (
        <div className="mt-8 w-full max-w-2xl p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
          <Info className="mx-auto h-12 w-12 text-blue-400" />
          <p className="mt-4 text-lg font-medium text-blue-700">Ready to analyze</p>
          <p className="mt-1 text-sm text-blue-600">Paste your ingredient list, choose your checks, and click "Analyze".</p>
        </div>
      );
    }

    if (status === ResultStatus.Loading) {
      return (
        <div className="mt-8 w-full max-w-2xl p-6 flex flex-col items-center justify-center">
          <Spinner />
          <p className="mt-4 text-lg font-medium text-gray-700 animate-pulse">Analyzing ingredients...</p>
        </div>
      );
    }

    if (status === ResultStatus.Error && error) {
      return (
        <div className="mt-8 w-full max-w-2xl p-6 bg-yellow-50 border border-yellow-300 rounded-xl">
          <div className="flex items-center">
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
            <div className="ml-4">
              <h3 className="text-lg font-bold text-yellow-800">Something went wrong</h3>
              <p className="mt-1 text-sm text-yellow-700">{error}</p>
            </div>
          </div>
        </div>
      );
    }
    
    if ((status === ResultStatus.Safe || status === ResultStatus.Unsafe) && result) {
      const overallIsSafe = status === ResultStatus.Safe;
      const cardClasses = overallIsSafe 
        ? 'bg-green-50 border-green-300' 
        : 'bg-red-50 border-red-300';
      const icon = overallIsSafe 
        ? <CheckCircle className="h-8 w-8 text-green-500" /> 
        : <AlertTriangle className="h-8 w-8 text-red-500" />;
      const titleText = overallIsSafe ? 'Overall: Likely Safe' : 'Overall: Use with Caution';
      const titleClasses = overallIsSafe ? 'text-green-800' : 'text-red-800';

      return (
        <div className={`mt-8 w-full max-w-2xl p-6 border rounded-xl ${cardClasses} text-left`}>
          <div className="flex items-center">
            {icon}
            <h3 className={`ml-4 text-xl font-bold ${titleClasses}`}>{titleText}</h3>
          </div>
          
          <div className="mt-6 space-y-4">
            <AnalysisDetailCard title="Acrylates Allergy" analysis={result.acrylates} />
            {result.fungalAcne && <AnalysisDetailCard title="Fungal Acne" analysis={result.fungalAcne} />}
          </div>
          
          <p className="mt-6 text-xs text-gray-500 italic">
            Disclaimer: This tool is for informational purposes only and is not a substitute for professional medical advice. Always consult with a healthcare professional or allergist regarding your specific condition and product choices.
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <main className="w-full max-w-2xl text-center p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
        Acrylates & Fungal Acne Ingredient Analyzer
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Check skincare and cosmetic products for potential irritants in seconds.
      </p>

      <div className="mt-6 text-left text-gray-700 text-sm space-y-2 max-w-xl mx-auto">
          <p>
              Navigating ingredient lists can be overwhelming, especially when dealing with sensitivities like an <strong>acrylates allergy</strong> or triggers for <strong>fungal acne (Malassezia folliculitis)</strong>. This tool simplifies the process.
          </p>
          <p>
              Just paste a product's full ingredient list into the text box below for an instant, automated analysis.
          </p>
      </div>
      
      <div className="mt-8">
        <label htmlFor="ingredients" className="sr-only">
          Ingredient List
        </label>
        <textarea
          id="ingredients"
          rows={8}
          className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-base placeholder-gray-400"
          placeholder="Paste the full ingredient list here..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>

      <div className="mt-6 flex items-center justify-center">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="fungal-acne-check"
              name="fungal-acne-check"
              type="checkbox"
              checked={checkFungalAcne}
              onChange={(e) => setCheckFungalAcne(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="fungal-acne-check" className="font-medium text-gray-900">
              Check for Fungal Acne Triggers
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={handleAnalyze}
        disabled={status === ResultStatus.Loading}
        className="mt-4 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
      >
        {status === ResultStatus.Loading ? (
          <>
            <Spinner className="w-5 h-5 mr-3 -ml-1" />
            Analyzing...
          </>
        ) : (
          'Analyze Ingredients'
        )}
      </button>
      
      <ResultCard />
    </main>
  );
};

export default Home;
