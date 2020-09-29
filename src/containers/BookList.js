/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter, removeBook } from '../actions/index';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleRemove = this.handleRemove.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemove(id) {
    const { bookRemove } = this.props;
    bookRemove(id);
  }

  filterBooks() {
    const { books, filter } = this.props;
    if (filter === 'All') books
    console.log(filter);
  }

  handleFilterChange(event) {
    const { bookChangeFilter } = this.props;
    bookChangeFilter(event.target.value);
    this.filterBooks(event.target.value);
  }



  render() {
    const {
      books,
    } = this.props;
    // let booksRender;
    // if (filtrt == 'all')
    //   booksRender = books
    // else
    //   //filtr return new array 

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
              books.map(book => (
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
