import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  const { id, title } = book;
  return (
    <div className="card bg-base-100  shadow-sm">
      {/* <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">{id}</h2>
        <div className="card-actions justify-end">
          <Link href={`/books/${id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
