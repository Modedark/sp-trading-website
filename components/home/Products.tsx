'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const Products = () => {
    return (
        <Section background="white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#800020] font-bold tracking-wider uppercase text-sm">Our Recommendations</span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mt-2 mb-4">
                    Premium Product Range
                </h2>
                <p className="text-gray-600">
                    Available in bulk quantities for wholesale and industrial applications.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Product 1 */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                >
                    <div className="relative h-72 bg-gray-100">
                        <Image
                            src="/images/1000129088.jpg"
                            alt="Organic Whole Water Chestnut"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-[#1F3D2B] text-white text-xs font-bold px-3 py-1 rounded-full">
                            BESTSELLER
                        </div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Whole Water Chestnut</h3>
                        <p className="text-gray-600 mb-6">
                            Freshly harvested, cleaned, and dried whole water chestnuts. Perfect for traditional processing and direct consumption.
                        </p>
                        <Link href="/products">
                            <Button className="w-full bg-[#1A1A1A] hover:bg-[#333] text-white">View Specifications</Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Product 2 */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                >
                    <div className="relative h-72 bg-gray-100">
                        <Image
                            src="/images/1000129090.jpg"
                            alt="Water Chestnut Powder (Singhara Flour)"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-[#800020] text-white text-xs font-bold px-3 py-1 rounded-full">
                            HOT ITEM
                        </div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Singhara Flour (Powder)</h3>
                        <p className="text-gray-600 mb-6">
                            Finely ground, 100% gluten-free flour ideal for fasting foods, bakery blends, and health supplements.
                        </p>
                        <Link href="/products">
                            <Button className="w-full bg-[#1A1A1A] hover:bg-[#333] text-white">View Specifications</Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
