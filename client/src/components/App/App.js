import React, { Component } from 'react'
import './App.css'

import NewBook from '../NewBook'
import BookList from '../BookList'

class App extends Component {
  state = {
    books: []
  }

  async fetch(method, endpoint, body) {
  try {
    const options = {
      method,
      body: body && JSON.stringify(body),
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
      }
    }
    const res = await fetch(endpoint, options)
    return await res.json()
  }
  catch (err) {
    console.error(err)
  }
}

  async componentDidMount() {
    const books = await this.fetch('get', '/books')
    this.setState({ books })
  }

  async addBook(book) {
    console.log(book)
  }

  render() {
    return (
      <div className="App">
        <h1>booklist</h1>
        <NewBook onAdd={this.addBook} />
        <BookList books={this.state.books}/>
      </div>
    )
  }
}

export default App
