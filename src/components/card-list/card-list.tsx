import {IOffer} from '../../types/types';
import {Card} from '../card/card';
import {useDispatch} from 'react-redux';
import {setActiveHoverOffer} from '../../store/locationSlice';

interface IProps {
  offers: IOffer[];
}

export const CardList = ({offers}: IProps) => {
  const dispatch = useDispatch();
  const handleSetActiveOffer = (id : number) => {
    dispatch(setActiveHoverOffer(id));
  };
  const handleUnSetActiveOffer = (id: number) => {
    dispatch(setActiveHoverOffer(null));
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer:IOffer) => (<Card key={offer.id} offer={offer} handleSetActiveOffer={handleSetActiveOffer} handleUnSetActiveOffer={handleUnSetActiveOffer}/>))}
    </div>
  );
};
