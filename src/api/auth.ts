import { api } from '../services/api';
import { IAuth } from '../types/types';

export interface ILoginPayload {
  email: string;
  password: string;
}

export const getAuthFromServer = () => api.get<IAuth>('/login');

export const loginUser = (body: ILoginPayload) =>
  api.post<IAuth>('/login', body);
