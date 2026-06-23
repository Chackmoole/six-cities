import {api} from '../services/api';
import {IOffer} from '../types/types';

export const getNearbyOfferFromServer = (id: number) =>
  api.get<IOffer>(`hotels/${id}/nearby`);

