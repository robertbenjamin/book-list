import React, { Component } from 'react';

class NewBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: ''
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  submitBook = async e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({
      title: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="NewBook">
        <h2>Add Book</h2>
        <form onSubmit={this.submitBook}>
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

export default NewBook;
