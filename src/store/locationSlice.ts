import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {OFFERS} from '../mock/offers';
import {IOffer} from '../types/types';

interface ITownState {
  town: string;
  offers: IOffer[];
  sorting: string;
}

const initialState: ITownState = {
  town: 'Paris',
  offers: OFFERS,
  sorting: 'popular',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    locationTown: (state, action:PayloadAction<string>) => {state.town = action.payload;},
    activeOffers: (state, action:PayloadAction<IOffer[]>) => {state.offers = action.payload;},
    sortOffers: (state, action:PayloadAction<string>) => {state.sorting = action.payload;},
  },

});

export const {locationTown, activeOffers, sortOffers} = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
