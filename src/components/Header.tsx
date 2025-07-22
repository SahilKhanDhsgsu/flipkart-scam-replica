
import { Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#2874F0] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-white flex items-center">
              <span className="text-white">Flipkart</span>
              <span className="text-[#FFE500] text-sm ml-1 italic">Explore Plus</span>
            </div>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white rounded-sm overflow-hidden flex-1 max-w-lg">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="px-4 py-2 text-gray-700 flex-1 outline-none"
              />
              <button className="bg-[#FFE500] p-2 hover:bg-yellow-400 transition-colors">
                <Search className="w-5 h-5 text-[#2874F0]" />
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-1 hover:bg-blue-600 px-3 py-2 rounded transition-colors">
              <User className="w-5 h-5" />
              <span className="hidden md:block">Login</span>
            </button>
            <button className="flex items-center space-x-1 hover:bg-blue-600 px-3 py-2 rounded transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:block">Cart</span>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-3 hidden md:block">
          <ul className="flex space-x-8 text-sm">
            <li><a href="#" className="hover:text-yellow-300 transition-colors">Electronics</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition-colors">Fashion</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition-colors">Appliances</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition-colors">Books</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
