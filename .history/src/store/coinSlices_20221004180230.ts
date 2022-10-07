import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ICoinInfo } from '../types/interfaces';

interface ICoinState {
  coinInfo: ICoinInfo[];
}

const initialState: ICoinState = {
  coinInfo: [],
};

export const getCoinInfo = createAsyncThunk<ICoinInfo[], number>(
  'coincard/getCoinInfo',
  async (page) => {
    let response = await axios.get('https://api.coingecko.com/api/v3', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 4,
        page,
        sparkline: true,
      },
    });
    console.log(response);
    return response.data;
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
