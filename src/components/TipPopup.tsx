import React from 'react';
import { Info, XIcon } from './Icons';

interface TipPopupProps {
  onClose: () => void;
}

export const TipPopup: React.FC<TipPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-sm w-full z-20 animate-fade-in-up">
      <div className="bg-white rounded-xl shadow-2xl p-4 border border-gray-200">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <Info className="h-6 w-6 text-blue-500" />
          </div>
          <div className="ml-3 w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900">Acrylis Tip ✨</p>
            <p className="mt-1 text-sm text-gray-600">
              Your "Holy Grail" products might be the reason for stubborn skin issues. Quickly check for ingredients known to cause <strong>acrylates allergies</strong> or flare-ups of <strong>fungal acne</strong> with our free analyzer.
            </p>
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              type="button"
              className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={onClose}
              aria-label="Close"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};