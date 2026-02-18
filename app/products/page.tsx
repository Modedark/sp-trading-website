import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Check, Download, Package, Calendar, } from 'lucide-react';

export default function ProductsPage() {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-[#1F3D2B] text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <Badge variant="outline" className="mb-4 text-white border-white/30">Premium Catalogue</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Product Range</h1>
                    <p className="max-w-2xl mx-auto text-gray-300">
                        Export-quality organic water chestnut products processed under strict hygienic conditions.
                    </p>
                </div>
            </section>

            {/* Whole Water Chestnut */}
            <Section>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-6">
                            <Image
                                src="/images/1000129088.jpg" // Whole
                                alt="Whole Water Chestnut"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Badge variant="secondary">Best Seller</Badge>
                            <Badge variant="outline">Whole Form</Badge>
                        </div>
                        <h2 className="text-3xl font-bold text-[#1F3D2B] mb-4">Whole Water Chestnut</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our whole water chestnuts are harvested at peak maturity to ensure optimal size and sweetness.
                            They are thoroughly cleaned, graded, and dried to preserve their natural properties.
                            Ideal for direct consumption, rehydration contexts, or further processing.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-start gap-3">
                                <Calendar className="w-5 h-5 text-[#2A6F6B] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-[#1F3D2B] text-sm">Harvest Season</h4>
                                    <p className="text-sm text-gray-600">Winter (Nov - Jan)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Package className="w-5 h-5 text-[#2A6F6B] shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-[#1F3D2B] text-sm">Packaging</h4>
                                    <p className="text-sm text-gray-600">25kg / 50kg PP Bags</p>
                                </div>
                            </div>
                        </div>

                        <h4 className="font-bold text-[#1F3D2B] mb-3">Key Features</h4>
                        <ul className="space-y-2 mb-8">
                            {['Uniform Size Grading', 'Sun Dried / Mechanical Dried Options', 'Zero Artificial Preservatives'].map((feat, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                    <Check className="w-4 h-4 text-[#2A6F6B]" /> {feat}
                                </li>
                            ))}
                        </ul>
                        <Button>Request Quote</Button>
                    </div>
                </div>
            </Section>

            {/* Powder Section */}
            <Section background="off-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Badge variant="secondary">Industrial Grade</Badge>
                            <Badge variant="outline">Gluten Free</Badge>
                        </div>
                        <h2 className="text-3xl font-bold text-[#1F3D2B] mb-4">Water Chestnut Powder (Singhara Flour)</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            A premium, fine-textured flour made from dried water chestnuts. Known for its excellent binding properties and nutritional profile,
                            it is a staple in fasting foods and gluten-free baking.
                        </p>

                        <h4 className="font-bold text-[#1F3D2B] mb-4">Technical Specifications</h4>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                            <table className="w-full text-sm text-left">
                                <tbody>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-6 py-3 font-medium text-gray-900 bg-gray-50">Moisture Content</td>
                                        <td className="px-6 py-3 text-gray-600">&le; 10%</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-6 py-3 font-medium text-gray-900 bg-gray-50">Mesh Size</td>
                                        <td className="px-6 py-3 text-gray-600">80 - 100 Mesh (Fine)</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-6 py-3 font-medium text-gray-900 bg-gray-50">Color</td>
                                        <td className="px-6 py-3 text-gray-600">Cream / Off-White</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="px-6 py-3 font-medium text-gray-900 bg-gray-50">Shelf Life</td>
                                        <td className="px-6 py-3 text-gray-600">12 Months (Dry Storage)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 font-medium text-gray-900 bg-gray-50">Purity</td>
                                        <td className="px-6 py-3 text-gray-600">100% Water Chestnut</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <Button>Request Quote</Button>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                            <Image
                                src="/images/1000129090.jpg" // Powder
                                alt="Water Chestnut Powder"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section background="dark" className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Custom Specifications?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    We can adjust moisture levels and mesh sizes for large industrial orders.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button variant="secondary" className="gap-2">
                        <Download className="w-4 h-4" /> Download Spec Sheet
                    </Button>
                    <Button variant="outline" className="text-white border-white hover:bg-white/10">
                        Contact Sales
                    </Button>
                </div>
            </Section>
        </div>
    );
}
