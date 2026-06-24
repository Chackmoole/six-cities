import { configureStore } from '@reduxjs/toolkit';
import { locationReducer } from './locationSlice';
import { authReducer } from './authSlice';
import { offerReducer } from './offerSlice';
import {nearbyOffersReducer} from './nearbyOffersSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    auth: authReducer,
    offer: offerReducer,
    nearbyOffers: nearbyOffersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
