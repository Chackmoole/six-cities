import {api} from '../services/api';
import {IAuth} from '../types/types';

export const getAuthFromServer = () => api.get<IAuth[]>('/login');
