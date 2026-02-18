import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
    const variants = {
        primary: 'bg-[#1F3D2B]/10 text-[#1F3D2B]',
        secondary: 'bg-[#2A6F6B]/10 text-[#2A6F6B]',
        outline: 'border border-[#1F3D2B]/20 text-[#1F3D2B]'
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};
