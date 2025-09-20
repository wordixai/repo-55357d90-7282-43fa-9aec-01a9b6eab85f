import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Retro Sunburst Tee",
      price: 29,
      originalPrice: 45,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      rating: 5,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Pop Art Canvas Print",
      price: 89,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
      rating: 4,
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Vintage Bomber Jacket",
      price: 159,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
      rating: 5,
      isNew: false,
      isSale: true
    },
    {
      id: 4,
      name: "Comic Style Sneakers",
      price: 79,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      rating: 4,
      isNew: true,
      isSale: false
    },
    {
      id: 5,
      name: "Neon Dreams Hoodie",
      price: 69,
      originalPrice: 95,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop",
      rating: 5,
      isNew: false,
      isSale: true
    }
  ];

  return (
    <section className="py-20 bg-white halftone-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="comic-title text-5xl md:text-6xl text-black mb-6">
            TRENDING NOW!
          </h2>
          <p className="handwritten text-2xl text-gray-700 max-w-2xl mx-auto">
            Check out these totally radical pieces that are flying off our shelves!
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-400"></div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full border-4 border-black"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bounce-btn bg-gradient-to-r from-purple-400 to-blue-400 text-white px-12 py-4 text-xl font-bold border-4 border-black rounded-lg transform hover:scale-105 transition-all">
            VIEW ALL PRODUCTS!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;