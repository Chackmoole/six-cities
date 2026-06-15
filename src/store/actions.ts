import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuth, IOffer } from '../types/types';
import { getOffersFromServer } from '../api/hotels';
import {
  getAuthFromServer,
  ILoginPayload,
  ILoginResponse,
  loginUser,
} from '../api/auth';
import { getOfferFromServer } from '../api/offer';

export const fetchOffers = createAsyncThunk(
  'fetchOffers',
  async (): Promise<IOffer[]> => {
    const response = await getOffersFromServer();
    return response.data;
  }
);

export const fetchAuth = createAsyncThunk(
  'fetchAuth',
  async (): Promise<IAuth> => {
    const response = await getAuthFromServer();
    return response.data;
  }
);

export const postAuth = createAsyncThunk<ILoginResponse, ILoginPayload>(
  'auth/login',
  async body => {
    const response = await loginUser(body);
    return response.data;
  }
);

export const fetchOffer = createAsyncThunk<IOffer, number>(
  'fetchOffer',
  async (id: number) => {
    const response = await getOfferFromServer(id);
    return response.data;
  }
);
