import {configureStore} from '@reduxjs/toolkit';
import {locationReducer} from './locationSlice';
import {createAPI} from '../services/api';

const api = createAPI();

export const store = configureStore({
  reducer: {
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware ({
      thunk: {
        extraArgument: api,
      }
    }),
});

export type RootState = ReturnType<typeof store.getState>
