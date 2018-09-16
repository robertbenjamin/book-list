import React, { Component } from 'react';

class BookList extends Component {
  removeBook = id => {
    this.props.onRemove(id);
  }

  render() {
    const bookList = this.props.books.map(book =>
      <li key={book._id}>
        <span>{book.title}, {book.author}</span>&nbsp;
        <button onClick={() => this.removeBook(book._id)}>Remove</button>
      </li>
    );

    return (
      <section className="book-list">
        <h2>Book List</h2>
        <ul>{bookList}</ul>
      </section>
    );
  }
}

export default BookList;
