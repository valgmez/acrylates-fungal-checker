import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from './Icons';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }: { isActive: boolean }) => 
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-600 hover:text-blue-600'
        }`;
    
    const mobileLinkClass = ({ isActive }: { isActive: boolean }) => 
        `block px-3 py-2 rounded-md text-base font-medium ${
            isActive 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
        }`;

    return (
        <header className="bg-white shadow-sm w-full sticky top-0 z-20">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <NavLink to="/" onClick={() => setIsOpen(false)} className="text-xl font-bold text-gray-800">Acrylis</NavLink>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink to="/" className={linkClass}>Home</NavLink>
                            <NavLink to="/recommendations" className={linkClass}>Recommendations</NavLink>
                            <NavLink to="/about" className={linkClass}>About</NavLink>
                            <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
                            <NavLink to="/references" className={linkClass}>References</NavLink>
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/recommendations" className={mobileLinkClass} onClick={() => setIsOpen(false)}>Recommendations</NavLink>
                        <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
                        <NavLink to="/faq" className={mobileLinkClass} onClick={() => setIsOpen(false)}>FAQ</NavLink>
                        <NavLink to="/references" className={mobileLinkClass} onClick={() => setIsOpen(false)}>References</NavLink>
                    </div>
                </div>
            )}
        </header>
    );
};