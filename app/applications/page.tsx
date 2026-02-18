import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { ChefHat, Factory, UtensilsCrossed, Leaf } from 'lucide-react';

export default function ApplicationsPage() {
    return (
        <div className="pt-20">
            <section className="bg-[#1F3D2B] text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <Badge variant="outline" className="mb-4 text-white border-white/30">Versatile Ingredient</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Applications & Uses</h1>
                    <p className="max-w-2xl mx-auto text-gray-300">
                        From traditional fasting foods to modern health supplements, our water chestnut products serve diverse industries.
                    </p>
                </div>
            </section>

            {/* Traditional Uses */}
            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <UtensilsCrossed className="w-6 h-6 text-[#2A6F6B]" />
                            <h2 className="text-3xl font-bold text-[#1F3D2B]">Traditional & Retail</h2>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Water chestnut flour (Singhara Atta) is a staple in Indian households, especially during fasting periods (Vrat). Its high starch content and nutritional value make it perfect for traditional recipes.
                        </p>
                        <ul className="space-y-4">
                            <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <h4 className="font-bold text-[#1F3D2B] mb-1">Fasting Foods</h4>
                                <p className="text-sm text-gray-600">Used to make Vrat ka Halwa, Puri, and Pakoras due to its "Satvik" nature.</p>
                            </li>
                            <li className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <h4 className="font-bold text-[#1F3D2B] mb-1">Traditional Snacks</h4>
                                <p className="text-sm text-gray-600">Key ingredient in crispy Mathris and Sev consumed during festivals.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <Image
                            src="/images/1000129087.jpg" // Kneading or Food preparation
                            alt="Traditional Food Preparation"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* Industrial Uses */}
            <Section background="off-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <Image
                            src="/images/1000129089.jpg" // Flour jar / Industrial
                            alt="Industrial Flour Blend"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="flex items-center gap-3 mb-4">
                            <Factory className="w-6 h-6 text-[#2A6F6B]" />
                            <h2 className="text-3xl font-bold text-[#1F3D2B]">Industrial & Manufacturing</h2>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            With the gluten-free trend rising globally, water chestnut flour is an excellent functional ingredient for food manufacturers.
                        </p>
                        <div className="grid gap-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#1F3D2B]/10 rounded-full flex items-center justify-center shrink-0">
                                    <ChefHat className="w-6 h-6 text-[#1F3D2B]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1F3D2B]">Gluten-Free Flour Blends</h4>
                                    <p className="text-sm text-gray-600">Acts as a nutritional binder in GF flour mixes for bread and cookies.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#1F3D2B]/10 rounded-full flex items-center justify-center shrink-0">
                                    <Leaf className="w-6 h-6 text-[#1F3D2B]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1F3D2B]">Health Food Manufacturing</h4>
                                    <p className="text-sm text-gray-600">High potassium and low sodium profile makes it suitable for health supplements.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#1F3D2B]/10 rounded-full flex items-center justify-center shrink-0">
                                    <UtensilsCrossed className="w-6 h-6 text-[#1F3D2B]" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1F3D2B]">Natural Thickening Agent</h4>
                                    <p className="text-sm text-gray-600">Excellent clean-label thickener for sauces and soups.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
