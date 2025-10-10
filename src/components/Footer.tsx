import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white w-full mt-12 border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Acrylis. All rights reserved.</p>
                        <p className="text-xs text-gray-500 mt-1">Disclaimer: For informational purposes only. Not medical advice.</p>
                    </div>
                    <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm">
                        <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
                        <Link to="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
                        <Link to="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};