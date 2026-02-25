import {configureStore} from '@reduxjs/toolkit';
import {townState} from './townSlice';

export const store = configureStore({
  reducer: {
    town: townState,
  }
});

export type RootState = ReturnType<typeof store.getState>
