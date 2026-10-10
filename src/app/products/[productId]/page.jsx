import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Product details page",
};

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5001/products");
  const products = await res.json();
  return products.map((product) => ({ productId: product.id }));
};

const ProductsPage = async ({ params }) => {
  const { productId } = await params;
  const res = await fetch(`http://localhost:5001/products/${productId}`);
  const product = await res.json();
  const {
    id,
    name,
    description,
    price,
    rating,
    category,
    brand,
    stock,
    image,
  } = product;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      {/* <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">name:{name}</h2>
        <p>id: {id}</p>
        <p>description: {description}</p>
        <p>price: {price} </p>
        <p>rating: {rating}</p>
        <p>category: {category} </p>
        <p>brand: {brand} </p>
        <p>stock: {stock} </p>

        <div className="card-actions justify-end">
          <Link href={"/products"}>
            <button className="btn btn-primary">BACK</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
