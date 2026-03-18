import {IOffer} from '../../types/types';
import {Card} from '../card/card';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentOffers} from '../../store/getters';
import {setActiveHoverOffer} from '../../store/locationSlice';

export const CardList = () => {
  const dispatch = useDispatch();
  const handleSetActiveOffer = (id : number) => {
    dispatch(setActiveHoverOffer(id));
  };
  const handleUnSetActiveOffer = (id: number) => {
    dispatch(setActiveHoverOffer(null));
  };

  const offers = useSelector(getCurrentOffers);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer:IOffer) => (<Card key={offer.id} offer={offer} handleSetActiveOffer={handleSetActiveOffer} handleUnSetActiveOffer={handleUnSetActiveOffer}/>))}
    </div>
  );
};
