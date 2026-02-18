import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-brand-black text-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image
                    src="/images/WaterChesnut_flaur_1.jpeg"
                    alt="Premium Water Chestnut Flour"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center pt-32 md:pt-40">
                <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    Premium Water Chestnut Flour
                </h1>
                <p className="mb-8 text-xl text-gray-200 md:text-2xl font-light tracking-wide max-w-2xl">
                    Pure. Gluten-Free. Export Quality.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Link href="/contact" className="rounded-full bg-highlight px-8 py-4 text-lg font-medium text-white transition-transform hover:scale-105 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2">
                        Request Bulk Quote
                    </Link>
                    <Link href="/recipes" className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                        Explore Recipes
                    </Link>
                </div>
            </div>
        </section>
    );
};
