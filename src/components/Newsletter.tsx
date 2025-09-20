import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 comic-dots opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-white rounded-full animate-ping"></div>
      <div className="absolute top-1/4 right-1/4 w-10 h-10 bg-green-400 rounded-full animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Speech Bubble */}
          <div className="bg-white p-8 rounded-3xl border-4 border-black transform rotate-2 mb-8 relative inline-block">
            <h2 className="comic-title text-4xl md:text-5xl text-black mb-4">
              STAY IN THE LOOP!
            </h2>
            <p className="handwritten text-xl text-gray-700">
              Get the latest drops, exclusive deals, and groovy updates straight to your inbox!
            </p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-16 border-r-16 border-t-16 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
          
          {/* Newsletter Form */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border-4 border-black max-w-2xl mx-auto transform -rotate-1">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Input 
                  type="email"
                  placeholder="Enter your groovy email..."
                  className="handwritten text-lg border-2 border-black bg-white h-14 pr-12"
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <Button 
                size="lg"
                className="bounce-btn bg-gradient-to-r from-orange-400 to-pink-400 text-white border-2 border-black hover:from-orange-500 hover:to-pink-500 px-8 h-14 transform hover:scale-105 transition-all"
              >
                SUBSCRIBE!
              </Button>
            </div>
            
            <p className="handwritten text-sm text-gray-600 mt-4">
              Don't worry, we hate spam as much as you do. Unsubscribe anytime!
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <div className="w-6 h-6 bg-yellow-400 transform rotate-45"></div>
            <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
            <div className="w-6 h-6 bg-blue-400 transform rotate-45"></div>
            <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
            <div className="w-6 h-6 bg-purple-400 transform rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;