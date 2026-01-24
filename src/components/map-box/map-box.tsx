import {Map} from '../map/map';
import {OFFERS} from '../../mock/offers';

interface IProps {
  activeTab: string;
}

export const MapBox = ({activeTab}:IProps) => {
  const setCurrentCity = () => {
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


  return (
    <div className="cities__right-section">
      <section id='map' className="cities__map map">
        <Map city={setCurrentCity()}/>
      </section>
    </div>
  );

};

