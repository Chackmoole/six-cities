import {createAsyncThunk} from '@reduxjs/toolkit';
import {IOffer} from '../types/types';
import {createAPI} from '../services/api';

export const fetchOffers = createAsyncThunk (
  'fetchOffers',
  async (): Promise<IOffer[]> => {
    const response = await createAPI().get<IOffer[]>('/hotels');
    return response.data;
  }
);
