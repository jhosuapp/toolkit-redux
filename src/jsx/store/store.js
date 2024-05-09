import { configureStore } from '@reduxjs/toolkit';
//Slice counter
import { counterSlice } from './slices/counter';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
});