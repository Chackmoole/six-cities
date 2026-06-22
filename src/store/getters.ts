import { RootState } from './store';
import { createSelector } from '@reduxjs/toolkit';
import { sortingOptions } from '../const/sort-options';

const getOffers = (state: RootState) => state.location.offers;
export const getActiveTown = (state: RootState) => state.location.town;
export const getSorting = (state: RootState) => state.location.sorting;
export const getActiveHoverOffer = (state: RootState) =>
  state.location.activeHoverOffer;
export const getStatusOffersLoaded = (state: RootState) =>
  state.location.statusOffersLoaded;
export const getAuthorizationStatus = (state: RootState) =>
  state.auth.authorizationStatus;
export const getUser = (state: RootState) => state.auth.user;
export const getLoadingOffer = (state: RootState) => state.offer.loading;
export const getOffer = (state: RootState) => state.offer.offer;
export const getErrorMessage = (state: RootState) => state.offer.errorMessage;
export const getError = (state: RootState) => state.offer.error;

export const getOfferLocations = createSelector(
  [getOffers, getActiveTown],
  (offers, town) =>
    offers
      .filter((location) => location.city.name === town)
      .map((location) => location.location)
);

export const getCityCenter = createSelector(
  [getOffers, getActiveTown],
  (offers, town) => {
    const currentTown = offers.find((location) => location.city.name === town);
    return currentTown?.city.location;
  }
);

export const getOffersByTown = createSelector(
  [getOffers, getActiveTown],
  (offers, town) => offers.filter((offer) => offer.city.name === town)
);

export const getCurrentOffers = createSelector(
  [getOffersByTown, getSorting],
  (offers, sorting) => {
    switch (sorting) {
      case 'popular':
      case 'lowToHigh':
        offers.sort((a, b) => a.price - b.price);
        break;
      case 'highToLow':
        offers.sort((a, b) => b.price - a.price);
        break;
      case 'byRate':
        offers.sort((a, b) => b.rating - a.rating);
        break;
      default:
    }
    return offers;
  }
);

export const getCurrentOptionLabel = createSelector(
  [getSorting],
  (sort) => sortingOptions.find((option) => option.value === sort)?.label
);
