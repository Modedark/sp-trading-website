import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Recipes with Water Chestnut Flour | Vrat Specials',
    description: 'Explore delicious gluten-free recipes using Singhara Atta. From traditional Vrat dishes to modern pancakes and breads.',
};

const recipes = [
    {
        title: 'Singhara Sheera (Halwa)',
        category: 'Dessert',
        time: '20 mins',
        image: '/images/Receipe_5.jpeg',
        description: 'A rich, nutty dessert made with ghee and sugar, perfect for fasting days.',
    },
    {
        title: 'Gluten-Free Pancakes',
        category: 'Breakfast',
        time: '15 mins',
        image: '/images/Receipe_6.jpeg',
        description: 'Fluffy, healthy pancakes that are naturally sweet and packed with fiber.',
    },
    {
        title: 'Singhara Puri',
        category: 'Main Course',
        time: '30 mins',
        image: '/images/Receipe_7.jpeg',
        description: 'Crispy, deep-fried Indian bread that pairs perfectly with potato curry.',
    },
    {
        title: 'Water Chestnut Cookies',
        category: 'Snack',
        time: '45 mins',
        image: '/images/Receipe_8.jpeg',
        description: 'Crunchy, tea-time treats that are guilt-free and delicious.',
    },
];

export default function RecipesPage() {
    return (
        <main className="pt-24 pb-12 bg-[#F8F6F2]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Culinary Inspiration</span>
                    <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-secondary">Recipes & Uses</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover the versatility of Singhara Flour in your kitchen.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
                            <div className="h-48 relative overflow-hidden bg-gray-200">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold text-highlight px-2 py-1 bg-red-50 rounded-full">{recipe.category}</span>
                                    <span className="text-sm text-gray-500">{recipe.time}</span>
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">{recipe.title}</h3>
                                <p className="text-gray-600 mb-4">{recipe.description}</p>
                                <Link href={`#`} className="text-primary font-medium hover:underline inline-flex items-center">
                                    View Recipe
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
