import {Map} from '../map/map';

export const MapBox = () => (
  <div className="cities__right-section">
    <section id='map' className="cities__map map">
      <Map heightStyle={'1000px'}/>
    </section>
  </div>
);

