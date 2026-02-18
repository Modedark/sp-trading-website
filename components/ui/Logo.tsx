import React from 'react';
import Image from 'next/image';

interface LogoProps {
    className?: string;
    variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <Image
                src="/images/Logo.jpeg"
                alt="SP Trading Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
};
