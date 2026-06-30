import { Map } from '../map/map';
import {ILocation, IOffer} from '../../types/types';

interface IProps {
  cityCentre: ILocation;
  offers: IOffer[] | null;
  id: number;
}

export const PropertyMap = ({cityCentre, offers, id} : IProps) => (
  <section id="map" className="property__map map">
    <Map heightStyle={'579px'} cityCentre={cityCentre} offers={offers} id={id}></Map>
  </section>
);
