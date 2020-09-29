/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter, removeBook } from '../actions/index';

const BookList = ({ books, bookRemove, bookChangeFilter }) => {
  const handleRemove = id => {
    bookRemove(id);
  };

  const handleFilterChange = category => {
    bookChangeFilter(category);
  };

  return (
    <div>
      <CategoryFilter handleClick={handleFilterChange} />
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
                handleClick={handleRemove}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  bookRemove(book) {
    dispatch(removeBook(book));
  },
  bookChangeFilter(category) {
    dispatch(changeFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
