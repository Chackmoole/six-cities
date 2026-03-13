import {RootState} from './store';

export const getActiveTown = (state: RootState) => state.location.town;

export const getOfferLocations = (state: RootState) =>
  state.location.offers.filter((location) => location.city.name === state.location.town)
    .map((location) => location.location);

export const getCityCenter = (state : RootState) => {
  const currentTown = state.location.offers.find((location) => location.city.name === state.location.town);
  return currentTown?.city.location;
};

export const getSorting = (state : RootState) => state.location.sorting;

export const getOffers = (state: RootState) =>{
  const offers = state.location.offers.filter((offer) => offer.city.name === state.location.town)
    .map((offer) => offer);
  switch (getSorting(state)){
    case 'popular' :
    case ('lowToHigh'):
      offers.sort((a,b) => a.price - b.price);
      break;
    case ('highToLow'):
      offers.sort((a,b) => b.price - a.price);
      break;
    case 'byRate':
      offers.sort((a,b) => b.rating - a.rating);
      break;
    default:
  }
  return offers;
};
