import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchOffers = createAsyncThunk (
  'fetchOffers',
  async () => {
    const result = await fetch('https://10.react.htmlacademy.pro/six-cities/hotels').then((response)=> response.json());
    return result;
  }
)
