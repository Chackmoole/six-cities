import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postAuth, fetchAuth } from './actions';
import { setToken } from '../services/token';
import { IAuthorizationStatus } from '../types/types';

interface IAuthState {
  token: string | null;
  user: null | {
    id: number;
    name: string;
    email: string;
    avatarUrl: string;
    isPro: boolean;
  };
  loading: boolean;
  error: string | null;
  authorizationStatus: IAuthorizationStatus;
}

const initialState: IAuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
  authorizationStatus: 'unknown',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthorizationStatus: (
      state,
      action: PayloadAction<IAuthorizationStatus>
    ) => {
      state.authorizationStatus = action.payload;
    },
    setAuthorizationToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    deleteUser: (state, action: PayloadAction<null>) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postAuth.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        setToken(action.payload.token);
        state.user = action.payload;
      })
      .addCase(postAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Неизвестная ошибка';
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        setToken(action.payload.token);
        state.token = action.payload.token;
        state.authorizationStatus = 'auth';
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.authorizationStatus = 'noAuth';
      });
  },
});

export const { setAuthorizationStatus, setAuthorizationToken, deleteUser } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
