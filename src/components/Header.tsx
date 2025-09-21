import { ShoppingCart, Heart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartStore } from '@/store/cartStore';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { toggleCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 comic-dots relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-10 w-8 h-8 bg-blue-500 rounded-full"></div>
        <div className="absolute top-12 right-20 w-6 h-6 bg-purple-500 rounded-full"></div>
        <div className="absolute bottom-6 left-1/4 w-4 h-4 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-8 left-1/3 w-10 h-10 bg-pink-500 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/">
              <h1 className="comic-title text-4xl md:text-5xl text-white hover:text-yellow-200 transition-colors cursor-pointer">
                POP SHOP
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`handwritten text-xl transition-colors ${
                location.pathname === '/' 
                  ? 'text-yellow-200 font-bold' 
                  : 'text-white hover:text-yellow-200'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/fashion" 
              className={`handwritten text-xl transition-colors ${
                location.pathname === '/fashion' 
                  ? 'text-yellow-200 font-bold' 
                  : 'text-white hover:text-yellow-200'
              }`}
            >
              Fashion
            </Link>
            <a href="#" className="handwritten text-xl text-white hover:text-yellow-200 transition-colors">
              Art
            </a>
            <a href="#" className="handwritten text-xl text-white hover:text-yellow-200 transition-colors">
              Sale!
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Input 
                placeholder="Search..." 
                className="w-48 bg-white/90 border-2 border-black handwritten"
              />
              <Button size="icon" className="bg-black text-white hover:bg-gray-800">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Button size="icon" className="bg-white text-black hover:bg-gray-100">
              <Heart className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              className="bg-white text-black hover:bg-gray-100 relative"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center handwritten animate-bounce">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;