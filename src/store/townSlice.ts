import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ITownState {
  town: 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
}

const initialState: ITownState = {
  town: 'Paris',
};

export const townSlice = createSlice({
  name: 'town',
  initialState,
  reducers: {
    test: (state, action:PayloadAction<string>) => {state.town += action.payload;},
  },

});

export const {test} = townSlice.actions;
export const townState = townSlice.reducer;
