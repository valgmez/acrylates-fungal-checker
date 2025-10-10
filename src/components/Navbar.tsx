import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const linkClass = ({ isActive }: { isActive: boolean }) => 
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isActive 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-600 hover:text-blue-600'
        }`;

    return (
        <header className="bg-white shadow-sm w-full sticky top-0 z-10">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-xl font-bold text-gray-800">Acrylis</NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink to="/" className={linkClass}>Home</NavLink>
                            <NavLink to="/recommendations" className={linkClass}>Recommendations</NavLink>
                            <NavLink to="/about" className={linkClass}>About</NavLink>
                            <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
                            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
