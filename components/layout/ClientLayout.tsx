'use client';

import React, { useState, useEffect } from 'react';
import { IntroLoader } from '@/components/ui/IntroLoader';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppWidget } from '@/components/ui/WhatsAppWidget';

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        // Optional: Check session storage if we want to show it only once per session
        // const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
        // if (hasSeenIntro) setShowIntro(false);
    }, []);

    const handleIntroComplete = () => {
        setShowIntro(false);
        // sessionStorage.setItem('hasSeenIntro', 'true');
    };

    return (
        <>
            {showIntro && <IntroLoader onComplete={handleIntroComplete} />}

            {!showIntro && (
                <div className="animate-in fade-in duration-1000">
                    <Navbar />
                    {children}
                    <WhatsAppWidget />
                    <Footer />
                </div>
            )}
        </>
    );
};
