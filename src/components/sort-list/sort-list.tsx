import {useDispatch, useSelector} from 'react-redux';
import {setSortingValue} from '../../store/locationSlice';
import {getSorting} from '../../store/getters';
interface IProps {
  isVisible: boolean;
}

export const SortList = ({isVisible}:IProps) => {
  const dispatch = useDispatch();
  const activeSorting = useSelector(getSorting);

  const sortingOptions = [
    {value: 'popular', label: 'Popular'},
    {value: 'lowToHigh', label: 'Price: low to high'},
    {value: 'highToLow', label: 'Price: high to low'},
    {value: 'byRate', label: 'Top rated first'},
  ];
  const handleOnChangeOption = (value:string) => dispatch(setSortingValue(value));

  return (
    <ul className={isVisible ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>

      {sortingOptions.map((option) => (
        <li
          className={activeSorting === option.value ? 'places__option places__option--active' : 'places__option'}
          tabIndex={0} onClick={() => handleOnChangeOption(option.value)}
          key={option.value}
        >{option.label}
        </li>
      ))}
    </ul>
  );
};
