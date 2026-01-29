import {MainTab} from '../main-tab/main-tab';
import {CITIES} from '../../data/cities';

interface IProps {
  handleChangeTown: (data:string) => void;
}

export const MainTabs = ({handleChangeTown}:IProps) => (
  <ul className="locations__list tabs__list">
    {CITIES.map((city) => (
      <MainTab key={city} handleChangeTown={() => handleChangeTown(city)} city={city}/>
    ))}

  </ul>
);
