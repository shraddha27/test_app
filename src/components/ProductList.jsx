import React, { useEffect, useState } from "react";
import "../styles/ProductListing.css";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/v1/products/listProducts");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-listing">
      <h1>Products</h1>
      <div className="carousel">
        {products.map((product) => (
          <div
            key={product.id}
            className="carousel-item"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
