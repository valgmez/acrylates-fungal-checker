import React from 'react';
import { XIcon } from './Icons';
import { Link } from 'react-router-dom';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="flex items-start justify-between p-4 border-b rounded-t">
          <h3 className="text-xl font-semibold text-gray-900" id="modal-title">
            Search Guide 💡
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={onClose}
            aria-label="Close modal"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-6 text-gray-700">
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold text-gray-800">Step 1: Enter your ingredients. ✍️</h4>
                    <p className="mt-1 text-sm">
                        Input your ingredients into the search bar. You can enter a single ingredient or a list of ingredients. If you're copying and pasting an ingredient list from a product, it typically won't require any adjustments.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800">Step 2: Check the spelling. 🔍</h4>
                    <p className="mt-1 text-sm">
                        Spelling mistakes are the main formatting issue that our tool cannot account for. It also cannot read languages other than English.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800">Step 3: Submit your search. ▶️</h4>
                    <p className="mt-1 text-sm">
                        Click the "Analyze Ingredients" button to retrieve your results. If there are matches, Acrylis will display problematic ingredients.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800">Step 4: Interpret your results. ✅</h4>
                    <p className="mt-1 text-sm">
                        Based on the analysis, you can decide whether to avoid a product or conduct a patch test. If you need help interpreting your results, visit our <Link to="/faq" className="text-blue-600 hover:underline" onClick={onClose}>FAQ</Link> for more information.
                    </p>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-end p-4 border-t rounded-b">
          <button
            onClick={onClose}
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Got it! 👍
          </button>
        </div>
         <style>{`
            @keyframes fade-in-up {
                0% {
                    opacity: 0;
                    transform: translateY(20px) scale(0.95);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            .animate-fade-in-up {
                animation: fade-in-up 0.3s ease-out forwards;
            }
        `}</style>
      </div>
    </div>
  );
};

export default InstructionsModal;
