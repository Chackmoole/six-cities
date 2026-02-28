import {RootState} from './store';

export const getOffers = (state: RootState) => state.location.offers;

export const getActiveTown = (state: RootState) => state.location.town;

export const getOfferLocations = (state: RootState) => state.location.offers.filter((location) => location.city.name === state.location.town).map((location) => location.location);
