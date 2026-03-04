import {useDispatch} from 'react-redux';
import { sortOffers} from '../../store/locationSlice';

interface IProps {
  isVisible: boolean;
}

export const SortList = ({isVisible}:IProps) => {
  const dispatch = useDispatch();

  return (
    <ul className={isVisible ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
      <li className="places__option places__option--active" tabIndex={0} onClick={(() => dispatch(sortOffers('popular')))}>Popular</li>
      <li className="places__option " tabIndex={0} onClick={(() => dispatch(sortOffers('lowToHigh')))}>Price: low to high</li>
      <li className="places__option" tabIndex={0} onClick={(() => dispatch(sortOffers('highToLow')))}>Price: high to low</li>
      <li className="places__option" tabIndex={0} onClick={(() => dispatch(sortOffers('byRate')))}>Top rated first</li>
    </ul>
  );
};
