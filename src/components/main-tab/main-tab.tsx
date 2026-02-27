import {locationTown} from '../../store/locationSlice';
import {useDispatch} from 'react-redux';

interface IProps {
  city: string;
}

export const MainTab = ({city}:IProps) => {
  const dispatch = useDispatch();
  return(
    <li className="locations__item">
      <div className="locations__item-link tabs__item" onClick={() => dispatch(locationTown(city)) }>
        <span>{city}</span>
      </div>
    </li>
  );
};
