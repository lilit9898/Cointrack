import { configureStore, Store } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    coincard: CoinCardSlice
  },
});

export default store;
