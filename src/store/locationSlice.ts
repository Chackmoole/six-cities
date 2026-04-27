import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {IOffer} from '../types/types';
import {fetchOffers} from './actions';

interface ITownState {
  town: string;
  offers: IOffer[];
  sorting: string;
  activeHoverOffer: number | null ;
  status: 'idle' | 'loading' | 'success' | 'error';
}

const initialState: ITownState = {
  town: 'Paris',
  offers: [],
  sorting: 'popular',
  activeHoverOffer: null,
  status: 'idle'
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setActiveTown: (state, action:PayloadAction<string>) => {state.town = action.payload;},
    setSortingValue: (state, action:PayloadAction<string>) => {state.sorting = action.payload;},
    setActiveHoverOffer: (state, action:PayloadAction<number | null>) => {state.activeHoverOffer = action.payload;},
  },
  //
  extraReducers: (builder) => {
    // обрабатываем состояния экшена fetchOffers - статус loading
    builder.addCase(fetchOffers.pending, (state, action) => {
      state.status = 'loading';
    });
    // обрабатываем состояния экшена fetchOffers - для состояния fulfilled кладем в стейт полученные данные
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.status = 'success';
    });
    // обрабатываем состояния экшена fetchOffers - статус error
    builder.addCase(fetchOffers.rejected, (state, action) => {
      state.status = 'error';
    });
  },
});

export const {setActiveTown, setSortingValue, setActiveHoverOffer} = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
