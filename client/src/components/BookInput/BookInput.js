import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

class BookInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      dateFinished: undefined
    };
  }

  handleTextInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleDateInput = day => {
    this.setState({ dateFinished: day });
  }

  submitBook = async e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({
      title: '',
      author: '',
      dateFinished: undefined
    });
  }

  render() {
    return (
      <div className='book-input'>
        <h2>Add Book</h2>
        <form onSubmit={this.submitBook}>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleTextInput}></input>
          <input
            type='text'
            name='author'
            value={this.state.author}
            onChange={this.handleTextInput}></input>
          <DayPickerInput
            onDayChange={this.handleDateInput}
            value={this.state.dateFinished} />
          <input type='submit' value='Add'></input>
        </form>
      </div>
    )
  }
}

export default BookInput;
