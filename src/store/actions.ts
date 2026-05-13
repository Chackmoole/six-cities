import {createAsyncThunk} from '@reduxjs/toolkit';
import {IOffer} from '../types/types';
import {api} from '../services/api';

export const fetchOffers = createAsyncThunk (
  'fetchOffers',
  async (): Promise<IOffer[]> => {
    const response = await api.get<IOffer[]>('/hotels');
    return response.data;
  }
);

export const fetchAuth = createAsyncThunk(
  'fetchAuth',
  async (): Promise<number> => {
    const response = await api.get<number>('/login');
    return response.status;
  }
);
