import {useRef, useEffect} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import iconMarker from '../../assets/img/pin.svg';
import {useSelector} from 'react-redux';
import {getActiveTown, getCityCenter, getOffers} from '../../store/getters';

interface IProps {
  heightStyle: string;
}


export const Map = ({ heightStyle}: IProps) => {
  const mapContainer = useRef(null);
  const activeTown = useSelector(getActiveTown);
  const offers = useSelector(getOffers);
  const cityCentre = useSelector(getCityCenter);
  useEffect(() => {
    if (mapContainer.current && cityCentre) {
      const map = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [cityCentre.longitude, cityCentre.latitude],
        zoom: cityCentre.zoom,
      });
      if (offers){ offers.map((offer) => {
        const marker = document.createElement('div');
        marker.style.backgroundImage = `url(${iconMarker})`;
        marker.style.width = '27px';
        marker.style.height = '39px';
        marker.style.cursor = 'pointer';
        marker.id = `marker-${offer.id}`;

        new maplibregl.Marker({element: marker}).setLngLat([offer.location.longitude, offer.location.latitude]).addTo(map);
      });}


    }
  }, [activeTown, cityCentre, offers]);
  return (
    <div
      ref={mapContainer}
      style={{width: '100%', height: heightStyle}}
    />
  );
};
