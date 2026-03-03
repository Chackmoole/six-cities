import {useRef, useEffect} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import iconMarker from '../../assets/img/pin.svg';
import {useSelector} from 'react-redux';
import {getActiveTown, getCityCenter, getOfferLocations} from '../../store/getters';

interface IProps {
  heightStyle: string;
}


export const Map = ({ heightStyle}: IProps) => {
  const mapContainer = useRef(null);
  const activeTown = useSelector(getActiveTown);
  const locations = useSelector(getOfferLocations);
  const cityCentre = useSelector(getCityCenter);

  useEffect(() => {
    if (mapContainer.current && cityCentre) {
      const map = new maplibregl.Map({
        container: mapContainer.current,
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [cityCentre.longitude, cityCentre.latitude],
        zoom: cityCentre.zoom,
      });
      if (locations){ locations.map((location) => {
        const marker = document.createElement('div');
        marker.style.backgroundImage = `url(${iconMarker})`;
        marker.style.width = '27px';
        marker.style.height = '39px';
        marker.style.cursor = 'pointer';

        new maplibregl.Marker({element: marker}).setLngLat([location.longitude, location.latitude]).addTo(map);
      });}


    }
  }, [activeTown, cityCentre, locations]);

  return (
    <div
      ref={mapContainer}
      style={{width: '100%', height: heightStyle}}
    />
  );
};
