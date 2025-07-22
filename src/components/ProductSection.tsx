
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';


const ProductSection = ({imgUrl, title, products }: { imgUrl: string, title: string, products: any}) => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Link to={`/product/${product.id}`} key={index}>
              <ProductCard
                image_url={`${imgUrl}${product.imageId}-w280-h280/img.webp`}
                name={product.name}
                specs={product.features.map(f => f.text).join(", ")}
                tags={[]}
                price={product.fePrice}
                originalPrice={product.price.toString()}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
