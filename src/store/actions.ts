import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuth, IOffer } from '../types/types';
import { getOffersFromServer } from '../api/hotels';
import {
  getAuthFromServer,
  ILoginPayload,
  loginUser,
} from '../api/auth';
import { getOfferFromServer } from '../api/offer';
import {getNearbyOfferFromServer} from '../api/nearby-offers';

export const fetchOffers = createAsyncThunk<IOffer[]>(
  'fetchOffers',
  async () => {
    const response = await getOffersFromServer();
    return response.data;
  }
);

export const fetchAuth = createAsyncThunk<IAuth>(
  'fetchAuth',
  async () => {
    const response = await getAuthFromServer();
    return response.data;
  }
);

export const postAuth = createAsyncThunk<IAuth, ILoginPayload>(
  'auth/login',
  async (body) => {
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

export const fetchNearbyOffers = createAsyncThunk<IOffer, number> (
  'fetchNearbyOffers',
  async (id: number) => {
    const response = await getNearbyOfferFromServer(id);
    return response.data;
  }
);
