import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';

const randomNumber = () => Math.floor((Math.random() * 100) + 1);

const initialState = {
  books: [
    {
      id: randomNumber(),
      title: '1984',
      category: 'Sci-Fi',
    },
    {
      id: randomNumber(),
      title: 'Harry Potter',
      category: 'Sci-Fi',
    },
    {
      id: randomNumber(),
      title: 'It',
      category: 'Horror',
    },
  ],
};

const reducerBooks = (state = initialState) => state;
const store = createStore(reducerBooks);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
