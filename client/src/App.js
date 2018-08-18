import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  async componentDidMount() {
    const books = await fetch('/books', { accept: 'application/json'})
    const parsedBooks = await books.json();

    this.setState({ books: parsedBooks })
  }

  render() {
    const bookList = this.state.books.map(book =>
      <li key={book._id}>{book.title}, {book.author}</li>
    );

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Book List</h1>
        </header>
        <ul>{bookList}</ul>
      </div>
    )
  }
}

export default App;
