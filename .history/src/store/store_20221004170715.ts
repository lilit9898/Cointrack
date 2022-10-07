import { configureStore, Store } from '@reduxjs/toolkit';
import CoinCardSlice from '../store/coinSlices';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    coincard: CoinCardSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
