'use client';

import { motion } from 'framer-motion';
import { Sprout, Sun, Factory, PackageCheck } from 'lucide-react';

const steps = [
    {
        title: 'Cultivation',
        description: 'Grown in nutrient-rich ponds with sustainable farming practices.',
        icon: Sprout,
    },
    {
        title: 'Harvesting',
        description: 'Hand-picked at peak maturity for maximum starch content and flavor.',
        icon: Sun,
    },
    {
        title: 'Processing',
        description: 'Hygienically dried and ground in our state-of-the-art facility.',
        icon: Factory,
    },
    {
        title: 'Quality Check',
        description: 'Rigorous testing for purity, moisture, and gluten-free certification.',
        icon: PackageCheck,
    },
];

export const FarmToFlour = () => {
    return (
        <section className="py-24 bg-primary text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">Farm to Flour</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Our transparent journey from fresh water chestnut to premium flour.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Mobile: Hidden, Desktop: Visible) */}
                    <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-white/10 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center"
                            >
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary border-4 border-primary shadow-lg mb-6">
                                    <step.icon className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="mb-2 text-2xl font-semibold">{step.title}</h3>
                                <p className="text-gray-300 px-4">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
