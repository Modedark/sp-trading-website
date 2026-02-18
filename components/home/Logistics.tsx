'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const Logistics = () => {
    return (
        <Section background="brown">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                        <Image
                            src="/images/1000129091.jpg" // Ship/Logistics
                            alt="Global Export Logistics"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <span className="text-[#800020] font-bold tracking-wider uppercase text-sm">Logistics</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                        Global Shipping & Packaging
                    </h2>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        We understand the importance of safe and timely delivery. Our diverse packaging options ensure shelf-life stability during transit.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#800020] rounded-full"></span> Packaging
                            </h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>25kg PP Bags</li>
                                <li>Customized Retail Packs</li>
                                <li>Private Labeling</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#800020] rounded-full"></span> Shipping
                            </h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>Sea Freight (FCL/LCL)</li>
                                <li>Air Cargo</li>
                                <li>Road Transport</li>
                            </ul>
                        </div>
                    </div>
                    <Button size="lg" className="bg-[#800020] hover:bg-[#b71c1c] text-white border-none">Get Shipping Quote</Button>
                </div>
            </div>
        </Section>
    );
};
