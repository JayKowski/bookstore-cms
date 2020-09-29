import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleClick }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <label htmlFor="categories">
      Categories
      <select
        name="categories"
        id="categories"
      >
        <option value="All">All</option>
        {categories.map((category, index) => (
          <option key={`${category + index}`} value={category} onChange={() => handleClick(category)}>
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
