import { api } from '../services/api';
import { IAuth } from '../types/types';

export interface ILoginPayload {
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

export const getAuthFromServer = () => api.get<IAuth>('/login');

export const loginUser = (body: ILoginPayload) =>
  api.post<ILoginResponse>('/login', body);
