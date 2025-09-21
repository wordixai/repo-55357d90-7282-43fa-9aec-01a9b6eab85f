import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductGrid />
      <Newsletter />
      <Footer />
      <CartDrawer />
      <WishlistDrawer />
    </div>
  );
};

export default Index;