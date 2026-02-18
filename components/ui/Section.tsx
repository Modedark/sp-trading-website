import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: 'white' | 'off-white' | 'dark' | 'black' | 'green' | 'red' | 'brown';
}

export const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    id,
    background = 'white'
}) => {
    const bgStyles = {
        'white': 'bg-white',
        'off-white': 'bg-[#F8F6F2]',
        'dark': 'bg-[#3B2F2F] text-white',
        'black': 'bg-[#1A1A1A] text-white',
        'green': 'bg-[#1F3D2B] text-white',
        'red': 'bg-[#800020] text-white',   // Changed to Burgundy
        'brown': 'bg-[#3B2F2F] text-white'
    };

    return (
        <section
            id={id}
            className={`py-20 md:py-28 ${bgStyles[background]} ${className}`}
        >
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                {children}
            </div>
        </section>
    );
};
