import { Map } from '../map/map';
import {ILocation} from '../../types/types';

interface IProps {
  cityCentre: ILocation;
}

export const PropertyMap = ({cityCentre} : IProps) => (
  <section id="map" className="property__map map">
    <Map heightStyle={'579px'} cityCentre={cityCentre}></Map>
  </section>
);
