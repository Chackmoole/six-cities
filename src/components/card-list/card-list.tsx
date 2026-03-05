import {IOffer} from '../../types/types';
import {Card} from '../card/card';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {getOffers} from '../../store/getters';


export const CardList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer ] = useState<number | null>(null);
  const handleSetActiveOffer = (id : number) => {
    setActiveOffer(id);
  };
  const handleUnSetActiveOffer = () => {
    setActiveOffer(null);
  };
  const offers = useSelector(getOffers);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer:IOffer) => (<Card key={offer.id} offer={offer} handleSetActiveOffer={handleSetActiveOffer} handleUnSetActiveOffer={handleUnSetActiveOffer}/>))}
    </div>
  );
};
