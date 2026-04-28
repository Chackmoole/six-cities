import {createAsyncThunk} from '@reduxjs/toolkit';
import {IOffer} from '../types/types';

export const fetchOffers = createAsyncThunk (
  'fetchOffers',
  async () => {
    const result = await fetch('https://10.react.htmlacademy.pro/six-cities/hotels').then((response):Promise<IOffer[]>=> response.json());
    return result;
  }
);
