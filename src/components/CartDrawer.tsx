import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCartStore } from '@/store/cartStore';

const CartDrawer = () => {
  const { 
    items, 
    isOpen, 
    toggleCart, 
    removeItem, 
    updateQuantity, 
    clearCart, 
    getTotalPrice 
  } = useCartStore();

  const totalPrice = getTotalPrice();

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:max-w-lg bg-white border-l-4 border-black">
        <SheetHeader className="border-b-2 border-black pb-4">
          <SheetTitle className="comic-title text-3xl text-black flex items-center gap-3">
            <ShoppingBag className="h-8 w-8 text-orange-500" />
            YOUR CART
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="h-12 w-12 text-white" />
              </div>
              <h3 className="handwritten text-2xl text-gray-600 mb-2">
                Your cart is empty!
              </h3>
              <p className="handwritten text-lg text-gray-500">
                Add some groovy items to get started
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
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
                        <div className="flex items-center justify-between">
                          <span className="comic-title text-xl text-orange-500">
                            ${item.price}
                          </span>
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
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 p-0 border-2 border-black"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="handwritten text-lg font-bold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0 border-2 border-black"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <span className="handwritten text-lg font-bold text-black">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="border-t-4 border-black pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="handwritten text-2xl font-bold text-black">
                    Total:
                  </span>
                  <span className="comic-title text-3xl text-orange-500">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bounce-btn bg-gradient-to-r from-orange-400 to-pink-400 text-white border-2 border-black hover:from-orange-500 hover:to-pink-500 h-12"
                    size="lg"
                  >
                    CHECKOUT NOW!
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full handwritten border-2 border-black text-black hover:bg-gray-100 h-10"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;