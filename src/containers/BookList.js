/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from "../actions/index";

const BookList = ({ books, bookRemove }) => {
  
  const handleRemove = id => {
    console.log(id);
    bookRemove(id);
  };

  return(
    <div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    bookRemove(book) {
      dispatch(removeBook(book));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
