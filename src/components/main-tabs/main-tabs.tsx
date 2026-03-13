import {MainTab} from '../main-tab/main-tab';
import {CITIES} from '../../data/cities';

export const MainTabs = () => (
  <ul className="locations__list tabs__list">
    {CITIES.map((city) => (
      <MainTab key={city} city={city}/>
    ))}

  </ul>
);
