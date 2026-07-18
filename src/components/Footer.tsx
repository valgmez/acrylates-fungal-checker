import React from "react";
import { Link } from "react-router-dom";
import Analytics from "./Analytics";
import BuyMeACoffee from "./BuyMeACoffee";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 text-center text-sm text-gray-500 bg-acrylis-light border-t mt-12">
      <div className="container mx-auto px-4 max-w-4xl space-y-6">
        <Analytics />

        <div className="footer__bmc">
          <BuyMeACoffee />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-gray-600 font-medium">
          <Link to="/blog" className="hover:text-acrylis transition-colors">Blog</Link>
          <span className="text-acrylis-deep hidden sm:inline">|</span>
          <Link to="/recommendations" className="hover:text-acrylis transition-colors">Recommendations</Link>
          <span className="text-acrylis-deep hidden sm:inline">|</span>
          <Link to="/about" className="hover:text-acrylis transition-colors">About</Link>
          <span className="text-acrylis-deep hidden sm:inline">|</span>
          <Link to="/how-it-works" className="hover:text-acrylis transition-colors">How It Works</Link>
          <span className="text-acrylis-deep hidden sm:inline">|</span>
          <Link to="/faq" className="hover:text-acrylis transition-colors">FAQ</Link>
          <span className="text-acrylis-deep hidden sm:inline">|</span>
          <Link to="/contact" className="hover:text-acrylis transition-colors">Contact</Link>
        </div>

        <p className="max-w-xl mx-auto text-acrylis-deep font-medium italic">
          Built with care by someone who gets it 💖
        </p>

        <div className="border-t border-gray-200/50 flex flex-col items-center gap-2 text-[10px] text-acrylis-deep">
          <p>&copy; {new Date().getFullYear()} Acrylis &bull; For informational purposes only &bull; Not medical advice</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-acrylis underline decoration-gray-200 underline-offset-4">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-acrylis underline decoration-gray-200 underline-offset-4">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
