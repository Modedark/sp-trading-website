import Image from 'next/image';
import Link from 'next/link';
import { Globe, Package, Truck, FileCheck } from 'lucide-react';

export const metadata = {
    title: 'Global Export | SP Trading',
    description: 'Reliable export partner for bulk Water Chestnut Flour. Serving markets in USA, Europe, and Asia with certified quality.',
};

export default function ExportPage() {
    return (
        <main className="pt-24 pb-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-sans mb-6 text-secondary">Global Export Solutions</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We simplify the global supply chain for Water Chestnut Flour.
                        From documentation to delivery, SP Trading is your trusted partner.
                    </p>
                </div>

                {/* Key Features Grid */}
                <div className="grid md:grid-cols-4 gap-8 mb-20">
                    {[
                        { icon: Globe, title: 'Global Reach', text: 'Exporting to 15+ countries across 3 continents.' },
                        { icon: Package, title: 'Custom Packaging', text: 'Private labeling and bulk packing options available.' },
                        { icon: FileCheck, title: 'Compliance', text: 'Full documentation support for customs and clearance.' },
                        { icon: Truck, title: 'Logistics', text: 'Efficient shipping via Sea and Air freight partners.' },
                    ].map((feature, idx) => (
                        <div key={idx} className="p-6 rounded-xl border border-gray-100 bg-gray-50 text-center hover:bg-white hover:shadow-lg transition-all">
                            <feature.icon className="h-10 w-10 text-highlight mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-secondary mb-2">{feature.title}</h3>
                            <p className="text-gray-600 font-light">{feature.text}</p>
                        </div>
                    ))}
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl bg-secondary text-white p-12 text-center mb-20 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Export Destinations</h2>
                        <p className="text-gray-400 mb-8">Currently serving clients in North America, UK, Middle East, and Southeast Asia.</p>
                        <div className="h-[300px] w-full bg-white/5 rounded-xl flex items-center justify-center border border-white/10 relative overflow-hidden">
                            <Image
                                src="/images/globe.svg"
                                alt="Global Export Map"
                                fill
                                className="object-cover opacity-30"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-[#F8F6F2] rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-secondary mb-4">Start Importing Today</h2>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Get a competitive quote with CIF pricing for your port of destination.
                    </p>
                    <Link href="/contact" className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-green-900 transition-colors shadow-lg hover:shadow-xl">
                        Request Export Quote
                    </Link>
                </div>
            </div>
        </main>
    );
}
