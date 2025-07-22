import { Star, Shield, Truck, RotateCcw, Heart, Share2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Product {
  id: string;
  name: string;
  price: number;
  fePrice: string;
  rating: number;
  image_url: string;
  features: { text: string }[];
  bestStore: {
    stock: string;
    store: {
      slug: string;
    };
  };
}

const ProductDetail = ({ product }: { product: Product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="text-sm text-gray-600">
          <span>Home</span> &gt; <span>Laptops</span> &gt; <span className="text-gray-900">{product.name}</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="flex gap-4">
                {/* Main Product Image */}
                <div className="flex-1 aspect-square bg-gray-50 rounded-lg overflow-hidden">
                  <img 
                    src={product.image_url} 
                    alt={product.name}
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
                <h1 className="text-2xl font-semibold text-gray-900">{product.name}</h1>
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
                  <span className="font-medium">{product.rating / 10}</span>
                  <Star className="w-3 h-3 ml-1 fill-white" />
                </div>
                <span className="text-gray-600 text-sm">{product.rating * 100} Ratings & {product.rating * 10} Reviews</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Assured</span>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-medium text-gray-900 line-through">{product.fePrice}</span>
                  <span className="text-3xl text-emerald-600 font-bold ">₹{Math.floor(product.price / 2)}</span>
                </div>
                <p className="text-xs text-gray-700">Get it by <strong>Tomorrow, Jul 23</strong></p>
              </div>

              {/* Available Offers */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-900">Available offers</h3>
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2 text-sm">
                      <span className="text-green-600">🏷️</span>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Warranty */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🛡️</span>
                  <span className="text-sm text-gray-700">1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories. <span className="text-blue-600 cursor-pointer">Know More</span></span>
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
                  <span className="text-red-600 font-medium text-sm">🔥 Hurry! Only few left!</span>
                  <span className="text-red-500 text-xs font-mono">Ends in 01:15:30</span>
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