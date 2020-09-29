/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    if (e.target.name === 'title') { this.setState({ title: e.target.value }); }
    else { this.setState({ category: e.target.value }); }
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const { title, category } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Book Title
          <input name="title" id="title" onChange={this.handleChange} />
        </label>
        <br />
        <label htmlFor="categories">
          Categories
          <select name="categories" id="categories" onChange={this.handleChange}>
            {
              categories.map((category, index) => (
                <option key={`${category + index}`} value={category}>{category}</option>
              ))
            }
          </select>
        </label>
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default BooksForm;
