import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
    return (
        <section className="py-20 md:py-28 bg-brand-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] filter grayscale" />

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">Ready to Elevate Your Products?</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Whether you need bulk export or premium retail packs, SP Trading delivers the finest Water Chestnut Flour.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-highlight px-8 py-4 text-lg font-bold text-white transition-all hover:bg-red-800 hover:scale-105">
                        Get a Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                    <Link href="/product" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
                        View Certifications
                    </Link>
                </div>
            </div>
        </section>
    );
};
