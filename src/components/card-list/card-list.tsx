import {IOffer} from '../../types/types';
import {Card} from '../card/card';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {getOffers, getSorting} from '../../store/getters';
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
  // useEffect(() =>{
  //   if(hoverOffer) {
  //     hoverOffer = document.getElementById(`${activeOffer}`);
  //     hoverOffer.style.backgroundImage = `url(${iconMarkerActive})`;
  //
  //   }
  // });
  const sortMethod = useSelector(getSorting);
  const offers = useSelector(getOffers);

  switch (sortMethod){
    case 'popular' :
    case ('lowToHigh'):
      offers.sort((a,b) => a.price - b.price);
      break;
    case ('highToLow'):
      offers.sort((a,b) => b.price - a.price);
      break;
    case 'byRate':
      offers.sort((a,b) => b.rating - a.rating);
      break;
    default:
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer:IOffer) => (<Card key={offer.id} offer={offer} handleSetActiveOffer={handleSetActiveOffer} handleUnSetActiveOffer={handleUnSetActiveOffer}/>))}
    </div>
  );
};
