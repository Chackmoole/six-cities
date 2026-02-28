import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {OFFERS} from '../mock/offers';
import {IOffer} from '../types/types';

interface ITownState {
  town: string;
  offers: IOffer[];
}

const initialState: ITownState = {
  town: 'Paris',
  offers: OFFERS,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    locationTown: (state, action:PayloadAction<string>) => {state.town = action.payload;},
    activeOffers: (state, action:PayloadAction<IOffer[]>) => {state.offers = action.payload;},
  },

});

export const {locationTown, activeOffers} = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
