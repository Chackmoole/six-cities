import {useDispatch, useSelector} from 'react-redux';
import {sortOffers} from '../../store/locationSlice';
import {getSorting} from '../../store/getters';
interface IProps {
  isVisible: boolean;
}

export const SortList = ({isVisible}:IProps) => {
  const dispatch = useDispatch();
  const activeSorting = useSelector(getSorting);

  const handlePopular = () => {
    dispatch(sortOffers('popular'));
  };
  const handleLowToHigh = () => {
    dispatch(sortOffers('lowToHigh'));
  };
  const handleHighToLow = () => {
    dispatch(sortOffers('highToLow'));

  };
  const handleByRate = () => {
    dispatch(sortOffers('byRate'));
  };

  return (
    <ul className={isVisible ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
      <li className={activeSorting === 'popular' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={handlePopular}>Popular</li>
      <li className={activeSorting === 'lowToHigh' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={handleLowToHigh}>Price: low to high</li>
      <li className={activeSorting === 'highToLow' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={handleHighToLow}>Price: high to low</li>
      <li className={activeSorting === 'byRate' ? 'places__option places__option--active' : 'places__option'} tabIndex={0} onClick={handleByRate}>Top rated first</li>
    </ul>
  );
};
