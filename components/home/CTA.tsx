'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const CTA = () => {
    return (
        <Section background="red" className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Partner?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your bulk order inquiry today with S P Trading.
            </p>
            <div className="flex gap-4 justify-center">
                <Link href="/contact">
                    <Button size="lg" className="bg-white text-[#800020] hover:bg-gray-100 border-none">
                        Contact Us Now
                    </Button>
                </Link>
                <a href="https://wa.me/919988776655" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                        WhatsApp Chat
                    </Button>
                </a>
            </div>
        </Section>
    );
};
