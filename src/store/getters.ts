import {RootState} from './store';

export const getOffers = (state: RootState) => state.location.offers;

export const getActiveTown = (state: RootState) => state.location.town;

export const getOfferLocations = (state: RootState) => state.location.offers.filter((location) => location.city.name === state.location.town).map((location) => location.location);

export const getCityCenter = (state : RootState) => {
  const currentTown = state.location.offers.find((location) => location.city.name === state.location.town);
  return currentTown?.city.location;
};

export const getSorting = (state : RootState) => state.location.sorting;
