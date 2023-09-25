// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './features/User'; // Make sure to provide the correct path to your UserSlice

import App from './App'; // Your main application component

const store = configureStore({
  reducer: {
    user: UserReducer,  
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
