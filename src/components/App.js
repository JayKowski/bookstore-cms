import React from 'react';
import BookList from './BookList';
import BooksForm from './BooksForm';

const App = () => {
  return (
    <div>
      <h1>This is a react app!</h1>
      <BookList />
      <BooksForm />
    </div>
  );
};

export default App;
