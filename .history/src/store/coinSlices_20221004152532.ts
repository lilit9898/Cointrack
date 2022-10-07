import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCoinInfo = createAsyncThunk('coins/getCoinInfo', async () => {
  let response = await axios.get('/coins/markets', {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 4,
      page: 1,
      sparkline: true,
    },
  });
  return response;
});

const CoinCardSlice = createSlice()
