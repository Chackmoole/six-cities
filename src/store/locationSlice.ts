import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {IOffer} from '../types/types';
import {fetchOffers} from './actions';

interface ITownState {
  town: string;
  offers: IOffer[];
  sorting: string;
  activeHoverOffer: number | null ;
  statusOffersLoaded: 'idle' | 'pending' | 'fulfilled' | 'rejected';
}

const initialState: ITownState = {
  town: 'Paris',
  offers: [],
  sorting: 'popular',
  activeHoverOffer: null,
  statusOffersLoaded: 'idle',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setActiveTown: (state, action:PayloadAction<string>) => {state.town = action.payload;},
    setOffers: (state, action:PayloadAction<IOffer[]>) => {state.offers = action.payload;},
    setSortingValue: (state, action:PayloadAction<string>) => {state.sorting = action.payload;},
    setActiveHoverOffer: (state, action:PayloadAction<number | null>) => {state.activeHoverOffer = action.payload;},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOffers.pending, (state, action) => {
      state.statusOffersLoaded = 'pending';
    });
    builder.addCase(fetchOffers.fulfilled, (state , action) => {
      state.offers = action.payload;
      state.statusOffersLoaded = 'fulfilled';
    });
    builder.addCase(fetchOffers.rejected, (state, action) => {
      state.statusOffersLoaded = 'rejected';
    });
  }
});

export const {setActiveTown, setSortingValue, setActiveHoverOffer} = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
