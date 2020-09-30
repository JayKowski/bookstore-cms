import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

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
    const { title, category } = this.state;
    const { bookCreate } = this.props;
    if (title && category) {
      bookCreate(this.state);
      this.setState({ id: '', title: '', category: 'Action' });
    }
    e.target.reset();
  }

  handleChange(e) {
    const bookId = Math.floor(Math.random() * 100 + 1);
    if (e.target.name === 'title') { this.setState({ id: bookId, title: e.target.value }); } else { this.setState({ category: e.target.value }); }
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
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

BooksForm.propTypes = {
  bookCreate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  bookCreate(book) {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
