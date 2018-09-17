import React, { Component } from 'react';
import BookAPI from '../../utils/BookAPI';
import './App.css'

import BookInput from '../BookInput';
import BookList from '../BookList';

class App extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
    await this.fetchBooks();
  }

  fetchBooks = async () => {
    const books = await BookAPI.getAll();
    this.setState({ books });
  }

  createBook = async body => {
    await BookAPI.post(body);
    this.fetchBooks();
  }

  removeBook = async id => {
    await BookAPI.delete(id);
    this.fetchBooks();
  }

  render() {
    return (
      <div className='App'>
        <h1>booklist</h1>
        <BookInput
          onSubmit={this.createBook} />
        <BookList
          books={this.state.books}
          onRemove={this.removeBook} />
      </div>
    )
  }
}

export default App
