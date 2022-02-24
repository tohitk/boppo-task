import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductsHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setIsLoading(false);
      setProducts(data);
      console.log(products);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchProductsHandler();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-around">
          {isLoading ? (
            <h3 className="text-center my-5">Loading...</h3>
          ) : (
            products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
