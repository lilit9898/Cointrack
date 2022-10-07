import { configureStore, Store } from '@reduxjs/toolkit';
import CoinCardSlice from '../store/coinSlices';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    coincard: CoinCardSlice,
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 

export default store;
