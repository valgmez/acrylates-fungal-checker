import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AnalysisResult, FoundIngredient, IndividualAnalysis } from "../types";
import Seo from "../components/Seo";
import { AlertTriangle, CheckCircle } from "../components/Icons";

const Confetti: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500); // Stop confetti after 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {[...Array(150)].map((_, i) => {
        const style = {
          "--x": `${Math.random() * 100}%`,
          "--y": `${Math.random() * 100}%`,
          "--r": `${Math.random() * 360}deg`,
          "--d": `${Math.random() * 1.5 + 0.5}s`,
          "--bg": `hsl(${Math.random() * 360}, 70%, 60%)`,
        } as React.CSSProperties;
        return <div key={i} className="confetti-piece" style={style}></div>;
      })}
    </div>
  );
};

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, ingredients } =
    (location.state as { result: AnalysisResult; ingredients: string }) || {};
  const [showIngredients, setShowIngredients] = useState(false);

  useEffect(() => {
    if (!result || !ingredients) {
      navigate("/", { replace: true });
    }
  }, [result, ingredients, navigate]);

  if (!result || !ingredients) {
    return null; // Render nothing while redirecting
  }

  const problematicIngredientsCount =
    result.acrylates.foundIngredients.length +
    (result.fungalAcne?.foundIngredients.length || 0);

  const getGrade = (analysisResult: AnalysisResult, ingredientList: string) => {
    // An ingredient's position matters. The first 5 are most concentrated.
    // We'll calculate a "risk score" based on this.
    const ingredientsArray = ingredientList
      .toLowerCase()
      .split(/, ?|\. ?|; ?|\n/)
      .map((ing) => ing.trim())
      .filter((ing) => ing.length > 0);

    const allProblematicIngredients = [
      ...analysisResult.acrylates.foundIngredients,
      ...(analysisResult.fungalAcne?.foundIngredients || []),
    ];

    const uniqueProblematicIngredientNames = [
      ...new Set(allProblematicIngredients.map((item) => item.name)),
    ];

    if (uniqueProblematicIngredientNames.length === 0) {
      return { grade: "A+", text: "Excellent!", color: "text-acrylis-safe" };
    }

    let riskScore = 0;
    uniqueProblematicIngredientNames.forEach((problematicIngredient) => {
      // Find the position (index) of the problematic ingredient
      const index = ingredientsArray.findIndex(
        (ing) => ing === problematicIngredient,
      );

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
    if (riskScore <= 3)
      return { grade: "B", text: "Good", color: "text-acrylis-warning" };
    if (riskScore <= 6)
      return { grade: "C", text: "Use with Caution", color: "text-acrylis-warning" };
    return { grade: "D", text: "High Risk", color: "text-acrylis-unsafe" };
  };

  const { grade, text, color } = getGrade(result, ingredients);
  const isSafe = grade === "A+";

  const IngredientItem: React.FC<{
    ingredient: FoundIngredient;
  }> = ({ ingredient }) => {
    const { name, reason, status } = ingredient;
    const Icon = AlertTriangle;
    const iconColor = status === "Unknown" ? "text-acrylis-warning" : "text-acrylis-unsafe";
    const textColor = status === "Unknown" ? "text-acrylis-warning-deep" : "text-acrylis-unsafe-deep";
    const reasonColor =
      status === "Unknown" ? "text-acrylis-warning-deep/80" : "text-acrylis-unsafe-deep/80";

    return (
      <li className="flex items-start">
        <Icon className={`h-5 w-5 ${iconColor} flex-shrink-0 mt-1`} />
        <div className="ml-4">
          <p className={`font-semibold ${textColor} font-mono text-sm`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
          <p className={`text-xs ${reasonColor}`}>{reason}</p>
        </div>
      </li>
    );
  };

  const AnalysisDetailCard: React.FC<{
    title: string;
    analysis: IndividualAnalysis;
  }> = ({ title, analysis }) => {
    const hasUnsafe = analysis.foundIngredients.some(
      (ing) => ing.status === "Unsafe",
    );
    const hasUnknown = analysis.foundIngredients.some(
      (ing) => ing.status === "Unknown",
    );
    const isCardSafe = !hasUnsafe && !hasUnknown;

    const getCardStyle = () => {
      if (hasUnsafe) {
        return {
          bg: "bg-acrylis-unsafe-light/30 backdrop-blur-sm",
          border: "border-acrylis-unsafe/20",
          icon: <AlertTriangle className="h-6 w-6 text-acrylis-unsafe" />,
          titleColor: "text-acrylis-unsafe-deep",
          statusText: "Potential Issues Found",
        };
      }
      if (hasUnknown) {
        return {
          bg: "bg-acrylis-warning-light/30 backdrop-blur-sm",
          border: "border-acrylis-warning/20",
          icon: <AlertTriangle className="h-6 w-6 text-acrylis-warning" />,
          titleColor: "text-acrylis-warning-deep",
          statusText: "Needs Verification",
        };
      }
      return {
        bg: "bg-acrylis-safe-light/30 backdrop-blur-sm",
        border: "border-acrylis-safe/20",
        icon: <CheckCircle className="h-6 w-6 text-acrylis-safe" />,
        titleColor: "text-acrylis-safe-deep",
        statusText: "Likely Safe",
      };
    };

    const style = getCardStyle();

    return (
      <div className={`p-4 border rounded-lg shadow-sm ${style.bg} ${style.border}`}>
        <div className="flex items-center">
          {style.icon}
          <div className="ml-3">
            <h4 className={`font-semibold ${style.titleColor}`}>{title}</h4>
            <p className={`text-sm ${style.titleColor}`}>{style.statusText}</p>
          </div>
        </div>
        <p
          className={`mt-3 text-sm ${isCardSafe ? "text-gray-600" : style.titleColor
            }`}
        >
          {analysis.explanation}
        </p>
        {!isCardSafe && analysis.foundIngredients.length > 0 && (
          <div className="mt-4">
            <h5 className={`text-sm font-semibold ${style.titleColor} mb-3`}>
              Identified Ingredients:
            </h5>
            <ul className="space-y-3">
              {analysis.foundIngredients.map((item, index) => (
                <IngredientItem key={index} ingredient={item} />
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
      <main className="w-full max-w-4xl text-center p-4 sm:p-6 lg:p-8">
        <div
          className={`relative w-full max-w-3xl mx-auto p-6 rounded-xl border backdrop-blur-md shadow-lg ${isSafe ? "bg-acrylis-safe-light/30 border-acrylis-safe/30" : "bg-acrylis-unsafe-light/30 border-acrylis-unsafe/30"
            } overflow-hidden`}
        >
          {isSafe && <Confetti />}
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-acrylis-deep">
              Analysis Results
            </h1>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className={`text-7xl font-extrabold ${color}`}>{grade}</div>
              <div className="text-left">
                <p className={`text-3xl font-bold ${color}`}>{text}</p>
                <p className="text-gray-600">
                  {problematicIngredientsCount} potential issue
                  {problematicIngredientsCount !== 1 && "s"} found.
                </p>
              </div>
            </div>

            <div className="mt-8 text-left space-y-4">
              <AnalysisDetailCard
                title="Acrylates Allergy"
                analysis={result.acrylates}
              />
              {result.fungalAcne && (
                <AnalysisDetailCard
                  title="Fungal Acne"
                  analysis={result.fungalAcne}
                />
              )}
            </div>

            <div className="mt-6 text-left">
              <button
                onClick={() => setShowIngredients(!showIngredients)}
                className="text-sm text-acrylis hover:underline focus:outline-none"
              >
                {showIngredients ? "Hide" : "View"} Full Ingredient List
              </button>
              {showIngredients && (
                <div className="mt-2 p-4 bg-acrylis-mist/50 rounded-md border border-gray-200 text-xs text-gray-700 leading-relaxed shadow-inner">
                  {ingredients.split(/([,;.\n])(?:\s+)?/).map((token, idx) => {
                    if (!token) return null;
                    const isSeparator = /[,;.\n]/.test(token);
                    if (isSeparator) return <span key={idx}>{token}</span>;

                    const trimmedToken = token.trim();
                    const lowerToken = trimmedToken.toLowerCase();
                    const allBadIngredients = [
                      ...result.acrylates.foundIngredients,
                      ...(result.fungalAcne?.foundIngredients || [])
                    ];

                    const isBad = allBadIngredients.some(
                      bad => bad.name.toLowerCase() === lowerToken
                    );

                    if (isBad) {
                      const match = token.match(/^(\s*)(.*?)(\s*)$/);
                      const [, lead, core, trail] = match || ["", "", token, ""];
                      return (
                        <span key={idx}>
                          {lead}
                          <span
                            className="bg-acrylis-unsafe text-white px-2 py-0.5 rounded-full font-semibold inline-block mx-0.5 my-0.5 whitespace-nowrap"
                          >
                            {core}
                          </span>
                          {trail}
                        </span>
                      );
                    }

                    return <span key={idx}>{token}</span>;
                  })}
                </div>
              )}
            </div>

            <p className="mt-6 text-xs text-gray-500 italic text-left">
              Disclaimer: This tool is for informational purposes only and is
              not a substitute for professional medical advice. Always consult
              with a healthcare professional for medical advice and treatment. A
              "safe" result does not guarantee the product won't cause
              irritation. Always patch test new products, regardless of this
              analysis.
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="mt-8 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-md text-white bg-acrylis hover:bg-acrylis-deep focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-acrylis transition-transform transform hover:scale-105"
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
