import {useRef, useEffect} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import iconMarker from '../../assets/img/pin.svg';
import iconActiveMarker from '../../assets/img/pin-active.svg';
import {useSelector} from 'react-redux';
import {getActiveHoverOffer, getActiveTown, getCityCenter, getOffersByTown} from '../../store/getters';

interface IProps {
  heightStyle: string;
}

export const Map = ({ heightStyle}: IProps) => {
  const mapContainer = useRef(null);
  const activeTown = useSelector(getActiveTown);
  const offers = useSelector(getOffersByTown);
  const cityCentre = useSelector(getCityCenter);
  const activeHoverOffer = useSelector(getActiveHoverOffer);

  useEffect(() => {
    if (mapContainer.current && cityCentre) {
      const map = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [cityCentre.longitude, cityCentre.latitude],
        zoom: cityCentre.zoom,
      });
      if (offers){ offers.forEach((offer) => {
        const marker = document.createElement('div');
        marker.style.backgroundImage = `url(${iconMarker})`;
        marker.style.width = '27px';
        marker.style.height = '39px';
        marker.style.cursor = 'pointer';
        activeHoverOffer === offer.id ? marker.style.backgroundImage = `url(${iconActiveMarker})` : marker.style.backgroundImage = `url(${iconMarker})`;


        new maplibregl.Marker({element: marker}).setLngLat([offer.location.longitude, offer.location.latitude]).addTo(map);
      });}
    }
  }, [activeHoverOffer, activeTown, cityCentre, offers]);

  return (
    <div
      ref={mapContainer}
      style={{width: '100%', height: heightStyle}}
    />
  );
};
