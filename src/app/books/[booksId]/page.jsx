import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Book details page",
};

export const generateStaticParams = async () => {
  const books = await fetch("http://localhost:5001/books").then((res) =>
    res.json(),
  );
  return books.map((book) => ({ bookId: book.booksId }));
};

const BooksDetailsPage = async ({ params }) => {
  const { booksId } = await params;
  const res = await fetch(`http://localhost:5001/books/${booksId}`);
  const book = await res.json();
  const { id, title, description, author, price, rating, category, stock } =
    book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      {/* <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">name:{title}</h2>
        <p>description: {description}</p>
        <p>id: {id}</p>
        <p>author: {author}</p>
        <p>price: {price} </p>
        <p>rating: {rating}</p>
        <p>category: {category} </p>
        <p>stock: {stock} </p>

        <div className="card-actions justify-end">
          <Link href={"/books"}>
            <button className="btn btn-primary">BACK</button>
          </Link>
          <Link href={"/"}>
            <button className="btn btn-primary">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;
