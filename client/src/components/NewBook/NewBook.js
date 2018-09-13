import React, { Component } from 'react'

class NewBook extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      author: ''
    }
  }

  handleInput = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()
    console.log('submitted with state:', this.state)

    const options = {
      method: 'post',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    }
    await fetch('/books', options)
  }

  render() {
    return (
      <div className="NewBook">
        <h2>Add Book</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInput}></input>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleInput}></input>
          <input type="submit" value="Add"></input>
        </form>
      </div>
    )
  }
}

export default NewBook
