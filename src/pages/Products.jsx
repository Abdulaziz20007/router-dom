import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Mahsulotlarni yuklashda xatolik yuz berdi");
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div className="loading">Yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="error">Xatolik: {error}</div>;
  }

  return (
    <div className="products-page">
      <h1>Mahsulotlar</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="product-category">Kategoriya: {product.category}</p>
              <p className="product-price">${product.price}</p>
              <div className="product-rating">
                <span>★ {product.rating.rate}</span>
                <span>({product.rating.count} baho)</span>
              </div>
              <p className="product-description">
                {product.description.substring(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
