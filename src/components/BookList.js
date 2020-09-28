import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function BookList(props) {
  const { books } = props;
  return (
    <div>
      <table>
        <tr>
          <th> Book ID </th>
          <th> Title </th>
          <th> Category </th>
        </tr>
        {
          books.map(book => (
            <tr key={`book${book.id}`}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps, {})(BookList);
