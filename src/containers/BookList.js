import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter, removeBook } from '../actions/index';
import '../booklist.css';

class BookList extends Component {
  constructor(props) {
    super(props);
    const { filter } = this.props;
    this.state = { filter };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemove(id) {
    const { bookRemove } = this.props;
    bookRemove(id);
  }

  handleFilterChange(event) {
    const { bookChangeFilter } = this.props;
    bookChangeFilter(event.target.value);
    this.setState({ filter: event.target.value });
  }

  render() {
    const { books } = this.props;
    let booksRender;
    const { filter } = this.state;
    if (filter === 'All') {
      booksRender = books;
    } else {
      booksRender = books.filter(b => b.category === filter);
    }
    return (

      <div className="book-list">
        <CategoryFilter handleClick={this.handleFilterChange} />
        {
          booksRender.map(book => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
              handleClick={this.handleRemove}
            />
          ))
        }
      </div>

    );
  }
}

BookList.propTypes = {
  filter: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
  bookRemove: PropTypes.func.isRequired,
  bookChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  bookRemove(book) {
    dispatch(removeBook(book));
  },
  bookChangeFilter(filter) {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
