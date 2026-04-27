import {createAsyncThunk} from '@reduxjs/toolkit';
import {IOffer} from '../types/types';

export const fetchOffers = createAsyncThunk(
  // название для редакса
  'fetchOffers',
  // асинхронная функция, делает запрос на сервер и возвращает результат
  async () => {
    const result = await fetch('https://10.react.htmlacademy.pro/six-cities/hotels').then((response): Promise<IOffer[]> => response.json());
    return result;
  },
);


