import Image from 'next/image';

export const metadata = {
    title: 'About Us | SP Trading',
    description: 'Learn about our journey from local farms to becoming a global exporter of premium water chestnut flour.',
};

export default function AboutPage() {
    return (
        <main className="pt-24 pb-12 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-secondary">Our Story</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Rooted in tradition, driven by quality.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="prose prose-lg text-gray-700">
                        <h2 className="text-3xl font-bold mb-4 text-primary">Cultivating Quality Since 2010</h2>
                        <p>
                            SP Trading was founded with a simple mission: to bring the finest organic Water Chestnut (Singhara) from the fertile ponds of India to the world.
                            What started as a small farming collective has grown into a premier export house, trusted by food manufacturers across Europe, Asia, and the Americas.
                        </p>
                        <p className="mt-4">
                            Our unique "Farm-to-Flour" approach ensures total control over quality. We work directly with farmers, using traditional, chemical-free cultivation methods combined with modern processing technology.
                        </p>
                    </div>
                    <div className="relative bg-gray-200 rounded-xl h-[400px] w-full overflow-hidden">
                        <Image
                            src="/images/farming_1.jpeg"
                            alt="Sustainable Farming"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {[
                        { label: 'Experience', value: '12+ Years' },
                        { label: 'Production', value: '500 Tons/Yr' },
                        { label: 'Export Ratio', value: '85%' },
                        { label: 'Farmers', value: '200+' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                            <div className="text-3xl md:text-4xl font-bold text-highlight mb-2">{stat.value}</div>
                            <div className="text-gray-500 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
