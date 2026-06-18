import { createSlice } from '@reduxjs/toolkit';
import { IOffer } from '../types/types';
import {fetchOffer} from './actions';

interface IState {
  offer: IOffer | null;
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  offer: null,
  loading: false,
  error: null,
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
      .addCase(fetchOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Ошибка загрузки отеля';
      });
  }});

export const offerReducer = offerSlice.reducer;
