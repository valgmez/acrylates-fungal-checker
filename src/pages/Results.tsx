import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AnalysisResult, IndividualAnalysis } from '../types';
import Seo from '../components/Seo';
import { AlertTriangle, CheckCircle } from '../components/Icons';

const Confetti: React.FC = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
    {[...Array(150)].map((_, i) => {
      const style = {
        '--x': `${Math.random() * 100}%`,
        '--y': `${Math.random() * 100}%`,
        '--r': `${Math.random() * 360}deg`,
        '--d': `${Math.random() * 1.5 + 0.5}s`,
        '--bg': `hsl(${Math.random() * 360}, 70%, 60%)`,
      } as React.CSSProperties;
      return <div key={i} className="confetti-piece" style={style}></div>;
    })}
  </div>
);

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, ingredients } = (location.state as { result: AnalysisResult, ingredients: string }) || {};

  useEffect(() => {
    if (!result || !ingredients) {
      navigate('/', { replace: true });
    }
  }, [result, ingredients, navigate]);

  if (!result || !ingredients) {
    return null; // Render nothing while redirecting
  }

  const problematicIngredientsCount = result.acrylates.foundIngredients.length + (result.fungalAcne?.foundIngredients.length || 0);

  const getGrade = (analysisResult: AnalysisResult, ingredientList: string) => {
    // An ingredient's position matters. The first 5 are most concentrated.
    // We'll calculate a "risk score" based on this.
    const ingredientsArray = ingredientList
      .toLowerCase()
      .split(/, ?|\. ?|; ?|\n/)
      .map(ing => ing.trim())
      .filter(ing => ing.length > 0);

    const allProblematicIngredients = [
      ...analysisResult.acrylates.foundIngredients,
      ...(analysisResult.fungalAcne?.foundIngredients || []),
    ];

    const uniqueProblematicIngredients = [...new Set(allProblematicIngredients)];
    
    if (uniqueProblematicIngredients.length === 0) {
        return { grade: 'A+', text: 'Excellent!', color: 'text-green-500' };
    }

    let riskScore = 0;
    uniqueProblematicIngredients.forEach(problematicIngredient => {
      // Find the position (index) of the problematic ingredient
      const index = ingredientsArray.findIndex(ing => ing === problematicIngredient);

      if (index !== -1) {
        if (index < 5) {
          riskScore += 3; // High impact for ingredients in the top 5
        } else {
          riskScore += 1; // Lower impact for ingredients further down the list
        }
      } else {
        // Fallback for rare cases where index isn't found
        riskScore += 1;
      }
    });
    
    // Determine grade based on the calculated risk score
    if (riskScore <= 3) return { grade: 'B', text: 'Good', color: 'text-yellow-500' };
    if (riskScore <= 6) return { grade: 'C', text: 'Use with Caution', color: 'text-orange-500' };
    return { grade: 'D', text: 'High Risk', color: 'text-red-500' };
  };


  const { grade, text, color } = getGrade(result, ingredients);
  const isSafe = grade === 'A+';

  const IngredientItem: React.FC<{ ingredient: string, type: 'Acrylate' | 'Fungal Acne Trigger' }> = ({ ingredient, type }) => {
    const explanation = type === 'Acrylate'
      ? "This is a type of acrylate, a chemical known to cause allergic contact dermatitis in sensitive individuals."
      : "This ingredient contains fatty acids or esters that can feed the Malassezia yeast, potentially worsening fungal acne.";

    return (
      <li className="flex items-start">
        <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-1" />
        <div className="ml-4">
          <p className="font-semibold text-red-800 font-mono text-sm">{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</p>
          <p className="text-xs text-red-700">{explanation}</p>
        </div>
      </li>
    );
  };

  const AnalysisDetailCard: React.FC<{ title: string; analysis: IndividualAnalysis }> = ({ title, analysis }) => {
    const isCardSafe = analysis.isSafe;
    return (
        <div className={`p-4 border rounded-lg ${isCardSafe ? 'bg-green-50/50 border-green-200' : 'bg-red-50/50 border-red-200'}`}>
            <div className="flex items-center">
                {isCardSafe ? <CheckCircle className="h-6 w-6 text-green-500" /> : <AlertTriangle className="h-6 w-6 text-red-500" />}
                <div className='ml-3'>
                    <h4 className={`font-semibold ${isCardSafe ? 'text-green-800' : 'text-red-800'}`}>{title}</h4>
                    <p className={`text-sm ${isCardSafe ? 'text-green-800' : 'text-red-800'}`}>{isCardSafe ? 'Likely Safe' : 'Potential Issues Found'}</p>
                </div>
            </div>
            <p className={`mt-3 text-sm ${isCardSafe ? 'text-gray-600' : 'text-red-700'}`}>{analysis.explanation}</p>
            {!isCardSafe && analysis.foundIngredients.length > 0 && (
                <div className="mt-4">
                    <h5 className="text-sm font-semibold text-red-800 mb-3">Identified Ingredients:</h5>
                    <ul className="space-y-3">
                        {analysis.foundIngredients.map((item, index) => (
                          <IngredientItem key={index} ingredient={item} type={title === "Acrylates Allergy" ? "Acrylate" : "Fungal Acne Trigger"} />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
  };

  return (
    <>
      <Seo 
        title={`Analysis Grade: ${grade} | Acrylis Results`}
        description={`Your product received a grade of ${grade}. See the detailed breakdown for acrylates and fungal acne triggers.`}
      />
      <main className="w-full max-w-3xl text-center p-4 sm:p-6 lg:p-8">
        <div className={`relative w-full max-w-2xl mx-auto p-6 rounded-xl border ${isSafe ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'} overflow-hidden`}>
          {isSafe && <Confetti />}
          <div className="relative z-10">
            <h1 className="text-2xl font-bold text-gray-800">Analysis Complete</h1>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className={`text-7xl font-extrabold ${color}`}>{grade}</div>
              <div className="text-left">
                <p className={`text-3xl font-bold ${color}`}>{text}</p>
                <p className="text-gray-600">{problematicIngredientsCount} potential issue{problematicIngredientsCount !== 1 && 's'} found.</p>
              </div>
            </div>

            <div className="mt-8 text-left space-y-4">
                <AnalysisDetailCard title="Acrylates Allergy" analysis={result.acrylates} />
                {result.fungalAcne && <AnalysisDetailCard title="Fungal Acne" analysis={result.fungalAcne} />}
            </div>

            <p className="mt-6 text-xs text-gray-500 italic text-left">
              Disclaimer: This tool is for informational purposes only and is not a substitute for professional medical advice. Always consult with a healthcare professional regarding your specific condition.
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="mt-8 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
        >
          Analyze Another Product
        </Link>
      </main>
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-100%) rotateZ(0deg); opacity: 1; }
          100% { transform: translateY(150vh) rotateZ(720deg); opacity: 0; }
        }
        .confetti-piece {
          position: absolute;
          width: 8px;
          height: 16px;
          background: var(--bg);
          top: 0;
          left: var(--x);
          opacity: 0;
          animation: confetti-fall var(--d) linear infinite;
        }
      `}</style>
    </>
  );
};

export default Results;
