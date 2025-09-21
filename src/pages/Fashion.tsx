import { useState } from 'react';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const Fashion = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Items', count: 24 },
    { id: 'tops', name: 'Retro Tops', count: 8 },
    { id: 'bottoms', name: 'Groovy Bottoms', count: 6 },
    { id: 'outerwear', name: 'Cool Jackets', count: 5 },
    { id: 'accessories', name: 'Funky Accessories', count: 5 }
  ];

  const products = [
    {
      id: 1,
      name: "Retro Sunburst Tee",
      price: 29,
      originalPrice: 45,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      rating: 5,
      category: 'tops',
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Vintage Bomber Jacket",
      price: 159,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
      rating: 5,
      category: 'outerwear',
      isNew: false,
      isSale: true
    },
    {
      id: 3,
      name: "Neon Dreams Hoodie",
      price: 69,
      originalPrice: 95,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop",
      rating: 5,
      category: 'tops',
      isNew: false,
      isSale: true
    },
    {
      id: 4,
      name: "Comic Style Sneakers",
      price: 79,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      rating: 4,
      category: 'accessories',
      isNew: true,
      isSale: false
    },
    {
      id: 5,
      name: "Disco Bell-Bottom Jeans",
      price: 89,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=300&fit=crop",
      rating: 4,
      category: 'bottoms',
      isNew: false,
      isSale: false
    },
    {
      id: 6,
      name: "Psychedelic Print Shirt",
      price: 45,
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=300&h=300&fit=crop",
      rating: 5,
      category: 'tops',
      isNew: true,
      isSale: false
    },
    {
      id: 7,
      name: "Funky Platform Boots",
      price: 129,
      originalPrice: 180,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop",
      rating: 4,
      category: 'accessories',
      isNew: false,
      isSale: true
    },
    {
      id: 8,
      name: "Rainbow Stripe Cardigan",
      price: 85,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop",
      rating: 4,
      category: 'outerwear',
      isNew: false,
      isSale: false
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max && (product.price < min || product.price > max)) {
        return false;
      }
      if (!max && product.price < min) {
        return false;
      }
    }
    
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Fashion Hero Section */}
      <section className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-32 w-12 h-12 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="comic-title text-6xl md:text-8xl text-white mb-6">
            GROOVY
            <br />
            <span className="text-yellow-300">FASHION</span>
          </h1>
          <p className="handwritten text-2xl text-white max-w-2xl mx-auto">
            Discover the most far-out fashion pieces that'll make you the coolest cat around!
          </p>
          
          {/* Breadcrumb */}
          <div className="mt-8">
            <span className="handwritten text-lg text-white/80">Home</span>
            <span className="mx-3 text-white">/</span>
            <span className="handwritten text-lg text-yellow-300 font-bold">Fashion</span>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 border-b-4 border-black zigzag-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`handwritten border-2 border-black ${
                    selectedCategory === category.id
                      ? 'bg-orange-400 text-white hover:bg-orange-500'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 bg-pink-400 text-white">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Price Filter */}
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-40 handwritten border-2 border-black">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-50">$0 - $50</SelectItem>
                  <SelectItem value="50-100">$50 - $100</SelectItem>
                  <SelectItem value="100-200">$100 - $200</SelectItem>
                  <SelectItem value="200">$200+</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort By */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 handwritten border-2 border-black">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border-2 border-black rounded-lg overflow-hidden">
                <Button
                  size="sm"
                  variant={viewMode === 'grid' ? "default" : "ghost"}
                  className={`rounded-none border-0 ${
                    viewMode === 'grid' ? 'bg-orange-400 text-white' : 'bg-white text-black'
                  }`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === 'list' ? "default" : "ghost"}
                  className={`rounded-none border-0 ${
                    viewMode === 'list' ? 'bg-orange-400 text-white' : 'bg-white text-black'
                  }`}
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6">
            <p className="handwritten text-lg text-gray-600">
              Showing {sortedProducts.length} groovy items
              {selectedCategory !== 'all' && (
                <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 halftone-bg">
        <div className="container mx-auto px-4">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="h-16 w-16 text-white" />
              </div>
              <h3 className="comic-title text-4xl text-black mb-4">No Items Found!</h3>
              <p className="handwritten text-xl text-gray-600 mb-6">
                Try adjusting your filters to find more groovy items
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange('all');
                }}
                className="bounce-btn bg-gradient-to-r from-orange-400 to-pink-400 text-white border-2 border-black"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 lg:grid-cols-2'
            } max-w-7xl mx-auto`}>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Load More Section */}
      {sortedProducts.length > 0 && (
        <section className="py-12 text-center">
          <Button className="bounce-btn bg-gradient-to-r from-purple-400 to-blue-400 text-white px-12 py-4 text-xl font-bold border-4 border-black rounded-lg transform hover:scale-105 transition-all">
            LOAD MORE GROOVY ITEMS!
          </Button>
        </section>
      )}

      <Footer />
      <CartDrawer />
      <WishlistDrawer />
    </div>
  );
};

export default Fashion;