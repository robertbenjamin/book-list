import React from 'react';

const BookList = props => {
  const bookList = props.books.map(book =>
    <li key={book._id}>
      <span>{book.title}, {book.author}</span>&nbsp;
        <button onClick={() => props.onRemove(book._id)}>Remove</button>
    </li>
  );

  return (
    <section className='book-list'>
      <h2>Book List</h2>
      <ul>{bookList}</ul>
    </section>
  );
}

export default BookList;
