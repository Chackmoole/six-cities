import {OFFERS} from '../mock/offers';

export const createLocation = (city: string) => OFFERS.filter((offer) => offer.city.name === city).map((offer) => offer.location);

export const conversionDate = (date: string) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const commentDate = new Date(date);
  const year = commentDate.getFullYear();
  const month = commentDate.getMonth();

  return `${monthNames[month]} ${year}`;
};

export const setCurrentCity = (activeTab:string) => {
  switch(activeTab){
    case 'Paris':
      return OFFERS[0].city;
    case 'Dusseldorf':
      return OFFERS[1].city;
    case 'Amsterdam':
      return OFFERS[3].city;
    default: return OFFERS[0].city;
  }
};
