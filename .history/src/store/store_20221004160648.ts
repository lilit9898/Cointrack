import { configureStore, Store } from '@reduxjs/toolkit';
import CoinCardSlice from '../'

const store = configureStore({
  reducer: {
    coincard: CoinCardSlice;
  },
});

export default store;
