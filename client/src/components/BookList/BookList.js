import React from 'react'

function BookList(props) {
  const bookList = props.books.map(book =>
    <li key={book._id}>{book.title}, {book.author}</li>
  );

  return (
    <section className="book-list">
      <h2>Book List</h2>
      <ul>{bookList}</ul>
    </section>
  )
}

export default BookList
