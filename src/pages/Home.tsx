import React, { useState, useCallback, useEffect, useRef } from 'react';
import { analyzeIngredients } from '../services/analysisService';
import { AnalysisResult, ResultStatus, IndividualAnalysis } from '../types';
import { Spinner } from '../components/Spinner';
import { AlertTriangle, CheckCircle, Info } from '../components/Icons';
import { Link } from 'react-router-dom';
import { TipPopup } from '../components/TipPopup';
import InstructionsModal from '../components/InstructionsModal';
import Seo from '../components/Seo';

const SeoContent: React.FC = () => (
    <div className="mt-16 w-full max-w-3xl mx-auto text-left text-gray-800 space-y-8">
        <section>
            <h2 className="text-3xl font-bold border-b pb-3 mb-4">Understanding Your Skin's Triggers</h2>
            <p className="text-gray-700 leading-relaxed">
                Navigating the world of skincare and cosmetics can be a minefield, especially when your skin reacts to specific ingredients. Two common but often misunderstood culprits are acrylates and the triggers for Malassezia folliculitis, also known as fungal acne. Our analyzer is designed to bring clarity to this complex landscape, empowering you to choose products with confidence.
            </p>
        </section>

        <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Challenge of Acrylates Allergies</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    Acrylates are a group of chemicals prized for their ability to make products stick, harden, or form a durable film. They're everywhere: in gel nail polishes, adhesives, and, most importantly for our users, in a vast range of cosmetics like foundations, mascaras, and skincare formulations.
                </p>
                <p>
                    For most people, they are harmless. But for a growing number, repeated exposure can lead to allergic contact dermatitis. The symptoms can be distressing, ranging from redness and swelling to itchy rashes and blisters. Identifying the source is incredibly difficult because acrylates hide behind dozens of different chemical names (e.g., Ethyl Acrylate, Carbomer, Polyquaternium). Manually screening every label is a daunting and error-prone task.
                </p>
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Decoding Fungal Acne (Malassezia Folliculitis)</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    Often mistaken for traditional acne, "fungal acne" isn't acne at all. It's an infection of the hair follicles caused by an overgrowth of Malassezia, a yeast that naturally lives on our skin. It typically appears as small, uniform, itchy bumps, often on the forehead, chest, and back.
                </p>
                <p>
                    Unlike bacterial acne, it doesn't respond to typical acne treatments and can even be made worse by them. The Malassezia yeast feeds on certain types of lipids, specifically fatty acids with carbon chain lengths from 11 to 24. This means that many common skincare ingredients—from coconut oil and shea butter to countless esters like Glyceryl Stearate—can fuel the problem. Avoiding these triggers is key to managing the condition, but the list of unsafe ingredients is extensive and not always obvious.
                </p>
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Your Solution for Safer Skincare ✅</h3>
             <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    That's why we built Acrylis. We've compiled comprehensive dictionaries of known acrylates and fungal acne triggers based on scientific literature and dermatology resources. Our tool cross-references your ingredient list against these dictionaries in an instant.
                </p>
                <p>
                    No more guesswork. No more spending hours on research. Just paste, analyze, and get a clear, immediate result. Take control of your skincare routine and give your skin the peace it deserves.
                </p>
            </div>
        </section>
    </div>
);

const Home: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [checkFungalAcne, setCheckFungalAcne] = useState<boolean>(true);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [status, setStatus] = useState<ResultStatus>(ResultStatus.Initial);
  const [error, setError] = useState<string | null>(null);
  const [showTip, setShowTip] = useState<boolean>(false);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);

  useEffect(() => {
    const tipSeen = sessionStorage.getItem('tipSeen');
    if (!tipSeen) {
      const timer = setTimeout(() => {
        setShowTip(true);
      }, 2500); // Show after 2.5 seconds
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, []);

  const handleCloseTip = () => {
    setShowTip(false);
    sessionStorage.setItem('tipSeen', 'true');
  };

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
        <div className="mt-8 w-full max-w-2xl p-6 bg-gray-100 border border-gray-200 rounded-xl text-center">
          <Info className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-4 text-lg font-medium text-gray-700">Ready to analyze 🧪</p>
          <p className="mt-1 text-sm text-gray-600">Paste your ingredient list, choose your checks, and click "Analyze".</p>
        </div>
      );
    }

    if (status === ResultStatus.Loading) {
      return (
        <div className="mt-8 w-full max-w-2xl p-6 flex flex-col items-center justify-center">
          <Spinner />
          <p className="mt-4 text-lg font-medium text-gray-700 animate-pulse">Analyzing ingredients... 🔬</p>
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
    <>
      <Seo 
          title="Acrylis – Acrylate & Fungal Acne Ingredient Checker"
          description="Paste your skincare or makeup ingredients and instantly find out if they contain acrylates or fungal acne triggers. Fast, free, and dermatologist-inspired."
          keywords="ingredient analyzer, ingredient checker, skincare checker, cosmetic ingredients, acrylates allergy, fungal acne, malassezia folliculitis, safe skincare, beauty, cosmetics"
      />
      <main className="w-full max-w-3xl text-center p-4 sm:p-6 lg:p-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
          Acrylates & Fungal Acne Ingredient Analyzer
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Check skincare and cosmetic products for potential irritants in seconds. ✨
        </p>

        <div className="mt-8 text-left text-gray-700 text-base space-y-4 max-w-2xl mx-auto">
          <p>
              Living with an <strong>acrylates allergy</strong> or managing <strong>fungal acne (Malassezia folliculitis)</strong> can turn a simple shopping trip into a frustrating ordeal. Ingredient lists are often long, confusing, and filled with complex chemical names. It's easy to feel overwhelmed and uncertain about which products are truly safe for your skin.
          </p>
          <p>
              This tool was built to eliminate that guesswork. Instead of spending hours researching individual ingredients, you can get an instant, automated analysis. Simply paste a product's full ingredient list into the text box below to find out if it contains known triggers.
          </p>
          <div className="!mt-6 text-center">
            <Link to="/recommendations" className="text-blue-600 hover:text-blue-700 font-semibold">
                Looking for safe products? Check out our recommendations 👉
            </Link>
          </div>
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto text-center p-6 bg-gray-100 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Say Goodbye to Scanning Lists 👋</h2>
          <p className="mt-2 text-gray-600">
              Don't waste time manually checking ingredients. Let Acrylis do the work for you.
          </p>
          <p className="mt-4 text-gray-600">
              Enter individual ingredients or copy and paste an entire list into the box below. Acrylis will do the rest.
          </p>
          <button
            onClick={() => setIsInstructionsModalOpen(true)}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            View Search Instructions 💡
          </button>
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="ingredients" className="font-semibold text-lg text-gray-800">
              Ingredient List
            </label>
            {ingredients.length > 0 && (
              <button
                onClick={() => {
                  setIngredients('');
                  setResult(null);
                  setStatus(ResultStatus.Initial);
                  setError(null);
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Clear list
              </button>
            )}
          </div>
          <div className="relative">
            <textarea
              id="ingredients"
              rows={8}
              className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-base placeholder-gray-400"
              placeholder="Paste the full ingredient list here 🧪"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
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
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
        <SeoContent />
        
        {showTip && <TipPopup onClose={handleCloseTip} />}
        <InstructionsModal isOpen={isInstructionsModalOpen} onClose={() => setIsInstructionsModalOpen(false)} />
      </main>
    </>
  );
};

export default Home;