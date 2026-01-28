import {Map} from '../map/map';
import {createLocation, setCurrentCity} from '../../util/util';

export const PropertyMap = () => (
  <section className="property__map map">
    <Map city={setCurrentCity('Amsterdam')} locations={createLocation('Amsterdam')} heightStyle={'579px'}></Map>
  </section>
);
