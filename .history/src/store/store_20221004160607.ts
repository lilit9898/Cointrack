import { configureStore, Store } from '@reduxjs/toolkit';
import CoinCard

const store = configureStore({
  reducer: {
    coincard: CoinCardSlice;
  },
});

export default store;
