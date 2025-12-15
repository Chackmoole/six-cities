import {IOffer} from '../../types/types';
import {Card} from '../card/card';

interface IProps {
  offers: IOffer[];
}

export const CardList = ({offers}:IProps) => (

  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer:IOffer) => (<Card key={offer.id} offer={offer}/>))}
  </div>
);
