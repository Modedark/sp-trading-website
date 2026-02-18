'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const Features = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        <Section background="green">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/20">
                        Sustainable Farming
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                        Cultivated in Nature's Lap
                    </h2>
                    <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                        Our water chestnuts thrive in pristine freshwater bodies, ensuring natural sweetness and crisp texture.
                        We strictly adhere to organic farming practices, free from synthetic pesticides.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {[
                            '100% Pesticide Free',
                            'Natural Freshwater Cultivation',
                            'Hand-picked at Peak Maturity'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-100">
                                <div className="bg-white/20 p-1.5 rounded-full">
                                    <Leaf className="w-4 h-4 text-white" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Link href="/about">
                        <Button variant="white" className="text-[#1F3D2B]">Learn More</Button>
                    </Link>
                </motion.div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <Image
                        src="/images/1000129064.jpg"
                        alt="Water Chestnut Harvesting"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </Section>
    );
};
