import Image from 'next/image';
import Link from 'next/link';
import { Download, CheckCircle } from 'lucide-react';

export const metadata = {
    title: 'Premium Water Chestnut Flour | Products',
    description: 'Detailed specifications of our gluten-free Singhara Atta. Available in bulk 25kg and retail packs.',
};

export default function ProductPage() {
    return (
        <main className="pt-24 pb-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="relative bg-gray-100 rounded-2xl h-[500px] w-full overflow-hidden">
                            <Image
                                src="/images/WaterChesnut_flaur_1.jpeg"
                                alt="Water Chestnut Flour"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {[2, 3, 4].map(i => (
                                <div key={i} className="relative bg-gray-100 rounded-lg h-24 overflow-hidden">
                                    <Image
                                        src={`/images/WaterChesnut_flaur_${i}.jpeg`}
                                        alt={`Product View ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">Premium Grade</span>
                        <h1 className="text-4xl font-bold font-sans text-secondary mb-4">Water Chestnut Flour (Singhara Atta)</h1>
                        <p className="text-xl text-gray-600 mb-8">
                            100% Pure, Gluten-Free, and Fasting-Approved. Milled from sun-dried water chestnuts for superior taste and nutritional value.
                        </p>

                        <div className="border-t border-b border-gray-100 py-6 mb-8 space-y-4">
                            {[
                                'Gluten-Free & Non-GMO',
                                'Rich in Potassium & Antioxidants',
                                'Low Glycemic Index',
                                'Perfect for Vrat (Fasting)',
                                'Fine Mesh Grind',
                            ].map(item => (
                                <div key={item} className="flex items-center text-gray-700">
                                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="bg-[#F8F6F2] p-6 rounded-xl">
                                <h3 className="font-bold text-secondary mb-2">Technical Specifications</h3>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li className="flex justify-between"><span>Moisture:</span> <span>&lt; 10%</span></li>
                                    <li className="flex justify-between"><span>Purity:</span> <span>99.9%</span></li>
                                    <li className="flex justify-between"><span>Packaging:</span> <span>25kg PP Bags / 1kg Retail Pack</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <Link href="/contact" className="flex-1 text-center bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-colors">
                                Request Quote
                            </Link>
                            <button className="flex items-center justify-center px-8 py-4 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">
                                <Download className="mr-2 h-5 w-5" />
                                Spec Sheet
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
