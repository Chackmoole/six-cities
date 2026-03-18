import {ISortOption} from '../types/types';

export const sortingOptions:ISortOption[] = [
  {value: 'popular', label: 'Popular'},
  {value: 'lowToHigh', label: 'Price: low to high'},
  {value: 'highToLow', label: 'Price: high to low'},
  {value: 'byRate', label: 'Top rated first'},
];
