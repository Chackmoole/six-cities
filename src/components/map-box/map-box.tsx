import {Map} from '../map/map';

interface IProps {
  activeTab: string;
}

export const MapBox = ({activeTab}:IProps) => (
  <div className="cities__right-section">
    <section id='map' className="cities__map map">
      <Map heightStyle={'1000px'}/>
    </section>
  </div>
);

