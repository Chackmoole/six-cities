import { Map } from '../map/map';
import {ILocation, IOffer} from '../../types/types';

interface IProps {
  cityCentre: ILocation;
  offers: IOffer[] | null;
}

export const PropertyMap = ({cityCentre, offers} : IProps) => (
  <section id="map" className="property__map map">
    <Map heightStyle={'579px'} cityCentre={cityCentre} offers={offers}></Map>
  </section>
);
