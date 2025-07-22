
import ProductCard from './ProductCard';

interface Product {
  image_url: string;
  name: string;
  specs: string;
  tags: string[];
  price: string;
  originalPrice?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-6">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          {title}
          <span className="ml-4 text-sm font-normal text-gray-500">
            View All
          </span>
        </h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image_url={product.image_url}
              name={product.name}
              specs={product.specs}
              tags={product.tags}
              price={product.price}
              originalPrice={product.originalPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
