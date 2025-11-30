import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeIngredients } from "../services/analysisService";
import { HistoryItem } from "../types";
import { Spinner } from "../components/Spinner";
import {
  AlertTriangle,
  HistoryIcon,
  PencilIcon,
  TrashIcon,
} from "../components/Icons";
import { Link } from "react-router-dom";
import { TipPopup } from "../components/TipPopup";
import InstructionsModal from "../components/InstructionsModal";
import UpdateNotification from "../components/UpdateNotification";
import Seo from "../components/Seo";

const SeoContent: React.FC = () => (
  <div className="mt-16 w-full max-w-3xl mx-auto text-left text-gray-800 space-y-8">
    <section>
      <h2 className="text-3xl font-bold border-b pb-3 mb-4">
        Understanding Your Skin's Triggers
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Navigating the world of skincare and cosmetics can be a minefield,
        especially when your skin reacts to specific ingredients. Two common but
        often misunderstood culprits are acrylates and the triggers for
        Malassezia folliculitis, also known as fungal acne. Our analyzer is
        designed to bring clarity to this complex landscape, empowering you to
        choose products with confidence.
      </p>
    </section>

    <section>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
        The Challenge of Acrylates Allergies
      </h3>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Acrylates are a group of chemicals prized for their ability to make
          products stick, harden, or form a durable film. They're everywhere: in
          gel nail polishes, adhesives, and, most importantly for our users, in
          a vast range of cosmetics like foundations, mascaras, and skincare
          formulations.
        </p>
        <p>
          For most people, they are harmless. But for a growing number, repeated
          exposure can lead to allergic contact dermatitis. The symptoms can be
          distressing, ranging from redness and swelling to itchy rashes and
          blisters. Identifying the source is incredibly difficult because
          acrylates hide behind dozens of different chemical names (e.g., Ethyl
          Acrylate, Carbomer, Polyquaternium). Manually screening every label is
          a daunting and error-prone task.
        </p>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
        Decoding Fungal Acne (Malassezia Folliculitis)
      </h3>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Often mistaken for traditional acne, "fungal acne" isn't acne at all.
          It's an infection of the hair follicles caused by an overgrowth of
          Malassezia, a yeast that naturally lives on our skin. It typically
          appears as small, uniform, itchy bumps, often on the forehead, chest,
          and back.
        </p>
        <p>
          Unlike bacterial acne, it doesn't respond to typical acne treatments
          and can even be made worse by them. The Malassezia yeast feeds on
          certain types of lipids, specifically fatty acids with carbon chain
          lengths from 11 to 24. This means that many common skincare
          ingredients—from coconut oil and shea butter to countless esters like
          Glyceryl Stearate—can fuel the problem. Avoiding these triggers is key
          to managing the condition, but the list of unsafe ingredients is
          extensive and not always obvious.
        </p>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
        Your Solution for Safer Skincare ✅
      </h3>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          That's why we built Acrylis. We've compiled comprehensive databases of
          known acrylates and fungal acne triggers based on scientific
          literature and dermatology resources. Our tool cross-references your
          ingredient list against these databases in an instant.
        </p>
        <p>
          No more guesswork. No more spending hours on research. Just paste,
          analyze, and get a clear, immediate result. Take control of your
          skincare routine and give your skin the peace it deserves.
        </p>
      </div>
    </section>
  </div>
);

const Home: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>("");
  const [checkFungalAcne, setCheckFungalAcne] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showTip, setShowTip] = useState<boolean>(false);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [showUpdateNotice, setShowUpdateNotice] = useState<boolean>(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState<string>("");

  const navigate = useNavigate();

  // Use a descriptive key for the update. When dictionaries are updated again, this key should be changed.
  const UPDATE_NOTICE_KEY =
    "update-notice-v4-added-more-triggers-removed-false-positives";
  const HISTORY_KEY = "acrylis-analysis-history";

  useEffect(() => {
    // Load history from localStorage on initial render
    try {
      const savedHistory = localStorage.getItem(HISTORY_KEY);
      if (savedHistory) {
        setHistory(JSON.parse(savedHistory));
      }
    } catch (e) {
      console.error("Failed to parse history from localStorage", e);
      setHistory([]);
    }

    const tipSeen = sessionStorage.getItem("tipSeen");
    if (!tipSeen) {
      const timer = setTimeout(() => setShowTip(true), 2500);
      return () => clearTimeout(timer);
    }

    const updateNoticeSeen = localStorage.getItem(UPDATE_NOTICE_KEY);
    if (!updateNoticeSeen) {
      setShowUpdateNotice(true);
    }
  }, []);

  const handleCloseTip = () => {
    setShowTip(false);
    sessionStorage.setItem("tipSeen", "true");
  };

  const handleCloseUpdateNotice = () => {
    setShowUpdateNotice(false);
    localStorage.setItem(UPDATE_NOTICE_KEY, "true");
  };

  const handleAnalyze = useCallback(async () => {
    if (!ingredients.trim()) {
      setError("Please paste an ingredient list to analyze.");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const analysis = await analyzeIngredients(ingredients, checkFungalAcne);
      const newHistoryItem: HistoryItem = {
        id: new Date().toISOString() + Math.random(),
        name: `Analysis (${new Date().toLocaleDateString()})`,
        ingredients,
        checkFungalAcne,
        result: analysis,
        timestamp: Date.now(),
      };

      const updatedHistory = [newHistoryItem, ...history];
      setHistory(updatedHistory);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));

      navigate("/results", { state: { result: analysis, ingredients } });
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [ingredients, checkFungalAcne, history, navigate]);

  const handleViewHistory = (item: HistoryItem) => {
    navigate("/results", {
      state: { result: item.result, ingredients: item.ingredients },
    });
  };

  const handleDeleteHistory = (id: string) => {
    const updatedHistory = history.filter((item) => item.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
  };

  const handleStartEditing = (item: HistoryItem) => {
    setEditingId(item.id);
    setEditingName(item.name);
  };

  const handleCancelEditing = () => {
    setEditingId(null);
    setEditingName("");
  };

  const handleSaveName = (id: string) => {
    if (!editingName.trim()) return;
    const updatedHistory = history.map((item) =>
      item.id === id ? { ...item, name: editingName.trim() } : item
    );
    setHistory(updatedHistory);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
    handleCancelEditing();
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
          Check skincare and cosmetic products for potential irritants in
          seconds. ✨
        </p>

        <div className="mt-8 text-left text-gray-700 text-base space-y-4 max-w-2xl mx-auto">
          <p>
            Living with an <strong>acrylates allergy</strong> or managing{" "}
            <strong>fungal acne (Malassezia folliculitis)</strong> can turn a
            simple shopping trip into a frustrating ordeal. Ingredient lists are
            often long, confusing, and filled with complex chemical names. It's
            easy to feel overwhelmed and uncertain about which products are
            truly safe for your skin.
          </p>
          <p>
            This tool was built to eliminate that guesswork. Instead of spending
            hours researching individual ingredients, you can get an instant,
            automated analysis. Simply paste a product's full ingredient list
            into the text box below to find out if it contains known triggers.
          </p>
          <div className="!mt-6 text-center">
            <Link
              to="/recommendations"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Looking for safe products? Check out our recommendations 👉
            </Link>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center p-6 bg-gray-100 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Say Goodbye to Scanning Lists 👋
          </h2>
          <p className="mt-2 text-gray-600">
            Don't waste time manually checking ingredients. Let Acrylis do the
            work for you.
          </p>
          <p className="mt-4 text-gray-600">
            Enter individual ingredients or copy and paste an entire list into
            the box below. Acrylis will do the rest.
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
            <label
              htmlFor="ingredients"
              className="font-semibold text-lg text-gray-800"
            >
              Ingredient List
            </label>
            {ingredients.length > 0 && (
              <button
                onClick={() => setIngredients("")}
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
              <label
                htmlFor="fungal-acne-check"
                className="font-medium text-gray-900"
              >
                Check for Fungal Acne Triggers
              </label>
            </div>
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          className="mt-4 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
        >
          {isLoading ? (
            <>
              <Spinner className="w-5 h-5 mr-3 -ml-1" />
              Analyzing...
            </>
          ) : (
            "Analyze Ingredients"
          )}
        </button>

        {error && (
          <div className="mt-4 max-w-2xl mx-auto p-3 bg-yellow-50 border border-yellow-300 rounded-lg flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <p className="ml-2 text-sm text-yellow-800">{error}</p>
          </div>
        )}

        {history.length > 0 && (
          <div className="mt-16 max-w-2xl mx-auto text-left">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <HistoryIcon className="w-6 h-6 mr-2" />
              Analysis History
            </h2>
            <p className="text-gray-600 mt-1 mb-4 text-sm">
              Your past analyses are saved in your browser. View, rename, or
              delete them.
            </p>
            <ul className="space-y-3">
              {history.map((item) => {
                const isEditing = editingId === item.id;
                const totalIssues =
                  item.result.acrylates.foundIngredients?.length +
                  (item.result.fungalAcne?.foundIngredients?.length || 0);

                return (
                  <li
                    key={item.id}
                    className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editingName}
                          onChange={(e) => setEditingName(e.target.value)}
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleSaveName(item.id)
                          }
                          className="text-sm font-semibold text-gray-800 border-b-2 border-blue-500 focus:outline-none"
                          autoFocus
                        />
                      ) : (
                        <span className="text-sm font-semibold text-gray-800">
                          {item.name}
                        </span>
                      )}

                      <div className="flex items-center gap-2">
                        {isEditing ? (
                          <>
                            <button
                              onClick={() => handleSaveName(item.id)}
                              className="text-sm text-blue-600 hover:underline"
                            >
                              Save
                            </button>
                            <button
                              onClick={handleCancelEditing}
                              className="text-sm text-gray-500 hover:underline"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            {totalIssues === 0 ? (
                              <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                Safe
                              </span>
                            ) : (
                              <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-1 rounded-full">
                                {totalIssues} issue{totalIssues > 1 ? "s" : ""}
                              </span>
                            )}
                            <button
                              onClick={() => handleStartEditing(item)}
                              aria-label="Rename analysis"
                            >
                              <PencilIcon className="w-4 h-4 text-gray-500 hover:text-gray-800" />
                            </button>
                            <button
                              onClick={() => handleDeleteHistory(item.id)}
                              aria-label="Delete analysis"
                            >
                              <TrashIcon className="w-4 h-4 text-gray-500 hover:text-red-600" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-gray-500">
                        {new Date(item.timestamp).toLocaleString()}
                      </p>
                      <button
                        onClick={() => handleViewHistory(item)}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                      >
                        View Results &rarr;
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <SeoContent />

        {showTip && <TipPopup onClose={handleCloseTip} />}
        <InstructionsModal
          isOpen={isInstructionsModalOpen}
          onClose={() => setIsInstructionsModalOpen(false)}
        />
        <UpdateNotification
          isOpen={showUpdateNotice}
          onClose={handleCloseUpdateNotice}
        />
      </main>
    </>
  );
};

export default Home;
