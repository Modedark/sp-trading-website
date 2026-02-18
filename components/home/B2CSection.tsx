import Image from 'next/image';
import Link from 'next/link';

export const B2CSection = () => {
    return (
        <section id="b2c" className="py-20 md:py-28 bg-[#F8F6F2]">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">For Home</span>
                <h2 className="text-4xl font-bold text-secondary mb-6">Pure & Gluten-Free Goodness</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Singhara flour is a superfood packed with potassium, antioxidants, and fiber.
                    Perfect for fasting (Vrat) or adding a healthy twist to your daily meals.
                </p>
            </div>

            {/* Carousel or Grid of uses - Simplified Grid for now */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
                            <div className="h-64 relative bg-gray-200">
                                <Image
                                    src={`/images/Receipe_${item}.jpeg`}
                                    alt={`Recipe ${item}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl text-secondary mb-2">Delicious Pancakes</h3>
                                <p className="text-gray-600 mb-4">Fluffy, healthy, and completely gluten-free.</p>
                                <Link href="/recipes" className="text-primary font-medium hover:underline">View Recipe</Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/recipes" className="inline-block rounded-lg border-2 border-primary text-primary px-8 py-3 font-medium hover:bg-primary hover:text-white transition-colors">
                        Discover All Recipes
                    </Link>
                </div>
            </div>
        </section>
    )
}
