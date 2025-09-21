import { X, Heart, ShoppingCart, Star, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';

const WishlistDrawer = () => {
  const { 
    items, 
    isOpen, 
    toggleWishlist, 
    removeItem, 
    clearWishlist 
  } = useWishlistStore();
  
  const { addItem: addToCart } = useCartStore();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image
    });
    removeItem(item.id); // Remove from wishlist after adding to cart
  };

  return (
    <Sheet open={isOpen} onOpenChange={toggleWishlist}>
      <SheetContent className="w-full sm:max-w-lg bg-white border-l-4 border-black">
        <SheetHeader className="border-b-2 border-black pb-4">
          <SheetTitle className="comic-title text-3xl text-black flex items-center gap-3">
            <Heart className="h-8 w-8 text-red-500 fill-current" />
            YOUR WISHLIST
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-12 w-12 text-white fill-current" />
              </div>
              <h3 className="handwritten text-2xl text-gray-600 mb-2">
                Your wishlist is empty!
              </h3>
              <p className="handwritten text-lg text-gray-500">
                Start hearting items you love
              </p>
            </div>
          ) : (
            <>
              {/* Wishlist Items */}
              <div className="flex-1 overflow-y-auto py-6 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="pop-frame bg-white p-4 border-2 border-black">
                    <div className="flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg border-2 border-black"
                      />
                      <div className="flex-1">
                        <h4 className="handwritten text-lg font-bold text-black mb-2 line-clamp-2">
                          {item.name}
                        </h4>
                        {item.artist && (
                          <p className="handwritten text-sm text-orange-500 font-bold mb-1">
                            by {item.artist}
                          </p>
                        )}
                        {item.rating && (
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-3 w-3 ${i < item.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="comic-title text-lg text-orange-500">
                              ${item.price}
                            </span>
                            {item.originalPrice && (
                              <span className="handwritten text-sm text-gray-500 line-through">
                                ${item.originalPrice}
                              </span>
                            )}
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeItem(item.id)}
                            className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <div className="mt-4">
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white border-2 border-black hover:from-orange-500 hover:to-pink-500 handwritten"
                        onClick={() => handleAddToCart(item)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        ADD TO CART!
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wishlist Actions */}
              <div className="border-t-4 border-black pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="handwritten text-2xl font-bold text-black">
                    {items.length} Item{items.length !== 1 ? 's' : ''}
                  </span>
                  <Button 
                    variant="outline"
                    className="handwritten border-2 border-black text-black hover:bg-gray-100"
                    onClick={clearWishlist}
                  >
                    Clear All
                  </Button>
                </div>
                
                <Button 
                  className="w-full bounce-btn bg-gradient-to-r from-red-400 to-pink-400 text-white border-2 border-black hover:from-red-500 hover:to-pink-500 h-12"
                  size="lg"
                  onClick={() => {
                    items.forEach(item => handleAddToCart(item));
                  }}
                >
                  ADD ALL TO CART!
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WishlistDrawer;