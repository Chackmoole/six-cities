import { api } from '../services/api';
import { IOffer } from '../types/types';

export const getOfferFromServer = (id: number) =>
  api.get<IOffer>(`/hotels/${id}`);
