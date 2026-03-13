import {IOffer} from '../../types/types';
import {Card} from '../card/card';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {getCurrentOffers} from '../../store/getters';
// import iconMarkerActive from '../../assets/img/pin-active.svg';
// import iconMarker from '../../assets/img/pin.svg';


export const CardList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer ] = useState<string>('');
  // let hoverOffer = document.getElementById(`${activeOffer}`);
  const handleSetActiveOffer = (id : number) => {
    setActiveOffer(`marker-${id}`);
  };
  //TODO доделать смену маркера при наведении на карточку
  const handleUnSetActiveOffer = () => {
    setActiveOffer('');
    // if (hoverOffer) {
    //   hoverOffer.style.backgroundImage = `url(${iconMarker})`;
    // }
  //
  };

  const offers = useSelector(getCurrentOffers);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer:IOffer) => (<Card key={offer.id} offer={offer} handleSetActiveOffer={handleSetActiveOffer} handleUnSetActiveOffer={handleUnSetActiveOffer}/>))}
    </div>
  );
};
