import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { type } from 'os';
import { ICoinInfo } from '../types/interfaces';

interface ICoinState {
  coinInfo: ICoinInfo[];
}

type getCoinInfoParamsType = {
  per_page: number;
  page: number;
};

const initialState: ICoinState = {
  coinInfo: [],
};

export const getCoinInfo = createAsyncThunk<ICoinInfo[], getCoinInfoParamsType>(
  'coincard/getCoinInfo',
  async ({ page, per_page:}) => {
    let response = await axios.get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page,
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
