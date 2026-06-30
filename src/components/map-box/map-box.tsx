import { Map } from '../map/map';
import {ILocation, IOffer} from '../../types/types';

interface IProps {
  cityCentre: ILocation;
  offers: IOffer[] | null;
}

export const MapBox = ({cityCentre, offers} : IProps) => (
  <div className="cities__right-section">
    <section id="map" className="cities__map map">
      <Map heightStyle={'1000px'} cityCentre={cityCentre} offers={offers}/>
    </section>
  </div>
);
