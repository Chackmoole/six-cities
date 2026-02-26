import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ITownState {
  town: string;
}

const initialState: ITownState = {
  town: 'Paris',
};

export const townSlice = createSlice({
  name: 'town',
  initialState,
  reducers: {
    activeTown: (state, action:PayloadAction<string>) => {state.town = action.payload;},
  },

});

export const {activeTown} = townSlice.actions;
export const townState = townSlice.reducer;
