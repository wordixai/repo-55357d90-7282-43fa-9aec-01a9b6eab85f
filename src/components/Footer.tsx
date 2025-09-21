import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="comic-dots h-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/">
              <h3 className="comic-title text-4xl text-white mb-6 hover:text-yellow-200 transition-colors cursor-pointer">
                POP SHOP
              </h3>
            </Link>
            <p className="handwritten text-lg text-gray-300 mb-6 max-w-md">
              Your one-stop destination for all things retro, groovy, and totally awesome! 
              We're bringing the best of pop culture to your wardrobe.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full flex items-center justify-center border-2 border-white hover:scale-110 transition-transform cursor-pointer">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center border-2 border-white hover:scale-110 transition-transform cursor-pointer">
                <Facebook className="h-6 w-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center border-2 border-white hover:scale-110 transition-transform cursor-pointer">
                <Twitter className="h-6 w-6 text-white" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center border-2 border-white hover:scale-110 transition-transform cursor-pointer">
                <Youtube className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="handwritten text-2xl text-yellow-400 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="handwritten text-gray-300 hover:text-white transition-colors text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fashion" className="handwritten text-gray-300 hover:text-white transition-colors text-lg">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/art" className="handwritten text-gray-300 hover:text-white transition-colors text-lg">
                  Art Gallery
                </Link>
              </li>
              <li>
                <a href="#" className="handwritten text-gray-300 hover:text-white transition-colors text-lg">
                  Sale Items
                </a>
              </li>
              <li>
                <a href="#" className="handwritten text-gray-300 hover:text-white transition-colors text-lg">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>
          
          {/* Customer Care */}
          <div>
            <h4 className="handwritten text-2xl text-pink-400 mb-6">Customer Care</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="handwritten text-gray-300 hover:text-white transition-colors text-lg">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/faq" className="handwritten text-gray-300 hover:text-white transition-colors text-lg">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="handwritten text-gray-300 hover:text-white transition-colors text-lg">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="handwritten text-gray-300 hover:text-white transition-colors text-lg">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="handwritten text-gray-300 hover:text-white transition-colors text-lg">
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t-4 border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="handwritten text-gray-300 text-lg">
                Made with
              </span>
              <Heart className="h-5 w-5 text-red-400 fill-current animate-pulse" />
              <span className="handwritten text-gray-300 text-lg">
                for the groovy generation
              </span>
            </div>
            
            <div className="handwritten text-gray-400 text-lg">
              © 2024 Pop Shop. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400"></div>
    </footer>
  );
};

export default Footer;