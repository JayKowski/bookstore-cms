/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { createBook } from '../actions/index';
import { removeBook } from '../actions/index';
import {connect} from 'react-redux';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if(this.state.title && this.state.category){
      this.props.bookCreate(this.state);
      this.setState({ id: "", title: "", category: "" }); 
    }
    e.target.reset();
  }

  handleChange(e) {
    const bookId = Math.floor(Math.random() * 100 + 1);
    if (e.target.name === 'title') { this.setState({ id:bookId, title: e.target.value }); }
    else { this.setState({ category: e.target.value }); }
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Book Title
          <input name="title" id="title" onChange={this.handleChange} />
        </label>
        <br />
        <label htmlFor="categories">
          Categories
          <select
            name="categories"
            id="categories"
            onChange={this.handleChange}
          >
            {categories.map((category, index) => (
              <option key={`${category + index}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <br />
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
      return {
        bookCreate(book) {
        dispatch(createBook(book));
      },
      removeBook(book) {
        dispatch(removeBook(book));
      }
    }
  
  }

export default connect(null, mapDispatchToProps)(BooksForm);
