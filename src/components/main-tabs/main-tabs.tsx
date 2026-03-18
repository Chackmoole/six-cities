import {MainTab} from '../main-tab/main-tab';
import {CITIES} from '../../data/cities';
import {useSelector} from 'react-redux';
import {getActiveTown} from '../../store/getters';

export const MainTabs = () => {
  const activeTown = useSelector(getActiveTown);
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <MainTab key={city} city={city} activeTown={activeTown}/>
      ))}

    </ul>
  );
};
