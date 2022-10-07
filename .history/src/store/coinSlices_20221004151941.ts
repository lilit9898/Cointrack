import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getCoinInfo = createAsyncThunk(
  'coins/getCoinInfo',
  async ()=> {
    let response = axios.get
  }
)