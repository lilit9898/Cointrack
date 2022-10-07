import { configureStore, Store } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    coincard: Coin,
  },
});

export default store;
