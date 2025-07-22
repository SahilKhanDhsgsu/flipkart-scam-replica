
import { Star, Shield, Truck, RotateCcw, Heart, Share2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="text-sm text-gray-600">
          <span>Home</span> &gt; <span>Mobiles & Accessories</span> &gt; <span>Mobiles</span> &gt; <span>Apple Mobiles</span> &gt; <span className="text-gray-900">Apple iPhone...</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="flex gap-4">
                {/* Thumbnail Images */}
                <div className="flex flex-col space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-12 h-12 border border-gray-200 rounded cursor-pointer hover:border-blue-500">
                      <img 
                        src="https://via.placeholder.com/50x50/2874F0/FFFFFF?text=📱" 
                        alt={`Product view ${item}`}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Main Product Image */}
                <div className="flex-1 aspect-square bg-gray-50 rounded-lg overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/400x400/2874F0/FFFFFF?text=iPhone+16" 
                    alt="Apple iPhone 16"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="w-full bg-[#FF9F00] hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-sm text-lg transition-colors flex items-center justify-center space-x-2">
                  <span>🛒</span>
                  <span>ADD TO CART</span>
                </button>
                <button className="w-full bg-[#FB641B] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-sm text-lg transition-colors flex items-center justify-center space-x-2">
                  <span>⚡</span>
                  <span>BUY NOW</span>
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-normal text-gray-900">Apple iPhone 16 (White, 128 GB)</h1>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm">
                  <span className="font-medium">4.6</span>
                  <Star className="w-3 h-3 ml-1 fill-white" />
                </div>
                <span className="text-gray-600 text-sm">19,106 Ratings & 793 Reviews</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Assured</span>
              </div>

              {/* Special Price */}
              <div className="bg-green-50 border border-green-200 rounded p-3">
                <span className="text-green-700 font-medium text-sm">Extra ₹5000 off</span>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-medium text-gray-900">₹74,900</span>
                  <span className="text-lg text-gray-500 line-through">₹79,000</span>
                  <span className="text-green-600 font-medium">6% off</span>
                </div>
                <p className="text-xs text-gray-600">+ ₹109 Protect Promise Fee <span className="text-blue-600 cursor-pointer">Learn more</span></p>
                <p className="text-xs text-gray-700">Secure delivery by <strong>26 Jul, Saturday</strong></p>
              </div>

              {/* Available Offers */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900">Available offers</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2 text-sm">
                    <span className="text-green-600">🏷️</span>
                    <span><strong>Bank Offer</strong> 5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter <span className="text-blue-600 cursor-pointer">T&C</span></span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <span className="text-green-600">🏷️</span>
                    <span><strong>Bank Offer</strong> 5% cashback on Axis Bank Flipkart Debit Card up to ₹750 <span className="text-blue-600 cursor-pointer">T&C</span></span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <span className="text-green-600">🏷️</span>
                    <span><strong>Bank Offer</strong> Flat ₹10 Instant Cashback on Paytm UPI Txns. Min Order Value ₹500. Valid once per Paytm account <span className="text-blue-600 cursor-pointer">T&C</span></span>
                  </div>
                  <div className="flex items-start space-x-2 text-sm">
                    <span className="text-green-600">🏷️</span>
                    <span><strong>Special Price</strong> Get extra ₹5000 off (price inclusive of cashback/coupon) <span className="text-blue-600 cursor-pointer">T&C</span></span>
                  </div>
                </div>
                <button className="text-blue-600 text-sm font-medium">View 7 more offers</button>
              </div>

              {/* Purchase Options */}
              <div className="space-y-3 border-t pt-4">
                <div className="flex items-center space-x-3">
                  <input type="radio" id="without-exchange" name="purchase-option" className="text-blue-600" defaultChecked />
                  <label htmlFor="without-exchange" className="flex-1 flex justify-between">
                    <span>Buy without Exchange</span>
                    <span className="font-medium">₹74,900</span>
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input type="radio" id="with-exchange" name="purchase-option" className="text-blue-600" />
                  <label htmlFor="with-exchange" className="flex-1 flex justify-between">
                    <span>Buy with Exchange</span>
                    <span className="font-medium text-blue-600">up to ₹59,500 off</span>
                  </label>
                </div>
              </div>

              {/* Warranty */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🍎</span>
                  <span className="text-sm text-gray-700">1 year warranty for phone and 1 year warranty for in Box Accessories. <span className="text-blue-600 cursor-pointer">Know More</span></span>
                </div>
              </div>

              {/* Color and Storage Options */}
              <div className="space-y-4 border-t pt-4">
                <div>
                  <h4 className="font-medium mb-2">Color</h4>
                  <div className="flex space-x-2">
                    {[
                      { name: 'Black', color: 'bg-gray-800' },
                      { name: 'Pink', color: 'bg-pink-300' },
                      { name: 'Teal', color: 'bg-teal-400' },
                      { name: 'Ultramarine', color: 'bg-blue-600' }
                    ].map((color) => (
                      <div key={color.name} className="text-center">
                        <div className={`w-8 h-8 ${color.color} rounded-full border-2 border-gray-300 cursor-pointer`}></div>
                        <span className="text-xs text-gray-600 mt-1 block">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Storage</h4>
                  <div className="flex space-x-2">
                    <button className="border border-blue-600 text-blue-600 bg-blue-50 px-3 py-1 rounded text-sm font-medium">128 GB</button>
                    <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm">256 GB</button>
                    <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm">512 GB</button>
                  </div>
                </div>
              </div>

              {/* Security Badges */}
              <div className="flex items-center space-x-6 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">100% Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-700">Free Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-700">7-day Return</span>
                </div>
              </div>

              {/* Scam Element: Urgency */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-medium text-sm">🔥 Hurry! Only 2 left in stock!</span>
                  <span className="text-red-500 text-xs font-mono">23:45:12</span>
                </div>
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
