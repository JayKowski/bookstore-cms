import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, category, handleClick }) => (
  <tr key={`book${id}`}>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button onClick={() => handleClick(id)}> Delete </button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
