// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'C:/Users/LENOVO/Downloads/front/front/src/features/User.js';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
