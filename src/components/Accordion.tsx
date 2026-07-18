import React, { useState, useRef, useEffect } from "react";

interface AccordionProps {
    title: React.ReactNode;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
    titleClassName?: string;
}

const Accordion: React.FC<AccordionProps> = ({
    title,
    children,
    defaultOpen = false,
    className = "",
    titleClassName = "",
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [contentHeight, setContentHeight] = useState<number | undefined>(0);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [children, isOpen]); // Added isOpen to re-calculate if needed

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`bg-acrylis-mist/70 rounded-xl shadow-sm border border-acrylis transition-all duration-300 hover:shadow-md ${isOpen ? "ring-1 ring-acrylis-lilac" : ""
                } ${className}`}
        >
            <button
                onClick={toggleAccordion}
                className={`w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-acrylis focus-visible:ring-opacity-75 transition-colors group ${titleClassName}`}
                aria-expanded={isOpen}
            >
                <span className={`font-bold text-acrylis-deep group-hover:text-acrylis transition-colors ${isOpen ? "text-acrylis" : ""}`}>
                    {title}
                </span>
                <div className={`flex-shrink-0 ml-4 p-1.5 rounded-full transition-all duration-300 ${isOpen ? "bg-acrylis-lilac text-acrylis" : "bg-acrylis-light/30 text-gray-400 group-hover:bg-acrylis-light/50"
                    }`}>
                    <svg
                        className={`w-5 h-5 transition-transform duration-300 transform ${isOpen ? "rotate-180" : ""
                            }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: isOpen ? `${contentHeight}px` : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    <div className="pt-2 border-t border-gray-50">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
