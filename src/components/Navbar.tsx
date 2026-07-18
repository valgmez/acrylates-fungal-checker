import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "./Icons";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-md font-large transition-colors ${isActive
      ? "text-acrylis-deep font-semibold"
      : "text-gray-800 hover:text-acrylis-deep"
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium ${isActive
      ? "bg-acrylis-glass text-acrylis-deep"
      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <header className="bg-acrylis-light shadow-sm w-full sticky top-0 z-20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center text-2xl font-semibold text-acrylis-deep font-sora"
            >
              <img src="/logo.png" alt="logo" className="mr-2 h-8 w-8" />
              Acrylis
            </NavLink>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/blog" className={linkClass}>
                Blog
              </NavLink>
              <NavLink to="/recommendations" className={linkClass}>
                Recommendations
              </NavLink>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
              <NavLink to="/how-it-works" className={linkClass}>
                How It Works
              </NavLink>
              <NavLink to="/faq" className={linkClass}>
                FAQ
              </NavLink>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-acrylis-glass inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-acrylis-glass focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-acrylis"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/recommendations"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Recommendations
            </NavLink>
            <NavLink
              to="/about"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/how-it-works"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </NavLink>
            <NavLink
              to="/faq"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </NavLink>
            <NavLink
              to="/references"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              References
            </NavLink>
            <NavLink
              to="/contact"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
