import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICoinInfo } from '../types/interfaces';

interface ICoinState {
  coinInfo: ICoinInfo[];
}

const initialState: ICoinState = {
  coinInfo: [],
};

export const getCoinInfo = createAsyncThunk(
  'coincard/getCoinInfo',
  async ({ page = 1 }) => {
    let response = await axios.get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 4,
        page,
        sparkline: true,
      },
    });
    return response;
  },
);

const CoinCardSlice = createSlice({
  name: 'coincard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoinInfo.fulfilled, (state, action) => {
      state.coinInfo = action.payload;
    });
  },
});

const { reducer } = CoinCardSlice;
export default reducer;
