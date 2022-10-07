import { configureStore, Store } from '@reduxjs/toolkit';
import CoinCardSlice from '../store/coinSlices';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    coincard: CoinCardSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
exportonst useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
 type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
