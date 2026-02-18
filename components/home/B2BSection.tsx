import Image from 'next/image';
import Link from 'next/link';

export const B2BSection = () => {
    return (
        <section id="b2b" className="py-20 md:py-28 bg-white">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
                            <Image
                                src="/images/cargo.jpeg"
                                alt="Bulk Water Chestnut Flour Export"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-highlight font-semibold tracking-wider uppercase text-sm mb-2 block">For Business</span>
                        <h2 className="text-4xl font-bold text-secondary mb-6">Bulk Water Chestnut Flour Supply</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We specialize in supplying high-quality Singhara Atta to food manufacturers, bakeries, and international distributors.
                            Our flour is processed under strict hygiene controls to ensure consistency, purity, and long shelf life.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="border-l-4 border-primary pl-4">
                                <h4 className="font-bold text-lg text-secondary">Packaging</h4>
                                <p className="text-gray-600">25kg / 50kg Bags</p>
                            </div>
                            <div className="border-l-4 border-highlight pl-4">
                                <h4 className="font-bold text-lg text-secondary">MOQ</h4>
                                <p className="text-gray-600">500kg Minimum</p>
                            </div>
                            <div className="border-l-4 border-accent pl-4">
                                <h4 className="font-bold text-lg text-secondary">Shelf Life</h4>
                                <p className="text-gray-600">12 Months</p>
                            </div>
                            <div className="border-l-4 border-brand-black pl-4">
                                <h4 className="font-bold text-lg text-secondary">Origin</h4>
                                <p className="text-gray-600">India</p>
                            </div>
                        </div>

                        <Link href="/contact" className="inline-block rounded-lg bg-secondary px-8 py-4 text-white font-medium hover:bg-black transition-colors">
                            Request Wholesale Pricing
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
