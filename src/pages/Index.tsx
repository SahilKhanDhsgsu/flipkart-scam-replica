
import Header from '../components/Header';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';

const Index = () => {
  const electronicsProducts = [
    {
      id: 1,
      image: "https://via.placeholder.com/200x200/2874F0/FFFFFF?text=Smartphone",
      title: "Smartphone Model X - 6GB RAM, 128GB Storage",
      originalPrice: 25000,
      discountedPrice: 12499,
      isSmartphone: true
    },
    {
      id: 2,
      image: "https://via.placeholder.com/200x200/000000/FFFFFF?text=Laptop",
      title: "Gaming Laptop - Intel i7, 16GB RAM, RTX Graphics",
      originalPrice: 80000,
      discountedPrice: 39999
    },
    {
      id: 3,
      image: "https://via.placeholder.com/200x200/333333/FFFFFF?text=Smart+TV",
      title: "55\" 4K Smart TV - Android TV, HDR Support",
      originalPrice: 60000,
      discountedPrice: 29999
    },
    {
      id: 4,
      image: "https://via.placeholder.com/200x200/666666/FFFFFF?text=Headphones",
      title: "Wireless Noise Cancelling Headphones - Premium",
      originalPrice: 15000,
      discountedPrice: 7499
    }
  ];

  const fashionProducts = [
    {
      id: 5,
      image: "https://via.placeholder.com/200x200/FF6B6B/FFFFFF?text=T-Shirt",
      title: "Premium Cotton T-Shirt - Comfortable Fit",
      originalPrice: 1500,
      discountedPrice: 699
    },
    {
      id: 6,
      image: "https://via.placeholder.com/200x200/4ECDC4/FFFFFF?text=Jeans",
      title: "Slim Fit Denim Jeans - Stretchable Fabric",
      originalPrice: 3000,
      discountedPrice: 1499
    },
    {
      id: 7,
      image: "https://via.placeholder.com/200x200/45B7D1/FFFFFF?text=Jacket",
      title: "Winter Jacket - Water Resistant, Warm",
      originalPrice: 5000,
      discountedPrice: 2499
    },
    {
      id: 8,
      image: "https://via.placeholder.com/200x200/96CEB4/FFFFFF?text=Shoes",
      title: "Running Shoes - Lightweight, Breathable",
      originalPrice: 4000,
      discountedPrice: 1999
    }
  ];

  const homeProducts = [
    {
      id: 9,
      image: "https://via.placeholder.com/200x200/FFEAA7/000000?text=Sofa",
      title: "3-Seater Fabric Sofa - Modern Design",
      originalPrice: 40000,
      discountedPrice: 19999
    },
    {
      id: 10,
      image: "https://via.placeholder.com/200x200/DDA0DD/FFFFFF?text=Lamp",
      title: "LED Table Lamp - Adjustable Brightness",
      originalPrice: 2000,
      discountedPrice: 999
    },
    {
      id: 11,
      image: "https://via.placeholder.com/200x200/98D8C8/FFFFFF?text=Table",
      title: "Wooden Dining Table - 6 Seater Capacity",
      originalPrice: 25000,
      discountedPrice: 12499
    },
    {
      id: 12,
      image: "https://via.placeholder.com/200x200/F7DC6F/000000?text=Chair",
      title: "Ergonomic Office Chair - Lumbar Support",
      originalPrice: 8000,
      discountedPrice: 3999
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-gradient-to-r from-[#2874F0] to-[#1a5bb8] rounded-lg overflow-hidden">
          <div className="relative">
            <img 
              src="https://via.placeholder.com/1200x300/2874F0/FFFFFF?text=MEGA+SALE+-+UP+TO+80%25+OFF+ON+ALL+PRODUCTS" 
              alt="Mega Sale Banner"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">MEGA SALE</h1>
                <p className="text-xl md:text-2xl mb-6">Up to 80% OFF on all products</p>
                <div className="bg-red-600 text-white px-6 py-2 rounded-full inline-block font-bold animate-pulse">
                  🔥 LIMITED TIME ONLY! 🔥
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductSection title="Electronics" products={electronicsProducts} />
        <ProductSection title="Fashion" products={fashionProducts} />
        <ProductSection title="Home & Living" products={homeProducts} />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
