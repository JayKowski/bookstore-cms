import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import App from './components/App';

const initialState = {
  books: [
    {
      id: Math.random(),
      title: '1984',
      category: 'Sci-Fi',
    },
    {
      id: Math.random(),
      title: 'Harry Potter',
      category: 'Sci-Fi',
    },
    {
      id: Math.random(),
      title: 'It',
      category: 'Horror',
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

