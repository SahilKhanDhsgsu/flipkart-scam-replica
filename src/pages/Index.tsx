import Header from '../components/Header';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';
import laptops from '../data/laptop.json';
import mobiles from '../data/mobile.json';
import smartwatches from '../data/smartwatch.json';

const Index = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner - matching AirAsia flight promotion style */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-[#2874F0] to-[#1a5bb8] rounded-lg overflow-hidden relative">
          <div className="relative h-48 md:h-64">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-between px-8">
              <div className="text-white">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">Big Saving Days</h1>
                <p className="text-lg md:text-xl mb-4">Sale ends in 2 days</p>
                <div className="bg-white text-blue-600 px-4 py-2 rounded-full inline-block font-bold">
                  Shop Now
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-48 h-32 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🛍️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <ProductSection imgUrl="https://cdn1.smartprix.com/rx-i" title="Best-selling Mobiles" products={mobiles} />
        <ProductSection imgUrl="https://cdn1.smartprix.com/rx-i" title="Laptops" products={laptops} />
        <ProductSection imgUrl="https://cdn1.smartprix.com/rx-i" title="Smartwatches" products={smartwatches} />
      </div>

      <Footer />
    </div>
  );
};

export default Index;