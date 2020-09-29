/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BookList = ({ books }) => (
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
            />
          ))
        }
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookList);
