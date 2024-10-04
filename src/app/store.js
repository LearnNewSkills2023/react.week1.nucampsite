export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});





// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: 0,
//   reducers: {
//     increment: state => state + 1,
//     decrement: state => state - 1,
//   },
// });
