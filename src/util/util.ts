import {OFFERS} from '../mock/offers';

export const createLocation = (city: string) =>(
  OFFERS.filter((offer) => offer.city.name === city).map((offer) => offer.location)
);

