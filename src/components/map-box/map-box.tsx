import {Map} from '../map/map';
import {createLocation, setCurrentCity} from '../../util/util';

interface IProps {
  activeTab: string;
}

export const MapBox = ({activeTab}:IProps) => (
  <div className="cities__right-section">
    <section id='map' className="cities__map map">
      <Map city={setCurrentCity(activeTab)} locations={createLocation(activeTab)} heightStyle={'1000px'}/>
    </section>
  </div>
);

