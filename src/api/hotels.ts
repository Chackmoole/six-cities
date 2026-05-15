import {api} from '../services/api';
import {IOffer} from '../types/types';

export const getOffersFromServer = api.get<IOffer[]>('/hotels');
