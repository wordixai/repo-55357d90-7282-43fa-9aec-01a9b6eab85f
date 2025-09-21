import { useState } from 'react';
import { Palette, Grid, List, Star, Heart, Eye } from 'lucide-react';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';

const Art = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArtist, setSelectedArtist] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  
  const { addItem: addToCart } = useCartStore();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();

  const categories = [
    { id: 'all', name: 'All Art', count: 16 },
    { id: 'paintings', name: 'Pop Paintings', count: 6 },
    { id: 'prints', name: 'Art Prints', count: 5 },
    { id: 'digital', name: 'Digital Art', count: 3 },
    { id: 'sculptures', name: 'Mini Sculptures', count: 2 }
  ];

  const artists = [
    { id: 'all', name: 'All Artists' },
    { id: 'andy-pop', name: 'Andy Pop' },
    { id: 'roy-boom', name: 'Roy Boom' },
    { id: 'keith-groove', name: 'Keith Groove' },
    { id: 'david-splash', name: 'David Splash' }
  ];

  const artPieces = [
    {
      id: 101,
      name: "Cosmic Explosion Canvas",
      price: 299,
      originalPrice: 450,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      artist: "Andy Pop",
      artistId: "andy-pop",
      category: 'paintings',
      rating: 5,
      dimensions: "24x36 inches",
      isLimited: true,
      isSale: true,
      likes: 234,
      views: 1520
    },
    {
      id: 102,
      name: "Retro Robot Revolution",
      price: 189,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      artist: "Roy Boom",
      artistId: "roy-boom",
      category: 'digital',
      rating: 5,
      dimensions: "18x24 inches",
      isLimited: false,
      isSale: false,
      likes: 156,
      views: 890
    },
    {
      id: 103,
      name: "Neon Dreams Print",
      price: 79,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?w=400&h=400&fit=crop",
      artist: "Keith Groove",
      artistId: "keith-groove",
      category: 'prints',
      rating: 4,
      dimensions: "12x18 inches",
      isLimited: true,
      isSale: true,
      likes: 89,
      views: 567
    },
    {
      id: 104,
      name: "Pop Art Portrait Series",
      price: 399,
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=400&fit=crop",
      artist: "David Splash",
      artistId: "david-splash",
      category: 'paintings',
      rating: 5,
      dimensions: "30x40 inches",
      isLimited: true,
      isSale: false,
      likes: 345,
      views: 2100
    },
    {
      id: 105,
      name: "Comic Book Explosion",
      price: 149,
      originalPrice: 200,
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=400&fit=crop",
      artist: "Andy Pop",
      artistId: "andy-pop",
      category: 'prints',
      rating: 4,
      dimensions: "16x20 inches",
      isLimited: false,
      isSale: true,
      likes: 123,
      views: 789
    },
    {
      id: 106,
      name: "Psychedelic Mandala",
      price: 259,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
      artist: "Keith Groove",
      artistId: "keith-groove",
      category: 'digital',
      rating: 5,
      dimensions: "20x20 inches",
      isLimited: true,
      isSale: false,
      likes: 198,
      views: 1234
    },
    {
      id: 107,
      name: "Vintage Pin-Up Pop",
      price: 179,
      originalPrice: 250,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      artist: "Roy Boom",
      artistId: "roy-boom",
      category: 'prints',
      rating: 4,
      dimensions: "14x18 inches",
      isLimited: false,
      isSale: true,
      likes: 167,
      views: 934
    },
    {
      id: 108,
      name: "Mini Warhol Sculpture",
      price: 449,
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop",
      artist: "David Splash",
      artistId: "david-splash",
      category: 'sculptures',
      rating: 5,
      dimensions: "8x8x12 inches",
      isLimited: true,
      isSale: false,
      likes: 278,
      views: 1567
    }
  ];

  const filteredArt = artPieces.filter(art => {
    if (selectedCategory !== 'all' && art.category !== selectedCategory) {
      return false;
    }
    
    if (selectedArtist !== 'all' && art.artistId !== selectedArtist) {
      return false;
    }
    
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max && (art.price < min || art.price > max)) {
        return false;
      }
      if (!max && art.price < min) {
        return false;
      }
    }
    
    return true;
  });

  const sortedArt = [...filteredArt].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const handleAddToCart = (art: any) => {
    addToCart({
      id: art.id,
      name: art.name,
      price: art.price,
      originalPrice: art.originalPrice,
      image: art.image
    });
  };

  const handleToggleWishlist = (art: any) => {
    if (isInWishlist(art.id)) {
      removeFromWishlist(art.id);
    } else {
      addToWishlist({
        id: art.id,
        name: art.name,
        price: art.price,
        originalPrice: art.originalPrice,
        image: art.image,
        category: art.category,
        artist: art.artist,
        rating: art.rating
      });
    }
  };

  const ArtCard = ({ art }: { art: any }) => (
    <Card className="pop-frame bg-white relative group overflow-hidden">
      <CardContent className="p-0">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {art.isLimited && (
            <Badge className="handwritten bg-purple-500 text-white border-2 border-black">
              LIMITED!
            </Badge>
          )}
          {art.isSale && (
            <Badge className="handwritten bg-red-500 text-white border-2 border-black">
              SALE!
            </Badge>
          )}
        </div>
        
        {/* Stats */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Heart className="h-3 w-3 text-red-500" />
            <span className="text-xs font-bold">{art.likes}</span>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Eye className="h-3 w-3 text-blue-500" />
            <span className="text-xs font-bold">{art.views}</span>
          </div>
        </div>

        {/* Art Image */}
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={art.image} 
            alt={art.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Art Info */}
        <div className="p-6">
          {/* Artist */}
          <p className="handwritten text-sm text-orange-500 font-bold mb-2">
            by {art.artist}
          </p>
          
          {/* Title */}
          <h3 className="handwritten text-xl font-bold text-black mb-2 line-clamp-2">
            {art.name}
          </h3>
          
          {/* Dimensions */}
          <p className="handwritten text-sm text-gray-600 mb-3">
            {art.dimensions}
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < art.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
            <span className="handwritten text-sm text-gray-600 ml-2">
              ({art.rating}.0)
            </span>
          </div>
          
          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="comic-title text-2xl text-orange-500">
              ${art.price}
            </span>
            {art.originalPrice && (
              <span className="handwritten text-lg text-gray-500 line-through">
                ${art.originalPrice}
              </span>
            )}
          </div>
          
          {/* Actions */}
          <div className="flex gap-2">
            <Button 
              className="flex-1 bounce-btn bg-gradient-to-r from-purple-400 to-pink-400 text-white border-2 border-black hover:from-purple-500 hover:to-pink-500"
              onClick={() => handleAddToCart(art)}
            >
              ADD TO CART!
            </Button>
            <Button 
              size="icon"
              variant="outline"
              className={`border-2 border-black transition-all ${
                isInWishlist(art.id)
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-white text-black hover:bg-pink-100'
              }`}
              onClick={() => handleToggleWishlist(art)}
            >
              <Heart className={`h-4 w-4 ${isInWishlist(art.id) ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Art Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-24 w-20 h-20 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-24 left-1/4 w-12 h-12 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-1/3 w-8 h-8 bg-red-400 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-black">
              <Palette className="h-10 w-10 text-purple-500" />
            </div>
          </div>
          
          <h1 className="comic-title text-6xl md:text-8xl text-white mb-6">
            POP
            <br />
            <span className="text-yellow-300">ART</span>
            <br />
            GALLERY
          </h1>
          <p className="handwritten text-2xl text-white max-w-2xl mx-auto">
            Discover mind-blowing pop art pieces from the most groovy artists around the globe!
          </p>
          
          {/* Breadcrumb */}
          <div className="mt-8">
            <span className="handwritten text-lg text-white/80">Home</span>
            <span className="mx-3 text-white">/</span>
            <span className="handwritten text-lg text-yellow-300 font-bold">Art Gallery</span>
          </div>
        </div>
      </section>

      {/* Featured Artists Banner */}
      <section className="py-12 bg-gradient-to-r from-yellow-400 to-orange-400 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="comic-title text-4xl text-black mb-4">FEATURED ARTISTS</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {artists.slice(1).map((artist) => (
              <div key={artist.id} className="bg-white p-4 rounded-xl border-4 border-black transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <p className="handwritten text-lg font-bold text-black text-center">{artist.name}</p>
              </div>
            ))}
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
                      ? 'bg-purple-400 text-white hover:bg-purple-500'
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
              {/* Artist Filter */}
              <Select value={selectedArtist} onValueChange={setSelectedArtist}>
                <SelectTrigger className="w-40 handwritten border-2 border-black">
                  <SelectValue placeholder="Artist" />
                </SelectTrigger>
                <SelectContent>
                  {artists.map((artist) => (
                    <SelectItem key={artist.id} value={artist.id}>
                      {artist.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Price Filter */}
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-40 handwritten border-2 border-black">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-100">$0 - $100</SelectItem>
                  <SelectItem value="100-200">$100 - $200</SelectItem>
                  <SelectItem value="200-400">$200 - $400</SelectItem>
                  <SelectItem value="400">$400+</SelectItem>
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
                  <SelectItem value="popularity">Most Popular</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border-2 border-black rounded-lg overflow-hidden">
                <Button
                  size="sm"
                  variant={viewMode === 'grid' ? "default" : "ghost"}
                  className={`rounded-none border-0 ${
                    viewMode === 'grid' ? 'bg-purple-400 text-white' : 'bg-white text-black'
                  }`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === 'list' ? "default" : "ghost"}
                  className={`rounded-none border-0 ${
                    viewMode === 'list' ? 'bg-purple-400 text-white' : 'bg-white text-black'
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
              Showing {sortedArt.length} amazing art pieces
              {selectedCategory !== 'all' && (
                <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
              )}
              {selectedArtist !== 'all' && (
                <span> by {artists.find(a => a.id === selectedArtist)?.name}</span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Art Gallery */}
      <section className="py-12 halftone-bg">
        <div className="container mx-auto px-4">
          {sortedArt.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="h-16 w-16 text-white" />
              </div>
              <h3 className="comic-title text-4xl text-black mb-4">No Art Found!</h3>
              <p className="handwritten text-xl text-gray-600 mb-6">
                Try adjusting your filters to discover more amazing pieces
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedArtist('all');
                  setPriceRange('all');
                }}
                className="bounce-btn bg-gradient-to-r from-purple-400 to-pink-400 text-white border-2 border-black"
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
              {sortedArt.map((art) => (
                <ArtCard key={art.id} art={art} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Load More Section */}
      {sortedArt.length > 0 && (
        <section className="py-12 text-center">
          <Button className="bounce-btn bg-gradient-to-r from-blue-400 to-purple-400 text-white px-12 py-4 text-xl font-bold border-4 border-black rounded-lg transform hover:scale-105 transition-all">
            DISCOVER MORE ART!
          </Button>
        </section>
      )}

      <Footer />
      <CartDrawer />
      <WishlistDrawer />
    </div>
  );
};

export default Art;