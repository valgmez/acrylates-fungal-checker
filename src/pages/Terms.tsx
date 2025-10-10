import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
                <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Terms of Service</h1>
                <p className="mt-2 text-sm text-gray-500">Last Updated: June 01, 2024</p>
                
                <div className="mt-6 text-gray-700 space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using Acrylis ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use the Service.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 pt-2">2. Service Description</h2>
                    <p>
                        Acrylis is a web-based tool designed to provide an automated analysis of cosmetic ingredient lists for potential acrylates and fungal acne triggers. The analysis is based on an internal dictionary of ingredients and is for informational purposes only.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 pt-2">3. Medical Disclaimer</h2>
                    <p>
                        <strong>The Service is not a substitute for professional medical advice.</strong> The information provided by Acrylis is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician, allergist, dermatologist, or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Service.
                    </p>
                    
                    <h2 className="text-xl font-semibold text-gray-800 pt-2">4. Limitation of Liability</h2>
                    <p>
                        The creators of Acrylis shall not be held liable for any inaccuracies, errors, or omissions in the information provided, nor for any actions taken in reliance thereon. The tool's dictionary may not be complete or entirely accurate. You assume full responsibility for any decisions made based on the use of this Service.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 pt-2">5. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. We will do so by posting and drawing attention to the updated terms on this page. Your decision to continue to visit and make use of the Service after such changes have been made constitutes your formal acceptance of the new Terms of Service.
                    </p>

                    <div className="mt-8 pt-6 border-t text-center">
                        <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold">
                            &rarr; Return to the Analyzer &larr;
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Terms;