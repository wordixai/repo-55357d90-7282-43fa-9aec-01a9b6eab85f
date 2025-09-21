import { Heart, Star, Users, Zap, Globe, Award, Target, Sparkles } from 'lucide-react';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Pop Culture",
      description: "We live and breathe everything retro, groovy, and totally awesome!",
      color: "from-red-400 to-pink-400"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Quality First",
      description: "Only the finest materials and most authentic designs make it to our collection.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description: "Our customers inspire everything we do - you're part of the Pop Shop family!",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "We're always pushing boundaries to bring you the freshest pop art experiences.",
      color: "from-green-400 to-blue-400"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: "😎" },
    { number: "1000+", label: "Unique Products", icon: "🎨" },
    { number: "25+", label: "Countries Served", icon: "🌍" },
    { number: "5", label: "Years of Grooviness", icon: "⭐" }
  ];

  const team = [
    {
      name: "Andy Warhol Jr.",
      role: "Founder & Chief Creative Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face",
      bio: "Passionate about bringing pop art to the masses with a modern twist!",
      color: "from-orange-400 to-pink-400"
    },
    {
      name: "Roy Lichtenstein III",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b8ba?w=300&h=300&fit=crop&face",
      bio: "Master of comic-style designs and visual storytelling.",
      color: "from-purple-400 to-blue-400"
    },
    {
      name: "Keith Haring 2.0",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&face",
      bio: "Ensuring every product meets our high standards of grooviness!",
      color: "from-green-400 to-yellow-400"
    },
    {
      name: "Basquiat Modern",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face",
      bio: "Connecting with our amazing community and spreading good vibes!",
      color: "from-pink-400 to-purple-400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* About Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-20 w-20 h-20 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-24 w-16 h-16 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-green-400 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-1/3 w-8 h-8 bg-red-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-purple-400 rounded-full animate-bounce delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-black">
              <Sparkles className="h-12 w-12 text-orange-500" />
            </div>
          </div>
          
          <h1 className="comic-title text-6xl md:text-8xl text-white mb-6">
            ABOUT
            <br />
            <span className="text-yellow-300">POP SHOP</span>
          </h1>
          <p className="handwritten text-2xl text-white max-w-3xl mx-auto">
            We're not just a store - we're a movement! Bringing the grooviest pop culture to life since 2019.
          </p>
          
          {/* Breadcrumb */}
          <div className="mt-8">
            <span className="handwritten text-lg text-white/80">Home</span>
            <span className="mx-3 text-white">/</span>
            <span className="handwritten text-lg text-yellow-300 font-bold">About Us</span>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 halftone-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="comic-title text-5xl md:text-6xl text-black mb-6">
                OUR GROOVY STORY
              </h2>
              <div className="flex justify-center items-center gap-6 mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-400"></div>
                <div className="w-8 h-8 bg-yellow-400 rounded-full border-4 border-black"></div>
                <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl border-4 border-black pop-frame">
                  <h3 className="handwritten text-2xl font-bold text-black mb-4">
                    It all started in 2019...
                  </h3>
                  <p className="handwritten text-lg text-gray-700 leading-relaxed">
                    Four friends who shared an obsession with pop art, vintage fashion, and everything retro 
                    decided to create something totally radical. We were tired of boring, mass-produced stuff 
                    and wanted to bring back the fun, colorful spirit of the 60s and 70s!
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border-4 border-black pop-frame transform rotate-2">
                  <h3 className="handwritten text-2xl font-bold text-black mb-4">
                    Our Mission is Simple
                  </h3>
                  <p className="handwritten text-lg text-gray-700 leading-relaxed">
                    To make the world more colorful, one groovy item at a time! We believe fashion and art 
                    should be fun, expressive, and accessible to everyone who wants to stand out from the crowd.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="pop-frame bg-gradient-to-br from-yellow-400 to-orange-400 p-8 rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=400&fit=crop" 
                    alt="Our team working"
                    className="w-full h-64 object-cover rounded-lg border-4 border-black"
                  />
                  <div className="mt-6 text-center">
                    <Badge className="handwritten bg-black text-white text-lg px-4 py-2">
                      The Pop Shop Team in Action!
                    </Badge>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-r from-blue-400 to-purple-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="comic-title text-5xl text-white mb-6">WHAT WE STAND FOR</h2>
            <p className="handwritten text-2xl text-white max-w-2xl mx-auto">
              These values guide everything we do at Pop Shop!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-4 border-black transform hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                    {value.icon}
                  </div>
                  <h3 className="handwritten text-xl font-bold text-black mb-4">
                    {value.title}
                  </h3>
                  <p className="handwritten text-gray-700">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="comic-title text-5xl text-black mb-6">BY THE NUMBERS</h2>
            <p className="handwritten text-xl text-black/80">
              Look how far we've come together!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl border-4 border-black p-8 transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="comic-title text-4xl text-black mb-2">{stat.number}</div>
                  <div className="handwritten text-lg text-gray-700">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 halftone-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="comic-title text-5xl md:text-6xl text-black mb-6">
              MEET THE TEAM
            </h2>
            <p className="handwritten text-2xl text-gray-700 max-w-2xl mx-auto">
              The groovy minds behind all the magic at Pop Shop!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-white border-4 border-black overflow-hidden transform hover:scale-105 transition-transform">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-20`}></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="handwritten text-xl font-bold text-black mb-2">
                      {member.name}
                    </h3>
                    <Badge className={`handwritten bg-gradient-to-r ${member.color} text-white border-2 border-black mb-4`}>
                      {member.role}
                    </Badge>
                    <p className="handwritten text-gray-700">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-blue-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="comic-title text-5xl text-white mb-6">AWARDS & RECOGNITION</h2>
            <p className="handwritten text-xl text-white max-w-2xl mx-auto">
              We're honored to be recognized for our groovy contributions!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border-4 border-black p-8 text-center transform hover:scale-105 transition-transform">
              <Award className="h-16 w-16 mx-auto mb-4 text-yellow-500" />
              <h3 className="handwritten text-xl font-bold text-black mb-2">
                Best Pop Culture Store 2023
              </h3>
              <p className="handwritten text-gray-600">Retro Fashion Awards</p>
            </div>
            
            <div className="bg-white rounded-2xl border-4 border-black p-8 text-center transform hover:scale-105 transition-transform">
              <Target className="h-16 w-16 mx-auto mb-4 text-red-500" />
              <h3 className="handwritten text-xl font-bold text-black mb-2">
                Customer Choice Award
              </h3>
              <p className="handwritten text-gray-600">E-commerce Excellence 2023</p>
            </div>
            
            <div className="bg-white rounded-2xl border-4 border-black p-8 text-center transform hover:scale-105 transition-transform">
              <Globe className="h-16 w-16 mx-auto mb-4 text-blue-500" />
              <h3 className="handwritten text-xl font-bold text-black mb-2">
                Global Expansion Star
              </h3>
              <p className="handwritten text-gray-600">International Trade Council</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Journey */}
      <section className="py-20 bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="comic-title text-5xl md:text-6xl text-white mb-6">
            JOIN OUR GROOVY JOURNEY!
          </h2>
          <p className="handwritten text-2xl text-white max-w-3xl mx-auto mb-12">
            Ready to add some color to your life? Browse our collection and become part of the Pop Shop family!
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="/fashion" 
              className="inline-block bounce-btn bg-black text-white hover:bg-gray-800 px-12 py-4 text-xl font-bold border-4 border-white rounded-lg transform hover:scale-105 transition-all handwritten"
            >
              SHOP FASHION
            </a>
            <a 
              href="/art" 
              className="inline-block bounce-btn bg-white text-black hover:bg-gray-100 px-12 py-4 text-xl font-bold border-4 border-black rounded-lg transform hover:scale-105 transition-all handwritten"
            >
              BROWSE ART
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
      <WishlistDrawer />
    </div>
  );
};

export default About;