import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-400 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 comic-dots opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-yellow-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-pink-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-orange-500 rounded-full animate-bounce delay-700"></div>
      </div>
      
      {/* Speech Bubbles */}
      <div className="absolute top-32 left-20 bg-white p-4 rounded-2xl border-4 border-black transform rotate-12 hidden lg:block">
        <p className="handwritten text-lg text-black">WOW!</p>
        <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
      </div>
      
      <div className="absolute top-48 right-32 bg-white p-4 rounded-2xl border-4 border-black transform -rotate-12 hidden lg:block">
        <p className="handwritten text-lg text-black">AMAZING!</p>
        <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="comic-title text-6xl md:text-8xl text-white mb-8 leading-tight">
            RETRO
            <br />
            <span className="text-yellow-300">FASHION</span>
            <br />
            EXPLOSION!
          </h2>
          
          <p className="handwritten text-2xl md:text-3xl text-white mb-12 max-w-2xl mx-auto">
            Discover the most groovy collection of vintage-inspired fashion and pop art pieces!
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bounce-btn bg-black text-white hover:bg-gray-800 px-8 py-4 text-xl border-4 border-white transform hover:scale-105 transition-all"
            >
              SHOP NOW!
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bounce-btn bg-white text-black hover:bg-gray-100 px-8 py-4 text-xl border-4 border-black transform hover:scale-105 transition-all"
            >
              VIEW COLLECTION
            </Button>
          </div>
          
          {/* Zigzag Border */}
          <div className="mt-16 zigzag-border w-full max-w-md mx-auto"></div>
        </div>
      </div>
      
      {/* Hand-drawn Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="60" height="80" viewBox="0 0 60 80" className="text-white">
          <path
            d="M30 10 L25 50 L20 45 M30 10 L35 50 L40 45 M30 10 L30 70"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;