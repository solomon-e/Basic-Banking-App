import { configureStore } from '@reduxjs/toolkit';
import bankReducer from '../redux/bankSlice'

export const store = configureStore({
  reducer: {
    bank: bankReducer
  },
});
