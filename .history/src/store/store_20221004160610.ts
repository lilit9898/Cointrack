import { configureStore, Store } from '@reduxjs/toolkit';
import CoinCardSlice

const store = configureStore({
  reducer: {
    coincard: CoinCardSlice;
  },
});

export default store;
