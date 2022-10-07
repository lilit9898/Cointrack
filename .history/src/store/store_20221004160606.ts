import { configureStore, Store } from '@reduxjs/toolkit';
import Coin

const store = configureStore({
  reducer: {
    coincard: CoinCardSlice;
  },
});

export default store;
