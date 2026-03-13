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
    setActiveTown: (state, action:PayloadAction<string>) => {state.town = action.payload;},
    setOffers: (state, action:PayloadAction<IOffer[]>) => {state.offers = action.payload;},
    setSortingValue: (state, action:PayloadAction<string>) => {state.sorting = action.payload;},
  },

});

export const {setActiveTown, setOffers, setSortingValue} = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
