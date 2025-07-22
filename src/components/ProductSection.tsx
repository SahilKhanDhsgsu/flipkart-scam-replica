
import ProductCard from './ProductCard';

interface Product {
  id: number;
  image: string;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  isSmartphone?: boolean;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-[#2874F0] pb-2 inline-block">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            isSmartphone={product.isSmartphone}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
