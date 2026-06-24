import {api} from '../services/api';
import {IReview} from '../types/types';

export const getAllComments = (id: number) => api.get<IReview[]>(`/comments/${id}`);
