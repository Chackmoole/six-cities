import { IOffer } from '../types/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchNearbyOffers } from './actions';

interface INearbyOffersState {
  offers : IOffer[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: INearbyOffersState = {
  offers: [],
  isLoading: false,
  error: null,
};

export const nearbyOffersSlice = createSlice({
  name: 'nearbyOffer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) =>
      {
        state.offers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.isLoading = false;
        state.error = 'ошибка';
      });
  }
});

export const nearbyOffersReducer = nearbyOffersSlice.reducer;
