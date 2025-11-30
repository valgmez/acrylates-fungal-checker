import React from "react";
import { XIcon } from "./Icons";

interface UpdateNotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdateNotification: React.FC<UpdateNotificationProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
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
          <div className="flex items-baseline gap-2">
            <h3
              className="text-xl font-semibold text-gray-900"
              id="modal-title"
            >
              Analysis Database Updated! 📈
            </h3>
            <p className="text-xs text-gray-500">November 30, 2025</p>
          </div>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={onClose}
            aria-label="Close modal"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-4 text-gray-700">
          <p>
            Thanks to valuable user feedback, we've recently expanded our
            ingredient analysis database to improve accuracy.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <span className="mr-2 mt-1">✨</span>
              <div>
                The <strong>Acrylates</strong> database now contains 30+ new
                terms/synonyms, and non-acrylate copolymers like
                Ethylene/Propylene/Styrene Copolymer are no longer flagged.
                Better explanations have been added to each ingredient.
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-2 mt-1">✨</span>
              <div>
                The <strong>Fungal Acne</strong> trigger list has been updated
                with more detailed explanations of why certain ingredients could
                trigger fungal acne.
              </div>
            </div>
          </div>
          <p className="font-semibold">
            This helps Acrylis catch even more potential irritants in your
            products. Thank you for being part of our community!
          </p>
        </div>
        <div className="flex items-center justify-end p-4 border-t rounded-b">
          <button
            onClick={onClose}
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Awesome, thanks! 👍
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

export default UpdateNotification;
