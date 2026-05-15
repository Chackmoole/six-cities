import {api} from '../services/api';
import {IOffer} from '../types/types';

export const getAuthFromServer = api.get<IOffer[]>('/login');
