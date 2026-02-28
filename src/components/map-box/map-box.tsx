import {Map} from '../map/map';
import {setCurrentCity} from '../../util/util';

interface IProps {
  activeTab: string;
}

export const MapBox = ({activeTab}:IProps) => (
  <div className="cities__right-section">
    <section id='map' className="cities__map map">
      <Map city={setCurrentCity(activeTab)} heightStyle={'1000px'}/>
    </section>
  </div>
);

