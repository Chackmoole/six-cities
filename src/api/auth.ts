import {api} from '../services/api';
import {IAuth} from '../types/types';
import {createAsyncThunk} from '@reduxjs/toolkit';

interface ILoginCredentials {
  token: string;
  user: {
    id: number;
    name: string;
  };
  email: string;
  password: string;
}

export interface ILoginResponse {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}

export const loginUser = createAsyncThunk<ILoginCredentials, ILoginResponse, { rejectValue: string }>
('auth/login',
  async (credentials, {rejectWithValue}) => {
    try {
      const response = await fetch ('https://10.react.htmlacademy.pro/six-cities/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        return rejectWithValue('Ошибка авторизации');
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return await response.json();
    } catch (error) {
      return rejectWithValue('Сетевая ошибка');
    }
  }
);

export const getAuthFromServer = () => api.get<IAuth[]>('/login');
