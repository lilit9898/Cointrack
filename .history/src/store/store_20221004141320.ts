import { configureStore, Store } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    coincard: '',
  },
});

export default store;
