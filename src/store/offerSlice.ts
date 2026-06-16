import { createSlice } from '@reduxjs/toolkit';
import { IOfferState } from '../types/types';

const initialState: IOfferState = {
  city: {
    name: null,
    location: {
      latitude: null,
      longitude: null,
      zoom: null,
    },
  },
  previewImage: null,
  images: null,
  title: null,
  isFavorite: null,
  isPremium: null,
  rating: null,
  type: null,
  bedrooms: null,
  maxAdults: null,
  price: null,
  goods: null,
  host: {
    id: null,
    name: null,
    isPro: null,
    avatarUrl: null,
  },
  description: null,
  location: {
    latitude: null,
    longitude: null,
    zoom: null,
  },
  id: null,
};

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
});

export const offerReducer = offerSlice.reducer;
