
import { Star, Shield, Truck, RotateCcw } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://via.placeholder.com/400x400/2874F0/FFFFFF?text=Smartphone+X" 
                  alt="Smartphone Model X"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Scam Element: Urgency */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-medium text-sm">🔥 Hurry! Only 2 left in stock!</span>
                  <span className="text-red-500 text-xs">23:45:12</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Smartphone Model X</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(2,847 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-gray-900">₹12,499</span>
                  <span className="text-xl text-gray-500 line-through">₹25,000</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">50% off</span>
                </div>
                <p className="text-green-600 font-medium">You save ₹12,501!</p>
              </div>

              {/* Scam Element: Limited Time Offer */}
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-yellow-600 font-bold">⚡ LIMITED TIME OFFER!</span>
                </div>
                <p className="text-sm text-yellow-700">This special price expires in 24 hours. Don't miss out!</p>
              </div>

              {/* Product Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Product Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Screen Size</span>
                    <span className="font-medium">6.5 inches</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Processor</span>
                    <span className="font-medium">Octa-core</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">RAM</span>
                    <span className="font-medium">6GB</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Storage</span>
                    <span className="font-medium">128GB</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Camera</span>
                    <span className="font-medium">48MP</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Battery</span>
                    <span className="font-medium">5000mAh</span>
                  </div>
                </div>
              </div>

              {/* Security Badges */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-600 font-medium">100% Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-blue-600 font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-purple-600 font-medium">7-day Return</span>
                </div>
              </div>

              {/* Buy Now Button */}
              <div className="space-y-3">
                <button className="w-full bg-[#FF9F00] hover:bg-orange-500 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors">
                  🛒 BUY NOW - LIMITED STOCK!
                </button>
                <button className="w-full bg-[#2874F0] hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">Rajesh K.</span>
                </div>
                <p className="text-gray-700">"Great product! Amazing value for money. The camera quality is superb and battery life is excellent. Highly recommended!"</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="font-medium">Priya M.</span>
                </div>
                <p className="text-gray-700">"Really fast delivery! Got it within 2 days. The phone works perfectly and the discount was amazing. Will buy again!"</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">Amit S.</span>
                </div>
                <p className="text-gray-700">"Best smartphone in this price range! The performance is outstanding and the build quality is premium. 5 stars!"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
