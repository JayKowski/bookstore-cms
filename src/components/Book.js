import React from 'react';
import PropTypes from 'prop-types';
import '../book.css';

const Book = ({ id, title, category, handleClick }) => (
  <div className="book-row" key={`book${id}`}>
    <div className="book-specs">
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="author">Microverse</p>
      <button className="links-btn" type="button">
        Comment
      </button>
      <button className="links-btn" type="button" onClick={() => handleClick(id)}>Remove</button>
      <button className="links-btn" type="button">
        Edit
      </button>
    </div>
    <div className="book-completion">
      <div className="percent-wheel">
        <div className="loader" />
      </div>
      <div className="percent-details">
        <p className="percent-num">75%</p>
        <p className="completion">Completed</p>
      </div>
    </div>
    <div className="book-chapters">
      <p className="curr-chapt">CURRENT CHAPTER</p>
      <p className="chapter">Chapter 17</p>
      <button className="update-btn" type="button">
        update progress
      </button>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;
