import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

function BooksForm() {
  return (
    <form>
      <label htmlFor="title">
        Book Title
        <input name="title" id="title" />
      </label>
      <br />
      <label htmlFor="categories">
        Categories
        <select name="categories" id="categories">
          {
            categories.map(category => (
              <option key={category.id} value={category}>{category}</option>
            ))
          }
        </select>
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default BooksForm;
