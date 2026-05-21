import {createAsyncThunk} from '@reduxjs/toolkit';
import {IOffer} from '../types/types';
import {getOffersFromServer} from '../api/hotels';
import {getAuthFromServer} from '../api/auth';

export const fetchOffers = createAsyncThunk (
  'fetchOffers',
  async (): Promise<IOffer[]> => {
    const response = await getOffersFromServer();
    return response.data;
  }
);

export const fetchAuth = createAsyncThunk(
  'fetchAuth',
  async (): Promise<number> => {
    const response = await getAuthFromServer();
    return response.status;
  }
);


