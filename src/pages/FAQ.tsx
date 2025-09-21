import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle, Mail, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Questions', icon: '🌟' },
    { id: 'shipping', name: 'Shipping & Delivery', icon: '📦' },
    { id: 'returns', name: 'Returns & Exchanges', icon: '🔄' },
    { id: 'payment', name: 'Payment & Pricing', icon: '💳' },
    { id: 'products', name: 'Products & Quality', icon: '👕' },
    { id: 'account', name: 'Account & Orders', icon: '👤' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'shipping',
      question: "How long does shipping take?",
      answer: "We offer several groovy shipping options! Standard shipping takes 5-7 business days, while our Express shipping gets your items to you in 2-3 business days. For those who can't wait, we also offer overnight shipping! All orders are processed within 24 hours on business days.",
      popular: true
    },
    {
      id: 2,
      category: 'shipping',
      question: "Do you ship internationally?",
      answer: "Absolutely! We spread the pop art love worldwide! We ship to over 50 countries. International shipping typically takes 7-14 business days depending on your location. Shipping costs are calculated at checkout based on your destination."
    },
    {
      id: 3,
      category: 'returns',
      question: "What's your return policy?",
      answer: "We want you to be totally satisfied with your purchase! You can return items within 30 days of delivery for a full refund. Items must be in original condition with tags attached. Art pieces must be returned in their original packaging to prevent damage.",
      popular: true
    },
    {
      id: 4,
      category: 'returns',
      question: "How do I exchange an item?",
      answer: "Exchanges are super easy! Simply contact our customer service team with your order number and the item you'd like to exchange. We'll send you a prepaid return label, and once we receive your item, we'll ship out the new one right away!"
    },
    {
      id: 5,
      category: 'payment',
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and even cryptocurrency! We use secure encryption to protect all your payment information.",
      popular: true
    },
    {
      id: 6,
      category: 'payment',
      question: "Do you offer payment plans?",
      answer: "Yes! For purchases over $100, we offer flexible payment plans through our partners. You can split your purchase into 4 interest-free payments or choose longer-term financing options. Just select your preferred payment plan at checkout!"
    },
    {
      id: 7,
      category: 'products',
      question: "Are your art prints authentic?",
      answer: "Absolutely! All our art pieces come with certificates of authenticity. Our artists are carefully vetted, and each piece is an original creation or officially licensed reproduction. Limited edition pieces are numbered and come with special documentation.",
      popular: true
    },
    {
      id: 8,
      category: 'products',
      question: "What materials are your clothes made from?",
      answer: "We use only the grooviest, high-quality materials! Our t-shirts are 100% organic cotton, hoodies are cotton-poly blends for comfort and durability, and our vintage pieces are carefully restored authentic materials. All materials are ethically sourced!"
    },
    {
      id: 9,
      category: 'products',
      question: "How do I care for my art prints?",
      answer: "Keep your art looking fresh! For canvas prints, dust gently with a soft brush. For paper prints, frame with UV-protective glass and keep away from direct sunlight. All prints come with care instructions specific to their medium."
    },
    {
      id: 10,
      category: 'account',
      question: "How do I track my order?",
      answer: "Once your order ships, we'll send you a tracking number via email. You can also log into your account on our website to see real-time tracking information. Our customer service team is always here to help if you need updates!",
      popular: true
    },
    {
      id: 11,
      category: 'account',
      question: "Can I modify or cancel my order?",
      answer: "You can modify or cancel your order within 2 hours of placing it. After that, our groovy team gets to work preparing your items! If you need to make changes after 2 hours, contact us immediately and we'll do our best to help."
    },
    {
      id: 12,
      category: 'shipping',
      question: "Do you offer free shipping?",
      answer: "Yes! We offer free standard shipping on all orders over $75. For orders under $75, standard shipping is just $5.99. Express and overnight shipping rates vary by location but are always competitively priced!"
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFAQs = faqs.filter(faq => faq.popular);

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const FAQItem = ({ faq }: { faq: any }) => (
    <Card className="pop-frame bg-white border-2 border-black overflow-hidden">
      <CardContent className="p-0">
        <button
          className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
          onClick={() => toggleFAQ(faq.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="handwritten text-lg font-bold text-black flex-1">
                {faq.question}
              </h3>
              {faq.popular && (
                <Badge className="bg-gradient-to-r from-orange-400 to-pink-400 text-white border-2 border-black handwritten">
                  POPULAR
                </Badge>
              )}
            </div>
            {expandedFAQ === faq.id ? (
              <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
            )}
          </div>
        </button>
        
        {expandedFAQ === faq.id && (
          <div className="px-6 pb-6 border-t-2 border-gray-100">
            <p className="handwritten text-gray-700 leading-relaxed pt-4">
              {faq.answer}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* FAQ Hero Section */}
      <section className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 py-20 comic-dots relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-24 w-16 h-16 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-32 w-12 h-12 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-24 left-1/3 w-8 h-8 bg-pink-400 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-1/4 w-20 h-20 bg-red-400 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-black">
              <HelpCircle className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          
          <h1 className="comic-title text-6xl md:text-8xl text-white mb-6">
            HELP &
            <br />
            <span className="text-yellow-300">FAQ</span>
          </h1>
          <p className="handwritten text-2xl text-white max-w-2xl mx-auto mb-8">
            Got questions? We've got answers! Find everything you need to know about shopping with us.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input 
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-16 text-lg handwritten border-4 border-black bg-white/95 backdrop-blur-sm pl-16"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
          </div>
          
          {/* Breadcrumb */}
          <div className="mt-8">
            <span className="handwritten text-lg text-white/80">Home</span>
            <span className="mx-3 text-white">/</span>
            <span className="handwritten text-lg text-yellow-300 font-bold">FAQ</span>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="comic-title text-5xl text-black mb-4">MOST POPULAR</h2>
            <p className="handwritten text-xl text-black/80">The questions everyone's asking!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {popularFAQs.map((faq) => (
              <Card key={faq.id} className="bg-white border-4 border-black transform hover:scale-105 transition-transform cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="handwritten text-lg font-bold text-black mb-3 line-clamp-2">
                    {faq.question}
                  </h3>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white border-2 border-black handwritten"
                    onClick={() => {
                      setSelectedCategory('all');
                      setExpandedFAQ(faq.id);
                      document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    READ ANSWER
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 border-b-4 border-black zigzag-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`handwritten border-2 border-black ${
                  selectedCategory === category.id
                    ? 'bg-blue-400 text-white hover:bg-blue-500'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section id="faq-section" className="py-16 halftone-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-16 w-16 text-white" />
                </div>
                <h3 className="comic-title text-4xl text-black mb-4">No Results Found!</h3>
                <p className="handwritten text-xl text-gray-600 mb-6">
                  Try adjusting your search or browse our categories
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bounce-btn bg-gradient-to-r from-blue-400 to-purple-400 text-white border-2 border-black"
                >
                  Show All FAQs
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="comic-title text-4xl text-black mb-2">
                    {selectedCategory === 'all' ? 'ALL QUESTIONS' : categories.find(c => c.id === selectedCategory)?.name.toUpperCase()}
                  </h2>
                  <p className="handwritten text-lg text-gray-600">
                    {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                
                {filteredFAQs.map((faq) => (
                  <FAQItem key={faq.id} faq={faq} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="comic-title text-5xl text-white mb-6">STILL NEED HELP?</h2>
          <p className="handwritten text-2xl text-white mb-12 max-w-2xl mx-auto">
            Our groovy support team is here to help! Reach out and we'll get back to you super fast.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-4 border-black transform hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="handwritten text-2xl font-bold text-black mb-3">Live Chat</h3>
                <p className="handwritten text-gray-600 mb-4">
                  Chat with our team in real-time
                </p>
                <Button className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white border-2 border-black handwritten">
                  START CHAT
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-4 border-black transform hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="handwritten text-2xl font-bold text-black mb-3">Email Us</h3>
                <p className="handwritten text-gray-600 mb-4">
                  Send us a detailed message
                </p>
                <Button className="w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white border-2 border-black handwritten">
                  SEND EMAIL
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-4 border-black transform hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="handwritten text-2xl font-bold text-black mb-3">Call Us</h3>
                <p className="handwritten text-gray-600 mb-4">
                  Speak directly with our team
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-400 to-blue-400 text-white border-2 border-black handwritten">
                  CALL NOW
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default FAQ;