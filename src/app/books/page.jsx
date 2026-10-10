import React from "react";
import BookCard from "../components/BookCard";

export const metadata = {
  title: "Books page",
};

const getBooksData = async () => {
  const res = await fetch("http://localhost:5001/books", {
    next: { revalidate: 5 },
  });
  if (!res.ok) {
    throw new Error("Book data fetch failed");
  } else {
    return res.json();
  }
};

const BookPage = async () => {
  const books = await getBooksData();
  console.log("books data is there", books);
  return (
    <div>
      <h2>Total books data available: {books.length} </h2>
      <div className="grid grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookPage;
