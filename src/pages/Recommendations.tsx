import React from 'react';
import { ProductIcon } from '../components/Icons';
import Seo from '../components/Seo';

interface Product {
  brand: string;
  name: string;
  link: string;
  imageUrl?: string;
}

const ProductCard: React.FC<Product> = ({ brand, name, link, imageUrl }) => (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col text-center shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-gray-100 rounded-md h-40 flex items-center justify-center mb-4">
            {imageUrl ? (
                <img src={imageUrl} alt={`${brand} - ${name}`} className="h-full w-full object-cover rounded-md" />
            ) : (
                <ProductIcon className="w-16 h-16 text-gray-300" />
            )}
        </div>
        <div className="flex-grow">
            <p className="font-bold text-gray-800">{brand}</p>
            <p className="text-gray-600 text-sm mt-1">{name}</p>
        </div>
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer sponsored"
            className="mt-4 block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
            Shop Now
        </a>
    </div>
);


const Recommendations: React.FC = () => {
    // Makeup
    const eyelashGlues: Product[] = [
        { brand: "True Glue", name: "All-Natural Lash Adhesive", link: "https://www.amazon.co.uk/s?k=True+Glue+All-Natural+Lash+Adhesive&tag=acrylis-21" },
        { brand: "MoxieLash", name: "Magnetic Eyeliner & Lashes", link: "https://www.amazon.co.uk/s?k=MoxieLash+Magnetic+Eyeliner+%26+Lashes&tag=acrylis-21" },
        { brand: "Tatti Lashes", name: "Lash Adhesives", link: "https://www.amazon.co.uk/s?k=Tatti+Lashes+glue&tag=acrylis-21" },
        { brand: "imPRESS", name: "Press-On Falsies", link: "https://www.amazon.co.uk/s?k=imPRESS+press-on+lashes&tag=acrylis-21" },
    ];
    const mascaras: Product[] = [
        { brand: "Essence", name: "Lash Princess Mascara", link: "https://www.amazon.co.uk/s?k=Essence+Lash+Princess+Mascara&tag=acrylis-21" },
        { brand: "Honest Beauty", name: "Extreme Length Mascara + Lash Primer", link: "https://www.amazon.co.uk/s?k=Honest+Beauty+Extreme+Length+Mascara+%2B+Lash+Primer&tag=acrylis-21" },
        { brand: "Estelle & Thild", name: "BioMineral Lengthening Mascara", link: "https://www.amazon.co.uk/s?k=Estelle+%26+Thild+BioMineral+Lengthening+Mascara&tag=acrylis-21" },
        { brand: "Florence by Mills", name: "Built to Lash Mascara", link: "https://www.amazon.co.uk/s?k=Florence+by+Mills+Built+to+Lash+Mascara&tag=acrylis-21" },
        { brand: "Burt’s Bees", name: "Nourishing Mascara", link: "https://www.amazon.co.uk/s?k=Burt’s+Bees+Nourishing+Mascara&tag=acrylis-21" },
    ];
    const eyeliners: Product[] = [
        { brand: "Honest Beauty", name: "Liquid Eyeliner", link: "https://www.amazon.co.uk/s?k=Honest+Beauty+Liquid+Eyeliner&tag=acrylis-21" },
        { brand: "Sephora Collection", name: "Liquid Eyeliner", link: "https://www.sephora.com/product/long-lasting-eyeliner-high-precision-brush-P303302" },
        { brand: "Pacifica", name: "Natural Eye Pencil", link: "https://www.amazon.co.uk/s?k=Pacifica+Natural+Eye+Pencil&tag=acrylis-21" },
        { brand: "Sacheu", name: "Liner & Freckle Stains", link: "https://sacheu.com/products/lip-liner-stain" },
    ];
    const settingSprays: Product[] = [
        { brand: "Milani", name: "Make It Last Matte Setting Spray", link: "https://www.amazon.co.uk/s?k=Milani+Make+It+Last+Matte+Setting+Spray&tag=acrylis-21" },
        { brand: "LA Girl", name: "PRO Perfect Oil Control Setting Spray", link: "https://www.amazon.co.uk/s?k=LA+Girl+PRO+Perfect+Oil+Control+Setting+Spray&tag=acrylis-21" },
        { brand: "NYX", name: "Matte Finish Makeup Setting Spray", link: "https://www.amazon.co.uk/s?k=NYX+Matte+Finish+Makeup+Setting+Spray&tag=acrylis-21" },
        { brand: "KimChi Chic", name: "Stage Proof Matte Setting Spray", link: "https://www.amazon.co.uk/s?k=KimChi+Chic+Stage+Proof+Matte+Setting+Spray&tag=acrylis-21" },
    ];
    const foundations: Product[] = [
        { brand: "Estee Lauder", name: "Double Wear Foundation", link: "https://www.amazon.co.uk/s?k=Estee+Lauder+Double+Wear+Foundation&tag=acrylis-21" },
        { brand: "Bare Minerals", name: "Complexion Rescue Tinted Moisturizer", link: "https://www.amazon.co.uk/s?k=Bare+Minerals+Complexion+Rescue+Tinted+Moisturizer&tag=acrylis-21" },
        { brand: "L’Oréal", name: "True Match Nude Tinted Serum", link: "https://www.amazon.co.uk/s?k=LOréal+True+Match+Nude+Tinted+Serum&tag=acrylis-21" },
    ];
    const eyebrowProducts: Product[] = [
        { brand: "NYX", name: "Micro Brow Pencil", link: "https://www.amazon.co.uk/s?k=NYX+Micro+Brow+Pencil&tag=acrylis-21" },
        { brand: "Browgame Cosmetics", name: "Instant Brow Lift Wax", link: "https://browgamecosmetics.com/products/instant-brow-lift-lamination-wax" },
    ];
    
    // Skincare
    const moisturizers: Product[] = [
        { brand: "Nivea", name: "Creme", link: "https://www.amazon.co.uk/s?k=Nivea+Creme&tag=acrylis-21" },
        { brand: "SeoulCeuticals", name: "Snail Repair Cream", link: "https://www.amazon.co.uk/s?k=SeoulCeuticals+Snail+Repair+Cream&tag=acrylis-21" },
        { brand: "Various", name: "Pure Rosehip Oil", link: "https://www.amazon.co.uk/s?k=rosehip+oil&tag=acrylis-21" },
        { brand: "Various", name: "Pure Argan Oil", link: "https://www.amazon.co.uk/s?k=argan+oil&tag=acrylis-21" },
    ];
    const cleansers: Product[] = [
        { brand: "Beauty of Joseon", name: "Green Plum Refreshing Cleanser", link: "https://www.amazon.co.uk/s?k=Beauty+of+Joseon+Green+Plum+Refreshing+Cleanser&tag=acrylis-21" },
        { brand: "Holika Holika", name: "Aloe Facial Cleansing Foam", link: "https://www.amazon.co.uk/s?k=Holika+Holika+Aloe+Facial+Cleansing+Foam&tag=acrylis-21" },
        { brand: "Kose", name: "Softymo Collagen Cleansing Foam", link: "https://www.amazon.co.uk/s?k=Kose+Softymo+Collagen+Cleansing+Foam&tag=acrylis-21" },
    ];
    const spf: Product[] = [
        { brand: "Supergoop!", name: "Unseen Sunscreen SPF 40", link: "https://www.amazon.co.uk/s?k=Supergoop%21+Unseen+Sunscreen+SPF+40&tag=acrylis-21" },
        { brand: "Avene", name: "Solaire UV Mineral Multi-Defense Sunscreen", link: "https://www.amazon.co.uk/s?k=Avene+Solaire+UV+Mineral+Multi-Defense+Sunscreen&tag=acrylis-21" },
    ];
    
    // Nail Products
    const nailPolishes: Product[] = [
        { brand: "Dazzle Dry", name: "Nail Lacquer System", link: "https://www.amazon.co.uk/s?k=Dazzle+Dry+Nail+Lacquer+System&tag=acrylis-21" },
        { brand: "Manicurist", name: "Green Natural Nail Polish", link: "https://us.manucurist.com/collections/green-nail-polish" },
        { brand: "OPI", name: "Nature Strong Nail Lacquer", link: "https://www.amazon.co.uk/s?k=OPI+Nature+Strong+Nail+Lacquer&tag=acrylis-21" },
        { brand: "Nail Kind", name: "Natural Nail Polish", link: "https://nailkind.com/" },
        { brand: "Sally Hansen", name: "Hard as Nails", link: "https://www.amazon.co.uk/s?k=Sally+Hansen+Hard+as+Nails&tag=acrylis-21" },
        { brand: "Essie", name: "Good to Go Top Coat", link: "https://www.amazon.co.uk/s?k=Essie+Good+to+Go+Top+Coat&tag=acrylis-21" },
        { brand: "ORLY", name: "Sec'n Dry Topcoat", link: "https://www.amazon.co.uk/s?k=ORLY+Sec%27n+Dry+Topcoat&tag=acrylis-21" },
        { brand: "Pacifica", name: "Plant Magic Polish", link: "https://www.amazon.co.uk/s?k=Pacifica+Plant+Magic+Polish&tag=acrylis-21" },
    ];

    return (
        <>
            <Seo
                title="Acrylate-Free Product Recommendations – Makeup & Skincare"
                description="A curated list of makeup, skincare, and nail products that are generally free from acrylates. Find safe eyelash glues, mascaras, foundations, and more."
                keywords="acrylate-free products, fungal acne safe makeup, safe skincare, acrylate-free mascara, acrylate-free foundation, nail polish without acrylates"
            />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Acrylate-Free Product Recommendations 💖</h1>
                        <p className="mt-4 text-lg text-gray-600">A curated list of products generally considered safe for those with acrylates allergies. ✨</p>
                    </div>

                    <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
                        <p className="text-sm text-yellow-800">
                            <strong>Affiliate Disclosure 💰:</strong> This page contains affiliate links. If you purchase a product through these links, we may earn a small commission at no extra cost to you. This helps support the site. Please read our full <a href="#/terms" className="underline hover:text-yellow-900">Terms of Service</a> for more information.
                        </p>
                    </div>
                    
                    <div className="mt-12 space-y-12">
                        {/* Makeup */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-6">Makeup Recommendations 💄</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Eyelash Glues</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {eyelashGlues.map(product => <ProductCard key={product.brand + product.name} {...product} />)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Mascaras</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {mascaras.map(product => <ProductCard key={product.brand + product.name} {...product} />)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Eyeliners</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {eyeliners.map(product => <ProductCard key={product.brand + product.name} {...product} />)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Setting Sprays</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {settingSprays.map(product => <ProductCard key={product.brand + product.name} {...product} />)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Foundations</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {foundations.map(product => <ProductCard key={product.brand + product.name} {...product} />)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Eyebrow Products</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {eyebrowProducts.map(product => <ProductCard key={product.brand + product.name} {...product} />)}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Skincare */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-6">Skincare Recommendations 🌿</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Moisturizers</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {moisturizers.map(product => <ProductCard key={product.brand + product.name} {...product} />)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Cleansers</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {cleansers.map(product => <ProductCard key={product.brand + product.name} {...product} />)}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">SPF</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {spf.map(product => <ProductCard key={product.brand + product.name} {...product} />)}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Nail Products */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-6">Nail Product Recommendations 💅</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {nailPolishes.map(product => <ProductCard key={product.brand + product.name} {...product} />)}
                            </div>
                            <div className="mt-6 bg-red-50 text-red-800 p-4 rounded-lg border border-red-200 text-sm">
                                <strong>Important:</strong> Avoid gel nails and acrylic extensions, as most contain high-risk acrylates that can trigger or worsen allergies.
                            </div>
                        </section>
                        
                        {/* Tips */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-6">Tips for Avoiding Acrylates 💡</h2>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4 text-gray-700">
                              <ul className="list-disc list-inside space-y-2">
                                  <li>Prioritize products labeled as "all natural" and always read ingredient lists for terms such as “acrylates,” “carbomer,” and “polyquaternium”.</li>
                                  <li>Be cautious about hybrid formulas and some anti-aging products that may include acrylates under various names.</li>
                                  <li>When in doubt, stick with simple natural oils and mineral-based makeup.</li>
                              </ul>
                            </div>
                        </section>
                    </div>

                    <div className="mt-12 text-center text-sm text-gray-500">
                        <p>
                            <strong>Disclaimer:</strong> Always double-check the ingredient list before purchasing, as formulas can change. If you have a known allergy, we strongly recommend patch testing any new product.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Recommendations;