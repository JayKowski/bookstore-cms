import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleClick }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  categories.unshift('All');
  return (
    <label htmlFor="categories">
      Categories
      <select
        name="categories"
        id="categories"
        onChange={handleClick}
      >
        {categories.map((category, index) => (
          <option key={`${category + index}`} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>

  );
};

CategoryFilter.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default CategoryFilter;
