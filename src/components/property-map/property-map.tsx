import {Map} from '../map/map';
import { setCurrentCity} from '../../util/util';

export const PropertyMap = () => (
  <section className="property__map map">
    <Map city={setCurrentCity('Amsterdam')} heightStyle={'579px'}></Map>
  </section>
);
