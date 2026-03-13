import {useState} from 'react';
import {SortList} from '../sort-list/sort-list';
import {useSelector} from 'react-redux';
import {getSorting} from '../../store/getters';

export const Sort = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleRender = () => {
    setIsVisible(!isVisible);
  };

  let sortingText = '';
  switch (useSelector(getSorting)) {
    case 'popular':
      sortingText = 'Popular';
      break;
    case 'lowToHigh':
      sortingText = 'Price: low to high';
      break;
    case 'highToLow':
      sortingText = 'Price: high to low';
      break;
    case 'byRate':
      sortingText = 'Top rated first';
      break;
    default:
      sortingText = 'Popular';
  }
  return(
    <form className="places__sorting" action="#" method="get" onClick={handleRender}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortingText}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList isVisible={isVisible}/>
    </form>);};
