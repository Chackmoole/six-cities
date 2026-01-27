import {OFFERS} from '../mock/offers';

export const createLocation = (city: string) => OFFERS.filter((offer) => offer.city.name === city).map((offer) => offer.location);

export const conversionDate = (date: string) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);

  switch (month) {
    case '01': return `January ${year}`;
    case '02': return `February ${year}`;
    case '03': return `March ${year}`;
    case '04': return `April ${year}`;
    case '05': return `May ${year}`;
    case '06': return `June ${year}`;
    case '07': return `July ${year}`;
    case '08': return `August ${year}`;
    case '09': return `September ${year}`;
    case '10': return `October ${year}`;
    case '11': return `November ${year}`;
    case '12': return `December ${year}`;
    default: return 'last month';
  }
};
