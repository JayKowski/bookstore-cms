import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

function BooksForm() {
  return (
    <form>
      <label htmlFor="title">
        Book Title
        <input name="title" id="title" />
      </label>
      <label htmlFor="categories">
        Categories
        <select name="categories" id="categories">
          {
            categories.map(category => (
              // eslint-disable-next-line react/jsx-key
              <option value={category}>{category}</option>
            ))
        }
        </select>
      </label>
      <input type="submit" />
    </form>
  );
}

export default BooksForm;
