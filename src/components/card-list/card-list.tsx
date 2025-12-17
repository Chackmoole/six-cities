import {IOffer} from '../../types/types';
import {Card} from '../card/card';
import {useState} from 'react';

interface IProps {
  offers: IOffer[];
}

export const CardList = ({offers}:IProps) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer ] = useState<number | null>(null);

  const handleSetActiveOffer = (id : number) => {
    setActiveOffer(id);
  };

  const handleUnSetActiveOffer = () => {
    setActiveOffer(null);
  };


  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer:IOffer) => (<Card key={offer.id} offer={offer} handleSetActiveOffer={handleSetActiveOffer} handleUnSetActiveOffer={handleUnSetActiveOffer}/>))}
    </div>
  );
};
