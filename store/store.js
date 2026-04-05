// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import guestbookReducer from './guestbookSlice';

export const store = configureStore({
  reducer: {
    guestbook: guestbookReducer,
  },
});
