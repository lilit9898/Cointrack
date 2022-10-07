import { configureStore, Store } from '@reduxjs/toolkit';
import CoinCardSlice from '../store/coinSlices';

const store = configureStore({
  reducer: {
    coincard: CoinCardSlice,
  },
});

export default store;
