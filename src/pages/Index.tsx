
import Header from '../components/Header';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';

const Index = () => {
  const smartphoneProducts = [
    {
      image_url: "https://via.placeholder.com/150?text=iPhone+14",
      name: "iPhone 14",
      specs: "4GB RAM, 128GB Storage, 12MP Camera",
      tags: ["Apple", "iOS", "5G", "Flagship"],
      price: "Rs. 79,900",
      originalPrice: "Rs. 89,900"
    },
    {
      image_url: "https://via.placeholder.com/150?text=iPhone+14+Pro",
      name: "iPhone 14 Pro",
      specs: "6GB RAM, 256GB Storage, 48MP Camera",
      tags: ["Apple", "iOS", "5G", "Flagship"],
      price: "Rs. 1,29,900",
      originalPrice: "Rs. 1,39,900"
    },
    {
      image_url: "https://via.placeholder.com/150?text=iPhone+14+Pro+Max",
      name: "iPhone 14 Pro Max",
      specs: "6GB RAM, 256GB Storage, 48MP Camera",
      tags: ["Apple", "iOS", "5G", "Flagship"],
      price: "Rs. 1,39,900",
      originalPrice: "Rs. 1,49,900"
    },
    {
      image_url: "https://via.placeholder.com/150?text=Samsung+Galaxy+S23",
      name: "Samsung Galaxy S23",
      specs: "8GB RAM, 256GB Storage, 50MP Camera",
      tags: ["Samsung", "Android", "5G", "Flagship"],
      price: "Rs. 74,999",
      originalPrice: "Rs. 84,999"
    },
    {
      image_url: "https://via.placeholder.com/150?text=Samsung+Galaxy+A54",
      name: "Samsung Galaxy A54",
      specs: "6GB RAM, 128GB Storage, 50MP Camera",
      tags: ["Samsung", "Android", "5G", "Mid-range"],
      price: "Rs. 38,999",
      originalPrice: "Rs. 48,999"
    }
  ];

  const moreSmartphones = [
    {
      image_url: "https://via.placeholder.com/150?text=OnePlus+11",
      name: "OnePlus 11",
      specs: "12GB RAM, 256GB Storage, 50MP Camera",
      tags: ["OnePlus", "Android", "5G", "Flagship"],
      price: "Rs. 56,999",
      originalPrice: "Rs. 66,999"
    },
    {
      image_url: "https://via.placeholder.com/150?text=Xiaomi+Redmi+Note+12",
      name: "Xiaomi Redmi Note 12",
      specs: "6GB RAM, 128GB Storage, 48MP Camera",
      tags: ["Xiaomi", "Android", "5G", "Budget"],
      price: "Rs. 18,999",
      originalPrice: "Rs. 28,999"
    },
    {
      image_url: "https://via.placeholder.com/150?text=Realme+10+Pro",
      name: "Realme 10 Pro",
      specs: "8GB RAM, 128GB Storage, 108MP Camera",
      tags: ["Realme", "Android", "5G", "Mid-range"],
      price: "Rs. 22,999",
      originalPrice: "Rs. 32,999"
    },
    {
      image_url: "https://via.placeholder.com/150?text=Vivo+V25",
      name: "Vivo V25",
      specs: "8GB RAM, 256GB Storage, 64MP Camera",
      tags: ["Vivo", "Android", "5G", "Mid-range"],
      price: "Rs. 27,999",
      originalPrice: "Rs. 37,999"
    },
    {
      image_url: "https://via.placeholder.com/150?text=Oppo+Reno+8",
      name: "Oppo Reno 8",
      specs: "8GB RAM, 128GB Storage, 50MP Camera",
      tags: ["Oppo", "Android", "5G", "Mid-range"],
      price: "Rs. 29,999",
      originalPrice: "Rs. 39,999"
    }
  ];

  const budgetPhones = [
    {
      image_url: "https://via.placeholder.com/150?text=Google+Pixel+7",
      name: "Google Pixel 7",
      specs: "8GB RAM, 128GB Storage, 50MP Camera",
      tags: ["Google", "Android", "5G", "Flagship"],
      price: "Rs. 59,999",
      originalPrice: "Rs. 69,999"
    },
    {
      image_url: "https://via.placeholder.com/150?text=Motorola+Edge+30",
      name: "Motorola Edge 30",
      specs: "6GB RAM, 128GB Storage, 50MP Camera",
      tags: ["Motorola", "Android", "5G", "Mid-range"],
      price: "Rs. 27,999",
      originalPrice: "Rs. 37,999"
    },
    {
      image_url: "https://via.placeholder.com/150?text=Poco+X5+Pro",
      name: "Poco X5 Pro",
      specs: "6GB RAM, 128GB Storage, 108MP Camera",
      tags: ["Poco", "Android", "5G", "Mid-range"],
      price: "Rs. 22,999",
      originalPrice: "Rs. 32,999"
    },
    {
      image_url: "https://via.placeholder.com/150?text=Nothing+Phone+1",
      name: "Nothing Phone 1",
      specs: "8GB RAM, 128GB Storage, 50MP Camera",
      tags: ["Nothing", "Android", "5G", "Mid-range"],
      price: "Rs. 32,999",
      originalPrice: "Rs. 42,999"
    },
    {
      image_url: "https://via.placeholder.com/150?text=Asus+ROG+Phone+6",
      name: "Asus ROG Phone 6",
      specs: "12GB RAM, 256GB Storage, 64MP Camera",
      tags: ["Asus", "Android", "5G", "Gaming", "Flagship"],
      price: "Rs. 71,999",
      originalPrice: "Rs. 81,999"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner - matching AirAsia flight promotion style */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-[#2874F0] to-[#1a5bb8] rounded-lg overflow-hidden relative">
          <div className="relative h-48 md:h-64">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-between px-8">
              <div className="text-white">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">Smartphone Deals</h1>
                <p className="text-lg md:text-xl mb-4">Flat 15% Off</p>
                <div className="bg-white text-blue-600 px-4 py-2 rounded-full inline-block font-bold">
                  CODE: SMARTSALE
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-48 h-32 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <ProductSection title="Best of Electronics" products={smartphoneProducts} />
        <ProductSection title="Top Deals on Smartphones" products={moreSmartphones} />
        <ProductSection title="Budget Friendly Phones" products={budgetPhones} />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
