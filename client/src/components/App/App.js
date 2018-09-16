import React, { Component } from 'react';
import BookAPI from '../../utils/BookAPI';
import './App.css'

import NewBook from '../NewBook';
import BookList from '../BookList';

class App extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
    await this.fetchBooks();
  }

  async fetchBooks() {
    const books = await BookAPI.getAll();
    this.setState({ books });
  }

  async createBook(body) {
    await BookAPI.post(body);
    this.fetchBooks();
  }

  async removeBook(id) {
    await BookAPI.delete(id);
    this.fetchBooks();
  }

  render() {
    return (
      <div className='App'>
        <h1>booklist</h1>
        <NewBook
          onSubmit={this.createBook.bind(this)} />
        <BookList
          books={this.state.books}
          onRemove={this.removeBook.bind(this)} />
      </div>
    )
  }
}

export default App
