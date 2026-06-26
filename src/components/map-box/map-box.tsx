import { Map } from '../map/map';
import {ILocation} from '../../types/types';

interface IProps {
  cityCentre: ILocation;
}

export const MapBox = ({cityCentre} : IProps) => (
  <div className="cities__right-section">
    <section id="map" className="cities__map map">
      <Map heightStyle={'1000px'} cityCentre={cityCentre} />
    </section>
  </div>
);
