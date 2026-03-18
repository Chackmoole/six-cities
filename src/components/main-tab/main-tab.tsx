import {setActiveTown} from '../../store/locationSlice';
import {useDispatch} from 'react-redux';

interface IProps {
  city: string;
  activeTown : string;
}

export const MainTab = ({city, activeTown}:IProps) => {
  const dispatch = useDispatch();
  return(
    <li className="locations__item">
      <div className={city === activeTown ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} onClick={() => dispatch(setActiveTown(city)) }>
        <span>{city}</span>
      </div>
    </li>
  );
};
