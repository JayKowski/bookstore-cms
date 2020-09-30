import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter, removeBook } from '../actions/index';

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

      <div>
        <CategoryFilter handleClick={this.handleFilterChange} />
        <table>
          <thead>
            <tr>
              <th> Book ID </th>
              <th> Title </th>
              <th> Category </th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>

    );
  }
}

BookList.propTypes = {
  filter: PropTypes.string.isRequired,
  books: PropTypes.shape.isRequired,
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
