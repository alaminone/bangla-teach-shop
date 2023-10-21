import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardBrand from '../../components/brandProductcara/CardBrand';

const ProductByBrand = () => {
  const { brandId } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch product data when the component mounts
    async function fetchData() {
      try {
        const productResponse = await fetch('http://localhost:5001/product');

        if (!productResponse.ok) {
          throw new Error('Network response was not ok');
        }

        const productData = await productResponse.json();

        setProductData(productData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = productData.filter((product) => product.brandId === brandId);

  return (
    <div>
      <h2>Products by Brand</h2>
      <ul>
        {filteredProducts.map((product) => (
          <CardBrand key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductByBrand;
