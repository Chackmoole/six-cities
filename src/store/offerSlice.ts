import { createSlice } from '@reduxjs/toolkit';
import { IOfferState } from '../types/types';
import {fetchOffer} from './actions';

interface IState {
  offer: IOfferState;
  loading: boolean;
}

const initialState: IState = {
  offer: {city: {
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
  },
  loading: false,
};

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffer.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.loading = false;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.loading = false;
      });
  }});

export const offerReducer = offerSlice.reducer;
