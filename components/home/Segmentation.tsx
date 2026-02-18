import Link from 'next/link';
import { ArrowRight, Factory, ChefHat } from 'lucide-react';

export const Segmentation = () => {
    return (
        <section className="py-20 bg-background" id="segmentation">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-2">
                    {/* B2B Card */}
                    <div className="group relative overflow-hidden rounded-2xl bg-secondary p-8 md:p-12 transition-all hover:shadow-2xl">
                        <div className="relative z-10">
                            <Factory className="mb-6 h-12 w-12 text-highlight" />
                            <h3 className="mb-4 text-3xl font-bold text-white">Industrial & Bulk Export</h3>
                            <p className="mb-8 text-gray-400">
                                Premium grade Singhara flour for food manufacturing, snack production, and international export.
                                Available in 25kg/50kg bulk packaging.
                            </p>
                            <Link href="/export" className="inline-flex items-center text-highlight hover:text-red-400 transition-colors">
                                <span className="mr-2 text-lg font-medium">B2B Solutions</span>
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* B2C Card */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-8 md:p-12 transition-all hover:shadow-xl">
                        <div className="relative z-10">
                            <ChefHat className="mb-6 h-12 w-12 text-primary" />
                            <h3 className="mb-4 text-3xl font-bold text-secondary">Retail & Home Use</h3>
                            <p className="mb-8 text-gray-600">
                                Perfect for Vrat recipes, gluten-free baking, and healthy cooking.
                                Pure, authentic taste for your kitchen.
                            </p>
                            <Link href="/recipes" className="inline-flex items-center text-primary hover:text-green-800 transition-colors">
                                <span className="mr-2 text-lg font-medium">For Your Kitchen</span>
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
