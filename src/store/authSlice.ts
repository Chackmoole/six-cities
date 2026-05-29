import {createSlice} from '@reduxjs/toolkit';
import {postAuth} from './actions';
import {setToken} from '../services/token';

interface IAuthState {
  token: string | null;
  user: null | { id: number; name: string };
  loading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(postAuth.pending, (state) => {
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
      });
  },
});

export const authReducer = authSlice.reducer;
