import { createSlice } from '@reduxjs/toolkit';
import { IOffer } from '../types/types';
import {fetchOffer} from './actions';

interface IState {
  offer: IOffer | null;
  loading: boolean;
  errorMessage: string | null;
  error : boolean;
}

const initialState: IState = {
  offer: null,
  loading: false,
  errorMessage: null,
  error: false,
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
        state.errorMessage = 'Ошибка загрузки отеля';
        state.error = true;
      });
  }});

export const offerReducer = offerSlice.reducer;
