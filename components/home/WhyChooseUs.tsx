'use client';

import React from 'react';
import { ShieldCheck, Factory, Leaf, Truck } from 'lucide-react';
import { Section } from '@/components/ui/Section';

export const WhyChooseUs = () => {
    return (
        <Section background="black" className="relative overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why S P Trading?</h2>
                <div className="w-20 h-1 bg-[#800020] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { icon: ShieldCheck, title: "100% Organic", desc: "Certified organic cultivation without harmful chemicals." },
                    { icon: Factory, title: "Hygienic Processing", desc: "State-of-the-art facility ensuring bacterial-free output." },
                    { icon: Leaf, title: "Batch Inspection", desc: "Rigorous quality checks for every outgoing consignment." },
                    { icon: Truck, title: "Export Support", desc: "Complete documentation and logistics for global shipping." }
                ].map((feature, i) => (
                    <div key={i} className="bg-[#222] p-8 rounded-xl border border-[#333] hover:border-[#800020] transition-colors group">
                        <feature.icon className="w-12 h-12 text-[#800020] mb-6 group-hover:scale-110 transition-transform" />
                        <h4 className="text-xl font-bold mb-3 text-white">{feature.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
