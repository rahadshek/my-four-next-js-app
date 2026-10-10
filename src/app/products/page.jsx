import React from "react";
import ProductCard from "../components/ProductCard";

export const metadata = {
  title: "Productas page",
};

const getProductData = async () => {
  const res = await fetch("http://localhost:5001/products", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Book data fetch failed");
  } else {
    return res.json();
  }
};

const ProductPage = async () => {
  const product = await getProductData();
  return (
    <div>
      <h1>setu tore chudlam {product.length} </h1>
      <div className="grid grid-cols-3 gap-4">
        {product.map((products) => (
          <ProductCard key={products.id} products={products} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
