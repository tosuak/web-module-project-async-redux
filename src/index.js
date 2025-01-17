import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './App';
import './App.css';

import { reducer } from './reducers';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
