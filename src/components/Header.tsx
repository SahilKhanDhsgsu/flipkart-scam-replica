
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#2874F0] text-white">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <div className="text-white flex flex-col" onClick={() => window.location.href = '/'}>
              <span className="text-xl font-bold italic">Flipkart</span>
              <span className="text-[#FFE500] text-xs italic">Explore Plus</span>
            </div>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white rounded-sm overflow-hidden w-96">
              <input
                type="text"
                placeholder="Search for Products, Brands and More"
                className="px-4 py-2.5 text-gray-700 flex-1 outline-none text-sm"
              />
              <button className="bg-white p-2.5 hover:bg-gray-50 transition-colors">
                <Search className="w-5 h-5 text-[#2874F0]" />
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-8">
            <button className="flex items-center space-x-1 hover:bg-blue-600 px-3 py-2 rounded transition-colors">
              <User className="w-4 h-4" />
              <span className="text-sm">Login</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <button className="flex items-center space-x-1 hover:bg-blue-600 px-3 py-2 rounded transition-colors">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm">Cart</span>
            </button>
            <button className="text-sm hover:bg-blue-600 px-3 py-2 rounded transition-colors">
              Become a Seller
            </button>
            <button className="flex items-center space-x-1 hover:bg-blue-600 px-3 py-2 rounded transition-colors">
              <span className="text-sm">More</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Categories */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-8">
              <div className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#2874F0] transition-colors">
                <div className="w-16 h-10 bg-gray-100 rounded mb-1 flex items-center justify-center">
                  <span className="text-xs">📱</span>
                </div>
                <span className="text-xs font-medium">Electronics</span>
              </div>
              <div className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#2874F0] transition-colors">
                <div className="w-16 h-10 bg-gray-100 rounded mb-1 flex items-center justify-center">
                  <span className="text-xs">📱</span>
                </div>
                <span className="text-xs font-medium">Mobiles</span>
              </div>
              <div className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#2874F0] transition-colors">
                <div className="w-16 h-10 bg-gray-100 rounded mb-1 flex items-center justify-center">
                  <span className="text-xs">👕</span>
                </div>
                <span className="text-xs font-medium">Fashion</span>
              </div>
              <div className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#2874F0] transition-colors">
                <div className="w-16 h-10 bg-gray-100 rounded mb-1 flex items-center justify-center">
                  <span className="text-xs">🏠</span>
                </div>
                <span className="text-xs font-medium">Home & Furniture</span>
              </div>
              <div className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#2874F0] transition-colors">
                <div className="w-16 h-10 bg-gray-100 rounded mb-1 flex items-center justify-center">
                  <span className="text-xs">🔌</span>
                </div>
                <span className="text-xs font-medium">Appliances</span>
              </div>
              <div className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#2874F0] transition-colors">
                <div className="w-16 h-10 bg-gray-100 rounded mb-1 flex items-center justify-center">
                  <span className="text-xs">✈️</span>
                </div>
                <span className="text-xs font-medium">Flight Bookings</span>
              </div>
              <div className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#2874F0] transition-colors">
                <div className="w-16 h-10 bg-gray-100 rounded mb-1 flex items-center justify-center">
                  <span className="text-xs">🧸</span>
                </div>
                <span className="text-xs font-medium">Beauty, Toys & More</span>
              </div>
              <div className="flex flex-col items-center text-gray-700 cursor-pointer hover:text-[#2874F0] transition-colors">
                <div className="w-16 h-10 bg-gray-100 rounded mb-1 flex items-center justify-center">
                  <span className="text-xs">🏍️</span>
                </div>
                <span className="text-xs font-medium">Two Wheelers</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
