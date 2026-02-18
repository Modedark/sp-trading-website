import React from 'react';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { CheckCircle, ShieldCheck, Search, Truck } from 'lucide-react';

export default function QualityPage() {
    return (
        <div className="pt-20">
            <section className="bg-[#1F3D2B] text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <Badge variant="outline" className="mb-4 text-white border-white/30">Zero Compromise</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Assurance</h1>
                    <p className="max-w-2xl mx-auto text-gray-300">
                        Every batch undergoes rigorous chemical, physical, and microbiological testing before dispatch.
                    </p>
                </div>
            </section>

            <Section>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                            <ShieldCheck className="w-12 h-12 text-[#2A6F6B] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#1F3D2B] mb-2">Foreign Matter Control</h3>
                            <p className="text-gray-600 text-sm">Automated sorting and manual inspection ensure 99.9% purity free from husk or grit.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                            <Search className="w-12 h-12 text-[#2A6F6B] mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-[#1F3D2B] mb-2">Moisture Analysis</h3>
                            <p className="text-gray-600 text-sm">Precise drying protocols maintain moisture below 10% to prevent microbial growth.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-[#1F3D2B] text-center mb-12">Our 4-Step Hygiene Process</h2>

                    <div className="relative border-l-2 border-[#2A6F6B]/30 ml-4 md:ml-12 space-y-12">
                        {[
                            {
                                title: "Raw Material Selection",
                                desc: "Only premium, undamaged chestnuts are selected for processing."
                            },
                            {
                                title: "Washing & Peeling",
                                desc: "Multi-stage washing with ozonized water to remove surface impurities."
                            },
                            {
                                title: "Dehydration & Grinding",
                                desc: "Temperature-controlled drying followed by stainless steel grinding."
                            },
                            {
                                title: "Final Packaging",
                                desc: "Packed in food-grade liners within PP bags to seal freshness."
                            }
                        ].map((step, i) => (
                            <div key={i} className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1F3D2B] border-4 border-[#F8F6F2]" />
                                <h3 className="text-xl font-bold text-[#1F3D2B] mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section background="dark" className="text-center">
                <h2 className="text-2xl font-bold text-white mb-8">Certifications & Compliance</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {['FSSAI Certified', 'Spice Board Registered', 'APEDA Member', 'Organic Certified'].map((cert, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 text-white font-medium flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#2A6F6B]" /> {cert}
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
