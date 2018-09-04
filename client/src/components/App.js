import React, { Component } from 'react'
import './App.css'

import NewBook from './NewBook'
import BookList from './BookList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  async componentDidMount() {
    const books = await fetch('/books')
    const parsedBooks = await books.json();

    this.setState({ books: parsedBooks })
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <NewBook />
        <BookList books={this.state.books}/>
      </div>
    )
  }
}

export default App;
