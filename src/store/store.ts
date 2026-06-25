import { configureStore } from '@reduxjs/toolkit';
import { locationReducer } from './locationSlice';
import { authReducer } from './authSlice';
import { offerReducer } from './offerSlice';
import {nearbyOffersReducer} from './nearbyOffersSlice';
import {commentsReducer} from './commentsSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    auth: authReducer,
    offer: offerReducer,
    nearbyOffers: nearbyOffersReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
