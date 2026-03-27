import {useState} from 'react';
import {SortList} from '../sort-list/sort-list';
import {useSelector} from 'react-redux';
import {getCurrentOptionLabel} from '../../store/getters';

export const Sort = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleRender = () => {
    setIsVisible(!isVisible);
  };

  const currentSorting = useSelector(getCurrentOptionLabel);
  return(
    <form className="places__sorting" action="#" method="get" onClick={handleRender}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList isVisible={isVisible}/>
    </form>);};
