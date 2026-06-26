import { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import iconMarker from '../../assets/img/pin.svg';
import iconActiveMarker from '../../assets/img/pin-active.svg';
import { useSelector } from 'react-redux';
import {
  getActiveHoverOffer,
  getActiveTown,
} from '../../store/getters';
import {ILocation, IOffer} from '../../types/types';

interface IProps {
  heightStyle: string;
  cityCentre: ILocation;
  offers: IOffer[] | null;
}

export const Map = ({ heightStyle, cityCentre, offers }: IProps) => {
  const mapContainer = useRef(null);
  const activeTown = useSelector(getActiveTown);
  const activeHoverOffer = useSelector(getActiveHoverOffer);

  useEffect(() => {
    let map: maplibregl.Map | null = null;
    if (mapContainer.current && cityCentre) {
      map = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [cityCentre.longitude, cityCentre.latitude],
        zoom: cityCentre.zoom,
      });
      if (offers) {
        offers.forEach((offer) => {
          const marker = document.createElement('div');
          marker.style.backgroundImage = `url(${iconMarker})`;
          marker.style.width = '27px';
          marker.style.height = '39px';
          marker.style.cursor = 'pointer';
          activeHoverOffer === offer.id
            ? (marker.style.backgroundImage = `url(${iconActiveMarker})`)
            : (marker.style.backgroundImage = `url(${iconMarker})`);

          if (map) {
            new maplibregl.Marker({ element: marker })
              .setLngLat([offer.location.longitude, offer.location.latitude])
              .addTo(map);
          }
        }
        );
      }
    }
  }, [activeHoverOffer, activeTown, cityCentre, offers]);

  return (
    <div ref={mapContainer} style={{ width: '100%', height: heightStyle }} />
  );
};
