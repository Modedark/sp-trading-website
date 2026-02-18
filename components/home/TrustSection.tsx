import { ShieldCheck, Award, Leaf, Users } from 'lucide-react';

export const TrustSection = () => {
    return (
        <section className="py-20 md:py-28 bg-background border-t border-gray-200">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
                    <div className="flex flex-col items-center">
                        <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                        <h4 className="text-lg font-bold text-secondary">FSSAI Certified</h4>
                        <p className="text-sm text-gray-500">Highest safety standards</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Award className="h-12 w-12 text-highlight mb-4" />
                        <h4 className="text-lg font-bold text-secondary">Export Quality</h4>
                        <p className="text-sm text-gray-500">Global grade purity</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Leaf className="h-12 w-12 text-green-600 mb-4" />
                        <h4 className="text-lg font-bold text-secondary">100% Organic</h4>
                        <p className="text-sm text-gray-500">No pesticides or chemicals</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="h-12 w-12 text-accent mb-4" />
                        <h4 className="text-lg font-bold text-secondary">Trusted Partner</h4>
                        <p className="text-sm text-gray-500">Helping brands succeed</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
