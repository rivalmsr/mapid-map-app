import { configureStore } from '@reduxjs/toolkit';
import pointReducer from '../features/pointSlice';

export const store = configureStore({
  reducer: {
    point: pointReducer,
  },
});
