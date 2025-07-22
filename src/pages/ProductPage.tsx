
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import laptops from '../data/laptop.json';
import mobiles from '../data/mobile.json';
import smartwatches from '../data/smartwatch.json';

const ProductPage = () => {
  const { id } = useParams();
  const allProducts = [...laptops, ...mobiles, ...smartwatches];
  const product = allProducts.find(p => p.id === id);

  product.image_url = `https://cdn1.smartprix.com/rx-i${product.imageId}-w280-h280/img.webp`;

  return (
    <ProductDetail product={product} />
  );
};

export default ProductPage;
