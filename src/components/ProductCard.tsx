import { Heart, ShoppingCart, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/store/cartStore';
import { useState } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ 
  id,
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  isNew, 
  isSale 
}: ProductCardProps) => {
  const { addItem } = useCartStore();
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      originalPrice,
      image
    });
    
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="pop-frame bg-white p-6 relative group">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isNew && (
          <Badge className="handwritten bg-yellow-400 text-black border-2 border-black">
            NEW!
          </Badge>
        )}
        {isSale && (
          <Badge className="handwritten bg-red-500 text-white border-2 border-black">
            SALE!
          </Badge>
        )}
      </div>
      
      {/* Wishlist Button */}
      <Button 
        size="icon" 
        variant="outline"
        className="absolute top-4 right-4 z-10 bg-white border-2 border-black hover:bg-pink-100"
      >
        <Heart className="h-4 w-4" />
      </Button>
      
      {/* Product Image */}
      <div className="relative mb-6 overflow-hidden rounded-lg border-4 border-black">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Comic-style overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
        <span className="handwritten text-sm text-gray-600 ml-2">
          ({rating}.0)
        </span>
      </div>
      
      {/* Product Name */}
      <h3 className="handwritten text-xl font-bold text-black mb-3 line-clamp-2">
        {name}
      </h3>
      
      {/* Price */}
      <div className="flex items-center gap-3 mb-6">
        <span className="comic-title text-2xl text-orange-500">
          ${price}
        </span>
        {originalPrice && (
          <span className="handwritten text-lg text-gray-500 line-through">
            ${originalPrice}
          </span>
        )}
      </div>
      
      {/* Add to Cart Button */}
      <Button 
        className={`w-full bounce-btn border-2 border-black transform hover:scale-105 transition-all ${
          isAdded 
            ? 'bg-green-500 text-white hover:bg-green-600' 
            : 'bg-gradient-to-r from-orange-400 to-pink-400 text-white hover:from-orange-500 hover:to-pink-500'
        }`}
        size="lg"
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? (
          <>
            <Check className="h-4 w-4 mr-2" />
            ADDED!
          </>
        ) : (
          <>
            <ShoppingCart className="h-4 w-4 mr-2" />
            ADD TO CART!
          </>
        )}
      </Button>
      
      {/* Comic-style effects */}
      <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80 group-hover:scale-150 transition-transform"></div>
      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pink-400 rounded-full opacity-80 group-hover:scale-150 transition-transform delay-100"></div>
    </div>
  );
};

export default ProductCard;