import React from 'react';
import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';
import NavBar from './Navbar';

const App = () => (
  <div>
    <NavBar />
    <div className="book-store">
      <BookList />
      <BooksForm />
    </div>
  </div>
);

export default App;
