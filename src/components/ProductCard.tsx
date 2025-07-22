
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  image_url: string;
  name: string;
  specs: string;
  tags: string[];
  price: string;
  originalPrice?: string;
}

const ProductCard = ({ image_url, name, specs, tags, price, originalPrice }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/product/smartphone');
  };

  // Calculate discount if original price is provided
  const discountPercentage = originalPrice ? 
    Math.round(((parseFloat(originalPrice.replace(/[^0-9]/g, '')) - parseFloat(price.replace(/[^0-9]/g, ''))) / parseFloat(originalPrice.replace(/[^0-9]/g, ''))) * 100) : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border cursor-pointer" onClick={handleBuyNow}>
      <div className="aspect-square mb-3 overflow-hidden rounded bg-gray-50 flex items-center justify-center">
        <img 
          src={image_url} 
          alt={name}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 text-sm">{name}</h3>
      
      <div className="mb-2">
        <p className="text-xs text-gray-600 mb-1">{specs}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="space-y-1 mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          {originalPrice && (
            <>
              <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
              <span className="text-green-600 font-medium text-sm">{discountPercentage}% off</span>
            </>
          )}
        </div>
      </div>

      <div className="flex space-x-2">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleBuyNow();
          }}
          className="flex-1 bg-[#FF9F00] hover:bg-orange-500 text-white font-medium py-2 px-4 rounded text-sm transition-colors"
        >
          Buy Now
        </button>
        <button 
          onClick={(e) => e.stopPropagation()}
          className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2 px-4 rounded text-sm transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
