
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  image: string;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  isSmartphone?: boolean;
}

const ProductCard = ({ image, title, originalPrice, discountedPrice, isSmartphone = false }: ProductCardProps) => {
  const navigate = useNavigate();
  const discountPercentage = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

  const handleBuyNow = () => {
    if (isSmartphone) {
      navigate('/product/smartphone');
    } else {
      // All other products also navigate to smartphone page for demo
      navigate('/product/smartphone');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border">
      <div className="aspect-square mb-3 overflow-hidden rounded">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">{title}</h3>
      
      <div className="space-y-1 mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">₹{discountedPrice.toLocaleString()}</span>
          <span className="text-sm text-gray-500 line-through">₹{originalPrice.toLocaleString()}</span>
        </div>
        <span className="text-green-600 font-medium text-sm">{discountPercentage}% off</span>
      </div>

      <button 
        onClick={handleBuyNow}
        className="w-full bg-[#FF9F00] hover:bg-orange-500 text-white font-medium py-2 px-4 rounded transition-colors"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
