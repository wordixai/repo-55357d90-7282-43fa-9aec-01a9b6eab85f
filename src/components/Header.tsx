import { ShoppingCart, Heart, Search, Menu, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { toggleCart, getTotalItems: getCartTotal } = useCartStore();
  const { toggleWishlist, getTotalItems: getWishlistTotal } = useWishlistStore();
  const cartTotal = getCartTotal();
  const wishlistTotal = getWishlistTotal();
  const location = useLocation();

  return (
    <header className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 via-purple-400 to-yellow-400 animate-gradient-x"></div>
      
      {/* Comic Dots Pattern */}
      <div className="absolute inset-0 comic-dots opacity-40"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-2 left-10 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-8 right-20 w-4 h-4 bg-purple-500 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-2 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-4 left-1/3 w-8 h-8 bg-pink-500 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-3 right-1/3 w-5 h-5 bg-green-400 rounded-full animate-ping delay-200"></div>
        <div className="absolute top-6 right-1/4 w-7 h-7 bg-red-400 rounded-full animate-pulse delay-600"></div>
        
        {/* Star shapes */}
        <div className="absolute top-5 left-16">
          <Star className="w-4 h-4 text-yellow-300 fill-current animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        <div className="absolute bottom-4 right-16">
          <Star className="w-3 h-3 text-white fill-current animate-spin" style={{ animationDuration: '4s' }} />
        </div>
      </div>
      
      {/* Main Header Content */}
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-white hover:bg-white/20 border-2 border-white/50 rounded-full transition-all transform hover:scale-110"
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <Link to="/" className="group">
              <div className="relative">
                <h1 className="comic-title text-4xl md:text-5xl text-white group-hover:text-yellow-200 transition-colors transform group-hover:scale-105 duration-300 drop-shadow-lg">
                  POP SHOP
                </h1>
                {/* Underline effect */}
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-500 rounded-full"></div>
                {/* Shadow effect */}
                <div className="absolute top-1 left-1 text-4xl md:text-5xl text-black/30 -z-10 comic-title">
                  POP SHOP
                </div>
              </div>
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/fashion', label: 'Fashion' },
              { path: '/art', label: 'Art' },
              { path: '/about', label: 'About' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`relative handwritten text-xl transition-all duration-300 transform hover:scale-110 ${
                  location.pathname === item.path 
                    ? 'text-yellow-200 font-bold' 
                    : 'text-white hover:text-yellow-200'
                }`}
              >
                {item.label}
                {/* Active indicator */}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
                )}
                {/* Hover effect */}
                <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 scale-110"></div>
              </Link>
            ))}
            
            {/* Sale Badge */}
            <div className="relative">
              <span className="handwritten text-xl text-white hover:text-yellow-200 transition-colors cursor-pointer">
                Sale!
              </span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
          </nav>
          
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Input 
                  placeholder="Search groovy stuff..." 
                  className="w-48 h-10 handwritten border-3 border-black bg-white/95 backdrop-blur-sm pl-10 rounded-full shadow-lg transition-all focus:w-56 focus:shadow-xl"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
              <Button 
                size="icon" 
                className="bg-black text-white hover:bg-gray-800 border-2 border-white rounded-full transform hover:scale-110 transition-all shadow-lg hover:shadow-xl"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Wishlist Button */}
            <Button 
              size="icon" 
              className="bg-white text-black hover:bg-pink-100 relative border-2 border-black rounded-full transform hover:scale-110 transition-all shadow-lg hover:shadow-xl group"
              onClick={toggleWishlist}
            >
              <Heart className={`h-5 w-5 transition-all group-hover:text-red-500 ${wishlistTotal > 0 ? 'text-red-500 fill-current' : ''}`} />
              {wishlistTotal > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center handwritten animate-pulse shadow-lg">
                  {wishlistTotal}
                </span>
              )}
            </Button>
            
            {/* Cart Button */}
            <Button 
              size="icon" 
              className="bg-white text-black hover:bg-orange-100 relative border-2 border-black rounded-full transform hover:scale-110 transition-all shadow-lg hover:shadow-xl group"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5 transition-all group-hover:text-orange-500" />
              {cartTotal > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center handwritten animate-bounce shadow-lg">
                  {cartTotal}
                </span>
              )}
              {/* Cart items floating effect */}
              {cartTotal > 0 && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 via-pink-400 to-purple-400 animate-gradient-x"></div>
      
      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-4 relative z-10">
        <div className="relative">
          <Input 
            placeholder="Search..." 
            className="w-full handwritten border-2 border-black bg-white/95 backdrop-blur-sm pl-10 rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;